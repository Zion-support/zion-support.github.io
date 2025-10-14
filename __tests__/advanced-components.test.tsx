import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

describe('Advanced Components', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <HelmetProvider>
        <BrowserRouter>
          <div>Test component</div>
        </BrowserRouter>
      </HelmetProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
