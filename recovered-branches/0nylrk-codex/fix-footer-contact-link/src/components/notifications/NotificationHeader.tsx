<<<<<<< HEAD
=======


<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>
}
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;
<<<<<<< HEAD
=======
  onMarkAllAsRead: () => Promise<void>;


<<<<<<< HEAD
}

}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({

  unreadCount
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({

  unreadCount
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onMarkAllAsRead
<<<<<<< HEAD

import React from "react";

import { Button } from "@/components/ui/button";
interface NotificationHeaderProps {}
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
}

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

          onClick={onMarkAllAsRead}

          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark">;
          Mark all as read;
        </Button>;
      )}
    </div>
  )
};
import React from './react';'
=======
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

    </div>
  );
}


import React from 'react',;
import { Button } from '@/components/ui/button',;
;
=======
=======
import {Button} from '@/components/ui/button';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
          Mark all as read;
        </Button>;
      )}
    </div>;
  ),;
},; {
  unreadCount > 0 && (<Button variant="ghost" size="sm" onClick= {
  onMarkAllAsRead 
}className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark" > Mark all as read </Button>) 
}</div>) 
};
    </div>;
  );
};
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

      {unread_count > 0 && (
        <Button;"
          variant="ghost";"
          size="sm";

        >;
          Mark all as read;
        </Button>)}
    </div>);
}
;
<<<<<<< HEAD

          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark";
        >;
          Mark all as read;
        </Button>;
      )}
    </div>
    </div>;
  );
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
