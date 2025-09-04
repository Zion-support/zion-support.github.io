import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2,e,',;
  fullyParallel: tr,u,e,;
  forbidOnly: !!process.env.,C,I,;
  retries: process.env.C,I ? 2 :,0,;
  workers: process.env.CI ? 1 : undefin,e,d,;
  reporter: 'htm,l,',;
  use: {
    baseURL: 'http://localhos,t:3000,',;
    trace: 'on-first-retr,y,',;
  },;
  projects: [;
    {
      name: 'chromiu,m,',;
      use: { ...devices['Desktop Chrom,e'], },;
    },;
    {
      name: 'firefo,x,',;
      use: { ...devices['Desktop Firefo,x'], },;
    },;
    {
      name: 'webki,t,',;
      use: { ...devices['Desktop Safar,i'], },;
    },;
    {
      name: 'Mobile Chrom,e,',;
      use: { ...devices['Pixe,l 5'], },;
    },;
    {
      name: 'Mobile Safar,i,',;
      use: { ...devices['iPhon,e 12'], },;
    },;
  ],;
  webServer: {
    command: 'npm run de,v,',;
    url: 'http://localhos,t:3000,',;
    reuseExistingServer: !process.env.,C,I,;
  },;
});