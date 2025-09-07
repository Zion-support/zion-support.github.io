// Jest setup file for testing environment
import '@testing-library/jest-dom';

// Mock ResizeObserver
// @ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn()
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn()
	}))
});

// Mock IntersectionObserver
// @ts-ignore
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn()
}));

// Reduce console noise in tests
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

beforeAll(() => {
	console.error = (...args: any[]) => {
		if (typeof args[0] === 'string' && args[0].includes('Warning: ReactDOM.render is no longer supported')) {
			return;
		}
		// @ts-ignore
		originalConsoleError.call(console, ...args);
	};
	console.warn = (...args: any[]) => {
		if (typeof args[0] === 'string' && args[0].includes('Warning: ReactDOM.render is no longer supported')) {
			return;
		}
		// @ts-ignore
		originalConsoleWarn.call(console, ...args);
	};
});

afterAll(() => {
	console.error = originalConsoleError;
	console.warn = originalConsoleWarn;
});