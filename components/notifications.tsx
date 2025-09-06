<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


  return <NotificationCenter />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
import dynamic from 'next / dynamic';
;
const NotificationCenter = dynamic (
  () => import ('../components / notifications / NotificationCenter'),
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  {
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
