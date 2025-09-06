<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;
          Mark all as read;
        </Button>;
      )}
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue - light">;
      <h3 className="font - medium text - white">Notifications</h3>;
=======
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue-light">;
      <h3 className="font - medium text-white">Notifications</h3>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      {unread_count > 0 && (
        <Button;
          variant="ghost";
          size="sm";
          on_click={onMarkAllAsRead}
<<<<<<< HEAD
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue - dark";
=======
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue-dark";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        >;
          Mark all as read;
        </Button>)}
    </div>);
}
;
<<<<<<< HEAD
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark";
        >;
          Mark all as read;
        </Button>;
      )}
    </div>
  );
};
=======
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
