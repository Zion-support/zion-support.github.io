'use strict';

// Syntax guards deliberately flag sinks and uncaught await sites for review.
// They do not infer sanitization or claim whole-program promise analysis.
function unwrap(node) {
  while (node && ['ChainExpression', 'TSAsExpression', 'TSTypeAssertion',
    'TSNonNullExpression', 'TSSatisfiesExpression'].includes(node.type)) {
    node = node.expression;
  }
  return node;
}

function propertyName(node) {
  if (!node || node.type !== 'MemberExpression') return undefined;
  if (!node.computed && node.property.type === 'Identifier') return node.property.name;
  if (node.computed && node.property.type === 'Literal') return node.property.value;
  if (node.computed && node.property.type === 'TemplateLiteral'
    && node.property.expressions.length === 0) return node.property.quasis[0].value.cooked;
  return undefined;
}

function isFunction(node) {
  return node && ['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression'].includes(node.type);
}

function caughtInThisFunction(node) {
  let child = node;
  for (let parent = node.parent; parent && !isFunction(parent); parent = parent.parent) {
    // A catch only protects its try block, not its own catch/finally blocks.
    if (parent.type === 'TryStatement' && parent.handler && parent.block === child) return true;
    child = parent;
  }
  return false;
}

function hasHandler(node) {
  node = unwrap(node);
  return Boolean(node && !(node.type === 'Literal')
    && !(node.type === 'Identifier' && node.name === 'undefined')
    && !(node.type === 'UnaryExpression' && node.operator === 'void'));
}

function terminalCatch(node) {
  node = unwrap(node);
  if (!node || node.type !== 'CallExpression') return false;
  const name = propertyName(unwrap(node.callee));
  return (name === 'catch' && hasHandler(node.arguments[0]))
    || (name === 'then' && hasHandler(node.arguments[1]));
}

function variableFor(context, node) {
  let scope = context.sourceCode.getScope(node);
  while (scope) {
    if (scope.set.has(node.name)) return scope.set.get(node.name);
    scope = scope.upper;
  }
  return undefined;
}

function visiblePromise(context, node) {
  node = unwrap(node);
  if (!node) return false;
  if (node.type === 'NewExpression' && node.callee.type === 'Identifier'
    && node.callee.name === 'Promise') {
    const variable = variableFor(context, node.callee);
    return !variable || variable.defs.length === 0;
  }
  if (node.type !== 'CallExpression') return false;
  const callee = unwrap(node.callee);
  const name = propertyName(callee);
  if (['then', 'catch', 'finally'].includes(name)) return true;
  if (callee.type === 'MemberExpression' && callee.object.type === 'Identifier'
    && callee.object.name === 'Promise' && ['all', 'allSettled', 'any', 'race', 'resolve', 'reject'].includes(name)) {
    const variable = variableFor(context, callee.object);
    return !variable || variable.defs.length === 0;
  }
  if (callee.type !== 'Identifier') return false;
  const variable = variableFor(context, callee);
  if (callee.name === 'fetch' && (!variable || variable.defs.length === 0)) return true;
  return Boolean(variable && variable.defs.some((definition) => {
    const value = definition.node.type === 'VariableDeclarator' ? unwrap(definition.node.init) : definition.node;
    return isFunction(value) && value.async;
  }));
}

const noInnerHtml = {
  meta: {
    type: 'problem',
    docs: { description: 'Flag direct HTML sinks for an explicit sanitization review.' },
    schema: [],
    messages: { sink: 'Direct HTML sink requires an explicit sanitization review. Prefer textContent or rendered JSX; any scoped suppression must document the reviewed data boundary.' },
  },
  create(context) {
    return {
      AssignmentExpression(node) {
        if (['innerHTML', 'outerHTML'].includes(propertyName(unwrap(node.left)))) {
          context.report({ node, messageId: 'sink' });
        }
      },
      CallExpression(node) {
        if (propertyName(unwrap(node.callee)) === 'insertAdjacentHTML') {
          context.report({ node, messageId: 'sink' });
        }
      },
      JSXAttribute(node) {
        if (node.name.type === 'JSXIdentifier' && node.name.name === 'dangerouslySetInnerHTML') {
          context.report({ node, messageId: 'sink' });
        }
      },
    };
  },
};

const requireAsyncTryCatch = {
  meta: {
    type: 'problem',
    docs: { description: 'Require local catch handling for await and visible floating promise expressions.' },
    schema: [],
    messages: {
      awaitCatch: 'Handle this awaited rejection with try/catch in the same function or a terminal .catch(handler)/.then(onSuccess, onError).',
      floating: 'Handle or return this visible promise. A surrounding synchronous try/catch and the void operator do not handle asynchronous rejection.',
    },
  },
  create(context) {
    return {
      AwaitExpression(node) {
        if (!caughtInThisFunction(node) && !terminalCatch(node.argument)) {
          context.report({ node, messageId: 'awaitCatch' });
        }
      },
      ForOfStatement(node) {
        if (node.await && !caughtInThisFunction(node)) {
          context.report({ node, messageId: 'awaitCatch' });
        }
      },
      ExpressionStatement(node) {
        let expression = unwrap(node.expression);
        if (expression.type === 'UnaryExpression' && expression.operator === 'void') {
          expression = unwrap(expression.argument);
        }
        if (visiblePromise(context, expression) && !terminalCatch(expression)) {
          context.report({ node, messageId: 'floating' });
        }
      },
    };
  },
};

module.exports = {
  meta: { name: 'zion-autonomous', version: '1.0.0' },
  rules: { 'no-inner-html': noInnerHtml, 'require-async-try-catch': requireAsyncTryCatch },
};
