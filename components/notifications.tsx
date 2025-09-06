<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452


  return <NotificationCenter />;
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import dynamic from 'next / dynamic';
;
const NotificationCenter = dynamic (
  () => import ('../components / notifications / NotificationCenter'),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from 'react';
import dynamic from 'next/dynamic';
const NotificationCenter = null;
const NotificationCenter = dynamic(
  () => import('../components/notifications/NotificationCenter')
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  {
    ssr: false
  }
);
export default function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false})
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
