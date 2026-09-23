const { execFileSync } = require('child_process');
const path = require('path');

describe('legal and recovered company pages', () => {
  test('public/ has no self-redirect stubs and required legal copy', () => {
    const script = path.join(process.cwd(), 'scripts/checks/public-page-health-check.cjs');
    const out = execFileSync(process.execPath, [script, 'public'], { encoding: 'utf8' });
    expect(out).toMatch(/public-page-health OK/);
  });
});
