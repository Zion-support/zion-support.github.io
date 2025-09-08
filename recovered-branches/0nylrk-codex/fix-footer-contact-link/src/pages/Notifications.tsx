

import React, { useState } from 'react',
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",

import { useNotifications } from "@/context/notifications/NotificationContext",


<<<<<<< HEAD

  Bell, Check, Trash2, ChevronRight, CheckCircle, 
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings
} from "lucide-react",
import { Button } from "@/components/ui/button",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Badge } from "@/components/ui/badge",
import { Skeleton } from "@/components/ui/skeleton",
import { SEO } from "@/components/SEO",
import { useNavigate } from "react-router-dom",
import { cn } from "@/lib/utils",const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
  switch (type) {
    case 'message':
      return <MessageCircle className={cn(className, "text-blue-500")} />,
    case 'quote_request':
      return <Briefcase className={cn(className, "text-purple-500")} />,
    case 'booking_confirmation':
      return <CheckCircle className={cn(className, "text-green-500")} />,
    case 'hire_request':
      return <UserCheck className={cn(className, "text-zion-purple")} />,
    case 'onboarding':
      return <Settings className={cn(className, "text-zion-cyan")} />,
    case 'system':

      return <AlertCircle className={cn(className, "text-yellow-500")} />,
    default:"
      return <Bell className={cn(className, "text-gray-500")} />
  }  };
  },
  
  return (
    <divclassName={cn(
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors"
      notification && notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" : "border-zion-cyan bg-zion-blue-dark/30"
    )}>;
      <div className="flex items-start gap-4">;
        <div className="mt-1">;
          {getNotificationIcon(notification && notification.type, "h-6 w-6")}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
              onClick={handleAction}>;
              {notification && notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}
        </div>;
      </div>;
    </div>;
  )
};

  );
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
export default function NotificationsPage() {;
  const {;
    filteredNotifications;
    unreadCount;
    action_text?: string;
  }
  onMarkAsRead: (id: string) => Promise<void>,;
</void>
  onDismiss: (id: string) => Promise<void>;
    <divclassName={cn("
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors"""
      notification && notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" : "border-zion-cyan bg-zion-blue-dark/30"")
    )}>;
</divclassName>"
      <div className="flex items-start gap-4">;"
</div>"
        <div className="mt-1">;"
</div>
        </div>;"
        <div className="flex-1">;"
          <div className="flex justify-between">;"
            <div className="flex flex-col">;"
              <h3 className="font-medium text-white">{notification && notification.title}</h3>;""
              <div className="flex items-center gap-2 mb-2">;"
                <span className="text-xs text-zion-slate-light">;"
</span>
                </span>;"
                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New;"
              </div>;
            <div className="flex items-center gap-2">;"
                <Button;"
                  variant="ghost"""
                  size="sm"""
                  className="h-8 w-8 p-0""
                  onClick={() => onMarkAsRead(notification && notification.id)}
                  <Check className="h-4 w-4 text-green-400" />;"
                  <span className="sr-only">Mark as read</span>;"
                ;
                onClick={() => onDismiss(notification && notification.id)}
                <Trash2 className="h-4 w-4 text-red-400" />;"
</Trash2>"
                <span className="sr-only">Dismiss</span>;"
          <p className="text-zion-slate-light mb-3">{notification && notification.message}</p>;"
              variant="outline"""
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black""
              onClick={handleAction}>;
              <ChevronRight className="ml-1 h-4 w-4" />;"

pr-12325
  onMarkAsRead: (id: string) => Promise < void>,
  on_dismiss: (id: string) => Promise < void>;
}> = ({ notification, onMarkAsRead, on_dismiss }) => {}
  const navigate = use_navigate ();
;
  const handle_action = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      onMarkAsRead (notification.id);
    }
    // Check condition;
if ( {) {}
  $2;
}
      navigate (notification.action_url);
    }
  }
;
  return (
    <div className={cn (
      "border rounded - lg shadow - sm p - 4 mb - 3 group transition - colors";
      notification.read ? "border - zion - blue - light bg - zion - blue - dark / 10" : "border - zion - cyan bg - zion - blue - dark / 30")}>;
      <div className="flex items - start gap-4">;
        <div className="mt-1">;
          {getNotificationIcon (notification.type, "h - 6 w - 6")}
        </div>;
        <div className="flex-1">;
          <div className="flex justify-between">;
            <div className="flex flex-col">;
              <h3 className="font - medium text-white">{notification.title}</h3>;
              <div className="flex items - center gap - 2 mb-2">;
                {getNotificationTypeBadge (notification.type)}
                <span className="text - xs text - zion - slate-light">;
                  {formatDistanceToNow (new Date (notification.created_at), { add_suffix: true })}
                </span>;
                {!notification.read && (
                  <Badge variant="outline" className="bg - zion - cyan bg - opacity - 20 text - zion - cyan text-xs">New</Badge>)}
              </div>;
            </div>;
            <div className="flex items - center gap-2">;
              {!notification.read && (
                <Button;
                  variant="ghost";
                  size="sm";
                  className="h - 8 w - 8 p-0";
                  on_click={() => onMarkAsRead (notification.id)}
                >;
                  <Check className="h - 4 w - 4 text - green-400" />;
                  <span className="sr-only">Mark as read</span>;
                </Button>)}
              <Button;
                variant="ghost";
                size="sm";
                className="h - 8 w - 8 p-0";
                on_click={() => on_dismiss (notification.id)}
              >;
                <Trash2 className="h - 4 w - 4 text - red-400" />;
                <span className="sr-only">Dismiss</span>;
              </Button>;
            </div>;
          </div>;
          <p className="text - zion - slate - light mb-3">{notification.message}</p>;
          {notification.action_url && notification.action_text && (
            <Button;
              variant="outline";
              size="sm";
              className="mt - 1 text - zion - cyan border - zion - cyan hover:bg - zion - cyan hover:text-black";
              on_click={handle_action}
            >;
              {notification.action_text}
              <ChevronRight className="ml - 1 h - 4 w-4" />;
            </Button>)}
        </div>;
      </div>;
    </div>);
}
;
export default /**;
 * NotificationsPage - Function description;
 */
function NotificationsPage() {}
  const {}
    filtered_notifications;
    unread_count;


    markAsRead;
    markAllAsRead;
    dismiss_notification;
    loading;
    filter;            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;

    </>);
}