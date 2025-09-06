
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',

=======
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
