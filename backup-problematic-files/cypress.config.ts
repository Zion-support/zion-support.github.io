<<<<<<< HEAD:backup-problematic-files/cypress.config.ts
import { defineConfig } from 'cypress;
;
export default defineConfig({,";
  e2e: {,'
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',


export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
import { defineConfig } from 'cypress;
;
export default defineConfig({,";
  e2e: {,'
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
=======
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    viewportWidth: 1280,
    viewportHeight: 720,
  base_url: 'http://localhost:3000',
support_file: cypress / support / e2e.ts',
import { define_config } from 'cypress'; export default define_config ({ e2e: { base_url: 'http: support_file: 'cypress / support / e2e.ts', spec_pattern: 'cypress / e2e*.cy.{js, jsx, ts, tsx}', viewport_width: 1280, viewport_height: 720, video: false, screenshotOnRunFailure: true, defaultCommandTimeout: 10000, request_timeout: 10000, response_timeout: 10000, setupNodeEvents () { }, }, component: { dev_server: { framework: 'react', bundler: 'vite', }, }, });
    spec_pattern: 'cypress / e2e/**/*.cy.{js, jsx, ts, tsx}',
    viewport_width: 1280,
    viewport_height: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    request_timeout: 10000,
    response_timeout: 10000,
    pageLoadTimeout: 30000,
    retries: {,
      run_mode: 2,
      open_mode: 0;
    },

    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }
}),
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
=======
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:cypress.config.ts
