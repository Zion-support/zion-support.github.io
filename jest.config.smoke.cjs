module.exports = {
	testEnvironment: "jsdom",
	roots: ["<rootDir>/__tests__", "<rootDir>/tests", "<rootDir>/src"],
	testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
	errorOnDeprecated: false,
	transform: {},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};