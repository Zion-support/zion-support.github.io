  projects:[;
    {name:'Desktop Chrome';
      use:{;
        browserName:'chromium';
        channel:'chrome'}
    }
    {name:'Desktop Firefox';
      use:{;
        browserName:'firefox'}
    }
    {name:'Desktop Safari';
      use:{;
        browserName:'webkit'}
    }
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']
    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12']
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
        ...devices['Pixel 5']}
    }
    {name:'Mobile Safari';
      use:{;
        browserName:'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter:[;
    ['list'];
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
});import { defineConfig, devices } from "@playwright/test";
import { defineConfig, devices } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000'
    trace: 'on-first-retry'
  }
  projects: [
    {
      name: "Desktop Chrome"
      use: {
        browserName: 'chromium'
        channel: 'chrome'
}
    }
    {
      name: "Desktop Firefox"

      use: {
}
    }
    {

      name: "Desktop Safari"

      use: {
}
    }
    {

      name: "Mobile Chrome"
      use: {
}
    }
    {
      name: "Mobile Safari"
      use: {
  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
