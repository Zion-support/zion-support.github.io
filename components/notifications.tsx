import React from 'react';
import dynamic from 'next/dynamic';
const NotificationCenter = null;
export default function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false}),
export default function NotificationsPage() {
  return <NotificationCenter />;
}
;