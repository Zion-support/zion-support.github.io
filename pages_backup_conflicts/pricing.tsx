import React from 'react';


  it('renders add to cart button', () => {
    render(<MockAddToCart productId="test-product" onAddToCart={mockOnAddToCart} />);
    
    const button = screen.getByTestId('add-to-cart');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add to Cart');
  });


});
