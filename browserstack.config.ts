<<<<<<< HEAD
import { defineConfig, devices } from "@playwright/test";
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig, devices } from "@playwright/test";
=======
import { defineConfig, devices } from '@playwright/test';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default defineConfig({
  testDir: "tests/e2e",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
<<<<<<< HEAD
        browserName: 'chromium',
        channel: 'chrome',
      },
=======
        browserName: 'chromium';
        channel: 'chrome'}
    };
    {
      name: 'Desktop Firefox';
      use: {
        browserName: 'firefox'}
    };
    {
      name: 'Desktop Safari';
      use: {
        browserName: 'webkit'}
    };
    {
      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';
        ...devices['Pixel 5']}
    };
    {
      name: 'Mobile Safari';
      use: {
        browserName: 'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter: [
<<<<<<< HEAD
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],
=======
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  use: {
      
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox',
      },
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit',
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5'],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
  ],
  reporter: [
<<<<<<< HEAD
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],});
=======
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
