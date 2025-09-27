import React from 'react';
import { render  screen } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';
import { Skeleton } from '../Skeleton';
import { LoadingSpinner } from '../LoadingSpinner';
import { ServiceCardSkeleton } from '../ServiceCardSkeleton';
import { FeatureCardSkeleton } from '../FeatureCardSkeleton';

 {if (shouldThrow) {
    thrownew  Error('Testerror')}
  return <div>No error</div>};

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>}});


describe('ErrorBoundary'() => {
  beforeEach(() => {
    jest.spyOn(console'error').mockImplementation(() => {})});

  afterEach(() => {
    jest.restoreAllMocks()});

 {render(<ErrorBoundary>
        <ThrowError  shouldThrow ={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Somethingwent  wrong')).toBeInTheDocument();
    expect(screen.getByText('TryAgain')).toBeInTheDocument();
    expect(screen.getByText('RefreshPage')).toBeInTheDocument()});

  it('renders  children  whenno erroroccurs', () => {render(<ErrorBoundary>
        <ThrowError  shouldThrow ={false} />

  it('renders children when there are no errors', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument()});

  it('renders error fallback when there is an error', () => {
    const ThrowError = () => {
      throw new Error('Test error')};

    render(
      <ErrorBoundary>
        <ThrowError />

      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Please refresh the page or try again later.')).toBeInTheDocument()});

 {render(<ErrorBoundary>
        <ThrowError  shouldThrow ={true} />

  it('logs error to console'() => {
    const consoleSpy = jest.spyOn(console'error').mockImplementation(() => {});
    const ThrowError = () => {
      throw new Error('Test error')};

    render(
      <ErrorBoundary>
        <ThrowError />

      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled()})});


        <ThrowError  shouldThrow ={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Noerror')).toBeInTheDocument()})});

describe('ThemeProvider'() => {it('renderschildren', () => {
    render(<ThemeProvider>
        <div>Testcontent</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Testcontent')).toBeInTheDocument()});

  it('providestheme  context'() => {const  TestComponent = () => {
      const { theme } = React.useContext(ThemeProvider.context);
      return <div data-testid="theme">{theme}</div>};

    render(<ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toBeInTheDocument()});

  it('changestheme  whenclicked', async () => {render(<ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const  toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    awaitwaitFor(() => {
      expect(toggleButton).toHaveAttribute('aria-pressed''true')})})});

describe('LoadingComponents'() => {it('renders  skeletoncomponent'() => {
    render(<Skeleton  data-testid="skeleton"

describe('LoadingComponents', () => {
  it('renders skeleton component', () => {
    render(
      <Skeleton 
        data-testid="skeleton"

        width={100}
        height={50}
        rounded={false}
        animate={false}
      />
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('bg-gray-200')});

 {render(<ServiceCardSkeleton />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument()});

  it('rendersfeature  cardskeleton', () => {render(<FeatureCardSkeleton />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument()});

  it('rendersloading  spinner'() => {render(<LoadingSpinner  data-testid="spinner"/>);
    const  spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin''w-8''h-8')});

  it('renders  loading  spinnerwith differentsizes', () => {render(<LoadingSpinner  size ="lg" data-testid="spinner" />);
    const  spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12''h-12')})});

describe('ComponentIntegration'() => {it('rendersallcomponentstogetherwithouterrors'() => {
    render(<ErrorBoundary>
        <ThemeProvider>
          <div>
            <Skeleton  width ={100} height={50} />
            <LoadingSpinner />
            <ServiceCardSkeleton />
            <FeatureCardSkeleton />
          </div>
        </ThemeProvider>

  it('renders service card skeleton', () => {
    render(<ServiceCardSkeleton />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument()});

  it('renders feature card skeleton', () => {
    render(<FeatureCardSkeleton />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument()});

  it('renders loading spinner', () => {
    render(<LoadingSpinner data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin')});

  it('renders loading spinner with different sizes', () => {
    render(<LoadingSpinner size="lg" data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12', 'h-12')})});

describe('ComponentIntegration', () => {
  it('renders all components together without errors', () => {
    render(
      <ErrorBoundary>
        <div>
          <Skeleton width={100} height={50} />
          <LoadingSpinner />
          <ServiceCardSkeleton />
          <FeatureCardSkeleton />
        </div>

      </ErrorBoundary>
    );

    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument()})});