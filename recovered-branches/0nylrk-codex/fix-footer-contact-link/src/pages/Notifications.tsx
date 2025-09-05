
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { useNotifications } from "@/context/notifications/NotificationContext",
import {
  NotificationType,
  NotificationContextType
} from "@/context/notifications",
import { formatDistanceToNow } from "date-fns",
import { 
  Bell, Check, Trash2, ChevronRight, CheckCircle,
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings
} from "lucide-react",
import { Button } from "@/components/ui/button",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Badge } from "@/components/ui/badge",
import { Skeleton } from "@/components/ui/skeleton",
import { SEO } from "@/components/SEO",
import { useNavigate } from "react-router-dom",
import { cn } from "@/lib/utils",
const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
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
    default:
      return <Bell className={cn(className, "text-gray-500")} />
=======
import React, { useState } from 'react';
import { AppHeader } from &quot;@/layout/AppHeader&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { useNotifications } from &quot;@/context/notifications/NotificationContext&quot;;
import {
  NotificationType,
  NotificationContextType
} from &quot;@/context/notifications&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { 
  Bell, Check, Trash2, ChevronRight, CheckCircle, 
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings
} from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsList, TabsTrigger, TabsContent } from &quot;@/components/ui/tabs&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { cn } from &quot;@/lib/utils&quot;;

const getNotificationIcon = (type: NotificationType, className: string = &quot;h-5 w-5&quot;) => {
  switch (type) {
    case 'message':
      return <MessageCircle className={cn(className, &quot;text-blue-500&quot;)} />;
    case 'quote_request':
      return <Briefcase className={cn(className, &quot;text-purple-500&quot;)} />;
    case 'booking_confirmation':
      return <CheckCircle className={cn(className, &quot;text-green-500&quot;)} />;
    case 'hire_request':
      return <UserCheck className={cn(className, &quot;text-zion-purple&quot;)} />;
    case 'onboarding':
      return <Settings className={cn(className, &quot;text-zion-cyan&quot;)} />;
    case 'system':
      return <AlertCircle className={cn(className, &quot;text-yellow-500&quot;)} />;
    default:
      return <Bell className={cn(className, &quot;text-gray-500&quot;)} />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, {_useState} from 'react';
import {_NotificationType, _NotificationContextType} from "@/context/notifications";
import {_Bell, _Check, _Trash2, _ChevronRight, _CheckCircle, _AlertCircle, _MessageCircle, _Briefcase, _UserCheck, _Settings} from "lucide-react";

const _getNotificationIcon = (_type: NotificationType, _className: string = "h-5 w-5") => {_switch (type) {
    case 'message':
      return <MessageCircle className={cn(className, _"text-blue-500")} />;
    case 'quote_request':
      return <Briefcase className={_cn(className, _"text-purple-500")} />;
    case 'booking_confirmation':
      return <CheckCircle className={_cn(className, _"text-green-500")} />;
    case 'hire_request':
      return <UserCheck className={_cn(className, _"text-zion-purple")} />;
    case 'onboarding':
      return <Settings className={_cn(className, _"text-zion-cyan")} />;
    case 'system':
      return <AlertCircle className={_cn(className, _"text-yellow-500")} />;
    default:
      return <Bell className={_cn(className, _"text-gray-500")} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},

const _getNotificationTypeBadge = (_type: NotificationType) => {_switch (type) {
    case 'message':
<<<<<<< HEAD
      return <Badge className="bg-blue-500">Message</Badge>,
    case 'quote_request':
      return <Badge className="bg-purple-500">Quote Request</Badge>,
    case 'booking_confirmation':
      return <Badge className="bg-green-500">Booking</Badge>,
    case 'hire_request':
      return <Badge className="bg-zion-purple">Hire Request</Badge>,
    case 'onboarding':
      return <Badge className="bg-zion-cyan">Onboarding</Badge>,
    case 'system':
      return <Badge className="bg-yellow-500">System</Badge>,
    default:
<<<<<<< HEAD
      return <Badge variant="outline">Notification</Badge>
=======
      return <Badge className=&quot;bg-blue-500&quot;>Message</Badge>;
    case 'quote_request':
      return <Badge className=&quot;bg-purple-500&quot;>Quote Request</Badge>;
    case 'booking_confirmation':
      return <Badge className=&quot;bg-green-500&quot;>Booking</Badge>;
    case 'hire_request':
      return <Badge className=&quot;bg-zion-purple&quot;>Hire Request</Badge>;
    case 'onboarding':
      return <Badge className=&quot;bg-zion-cyan&quot;>Onboarding</Badge>;
    case 'system':
      return <Badge className=&quot;bg-yellow-500&quot;>System</Badge>;
    default:
      return <Badge variant=&quot;outline&quot;>Notification</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
},

const NotificationCard: React.FC<{
  notification: {
    id: string,
    title: string,
    message: string,
    type: NotificationType,
    read: boolean,
    created_at: string,
    action_url?: string,
    action_text?: string
  },
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const navigate = useNavigate(),
=======
      return <Badge variant="outline">Notification</Badge>;}
};

const NotificationCard: React.FC<{_notification: {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    created_at: string;
    action_url?: string;
    action_text?: string;};
  onMarkAsRead: (_id: string) => Promise<void>;
  onDismiss: (_id: string) => Promise<void>;
}> = (_{_notification, _onMarkAsRead, _onDismiss}) => {_const _navigate = useNavigate();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleAction = () => {
    if (!notification.read) {
<<<<<<< HEAD
      onMarkAsRead(notification.id)
    }
    
    if (notification.action_url) {
      navigate(notification.action_url)
    }
  },
  
  return (
    <div className={cn(
      &quot;border rounded-lg shadow-sm p-4 mb-3 group transition-colors&quot;,
      notification.read ? &quot;border-zion-blue-light bg-zion-blue-dark/10&quot; : &quot;border-zion-cyan bg-zion-blue-dark/30&quot;
    )}>
      <div className=&quot;flex items-start gap-4&quot;>
        <div className=&quot;mt-1&quot;>
          {getNotificationIcon(notification.type, &quot;h-6 w-6&quot;)}
        </div>
        <div className=&quot;flex-1&quot;>
          <div className=&quot;flex justify-between&quot;>
            <div className=&quot;flex flex-col&quot;>
              <h3 className=&quot;font-medium text-white&quot;>{notification.title}</h3>
              <div className=&quot;flex items-center gap-2 mb-2&quot;>
                {getNotificationTypeBadge(notification.type)}
                <span className=&quot;text-xs text-zion-slate-light&quot;>
                  {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
                </span>
                {!notification.read && (
                  <Badge variant=&quot;outline&quot; className=&quot;bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs&quot;>New</Badge>
=======
      onMarkAsRead(notification.id);}
    
    if (notification.action_url) {_navigate(notification.action_url);}
  };
  
  return (
    <div className={_cn(
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors", _notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" : "border-zion-cyan bg-zion-blue-dark/30"
    )}>
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {_getNotificationIcon(notification.type, _"h-6 w-6")}
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-medium text-white">{_notification.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                {_getNotificationTypeBadge(notification.type)}
                <span className="text-xs text-zion-slate-light">
                  {_formatDistanceToNow(new Date(notification.created_at), _{ addSuffix: true})}
                </span>
                {_!notification.read && (
                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </div>
            </div>
            
<<<<<<< HEAD
            <div className=&quot;flex items-center gap-2&quot;>
              {!notification.read && (
                <Button
                  variant=&quot;ghost&quot;
                  size=&quot;sm&quot;
                  className=&quot;h-8 w-8 p-0&quot;
=======
            <div className="flex items-center gap-2">
              {_!notification.read && (_<Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <Check className=&quot;h-4 w-4 text-green-400&quot; />
                  <span className=&quot;sr-only&quot;>Mark as read</span>
                </Button>
              )}
              <Button
<<<<<<< HEAD
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                className=&quot;h-8 w-8 p-0&quot;
                onClick={() => onDismiss(notification.id)}
=======
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={_() => onDismiss(notification.id)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Trash2 className=&quot;h-4 w-4 text-red-400&quot; />
                <span className=&quot;sr-only&quot;>Dismiss</span>
              </Button>
            </div>
          </div>
          
<<<<<<< HEAD
          <p className=&quot;text-zion-slate-light mb-3&quot;>{notification.message}</p>
=======
          <p className="text-zion-slate-light mb-3">{_notification.message}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
          {_notification.action_url && notification.action_text && (
            <Button
              variant=&quot;outline&quot;
              size=&quot;sm&quot;
              className=&quot;mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black&quot;
              onClick={handleAction}
            >
<<<<<<< HEAD
              {notification.action_text}
              <ChevronRight className=&quot;ml-1 h-4 w-4&quot; />
=======
              {_notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Button>
          )}
        </div>
      </div>
    </div>
  )
},

<<<<<<< HEAD
export default function NotificationsPage() {
  const {
    filteredNotifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    loading,
    filter,
    setFilter
  } = useNotifications() as NotificationContextType,
=======
export default function NotificationsPage() {_const {
    filteredNotifications, _unreadCount, _markAsRead, _markAllAsRead, _dismissNotification, _loading, _filter, _setFilter} = useNotifications() as NotificationContextType;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <>
      <SEO 
        title=&quot;Notifications | Zion AI Marketplace&quot; 
        description=&quot;View and manage your notifications on the Zion AI Marketplace.&quot; 
      />
      <AppHeader />
      <main className=&quot;container mx-auto px-4 py-8 min-h-screen&quot;>
        <div className=&quot;flex justify-between items-center mb-6&quot;>
          <div>
<<<<<<< HEAD
            <h1 className=&quot;text-3xl font-bold flex items-center&quot;>
              <Bell className=&quot;mr-3 h-7 w-7&quot; /> Notifications
              {unreadCount > 0 && (
                <Badge className=&quot;ml-3 bg-zion-cyan&quot;>{unreadCount} unread</Badge>
=======
            <h1 className="text-3xl font-bold flex items-center">
              <Bell className="mr-3 h-7 w-7" /> Notifications
              {_unreadCount > 0 && (
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </h1>
            <p className=&quot;text-muted-foreground&quot;>Stay updated with the latest activities and reminders</p>
          </div>
          
<<<<<<< HEAD
          {unreadCount > 0 && (
            <Button
              variant=&quot;outline&quot;
=======
          {_unreadCount > 0 && (_<Button
              variant="outline"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              onClick={() => markAllAsRead()}
            >
              <Check className=&quot;mr-2 h-4 w-4&quot; />
              Mark all as read
            </Button>
          )}
        </div>
        
<<<<<<< HEAD
        <div className=&quot;mb-8&quot;>
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>
            <TabsList className=&quot;grid w-full max-w-md grid-cols-5&quot;>
              <TabsTrigger value=&quot;all&quot;>All</TabsTrigger>
              <TabsTrigger value=&quot;unread&quot;>Unread</TabsTrigger>
              <TabsTrigger value=&quot;onboarding&quot;>Onboarding</TabsTrigger>
              <TabsTrigger value=&quot;messages&quot;>Messages</TabsTrigger>
              <TabsTrigger value=&quot;system&quot;>System</TabsTrigger>
            </TabsList>
            <TabsContent value={filter} className=&quot;mt-6&quot;>
              {loading ? (
                <div className=&quot;space-y-4&quot;>
                  <Skeleton className=&quot;h-24 w-full rounded-lg&quot; />
                  <Skeleton className=&quot;h-24 w-full rounded-lg&quot; />
                  <Skeleton className=&quot;h-24 w-full rounded-lg&quot; />
=======
        <div className="mb-8">
          <Tabs defaultValue={_filter} onValueChange={_(_value) => setFilter(value as any)}>
            <TabsList className="grid w-full max-w-md grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>
            <TabsContent value={_filter} className="mt-6">
              {_loading ? (
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className=&quot;text-center py-12 bg-muted rounded-lg&quot;>
                  <Bell className=&quot;mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30&quot; />
                  <h3 className=&quot;text-xl font-medium&quot;>No notifications found</h3>
                  <p className=&quot;text-muted-foreground mt-1&quot;>
                    {filter === 'all' ? &quot;You don't have any notifications yet&quot; : `You don't have any ${filter} notifications`}
                  </p>
                </div>
              ) : (
                <div>
                  {_filteredNotifications.map(notification => (
                    <NotificationCard
                      key={notification.id}
                      notification={_notification}
                      onMarkAsRead={_markAsRead}
                      onDismiss={_dismissNotification}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
