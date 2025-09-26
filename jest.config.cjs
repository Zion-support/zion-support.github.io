/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] }],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	testMatch: ['**/__tests__/**/*.(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).(ts|tsx|js|jsx)'],
	transformIgnorePatterns: ['/node_modules/'],
	testPathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/zion-website/e2e/',
		'<rootDir>/zion-website/',
		'/e2e/',
	],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
};
