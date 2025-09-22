
import React, { useState } from 'react',;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { useNotifications } from "@/context/notifications/NotificationContext",;
import {;
  NotificationType,;
  NotificationContextType;
} from "@/context/notifications",;
import { formatDistanceToNow } from "date-fns",;
import { ;
  Bell, Check, Trash2, ChevronRight, CheckCircle, ;
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings;
} from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Badge } from "@/components/ui/badge",;
import { Skeleton } from "@/components/ui/skeleton",;
import { SEO } from "@/components/SEO",;
import { useNavigate } from "react-router-dom",;
import { cn } from "@/lib/utils",;
;
const getNotificationIcon = (type:NotificationType, className:string = "h-5 w-5") => {;
  switch (type) {;
    case 'message':;
      return <MessageCircle className={cn(className, "text-blue-500")} />,;
    case 'quote_request':;
      return <Briefcase className={cn(className, "text-purple-500")} />,;
    case 'booking_confirmation':;
      return <CheckCircle className={cn(className, "text-green-500")} />,;
    case 'hire_request':;
      return <UserCheck className={cn(className, "text-zion-purple")} />,;
    case 'onboarding':;
      return <Settings className={cn(className, "text-zion-cyan")} />,;
    case 'system':;
      return <AlertCircle className={cn(className, "text-yellow-500")} />,;
    default:;
      return <Bell className={cn(className, "text-gray-500")} />,;
  }
},;
;
const getNotificationTypeBadge = (type:NotificationType) => {;
  switch (type) {;
    case 'message':;
      return <Badge className="bg-blue-500">Message</Badge>,;
    case 'quote_request':;
      return <Badge className="bg-purple-500">Quote Request</Badge>,;
    case 'booking_confirmation':;
      return <Badge className="bg-green-500">Booking</Badge>,;
    case 'hire_request':;
      return <Badge className="bg-zion-purple">Hire Request</Badge>,;
    case 'onboarding':;
      return <Badge className="bg-zion-cyan">Onboarding</Badge>,;
    case 'system':;
      return <Badge className="bg-yellow-500">System</Badge>,;
    default:;
      return <Badge variant="outline">Notification</Badge>;
  }
},;
;
const NotificationCard:React.FC<{;
  notification:{;
    id:string,;
    title:string,;
    message:string,;
    type:NotificationType,;
    read:boolean,;
    created_at:string,;
    action_url?:string,;
    action_text?:string;
  },;
  onMarkAsRead:(id:string) => Promise<void>,;
  onDismiss:(id:string) => Promise<void>;
}> = ({ notification, onMarkAsRead, onDismiss }) => {;
  const navigate = useNavigate(),;
  ;
  const handleAction = () => {;
    if (!notification.read) {;
      onMarkAsRead(notification.id),;
    }
    ;
    if (notification.action_url) {;
      navigate(notification.action_url),;
    }
  },;
  ;
  return (;
    <div className={cn(;
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors",;
      notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" :"border-zion-cyan bg-zion-blue-dark/30";
    )}>;
      <div className="flex items-start gap-4">;
        <div className="mt-1">;
          {getNotificationIcon(notification.type, "h-6 w-6")}
        </div>;
        <div className="flex-1">;
          <div className="flex justify-between">;
            <div className="flex flex-col">;

                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New</Badge>;
                )}
              </div>;
            </div>;

                >;
                  <Check className="h-4 w-4 text-green-400" />;
                  <span className="sr-only">Mark as read</span>;
                </Button>;
              )}

              >;
                <Trash2 className="h-4 w-4 text-red-400" />;
                <span className="sr-only">Dismiss</span>;
              </Button>;
            </div>;
          </div>;

              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}
        </div>;
      </div>;
    </div>;

      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8 min-h-screen">;
        <div className="flex justify-between items-center mb-6">;
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;
              <Bell className="mr-3 h-7 w-7" /> Notifications;
              {unreadCount > 0 && (;
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread</Badge>;
              )}
            </h1>;
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>;
          </div>;

              onClick={() => markAllAsRead()}
            >;
              <Check className="mr-2 h-4 w-4" />;
              Mark all as read;
            </Button>;
          )}
        </div>;

        <div className="mb-8">;
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>;
            <TabsList className="grid w-full max-w-md grid-cols-5">;
              <TabsTrigger value="all">All</TabsTrigger>;
              <TabsTrigger value="unread">Unread</TabsTrigger>;
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>;
              <TabsTrigger value="messages">Messages</TabsTrigger>;
              <TabsTrigger value="system">System</TabsTrigger>;
            </TabsList>;
            <TabsContent value={filter} className="mt-6">;
              {loading ? (;
                <div className="space-y-4">;
                  <Skeleton className="h-24 w-full rounded-lg" />;
                  <Skeleton className="h-24 w-full rounded-lg" />;
                  <Skeleton className="h-24 w-full rounded-lg" />;
                </div>;

                <div className="text-center py-12 bg-muted rounded-lg">;
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />;
                  <h3 className="text-xl font-medium">No notifications found</h3>;
                  <p className="text-muted-foreground mt-1">;

            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;

}