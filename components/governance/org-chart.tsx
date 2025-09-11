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
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}=======
export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;
}

}
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
}
=======;
export default /**
 * OrgChartGovernancePage - Function description
 */
function OrgChartGovernancePage() {
  return <OrgChartPage />;const OrgChartPage = dynamic (() => import ('../../components / org / OrgChartPage'), { ssr: false }),
export default /**
 * OrgChartGovernancePage - Function description
 */
function OrgChartGovernancePage() {
  return <OrgChartPage />;
}

export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),

export default function OrgChartGovernancePage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false })

export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;
}

}
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
}
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
