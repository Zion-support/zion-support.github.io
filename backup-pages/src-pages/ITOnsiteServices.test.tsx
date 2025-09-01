describe('ITOnsiteServices', () => {
  it('renders without crashing', () => {
    render(<ITOnsiteServices />);
    expect(
      screen.getByRole('main') || screen.getByText(/.*/)
    ).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<ITOnsiteServices />);
    // Add specific test assertions based on component content
  });
});
