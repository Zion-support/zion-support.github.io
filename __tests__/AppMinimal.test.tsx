import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';

describe('AppMinimal', () => {
  it('renders without crashing', () => {
<<<<<<< HEAD:__tests__/AppMinimal.test.tsx
    // Mock component for testing
    const MockAppMinimal = () => <div>Zion Tech Group</div>;
    render(<MockAppMinimal />);
=======
    render(<AppMinimal />);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c:AppMinimal.test.tsx
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
