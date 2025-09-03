ursor/automate-test-fix-improve-and-merge-code-48f3;
// Mock: Next.js router;
jest.mock(
  'next/router', () => ({';
  useRouter() {

  'next/image', () => ({
  __esModule: true,
  default: props => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }}))
// Mock Next.js Link component
jest.mock('
  'next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {

    return (
      <a href={href}, {...props}>
        {children}
      </a>
    )}}));

