import React, { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { useSessionDuration } from '../hooks/useSessionDuration';
import { useNavigationGestures } from '../hooks/useNavigationGestures';
import { useSafePathname } from '../hooks/useSafePathname';
import { logErrorToProduction } from '../utils/productionLogger';
import EmailVerificationBanner from '../components/EmailVerificationBanner';
import { AppHeader } from "./AppHeader";
import Footer from "../components/Footer";
import { SkipLink } from "../components/SkipLink";
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'sonner';

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  const { user, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use the hooks
  useSessionDuration();
  useNavigationGestures();
  useSafePathname();

  const handleError = (error: Error) => {
    console.error('AppLayout error:', error);
    setError(error.message);
    logErrorToProduction(error);
  };

  const resetError = () => {
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SkipLink />
      <AppHeader />
      
      <main className="flex-1">
        <ErrorBoundary onError={handleError} fallback={<div>Something went wrong</div>}>
          {isAuthenticated && user && !user.emailVerified && (
            <EmailVerificationBanner />
          )}
          {children || <Outlet />}
        </ErrorBoundary>
      </main>

      {!hideFooter && <Footer />}
      <Toaster />
    </div>
  );
}