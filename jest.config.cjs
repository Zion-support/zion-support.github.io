/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: [],
	testMatch: ["**/__tests__/**/*.(js|jsx|ts|tsx)", "**/*.(test|spec).(js|jsx|ts|tsx)"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	transformIgnorePatterns: ["/node_modules/"],
	// Avoid picking up Next.js specific e2e tests located elsewhere
	testPathIgnorePatterns: ["/zion-website/e2e/", "/e2e/", "/dist/", "/build/"],
};

