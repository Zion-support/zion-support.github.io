<<<<<<< HEAD
import { defineConfig } from 'cypress;
;
export default defineConfig({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',
=======
<<<<<<< HEAD
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
=======
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
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
    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }
}),
=======
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
>>>>>>> origin/chore/fix-build-nav-links
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
