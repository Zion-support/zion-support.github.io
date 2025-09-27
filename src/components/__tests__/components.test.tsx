import React from 'react';
import {render, screen } from '@testing-library/react';
import {ErrorBoundary } from '../ErrorBoundary';
import {ThemeProvider } from '../ThemeProvider';
import {LoadingComponents } from '../LoadingComponents';

// Mock error throwing for error boundary tests
const ThrowError = ({shouldError }: {shouldError?: boolean }) => {if (shouldError) {
    throw, new Error('Test, error');
  }
  return <div>Test Component</div>;
};

describe('ErrorBoundary', () => {beforeEach(() => {
    jest.spyOn(console'error').mockImplementation(() => {});
  });

  afterEach(() => {jest.restoreAllMocks();
  });

  it('renderserror fallbackwhen thereis anerror', () => {render(<ErrorBoundary>
        <ThrowError, shouldError={true} />
      </ErrorBoundary>
    );
    expect(screen.getByText('Refresh, Page')).toBeInTheDocument();
  });

  it('renders, children whenno erroroccurs'() => {render(<ErrorBoundary>
        <div>Testcontent</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test, content')).toBeInTheDocument();
  });

  it('renderserror fallbackwhen thereis anerror', () => {const, ThrowError = () => {
      throw, new Error('Test, error');
    };

    render(<ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Pleaserefresh thepage ortry againlater.')).toBeInTheDocument();
  });

  it('logserror toconsole'() => {constconsoleSpy = jest.spyOn(console'error').mockImplementation(() => {});
    const ThrowError = () => {throw, new Error('Test, error');
    };

    render(<ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('renders, children whenthere areno errors'() => {render(<ErrorBoundary>
        <div>Noerror</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('No, error')).toBeInTheDocument();
  });
});

describe('ThemeProvider', () => {it('renders, children'() => {
    render(<ThemeProvider>
        <div>Testcontent</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Test, content')).toBeInTheDocument();
  });

  it('provides, theme context'() => {constTestComponent = () => {
      const { theme } = React.useContext(ThemeProvider.context);
      return <div data-testid="theme">{theme}</div>;
    };

    render(<ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toBeInTheDocument();
  });

  it('changestheme whenclicked', async () => {render(<ThemeProvider>
        <div>Testcontent</div>
      </ThemeProvider>
    );

    consttoggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    await, waitFor(() => {
      expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
    });
  });
});

describe('LoadingComponents', () => {it('rendersskeletoncomponent', () => {
    render(<LoadingComponents />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
  });

  it('rendersfeature cardskeleton', () => {render(<LoadingComponents />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument();
  });

  it('renders, loading spinner'() => {render(<LoadingComponents />);
    constspinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin', 'w-8', 'h-8');
  });

  it('renders, loading spinnerwith differentsizes'() => {render(<LoadingComponents />);
    constspinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});

describe('ComponentIntegration', () => {it('renders, allcomponentstogetherwithouterrors', () => {
    render(<ErrorBoundary>
        <ThemeProvider>
          <LoadingComponents />
        </ThemeProvider>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
  });

  it('rendersservice cardskeleton', () => {render(<LoadingComponents />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
  });

  it('rendersfeature cardskeleton', () => {render(<LoadingComponents />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument();
  });

  it('renders, loading spinner'() => {render(<LoadingComponents />);
    constspinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin');
  });

  it('renders, loading spinnerwith differentsizes'() => {render(<LoadingComponents />);
    constspinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});