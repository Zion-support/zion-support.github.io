import React from 'react';
import dynamic from 'next/dynamic';

<<<<<<< HEAD
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'){
  ssr: false});
=======
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false,
});
>>>>>>> origin/auto/autonomy-17186719616

export default function NotificationsPage() {
  return <NotificationCenter />;
}
