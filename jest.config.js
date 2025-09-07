<<<<<<< HEAD



=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0ffd
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
<<<<<<< HEAD
  dir: './'
=======
  dir: './',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0ffd
})

// Add any custom config to be passed to Jest
const customJestConfig = {
<<<<<<< HEAD
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
=======
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0ffd
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
<<<<<<< HEAD
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
=======
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0ffd
