<<<<<<< HEAD
require("@testing-library/jest-dom");
=======
import "@testing-library/jest-dom";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
<<<<<<< HEAD
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    const { src, alt, ...otherProps } = props;
    return {
      type: 'img',
      props: { src, alt, ...otherProps }
=======
        emit: jest.fn()
      },
<<<<<<< HEAD
=======
<<<<<<< HEAD:jest.setup.js
      isFallback: false,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD:backup-problematic-files/jest.setup.js
      isFallback: false
    }
  }
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}));
=======

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/jest.setup.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
  },
}));

<<<<<<< HEAD
// Mock Next.js Link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: (props) => {
    const { children, href, ...otherProps } = props;
    return {
      type: 'a',
      props: { href, ...otherProps },
      children
    };
  },
=======
// Mock Next.js Image component
jest.mock("next/image", () => {
  return function MockedImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />;
  };
});
<<<<<<< HEAD
=======
<<<<<<< HEAD:jest.setup.js

// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockedLink({ children, href, ...props }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> main:jest.setup.js

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
<<<<<<< HEAD:backup-problematic-files/jest.setup.js
    return <a href={href} {...props}>{children}</a>
  }
=======

  },
>>>>>>> main:jest.setup.js
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
<<<<<<< HEAD
    addListener: jest.fn(),
    removeListener: jest.fn(),
=======
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
<<<<<<< HEAD
};

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
});
=======
<<<<<<< HEAD
};
=======
};
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/jest.setup.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
