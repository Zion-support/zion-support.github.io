




  Bell, Check, Trash2, ChevronRight, CheckCircle, 


      return <Badge className="bg-blue-500">Message</Badge>;
    case 'quote_request':;
      return <Badge className="bg-purple-500">Quote Request</Badge>;
    case 'booking_confirmation':;
      return <Badge className="bg-green-500">Booking</Badge>;
    case 'hire_request':;
      return <Badge className="bg-zion-purple">Hire Request</Badge>;
    case 'onboarding':;
      return <Badge className="bg-zion-cyan">Onboarding</Badge>;
import React, { useState } from 'react';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { use_notifications } from '@/context / notifications / NotificationContext';
import { NotificationType, NotificationContextType } from '@/context / notifications';
import { formatDistanceToNow } from './date - fns';
import { Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';
import { Badge } from '@/components / ui / badge';
import { Skeleton } from '@/components / ui / skeleton';
import { SEO } from '@/components / SEO';
import { use_navigate } from './react-router-dom';
import { cn } from '@/lib / utils';
const getNotificationIcon = (type: NotificationType, class_name: string = "h - 5 w - 5") =>: any {
  switch (type) {
    case 'message':;
      return <MessageCircle className={cn (class_name, "text - blue - 500")} />;
    case 'quote_request':;
      return <Briefcase className={cn (class_name, "text - purple - 500")} />;
    case 'booking_confirmation':;
      return <CheckCircle className={cn (class_name, "text - green - 500")} />;
    case 'hire_request':;
      return <UserCheck className={cn (class_name, "text - zion - purple")} />;
    case 'onboarding':;
      return <Settings className={cn (class_name, "text - zion - cyan")} />;
    case 'system':;
      return <AlertCircle className={cn (class_name, "text - yellow - 500")} />;
    default:;
      return <Bell className={cn (class_name, "text - gray - 500")} />;



  return (
    <divclassName={cn(
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors"
      notification && notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" : "border-zion-cyan bg-zion-blue-dark/30"
    )}>;
      <div className="flex items-start gap-4">;
        <div className="mt-1">;
          {getNotificationIcon(notification && notification.type, "h-6 w-6")}
        </div>;
        <div className="flex-1">;
          <div className="flex justify-between">;
            <div className="flex flex-col">;
              <h3 className="font-medium text-white">{notification && notification.title}</h3>;
              <div className="flex items-center gap-2 mb-2">;
                {getNotificationTypeBadge(notification && notification.type)}
                <span className="text-xs text-zion-slate-light">;
                  {formatDistanceToNow(new Date(notification && notification.created_at), { addSuffix: true })}
                </span>;
                {!notification && notification.read && (;
                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New</Badge>;
                )}

              </div>;
            </div>;

            <div className="flex items-center gap-2">;
              {!notification && notification.read && (;


                  onClick={() => onMarkAsRead(notification && notification.id)}




                onClick={() => onDismiss(notification && notification.id)}


              onClick={handleAction}>;
              {notification && notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}

    filter;
}
},

export default function NotificationsPage() {


    setFilter

  } = useNotifications() as NotificationContextType,

  return (





          {unreadCount > 0 && (;

            <Button
              variant="outline"









