

    const url = response.url();
    expect(url).toMatch(/^https: /)});

    const headers = response.headers();


    expect(headers['x-frame-options']).toBeTruthy();
    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-xss-protection']).toBeTruthy()});


    // Get page content
    const content = await page.content();

    // Check for sensitive patterns

    ];

    for (const pattern of sensitivePatterns) {
      expect(content).not.toMatch(pattern);
    }
  });

    const count = await forms.count();
    for (let i = 0; i < count; i++) {
      const form = forms.nth(i);

        'input[name="_token"], input[name="csrf_token"]
      );
      const csrfCount = await csrfToken.count();
      // Forms should have CSRF protection
      expect(csrfCount).toBeGreaterThan(0);
    }
  });

    const externalLinks = page.locator('a[href^="http"]);
    const count = await externalLinks.count();
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);


      expect(rel).toContain('noopener');
    }
  })});



