/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
		'/build/',
		'/zion-website/e2e/',
	],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.json',
				useESM: false,
			},
		],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

