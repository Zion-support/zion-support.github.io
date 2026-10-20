"use strict";
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const workflow=fs.readFileSync(path.resolve(__dirname,'../.github/workflows/ai-evidence-satellites-contract.yml'),'utf8');
const paths=[
 'scripts/complete-ai-evidence-fallbacks.cjs',
 'scripts/finalize-ai-evidence-accessibility.cjs',
 'scripts/test-ai-evidence-fallbacks.cjs',
 'scripts/test-ai-evidence-navigation.cjs',
 'scripts/test-ai-evidence-ci-contract.cjs',
 'scripts/guard-ai-evidence-review-paths.cjs',
 'scripts/test-ai-evidence-review-paths.cjs'
];
function validate(text){
 for(const p of paths)assert.ok(text.includes("      - '"+p+"'"),'Missing PR path: '+p);
 assert.match(text,/run: node --test scripts\/test-ai-evidence-\*\.cjs(?:\r?\n|$)/);
 assert.doesNotMatch(text,/\|\|\s*true|continue-on-error:\s*true/);
 assert.match(text,/permissions:\s*\n\s+contents: read/);
 assert.doesNotMatch(text,/pages:\s*write|contents:\s*write|id-token:\s*write/);
 assert.doesNotMatch(text,/^\s+(?:push|schedule):/m);
 for(const m of text.matchAll(/uses:\s+(actions\/[^\s]+)@([^\s]+)/g))assert.match(m[2],/^[a-f0-9]{40}$/);
}
test('offline workflow runs all evidence suites and covers fallback/navigation edits',()=>validate(workflow));
test('offline workflow guard rejects missing coverage, false-green and publication permissions',()=>{
 for(const p of paths)assert.throws(()=>validate(workflow.replace("      - '"+p+"'",'')),/Missing PR path/);
 assert.throws(()=>validate(workflow.replace('scripts/test-ai-evidence-*.cjs','scripts/test-ai-evidence-locales.cjs')));
 assert.throws(()=>validate(workflow+'\n# masked failure || true\n'));
 assert.throws(()=>validate(workflow+'\n  pages: write\n'));
 assert.throws(()=>validate(workflow+'\n  push:\n'));
});
