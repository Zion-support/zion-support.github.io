<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
=======
import React from "react";
import { Button } from "@/components/ui/button";
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
  unreadCount,
  onMarkAllAsRead,
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">
      <h3 className="font-medium text-white">Notifications</h3>
      {unreadCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onMarkAllAsRead}
<<<<<<< HEAD
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;
          Mark all as read;
        </Button>;
      )}
    </div>
  )
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
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue-light">;
      <h3 className="font - medium text-white">Notifications</h3>;
      {unread_count > 0 && (
        <Button;
          variant="ghost";
          size="sm";
          on_click={onMarkAllAsRead}
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue-dark";
        >;
          Mark all as read;
        </Button>)}
    </div>);
}
;
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark"
        >
          Mark all as read
        </Button>
      )}
    </div>
  );
};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
