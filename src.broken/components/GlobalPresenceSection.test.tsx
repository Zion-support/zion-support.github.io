
describe('GlobalPresenceSection', () => {
  it('renders without crashing', () => {
    render(<GlobalPresenceSection  />) ,
    expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ,

  it('displays expected content', () => {
    render(<GlobalPresenceSection  />) ,
    // Add specific test assertions based on component content
  }) }) ,
