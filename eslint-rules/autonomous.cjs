'use strict';

// The legacy configuration named these guards but never registered implementations.
// Keep their intended policy visible and fail on unreviewed patterns. These are
// syntax checks, not a sanitizer or proof that every Promise rejection is handled.
function propertyName(node) {
  if (!node || node.type !== 'MemberExpression') return null;
  if (!node.computed && node.property.type === 'Identifier') return node.property.name;
  if (node.computed && node.property.type === 'Literal') return node.property.value;
  return null;
}

function innerHtmlTargets(node, report) {
  if (!node) return;
  if (propertyName(node) === 'innerHTML') {
    report(node);
  } else if (node.type === 'ObjectPattern') {
    for (const property of node.properties) {
      innerHtmlTargets(property.type === 'RestElement' ? property.argument : property.value, report);
    }
  } else if (node.type === 'ArrayPattern') {
    for (const element of node.elements) innerHtmlTargets(element, report);
  } else if (node.type === 'AssignmentPattern') {
    innerHtmlTargets(node.left, report);
  } else if (node.type === 'RestElement') {
    innerHtmlTargets(node.argument, report);
  }
}

function hasHandlerArgument(node) {
  return Boolean(node && (
    node.type === 'ArrowFunctionExpression' ||
    node.type === 'FunctionExpression' ||
    node.type === 'Identifier' && node.name !== 'undefined' ||
    node.type === 'MemberExpression'
  ));
}

function hasRejectionHandler(expression) {
  if (!expression) return false;
  if (expression.type === 'AwaitExpression') return hasRejectionHandler(expression.argument);
  if (expression.type !== 'CallExpression') return false;
  const method = propertyName(expression.callee);
  return method === 'catch' && hasHandlerArgument(expression.arguments[0]) ||
    method === 'then' && hasHandlerArgument(expression.arguments[1]);
}

function hasWholeFunctionHandler(node) {
  if (node.body.type !== 'BlockStatement') return hasRejectionHandler(node.body);
  const statements = node.body.body;
  // A catch in a nested function or unrelated block cannot protect this function.
  if (statements.length !== 1) return false;
  const statement = statements[0];
  if (statement.type === 'TryStatement') {
    return Boolean(statement.handler);
  }
  if (statement.type === 'ReturnStatement') {
    return hasRejectionHandler(statement.argument);
  }
  return statement.type === 'ExpressionStatement' &&
    statement.expression.type === 'AwaitExpression' &&
    hasRejectionHandler(statement.expression);
}

module.exports = {
  rules: {
    'no-inner-html': {
      meta: {
        type: 'problem',
        docs: { description: 'Require explicit review of every innerHTML write.' },
        schema: [],
        messages: {
          review: 'innerHTML writes require explicit sanitization review; use textContent or a reviewed DOM construction path.'
        }
      },
      create(context) {
        const report = (node) => context.report({ node, messageId: 'review' });
        return {
          AssignmentExpression(node) { innerHtmlTargets(node.left, report); },
          UpdateExpression(node) { innerHtmlTargets(node.argument, report); },
          ForInStatement(node) { innerHtmlTargets(node.left, report); },
          ForOfStatement(node) { innerHtmlTargets(node.left, report); }
        };
      }
    },
    'require-async-try-catch': {
      meta: {
        type: 'problem',
        docs: { description: 'Require an explicit error-handling boundary for async functions.' },
        schema: [],
        messages: {
          boundary: 'Wrap the async function body in try/catch, or return/await a promise with an explicit rejection handler.'
        }
      },
      create(context) {
        function check(node) {
          if (node.async && !hasWholeFunctionHandler(node)) {
            context.report({ node, messageId: 'boundary' });
          }
        }
        return {
          FunctionDeclaration: check,
          FunctionExpression: check,
          ArrowFunctionExpression: check
        };
      }
    }
  }
};
