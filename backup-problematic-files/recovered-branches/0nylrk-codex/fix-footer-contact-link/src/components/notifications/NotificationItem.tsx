
=======
import React from 'react',;
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight } from '@/components/icons',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { formatDistanceToNow } from 'date-fns',;
import { cn } from '@/lib/utils',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
import { useNavigate } from 'react-router-dom',;
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    case 'system':;
      return <span className="text-yellow-500">⚠️</span>,;
    default:;
      return <span className="text-gray-500">📣</span>;
  }
<<<<<<< HEAD

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

              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Dismiss</p>;

