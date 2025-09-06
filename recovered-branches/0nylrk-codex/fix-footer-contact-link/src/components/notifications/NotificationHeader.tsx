<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationHeader.tsx


<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;

<<<<<<< HEAD
}

=======


}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({

  unreadCount
=======
import React from 'react';
import { Button } from '@/components/ui/button';
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>

}

import React from "react";
import { Button } from "@/components/ui/button";
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;

}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
unreadCount
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark"
        >
          Mark all as read
        </Button>
      )}
<<<<<<< HEAD

    </div>;
=======
</div>

  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  );
};

<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationHeader.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationHeader.tsx




=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationHeader.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; {
  unreadCount > 0 && (<Button variant="ghost" size="sm" onClick= {
  onMarkAllAsRead 
}className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark" > Mark all as read </Button>) 
}</div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
