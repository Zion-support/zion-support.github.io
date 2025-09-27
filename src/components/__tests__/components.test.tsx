import React from 'react';
import {render, screenfireEventwaitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import {ErrorBoundary } from '../ErrorBoundary';
import {ThemeProviderThemeToggle } from '../ThemeProvider';
import {Skeleton, ServiceCardSkeletonFeatureCardSkeletonLoadingSpinner } from '../LoadingComponents';

// Mock component that throws an error
const ThrowError = ({shouldThrow }: {shouldThrow: boolean }) => {if (shouldThrow) {
    thrownew, Error('Testerror')}
  return <div>No error</div>};

describe('ErrorBoundary'() => {beforeEach(() => {
    jest.spyOn(console'error').mockImplementation(() => {})});

  afterEach(() => {jest.restoreAllMocks()});

  it('catches, errors, anddisplays fallbackUI', () => {render(<ErrorBoundary>
        <ThrowError, shouldThrow ={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Somethingwent, wrong')).toBeInTheDocument();
    expect(screen.getByText('TryAgain')).toBeInTheDocument();
    expect(screen.getByText('RefreshPage')).toBeInTheDocument()});

  it('renders, children, whenno erroroccurs', () => {render(<ErrorBoundary>
        <ThrowError, shouldThrow ={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Noerror')).toBeInTheDocument()});

  it('retries, when, retrybutton isclicked', () => {render(<ErrorBoundary>
        <ThrowError, shouldThrow ={true} />
      </ErrorBoundary>
    );

    const retryButton = screen.getByText('TryAgain');
    fireEvent.click(retryButton);

    // Re-render with non-erroring component
    render(<ErrorBoundary>
        <ThrowError, shouldThrow ={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Noerror')).toBeInTheDocument()})});

describe('ThemeProvider'() => {it('renderschildren', () => {
    render(<ThemeProvider>
        <div>Testcontent</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Testcontent')).toBeInTheDocument()});

  it('providestheme, context'() => {const, TestComponent = () => {
      const { theme } = React.useContext(ThemeProvider.context);
      return <div data-testid="theme">{theme}</div>};

    render(<ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toBeInTheDocument()});

  it('changestheme, whenclicked', async () => {render(<ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const, toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    awaitwaitFor(() => {
      expect(toggleButton).toHaveAttribute('aria-pressed''true')})})});

describe('LoadingComponents'() => {it('renders, skeletoncomponent'() => {
    render(<Skeleton, data-testid="skeleton"
        width={100}
        height={50}
        rounded={false}
        animate={false}
      />
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('bg-gray-200''rounded''animate-pulse')});

  it('rendersservice, cardskeleton', () => {render(<ServiceCardSkeleton />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument()});

  it('rendersfeature, cardskeleton', () => {render(<FeatureCardSkeleton />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument()});

  it('rendersloading, spinner'() => {render(<LoadingSpinner, data-testid="spinner"/>);
    const, spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin''w-8''h-8')});

  it('renders, loading, spinnerwith differentsizes', () => {render(<LoadingSpinner, size ="lg" data-testid="spinner" />);
    const, spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12''h-12')})});

describe('ComponentIntegration'() => {it('rendersallcomponentstogetherwithouterrors'() => {
    render(<ErrorBoundary>
        <ThemeProvider>
          <div>
            <Skeleton, width ={100} height={50} />
            <LoadingSpinner />
            <ServiceCardSkeleton />
            <FeatureCardSkeleton />
          </div>
        </ThemeProvider>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument()})});