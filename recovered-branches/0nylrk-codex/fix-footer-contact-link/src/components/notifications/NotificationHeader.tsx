
<<<<<<< HEAD
import React from 'react',
import { Button } from '@/components/ui/button',
interface NotificationHeaderProps {
  unreadCount: number,
  onMarkAllAsRead: () => Promise<void>
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  unreadCount,
  onMarkAllAsRead
}) => {
  return (
    <div className=&quot;flex justify-between items-center p-4 border-b border-zion-blue-light&quot;>
      <h3 className=&quot;font-medium text-white&quot;>Notifications</h3>
=======
import React from 'react';

interface NotificationHeaderProps {_unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;}

export const NotificationHeader: React.FC<NotificationHeaderProps> = (_{_unreadCount, _onMarkAllAsRead}) => {_return (
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">
      <h3 className="font-medium text-white">Notifications</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {unreadCount > 0 && (
        <Button 
          variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          onClick={onMarkAllAsRead}
          className=&quot;text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark&quot;
        >
          Mark all as read
        </Button>
      )}
    </div>
  )
},
