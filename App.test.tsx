import React from 'react';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Hello App')).toBeInTheDocument();
  });
});