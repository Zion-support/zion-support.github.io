#!/usr/bin/env python3
"""
Fix test files by adding basic tests.
"""

import os

def fix_test_files():
    """Fix test files"""
    tests = [
        ('__tests__/loading-spinner.test.tsx', '''import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../app/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
'''),
        ('__tests__/image-optimizer.test.tsx', '''import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageOptimizer from '../app/components/ImageOptimizer';

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    render(<ImageOptimizer src="test.jpg" alt="test" />);
    expect(screen.getByAltText('test')).toBeInTheDocument();
  });
});
'''),
        ('__tests__/error-boundary.test.tsx', '''import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../app/components/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders without crashing', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
'''),
        ('__tests__/advanced-components.test.tsx', '''import React from 'react';
import { render, screen } from '@testing-library/react';
import FuturisticButton from '../app/components/FuturisticButton';

describe('Advanced Components', () => {
  it('renders FuturisticButton without crashing', () => {
    render(<FuturisticButton>Test Button</FuturisticButton>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});
''')
    ]
    
    for test_file, content in tests:
        with open(test_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {test_file}")

def main():
    """Main function."""
    print("Fixing test files...")
    
    fix_test_files()
    
    print("Test file fixes complete!")

if __name__ == "__main__":
    main()