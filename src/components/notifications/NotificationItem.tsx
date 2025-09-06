import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from '@/components/ui/tooltip';
import { useRouter } from 'next/router';
import { Notification, NotificationType } from '@/context/notifications';
      return <span className="text-blue-500">💬</span>;
      return <span className="text-orange-500">📦</span>;
    default:
      return <span className="text-gray-500">📣</span>;
  notification: Notification;
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onMarkAsRead,
  onDismiss
}) => {
      className={cn(
                  onMarkAsRead(notification.id);
<<<<<<< HEAD
=======
                }}
                aria-label="Mark as read"
              >
                <Check className="h-3.5 w-3.5 text-green-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mark as read</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation();
                  onDismiss(notification.id);
                }}
                aria-label="Dismiss notification"
              >
                <Trash2 className="h-3.5 w-3.5 text-red-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dismiss</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
<<<<<<< HEAD
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
  handleClick ;
}> </Button>) ";
}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) ;
};
'"
=======


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
