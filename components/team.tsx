
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


export default function TeamPage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false })
export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),
export default function TeamPage() {;
  return <OrgChartPage />;
}
;
}
export default function TeamPage() {
  return <OrgChartPage />;
}
}
