
test('renders app', () => {
  render(<App />);
  expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})