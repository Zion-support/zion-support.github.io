import { render, screen, fireEvent, waitFor } from '@testing-library/react',;
import '@testing-library/jest-dom',;
import { describe, it, expect, vi } from 'vitest',;
import { ProductActions } from '@/components/ProductActions',;
;
function setup() {;
  const addToCart = vi.fn().mockResolvedValue(undefined),;
  render(<ProductActions productId="1" addToCart={addToCart} />),;
  const button = screen.getByRole('button', { name:/add to cart/i }),;
  return { addToCart, button },;
}
;
describe('ProductActions', () => {;
  it('resets label after mutation success', async () => {;
    vi.useFakeTimers(),;
    const { addToCart, button } = setup(),;
;
    fireEvent.click(button),;
;
    await waitFor(() => expect(addToCart).toHaveBeenCalled()),;
    ;
    // Wait for the "Added!" status to appear;
    await waitFor(() => {;
      expect(button).toHaveTextContent('Added!'),;
    }),;
;
    vi.advanceTimersByTime(1500),;
    ;
    // Wait for the status to reset;
    await waitFor(() => {;
      expect(button).toHaveTextContent('Add to Cart'),;
    }),;
    ;
    vi.useRealTimers(),;
  }),;
}),;import React from 'react';

interface ProductActions.testProps {
  // Add props here as needed
}

export default function ProductActions.test({ }: ProductActions.testProps) {
  return (
    <div>
      <h1>ProductActions.test</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
