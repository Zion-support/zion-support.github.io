
<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
=======


  return <NotificationCenter />;
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
import dynamic from 'next / dynamic';
;
const NotificationCenter = dynamic (
  () => import ('../components / notifications / NotificationCenter'),
<<<<<<< HEAD


import React from 'react';
import dynamic from 'next/dynamic';
const NotificationCenter = null;
const NotificationCenter = dynamic(
  () => import('../components/notifications/NotificationCenter')
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  {
    ssr: false
  }
);
<<<<<<< HEAD
export default function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false})
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD


origin/cursor/automate-test-improve-and-merge-code-2533
=======
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

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
