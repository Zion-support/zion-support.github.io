<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import { Button } from '@/components/ui/button';
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;
<<<<<<< HEAD
<<<<<<< HEAD
  onMarkAllAsRead: () => Promise<void>;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({

  unreadCount
  onMarkAllAsRead
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
=======
import React from "react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button";
interface NotificationHeaderProps {}
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
=======
  onMarkAllAsRead: () => Promise<void>;export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onMarkAllAsRead: () => Promise<void>;export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


export const NotificationHeader: React.FC<NotificationHeaderProps> = ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react";
import { Button } from "@/components/ui/button";
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;
  onMarkAllAsRead: () => Promise<void>;export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  unreadCount,
  onMarkAllAsRead,
}) => {}
  return ("
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">"
      <h3 className="font-medium text-white">Notifications</h3>
      {unreadCount > 0 && (
        <Button"
          variant="ghost""
          size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark"
        >
          Mark all as read
        </Button>
      )}
    </div>
  );
}

=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          onClick={onMarkAllAsRead}
=======
          onClick={onMarkAllAsRead}";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;
          Mark all as read;
        </Button>;
      )}
    </div>
  )
};
import React from './react';'
import { Button  } from '@/components / ui / button';
interface NotificationHeaderProps {}
  unread_count: number;

import React from "react";""
import { Button } from "@/components/ui/button";"
interface NotificationHeaderProps {
  // TODO: Implement
}
  unreadCount: number;,
  onMarkAllAsRead: () => Promise<void>;
</void>
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
</NotificationHeaderProps>"
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">"
</div>"
      <h3 className="font-medium text-white">Notifications</h3>"
        <Button;"
          variant="ghost"""
          size="sm""
          onClick={onMarkAllAsRead}"
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;"
</Button>
        </Button>;
    </div>)
  onMarkAllAsRead: () => Promise < void>;
}
export const NotificationHeader: React.FC < NotificationHeaderProps> = ({}
  unread_count,
  onMarkAllAsRead,
<<<<<<< HEAD
}) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue-light">;
      <h3 className="font - medium text-white">Notifications</h3>;
=======
}) => {}
  return (";
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue - light">;"
      <h3 className="font - medium text - white">Notifications</h3>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue - light">;
      <h3 className="font - medium text - white">Notifications</h3>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue-light">;
      <h3 className="font - medium text-white">Notifications</h3>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {unread_count > 0 && (
        <Button;"
          variant="ghost";"
          size="sm";
<<<<<<< HEAD
          on_click={onMarkAllAsRead}
<<<<<<< HEAD
<<<<<<< HEAD
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue-dark";
=======
          on_click={onMarkAllAsRead}"
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue - dark";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue - dark";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue-dark";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >;
          Mark all as read;
        </Button>)}
    </div>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



  );
};



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          onClick={onMarkAllAsRead}
=======
onClick={onMarkAllAsRead}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark";
        >;
          Mark all as read;
        </Button>;
      )}
    </div>
    </div>;
  );
};
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  )
};
import React from "react";""
import { Button } from "@/components/ui/button";"
interface NotificationHeaderProps {
  // TODO: Implement
}
  unreadCount: number;,
  onMarkAllAsRead: () => Promise<void>;
</void>
export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
"
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">"
</div>"
      <h3 className="font-medium text-white">Notifications</h3>"
        <Button;"
          variant="ghost"""
          size="sm""
          onClick={onMarkAllAsRead}"
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;"

        ;
    </div>)
  onMarkAllAsRead: () => Promise < void>;
export const NotificationHeader: React.FC < NotificationHeaderProps> = ({
  unread_count,
  onMarkAllAsRead,)
}) => {
  return ("
    <div className="flex justify - between items - center p - 4 border - b border - zion - blue - light">;"
      <h3 className="font - medium text - white">Notifications</h3>;"
          variant="ghost";""
          size="sm";"
          on_click={onMarkAllAsRead}"
          className="text - xs text - zion - cyan hover:text - white hover:bg - zion - blue - dark";"
        >;
)
        )}
    </div>);
pr-12325
        </Button>;
    </div>"


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
