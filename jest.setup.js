require('@testing-library/jest-dom');
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {

      pathname: "/",
      query: {},"
      asPath: "/",

// Jest setup file

// Mock Next.js router
jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '/',
			query: {},
			asPath: '/',
			push: jest.fn(),
			back: jest.fn(),
			replace: jest.fn(),
			prefetch: jest.fn(),
			beforePopState: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
				emit: jest.fn(),
			},
		};
	},
}));

// Mock Next.js Image to standard img
jest.mock('next/image', () => {
	const React = require('react');
	return function MockedImage({ src, alt, ...props }) {
		return React.createElement('img', { src, alt, ...props });
	};
});

// Mock Next.js Link to anchor
jest.mock('next/link', () => {
	const React = require('react');
	return ({ children, href, ...props }) => React.createElement('a', { href, ...props }, children);
});

// Window matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

// IntersectionObserver mock
// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
	constructor() {}
	disconnect() {}
	observe() {}
	unobserve() {}
};

// ResizeObserver mock
// @ts-ignore
global.ResizeObserver = class ResizeObserver {
	constructor() {}
	disconnect() {}
	observe() {}
	unobserve() {}
};

beforeEach(() => {
	jest.clearAllMocks();
});
<<<<<<< HEAD
=======

});
main
// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true;,
  default: (props) => {
    return <img {...props} />;
  },
}));
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> origin/chore/fix-lint-and-merge
