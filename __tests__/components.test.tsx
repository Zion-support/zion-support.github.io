import {describe, test, expect   } from '@jest/globals';
import {render, screen   } from '@testing-library/react';
import {HelmetProvider   } from 'react-helmet-async';
importLoadingfrom '../app/components/Loading';
importSEOHeadfrom '../app/components/SEOHead';
describe('ComponentTests', () => {test('Loadingrenderscorrectly', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  test('SEOHeadrenderswithoutcrashing', () => {render(;
      <HelmetProvider>;
        <SEOHead />;
      </HelmetProvider>;
    );
    expect(document.head).toBeInTheDocument()})});
