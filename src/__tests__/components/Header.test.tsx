import React from 'react';
});

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
>>>>>>> cursor/fix-errors-and-merge-to-main-0af9
  });
});