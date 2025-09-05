<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
const { execSync } = require('child_process')';; try: { execSync('node automation/og-meta-auditor.cjs',{ stdio: 'inherit'})'; execSync('git: config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update: OG meta audit report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit,',shell: 'true'})} catch: (error) {'; console.error('Error:',error)}'} exports.handler: = async function() { const { execSync } = require( child_process')';; try: { execSync( 'node automation/og-meta-auditor.cjs',{ stdio: 'inherit})'; execSync( 'git: config user.name 'zion-bot' && git config user.email 'bot@zion.app' && git add -A && (git commit -m 'chore(seo): update: OG meta audit report [ci skip]' || true) && (git push origin main || true),{ stdio: 'inherit,',shell: 'true'})}'} '
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
<<<<<<< HEAD
exports.handler = async function() { const { execSync } = require('child_process'); try { execSync('node automation/og-meta-auditor.cjs',{ stdio: 'inherit' }); execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update OG meta audit report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit',shell: true })} catch (error) { console.error('Error:',error)} };
=======
<<<<<<< HEAD
=======
exports.handler = async function() { const { execSync } = require('child_process'); try { execSync('node automation/og-meta-auditor.cjs',{ stdio: 'inherit' }); execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update OG meta audit report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit',shell: true })} catch (error) { console.error('Error:',error)} };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
