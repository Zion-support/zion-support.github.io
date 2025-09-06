<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
=======
<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
;
export default defineConfig({;
  testDir:'tests/e2e';
  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace:'on-first-retry'};
  projects:[;
    {;
      name:'Desktop Chrome';
      use:{;
        browserName:'chromium';
        channel:'chrome'}
    };
    {;
      name:'Desktop Firefox';
      use:{;
        browserName:'firefox'}
    };
    {;
      name:'Desktop Safari';
      use:{;
        browserName:'webkit'}
    };
    {;
      name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
        ...devices['Pixel 5']}
    };
    {;
      name:'Mobile Safari';
      use:{;
        browserName:'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter:[;
    ['list'];
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
});import { defineConfig, devices } from "@playwright/test";
=======
<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
=======
import { defineConfig, devices } from "@playwright/test";
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
>>>>>>> 5105b916d1c77bc30b66b0e05cfa1d3e5af8d358

    trace: 'on-first-retry'
=======
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
<<<<<<< HEAD

    {
      name: "Mobile Safari",
      use: {

=======
        browserName: "chromium",
        channel: "chrome",
      },
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: "firefox",
      },
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: "webkit",
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        browserName: "chromium",
        ...devices["Pixel 5"],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        browserName: "webkit",
        ...devices["iPhone 12"],
      },
    },
  ],
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-logs/html-report", open: "never" }],
  ],
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
