
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
import dynamic from 'next/dynamic';
<<<<<<< HEAD

<<<<<<< HEAD
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {
  ssr: false
});

export default function TeamPage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false })
=======
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function TeamPage() {
=======
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {;
  ssr: false,;
});

export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),;
export default function TeamPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return <OrgChartPage />;
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
