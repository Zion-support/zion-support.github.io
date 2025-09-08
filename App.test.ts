
import App from './App';
  it('handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});

