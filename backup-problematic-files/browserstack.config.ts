import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: {
<<<<<<< HEAD
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry'
  },
  projects: [
import { define_config, devices } from '@playwright / test';
import { define_config, devices } from '@playwright / test',
;
export default define_config ({
  test_dir:'tests / e2e',
  use:{
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace:'on - first - retry'},
  projects:[;
    {
      name:'Desktop Chrome',
      use:{
        browser_name:'chromium',
        channel:'chrome'}
    },
    {
      name:'Desktop Firefox',
      use:{
        browser_name:'firefox'}
    },
    {
      name:'Desktop Safari',
      use:{
        browser_name:'webkit'}
    },
    {
      name:'Mobile Chrome',
      use:{
        browser_name:'chromium',
        ...devices['Pixel 5']}
    },
    {
      name:'Mobile Safari',
      use:{
        browser_name:'webkit',
        ...devices['i_phone 12']}
    }
  ],
  reporter:[;
    ['list'],
    ['html', { output_folder:'playwright - logs / html - report', open:'never' }]];
}),import { define_config, devices  } from '@playwright / test';
import { define_config, devices } from '@playwright / test';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on - first - retry';
  },
<<<<<<< HEAD
  projects: [;
=======
  projects: [
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      name: "Desktop Chrome",
      use: {
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
