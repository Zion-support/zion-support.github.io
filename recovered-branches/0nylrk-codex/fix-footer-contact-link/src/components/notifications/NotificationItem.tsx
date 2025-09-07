<<<<<<< HEAD
import React from 'react';
// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight  } from '@/components/icons';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { formatDistanceToNow  } from 'date-fns';
import { cn  } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import { useNavigate  } from 'react-router-dom';
import { Notification, NotificationType } from '@/context/notifications';
export const getTypeIcon = $2;
    case 'quote_request':
      return <span className = $2;
    case 'booking_confirmation':
      return <span className = $2;
    case 'hire_request':
      return <span className = $2;
    case 'onboarding':
      return <span className = $2;
    case 'system':
      return <span className = $2;
    default:
      return <span className = $2;
interface NotificationItemProps {
=======
import {Check, Trash2, ChevronRight} from '@/components/icons';'
import {Button} from '@/components/ui/button';'
import {Badge} from '@/components/ui/badge';'
import {formatDistanceToNow} from 'date-fns';'
import {cn} from '@/lib/utils';'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';'
import {useNavigate} from 'react-router-dom';'
import {Notification, NotificationType} from '@/context/notifications';

export const getTypeIcon = (type: NotificationType) => {}
  switch (type) {';
    case 'message':;
      return <span className="text-blue-500">💬</span>;

import React from 'react',
// Use the centralized icon wrapper to avoid missing icons'
import { Check, Trash2, ChevronRight } from '@/components/icons','
import { Button } from '@/components/ui/button','
import { Badge } from '@/components/ui/badge','
import { formatDistanceToNow } from 'date-fns','
import { cn } from '@/lib/utils','
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip','
import { useNavigate } from 'react-router-dom','
import { Notification, NotificationType } from '@/context/notifications',

export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <span className="text-blue-500">💬</span>,
    case 'quote_request':
      return <span className="text-purple-500">📝</span>,
    case 'booking_confirmation':
      return <span className="text-green-500">✅</span>,
    case 'hire_request':
      return <span className="text-zion-purple">🤝</span>,
    case 'onboarding':
      return <span className="text-zion-cyan">🚀</span>,
    case 'system':
      return <span className="text-yellow-500">⚠️</span>
    default:
      return <span className="text-gray-500">📣</span>

// Use the centralized icon wrapper to avoid missing icons;
<<<<<<< HEAD
import React from 'react';
// Use the centralized icon wrapper to avoid missing icons
=======
<<<<<<< HEAD
import React from 'react';
// Use the centralized icon wrapper to avoid missing icons
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {Check, Trash2, ChevronRight} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {formatDistanceToNow} from 'date-fns';
import {cn} from '@/lib/utils';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {useNavigate} from 'react-router-dom';
import {Notification, NotificationType} from '@/context/notifications';
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':;
      return <span className="text-blue-500">💬</span>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',
// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight } from '@/components/icons',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { formatDistanceToNow } from 'date-fns',
import { cn } from '@/lib/utils',
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',
import { useNavigate } from 'react-router-dom',
import { Notification, NotificationType } from '@/context/notifications',

<<<<<<< HEAD
export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <span className="text-blue-500">💬</span>,
    case 'quote_request':
      return <span className="text-purple-500">📝</span>,
    case 'booking_confirmation':
      return <span className="text-green-500">✅</span>,
    case 'hire_request':
      return <span className="text-zion-purple">🤝</span>,
    case 'onboarding':
      return <span className="text-zion-cyan">🚀</span>,
    case 'system':
      return <span className="text-yellow-500">⚠️</span>
    default:
      return <span className="text-gray-500">📣</span>

=======
<<<<<<< HEAD
export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <span className="text-blue-500">💬</span>,
    case 'quote_request':
      return <span className="text-purple-500">📝</span>,
    case 'booking_confirmation':
      return <span className="text-green-500">✅</span>,
    case 'hire_request':
      return <span className="text-zion-purple">🤝</span>,
    case 'onboarding':
      return <span className="text-zion-cyan">🚀</span>,
    case 'system':
      return <span className="text-yellow-500">⚠️</span>
    default:
      return <span className="text-gray-500">📣</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':

export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {;
    case 'message':;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return <span className="text-blue-500">💬</span>;

    case 'quote_request':;
      return <span className="text-purple-500">📝</span>;
    case 'booking_confirmation':;
      return <span className="text-green-500">✅</span>;
    case 'hire_request':;
      return <span className="text-zion-purple">🤝</span>;
    case 'onboarding':;

      return <span className="text-zion-cyan">🚀</span>;

<<<<<<< HEAD
=======
    case 'system':;
      return <span className="text-yellow-500">⚠️</span>,;
    default:;
      return <span className="text-gray-500">📣</span>;
  }
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
};

>>>>>>> merged-prs-20250907-203621
  notification: Notification,
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ 
  notification, 
  onMarkAsRead, 
  onDismiss 
}) => {;
  const navigate = useNavigate();

  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',;
// Use the centralized icon wrapper to avoid missing icons;'
import { Check, Trash2, ChevronRight } from '@/components/icons',;'
import { Button } from '@/components/ui/button',;'
import { Badge } from '@/components/ui/badge',;'
import { formatDistanceToNow } from 'date-fns',;'
import { cn } from '@/lib/utils',;'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;'
import { useNavigate } from 'react-router-dom',;'
import { Notification, NotificationType } from '@/context/notifications',;
export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {;'
    case 'message':;"
      return <span className="text-blue-500">💬</span>,;'
    case 'quote_request':;"
      return <span className="text-purple-500">📝</span>,;'
    case 'booking_confirmation':;"
      return <span className="text-green-500">✅</span>,;'
    case 'hire_request':;"
      return <span className="text-zion-purple">🤝</span>,;'
    case 'onboarding':;"
      return <span className="text-zion-cyan">🚀</span>,;'
    case 'system':;"
      return <span className="text-yellow-500">⚠️</span>,;
    default:;"

      return <span className="text-gray-500">📣</span>;
<<<<<<< HEAD
  }
}
interface NotificationItemProps {
  notification: Notification
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
}
export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification
  onMarkAsRead
  onDismiss
}) => {
<<<<<<< HEAD
  const navigate = useNavigate($2);
  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)
=======
  const navigate = useNavigate();
  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)
=======

  }
}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export const NotificationItem: React.FC<NotificationItemProps> = ({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  notification,;
  onMarkAsRead,;
  onDismiss;
}) => {;
  const navigate = useNavigate(),;
  const handleClick = () => {;
    if (!notification.read) {;
<<<<<<< HEAD

=======
      onMarkAsRead(notification.id);
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    }

    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }
<<<<<<< HEAD
  },

  return (
    <div 
      className = $2;
=======

<<<<<<< HEAD
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }
  }
  },

  },
  };
  },
=======
<<<<<<< HEAD
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  };
  },

<<<<<<< HEAD
  return (
    <div
      className={cn(
        "p-3 border-b border-zion-blue-light relative group",
>>>>>>> merged-prs-20250907-203621
        !notification.read ? "bg-zion-blue-dark/30" : ""
      )}
    >
      <div className="flex items-start gap-2">
        <div className="text-xl">{getTypeIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-white">{notification.title |"Notification"}</h4>
            {!notification.read && (
              <Badge className="bg-zion-cyan text-xs">New</Badge>
            )}
          </div>
          <p className="text-sm text-zion-slate-light">{notification.message |"You have a new notification"}</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-zion-slate">
<<<<<<< HEAD
              {notification.created_at ? formatDistanceToNow(new Date(notification.created_at), { addSuffix: true}) : "Just now"}
=======
              {notification.created_at ? formatDistanceToNow(new Date(notification.created_at), { addSuffix: true }) : "Just now"}
            </p>
            {notification.action_url && notification.action_text && (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface NotificationItemProps {;
  notification: Notification,;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ ;
  notification, ;
  onMarkAsRead, ;
  onDismiss ;
}) => {;
  const navigate = useNavigate();

    if (!notification && notification.read) {;
      onMarkAsRead(notification && notification.id);
    }
    // If there's an action URL, navigate to it;
    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }
  }

  return (
    <div
      className={cn(

        "p-3 border-b border-zion-blue-light relative group"
        !notification && notification.read ? "bg-zion-blue-dark/30" : ""
      )}>;
      <div className="flex items-start gap-2">;
        <div className="text-xl">{getTypeIcon(notification && notification.type)}</div>;
        <div className="flex-1">;
          <div className="flex justify-between items-center mb-1">;
            <h4 className="font-medium text-white">{notification && notification.title || "Notification"}</h4>;
            {!notification && notification.read && (;
              <Badge className="bg-zion-cyan text-xs">New</Badge>;
            )}
          </div>;
          <p className="text-sm text-zion-slate-light">{notification && notification.message || "You have a new notification"}</p>;
          <div className="flex justify-between items-center mt-1">;
            <p className="text-xs text-zion-slate">;
              {notification && notification.created_at ? formatDistanceToNow(new Date(notification && notification.created_at), { addSuffix: true }) : "Just now"}
            </p>;

            {notification && notification.action_url && notification && notification.action_text && (;

<<<<<<< HEAD
  return (
    <div
      className={cn(
        "p-3 border-b border-zion-blue-light relative group",
        !notification.read ? "bg-zion-blue-dark/30" : ""
      )}
    >
      <div className="flex items-start gap-2">
        <div className="text-xl">{getTypeIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-white">{notification.title |"Notification"}</h4>
            {!notification.read && (
              <Badge className="bg-zion-cyan text-xs">New</Badge>
            )}
          </div>
          <p className="text-sm text-zion-slate-light">{notification.message |"You have a new notification"}</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-zion-slate">
              {notification.created_at ? formatDistanceToNow(new Date(notification.created_at), { addSuffix: true }) : "Just now"}
>>>>>>> merged-prs-20250907-203621
            </p>
            {notification.action_url && notification.action_text && (
  return (
    <div
      className={cn(
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Button
                variant="link"
                size="sm"
                className="text-zion-cyan p-0 h-auto"
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                onClick={handleClick}
              >
                {notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation()
                  onMarkAsRead(notification.id)
                }}
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
                  e.stopPropagation(),
                  onDismiss(notification.id)
                }}
              >
<<<<<<< HEAD
                <Trash2 className = $2;
=======
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
  )
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                onClick={handleClick}>;
                {notification && notification.action_text}"
                <ChevronRight className="h-3 w-3 ml-1" />;
              </Button>;
            )}

          </div>;
        </div>;
      </div>;

      {/* Action buttons that appear on hover */}
<<<<<<< HEAD

          </div>
        </div>
      </div>
      {/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>

      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Button;
                variant="ghost";
                size="icon";
                className="h-6 w-6";
                onClick={(e) => {;
                  e.stopPropagation(),;
                  onMarkAsRead(notification.id);
                }}
              >;
                <Check className="h-3.5 w-3.5 text-green-400" />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Mark as read</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="ghost";
                size="icon";
                className="h-6 w-6";
                onClick={(e) => {;
                  e.stopPropagation();
                  onDismiss(notification.id);
                }}
              >;
                <Trash2 className="h-3.5 w-3.5 text-red-400" />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Dismiss</p>;
=======
              <Button
                variant="ghost" 
                size="icon" 
                className="h-6 w-6"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>;

<<<<<<< HEAD
=======



<<<<<<< HEAD
};
    </div>);
}
;
    </div>;
  );
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
    </div>);
}
<<<<<<< HEAD

};
    </div>);
}
;
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
