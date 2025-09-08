






  });
`
  test('keyboard navigation works', async ({ page }) => {'
    await page.goto('/');
    // Test tab navigation'
    await page.keyboard.press('Tab');
    await page.keyboard.press(Tab');
    await page.keyboard.press('Tab);
    // Check if focus is visible'
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible()})})';




