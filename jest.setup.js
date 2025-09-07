<<<<<<< HEAD
require('@testing-library/jest-dom');
=======
<<<<<<< HEAD
require("@testing-library/jest-dom");
require("@testing-library/jest-dom");
import "@testing-library/jest-dom";

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      pathname: "/",
      query: {},"
      asPath: "/",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

// Jest setup file

// Mock Next.js router
jest.mock('next/router', () => ({
<<<<<<< HEAD
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
=======
  useRouter() {
    return {
<<<<<<< HEAD
      route: '/';,
      pathname: '/';,
      query: {;},
      asPath: '/';,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest && jest.fn(),
      pop: jest && jest.fn(),
      reload: jest && jest.fn(),
      back: jest && jest.fn(),
      prefetch: jest && jest.fn().mockResolvedValue(undefined),
      beforePopState: jest && jest.fn(),
      events: {
        on: jest && jest.fn(),
        off: jest && jest.fn(),
        emit: jest && jest.fn(),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
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
=======
        emit: jest.fn(),
>>>>>>> origin/chore/fix-lint-and-merge
      },

    };
}));

<<<<<<< HEAD
// Mock Next.js Image component
<<<<<<< HEAD
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  }
}));
=======



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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
on: jest.fn()
        on: jest.fn()
        off: jest.fn()
        emit: jest.fn()
      }
      isFallback: false
    }
  }
}));
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock Next.js Image component
jest.mock("next/image", () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />;
  }
});
// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockLink({ children, href, ...props }) {
    return <a href={href} {...props}>{children}</a>;
  }
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
    matches: false
    media: query
    onchange: null
    addListener: jest.fn()
    removeListener: jest.fn()
    addEventListener: jest.fn()
    removeEventListener: jest.fn()
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    dispatchEvent: jest.fn()
  }))
>>>>>>> merged-prs-20250907-203621
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
	constructor() {}
	disconnect() {}
	observe() {}
	unobserve() {}
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
};
=======
<<<<<<< HEAD
};

// Global test setup,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Mock matchMedia
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
// Global test setup
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  writable: true,
  value: jest.fn().mockImplementation(query => ({}
    matches: false,

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

=======

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
beforeEach(() => {
  jest.clearAllMocks();


<<<<<<< HEAD
};

// Global test setup,
beforeEach(() => {
  jest.clearAllMocks();
});
beforeEach(() => {
  jest.clearAllMocks();

origin/main
beforeEach(() => {
  jest.clearAllMocks();
});
ursor/integrate-build-improve-and-re-verify-8f7d
beforeEach(() => {
  jest.clearAllMocks();
ursor/fix-lint-push-and-merge-to-main-ae4e
});
// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
ursor/fix-syntax-push-and-merge-to-main-40de
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

<<<<<<< HEAD

import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Global test setup
>>>>>>> merged-prs-20250907-203621
beforeEach(() => {
	jest.clearAllMocks();
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======

<<<<<<< HEAD
});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
});
origin/main
origin/automation-improvements-final
});
  };
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

});
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
});


// Mock Next.js Link component
<<<<<<< HEAD
jest.mock("next/link", () => {
  return function MockedLink({ children, href, ...props }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
jest.mock('next/link', () => ({
  _esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>;  },
}));

// Mock window.matchMedia,Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
<<<<<<< HEAD
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});

});

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
