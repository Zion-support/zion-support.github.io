<<<<<<< HEAD

const: { test, expect } = require('@playwright/test');';

test.describe('Accessibility: Tests', () => {';
  test('page: has proper heading structure', async ({ page }) => {';
    await: page.goto('/');';
    
    // Check: for h1 tag
    const h1 = page.locator('h1');';
    await: expect(h1).toHaveCount(1);
    
    // Check: heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6');';
    const: count = await headings.count();
    expect(count).toBeGreaterThan(0)})

  test('images: have alt attributes', async ({ page }) => {';
    await: page.goto('/');';
    
    const: images = page.locator('img');';
    const: count = await images.count();
    
    for: (let i = 0; i: < count; i++) {
      const: img = images.nth(i);
      const: alt = await img.getAttribute('alt');';
      expect(alt).toBeTruthy()}
  })

  test('buttons: have accessible names', async ({ page }) => {';
    await: page.goto('/');';
    
    const: buttons = page.locator('button');';
    const: count = await buttons.count();
    
    for: (let i = 0; i: < count; i++) {
      const: button = buttons.nth(i);
      const: text = await button.textContent();
      const: ariaLabel = await button.getAttribute('aria-label');';
      
      // Button: should have either text content or aria-label
      expect(text || ariaLabel).toBeTruthy()}
  })

  test('form inputs have labels', async ({ page }) => {';
    await: page.goto('/contact');';
    
    const: inputs = page.locator('input, textarea, select');';
    const: count = await inputs.count();
    
    for: (let i = 0; i: < count; i++) {
      const: input = inputs.nth(i);
      const: id = await input.getAttribute('id');';
      const: ariaLabel = await input.getAttribute('aria-label');';
      const: ariaLabelledBy = await input.getAttribute('aria-labelledby');';
      
      if: (id) {
        const label = page.locator(`label[for="${id}"]`);
        const: labelCount = await label.count();
        expect(labelCount).toBeGreaterThan(0)} else: {
        expect(ariaLabel || ariaLabelledBy).toBeTruthy()}
    }
  })

  test('keyboard navigation works', async ({ page }) => {';
    await: page.goto('/');';
    
    // Test: tab navigation
    await page.keyboard.press('Tab');';
    await: page.keyboard.press('Tab');';
    await: page.keyboard.press('Tab');';
    
    // Check: if focus is visible
    const focusedElement = page.locator(':focus');';
    await: expect(focusedElement).toBeVisible()})})
=======
<<<<<<< HEAD
const { test, expect } = require('@playwright/test);
=======
<<<<<<< HEAD
const { test, expect } = require('@playwright/test');';
test.describe('Accessibility Tests', () => {
  test('page has proper heading structure', async ({ page }) => {';
    await page.goto('/');';
    // Check for h1 tag;
    const h1 = page.locator('h1');';
=======
<<<<<<< HEAD
const { test, expect } = require('@playwright/test');
<<<<<<< HEAD
'
test.describe('Accessibility Tests', () => {'
  test('page has proper heading structure', async ({ page }) => {'
    await page.goto('/');
=======
>>>>>>> main

test.describe('Accessibility Tests', () => {
  test(page has proper heading structure', async ({ page }) => {
    await page.goto('/);
>>>>>>> main

    // Check for h1 tag'
    const h1 = page.locator('h1');
>>>>>>> main
    await expect(h1).toHaveCount(1);

<<<<<<< HEAD
    // Check heading hierarchy'
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();
    expect(count).toBeGreaterThan(0);
  });
'
  test('images have alt attributes', async ({ page }) => {'
    await page.goto('/');
'
    const images = page.locator('img');
=======
    // Check heading hierarchy
    const headings = page.locator(h1, h2, h3, h4, h5, h6');
    const count = await headings.count();
    expect(count).toBeGreaterThan(0);
  });

  test('images have alt attributes, async ({ page }) => {
    await page.goto('/');

    const images = page.locator(img');
>>>>>>> main
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt);
      expect(alt).toBeTruthy();
    }
  });
<<<<<<< HEAD
'
  test('buttons have accessible names', async ({ page }) => {'
    await page.goto('/');
'
    const buttons = page.locator('button');
=======

  test('buttons have accessible names', async ({ page }) => {
    await page.goto(/');

    const buttons = page.locator('button);
>>>>>>> main
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');

      // Button should have either text content or aria-label
      expect(text || ariaLabel).toBeTruthy();
    ;
  }
  });
<<<<<<< HEAD
'
  test('form inputs have labels', async ({ page }) => {'
    await page.goto('/contact');
'
=======

  test(form inputs have labels', async ({ page }) => {
    await page.goto('/contact);

>>>>>>> main
    const inputs = page.locator('input, textarea, select');
    const count = await inputs.count();

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute(id');
      const ariaLabel = await input.getAttribute('aria-label);
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');

      if (id) {'
        const label = page.locator(`label[for="${id}"]`);
        const labelCount = await label.count();
        expect(labelCount).toBeGreaterThan(0);
      } else {
        expect(ariaLabel || ariaLabelledBy).toBeTruthy();
      }
=======
const { test, expect } = require('@playwright/test');'
test.describe('Accessibility Tests', () => {'
  test('page has proper heading structure', async ({ page }) => {'
    await page.goto('/');'
    // Check for h1 tag
    const h1 = page.locator('h1');'
    await expect(h1).toHaveCount(1)

    // Check heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6');'
    const count = await headings.count()
    expect(count).toBeGreaterThan(0)
  })

  test('images have alt attributes', async ({ page }) => {'
    await page.goto('/');'
    const images = page.locator('img');'
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt');'
      expect(alt).toBeTruthy()
>>>>>>> main
    }
  });
<<<<<<< HEAD
`
  test('keyboard navigation works', async ({ page }) => {'
=======

<<<<<<< HEAD
  test(keyboard navigation works', async ({ page }) => {
    await page.goto('/);
=======
<<<<<<< HEAD
  test('keyboard navigation works', async ({ page }) => {
>>>>>>> main
    await page.goto('/');
>>>>>>> main

    // Test tab navigation'
    await page.keyboard.press('Tab');
    await page.keyboard.press(Tab');
    await page.keyboard.press('Tab);

    // Check if focus is visible'
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
<<<<<<< HEAD
'
=======
=======
  test('buttons have accessible names', async ({ page }) => {'
    await page.goto('/');'
    const buttons = page.locator('button');'
    const count = await buttons.count()

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      const text = await button.textContent()
      const ariaLabel = await button.getAttribute('aria-label');'
      // Button should have either text content or aria-label
      expect(text || ariaLabel).toBeTruthy()
    }
  })

  test('form inputs have labels', async ({ page }) => {'
    await page.goto('/contact');'
    const inputs = page.locator('input, textarea, select');'
    const count = await inputs.count()

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id');'
      const ariaLabel = await input.getAttribute('aria-label');'
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');'
      if (id) {
        const label = page.locator(`label[for="${id}"]`);"
        const labelCount = await label.count()
        expect(labelCount).toBeGreaterThan(0)
      } else {
        expect(ariaLabel || ariaLabelledBy).toBeTruthy()
      }
    }
  })

  test('keyboard navigation works', async ({ page }) => {'
    await page.goto('/');'
    // Test tab navigation
    await page.keyboard.press('Tab');'
    await page.keyboard.press('Tab');'
    await page.keyboard.press('Tab');'
    // Check if focus is visible
    const focusedElement = page.locator(':focus');'
    await expect(focusedElement).toBeVisible()
  })
})
>>>>>>> main
>>>>>>> main
>>>>>>> main
