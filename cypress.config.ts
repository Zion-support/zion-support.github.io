<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'cypress;
;
export default defineConfig({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
=======
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
import { defineConfig } from 'cypress;
;
export default defineConfig({,";
  e2e: {,'
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
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
<<<<<<< HEAD
=======
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
>>>>>>> origin/chore/fix-build-nav-links
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }
}),
<<<<<<< HEAD
=======
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
>>>>>>> origin/chore/fix-build-nav-links
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
import { defineConfig } from 'cypress;
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
>>>>>>> origin/main
