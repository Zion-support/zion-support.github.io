<<<<<<< HEAD
=======
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({;
  testDir: 'tests/e2e';
  use: {;
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on-first-retry'};
  projects: [;
    {;
      name: 'Desktop Chrome';
      use: {;
        browserName: 'chromium';
        channel: 'chrome'}
    };
    {;
      name: 'Desktop Firefox';
      use: {;
        browserName: 'firefox'}
    };
    {;
      name: 'Desktop Safari';
      use: {;
        browserName: 'webkit'}
    };
    {;
      name: 'Mobile Chrome';
      use: {;
        browserName: 'chromium';
        ...devices['Pixel 5']}
    };
    {;
      name: 'Mobile Safari';
      use: {;
        browserName: 'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter: [;
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]];
});
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: {
<<<<<<< HEAD

=======
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
<<<<<<< HEAD

=======
        browserName: 'chromium',
        channel: 'chrome',
        browserName: "chromium",
        channel: "chrome",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      },
    },
    {
      name: "Desktop Firefox",
      use: {
<<<<<<< HEAD

=======
        browserName: 'firefox',
        browserName: "firefox",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      },
    },
    {
      name: "Desktop Safari",
      use: {
<<<<<<< HEAD

=======
        browserName: 'webkit',
        browserName: "webkit",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      },
    },
    {
      name: "Mobile Chrome",
      use: {
<<<<<<< HEAD

=======
        browserName: 'chromium',
        ...devices['Pixel 5'],
        browserName: "chromium",
        ...devices["Pixel 5"],
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      },
    },
    {
      name: "Mobile Safari",
      use: {
<<<<<<< HEAD

=======
        browserName: 'webkit',
        ...devices['iPhone 12'],
        browserName: "webkit",
        ...devices["iPhone 12"],
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      },
    },
  ],
  reporter: [
<<<<<<< HEAD

=======
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
    ["list"],
    ["html", { outputFolder: "playwright-logs/html-report", open: "never" }],
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ],
});
