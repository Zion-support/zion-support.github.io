


import React, { useState } from 'react';
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {useNotifications} from "@/context/notifications/NotificationContext";
import {NotificationType, NotificationContextType} from "@/context/notifications";
import {formatDistanceToNow} from "date-fns";
import {Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {Badge} from "@/components/ui/badge";
import {Skeleton} from "@/components/ui/skeleton";
import {SEO} from "@/components/SEO";
import {useNavigate} from "react-router-dom";
import {cn} from "@/lib/utils";


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







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



=======
import React, { useState } from 'react';
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { useNotifications } from "@/context/notifications/NotificationContext";
import {
  NotificationType,
  NotificationContextType
} from "@/context/notifications";
import { formatDistanceToNow } from "date-fns";
import { 
  Bell, Check, Trash2, ChevronRight, CheckCircle, 
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SEO } from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
>>>>>>> origin/auto/autonomy-17186719616

const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
  switch (type) {
    case 'message':

const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <Badge variant="outline">Notification</Badge>;
  }
};




    }
    if (notification.action_url) {
      navigate(notification.action_url)
    }





  },

  };
  },




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



  

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

=======
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
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors",
      notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" : "border-zion-cyan bg-zion-blue-dark/30"
    )}>
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {getNotificationIcon(notification.type, "h-6 w-6")}
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-medium text-white">{notification.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                {getNotificationTypeBadge(notification.type)}
                <span className="text-xs text-zion-slate-light">
                  {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
                </span>
                {!notification.read && (
                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New</Badge>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {!notification.read && (
>>>>>>> origin/auto/autonomy-17186719616
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
          )}
        </div>
      </div>
    </div>
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
