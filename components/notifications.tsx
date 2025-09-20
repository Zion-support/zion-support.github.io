import React from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD
const NotificationCenter = null;
=======
const NotificationCenter = dynamic(
  () => import('../components/notifications/NotificationCenter')
  {
    ssr: false
  }
);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false})
export default function NotificationsPage() {
  return <NotificationCenter />;
}