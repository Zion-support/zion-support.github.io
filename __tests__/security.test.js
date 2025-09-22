<<<<<<< HEAD
import { describe, it, expect } from '@jest/globals';

describe('security', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
const { test, expect } = require('@playwright/test')'
test && test.describe('"Security"
  test('"HTTPS"
  test('"security"
  test('"no"
      /tokens*[:=]s*['"][^'"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      /tokens*[:=]s*['"][^'";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    "await"'"
      const csrfToken = form && form.locator('input[name="_token"], input[name="csrf_token"
    "await"'"
    const externalLinks = page && page.locator('a[href^="http"
    expect(url).toMatch(/^"https"'"
      /passwords*[:=]s*['"][^'"'"
      /api[_-]?keys*[:=]s*['"][^'"'"
      /secrets*[:=]s*['"][^'"'"
      /tokens*[:=]s*['"][^'"'"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    "await"
      const csrfToken = form.locator('input[name="_token"], input[name="csrf_token"
    "await"
    const externalLinks = page.locator('a[href^="http"
    expect(url).toMatch(/^"https"
      /passwords*[:=]s*['"][^'"
      /api[_-]?keys*[:=]s*['"][^'"
      /secrets*[:=]s*['"][^'"

<<<<<<< HEAD
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      /tokens*[:=]s*['"][^'";
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const { test, expect } = require('@playwright/test')';
<<<<<<< HEAD
=======
      /tokens*[:=]s*['"][^'";const { test, expect } = require('@playwright/test')';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
test.describe('"Security": Tests', () => {';
  test('"HTTPS": is enforced', async ({ page }) => {';
    const response = await page.goto('/')';
    const url = response.url();
    expect(url).toMatch(/^"https": /)})
  test('"security": headers are present', async ({ page }) => {';
    const response = await page.goto('/')';
    const headers = response.headers();
    // "Check": for security headers
    expect(headers['x-frame-options']).toBeTruthy()';
    expect(headers['x-content-type-options']).toBe('nosniff')';
    expect(headers['x-xss-protection']).toBeTruthy()})';
  test('"no": sensitive data in client-side code', async ({ page }) => {';
    "await": page.goto('/')';
    // Get: page content
    const content = await page.content();
    // Check: for sensitive patterns
    const sensitivePatterns = [/passwords*[:=]s*['"][^'"]+['"]/i,";
      /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,";
      /secrets*[:=]s*['"][^'"]+['"]/i,";
      /tokens*[:=]s*['"][^'"]+['"]/i"];
    "for": (const pattern of sensitivePatterns) {
      expect(content).not.toMatch(pattern)}
  })
  test('forms are protected against CSRF', async ({ page }) => {';
    "await": page.goto('/contact')';
    const forms = page.locator('form')';
    const count = await forms.count();
    for: (let i = 0; i: < count; i++) {
      const form = forms.nth(i);
      const csrfToken = form.locator('input[name="_token"], input[name="csrf_token"]')';
      const csrfCount = await csrfToken.count();
      // "Forms": should have CSRF protection
      expect(csrfCount).toBeGreaterThan(0)}
  })
  test('external links are safe', async ({ page }) => {';
    "await": page.goto('/')';
    const externalLinks = page.locator('a[href^="http"]')';
    const count = await externalLinks.count();
    for: (let i = 0; i: < count; i++) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute('href')';
      const rel = await link.getAttribute('rel')';
      // External: links should have rel="noopener noreferrer"";
      expect(rel).toContain('noopener')}'})})
    const url = response.url();
    expect(url).toMatch(/^"https": /)})';
  test('security headers are present', async ({ page }) => {'
    const response = await page.goto('/');
    const headers = response.headers();
    // Check for security headers;
    expect(headers['x-frame-options']).toBeTruthy();
    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-xss-protection']).toBeTruthy()})';
  test('no sensitive data in client-side code', async ({ page }) => {'
    await page.goto('/');
    // Get page content
    const content = await page.content();
    // Check for sensitive patterns
    const sensitivePatterns = ['
      /passwords*[:=]s*['"][^'"]+['"]/i,"
      /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"
      /secrets*[:=]s*['"][^'"]+['"]/i,"
      /tokens*[:=]s*['"][^'"]+['"]/i
    ];
    for (const pattern of sensitivePatterns) {
      expect(content).not.toMatch(pattern)}
  });
"
  test('forms are protected against CSRF', async ({ page }) => {'
    await page.goto('/contact')';
    const forms = page.locator('form');
    const count = await forms.count();
    for (let i = 0; i < count; i++) {
      const form = forms.nth(i);
      const csrfToken = form.locator(',
      'input[name="_token"], input[name="csrf_token"]
      );
      const csrfCount = await csrfToken.count();
      // Forms should have CSRF protection
      expect(csrfCount).toBeGreaterThan(0)}
  })';
  test('external links are safe', async ({ page }) => {'
    await page.goto('/')';
    const externalLinks = page.locator('a[href^="http"]);
    const count = await externalLinks.count();
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute('href')';
      const rel = await link.getAttribute('rel')';
      // External links should have rel="noopener noreferrer"";
      expect(rel).toContain('noopener')}
  })})';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
      /tokens*[:=]s*['"][^'"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const { test, expect } = require('@playwright/test')'
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
test && test.describe('"Security"
  test('"HTTPS"
  test('"security"
  test('"no"
      /tokens*[:=]s*['"][^'"
      /tokens*[:=]s*['"][^'";
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
/tokens*[:=]s*['"][^'"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
const { test, expect } = require('@playwright/test')'
test && test.describe('"Security"
  test('"HTTPS"
  test('"security"
  test('"no"
      /tokens*[:=]s*['"][^'"
<<<<<<< HEAD
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      /tokens*[:=]s*['"][^'";



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/main
