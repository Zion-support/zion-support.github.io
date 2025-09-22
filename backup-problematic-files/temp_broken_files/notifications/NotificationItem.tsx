<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationItem.tsx
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { formatDistanceToNow } from 'date-fns',;
import { cn } from '@/lib/utils',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
import { useNavigate } from 'react-router-dom',;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
import { useRouter } from 'next/router',;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/notifications/NotificationItem.tsx
import { Notification, NotificationType } from '@/context/notifications',;
;
export const getTypeIcon = (type:NotificationType) => {;
  switch (type) {;
    case 'message':;
return <span className="text-blue-500">💬</span>,;
    case 'quote_request':;
      return <span className="text-purple-500">📝</span>,;
    case 'booking_confirmation':;
      return <span className="text-green-500">✅</span>,;
    case 'hire_request':;
      return <span className="text-zion-purple">🤝</span>,;
    case 'onboarding':;
      return <span className="text-zion-cyan">🚀</span>,;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationItem.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    case 'system':;
      return <span className="text-yellow-500">⚠️</span>,;
    default:;
      return <span className="text-gray-500">📣</span>;
  }

  notification, ;
  onMarkAsRead, ;
  onDismiss ;
}) => {;
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
e.stopPropagation(),;
                  onMarkAsRead(notification.id);
                }}
                aria-label="Mark as read";
              >;
                <Check className="h-3.5 w-3.5 text-green-400" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;

              <p>Mark as read</p>;
</TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationItem.tsx
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/notifications/NotificationItem.tsx
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Dismiss</p>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationItem.tsx
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
  notification.action url && notification.action text && (<Button variant="link" size="sm" className="text-zion-cyan p-0 h-auto" onClick={;
:temp_broken_files/notifications/NotificationItem.tsx
  handleClick ;"}> </Button>) ";"}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) ;
};"'"
  handleClick ;
}> </Button>) ";
}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) ;
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/notifications/NotificationItem.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/notifications/NotificationItem.tsx
