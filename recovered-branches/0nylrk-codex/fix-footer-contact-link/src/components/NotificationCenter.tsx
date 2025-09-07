
// Use the shared icon wrapper;
// Use the shared icon wrapper;

pr-12325
import React, { useState, useEffect } from 'react';
import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';

export const NotificationCenter: React.FC = () => {;  const { ;
export const NotificationCenter: React.FC = () => {;
  const { ;
pr-12325
    filteredNotifications,;
    unreadCount, ;
    markAsRead, ;
    markAllAsRead;
    dismissNotification, ;

pr-12325
    loading;
    filter;
    setFilter;
    fetchNotifications;
  } = useNotifications();    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications();



import React, { useState, useEffect } from 'react',
// Use the shared icon wrapper;
import { Bell } from '@/components/icons',
import { Button } from '@/components/ui/button',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { useNotifications } from '@/context/notifications/NotificationContext',
import { toast } from 'sonner',
import {
  // TODO: Implement
}
  NotificationFilter,
  NotificationHeader, 
  NotificationList, 
  NotificationFooter;
} from '@/components/notifications',
import { FilterType } from '@/components/notifications/NotificationFilter',
export const NotificationCenter: React.FC = () => {
  const {
  // TODO: Implement
    filteredNotifications,
    unreadCount, 

    markAsRead, 
    markAllAsRead,

    dismissNotification, 
    loading,
    filter,
    setFilter,
pr-12325
  } = useNotifications(),
  
  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),
  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;
import { Bell } from '@/components/icons',;
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import { toast } from 'sonner',;
import {;
  NotificationFilter,;
  NotificationHeader,;
  NotificationList,;
  NotificationFooter;
} from '@/components/notifications',;
import { FilterType } from '@/components/notifications/NotificationFilter',;
export const NotificationCenter: React.FC = () => {;
  const {;
    filteredNotifications,;
    unreadCount,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  // Refresh notifications when popover opens;
  useEffect(() => {;
    if (open) {;
      const loadNotifications = async () => {;
        try {;
          setError(null);
        } catch (err) {;
          console && console.error("Failed to fetch notifications:", err);
          setError("Couldn't load notifications");
          toast && toast.error("Failed to load notifications");
        }

      loadNotifications();
    }
  }, [open, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    try {  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
      toast.success("All notifications marked as read")
    } catch (err) {
      console.error("Failed to mark notifications as read:", err),
      toast.error("Failed to update notifications")
    }
  }
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  }

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead();
      toast && toast.success("All notifications marked as read");
    } catch (err) {;
      console && console.error("Failed to mark notifications as read:", err);
      toast && toast.error("Failed to update notifications");
    }        />;
        <NotificationList;
</string>
  const [error, setError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null),;
    <Popover open={open} onOpenChange={setOpen}>

      <PopoverTrigger asChild>

        <Button variant="ghost" size="icon" className="relative">"
"
          <Bell className="h-5 w-5 text-zion-slate-light" />"
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">"
</span>
    <Popover open={open} onOpenChange={setOpen}>;

      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative">;"
          <Bell className="h-5 w-5 text-zion-slate-light" />;"

            </span>;
        ;
      ;"
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;"

        <NotificationHeader;
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />;


        <NotificationFilter;
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 



        <NotificationList;
// Use the shared icon wrapper;"
import {Bell} from '@/components / icons';
import {Button} from '@/components / ui / button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';
import {use_notifications} from '@/context / notifications / NotificationContext';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components / notifications';
import {FilterType} from '@/components / notifications / NotificationFilter';

  const [error, set_error] = useState < string | null>(null);
  // Refresh notifications when popover opens;
  useEffect (() => {
    // Check condition;
if ( {) {
  $2;
      const load_notifications = async () => {
        try {
  // TODO: Implement
          await fetch_notifications ();
          set_error (null);
        } catch (err) {
          console.error ("Failed to fetch notifications:", err);""
          set_error ("Couldn't load notifications");""
          toast.error ("Failed to load notifications");"
      load_notifications ();
  }, [open, fetch_notifications]);
  const handleMarkAllAsRead = async () => {
  // TODO: Implement
      await markAllAsRead ();"
      toast.success ("All notifications marked as read");"
    } catch (err) {"
      console.error ("Failed to mark notifications as read:", err);""
      toast.error ("Failed to update notifications");"
  const handleFilterChange = (new_filter: FilterType) =>: any {
  // TODO: Implement
    set_filter (new_filter as any);
  return (
    <Popover open={open} onOpenChange={set_open}>;

      <PopoverTrigger as_child>;
          <Bell className="h - 5 w - 5 text - zion - slate - light" />;"
            <span className="absolute -top - 0.5 -right - 0.5 flex h - 5 w - 5 items - center justify - center rounded - full bg - zion - cyan text-[10px] text - white font - medium">;"
</span>)
            </span>)}
      <PopoverContent className="w-[350px] p - 0 bg - zion - blue border - zion - blue - light max - h-[500px] flex flex - col">;"

          unread_count={unread_count}



        />



pr-12325
          loading={loading}
          error={error}
          notifications={filtered_notifications}
          onMarkAsRead={markAsRead}

        />;

        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  )
};
          on_dismiss={dismiss_notification}
          on_retry={fetch_notifications}
        />;
        <NotificationFooter on_close={() => set_open (false)} />;
      </PopoverContent>;
    </Popover>);
}
;





        <NotificationFooter onClose={() => setOpen(false)} />;

        <NotificationFooter on_close={() => set_open (false)} />;

    );

            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;"
        
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">"




          notifications={filteredNotifications}
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}

        <NotificationFooter onClose={() => setOpen(false)} />

      
    
pr-12325
