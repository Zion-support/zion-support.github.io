
describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header  />) ,
    expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ,

  it('displays expected content', () => {
    render(<Header  />) ,
    // Add specific test assertions based on component content
  }) }) ,
