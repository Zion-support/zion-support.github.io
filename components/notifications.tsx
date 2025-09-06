import React from 'react';
import dynamic from 'next/dynamic';

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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
