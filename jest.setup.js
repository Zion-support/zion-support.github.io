// Ensure jest-dom matchers are available when tests run
try {
  require('@testing-library/jest-dom');
} catch (error) {
  // Non-fatal if not installed for minimal runs
}
// Configure React Testing Library jest-dom matchers
require('@testing-library/jest-dom');
