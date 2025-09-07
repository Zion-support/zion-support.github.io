
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();'
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    // Add interaction tests here,
expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});
  });
});
  it('displays correct content, () => {
    render(<App />);
    // Add specific content assertions here
  });
  it(handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
  });
});

