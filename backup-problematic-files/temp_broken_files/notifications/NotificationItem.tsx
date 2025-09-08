

import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { formatDistanceToNow } from 'date-fns',;
import { cn } from '@/lib/utils',;



import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;


import { Notification, NotificationType } from '@/context/notifications',;


;
export const getTypeIcon = (type:NotificationType) => {;
  switch (type) {;
    case 'message':;


  onDismiss:(id:string) => Promise<void>;
export const NotificationItem:React.FC<NotificationItemProps> = ({;

    <div;
      className={cn(;"
        'p-3 border-b border-zion-blue-light relative group',;')
        !notification.read ? 'bg-zion-blue-dark/30' :)}
    >;
</div>
      <div className="flex items-start gap-2">;"
</div>"
        <div className="text-xl">{getTypeIcon(notification.type)}</div>;""
        <div className="flex-1">;"
          <div className="flex justify-between items-center mb-1">;"
            <h4 className="font-medium text-white">;"
</h4>
            </h4>;"
              <Badge className="bg-zion-cyan text-xs">New;"
          </div>;"
          <p className="text-sm text-zion-slate-light">;"
</p>
          </p>;"
          <div className="flex justify-between items-center mt-1">;"
            <p className="text-xs text-zion-slate">;"
            </p>;
              <Button;"
                variant="link";""
                size="sm";""
                className="text-zion-cyan p-0 h-auto";                onClick={handleClick}"
"
                <ChevronRight className="h-3 w-3 ml-1" />;"

              ;            )}
          </div>;
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">;"

        <TooltipProvider>;

          <Tooltip>;

            <TooltipTrigger asChild>;


                variant="ghost";""
                size="icon";""
                className="h-6 w-6";"
                onClick={(e) => {;


            <TooltipContent>;

              <p>Mark as read</p>;

;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="ghost";
                size="icon";
                className="h-6 w-6";
                onClick={(e) => {;
                  e.stopPropagation(),;
                  onDismiss(notification.id),;
                }}
                aria-label="Dismiss notification";
              >;
                <Trash2 className="h-3.5 w-3.5 text-red-400" />;



              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Dismiss</p>;

            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>;
    </div>;
  ),;
},;import React from 'react';
//Use the centralized icon wrapper to avoid missing icons export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {';
  case 'message': ;
}
};
interface NotificationItemProps {;
  notification: Notification;
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> ;
}export const NotificationItem: React.FC<NotificationItemProps> = ({;
  notification;
onMarkAsRead;
onDismiss ;
}) => {;
  const router = useRouter (), //Changed from useNavigate to useRouter if (!notification.read) {;
  addSuffix: true ';
}) : 'Just now' ;
}</p> {;



