import React from 'react'
import { render, screen } from '@testing-library/react'
  });
import '@testing-library/jest-dom'

// Mock loading spinner component for testing;
const MockLoadingSpinner = () => <div>Loading...</div>;

describe('Loading Spinner', () => {'
  test('renders loading spinner', () => {'
    render(<MockLoadingSpinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();'
  });
});