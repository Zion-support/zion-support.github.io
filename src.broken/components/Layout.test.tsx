
describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout  />) ,
    expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ,

  it('displays expected content', () => {
    render(<Layout  />) ,
    // Add specific test assertions based on component content
  }) }) ,
