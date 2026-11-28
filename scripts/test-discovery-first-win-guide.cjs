'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = process.argv[2] || 'public';
const guides = [
  ['en', 'apps/', '/en/discovery/'],
  ['pt-BR', 'pt/apps/', '/discovery/'],
  ['es', 'es/apps/', '/es/discovery/'],
  ['fr', 'fr/apps/', '/fr/discovery/'],
  ['de', 'de/apps/', '/de/discovery/'],
];
const staleCopy = /form in Portuguese|formulario en portugués|formulaire en portugais|Formular auf Portugiesisch/i;

for (const [lang, prefix, route] of guides) {
  test(`First Win guide uses its ${lang} Discovery questionnaire`, () => {
    const guide = fs.readFileSync(path.join(root, prefix, 'discovery-first-win-guide.html'), 'utf8');
    assert.match(guide, new RegExp(`<html\\b[^>]*\\slang="${lang}"`));
    assert.doesNotMatch(guide, staleCopy);
    assert.doesNotMatch(guide, /<(?:form|script)\b/i, 'The guide must remain read-only');

    const linkPattern = /<a\b[^>]*\bhref="(\/(?:[a-z]{2}\/)?discovery\/#dq)"[^>]*>/gi;
    const links = html => [...html.matchAll(linkPattern)].map(match => match[1]);
    const footer = guide.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0];
    assert.ok(footer, 'Guide has a footer CTA');
    assert.deepEqual(links(guide), [route + '#dq', route + '#dq']);
    assert.deepEqual(links(footer), [route + '#dq']);

    const questionnaire = fs.readFileSync(path.join(root, route.slice(1), 'index.html'), 'utf8');
    assert.match(questionnaire, new RegExp(`<html\\b[^>]*\\slang="${lang}"`));
    assert.equal((questionnaire.match(/<form\b[^>]*\bid="dq"/gi) || []).length, 1,
      'CTA must resolve to a single real questionnaire in the same language');
  });
}
