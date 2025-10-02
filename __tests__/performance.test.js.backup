

    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('bundle size is reasonable', async ({ page }) => {
    await page.goto('/');
    const metrics = await page.evaluate(() => {




