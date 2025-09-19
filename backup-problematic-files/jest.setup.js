import "@testing-library/jest-dom";
// Mock Next.js router,
jest.mock("next/router", () => ({,
  useRouter() {,
    return {,
      route: "/";
      pathname: "/";
      query: {};
      asPath: "/";
      push: jest.fn();
      pop: jest.fn();
      reload: jest.fn();
      back: jest.fn();
      prefetch: jest.fn().mockResolvedValue(undefined);
      beforePopState: jest.fn();
      events: {,
        on: jest.fn();
        off: jest.fn();
        emit: jest.fn(),};
// Mock Next.js Image component,
jest.mock('next/image', () => ({,
  __esModule: true;
  default: (props) => {,
    // eslint-disable-next-line @next/next/no-img-element,
    return <img {...props,} />,
  }
}));
:backup-problematic-files/jest.setup.js,
    };
  }
}));
// Mock Next.js Image component,
jest.mock("next/image", () => {,
  return function MockedImage({ src, alt, ...props }) {,
    return <img src={src} alt={alt} {...props} />;
  };
});
// Mock Next.js Link component,
jest.mock('next/link', () => ({,
  __esModule: true;
  default: ({ children, href, ...props }) => {,
:backup-problematic-files/jest.setup.js,
    return <a href={href} {...props}>{children}</a>,
  }
,
  };
main: jest.setup.js,}));
// Mock window.matchMedia,
Object.defineProperty(window, 'matchMedia', {,
  writable: true;
  value: jest.fn().mockImplementation(query => ({,
    matches: false;
    media: query;
    onchange: null;
    addListener: jest.fn(), // deprecated,
    removeListener: jest.fn(), // deprecated,
    addEventListener: jest.fn();
    removeEventListener: jest.fn();
    dispatchEvent: jest.fn(),})),
});
// Mock IntersectionObserver,
global.IntersectionObserver = class IntersectionObserver {,
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
// Mock ResizeObserver,
global.ResizeObserver = class ResizeObserver {,
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
,
};