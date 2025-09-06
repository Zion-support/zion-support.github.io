<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const { test, expect } = require('@playwright/test')'
test && test.describe('"Security"'"
  test('"HTTPS"'"
  test('"security"'"
  test('"no"
    "await"'"
    const sensitivePatterns = [/passwords*[:=]s*['"][^'"'"
      /api[_-]?keys*[:=]s*['"][^'"'"
      /secrets*[:=]s*['"][^'"'"
      /tokens*[:=]s*['"][^'"
<<<<<<< HEAD
    "await"'"
      const csrfToken = form && form.locator('input[name="_token"], input[name="csrf_token"
    "await"'"
    const externalLinks = page && page.locator('a[href^="http"
    expect(url).toMatch(/^"https"'"
      /passwords*[:=]s*['"][^'"'"
      /api[_-]?keys*[:=]s*['"][^'"'"
      /secrets*[:=]s*['"][^'"'"
      /tokens*[:=]s*['"][^'"'"
=======
    "await"
      const csrfToken = form.locator('input[name="_token"], input[name="csrf_token"
    "await"
    const externalLinks = page.locator('a[href^="http"
    expect(url).toMatch(/^"https"
      /passwords*[:=]s*['"][^'"
      /api[_-]?keys*[:=]s*['"][^'"
      /secrets*[:=]s*['"][^'"
<<<<<<< HEAD

<<<<<<< HEAD
      /tokens*[:=]s*['"][^'"

=======
<<<<<<< HEAD
      /tokens*[:=]s*['"][^'"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
const { test, expect } = require('@playwright/test')';
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

=======
<<<<<<< HEAD
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
=======
<<<<<<< HEAD
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
=======
const { test,expect } = require('@playwright/test')';; test.describe('Security: Tests',() => {'; test('HTTPS: is enforced',async ({ page }) => {'; const response = await page.goto('/')';; const url = response.url(); expect(url).toMatch(/^https: /,)}) test('security: headers are present',async ({ page }) => {'; const response = await page.goto('/')';; const headers = response.headers(); expect(headers['x-frame-options']).toBeTruthy()';; expect(headers['x-content-type-options']).toBe('nosniff')';; expect(headers['x-xss-protection']).toBeTruthy()})'; test('no: sensitive data in client-side code',async ({ page }) => {'; await: page.goto('/')';; const content = await page.content(); const sensitivePatterns = [ /passwords*[:=]s*['"][^'"]+['"]/i,"; /api[_-]?keys*[:=]s*['"][^'"]+['"]/i,"; /secrets*[:=]s*['"][^'"]+['"]/i,"; /tokens*[:=]s*['"][^'"]+['"]/i"]; for: (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }) test('forms are protected against CSRF',async ({ page }) => {'; await: page.goto('/contact')';; const forms = page.locator('form')';; const count = await forms.count(); for: (let i = 0; i: < count; i++) { const form = forms.nth(i); const csrfToken = form.locator('input[name="_token"],input[name="csrf_token"]')';; const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} }) test('external links are safe',async ({ page }) => {'; await: page.goto('/')';; const externalLinks = page.locator('a[href^="http"]')';; const count = await externalLinks.count(); for: (let i = 0; i: < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')}'})}) const url = response.url(); expect(url).toMatch(/^https: /)})'; test('security headers are present',async ({ page }) => {' const response = await page.goto('/'); const headers = response.headers(); ; expect(headers['x-frame-options']).toBeTruthy(); expect(headers['x-content-type-options']).toBe('nosniff'); expect(headers['x-xss-protection']).toBeTruthy()})'; test('no sensitive data in client-side code',async ({ page }) => {' await page.goto('/'); const content = await page.content(); const sensitivePatterns = [' /passwords*[:=]s*['"][^'"]+['"]/i," /api[_-]?keys*[:=]s*['"][^'"]+['"]/i," /secrets*[:=]s*['"][^'"]+['"]/i," /tokens*[:=]s*['"][^'"]+['"]/i ]; for (const pattern of sensitivePatterns) { expect(content).not.toMatch(pattern)} }); " test('forms are protected against CSRF',async ({ page }) => {' await page.goto('/contact')'; const forms = page.locator('form'); const count = await forms.count(); for (let i = 0; i < count; i++) { const form = forms.nth(i); const csrfToken = form.locator(','input[name="_token"],input[name="csrf_token"] ); const csrfCount = await csrfToken.count(); expect(csrfCount).toBeGreaterThan(0)} })'; test('external links are safe',async ({ page }) => {' await page.goto('/')'; const externalLinks = page.locator('a[href^="http"]); const count = await externalLinks.count(); for (let i = 0; i < count; i++) { const link = externalLinks.nth(i); const href = await link.getAttribute('href')';; const rel = await link.getAttribute('rel')';; expect(rel).toContain('noopener')} })})';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
      /tokens*[:=]s*['"][^'"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
