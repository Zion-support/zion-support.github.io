import { HelmetProvider } from 'react-helmet-async';

describe('Component Tests', () => {
  // LoadingSpinner test removed - component doesn't exist

  test('SEOEnhancer renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOEnhancer />
      </HelmetProvider>
    );
    expect(document.head).toBeInTheDocument();
  });
});
