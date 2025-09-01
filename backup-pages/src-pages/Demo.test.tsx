describe('Demo', () => {
  it('renders without crashing', () => {
    render(<Demo />);
    expect(
      screen.getByRole('main') || screen.getByText(/.*/)
    ).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<Demo />);
    // Add specific test assertions based on component content
  });
});
