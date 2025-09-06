
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Use the centralized icon wrapper to avoid missing icons;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from 'react';
// Use the centralized icon wrapper to avoid missing icons
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



import {Check, Trash2, ChevronRight} from '@/components/icons';'
import {Button} from '@/components/ui/button';'
import {Badge} from '@/components/ui/badge';'
import {formatDistanceToNow} from 'date-fns';'
import {cn} from '@/lib/utils';'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';'
import {useNavigate} from 'react-router-dom';'
import {Notification, NotificationType} from '@/context/notifications';
<<<<<<< HEAD
<<<<<<< HEAD

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

  }
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



export const getTypeIcon = (type: NotificationType) => {}
  switch (type) {';
    case 'message':;
      return <span className="text-blue-500">💬</span>;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
  switch (type) {
    case 'message':;
      return <span className="text-blue-500">💬</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Use the centralized icon wrapper to avoid missing icons;

import {Check, Trash2, ChevronRight} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {formatDistanceToNow} from 'date-fns';
import {cn} from '@/lib/utils';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {useNavigate} from 'react-router-dom';
import {Notification, NotificationType} from '@/context/notifications';



export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':;
      return <span className="text-blue-500">💬</span>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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



export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':

export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    case 'message':;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return <span className="text-blue-500">💬</span>;
=======
    case 'message':;      return <span className="text-blue-500">💬</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    case 'message':;      return <span className="text-blue-500">💬</span>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    case 'message':;
      return <span className="text-blue-500">💬</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    case 'quote_request':;
      return <span className="text-purple-500">📝</span>;
    case 'booking_confirmation':;
      return <span className="text-green-500">✅</span>;
    case 'hire_request':;
      return <span className="text-zion-purple">🤝</span>;
    case 'onboarding':;
=======

export const getTypeIcon = (type: NotificationType) => {}
  switch (type) {'
    case 'message':"
      return <span className="text-blue-500">💬</span>,'
    case 'quote_request':"
      return <span className="text-purple-500">📝</span>,'
    case 'booking_confirmation':"
      return <span className="text-green-500">✅</span>,'
    case 'hire_request':"
      return <span className="text-zion-purple">🤝</span>,'
    case 'onboarding':"
      return <span className="text-zion-cyan">🚀</span>,'
    case 'system':"
      return <span className="text-yellow-500">⚠️</span>
    default:"
      return <span className="text-gray-500">📣</span>;
";
      return <span className="text-blue-500">💬</span>;'
    case 'quote_request':;"
      return <span className="text-purple-500">📝</span>;'
    case 'booking_confirmation':;"
      return <span className="text-green-500">✅</span>;'
    case 'hire_request':;"
      return <span className="text-zion-purple">🤝</span>;'
    case 'onboarding':;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return <span className="text-zion-cyan">🚀</span>;
<<<<<<< HEAD

    case 'system':;
      return <span className="text-yellow-500">⚠️</span>,;
    default:;
      return <span className="text-gray-500">📣</span>;
  }
};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface NotificationItemProps {
<<<<<<< HEAD
=======
interface NotificationItemProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
interface NotificationItemProps {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export const getTypeIcon = (type: NotificationType) => {;
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
    case 'system':;
      return <span className="text-yellow-500">⚠️</span>,;
    default:;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return <span className="text-gray-500">📣</span>;

  }
}
<<<<<<< HEAD
interface NotificationItemProps {}
  notification: Notification;
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
}
export const NotificationItem: React.FC<NotificationItemProps> = ({};
  notification;
  onMarkAsRead;
  onDismiss;
}) => {}
  const navigate = useNavigate();
  const handleClick = () => {}
    if (!notification.read) {}
      onMarkAsRead(notification.id)

;
export const NotificationItem: React.FC<NotificationItemProps> = ({;
=======
interface NotificationItemProps {export const NotificationItem: React.FC<NotificationItemProps> = ({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
interface NotificationItemProps {export const NotificationItem: React.FC<NotificationItemProps> = ({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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
  const navigate = useNavigate();
  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)
;
export const NotificationItem: React.FC<NotificationItemProps> = ({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  notification,;
  onMarkAsRead,;
  onDismiss;
}) => {;
  const navigate = useNavigate(),;
  const handleClick = () => {;
    if (!notification.read) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      onMarkAsRead(notification.id);

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
=======
      onMarkAsRead(notification.id);    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      onMarkAsRead(notification.id);

    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
  },

  },
  };
  },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


    }'
    // If there's an action URL, navigate to it;
    if (notification.action_url) {}
      navigate(notification.action_url)
    }


    }'
    // If there's an action URL, navigate to it;
    if (notification.action_url) {}
      navigate(notification.action_url)
    }
  }
  },


  },
  };
  },

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
export const NotificationItem: React.FC<NotificationItemProps> = ({ ;
  notification, ;
  onMarkAsRead, ;
  onDismiss ;
}) => {;
  const navigate = useNavigate();

  const handleClick = () => {;
    if (!notification && notification.read) {;
      onMarkAsRead(notification && notification.id);
    }
    // If there's an action URL, navigate to it;
    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }
  }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    }
=======
      onMarkAsRead(notification.id);    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }
  }
  },

  },
  };
  },


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

  const handleClick = () => {;
    if (!notification && notification.read) {;
      onMarkAsRead(notification && notification.id);
    }
    // If there's an action URL, navigate to it;
    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
            </p>
            {notification.action_url && notification.action_text && (
  return (
    <div
      className={cn(
              <Button
                variant="link"
                size="sm"
                className="text-zion-cyan p-0 h-auto"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  return (
    <div;
      className={cn(

              <Button"
                variant="link""
                size="sm""
                className="text-zion-cyan p-0 h-auto"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                onClick={handleClick}>;
                {notification && notification.action_text}"
                <ChevronRight className="h-3 w-3 ml-1" />;
              </Button>;
            )}
<<<<<<< HEAD
=======
=======
                onClick={handleClick}>;
                {notification && notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />;
              </Button>;
            )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          </div>;
        </div>;
      </div>;

      {/* Action buttons that appear on hover */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                onClick={handleClick}
              >
                {notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>
        </div>
      </div>
      {/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

<<<<<<< HEAD
};
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
<<<<<<< HEAD
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

              <Button"
                variant="ghost" "
                size="icon" "
                className="h-6 w-6"



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
    </div>);
}
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <Button
                variant="ghost" 
                size="icon" 
                className="h-6 w-6"

            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>;



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

};
    </div>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  )
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
};
    </div>);
}
;
    </div>;
  );
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
