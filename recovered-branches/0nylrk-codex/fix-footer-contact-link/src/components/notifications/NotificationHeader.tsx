<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;
<<<<<<< HEAD



}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({

  unreadCount
  onMarkAllAsRead
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import React from "react";
import { Button } from "@/components/ui/button";
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
>>>>>>> main
}

}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  unreadCount,
  onMarkAllAsRead,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">
      <h3 className="font-medium text-white">Notifications</h3>
      {unreadCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;
          Mark all as read;
        </Button>;
      )}




=======
    </div>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark";
        >;
          Mark all as read;
        </Button>;
      )}
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
=======
    </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> main
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
