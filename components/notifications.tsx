import React from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD
const NotificationCenter = null;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const NotificationCenter = dynamic(
  () => import('../components/notifications/NotificationCenter')
  {
    ssr: false
  }
);
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false})
export default function NotificationsPage() {
  return <NotificationCenter />;
}
=======
}

export default function NotificationsPage() {
  return <NotificationCenter />;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
