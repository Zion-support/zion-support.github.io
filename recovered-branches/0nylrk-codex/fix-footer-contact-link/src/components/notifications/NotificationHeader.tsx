
<<<<<<< HEAD

import React from 'react';
import { Button } from '@/components/ui/button';
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>


=======



=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({

  unreadCount
  onMarkAllAsRead
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">
      <h3 className="font-medium text-white">Notifications</h3>
      {unreadCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD

          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark"
        >
          Mark all as read
        </Button>
      )}
    </div>

=======
=======
import {Button} from '@/components/ui/button';
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;
          Mark all as read;
        </Button>;
      )}




<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    </div>;
  );
};
