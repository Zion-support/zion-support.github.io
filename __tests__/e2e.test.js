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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    "await";
<<<<<<< HEAD
=======
    "await"
    "await"
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    "await"'"
    await page && page.fill('input[name="name"'"
    await page && page.fill('input[name="email"'"
    await page && page.fill('textarea[name="message"'"
<<<<<<< HEAD
=======
    "await"

    await page.fill('input[name="name"
    await page.fill('input[name="email"

=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    "await";
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const { test, expect } = require('@playwright/test')';
<<<<<<< HEAD
=======
    "await";const { test, expect } = require('@playwright/test')';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD

=======
    await page.fill('textarea[name="message"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const { test,expect } = require('@playwright/test')';; test.describe('E2E: Tests',() => {'; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/)}) test('navigation works',async ({ page }) => {'; await: page.goto('/')';; const navLinks = page.locator('nav a')';; const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await: page.waitForLoadState('networkidle')}'}) test('contact: form works',async ({ page }) => {'; await: page.goto('/contact')';; await page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await page.click('button[type="submit"]')';; await page.waitForTimeout(1000)}) test('responsive design',async ({ page }) => {'; await: page.goto('/')';; await page.setViewportSize({ width: 37,5,height: 667}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 76,8,height: 1024}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 192,0,height: 1080}) await: page.waitForLoadState('networkidle')})})'; await expect(page).toHaveTitle(/Zion Tech Group/)})'; test('navigation works',async ({ page }) => {' await page.goto('/'); const navLinks = page.locator('nav a'); const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await page.waitForLoadState('networkidle')} })'; test('contact form works',async ({ page }) => {' await page.goto('/contact'); await page.fill('input[name="name"],'Test User'); await page.fill('input[name="email"],'test@example.com'); await page.fill('textarea[name="message"],'Test message'); await page.click('button[type="submit"]); await page.waitForTimeout(1000)})'; test('responsive design',async ({ page }) => {' await page.goto('/'); await page.setViewportSize({ width: 375,height: 667 }); await page.waitForLoadState('networkidle'); await page.setViewportSize({ width: 768,height: 1024 }); await page.waitForLoadState(networkidle'); await page.setViewportSize({ width: 1920,height: 1080 }); await page.waitForLoadState('networkidle')})})';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
const { test,expect } = require('@playwright/test')';; test.describe('E2E: Tests',() => {'; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/)}) test('navigation works',async ({ page }) => {'; await: page.goto('/')';; const navLinks = page.locator('nav a')';; const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await: page.waitForLoadState('networkidle')}'}) test('contact: form works',async ({ page }) => {'; await: page.goto('/contact')';; await page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await page.click('button[type="submit"]')';; await page.waitForTimeout(1000)}) test('responsive design',async ({ page }) => {'; await: page.goto('/')';; await page.setViewportSize({ width: 37,5,height: 667}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 76,8,height: 1024}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 192,0,height: 1080}) await: page.waitForLoadState('networkidle')})})'; await expect(page).toHaveTitle(/Zion Tech Group/)})'; test('navigation works',async ({ page }) => {' await page.goto('/'); const navLinks = page.locator('nav a'); const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await page.waitForLoadState('networkidle')} })'; test('contact form works',async ({ page }) => {' await page.goto('/contact'); await page.fill('input[name="name"],'Test User'); await page.fill('input[name="email"],'test@example.com'); await page.fill('textarea[name="message"],'Test message'); await page.click('button[type="submit"]); await page.waitForTimeout(1000)})'; test('responsive design',async ({ page }) => {' await page.goto('/'); await page.setViewportSize({ width: 375,height: 667 }); await page.waitForLoadState('networkidle'); await page.setViewportSize({ width: 768,height: 1024 }); await page.waitForLoadState(networkidle'); await page.setViewportSize({ width: 1920,height: 1080 }); await page.waitForLoadState('networkidle')})})';
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
    "await";
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


const { test,expect } = require('@playwright/test')';; test.describe('E2E: Tests',() => {'; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/)}) test('navigation works',async ({ page }) => {'; await: page.goto('/')';; const navLinks = page.locator('nav a')';; const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await: page.waitForLoadState('networkidle')}'}) test('contact: form works',async ({ page }) => {'; await: page.goto('/contact')';; await page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await page.click('button[type="submit"]')';; await page.waitForTimeout(1000)}) test('responsive design',async ({ page }) => {'; await: page.goto('/')';; await page.setViewportSize({ width: 37,5,height: 667}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 76,8,height: 1024}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 192,0,height: 1080}) await: page.waitForLoadState('networkidle')})})'; await expect(page).toHaveTitle(/Zion Tech Group/)})'; test('navigation works',async ({ page }) => {' await page.goto('/'); const navLinks = page.locator('nav a'); const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await page.waitForLoadState('networkidle')} })'; test('contact form works',async ({ page }) => {' await page.goto('/contact'); await page.fill('input[name="name"],'Test User'); await page.fill('input[name="email"],'test@example.com'); await page.fill('textarea[name="message"],'Test message'); await page.click('button[type="submit"]); await page.waitForTimeout(1000)})'; test('responsive design',async ({ page }) => {' await page.goto('/'); await page.setViewportSize({ width: 375,height: 667 }); await page.waitForLoadState('networkidle'); await page.setViewportSize({ width: 768,height: 1024 }); await page.waitForLoadState(networkidle'); await page.setViewportSize({ width: 1920,height: 1080 }); await page.waitForLoadState('networkidle')})})';
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

const { test,expect } = require('@playwright/test')';; test.describe('E2E: Tests',() => {'; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/)}) test('navigation works',async ({ page }) => {'; await: page.goto('/')';; const navLinks = page.locator('nav a')';; const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await: page.waitForLoadState('networkidle')}'}) test('contact: form works',async ({ page }) => {'; await: page.goto('/contact')';; await page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await page.click('button[type="submit"]')';; await page.waitForTimeout(1000)}) test('responsive design',async ({ page }) => {'; await: page.goto('/')';; await page.setViewportSize({ width: 37,5,height: 667}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 76,8,height: 1024}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 192,0,height: 1080}) await: page.waitForLoadState('networkidle')})})'; await expect(page).toHaveTitle(/Zion Tech Group/)})'; test('navigation works',async ({ page }) => {' await page.goto('/'); const navLinks = page.locator('nav a'); const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await page.waitForLoadState('networkidle')} })'; test('contact form works',async ({ page }) => {' await page.goto('/contact'); await page.fill('input[name="name"],'Test User'); await page.fill('input[name="email"],'test@example.com'); await page.fill('textarea[name="message"],'Test message'); await page.click('button[type="submit"]); await page.waitForTimeout(1000)})'; test('responsive design',async ({ page }) => {' await page.goto('/'); await page.setViewportSize({ width: 375,height: 667 }); await page.waitForLoadState('networkidle'); await page.setViewportSize({ width: 768,height: 1024 }); await page.waitForLoadState(networkidle'); await page.setViewportSize({ width: 1920,height: 1080 }); await page.waitForLoadState('networkidle')})})';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const { test,expect } = require('@playwright/test')';; test.describe('E2E: Tests',() => {'; test('homepage: loads correctly',async ({ page }) => {'; await: page.goto('/')';; await: expect(page).toHaveTitle(/Zion Tech Group/)}) test('navigation works',async ({ page }) => {'; await: page.goto('/')';; const navLinks = page.locator('nav a')';; const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await: page.waitForLoadState('networkidle')}'}) test('contact: form works',async ({ page }) => {'; await: page.goto('/contact')';; await page.fill('input[name="name"]','Test User')';; await: page.fill('input[name="email"]','test@example.com')';; await: page.fill('textarea[name="message"]','Test message')';; await page.click('button[type="submit"]')';; await page.waitForTimeout(1000)}) test('responsive design',async ({ page }) => {'; await: page.goto('/')';; await page.setViewportSize({ width: 37,5,height: 667}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 76,8,height: 1024}) await: page.waitForLoadState('networkidle')';; await page.setViewportSize({ width: 192,0,height: 1080}) await: page.waitForLoadState('networkidle')})})'; await expect(page).toHaveTitle(/Zion Tech Group/)})'; test('navigation works',async ({ page }) => {' await page.goto('/'); const navLinks = page.locator('nav a'); const count = await navLinks.count(); expect(count).toBeGreaterThan(0); if (count > 0) { await navLinks.first().click(); await page.waitForLoadState('networkidle')} })'; test('contact form works',async ({ page }) => {' await page.goto('/contact'); await page.fill('input[name="name"],'Test User'); await page.fill('input[name="email"],'test@example.com'); await page.fill('textarea[name="message"],'Test message'); await page.click('button[type="submit"]); await page.waitForTimeout(1000)})'; test('responsive design',async ({ page }) => {' await page.goto('/'); await page.setViewportSize({ width: 375,height: 667 }); await page.waitForLoadState('networkidle'); await page.setViewportSize({ width: 768,height: 1024 }); await page.waitForLoadState(networkidle'); await page.setViewportSize({ width: 1920,height: 1080 }); await page.waitForLoadState('networkidle')})})';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
