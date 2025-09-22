<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======







>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from 'react',
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
=======


'
import React, { useState } from 'react',"
import { AppHeader } from "@/layout/AppHeader","
import { Footer } from "@/components/Footer","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useNotifications } from "@/context/notifications/NotificationContext",
<<<<<<< HEAD
import {}
  NotificationType,
  NotificationContextType"
} from "@/context/notifications","
import { formatDistanceToNow } from "date-fns",
import {}
=======


import {
  NotificationType,
  NotificationContextType
} from "@/context/notifications",
import { formatDistanceToNow } from "date-fns",;
import { 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Bell, Check, Trash2, ChevronRight, CheckCircle, 
<<<<<<< HEAD
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings
} from "lucide-react",

import { Button } from "@/components/ui/button",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Badge } from "@/components/ui/badge",
import { Skeleton } from "@/components/ui/skeleton",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
import { useNavigate } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings"
} from "lucide-react","
import { Button } from "@/components/ui/button","
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs","
import { Badge } from "@/components/ui/badge","
import { Skeleton } from "@/components/ui/skeleton","
import { SEO } from "@/components/SEO","
import { useNavigate } from "react-router-dom","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils",


<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
=======
import { cn } from "@/lib/utils",const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { cn } from "@/lib/utils",const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { cn } from "@/lib/utils",



const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import { Button } from "@/components/ui/button",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Badge } from "@/components/ui/badge",;
import { Skeleton } from "@/components/ui/skeleton",;
import { SEO } from "@/components/SEO",;
import { useNavigate } from "react-router-dom",;
import { cn } from "@/lib/utils",const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
"
const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {}
  switch (type) {'
    case 'message':"
      return <MessageCircle className={cn(className, "text-blue-500")} />,'
    case 'quote_request':"
      return <Briefcase className={cn(className, "text-purple-500")} />,'
    case 'booking_confirmation':"
      return <CheckCircle className={cn(className, "text-green-500")} />,'
    case 'hire_request':"
      return <UserCheck className={cn(className, "text-zion-purple")} />,'
    case 'onboarding':"
      return <Settings className={cn(className, "text-zion-cyan")} />,'
    case 'system':"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return <AlertCircle className={cn(className, "text-yellow-500")} />,
    default:"
      return <Bell className={cn(className, "text-gray-500")} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
}
},

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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

},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
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
      return <Badge className="bg-yellow-500">System</Badge>
    default:
      return <Badge variant="outline">Notification</Badge>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


},


const getNotificationTypeBadge = (type: NotificationType) => {}
  switch (type) {'
    case 'message':
;
};

const getNotificationTypeBadge = (type: NotificationType) => {;
  switch (type) {;'
    case 'message':;
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
=======
};

const getNotificationTypeBadge = (type: NotificationType) => {;
  switch (type) {;
    case 'message':;
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
  }
}
;
const getNotificationTypeBadge = (type: NotificationType) =>: any {
  switch (type) {
    case 'message':;
      return <Badge className="bg - blue - 500">Message</Badge>;
    case 'quote_request':;
      return <Badge className="bg - purple - 500">Quote Request</Badge>;
    case 'booking_confirmation':;
      return <Badge className="bg - green - 500">Booking</Badge>;
    case 'hire_request':;
      return <Badge className="bg - zion - purple">Hire Request</Badge>;
    case 'onboarding':;
      return <Badge className="bg - zion - cyan">Onboarding</Badge>;
    case 'system':;
      return <Badge className="bg - yellow - 500">System</Badge>,
    default:;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return <Badge variant="outline">Notification</Badge>;
  }
}
;

<<<<<<< HEAD

const NotificationCard: React.FC<{}
  notification: {}
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    created_at: string;
    action_url?: string;


'
import React, { useState } from 'react',;"
import { AppHeader } from "@/layout/AppHeader",;"
import { Footer } from "@/components/Footer",;"
import { useNotifications } from "@/context/notifications/NotificationContext",;
import {;
  NotificationType,;
  NotificationContextType;"
} from "@/context/notifications",;"
import { formatDistanceToNow } from "date-fns",;
import {;
  Bell, Check, Trash2, ChevronRight, CheckCircle,;
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings;"
} from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;"
import { Badge } from "@/components/ui/badge",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { SEO } from "@/components/SEO",;"
import { useNavigate } from "react-router-dom",;"
import { cn } from "@/lib/utils",;"
const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {;
  switch (type) {;'
    case 'message':;"
      return <MessageCircle className={cn(className, "text-blue-500")} />,;'
    case 'quote_request':;"
      return <Briefcase className={cn(className, "text-purple-500")} />,;'
    case 'booking_confirmation':;"
      return <CheckCircle className={cn(className, "text-green-500")} />,;'
    case 'hire_request':;"
      return <UserCheck className={cn(className, "text-zion-purple")} />,;'
    case 'onboarding':;"
      return <Settings className={cn(className, "text-zion-cyan")} />,;'
    case 'system':;"
      return <AlertCircle className={cn(className, "text-yellow-500")} />,;
    default:;"
      return <Bell className={cn(className, "text-gray-500")} />;



  }
'
    case 'system':;"
      return <Badge className="bg-yellow-500">System</Badge>,;
    default:;"
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

action_text?: string
  }
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const navigate = useNavigate();
  const handleAction = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)
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

  }

  }
    case 'system':;
      return <Badge className="bg-yellow-500">System</Badge>,;
    default:;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return <Badge variant="outline">Notification</Badge>;
  }
};

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

  const handleAction = () => {;

    if (!notification.read) {;
      onMarkAsRead(notification.id);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  },


  };
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }  };
  },
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }  };
  },
  
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  },
  };
  },
<<<<<<< HEAD
  
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
};
  }  };
  },
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <divclassName={cn("
      "border rounded-lg shadow-sm p-4 mb-3 group transition-colors""
      notification && notification.read ? "border-zion-blue-light bg-zion-blue-dark/10" : "border-zion-cyan bg-zion-blue-dark/30"
    )}>;"
      <div className="flex items-start gap-4">;"
        <div className="mt-1">;"
          {getNotificationIcon(notification && notification.type, "h-6 w-6")}
<<<<<<< HEAD
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export default function NotificationsPage() {;
  const {;
    filteredNotifications;
    unreadCount;
    action_text?: string;
  }
class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
      return <MessageCircle className={cn(className, "text-blue-500")} />,"
"
      return <Briefcase className={cn(className, "text-purple-500")} />,"
      return <CheckCircle className={cn(className, "text-green-500")} />,"
      return <UserCheck className={cn(className, "text-zion-purple")} />,"
      return <Settings className={cn(className, "text-zion-cyan")} />,"
      return <AlertCircle className={cn(className, "text-yellow-500")} />,"
      return <Bell className={cn(className, "text-gray-500")} />"
      return <Badge className="bg-blue-500">Message;""
      return <Badge className="bg-purple-500">Quote Request;""
      return <Badge className="bg-green-500">Booking;""
      return <Badge className="bg-zion-purple">Hire Request;""
      return <Badge className="bg-zion-cyan">Onboarding;""
      return <Badge className="bg - blue - 500">Message;""
      return <Badge className="bg - purple - 500">Quote Request;""
      return <Badge className="bg - green - 500">Booking;""
      return <Badge className="bg - zion - purple">Hire Request;""
      return <Badge className="bg - zion - cyan">Onboarding;""
      return <Badge className="bg - yellow - 500">System,""
      return <Badge variant="outline">Notification;"
const NotificationCard: React.FC<{,
  notification: {
    id: string;,
  title: string;
    message: string;,
  type: NotificationType;
    read: boolean;,
  created_at: string;
    action_url?: string;

import React, { useState } from 'react',;
import { AppHeader } from "@/layout/AppHeader",;""
import { Footer } from "@/components/Footer",;""
import { useNotifications } from "@/context/notifications/NotificationContext",;"
import {;
  NotificationType,;
  NotificationContextType;"
} from "@/context/notifications",;""
import { formatDistanceToNow } from "date-fns",;"
  Bell, Check, Trash2, ChevronRight, CheckCircle,;
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings;"
} from "lucide-react",;""
import { Button } from "@/components/ui/button",;""
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;""
import { Badge } from "@/components/ui/badge",;""
import { Skeleton } from "@/components/ui/skeleton",;""
import { SEO } from "@/components/SEO",;""
import { useNavigate } from "react-router-dom",;""
import { cn } from "@/lib/utils",;""
const getNotificationIcon = (type: NotificationType, className: string = "h-5 w-5") => {;"
  switch (type) {;"
    case 'message':;
      return <MessageCircle className={cn(className, "text-blue-500")} />,;"
      return <Briefcase className={cn(className, "text-purple-500")} />,;"
      return <CheckCircle className={cn(className, "text-green-500")} />,;"
      return <UserCheck className={cn(className, "text-zion-purple")} />,;"
      return <Settings className={cn(className, "text-zion-cyan")} />,;"
      return <AlertCircle className={cn(className, "text-yellow-500")} />,;"
      return <Bell className={cn(className, "text-gray-500")} />;"
      return <Badge className="bg-yellow-500">System,;""
const NotificationCard: React.FC<{;,
  notification: {;
    id: string,;
    title: string,;
    message: string,;
    type: NotificationType,;
    read: boolean,;
    created_at: string,;
    action_text?: string;
  };
  },
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => onMarkAsRead(notification && notification.id)}
;
            <div className="flex items-center gap-2">;
              {!notification.read && (;
                <Button;
                  variant="ghost";
                  size="sm";
                  className="h-8 w-8 p-0";
                  onClick={() => onMarkAsRead(notification.id)}
                >;
                  <Check className="h-4 w-4 text-green-400" />;
                  <span className="sr-only">Mark as read</span>;
                </Button>;
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

                onClick={() => onDismiss(notification && notification.id)}
onClick={() => onDismiss(notification && notification.id)}
              <Button;
                variant="ghost";
                size="sm";
                className="h-8 w-8 p-0";
                onClick={() => onDismiss(notification.id)}
              >;
                <Trash2 className="h-4 w-4 text-red-400" />;
                <span className="sr-only">Dismiss</span>;
              </Button>;
            </div>;
          </div>;

          <p className="text-zion-slate-light mb-3">{notification && notification.message}</p>;

          {notification && notification.action_url && notification && notification.action_text && (;

onClick={() => onDismiss(notification.id)}
              >
                <Trash2 className="h-4 w-4 text-red-400" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>
          <p className="text-zion-slate-light mb-3">{notification.message}</p>
          {notification.action_url && notification.action_text && (
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
              onClick={handleAction}>;
              {notification && notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          ;
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD

export default function NotificationsPage() {

    setFilter

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

        </div>;"
        <div className="flex-1">;"
          <div className="flex justify-between">;"
            <div className="flex flex-col">;"
              <h3 className="font-medium text-white">{notification && notification.title}</h3>;"
              <div className="flex items-center gap-2 mb-2">;
                {getNotificationTypeBadge(notification && notification.type)}"
                <span className="text-xs text-zion-slate-light">;
                  {formatDistanceToNow(new Date(notification && notification.created_at), { addSuffix: true })}
                </span>;
                {!notification && notification.read && (;"
                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New</Badge>;
                )}



                <Button"
                  variant="ghost""
                  size="sm""
                  className="h-8 w-8 p-0"



                >;"
                  <Check className="h-4 w-4 text-green-400" />;"
                  <span className="sr-only">Mark as read</span>;
                </Button>;
              )}



              <Button"
                variant="ghost""
                size="sm""
                className="h-8 w-8 p-0"

              >;"
                <Trash2 className="h-4 w-4 text-red-400" />;"
                <span className="sr-only">Dismiss</span>;
              </Button>;
            </div>;
          </div>;



            <Button"
              variant="outline""
              size="sm""
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  )
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

        </div>;
      </div>;
    </div>;
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export default function NotificationsPage() {;
  const {;
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
              <ChevronRight className="ml - 1 h - 4 w-4" />;
=======
    <div className={cn ("
      "border rounded - lg shadow - sm p - 4 mb - 3 group transition - colors";"
      notification.read ? "border - zion - blue - light bg - zion - blue - dark / 10" : "border - zion - cyan bg - zion - blue - dark / 30")}>;"
      <div className="flex items - start gap - 4">;"
        <div className="mt - 1">;"
          {getNotificationIcon (notification.type, "h - 6 w - 6")}
        </div>;"
        <div className="flex - 1">;"
          <div className="flex justify - between">;"
            <div className="flex flex - col">;"
              <h3 className="font - medium text - white">{notification.title}</h3>;"
              <div className="flex items - center gap - 2 mb - 2">;
                {getNotificationTypeBadge (notification.type)}"
                <span className="text - xs text - zion - slate - light">;
                  {formatDistanceToNow (new Date (notification.created_at), { add_suffix: true })}
                </span>;
                {!notification.read && ("
                  <Badge variant="outline" className="bg - zion - cyan bg - opacity - 20 text - zion - cyan text - xs">New</Badge>)}
              </div>;
            </div>;"
            <div className="flex items - center gap - 2">;
              {!notification.read && (
                <Button;"
                  variant="ghost";"
                  size="sm";"
                  className="h - 8 w - 8 p - 0";
                  on_click={() => onMarkAsRead (notification.id)}
                >;"
                  <Check className="h - 4 w - 4 text - green - 400" />;"
                  <span className="sr - only">Mark as read</span>;
                </Button>)}
              <Button;"
                variant="ghost";"
                size="sm";"
                className="h - 8 w - 8 p - 0";
                on_click={() => on_dismiss (notification.id)}
              >;"
                <Trash2 className="h - 4 w - 4 text - red - 400" />;"
                <span className="sr - only">Dismiss</span>;
              </Button>;
            </div>;
          </div>;"
          <p className="text - zion - slate - light mb - 3">{notification.message}</p>;
          {notification.action_url && notification.action_text && (
            <Button;"
              variant="outline";"
              size="sm";"
              className="mt - 1 text - zion - cyan border - zion - cyan hover:bg - zion - cyan hover:text - black";
              on_click={handle_action}
            >;
              {notification.action_text}"
              <ChevronRight className="ml - 1 h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <ChevronRight className="ml - 1 h - 4 w - 4" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <ChevronRight className="ml - 1 h - 4 w-4" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    markAsRead;
    markAllAsRead;
    dismiss_notification;
    loading;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    filter;

},

export default function NotificationsPage() {}
  const {}
=======
    filter;

}
},

export default function NotificationsPage() {

const {;
    filteredNotifications;
    unreadCount;
    markAsRead;
    markAllAsRead;
    dismissNotification;
    loading;
    filter;
  const {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    filteredNotifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    loading,
    filter,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    setFilter

  } = useNotifications() as NotificationContextType,
<<<<<<< HEAD
  
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  return (

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>;
      <SEO
        title="Notifications | Zion AI Marketplace" 
        description="View and manage your notifications on the Zion AI Marketplace." 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  ),;
},;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Check className="mr-2 h-4 w-4" />;
              Mark all as read;
            </Button>;
          )}
<<<<<<< HEAD
"
        <div className="mb-8">;
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>;"
            <TabsList className="grid w-full max-w-md grid-cols-5">;"
              <TabsTrigger value="all">All</TabsTrigger>;"
              <TabsTrigger value="unread">Unread</TabsTrigger>;"
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>;"
              <TabsTrigger value="messages">Messages</TabsTrigger>;"
              <TabsTrigger value="system">System</TabsTrigger>;
            </TabsList>;"
            <TabsContent value={filter} className="mt-6">;
              {loading ? (;"
                <div className="space-y-4">;"
                  <Skeleton className="h-24 w-full rounded-lg" />;"
                  <Skeleton className="h-24 w-full rounded-lg" />;"
                  <Skeleton className="h-24 w-full rounded-lg" />;
                </div>;
"
                <div className="text-center py-12 bg-muted rounded-lg">;"
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />;"
                  <h3 className="text-xl font-medium">No notifications found</h3>;"
                  <p className="text-muted-foreground mt-1">;

=======

        </div>;

</div>;
        ;
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
              ) : filteredNotifications && filteredNotifications.length === 0 ? (;
) :filteredNotifications.length === 0 ? (;
                <div className="text-center py-12 bg-muted rounded-lg">;
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />;
                  <h3 className="text-xl font-medium">No notifications found</h3>;
                  <p className="text-muted-foreground mt-1">;

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    set_filter;
  } = use_notifications () as NotificationContextType;
;
  return (
    <>;
<<<<<<< HEAD
      <SEO;"
        title="Notifications | Zion AI Marketplace";"
        description="View and manage your notifications on the Zion AI Marketplace.";
      />;
      <AppHeader />;"
      <main className="container mx - auto px - 4 py - 8 min - h-screen">;"
        <div className="flex justify - between items - center mb - 6">;
          <div>;"
            <h1 className="text - 3xl font - bold flex items - center">;"
              <Bell className="mr - 3 h - 7 w - 7" /> Notifications;
              {unread_count > 0 && ("
                <Badge className="ml - 3 bg - zion - cyan">{unread_count} unread</Badge>)}
            </h1>;"
            <p className="text - muted - foreground">Stay updated with the latest activities and reminders</p>;
          </div>;
          {unread_count > 0 && (
            <Button;"
              variant="outline";
              on_click={() => markAllAsRead ()}
            >;"
              <Check className="mr - 2 h - 4 w - 4" />;
              Mark all as read;
            </Button>)}
        </div>;"
        <div className="mb - 8">;
          <Tabs default_value={filter} onValueChange={(value) => set_filter (value as any)}>;"
            <TabsList className="grid w - full max - w-md grid - cols - 5">;"
              <TabsTrigger value="all">All</TabsTrigger>;"
              <TabsTrigger value="unread">Unread</TabsTrigger>;"
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>;"
              <TabsTrigger value="messages">Messages</TabsTrigger>;"
              <TabsTrigger value="system">System</TabsTrigger>;
            </TabsList>;"
            <TabsContent value={filter} className="mt - 6">;
              {loading ? ("
                <div className="space - y-4">;"
                  <Skeleton className="h - 24 w - full rounded - lg" />;"
                  <Skeleton className="h - 24 w - full rounded - lg" />;"
                  <Skeleton className="h - 24 w - full rounded - lg" />;
                </div>) : filtered_notifications.length === 0 ? ("
                <div className="text - center py - 12 bg - muted rounded - lg">;"
                  <Bell className="mx - auto h - 12 w - 12 text - muted - foreground mb - 3 opacity - 30" />;"
                  <h3 className="text - xl font - medium">No notifications found</h3>;"
                  <p className="text - muted - foreground mt - 1">;'"
=======
      <SEO;
        title="Notifications | Zion AI Marketplace";
        description="View and manage your notifications on the Zion AI Marketplace.";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8 min - h-screen">;
        <div className="flex justify - between items - center mb - 6">;
          <div>;
            <h1 className="text - 3xl font - bold flex items - center">;
              <Bell className="mr - 3 h - 7 w - 7" /> Notifications;
              {unread_count > 0 && (
                <Badge className="ml - 3 bg - zion - cyan">{unread_count} unread</Badge>)}
            </h1>;
            <p className="text - muted - foreground">Stay updated with the latest activities and reminders</p>;
          </div>;
          {unread_count > 0 && (
            <Button;
              variant="outline";
              on_click={() => markAllAsRead ()}
            >;
              <Check className="mr - 2 h - 4 w - 4" />;
              Mark all as read;
            </Button>)}
        </div>;
        <div className="mb - 8">;
          <Tabs default_value={filter} onValueChange={(value) => set_filter (value as any)}>;
            <TabsList className="grid w - full max - w-md grid - cols - 5">;
              <TabsTrigger value="all">All</TabsTrigger>;
              <TabsTrigger value="unread">Unread</TabsTrigger>;
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>;
              <TabsTrigger value="messages">Messages</TabsTrigger>;
              <TabsTrigger value="system">System</TabsTrigger>;
            </TabsList>;
            <TabsContent value={filter} className="mt - 6">;
              {loading ? (
                <div className="space - y-4">;
                  <Skeleton className="h - 24 w - full rounded - lg" />;
                  <Skeleton className="h - 24 w - full rounded - lg" />;
                  <Skeleton className="h - 24 w - full rounded - lg" />;
                </div>) : filtered_notifications.length === 0 ? (
                <div className="text - center py - 12 bg - muted rounded - lg">;
                  <Bell className="mx - auto h - 12 w - 12 text - muted - foreground mb - 3 opacity - 30" />;
                  <h3 className="text - xl font - medium">No notifications found</h3>;
                  <p className="text - muted - foreground mt - 1">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

'"`
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {filter === 'all' ? "You don't have any notifications yet" :`You don't have any ${filter} notifications`}
                  </p>;
                </div>;
              ) :(;
                <div>;
                  {filteredNotifications.map(notification => (;
                    <NotificationCard;
<<<<<<< HEAD
    setFilter;
=======
    setFilter
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  } = useNotifications() as NotificationContextType;

  } = useNotifications() as NotificationContextType,
  return (
    <>
<<<<<<< HEAD
      <SEO"
        title="Notifications | Zion AI Marketplace""
        description="View and manage your notifications on the Zion AI Marketplace."
      />
      <AppHeader />"
      <main className="container mx-auto px-4 py-8 min-h-screen">"
        <div className="flex justify-between items-center mb-6">
          <div>"
            <h1 className="text-3xl font-bold flex items-center">"
              <Bell className="mr-3 h-7 w-7" /> Notifications;
              {unreadCount > 0 && ("
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread</Badge>
              )}
            </h1>"
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>
          </div>
          {unreadCount > 0 && (
            <Button"
              variant="outline"
              onClick={() => markAllAsRead()}
            >"
              <Check className="mr-2 h-4 w-4" />
              Mark all as read;
            </Button>
          )}
        </div>"
        <div className="mb-8">
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>"
            <TabsList className="grid w-full max-w-md grid-cols-5">"
              <TabsTrigger value="all">All</TabsTrigger>"
              <TabsTrigger value="unread">Unread</TabsTrigger>"
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>"
              <TabsTrigger value="messages">Messages</TabsTrigger>"
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>"
            <TabsContent value={filter} className="mt-6">
              {loading ? ("
                <div className="space-y-4">"
                  <Skeleton className="h-24 w-full rounded-lg" />"
                  <Skeleton className="h-24 w-full rounded-lg" />"
                  <Skeleton className="h-24 w-full rounded-lg" />
                </div>
              ) : filteredNotifications.length === 0 ? ("
                <div className="text-center py-12 bg-muted rounded-lg">"
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />"
                  <h3 className="text-xl font-medium">No notifications found</h3>"
                  <p className="text-muted-foreground mt-1">'"`
=======
      <SEO
        title="Notifications | Zion AI Marketplace"
        description="View and manage your notifications on the Zion AI Marketplace."
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Bell className="mr-3 h-7 w-7" /> Notifications
              {unreadCount > 0 && (
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread</Badge>
              )}
            </h1>
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>
          </div>
          {unreadCount > 0 && (
            <Button
              variant="outline"
              onClick={() => markAllAsRead()}
            >
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          )}
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {filter === 'all' ? "You don't have any notifications yet" : `You don't have any ${filter} notifications`}
                  </p>
                </div>
              ) : (
                <div>
                  {filteredNotifications.map(notification => (
<<<<<<< HEAD
                    <NotificationCard;
=======
                    <NotificationCard
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </TabsContent>;
<<<<<<< HEAD
=======
    filter;            </TabsContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    filter;            </TabsContent>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            </TabsContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    filter;            </TabsContent>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </Tabs>;
        </div>;
      </main>;
      <Footer />;

<<<<<<< HEAD
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
  const handle_action = () =>: any {
  // TODO: Implement
    // Check condition;
if ( {) {
  $2;
      onMarkAsRead (notification.id);
    // Check condition;
      navigate (notification.action_url);

  return (
    <div className={cn ("
      "border rounded - lg shadow - sm p - 4 mb - 3 group transition - colors";")"
      notification.read ? "border - zion - blue - light bg - zion - blue - dark / 10" : "border - zion - cyan bg - zion - blue - dark / 30")}>;"
      <div className="flex items - start gap - 4">;"
        <div className="mt - 1">;"
        <div className="flex - 1">;"
          <div className="flex justify - between">;"
            <div className="flex flex - col">;"
              <h3 className="font - medium text - white">{notification.title}</h3>;""
              <div className="flex items - center gap - 2 mb - 2">;"
                <span className="text - xs text - zion - slate - light">;"
                  <Badge variant="outline" className="bg - zion - cyan bg - opacity - 20 text - zion - cyan text - xs">New)}"
            <div className="flex items - center gap - 2">;"
                  variant="ghost";""
                  size="sm";""
                  className="h - 8 w - 8 p - 0";"
                  on_click={() => onMarkAsRead (notification.id)}
                  <Check className="h - 4 w - 4 text - green - 400" />;"
                  <span className="sr - only">Mark as read</span>;"
                )}
                on_click={() => on_dismiss (notification.id)}
                <Trash2 className="h - 4 w - 4 text - red - 400" />;"
                <span className="sr - only">Dismiss</span>;"
          <p className="text - zion - slate - light mb - 3">{notification.message}</p>;"
              variant="outline";""
              className="mt - 1 text - zion - cyan border - zion - cyan hover:bg - zion - cyan hover:text - black";"
              on_click={handle_action}
            >;
              <ChevronRight className="ml - 1 h - 4 w - 4" />;"

;
    </div>);
    <>;
      <SEO;"
        title="Notifications | Zion AI Marketplace"""
        description="View and manage your notifications on the Zion AI Marketplace.""
      />;

      <AppHeader />;
      <main className="container mx-auto px-4 py-8 min-h-screen">;"
</main>"
        <div className="flex justify-between items-center mb-6">;"
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;"
</h1>"
              <Bell className="mr-3 h-7 w-7" /> Notifications;"
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread;"
            </h1>;"
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>;"
              variant="outline""
          {unreadCount > 0 && (;

              variant="outline";")
              onClick={() => markAllAsRead()}
              <Check className="mr-2 h-4 w-4" />;"

        <div className="mb-8">;"
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>;
            <TabsList className="grid w-full max-w-md grid-cols-5">;"
              <TabsTrigger value="all">All;""
              <TabsTrigger value="unread">Unread;""
              <TabsTrigger value="onboarding">Onboarding;""
              <TabsTrigger value="messages">Messages;""
              <TabsTrigger value="system">System;"
            ;"
            <TabsContent value={filter} className="mt-6">;"
                <div className="space-y-4">;"
                  <Skeleton className="h-24 w-full rounded-lg" />;"

                <div className="text-center py-12 bg-muted rounded-lg">;"
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />;"
                  <h3 className="text-xl font-medium">No notifications found</h3>;""
                  <p className="text-muted-foreground mt-1">;"
</p>
                  </p>;
                    <NotificationCard;
                      key={notification && notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      onDismiss={dismissNotification}

        title="Notifications | Zion AI Marketplace";""
        description="View and manage your notifications on the Zion AI Marketplace.";"

      <main className="container mx - auto px - 4 py - 8 min - h-screen">;"
        <div className="flex justify - between items - center mb - 6">;"
            <h1 className="text - 3xl font - bold flex items - center">;"
              <Bell className="mr - 3 h - 7 w - 7" /> Notifications;"
                <Badge className="ml - 3 bg - zion - cyan">{unread_count} unread)}"
            <p className="text - muted - foreground">Stay updated with the latest activities and reminders</p>;"
              variant="outline";"
              on_click={() => markAllAsRead ()}
              <Check className="mr - 2 h - 4 w - 4" />;"

        <div className="mb - 8">;"
          <Tabs default_value={filter} onValueChange={(value) => set_filter (value as any)}>;
            <TabsList className="grid w - full max - w-md grid - cols - 5">;"
            <TabsContent value={filter} className="mt - 6">;"
                <div className="space - y-4">;"
                  <Skeleton className="h - 24 w - full rounded - lg" />;"

                </div>) : filtered_notifications.length === 0 ? ("
                <div className="text - center py - 12 bg - muted rounded - lg">;"
                  <Bell className="mx - auto h - 12 w - 12 text - muted - foreground mb - 3 opacity - 30" />;"
                  <h3 className="text - xl font - medium">No notifications found</h3>;""
                  <p className="text - muted - foreground mt - 1">;"
                  </p>;)
                </div>) : (
                      key={notification.id}
                      on_dismiss={dismiss_notification})
                    />))}

                </div>)}
    setFilter;
  } = useNotifications() as NotificationContextType;

  } = useNotifications() as NotificationContextType,
    <>

      />

      <AppHeader />
      <main className="container mx-auto px-4 py-8 min-h-screen">"
        <div className="flex justify-between items-center mb-6">"
          <div>
            <h1 className="text-3xl font-bold flex items-center">"
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread"
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>"
              variant="outline"")
              <Check className="mr-2 h-4 w-4" />"

        <div className="mb-8">"
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>
            <TabsList className="grid w-full max-w-md grid-cols-5">"
              <TabsTrigger value="all">All""
              <TabsTrigger value="unread">Unread""
              <TabsTrigger value="onboarding">Onboarding""
              <TabsTrigger value="messages">Messages""
              <TabsTrigger value="system">System"
            <TabsContent value={filter} className="mt-6">"
                <div className="space-y-4">"
                  <Skeleton className="h-24 w-full rounded-lg" />"

                <div className="text-center py-12 bg-muted rounded-lg">"
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />"
                  <h3 className="text-xl font-medium">No notifications found</h3>""
                  <p className="text-muted-foreground mt-1">"

      </main>
      <Footer />

    </>
  )
      </main>;
      <Footer />;


    </>);

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </>;
  ),; 

<<<<<<< HEAD
};
<<<<<<< HEAD
const getNotificationTypeBadge = (type: NotificationType) => {}
  switch (type) {'
  case 'message': 
}
};
const NotificationCard: React.FC< {}
  notification: {}
=======
const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
  case 'message': 
}
};
const NotificationCard: React.FC< {
  notification: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
title: string;
message: string;
type: NotificationType;
read: boolean;
created at: string;
action url?: string;
<<<<<<< HEAD
action text?: string;
};
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> 
}> = ({}
  notification, onMarkAsRead, onDismiss;
}) => {}
  const navigate = useNavigate ();
if (!notification.read) {}
  ) 
}</div> </div> onClick= {}
  () => onMarkAsRead (notification.id) "
}> <Check className="h-4 w-4 text-green-400" /> <span className="sr-only" >Mark as read</span> </Button>) "
}<Button > <Trash2 className="h-4 w-4 text-red-400" /> <span className="sr-only" >Dismiss</span> </Button> </div> </div> {"
  notification.action url && notification.action text && (<Button variant="outline" size="sm" className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black" onClick= {}
  handleAction;
}> </Button>) 
}</div> </div> </div>) 
};"
return (<> <SEO title="Notifications | Zion AI Marketplace" description="View and manage your notifications on the Zion AI Marketplace." /> <AppHeader /> <main className="container mx-auto px-4 py-8 min-h-screen" > <div className="flex justify-between items-center mb-6" > <div>) "
}</h1> <p className="text-muted-foreground" >Stay updated with the latest activities and reminders</p> </div> onClick= {}
  () => markAllAsRead () "
}> <Check className="mr-2 h-4 w-4" /> Mark all as read </Button>) "
}</div> </div>) : filteredNotifications.length === 0 ? (<div className="text-center py-12 bg-muted rounded-lg" > <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" /> <h3 className="text-xl font-medium" >No notifications found</h3> <p className="text-muted-foreground mt-1" > {'"`
  filter === 'all' ? "You don't have any notifications yet" : `You don't have any $ {}
  filter;`
}notifications` 
}</p> </div>) : (<div> {}
  filteredNotifications.map (notification => (<NotificationCard key= {}
  notification.id;
}notification= {}
  notification;
}onMarkAsRead= {}
  markAsRead;
}onDismiss= {}
  dismissNotification;
=======
action text?: string 
};
=======
const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {"
  case 'message':
const NotificationCard: React.FC< {,
read: boolean;
created at: string;
action url?: string;
action text?: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
  dismissNotification 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  dismissNotification;)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}/>) ) 

}</div>) 
}  </div> </main> <Footer /> </>) 

  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
