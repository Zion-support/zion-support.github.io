<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const { test, expect } = require('@playwright/test')'
test && test.describe('"E2E"
  test('"homepage"
    "await"
    "await"
  test('"contact"
    "await"
    await page && page.fill('input[name="name"
    "await": page && page.fill('input[name="email"
    "await": page && page.fill('textarea[name="message"
    await page && page.click('button[type="submit"
    "await"
<<<<<<< HEAD
    "await";
=======
    "await"
    "await"
<<<<<<< HEAD
    "await"'"
    await page && page.fill('input[name="name"'"
    await page && page.fill('input[name="email"'"
    await page && page.fill('textarea[name="message"'"
=======
    "await"

    await page.fill('input[name="name"
    await page.fill('input[name="email"

=======
>>>>>>> main
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
<<<<<<< HEAD


=======
    await page.fill('textarea[name="message"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const { test,expect } = require('@playwright/test')';; test.describe('E2E: Tests',() => {'; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/)}) test('navigation works',async ({ page }) => {'; await: page.goto('/')';; const navLinks = page.locator('nav a')';; const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await: page.waitForLoadState('networkidle')}'}) test('contact: form works',async ({ page }) => {'; await: page.goto('/contact')';; await page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await page.click('button[type="submit"]')';; await page.waitForTimeout(1000)}) test('responsive design',async ({ page }) => {'; await: page.goto('/')';; await page.setViewportSize({ width: 37,5,height: 667}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 76,8,height: 1024}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 192,0,height: 1080}) await: page.waitForLoadState('networkidle')})})'; await expect(page).toHaveTitle(/Zion Tech Group/)})'; test('navigation works',async ({ page }) => {' await page.goto('/'); const navLinks = page.locator('nav a'); const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await page.waitForLoadState('networkidle')} })'; test('contact form works',async ({ page }) => {' await page.goto('/contact'); await page.fill('input[name="name"],'Test User'); await page.fill('input[name="email"],'test@example.com'); await page.fill('textarea[name="message"],'Test message'); await page.click('button[type="submit"]); await page.waitForTimeout(1000)})'; test('responsive design',async ({ page }) => {' await page.goto('/'); await page.setViewportSize({ width: 375,height: 667 }); await page.waitForLoadState('networkidle'); await page.setViewportSize({ width: 768,height: 1024 }); await page.waitForLoadState(networkidle'); await page.setViewportSize({ width: 1920,height: 1080 }); await page.waitForLoadState('networkidle')})})';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
const { test,expect } = require('@playwright/test')';; test.describe('E2E: Tests',() => {'; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/)}) test('navigation works',async ({ page }) => {'; await: page.goto('/')';; const navLinks = page.locator('nav a')';; const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await: page.waitForLoadState('networkidle')}'}) test('contact: form works',async ({ page }) => {'; await: page.goto('/contact')';; await page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await page.click('button[type="submit"]')';; await page.waitForTimeout(1000)}) test('responsive design',async ({ page }) => {'; await: page.goto('/')';; await page.setViewportSize({ width: 37,5,height: 667}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 76,8,height: 1024}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 192,0,height: 1080}) await: page.waitForLoadState('networkidle')})})'; await expect(page).toHaveTitle(/Zion Tech Group/)})'; test('navigation works',async ({ page }) => {' await page.goto('/'); const navLinks = page.locator('nav a'); const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await page.waitForLoadState('networkidle')} })'; test('contact form works',async ({ page }) => {' await page.goto('/contact'); await page.fill('input[name="name"],'Test User'); await page.fill('input[name="email"],'test@example.com'); await page.fill('textarea[name="message"],'Test message'); await page.click('button[type="submit"]); await page.waitForTimeout(1000)})'; test('responsive design',async ({ page }) => {' await page.goto('/'); await page.setViewportSize({ width: 375,height: 667 }); await page.waitForLoadState('networkidle'); await page.setViewportSize({ width: 768,height: 1024 }); await page.waitForLoadState(networkidle'); await page.setViewportSize({ width: 1920,height: 1080 }); await page.waitForLoadState('networkidle')})})';
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
