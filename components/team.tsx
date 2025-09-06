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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import React from 'react';
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),
export default function TeamPage() {
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {;
  ssr: false,;
});
<<<<<<< HEAD
export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),;
export default function TeamPage() {;
  return <OrgChartPage />;
}
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

=======

<<<<<<< HEAD
export default function TeamPage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false })
=======
export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),
<<<<<<< HEAD
export default function TeamPage() {;
  return <OrgChartPage />;
}
;
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function TeamPage() {
  return <OrgChartPage />;
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
