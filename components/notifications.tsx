<<<<<<< HEAD
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
}
=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
