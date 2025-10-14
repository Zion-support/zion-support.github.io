<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Jest.setup.js() {
  return (
    <>
      <Helmet>
        <title>Jest.setup.js - Zion Tech Group</title>
        <meta name="description" content="Professional jest.setup.js services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Jest.setup.js
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional jest.setup.js services by Zion Tech Group.
            </p>
          </div>
        </section>

<<<<<<< HEAD
        { /* Content Section */ }
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Service</h3>
                <p className="text-gray-600">High-quality professional services tailored to your needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals with deep industry knowledge.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support to ensure your success.</p>
              </div>
            </div>
          </div>
        </section>

        { /* CTA Section */ }
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about our services and how they can benefit your organization.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
=======
// Learn more: https://github.com/testing-library/jest-dom
require("@testing-library/jest-dom");

// Polyfills for Node.js environment
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
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

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Suppress console errors in tests
=======
// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,

    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),

    useNavigate: () => jest.fn(),
useNavigate: () => jest.fn(),
    Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    NavLink: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    BrowserRouter: ({ children }) => React.createElement('div', { 'data-testid': 'browser-router' }, children),
    MemoryRouter: ({ children }) => React.createElement('div', { 'data-testid': 'memory-router' }, children)
  };
});

// Suppress console warnings

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn((...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning: ReactDOM.render") ||
        args[0].includes("Not implemented: HTMLFormElement.prototype.submit"))
    ) {
      return;
    }
    originalError.call(console, ...args);
  });
});

afterAll(() => {
  console.error = originalError;
});
>>>>>>> origin/main
