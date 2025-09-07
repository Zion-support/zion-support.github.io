<<<<<<< HEAD
import React, { useState } from 'react';
import {AppHeader} from "@/layout/AppHeader";"
import {Footer} from "@/components/Footer";"
import {useNotifications} from "@/context/notifications/NotificationContext";"
import {NotificationType, NotificationContextType} from "@/context/notifications";"
import {formatDistanceToNow} from "date-fns";"
import {Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";"
import {Badge} from "@/components/ui/badge";"
import {Skeleton} from "@/components/ui/skeleton";"
import {SEO} from "@/components/SEO";"
import {useNavigate} from "react-router-dom";"
import {cn} from "@/lib/utils";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from 'react';
import {AppHeader} from "@/layout/AppHeader";"
import {Footer} from "@/components/Footer";"
import {useNotifications} from "@/context/notifications/NotificationContext";"
import {NotificationType, NotificationContextType} from "@/context/notifications";"
import {formatDistanceToNow} from "date-fns";"
import {Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";"
import {Badge} from "@/components/ui/badge";"
import {Skeleton} from "@/components/ui/skeleton";"
import {SEO} from "@/components/SEO";"
import {useNavigate} from "react-router-dom";"
import {cn} from "@/lib/utils";
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from 'react',
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",

import { useNotifications } from "@/context/notifications/NotificationContext",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react';
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { useNotifications } from "@/context/notifications/NotificationContext";
import {
  NotificationType,
  NotificationContextType
} from "@/context/notifications",
import { formatDistanceToNow } from "date-fns";
=======

>>>>>>> origin/chore/fix-lint-and-merge
  Bell, Check, Trash2, ChevronRight, CheckCircle, 
<<<<<<< HEAD

import { cn } from "@/lib/utils",

=======
<<<<<<< HEAD
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings
} from "lucide-react",
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SEO } from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
=======

import { cn } from "@/lib/utils",

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    default:"
      return <Bell className={cn(className, "text-gray-500")} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
},
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
    case 'message':

},

const getNotificationTypeBadge = (type: NotificationType) => {}
  switch (type) {'
    case 'message':
;
<<<<<<< HEAD
};

const getNotificationTypeBadge = (type: NotificationType) => {;
  switch (type) {;'
    case 'message':;
=======
=======
  }
<<<<<<< HEAD
}
},

const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
    case 'message':
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
      return <Badge className="bg-yellow-500">System</Badge>
    default:
      return <Badge variant="outline">Notification</Badge>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

},


const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
    case 'message':
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
const getNotificationTypeBadge = (type: NotificationType) => {;
  switch (type) {;'
    case 'message':;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
      return <Badge className="bg-blue-500">Message</Badge>;'
    case 'quote_request':;"
      return <Badge className="bg-purple-500">Quote Request</Badge>;'
    case 'booking_confirmation':;"
      return <Badge className="bg-green-500">Booking</Badge>;'
    case 'hire_request':;"
      return <Badge className="bg-zion-purple">Hire Request</Badge>;'
    case 'onboarding':;"
      return <Badge className="bg-zion-cyan">Onboarding</Badge>;

'
import React, { useState } from 'react';'
import { AppHeader } from '@/layout / AppHeader';'
import { Footer } from '@/components / Footer';'
import { use_notifications } from '@/context / notifications / NotificationContext';'
import { NotificationType, NotificationContextType } from '@/context / notifications';'
import { formatDistanceToNow } from './date - fns';'
import { Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings } from './lucide-react';'
import { Button } from '@/components / ui / button';'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';'
import { Badge } from '@/components / ui / badge';'
import { Skeleton } from '@/components / ui / skeleton';'
import { SEO } from '@/components / SEO';'
import { use_navigate } from './react-router-dom';'
import { cn } from '@/lib / utils';"
const getNotificationIcon = (type: NotificationType, class_name: string = "h - 5 w - 5") =>: any {}
  switch (type) {}
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
;
const getNotificationTypeBadge = (type: NotificationType) =>: any {}
  switch (type) {'
    case 'message':;"
      return <Badge className="bg - blue - 500">Message</Badge>;'
    case 'quote_request':;"
      return <Badge className="bg - purple - 500">Quote Request</Badge>;'
    case 'booking_confirmation':;"
      return <Badge className="bg - green - 500">Booking</Badge>;'
    case 'hire_request':;"
      return <Badge className="bg - zion - purple">Hire Request</Badge>;'
    case 'onboarding':;"
      return <Badge className="bg - zion - cyan">Onboarding</Badge>;'
    case 'system':;"
      return <Badge className="bg - yellow - 500">System</Badge>,
    default:;"

      return <Badge variant="outline">Notification</Badge>;
  }
}
;
<<<<<<< HEAD

      return <Badge variant="outline">Notification</Badge>;
  }
};

=======
<<<<<<< HEAD
    action_text?: string
  }
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const navigate = useNavigate();
  const handleAction = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)
=======

<<<<<<< HEAD
=======
const NotificationCard: React.FC<{
  notification: {
    id: string
    title: string
    message: string
    type: NotificationType
    read: boolean
    created_at: string
    action_url?: string;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react',;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { useNotifications } from "@/context/notifications/NotificationContext",;
import {;
  NotificationType,;
  NotificationContextType;
} from "@/context/notifications",;
import { formatDistanceToNow } from "date-fns",;
import {;
  Bell, Check, Trash2, ChevronRight, CheckCircle,;
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings;
} from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Badge } from "@/components/ui/badge",;
import { Skeleton } from "@/components/ui/skeleton",;
import { SEO } from "@/components/SEO",;
import { useNavigate } from "react-router-dom",;
import { cn } from "@/lib/utils",;
const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {;
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
      return <Bell className={cn(className, "text-gray-500")} />;
<<<<<<< HEAD
    case 'system':;
      return <Badge className="bg-yellow-500">System</Badge>,;
    default:;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return <Badge variant="outline">Notification</Badge>;
  }
};
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const NotificationCard: React.FC<{;
  notification: {;
    id: string,;
    title: string,;
    message: string,;
    type: NotificationType,;
    read: boolean,;
    created_at: string,;
    action_url?: string;
    action_text?: string;
  };
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>;
}> = ({ notification, onMarkAsRead, onDismiss }) => {;
  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const handleAction = () => {;

    if (!notification.read) {;
      onMarkAsRead(notification.id);


    }
    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }

  },
  };
  },


  
  };
  return (
    <divclassName={cn(
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors"
      notification && notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" : "border-zion-cyan bg-zion-blue-dark/30"
    )}>;
      <div className="flex items-start gap-4">;
        <div className="mt-1">;
          {getNotificationIcon(notification && notification.type, "h-6 w-6")}

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
  }
},;
const getNotificationTypeBadge = (type: NotificationType) => {;
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
=======

  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    case 'system':;
      return <Badge className="bg-yellow-500">System</Badge>,;
    default:;
      return <Badge variant="outline">Notification</Badge>;
  }
<<<<<<< HEAD
},;
              <h3 className="font-medium text-white">{notification.title}</h3>;
              <div className="flex items-center gap-2 mb-2">;
                {getNotificationTypeBadge(notification.type)}
                <span className="text-xs text-zion-slate-light">;
                  {formatDistanceToNow(new Date(notification.created_at), { addSuffix:true })}
                </span>;
                {!notification.read && (;
                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New</Badge>;
                )}
              </div>;
            </div>;
=======
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const NotificationCard: React.FC<{;
  notification: {;
    id: string,;
    title: string,;
    message: string,;
    type: NotificationType,;
    read: boolean,;
    created_at: string,;
<<<<<<< HEAD
    action_url?: string,;
    action_text?: string;
  },;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>;
}> = ({ notification, onMarkAsRead, onDismiss }) => {;
  const navigate = useNavigate(),;
  const handleAction = () => {;
    if (!notification.read) {;
      onMarkAsRead(notification.id);
    }
    if (notification.action_url) {
      navigate(notification.action_url)
    }
  }
=======
    action_url?: string;
    action_text?: string;
  };
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>;
}> = ({ notification, onMarkAsRead, onDismiss }) => {;
  const navigate = useNavigate();
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleAction = () => {;

    if (!notification.read) {;
      onMarkAsRead(notification.id);

    }

    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  };
  },
<<<<<<< HEAD
  
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
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
<<<<<<< HEAD
                  onClick={() => onMarkAsRead(notification && notification.id)}
=======
<<<<<<< HEAD
            ;
            <div className="flex items-center gap-2">;
              {!notification.read && (;
                <Button;
                  variant="ghost";
                  size="sm";
                  className="h-8 w-8 p-0";
                  onClick={() => onMarkAsRead(notification.id)}
=======
                  onClick={() => onMarkAsRead(notification && notification.id)}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
            <div className="flex items-center gap-2">;
              {!notification.read && (;
                <Button;
                  variant="ghost";
                  size="sm";
                  className="h-8 w-8 p-0";
                  onClick={() => onMarkAsRead(notification.id)}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                >;
                  <Check className="h-4 w-4 text-green-400" />;
                  <span className="sr-only">Mark as read</span>;
                </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              )}
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="sr-only">Mark as read</span>
                </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              )}
onClick={() => onMarkAsRead(notification.id)}
                >
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="sr-only">Mark as read</span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
<<<<<<< HEAD

                onClick={() => onDismiss(notification && notification.id)}
=======
<<<<<<< HEAD
                onClick={() => onDismiss(notification && notification.id)}
              <Button;
                variant="ghost";
                size="sm";
                className="h-8 w-8 p-0";
                onClick={() => onDismiss(notification.id)}
=======

                onClick={() => onDismiss(notification && notification.id)}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
onClick={() => onDismiss(notification && notification.id)}
              <Button;
                variant="ghost";
                size="sm";
                className="h-8 w-8 p-0";
                onClick={() => onDismiss(notification.id)}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >;
                <Trash2 className="h-4 w-4 text-red-400" />;
                <span className="sr-only">Dismiss</span>;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                onClick={() => onDismiss(notification.id)}
              >
                <Trash2 className="h-4 w-4 text-red-400" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>
          <p className="text-zion-slate-light mb-3">{notification.message}</p>
          {notification.action_url && notification.action_text && (
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <p className="text-zion-slate-light mb-3">{notification && notification.message}</p>;

          {notification && notification.action_url && notification && notification.action_text && (;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
onClick={() => onDismiss(notification.id)}
              >
                <Trash2 className="h-4 w-4 text-red-400" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>
          <p className="text-zion-slate-light mb-3">{notification.message}</p>
          {notification.action_url && notification.action_text && (
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
<<<<<<< HEAD
          ;
          <p className="text-zion-slate-light mb-3">{notification.message}</p>;
          ;
          {notification.action_url && notification.action_text && (;
            <Button;
              variant="outline";
              size="sm";
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black";              onClick={handleAction}
            >;
              {notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}
              onClick={handleAction}
            >
              {notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
=======
              onClick={handleAction}>;
              {notification && notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <p className="text-zion-slate-light mb-3">{notification.message}</p>;
          ;
          {notification.action_url && notification.action_text && (;
            <Button;
              variant="outline";
              size="sm";
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black";              onClick={handleAction}
            >;
              {notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}
              onClick={handleAction}
            >
              {notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )

        </div>;
      </div>;
    </div>;

        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );

};

export default function NotificationsPage() {;
  const {;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    markAsRead;
    markAllAsRead;
    dismiss_notification;
    loading;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
const getNotificationTypeBadge = $2;
    case 'quote_request':
      return <Badge className = $2;
    case 'booking_confirmation':
      return <Badge className = $2;
    case 'hire_request':
      return <Badge className = $2;
    case 'onboarding':
      return <Badge className = $2;
    case 'system':
      return <Badge className = $2;
    default:
      return <Badge variant = $2;
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
  const navigate = useNavigate($2);
  const handleAction = $2;
  return (
    <div className = $2;
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
                  {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true})}
                </span>
                {!notification.read && (
                  <Badge variant = $2;
export default function NotificationsPage() {
=======
    filter;
}
},

export default function NotificationsPage() {
<<<<<<< HEAD
  const {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    filteredNotifications;
    unreadCount;
    markAsRead;
    markAllAsRead;
    dismissNotification;
    loading;
    filter;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    filteredNotifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    loading,
    filter,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/chore/fix-lint-and-merge
    setFilter

<<<<<<< HEAD
=======
  } = useNotifications() as NotificationContextType,

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>;
      <SEO
        title="Notifications | Zion AI Marketplace" 
        description="View and manage your notifications on the Zion AI Marketplace." 
<<<<<<< HEAD

;
    <>;
      <SEO"
        title="Notifications | Zion AI Marketplace" "
        description="View and manage your notifications on the Zion AI Marketplace." 

      />;
      <AppHeader />;"
      <main className="container mx-auto px-4 py-8 min-h-screen">;"
        <div className="flex justify-between items-center mb-6">;
          <div>;"
            <h1 className="text-3xl font-bold flex items-center">;"
              <Bell className="mr-3 h-7 w-7" /> Notifications;
              {unreadCount > 0 && (;"
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread</Badge>;
              )}
            </h1>;"
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>;
          </div>;

            <Button"
              variant="outline"
          ;
          {unreadCount > 0 && (;
            <Button;"
              variant="outline";

              onClick={() => markAllAsRead()}
            >;"

=======
<<<<<<< HEAD
  ),;
},;
;
export default function NotificationsPage() {;
  const {;
    filteredNotifications,;
    unreadCount,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;
    loading,;
    filter,;
    setFilter;
  } = useNotifications() as NotificationContextType,;
  ;
  return (;
    <>;
      <SEO ;
        title="Notifications | Zion AI Marketplace" ;
        description="View and manage your notifications on the Zion AI Marketplace." ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
            <Button
              variant="outline"
          ;
          {unreadCount > 0 && (;
            <Button;
              variant="outline";
=======

          {unreadCount > 0 && (;

            <Button
              variant="outline"
<<<<<<< HEAD
            <Button
              variant="outline"
          ;
          {unreadCount > 0 && (;
            <Button;
              variant="outline";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              onClick={() => markAllAsRead()}
            >;

              <Check className="mr-2 h-4 w-4" />;
              Mark all as read;
            </Button>;
          )}
<<<<<<< HEAD
        </div>;
        ;
=======

<<<<<<< HEAD
=======
        </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
              ) :filteredNotifications.length === 0 ? (;
=======
              ) : filteredNotifications && filteredNotifications.length === 0 ? (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="text-center py-12 bg-muted rounded-lg">;
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />;
                  <h3 className="text-xl font-medium">No notifications found</h3>;
                  <p className="text-muted-foreground mt-1">;
<<<<<<< HEAD
=======

                    {filter === 'all' ? "You don't have any notifications yet" : `You don't have any ${filter} notifications`}
                  </p>;
                </div>;
              ) : (;
                <div>;
                  {filteredNotifications && filteredNotifications.map(notification => (;
                    <NotificationCard
                      key={notification && notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      onDismiss={dismissNotification}
                    />;
                  ))}
                </div>;
              )}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    set_filter;
  } = use_notifications () as NotificationContextType;
;
  return (
    <>;

                    {filter === 'all' ? "You don't have any notifications yet" : `You don't have any ${filter} notifications`}
                  </p>;
                </div>) : (
                <div>;
                  {filtered_notifications.map (notification => (
                    <NotificationCard;
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      on_dismiss={dismiss_notification}
                    />))}
                </div>)}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    {filter === 'all' ? "You don't have any notifications yet" :`You don't have any ${filter} notifications`}
                  </p>;
                </div>;
              ) :(;
                <div>;
                  {filteredNotifications.map(notification => (;
                    <NotificationCard;
<<<<<<< HEAD

  } = useNotifications() as NotificationContextType;

  } = useNotifications() as NotificationContextType,
  return (
    <>

=======
    setFilter
  } = useNotifications() as NotificationContextType;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } = useNotifications() as NotificationContextType,

  return (

    <>;
      <SEO
        title="Notifications | Zion AI Marketplace" 
        description="View and manage your notifications on the Zion AI Marketplace." 

;
    <>;
      <SEO"
        title="Notifications | Zion AI Marketplace" "
        description="View and manage your notifications on the Zion AI Marketplace." 

      />;
      <AppHeader />;"
      <main className="container mx-auto px-4 py-8 min-h-screen">;"
        <div className="flex justify-between items-center mb-6">;
          <div>;"
            <h1 className="text-3xl font-bold flex items-center">;"
              <Bell className="mr-3 h-7 w-7" /> Notifications;
              {unreadCount > 0 && (;"
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread</Badge>;
              )}
            </h1>;"
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>;
          </div>;

            <Button"
              variant="outline"
          ;
          {unreadCount > 0 && (;
            <Button;"
              variant="outline";

              onClick={() => markAllAsRead()}
            >;"

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

          {unreadCount > 0 && (;

            <Button
              variant="outline"
            <Button
              variant="outline"
          ;
          {unreadCount > 0 && (;
            <Button;
              variant="outline";
              onClick={() => markAllAsRead()}
            >;

              <Check className="mr-2 h-4 w-4" />;
              Mark all as read;
            </Button>;
          )}
<<<<<<< HEAD

    set_filter;
  } = use_notifications () as NotificationContextType;
;
  return (
    <>;

                    {filter === 'all' ? "You don't have any notifications yet" : `You don't have any ${filter} notifications`}
                  </p>;
                </div>) : (
                <div>;
                  {filtered_notifications.map (notification => (
                    <NotificationCard;
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      on_dismiss={dismiss_notification}
                    />))}
                </div>)}

                    {filter === 'all' ? "You don't have any notifications yet" :`You don't have any ${filter} notifications`}
                  </p>;
                </div>;
              ) :(;
                <div>;
                  {filteredNotifications.map(notification => (;
                    <NotificationCard;

  } = useNotifications() as NotificationContextType;

  } = useNotifications() as NotificationContextType,
  return (
    <>

=======
        </div>
        <div className="mb-8">
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>
            <TabsList className="grid w-full max-w-md grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>
            <TabsContent value={filter} className="mt-6">
              {loading ? (
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />
                  <h3 className="text-xl font-medium">No notifications found</h3>
                  <p className="text-muted-foreground mt-1">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {filter === 'all' ? "You don't have any notifications yet" : `You don't have any ${filter} notifications`}
                  </p>
                </div>
              ) : (
                <div>
                  {filteredNotifications.map(notification => (
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                    <NotificationCard
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  )
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </TabsContent>;

          </Tabs>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD

    </>;
  ),; 

  id: string;
title: string;
message: string;
type: NotificationType;
read: boolean;
created at: string;
action url?: string;

onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> 
}</div> </div> onClick= {
}> <Check className="h-4 w-4 text-green-400" /> <span className="sr-only" >Mark as read</span> )"
}<Button > <Trash2 className="h-4 w-4 text-red-400" /> <span className="sr-only" >Dismiss</span>  </div> </div> {""
  notification.action url && notification.action text && (<Button variant="outline" size="sm" className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black" onClick= {"
  handleAction;)
}> ) 
}</div> </div> </div>) "
return (<> <SEO title="Notifications | Zion AI Marketplace" description="View and manage your notifications on the Zion AI Marketplace." /> <AppHeader /> <main className="container mx-auto px-4 py-8 min-h-screen" > <div className="flex justify-between items-center mb-6" > <div>)"
}</h1> <p className="text-muted-foreground" >Stay updated with the latest activities and reminders</p> </div> onClick= {""
}> <Check className="mr-2 h-4 w-4" /> Mark all as read )"
}</div> </div>) : filteredNotifications.length === 0 ? (<div className="text-center py-12 bg-muted rounded-lg" > <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" /> <h3 className="text-xl font-medium" >No notifications found</h3> <p className="text-muted-foreground mt-1" > {"
</div>)
}</p> </div>) : (<div> {
  filteredNotifications.map (notification => (<NotificationCard key= {
  notification.id;
}notification= {
  notification;
}onMarkAsRead= {
  markAsRead;
}onDismiss= {

}/>) ) 

}</div>) 
}  </div> </main> <Footer /> </>) 

  );
}
;
=======
<<<<<<< HEAD
    </>;
  ),; 
}
;

};
const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
  case 'message': 
}
};
const NotificationCard: React.FC< {
  notification: {
  id: string;
title: string;
message: string;
type: NotificationType;
read: boolean;
created at: string;
action url?: string;
action text?: string 
};
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> 
}> = ({
  notification, onMarkAsRead, onDismiss 
}) => {
  const navigate = useNavigate ();
if (!notification.read) {
  ) 
}</div> </div> onClick= {
  () => onMarkAsRead (notification.id) 
}> <Check className="h-4 w-4 text-green-400" /> <span className="sr-only" >Mark as read</span> </Button>) 
}<Button > <Trash2 className="h-4 w-4 text-red-400" /> <span className="sr-only" >Dismiss</span> </Button> </div> </div> {
  notification.action url && notification.action text && (<Button variant="outline" size="sm" className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black" onClick= {
  handleAction 
}> </Button>) 
}</div> </div> </div>) 
};
return (<> <SEO title="Notifications | Zion AI Marketplace" description="View and manage your notifications on the Zion AI Marketplace." /> <AppHeader /> <main className="container mx-auto px-4 py-8 min-h-screen" > <div className="flex justify-between items-center mb-6" > <div>) 
}</h1> <p className="text-muted-foreground" >Stay updated with the latest activities and reminders</p> </div> onClick= {
  () => markAllAsRead () 
}> <Check className="mr-2 h-4 w-4" /> Mark all as read </Button>) 
}</div> </div>) : filteredNotifications.length === 0 ? (<div className="text-center py-12 bg-muted rounded-lg" > <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" /> <h3 className="text-xl font-medium" >No notifications found</h3> <p className="text-muted-foreground mt-1" > {
  filter === 'all' ? "You don't have any notifications yet" : `You don't have any $ {
  filter 
}notifications` 
}</p> </div>) : (<div> {
  filteredNotifications.map (notification => (<NotificationCard key= {
  notification.id 
}notification= {
  notification 
}onMarkAsRead= {
  markAsRead 
}onDismiss= {
  dismissNotification 
}/>) ) 
}</div>) 
}</TabsContent> </Tabs> </div> </main> <Footer /> </>) 
}
    </>;
  );
}
;
=======

    </>;
  ),; 

  id: string;
title: string;
message: string;
type: NotificationType;
read: boolean;
created at: string;
action url?: string;

onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> 
}</div> </div> onClick= {
}> <Check className="h-4 w-4 text-green-400" /> <span className="sr-only" >Mark as read</span> )"
}<Button > <Trash2 className="h-4 w-4 text-red-400" /> <span className="sr-only" >Dismiss</span>  </div> </div> {""
  notification.action url && notification.action text && (<Button variant="outline" size="sm" className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black" onClick= {"
  handleAction;)
}> ) 
}</div> </div> </div>) "
return (<> <SEO title="Notifications | Zion AI Marketplace" description="View and manage your notifications on the Zion AI Marketplace." /> <AppHeader /> <main className="container mx-auto px-4 py-8 min-h-screen" > <div className="flex justify-between items-center mb-6" > <div>)"
}</h1> <p className="text-muted-foreground" >Stay updated with the latest activities and reminders</p> </div> onClick= {""
}> <Check className="mr-2 h-4 w-4" /> Mark all as read )"
}</div> </div>) : filteredNotifications.length === 0 ? (<div className="text-center py-12 bg-muted rounded-lg" > <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" /> <h3 className="text-xl font-medium" >No notifications found</h3> <p className="text-muted-foreground mt-1" > {"
</div>)
}</p> </div>) : (<div> {
  filteredNotifications.map (notification => (<NotificationCard key= {
  notification.id;
}notification= {
  notification;
}onMarkAsRead= {
  markAsRead;
}onDismiss= {

}/>) ) 

}</div>) 
}  </div> </main> <Footer /> </>) 

  );
}
<<<<<<< HEAD
;
=======

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
