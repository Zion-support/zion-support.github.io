describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('SEOEnhancer renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOEnhancer />
      </HelmetProvider>);
    expect(document.head).toBeInTheDocument();
  });
});
