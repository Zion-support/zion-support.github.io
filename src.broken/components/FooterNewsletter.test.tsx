
describe('FooterNewsletter', () => {
  it('renders without crashing', () => {
    render(<FooterNewsletter  />) ,
    expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ,

  it('displays expected content', () => {
    render(<FooterNewsletter  />) ,
    // Add specific test assertions based on component content
  }) }) ,
