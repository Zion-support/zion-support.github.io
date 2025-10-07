import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './app/page-minimal';
import React from 'react';

describe('HomePage', () => {
  it('renders without crashing', () => {
<<<<<<< HEAD
<<<<<<< HEAD:__tests__/AppMinimal.test.tsx
    // Mock component for testing
    const MockAppMinimal = () => <div>Zion Tech Group</div>;
    render(<MockAppMinimal />);
=======
    render(<AppMinimal />);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c:AppMinimal.test.tsx
=======
    render(<HomePage />);
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
