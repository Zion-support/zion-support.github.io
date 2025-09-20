
describe('TestimonialsSection', () => {
  it('renders without crashing', () => {
    render(<TestimonialsSection  />) ;
    expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ;

  it('displays expected content', () => {
    render(<TestimonialsSection  />) ;
    // Add specific test assertions based on component content
  }) }) ;
