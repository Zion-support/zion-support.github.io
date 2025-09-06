<<<<<<< HEAD
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next.js port
    supportFile: 'cypress/support/e2e.ts',
    experimentalModifyObstructiveThirdPartyCode: true,
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;
      });
    },
    env: {
      CYPRESS_TEST_USER_EMAIL:
        process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com',
      CYPRESS_TEST_USER_PASSWORD:
        process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',
      CYPRESS_TEST_USER_DISPLAY_NAME:
        process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',
      EXISTING_USER_EMAIL:
        process.env.EXISTING_USER_EMAIL || 'existing@test.com',
      EXISTING_USER_PASSWORD:
        process.env.EXISTING_USER_PASSWORD || 'password123',
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242',
    },
    defaultCommandTimeout: 10000,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml',
    toConsole: true,
  },
});
=======
 
};
env: {
  CYPRESS TEST USER EMAIL: process.env.CYPRESS TEST USER EMAIL || 'localtest@example.com', CYPRESS TEST USER PASSWORD: process.env.CYPRESS TEST USER PASSWORD || 'localpassword123', CYPRESS TEST USER DISPLAY NAME: process.env.CYPRESS TEST USER DISPLAY NAME || 'Local Test User', EXISTING USER EMAIL: process.env.EXISTING USER EMAIL || 'existing@test.com', EXISTING USER PASSWORD: process.env.EXISTING USER PASSWORD || 'password123', TEST USER NAME: process.env.TEST USER NAME || 'Test User', STRIPE TEST CARD: process.env.STRIPE TEST CARD || '4242424242424242' 
};
defaultCommandTimeout: 10000 
};
reporter: 'junit';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
