module.exports = {
	// Ignore subproject tests and E2E specs not meant for root Jest
	testPathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/zion-website/e2e/',
		'<rootDir>/zion-website/',
	],
};