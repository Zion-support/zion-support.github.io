
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
import dynamic from 'next/dynamic';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD
const NotificationCenter = dynamic(
  () => import('../components/notifications/NotificationCenter')
=======
import dynamic from 'next / dynamic';
;
const NotificationCenter = dynamic (
  () => import ('../components / notifications / NotificationCenter'),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    ssr: false
  }
);
<<<<<<< HEAD

export default function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false})
=======
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false}),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function NotificationsPage() {
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return <NotificationCenter />;
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return <NotificationCenter />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
