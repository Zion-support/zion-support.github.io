describe('Component Tests', () => {
  test('Loading renders correctly', () => {
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
  test('SEOHead renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOHead />
      </HelmetProvider>
    )
    expect(document.head).toBeInTheDocument()})})