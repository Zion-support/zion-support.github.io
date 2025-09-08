<<<<<<< HEAD


=======

import '@testing-library/jest-dom';

>>>>>>> origin/cursor/delete-old-data-records-6bba
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
<<<<<<< HEAD

      route: "/"
      pathname: "/"
      query: {}
      asPath: "/"
      push: jest.fn()
      pop: jest.fn()
      reload: jest.fn()
      back: jest.fn()
      prefetch: jest.fn().mockResolvedValue(undefined)
      beforePopState: jest.fn()
      events: {



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),

      prefetch: jest.fn().mockResolvedValue(undefined),
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

      beforePopState: jest.fn(),
      events: {}
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn()
<<<<<<< HEAD

=======
        emit: jest.fn(),
>>>>>>> origin/cursor/delete-old-data-records-6bba
      },

    };
}));

<<<<<<< HEAD




// Mock Next.js Image component
jest.mock("next/image", () => {
  const React = require("react");
  return function MockImage({ src, alt, ...props }) {


// Mock Next && Next.js Link component
jest && jest.mock("next/link", () => {
  return function MockedLink({ children, href, ...props }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
    return React.createElement("a", { href, ...props }, children);

  };
});



// Mock Next.js Image component
jest.mock("next/image", () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />;
  };
});

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>;
  }
}));



// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({


    dispatchEvent: jest.fn()
  }))

=======

    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),

    dispatchEvent: jest.fn()
  }))
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD

    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});






// Global test setup

beforeEach(() => {
	jest.clearAllMocks();
});


});


// Mock Next.js Link component



=======
// Global test setup
beforeEach(() => {
	jest.clearAllMocks();
});

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

});


// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockedLink({ children, href, ...props }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba
jest.mock('next/link', () => ({
  _esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>;  },
}));

// Mock window.matchMedia,Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
<<<<<<< HEAD
=======
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  };
});

// Mock Next.js Link component
jest.mock("next/link", () => ({
  _esModule: true,
  default: ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
};
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
>>>>>>> origin/cursor/delete-old-data-records-6bba
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated,
removeListener: jest.fn(), // deprecated,
addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
<<<<<<< HEAD

    dispatchEvent: jest.fn()

=======
dispatchEvent: jest.fn()
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }))
}),
// Mock IntersectionObserver,
global.IntersectionObserver = class IntersectionObserver {constructor() {}});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Global test setup,
beforeEach(() => {
  // Reset all mocks before each test,
jest.clearAllMocks()
}),
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();
ursor/fix-lint-push-and-merge-to-main-ae4e
});

<<<<<<< HEAD






=======
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
