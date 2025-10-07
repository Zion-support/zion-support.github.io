import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './app/page-minimal';
import React from 'react';

describe('HomePage', () => {
  it('renders without crashing', () => {
<<<<<<< HEAD:__tests__/AppMinimal.test.tsx
    render(<HomePage />);
=======
    render(<AppMinimal />);
>>>>>>> cursor/fix-errors-and-merge-to-main-ccfd:AppMinimal.test.tsx
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
