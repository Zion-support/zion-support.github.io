import "@testing-library/jest-dom";"
// Mock Next.js router;"
jest.mock("next/router", () => ({")
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

// Mock Next.js Image component;"
jest.mock("next/image", () => {"
  return function MockedImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />;
</img>
      <a href={href} {...props}>
</a>
      </a>"