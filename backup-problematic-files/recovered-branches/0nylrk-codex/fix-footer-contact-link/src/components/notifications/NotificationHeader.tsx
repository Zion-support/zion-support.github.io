<<<<<<< HEAD
import {Button} from '@/components/ui/button';
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;
}
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({;
  unreadCount,;
  onMarkAllAsRead;
}) => {;
  return (
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">;
      <h3 className="font-medium text-white">Notifications</h3>;
      {unreadCount > 0 && (;
        <Button
          variant="ghost" 
          size="sm" 
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;
=======

import React from 'react',;
import { Button } from '@/components/ui/button',;
;
interface NotificationHeaderProps {;
  unreadCount:number,;
  onMarkAllAsRead:() => Promise<void>;
}
;
export const NotificationHeader:React.FC<NotificationHeaderProps> = ({;
  unreadCount,;
  onMarkAllAsRead;
}) => {;
  return (;
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">;
      <h3 className="font-medium text-white">Notifications</h3>;
      {unreadCount > 0 && (;
        <Button ;
          variant="ghost" ;
          size="sm" ;
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark";
        >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          Mark all as read;
        </Button>;
      )}
    </div>;
<<<<<<< HEAD
  );
};
import React from './react';
import { Button  } from '@/components / ui / button';
interface NotificationHeaderProps {
  unread_count: number;
  onMarkAllAsRead: () => Promise < void>;
}
export const NotificationHeader: React.FC < NotificationHeaderProps> = ({
  unread_count,
  onMarkAllAsRead,
}) => {
  return (
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue - light">;
      <h3 className="font - medium text - white">Notifications</h3>;
      {unread_count > 0 && (
        <Button;
          variant="ghost";
          size="sm";
          on_click={onMarkAllAsRead}
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue - dark";
        >;
          Mark all as read;
        </Button>)}
    </div>);
}
;
=======
  ),;
},; {
  unreadCount > 0 && (<Button variant="ghost" size="sm" onClick= {
  onMarkAllAsRead 
}className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark" > Mark all as read </Button>) 
}</div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
