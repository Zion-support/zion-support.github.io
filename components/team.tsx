
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
=======
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {;
  ssr: false,;
});

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  return <OrgChartPage />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),;
export default function TeamPage() {;
  return <OrgChartPage />;
=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return <OrgChartPage />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
