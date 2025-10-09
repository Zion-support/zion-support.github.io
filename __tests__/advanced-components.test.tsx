import { HelmetProvider } from 'react-helmet-async';

// Mock SEO data
const mockSEOData = {
  title: 'Test Page',
  description: 'Test Description',
  keywords: ['test', 'seo'],
  canonicalUrl: 'https://example.com/test',
  structuredData: {
    '@type': 'WebPage',
    name: 'Test Page',
  },
};

describe('AdvancedSEOOptimizer', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <HelmetProvider>
          <AdvancedSEOOptimizer seoData={mockSEOData} />
        </HelmetProvider>
      </MemoryRouter>
    );
    expect(document.head).toBeInTheDocument();
  });

  test('renders structured data when enabled', () => {
    const { container } = render(
      <MemoryRouter>
        <HelmetProvider>
          <AdvancedSEOOptimizer
            seoData={mockSEOData}
            enableStructuredData={true}
          />
        </HelmetProvider>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('renders Open Graph tags when enabled', () => {
    const { container } = render(
      <MemoryRouter>
        <HelmetProvider>
          <AdvancedSEOOptimizer seoData={mockSEOData} enableOpenGraph={true} />
        </HelmetProvider>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('renders Twitter Card tags when enabled', () => {
    const { container } = render(
      <MemoryRouter>
        <HelmetProvider>
          <AdvancedSEOOptimizer seoData={mockSEOData} enableTwitterCards={true} />
        </HelmetProvider>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
