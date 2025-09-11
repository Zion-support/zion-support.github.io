
import React from 'react';
// Use the centralized icon wrapper to avoid missing icons

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

=======
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
=======

export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {;
    case 'message':;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return <span className="text-blue-500">💬</span>;
    case 'quote_request':;
      return <span className="text-purple-500">📝</span>;
    case 'booking_confirmation':;
      return <span className="text-green-500">✅</span>;
    case 'hire_request':;
      return <span className="text-zion-purple">🤝</span>;
    case 'onboarding':;
      return <span className="text-zion-cyan">🚀</span>;

    case 'system':;
      return <span className="text-yellow-500">⚠️</span>,;
    default:;
      return <span className="text-gray-500">📣</span>;
  }
};
=======

  }
};

interface NotificationItemProps {
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
      return <span className="text-gray-500">📣</span>;
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
  notification,;
  onMarkAsRead,;
  onDismiss;
}) => {;
  const navigate = useNavigate(),;
  const handleClick = () => {;
    if (!notification.read) {;
      onMarkAsRead(notification.id);

    }
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }

  },
=======
  };
  },

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

              <Button
                variant="link"
                size="sm"
                className="text-zion-cyan p-0 h-auto"
                onClick={handleClick}>;
                {notification && notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />;
              </Button>;
            )}

          </div>;
        </div>;
      </div>;

      {/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button
                variant="ghost" 
                size="icon" 
                className="h-6 w-6"

            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
