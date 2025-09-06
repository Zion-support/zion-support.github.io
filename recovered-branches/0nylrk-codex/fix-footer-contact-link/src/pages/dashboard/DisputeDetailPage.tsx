
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
          description="View and manage dispute details"
        />;
        <AppHeader />;
        <DisputeDetail />;
        <Footer />;
      </>;
    </ProtectedRoute>;
  );
}

export default DisputeDetailPage;
