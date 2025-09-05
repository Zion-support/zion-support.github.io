
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
  }
};

const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
    case 'message':
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
  }
};

const NotificationCard: React.FC<{
  notification: {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    created_at: string;
    action_url?: string;
    action_text?: string;
  };
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const navigate = useNavigate();
  
  const handleAction = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
    
    if (notification.action_url) {
      navigate(notification.action_url);
    }
  };
  
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
                )}
              </div>
            </div>
            
            <div className=&quot;flex items-center gap-2&quot;>
              {!notification.read && (
                <Button
                  variant=&quot;ghost&quot;
                  size=&quot;sm&quot;
                  className=&quot;h-8 w-8 p-0&quot;
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <Check className=&quot;h-4 w-4 text-green-400&quot; />
                  <span className=&quot;sr-only&quot;>Mark as read</span>
                </Button>
              )}
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                className=&quot;h-8 w-8 p-0&quot;
                onClick={() => onDismiss(notification.id)}
              >
                <Trash2 className=&quot;h-4 w-4 text-red-400&quot; />
                <span className=&quot;sr-only&quot;>Dismiss</span>
              </Button>
            </div>
          </div>
          
          <p className=&quot;text-zion-slate-light mb-3&quot;>{notification.message}</p>
          
          {notification.action_url && notification.action_text && (
            <Button
              variant=&quot;outline&quot;
              size=&quot;sm&quot;
              className=&quot;mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black&quot;
              onClick={handleAction}
            >
              {notification.action_text}
              <ChevronRight className=&quot;ml-1 h-4 w-4&quot; />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

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
  } = useNotifications() as NotificationContextType;
  
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
            <h1 className=&quot;text-3xl font-bold flex items-center&quot;>
              <Bell className=&quot;mr-3 h-7 w-7&quot; /> Notifications
              {unreadCount > 0 && (
                <Badge className=&quot;ml-3 bg-zion-cyan&quot;>{unreadCount} unread</Badge>
              )}
            </h1>
            <p className=&quot;text-muted-foreground&quot;>Stay updated with the latest activities and reminders</p>
          </div>
          
          {unreadCount > 0 && (
            <Button
              variant=&quot;outline&quot;
              onClick={() => markAllAsRead()}
            >
              <Check className=&quot;mr-2 h-4 w-4&quot; />
              Mark all as read
            </Button>
          )}
        </div>
        
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
                  {filteredNotifications.map(notification => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      onDismiss={dismissNotification}
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
  );
}
