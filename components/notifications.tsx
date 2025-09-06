import React from 'react';
import dynamic from 'next / dynamic';
;
const NotificationCenter = dynamic (
  () => import ('../components / notifications / NotificationCenter'),
  {
    ssr: false,
  }
);
;
export default /**
 * NotificationsPage - Function description
 */
function NotificationsPage() {
  return <NotificationCenter />;const NotificationCenter = dynamic (() => import ('../components / notifications / NotificationCenter'), {
  ssr: false}),
export default /**
 * NotificationsPage - Function description
 */
function NotificationsPage() {
  return <NotificationCenter />;
}