import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('ErrorBoundary', () => {
  it('renders without crashing', () => {
    render(
//       <BrowserRouter>
//         <ErrorBoundary>
          <ThrowError shouldThrow={false} />
//         </ErrorBoundary>
//       </BrowserRouter>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    render(
//       <BrowserRouter>
//         <ErrorBoundary>
          <ThrowError shouldThrow={true} />
//         </ErrorBoundary>
//       </BrowserRouter>
    );

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
    expect(screen.getByText('Go Home')).toBeInTheDocument();
  });

  it('has clickable reset button', () => {
    render(
//       <BrowserRouter>
//         <ErrorBoundary>
          <ThrowError shouldThrow={true} />
//         </ErrorBoundary>
//       </BrowserRouter>
    );

    const tryAgainButton = screen.getByText('Try Again');
    expect(tryAgainButton).toBeInTheDocument();
    expect(tryAgainButton).toBeEnabled();
  });

  it('renders custom fallback when provided', () => {
    const customFallback = <div>Custom error message</div>;
    
    render(
//       <BrowserRouter>
        <ErrorBoundary fallback={customFallback}>
          <ThrowError shouldThrow={true} />
//         </ErrorBoundary>
//       </BrowserRouter>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
  });
});
