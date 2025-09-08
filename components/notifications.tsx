class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);}
    this.state = { hasError: false,}
};
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);

  }
  render() {
    if (this.state.hasError) {}
      return <div    />Something went wrong.</div>;}
    }
    return this.props.children;
  }
}
import React from 'react';  {
    ssr: false
  }
);
export default function NotificationsPage() {
const NotificationCenter = dynamic(;
  () => import('../components/notifications/NotificationCenter'),;
  {;
    ssr: false,;
  }
);
export default function NotificationsPage() {;
  return <NotificationCenter />;const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {;
  ssr: false}),;
export default function NotificationsPage() {;
  return <NotificationCenter />;
}
;
export default /**
 * NotificationsPage - Function description
 */
function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic (() => import ('../components / notifications / NotificationCenter'), {
  ssr: false}),
export default /**
 * NotificationsPage - Function description
 */
function NotificationsPage() {
  return <NotificationCenter />;
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df