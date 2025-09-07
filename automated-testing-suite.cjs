#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧪 Automated Testing Suite Starting...\n');

// Create Jest configuration
function createJestConfig() {
  console.log('⚙️  Creating Jest configuration...');
  
  const jestConfig = `const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

module.exports = createJestConfig(customJestConfig);
`;

  fs.writeFileSync('jest.config.js', jestConfig);
  console.log('✅ Jest configuration created');
}

// Create Jest setup file
function createJestSetup() {
  console.log('🔧 Creating Jest setup file...');
  
  const setupFile = `import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
    };
  },
}));

// Mock Next.js image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// Mock Next.js link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>;
  },
}));
`;

  fs.writeFileSync('jest.setup.js', setupFile);
  console.log('✅ Jest setup file created');
}

// Create test runner script
function createTestRunner() {
  console.log('🏃 Creating test runner script...');
  
  const testRunner = `#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🏃 Test Runner Starting...\\n');

// Run tests
async function runTests() {
  console.log('🧪 Running tests...');
  
  try {
    execSync('npm run test', { stdio: 'inherit' });
    console.log('✅ Tests passed!');
  } catch (error) {
    console.error('❌ Tests failed!');
    process.exit(1);
  }
}

runTests();
`;

  fs.writeFileSync('test-runner.cjs', testRunner);
  console.log('✅ Test runner script created');
}

// Update package.json with test scripts
function updatePackageJson() {
  console.log('📦 Updating package.json with test scripts...');
  
  const packageJsonPath = 'package.json';
  let packageJson = {};
  
  if (fs.existsSync(packageJsonPath)) {
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  }
  
  // Add test scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'test': 'jest',
    'test:coverage': 'jest --coverage',
    'test:watch': 'jest --watch',
    'test:ci': 'jest --ci --coverage --watchAll=false'
  };
  
  // Add test dependencies
  const testDependencies = {
    '@testing-library/jest-dom': '^6.1.4',
    '@testing-library/react': '^14.1.2',
    'jest': '^29.7.0',
    'jest-environment-jsdom': '^29.7.0'
  };
  
  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    ...testDependencies
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Package.json updated with test scripts');
}

// Main execution
async function main() {
  try {
    createJestConfig();
    createJestSetup();
    createTestRunner();
    updatePackageJson();
    
    console.log('\n🎉 Automated Testing Suite completed successfully!');
    console.log('\n📋 Created files:');
    console.log('   - jest.config.js');
    console.log('   - jest.setup.js');
    console.log('   - test-runner.cjs');
    
    console.log('\n🚀 Next steps:');
    console.log('   1. Install dependencies: npm install');
    console.log('   2. Run tests: npm run test');
    console.log('   3. Generate coverage: npm run test:coverage');
    
  } catch (error) {
    console.error('❌ Testing suite setup failed:', error.message);
    process.exit(1);
  }
}

main();