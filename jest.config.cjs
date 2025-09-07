const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.(js|jsx|ts|tsx)', '**/*.(test|spec).(js|jsx|ts|tsx)'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/', '/build/', '/out/'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	testTimeout: 30000,
	passWithNoTests: true,
};

module.exports = createJestConfig(customJestConfig);
