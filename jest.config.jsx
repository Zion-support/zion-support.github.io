<<<<<<< HEAD
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./jest.setup.jsx'],
    globals: true,
  },
});
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-48f3; const createJestConfig = nextJest({ \"dir\": \'./}) const customJestConfig = { \"setupFilesAfterEnv\": \'[\',<rootDir>/jest.setup.js\'],\"testEnvironment\": \'jsdom,\"moduleNameMapper\": {,^@/(.*)$\': \'<rootDir>/$1},\"collectCoverageFrom\": \'[\',components*.{js,jsx,ts,tsx},pages*.{js,jsx,ts,tsx},utils*.{js,jsx,ts,tsx},!**node_modules/** \' ],\"testPathIgnorePatterns\": [\'<rootDir>/.next/,<rootDir>/node_modules/\',<rootDir>/out/ \',<rootDir>/__tests__.disabled/\',<rootDir>/tests.disabled/ \',<rootDir>/src_backup/\',<rootDir>/test.disabled/ \',<rootDir>/plugins.disabled/\',<rootDir>/supabase.disabled/ \',<rootDir>/dao/\',<rootDir>/pages.disabled/\'; ]} ; module.exports = createJestConfig(customJestConfig)
ursor/automate-test-fix-improve-and-merge-code-48f3; const createJestConfig = nextJest({ dir: "./}) const customJestConfig = { setupFilesAfterEnv: "[",<rootDir>/jest.setup.js"],testEnvironment: "jsdom,moduleNameMapper: {,^@/(.*)$": "<rootDir>/$1},collectCoverageFrom: "[",components*.{js,jsx,ts,tsx},pages*.{js,jsx,ts,tsx},utils*.{js,jsx,ts,tsx},!**node_modules/** " ],testPathIgnorePatterns: ["<rootDir>/.next/,<rootDir>/node_modules/",<rootDir>/out/ ",<rootDir>/__tests__.disabled/",<rootDir>/tests.disabled/ ",<rootDir>/src_backup/",<rootDir>/test.disabled/ ",<rootDir>/plugins.disabled/",<rootDir>/supabase.disabled/ ",<rootDir>/dao/",<rootDir>/pages.disabled/"; ]} ; module.exports = createJestConfig(customJestConfig)"""
import React from 'react';
interface Jest.configProps {
  // Add props here as needed
}
export default function Jest.config({ }: Jest.configProps) {
  return (
    <div>
      <h1>Jest.config</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
}}};
}}}
=======


>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}}}
}}};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
