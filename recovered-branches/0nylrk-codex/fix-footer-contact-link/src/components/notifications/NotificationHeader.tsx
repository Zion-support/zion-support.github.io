import React from 'react',;
import { Button } from '@/components/ui/button',;
interface NotificationHeaderProps {;
  unreadCount: number,;

}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({

  unreadCount
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onMarkAllAsRead

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

          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark";
        >;
          Mark all as read;
        </Button>;
      )}
    </div>
    </div>;
  );
};