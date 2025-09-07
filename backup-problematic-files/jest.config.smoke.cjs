const nextJest = require('next/jest')
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files;
<<<<<<< HEAD
  dir: './',')
=======
  dir: ./,)
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
})

// Add any custom config to be passed to Jest;
const customJestConfig = {
<<<<<<< HEAD
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
</rootDir>
    '^@/(.*)$': '<rootDir>/$1
=======
  setupFilesAfterEnv: [<rootDir>/jest.setup.js],
</rootDir>'
    '^@/(.*)$: <rootDir>/$1
</rootDir>'
    '^@/(.*)$: <rootDir>/$1
</rootDir>'
  setupFilesAfterEnv: [<rootDir>/jest.setup.js],
</rootDir>'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
