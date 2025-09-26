/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],
	testMatch: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[tj]s?(x)'
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/zion-website/e2e/',
		'<rootDir>/zion-website/'
	],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.json',
				isolatedModules: true
			}
		]
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

