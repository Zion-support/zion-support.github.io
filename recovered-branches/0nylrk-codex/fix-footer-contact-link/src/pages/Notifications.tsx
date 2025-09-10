import React, { useState } from 'react',
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
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
  
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
        </div>;
      </div>;
    </div>;
  )
};

  );


