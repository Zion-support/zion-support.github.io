import React from 'react'
import dynamic from 'next/dynamic'
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false}),

export default function NotificationsPage() {
  return <NotificationCenter />
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
