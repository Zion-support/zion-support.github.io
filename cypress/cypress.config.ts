import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next.js port
    supportFile: 'cypress/support/e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser;
});
