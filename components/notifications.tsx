<<<<<<< HEAD
import React from 'react',;
import dynamic from 'next/dynamic',;
;
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {;
  ssr:false}),;
;
export default function NotificationsPage() {;
  return <NotificationCenter />,;
}
=======
import React from 'react',
import dynamic from 'next/dynamic',
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'), {
  ssr: false}),

export default function NotificationsPage() {
  return <NotificationCenter />
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
