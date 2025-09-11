
function runNode(relPath, args = []) {
const path = require ('path');
const { spawn_sync } = require ('child_process');
;
/**
 * run_node - Function description
 */
function run_node() {
  const abs = path.resolve (__dirname, '..', '..', rel_path);
  return spawn_sync ('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
;
exports.config = {
  schedule: '*/15 * * * *'
}
  const abs = path && path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
exports && exports.config = {
  schedule: '*/15 * * * *',
  const abs = path.resolve(__dirname, '....', relPath),
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })