/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
	testMatch: [
		'<rootDir>/__tests__/**/*.test.{ts,tsx}',
		'<rootDir>/tests/**/*.test.{ts,tsx}'
	],
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**'
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	transform: {
		'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }]
	}
};
