import React from 'react';
});

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});