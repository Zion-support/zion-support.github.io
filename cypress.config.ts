<<<<<<< HEAD
import { defineConfig } from 'cypress;
<<<<<<< HEAD
<<<<<<< HEAD
;
export default defineConfig({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
    supportFile: cypress/support/e2e.ts',
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
<<<<<<< HEAD
=======
=======
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
=======
import { defineConfig } from 'cypress;
;
export default defineConfig({,";
  e2e: {,'
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======

export default defineConfig({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e && e2e.ts',
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e && e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
=======
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    retries: {,
      runMode: 2,
      openMode: 0
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
>>>>>>> origin/chore/fix-build-nav-links
=======
>>>>>>> origin/automation-improvements-final
    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }
<<<<<<< HEAD
}),
<<<<<<< HEAD
=======
}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
export default defineConfig({
  e2e: {
  baseUrl: 'http://localhost:3000'
supportFile: cypress/support/e2e.ts'
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
    viewportWidth: 1280
    viewportHeight: 720
    video: false
    screenshotOnRunFailure: true
    defaultCommandTimeout: 10000
    requestTimeout: 10000
    responseTimeout: 10000
    pageLoadTimeout: 30000
    retries: {
      runMode: 2
      openMode: 0
    }
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
