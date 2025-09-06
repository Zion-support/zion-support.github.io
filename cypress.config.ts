<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
=======
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
=======
=======
>>>>>>> origin/main
import { defineConfig } from 'cypress;
;
export default defineConfig({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
<<<<<<< HEAD
    supportFile: cypress/support/e2e.ts',
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
>>>>>>> origin/main
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
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
>>>>>>> origin/chore/fix-build-nav-links
=======
    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }
<<<<<<< HEAD
}),
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
=======
}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
