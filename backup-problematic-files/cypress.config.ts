
import { define_config } from 'cypress;



;
export default define_config ({,
  e2e: {,



export default defineConfig({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e && e2e.ts',
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e && e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});






    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
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






    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }




import { defineConfig } from 'cypress;
}),
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

    setupNodeEvents (on, config) {,
      // implement node event listeners here;
    }
  }
}),



