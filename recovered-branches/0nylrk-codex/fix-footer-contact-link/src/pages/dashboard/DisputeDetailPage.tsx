<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React from 'react';
<<<<<<< HEAD
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { DisputeDetail  } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';
function DisputeDetailPage() {
  return (
    <ProtectedRoute>
      <>

        <SEO
          title="Dispute Details | Zion AI Marketplace"
=======
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {DisputeDetail} from '@/components/disputes';
import {ProtectedRoute} from '@/components/ProtectedRoute';
function DisputeDetailPage() {;
  return (
    <ProtectedRoute>;
      <>;
        <SEO
          title="Dispute Details | Zion AI Marketplace" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          description="View and manage dispute details"
=======
import React from 'react';
import {SEO} from '@/components / SEO';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {DisputeDetail} from '@/components / disputes';
import {ProtectedRoute} from '@/components / ProtectedRoute';
/**
 * DisputeDetailPage - Function description
 */
function DisputeDetailPage() {
  return (
    <ProtectedRoute>;
      <>;
        <SEO;
          title="Dispute Details | Zion AI Marketplace";
          description="View and manage dispute details";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        />;
        <AppHeader />;
        <DisputeDetail />;
        <Footer />;
      </>;
<<<<<<< HEAD
    </ProtectedRoute>;
  );
}
export default DisputeDetailPage;

=======
    </ProtectedRoute>);
}
export default DisputeDetailPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
