
import React, { useState } from 'react',
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer";
import { useNotifications } from "@/context/notifications/NotificationContext";
import {
  NotificationType;
  NotificationContextType
} from "@/context/notifications",
import { formatDistanceToNow } from "date-fns";
import { 
  Bell, Check, Trash2, ChevronRight, CheckCircle;
  AlertCircle, MessageCircle, Briefcase, UserCheck, Settings
} from "lucide-react",
import { Button } from "@/components/ui/button",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Badge } from "@/components/ui/badge",
import { Skeleton } from "@/components/ui/skeleton",
import { SEO } from "@/components/SEO",
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
const getNotificationIcon = null;
  return (
    <>
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
                    {filter === 'all' ? "You don't have any notifications yet" : `You don't have any ${filter} notifications`}
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
  )
}
;