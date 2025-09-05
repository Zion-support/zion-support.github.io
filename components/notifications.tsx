<<<<<<< HEAD
import React from 'react',
import dynamic from 'next/dynamic',
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false}),

export default function NotificationsPage() {
  return <NotificationCenter />
}
=======
import React from 'react';
import dynamic from 'next/dynamic';

const _NotificationCenter = dynamic__(() => import('../components/notifications/NotificationCenter'), {_ssr: false});

export default function NotificationsPage() {_return <NotificationCenter />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
