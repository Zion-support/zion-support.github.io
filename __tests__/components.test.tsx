<<<<<<< HEAD
import { describe, test, expect , render, screen  } from '@jest/globals';';';
import { render, screen  } from '@testing-library/react';';';
import { HelmetProvider } from 'react-helmet-async';';';
import LoadingSpinner from '../app/components/LoadingSpinner';';';
import SEOEnhancer from '../app/components/SEOEnhancer';';'

describe('Component Tests', () => {'
  test('LoadingSpinner renders correctly', () => {'
    render(<LoadingSpinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()'
  })
  test('SEOEnhancer renders without crashing', () => {'
    render(
  // TODO: Add parameters
)
      <HelmetProvider>
<SEOEnhancer />
    )
    expect(document.head).toBeInTheDocument()
  })
})
=======
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Loading from '../app/components/Loading';
import SEOHead from '../app/components/SEOHead';

describe('Components', () => {
  test('Loading component renders correctly', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('SEOHead component renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOHead title="Test Title" description="Test Description" />
      </HelmetProvider>
    );
    expect(document.head).toBeInTheDocument();
  });
});
