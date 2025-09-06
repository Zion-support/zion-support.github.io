import React from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD

const NotificationCenter = dynamic(
  () => import('../components/notifications/NotificationCenter'),
  {
    ssr: false,
  }
);

export default function NotificationsPage() {
  return <NotificationCenter />;
=======
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false}),
export default function NotificationsPage() {
  return <NotificationCenter />;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
