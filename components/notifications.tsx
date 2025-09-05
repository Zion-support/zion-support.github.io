import React from 'react';
import dynamic from 'next/dynamic';

const _NotificationCenter = dynamic__(() => import('../components/notifications/NotificationCenter'), {_ssr: false});

export default function NotificationsPage() {_return <NotificationCenter />;}
