// Storybook addon/tooling validity guard.
// Regression guard for the 2026-11-05 fix(storybook): align addons to stable 8.x
// and test-runner to 8.x-compatible 0.19.0. Prevents an impossible
// "@storybook/addon-essentials ^10.3.6" (non-existent stable) from re-entering.
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const devDeps = pkg.devDependencies || {};

function stableMajor(spec, major) {
  const v = String(spec || '').trim().replace(/^[\^~]/, '');
  const parts = v.split('-')[0].split('.').map(Number);
  return parts.length === 3 && parts[0] === major && Number.isInteger(parts[1]) && Number.isInteger(parts[2]);
}

test('package.json: @storybook/addon-essentials is stable 8.x (no impossible ^10.3.6)', () => {
  const a = devDeps['@storybook/addon-essentials'];
  expect(a).toBeDefined();
  expect(a).toMatch(/^8\./);
  expect(a).not.toMatch(/\^10\.3\.6/);
  expect(stableMajor(a, 8)).toBe(true);
});

test('package.json: @storybook/react-vite is stable 8.x', () => {
  expect(devDeps['@storybook/react-vite']).toBeDefined();
  expect(devDeps['@storybook/react-vite']).toMatch(/^8\./);
});

test('package.json: @storybook/test-runner is 8.x-compatible (stable 0.19.x), not 10.x/11.x', () => {
  const tr = devDeps['@storybook/test-runner'];
  expect(tr).toBeDefined();
  expect(tr).toMatch(/^0\.19\.0|0\.\d+\.\d+/);
  expect(tr).not.toMatch(/\^10\./);
  expect(tr).not.toMatch(/\^11\./);
});

test('package.json: addon-links and addon-onboarding are also stable 8.x', () => {
  expect(devDeps['@storybook/addon-links']).toMatch(/^8\./);
  expect(devDeps['@storybook/addon-onboarding']).toMatch(/^8\./);
  expect(devDeps['@storybook/cli']).toMatch(/^8\./);
});
