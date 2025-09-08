<<<<<<< HEAD

// Mock Next.js router
jest.mock("next/router", () => ({

  useRouter() {
    return {
  // TODO: Implement
}"
      route: "/",""
      pathname: "/","
      query: {},"
      asPath: "/","
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {,
  on: jest.fn(),
        off: jest.fn(),

    };
  },
}));

  return function MockedImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
};
});




// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
<<<<<<< HEAD

};



=======
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
