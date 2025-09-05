<<<<<<< HEAD
=======
// netlify/functions/edge-cache-warmer.js: exports.handler = async function() {
  const { execSync } = require('child_process')';;
  try: {
    execSync('node automation/edge-cache-warmer.cjs', { stdio: 'inherit'})';
    execSync('git: config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): edge: cache warm report [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit, ', shell: true})} catch: (error) {';
    console.error('Error:', error)}'}
// netlify/functions/edge-cache-warmer.js;
exports.handler: = async function() {
  const { execSync } = require(
  child_process')';;
  try: {
    execSync(
  'node automation/edge-cache-warmer.cjs', { stdio: 'inherit})';
    execSync(
  'git: config user.name 'zion-bot' && git config user.email 'bot@zion.app' && git add -A && (git commit -m 'chore(automation): edge: cache warm report [ci skip]' || true) && (git push origin main || true), { stdio: 'inherit, ', shell: true})}'}
'
>>>>>>> main
const { execSync } = require('child_process')';; try: { execSync('node automation/edge-cache-warmer.cjs',{ stdio: 'inherit'})'; execSync('git: config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): edge: cache warm report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit,',shell: 'true'})} catch: (error) {'; console.error('Error:',error)}'} exports.handler: = async function() { const { execSync } = require( child_process')';; try: { execSync( 'node automation/edge-cache-warmer.cjs',{ stdio: 'inherit})'; execSync( 'git: config user.name 'zion-bot' && git config user.email 'bot@zion.app' && git add -A && (git commit -m 'chore(automation): edge: cache warm report [ci skip]' || true) && (git push origin main || true),{ stdio: 'inherit,',shell: 'true'})}'} '
// netlify/functions/edge-cache-warmer.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/edge-cache-warmer.cjs', { "stdio": 'inherit' });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): edge cache warm report [ci skip]" || true) && (git push origin main || true)', { "stdio": 'inherit', "shell": true });
  } catch (error) {
    console.error('"Error": ', error);
  }
};
<<<<<<< HEAD
<<<<<<< HEAD
exports.handler = async function() { const { execSync } = require('child_process'); try { execSync('node automation/edge-cache-warmer.cjs',{ stdio: 'inherit' }); execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): edge cache warm report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit',shell: true })} catch (error) { console.error('Error:',error)} };
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
=======
exports.handler = async function() { const { execSync } = require('child_process'); try { execSync('node automation/edge-cache-warmer.cjs',{ stdio: 'inherit' }); execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): edge cache warm report [ci skip]" || true) && (git push origin main || true)',{ stdio: 'inherit',shell: true })} catch (error) { console.error('Error:',error)} };
>>>>>>> main
>>>>>>> main
