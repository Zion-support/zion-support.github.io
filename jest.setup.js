

require('@testing-library/jest-dom);
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b



import @testing-library/jest-dom';// Polyfill for TextEncoder/TextDecoder;
const { TextEncoder, TextDecoder } = require('util)global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;// Mock Next.js router;
jest.mock(next/router', () => ({useRouter() {return {route: '/,pathname: /',query: {},asPath: '/,push: jest.fn(),pop: jest.fn(),reload: jest.fn(),back: jest.fn(),prefetch: jest.fn().mockResolvedValue(undefined),beforePopState: jest.fn(),events: {on: jest.fn(),off: jest.fn(),emit: jest.fn()},isFallback: false;
    }}
}))// Mock Next.js Image component;
jest.mock(next/image', () => ({__esModule: true,default: (props) => {return <img {...props} />;
  }
}))// Mock Next.js Link component;
jest.mock('next/link, () => ({__esModule: true,default: ({ children, href, ...props }) => {return <a href={href} {...props}>{children}</a>;
  }
}))// Mock window.matchMedia;
Object.defineProperty(window, matchMedia', {writable: true,value: jest.fn().mockImplementation(query => ({matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn()}))})// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {constructor() {}
require('@testing-library/jest-dom);
// Mock Next.js router
jest.mock(next/router', () => ({
  useRouter() {
    return {
      route: '/,
      pathname: /',
      query: {},
      asPath: '/,
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),

Object.defineProperty(window, matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,

>>>>>>> origin/main
