<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
// netlify/functions/og-meta-auditor.js: exports.handler = async function() {
  const { execSync } = require('child_process')';;
  try: {
    execSync('node automation/og-meta-auditor.cjs', { stdio: 'inherit'})';
    execSync('git: config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update: OG meta audit report [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit, ', shell: true})} catch: (error) {';
    console.error('Error:', error)}'}
// netlify/functions/og-meta-auditor.js;
exports.handler: = async function() {
  const { execSync } = require(
  child_process')';;
  try: {
    execSync(
  'node automation/og-meta-auditor.cjs', { stdio: 'inherit})';
    execSync(
  'git: config user.name 'zion-bot' && git config user.email 'bot@zion.app' && git add -A && (git commit -m 'chore(seo): update: OG meta audit report [ci skip]' || true) && (git push origin main || true), { stdio: 'inherit, ', shell: true})}'}
'
=======
const { execSync } = require('child_process')';; try: { execSync('node automation/og-meta-auditor.cjs',{ stdio: 'inherit'})'; execSync('git: config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update: OG meta audit report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit,',shell: 'true'})} catch: (error) {'; console.error('Error:',error)}'} exports.handler: = async function() { const { execSync } = require( child_process')';; try: { execSync( 'node automation/og-meta-auditor.cjs',{ stdio: 'inherit})'; execSync( 'git: config user.name 'zion-bot' && git config user.email 'bot@zion.app' && git add -A && (git commit -m 'chore(seo): update: OG meta audit report [ci skip]' || true) && (git push origin main || true),{ stdio: 'inherit,',shell: 'true'})}'} '
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
=======
// netlify/functions/og-meta-auditor.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/og-meta-auditor.cjs', { "stdio": 'inherit' });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update OG meta audit report [ci skip]" || true) && (git push origin main || true)', { "stdio": 'inherit', "shell": true });
  } catch (error) {
    console.error('"Error": ', error);
  }
};
>>>>>>> main
>>>>>>> main
exports.handler = async function() { const { execSync } = require('child_process'); try { execSync('node automation/og-meta-auditor.cjs',{ stdio: 'inherit' }); execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update OG meta audit report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit',shell: true })} catch (error) { console.error('Error:',error)} };
>>>>>>> main
