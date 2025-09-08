

    await expect(page).toHaveTitle(/Zion Tech Group/)});

    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
    // Test clicking on first nav link
    if (count > 0) {
      await navLinks.first().click();
      await page.waitForLoadState('networkidle');
    }
  });


    // Submit form'
    await page.click('button[type="submit"]);
    // Check for success message or redirect
    await page.waitForTimeout(1000)});


    // Test mobile viewport
    await page.setViewportSize({ "width": 375, "height": 667 });
    await page.waitForLoadState('networkidle');
    // Test tablet viewport
    await page.setViewportSize({ "width": 768, "height": 1024 });
    await page.waitForLoadState(networkidle');
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForLoadState('networkidle')})});



