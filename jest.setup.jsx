import,
  @testing-library/jest-dom';// Mock Next.js router
jest.mock(
  'next/router', () => ({
  useRouter() {
    return {
      route: '/,
      pathname:
  '/',
      query: {},
      asPath:
  '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}))

// Mock Next.js Image component
jest.mock(
  'next/image', () => ({
  __esModule: true,
  default: props => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}))

export default function Jest.setup({ }: Jest.setupProps) {
  return (
    <div>
      <h1>Jest.setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
}
}
}
}
