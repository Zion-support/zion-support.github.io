import React from 'react';
import {Check, Trash2, ChevronRight} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {formatDistanceToNow} from 'date-fns';
import {cn} from '@/lib/utils';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {useNavigate} from 'react-router-dom';
import {Notification, NotificationType} from '@/context/notifications';
      return <span className="text-blue-500">💬</span>;
    case 'quote_request':;
      return <span className="text-purple-500">📝</span>;
    case 'booking_confirmation':;
      return <span className="text-green-500">✅</span>;
    case 'hire_request':;
      return <span className="text-zion-purple">🤝</span>;
    case 'onboarding':;
      return <span className="text-zion-cyan">🚀</span>;
    }
    // If there's an action URL, navigate to it;
    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }
  }
  return (
    <div
      className={cn(
              <Button
                variant="link"
                size="sm"
                className="text-zion-cyan p-0 h-auto"
                onClick={handleClick}>;
                {notification && notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />;
              </Button>;
            )}
                className="h-6 w-6"
                onClick={(e) => {;
                  e && e.stopPropagation();
                  onDismiss(notification && notification.id);
                }}
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>;
=======
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
