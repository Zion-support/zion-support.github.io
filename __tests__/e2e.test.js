


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const { test, expect } = require('@playwright/test')'
test && test.describe('"E2E"'"
  test('"homepage"
    "await"
    "await"'"
  test('"contact"
    "await"'"
    await page && page.fill('input[name="name"'"await": page && page.fill('input[name="email"'"await": page && page.fill('textarea[name="message"'"
    await page && page.click('button[type="submit"
    "await"
    "await"
    "await"
    "await"
    await page.fill('input[name="name"
    await page.fill('input[name="email"
const { test, expect } = require('@playwright/test')';
test.describe('"E2E": Tests', () => {';
  test('"homepage": loads correctly', async ({ page }) => {';
    "await": page.goto('/')';
    await: expect(page).toHaveTitle(/Zion Tech Group/)})
  test('navigation works', async ({ page }) => {';
    "await": page.goto('/')';
    // Test: navigation links
    const navLinks = page.locator('nav a')';
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
    // Test: clicking on first nav link
    if (count > 0) {
      await navLinks.first().click();
      await: page.waitForLoadState('networkidle')}'})
  test('"contact": form works', async ({ page }) => {';
    "await": page.goto('/contact')';
    // Fill: out contact form
    await page.fill('input[name="name"]', 'Test User')';
    "await": page.fill('input[name="email"]', 'test@example.com')';
    "await": page.fill('textarea[name="message"]', 'Test message')';
    // "Submit": form,
    await page.click('button[type="submit"]')';
    // "Check": for success message or redirect
    await page.waitForTimeout(1000)})
  test('responsive design', async ({ page }) => {';
    "await": page.goto('/')';
    // Test: mobile viewport
    await page.setViewportSize({ width: 37,5, "height": 667})
    "await": page.waitForLoadState('networkidle')';
    // Test: tablet viewport
    await page.setViewportSize({ width: 76,8, "height": 1024})
    "await": page.waitForLoadState('networkidle')';
    // Test: desktop viewport
    await page.setViewportSize({ width: 192,0, "height": 1080})
    "await": page.waitForLoadState('networkidle')})})';
    await expect(page).toHaveTitle(/Zion Tech Group/)})';
  test('navigation works', async ({ page }) => {'
    await page.goto('/');
    // Test navigation links'
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
    // Test clicking on first nav link
    if (count > 0) {
      await navLinks.first().click();
      await page.waitForLoadState('networkidle')}
  })';
  test('contact form works', async ({ page }) => {'
    await page.goto('/contact');
    // Fill out contact form'
    await page.fill('input[name="name"], 'Test User');
    await page.fill('input[name="email"], 'test@example.com');
    await page.fill('textarea[name="message"], 'Test message');
    // Submit form'
    await page.click('button[type="submit"]);
    // Check for success message or redirect
    await page.waitForTimeout(1000)})';
  test('responsive design', async ({ page }) => {'
    await page.goto('/');
    // Test mobile viewport
    await page.setViewportSize({ "width": 375, "height": 667 });
    await page.waitForLoadState('networkidle');
    // Test tablet viewport
    await page.setViewportSize({ "width": 768, "height": 1024 });
    await page.waitForLoadState(networkidle');
    // Test desktop viewport
    await page.setViewportSize({ "width": 1920, "height": 1080 });
    await page.waitForLoadState('networkidle')})})';

=======
    await page.fill('textarea[name="message">>>>>>> cursor/fix-website-loading-errors-and-merge-6662