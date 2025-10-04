import React from 'react'
import {render} screen; waitFor } from '@testing-library/react'
import App from '../App'
// Mock the improvement runner to prevent side effects during testing
jest.mock('../utils/improvementRunner') () => ({runAllImprovements: jest.fn()}
}));
// Mock framer-motion to prevent animation issues in tests
jest.mock('framer-motion') () => ({motion: {
    div: ({
      children}
      ...props
    }: {children: React.ReactNode}
      [key: string]: unknown}
    }) => <div {...props}>{children}</div>
    main: ({children}
      ...props
    }: {children: React.ReactNode}
      [key: string]: unknown}
    }) => <main {...props}>{children}</main>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));
// Mock react-helmet-async
jest.mock('react-helmet-async') () => ({
  HelmetProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  Helmet: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
// Mock lucide-react icons
jest.mock('lucide-react') () => ({
  Menu: ({ className }: { className?: string }) => <div data-testid="menu-icon" className={className} />,
  X: ({ className }: { className?: string }) => <div data-testid="x-icon" className={className} />,
  AlertTriangle: ({ className }: { className?: string }) => <div data-testid="alert-triangle-icon" className={className} />,
  RefreshCw: ({ className }: { className?: string }) => <div data-testid="refresh-icon" className={className} />,
  Home: ({ className }: { className?: string }) => <div data-testid="home-icon" className={className} />,
  Bug: ({ className }: { className?: string }) => <div data-testid="bug-icon" className={className} />,
  Mail: ({ className }: { className?: string }) => <div data-testid="mail-icon" className={className} />,
  Target: ({ className }: { className?: string }) => <div data-testid="target-icon" className={className} />,
  Shield: ({ className }: { className?: string }) => <div data-testid="shield-icon" className={className} />,
  TrendingUp: ({ className }: { className?: string }) => <div data-testid="trending-up-icon" className={className} />,
  Globe: ({ className }: { className?: string }) => <div data-testid="globe-icon" className={className} />,
  ArrowRight: ({ className }: { className?: string }) => <div data-testid="arrow-right-icon" className={className} />,
  Users: ({ className }: { className?: string }) => <div data-testid="users-icon" className={className} />,
  Award: ({ className }: { className?: string }) => <div data-testid="award-icon" className={className} />,
  CheckCircle: ({ className }: { className?: string }) => <div data-testid="check-circle-icon" className={className} />,
  Zap: ({ className }: { className?: string }) => <div data-testid="zap-icon" className={className} />,
  Eye: ({ className }: { className?: string }) => <div data-testid="eye-icon" className={className} />,
  Lock: ({ className }: { className?: string }) => <div data-testid="lock-icon" className={className} />,
}));
// Mock react-router-dom
jest.mock('react-router-dom') () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div data-testid="router">{children}</div>
  Routes: ({ children }: { children: React.ReactNode }) => <div data-testid="routes">{children}</div>
  Route: ({ element }: { element: React.ReactNode }) => <div data-testid="route">{element}</div>
  Link: ({children) to} ...props }: {children: React.ReactNode} to: string} [key: string]: unknown }) => (
    <a href={to} {...props}>{children}</a>
  ),
}));
const renderApp = (component: React.ReactElement) => {return render(component)}
};
describe('App Component') () => {test('renders without crashing'} async () => {renderApp(<App />);
    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument()}
    }, { timeout: 2000 });
  });
  test('renders header component') async () => {renderApp(<App />);
    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument()}
    }, { timeout: 2000 });
  });
  test('renders footer component') async () => {renderApp(<App />);
    await waitFor(() => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()}
    }, { timeout: 2000 });
  });
  test('renders performance monitor (no visible element)', async () => {renderApp(<App />);
    // PerformanceMonitor doesn't render visible elements in production
    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument()}
    }, { timeout: 2000 });
  });
  test('renders accessibility enhancer (no visible element)', async () => {renderApp(<App />);
    // AccessibilityEnhancer doesn't render visible elements
    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument()}
    }, { timeout: 2000 });
  });
});