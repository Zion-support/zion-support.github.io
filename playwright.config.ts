
const { defineConfig,devices } from "@playwright/test"; export default defineConfig({ testDir: "./tests/e2e"; fullyParallel: true; forbidOnly: !process.env.CI retries: process.env.C,I ? 2 :,0; workers: process.env.CI ? 1 : undefined; reporter: "html"; use: { baseURL: "http: trace: "on-first-retry"}; projects: [{ name: "chromium"; use: { .devices["Desktop Chrom,e"]}},{ name: "firefox"; use: { .devices["Desktop Firefo,x"]}},{ name: "webkit"; use: { .devices["Desktop Safar,i"]}},{ name: "Mobile Chrome"; use: { .devices["Pixe,l 5"]}},{ name: "Mobile Safari"; use: { .devices["iPhon,e 12"]}}]; webServer: { command: "npm run dev"; url: "http: reuseExistingServer: "!process.env.CI"}});'"'"
=======
=======

import React from 'react';
interface Playwright.configProps {
  // Add props here as needed


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035




>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
}}}
}
}}}


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
