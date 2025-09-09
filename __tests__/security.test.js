    const url = response.url();
    expect(url).toMatch(/^https: /)});

    // Get page content
    const content = await page.content();

    // Check for sensitive patterns

    ];

    for (const pattern of sensitivePatterns) {
      expect(content).not.toMatch(pattern);
    }
  });

    const count = await forms.count();
    for (let i = 0; i 