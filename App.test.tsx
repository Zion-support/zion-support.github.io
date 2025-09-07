describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('has correct structure', () => {
    render(<App />);
    // Add more specific tests here
  });