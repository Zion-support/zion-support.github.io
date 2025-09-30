test.describe('Accessibility Tests', () => {
  test(page has proper heading structure', async ({ page }) => {
    await page.goto('/);


    // Check for h1 tag'
    const h1 = page.locator('h1');

    await expect(h1).toHaveCount(1);


    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt);
      expect(alt).toBeTruthy()}
  });

    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      // Button should have either text content or aria-label
      expect(text || ariaLabel).toBeTruthy();
    }
  });

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
        expect(labelCount).toBeGreaterThan(0)} else {
        expect(ariaLabel || ariaLabelledBy).toBeTruthy()}
