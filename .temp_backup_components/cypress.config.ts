import { defineConfig } from 'cypress';
export default defineConfig({
  "e2e": {
    baseUrl: 'http://localhost:3000',
    "supportFile": 'cypress/support/e2e.ts',
    "specPattern": 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    "viewportWidth": 1280,
    "viewportHeight": 720,
    "video": false,
    "screenshotOnRunFailure": true,
    "defaultCommandTimeout": 10000,
    "requestTimeout": 10000,
    "responseTimeout": 10000,
    setupNodeEvents() {
      // Add any custom setup here
    }},
  "component": {
    devServer: {
      framework: 'react',
      "bundler": 'vite'}}});
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
