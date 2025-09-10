/** @type {import('jest').Config} */
const config = {
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
		'^@/(.*)$': '<rootDir>/tests/alias/$1'
	},
	resolver: undefined,
	transform: {
		'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }]
	},
	// Avoid scanning large/invalid directories and nested packages
	testPathIgnorePatterns: [
		'/node_modules/',
		'/zion-os\\.disabled/',
		'/backup-problematic-files/',
		'/backup/',
		'/automation_backup/',
		'/apps\\.disabled/',
		'/api\\.disabled/',
		'/__tests__/smoke\\.test\\.ts$'
	],
	modulePathIgnorePatterns: [
		'/zion-os\\.disabled/',
		'/backup-problematic-files/',
		'/backup/',
		'/automation_backup/'
	]
};

export default config;