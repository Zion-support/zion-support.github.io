

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
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    {
      name: Mobile Safari',      use: {
        browser_name: webkit',        ...devices['i_phone 12']}
    }
  ];

    }
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
});
  reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
});
;

