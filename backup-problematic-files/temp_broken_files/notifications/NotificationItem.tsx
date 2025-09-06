<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationItem.tsx

=======
import React from 'react',;
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight } from '@/components/icons',;
=======
import React from 'react',;
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/notifications/NotificationItem.tsx
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { formatDistanceToNow } from 'date-fns',;
import { cn } from '@/lib/utils',;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationItem.tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
import { useNavigate } from 'react-router-dom',;
=======
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

              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Mark as read</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationItem.tsx

=======
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

=======
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
