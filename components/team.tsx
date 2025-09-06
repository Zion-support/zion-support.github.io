<<<<<<< HEAD
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


  return <OrgChartPage />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
import React from 'react';
  return <OrgChartPage />;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),
export default function TeamPage() {
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {;
  ssr: false,;
});

export default function TeamPage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false })
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  return <OrgChartPage />;
}

export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),

export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),;
export default function TeamPage() {;
  return <OrgChartPage />;
import dynamic from 'next / dynamic';
;
const OrgChartPage = dynamic (() => import ('../components / org / OrgChartPage'), {
  ssr: false,
});
;
export default /**
 * TeamPage - Function description
 */
function TeamPage() {
  return <OrgChartPage />;const OrgChartPage = dynamic (() => import ('../components / org / OrgChartPage'), { ssr: false }),
export default /**
 * TeamPage - Function description
 */
function TeamPage() {
  return <OrgChartPage />;
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
