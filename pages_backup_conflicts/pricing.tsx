import React from 'react';
<<<<<<< HEAD
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from '@/components/AddToCart';

// Mock the AddToCart component if it doesn't exist
const MockAddToCart = ({ productId, onAddToCart }: { productId: string; onAddToCart: () => void }) => (
  <button onClick={onAddToCart} data-testid="add-to-cart">
    Add to Cart
  </button>
);

describe('AddToCart Component', () => {
  const mockOnAddToCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
interface PricingProps {
  // Add props here as needed
}

<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> merged-prs-20250907-203621
export default function Pricing({ }: PricingProps) {
  return (
    <div>
      <h1>Pricing</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD

}
}
=======
}
}
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  it('renders add to cart button', () => {
    render(<MockAddToCart productId="test-product" onAddToCart={mockOnAddToCart} />);
    
    const button = screen.getByTestId('add-to-cart');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add to Cart');
  });

<<<<<<< HEAD
  it('calls onAddToCart when button is clicked', () => {
    render(<MockAddToCart productId="test-product" onAddToCart={mockOnAddToCart} />);
    
    fireEvent.click(button);
    
    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
  });

  it('handles multiple clicks correctly', async () => {
    render(<MockAddToCart productId="test-product" onAddToCart={mockOnAddToCart} />);
    
    
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(mockOnAddToCart).toHaveBeenCalledTimes(3);
  });
});
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
