import "@testing-library/jest-dom";

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
      isFallback: false
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
        emit: jest.fn()
      },
<<<<<<< HEAD


=======
:jest.setup.js
      isFallback: false,
:backup-problematic-files/jest.setup.js
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

:backup-problematic-files/jest.setup.js
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    };
  },
}));

// Mock Next.js Image component
jest.mock("next/image", () => {
  return function MockedImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />;
  };
});
<<<<<<< HEAD
<<<<<<< HEAD


=======
:jest.setup.js
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
main:jest.setup.js
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
<<<<<<< HEAD


  },

=======
:backup-problematic-files/jest.setup.js
    return <a href={href} {...props}>{children}</a>
  }

  },
main:jest.setup.js
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}));
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
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
<<<<<<< HEAD

};

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
};

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
});
};
};
:backup-problematic-files/jest.setup.js
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
