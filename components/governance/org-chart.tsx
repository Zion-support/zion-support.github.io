<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
const OrgChartPage = dynamic(;
  () => import('../../components/org/OrgChartPage'),;
  { ssr: false }
);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import dynamic from 'next / dynamic';
;
const OrgChartPage = dynamic (
  () => import ('../../components / org / OrgChartPage'),
  { ssr: false }
);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),

<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
