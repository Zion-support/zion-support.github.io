  projects: [
      name: Desktop Chrome',      use: {
        browserName: chromium',        channel: chrome'}
    }
    {
      name: Desktop Firefox',      use: {
        browserName: firefox'}
    }
    {
      name: Desktop Safari',      use: {
        browserName: webkit'}
    }
    {
      name: Mobile Chrome',      use: {
        browserName: chromium',        ...devices['Pixel 5']}
    }
    {
      name: Mobile Safari',      use: {
        browser_name: webkit',        ...devices['i_phone 12']}
    }
  ];
    }
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];

});
  reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
});
;

});
});
