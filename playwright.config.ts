=======>>>>>>> origin/main
<<<<<<< HEAD=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
});
