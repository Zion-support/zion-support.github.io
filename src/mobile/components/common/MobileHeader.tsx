<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useRouter } from 'next/router';
import { ChevronLeft, Bell, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MobileHeaderProps {
<<<<<<< HEAD
  title: string;  showBack?: boolean;
=======
<<<<<<< HEAD
  title: string;
=======
import React from "react";
import { useRouter } from 'next/router';
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface MobileHeaderProps {
  title: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  title: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  showBack?: boolean;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
<<<<<<< HEAD
  onSettingsClick?: () => void;

export function MobileHeader({
  title,
=======
<<<<<<< HEAD
<<<<<<< HEAD
  onSettingsClick?: () => void;
=======
  onSettingsClick?: () => void
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export function MobileHeader({
  title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter();

  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBack && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={() => router.back()}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          )}
          <h1 className="text-lg font-medium leading-none truncate">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {showNotifications && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onNotificationsClick}
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}
          {showSettings && (
<<<<<<< HEAD
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>
              <Settings className='h-5 w-5' />
              <span className='sr-only'>Settings</span>
=======
  onSettingsClick?: () => void
}

export function MobileHeader({
  title;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
  onSettingsClick,
}: MobileHeaderProps) {
  const router = useRouter();

  
    >
      <div className='flex items-center justify-between h-14 px-4'>
        <div className='flex items-center'>
          {showBack && (
            <Button
              variant='ghost'
              size='icon'
              className='mr-2'
              onClick={() => router.back()}
            >
              <ChevronLeft className='h-5 w-5' />
              <span className='sr-only'>Back</span>
            </Button>
          )}
          <h1 className='text-lg font-medium leading-none truncate'>{title}</h1>
        </div>
        <div className='flex items-center space-x-2'>
          {showNotifications && (
            <Button variant='ghost' size='icon' onClick={onNotificationsClick}>
              <Bell className='h-5 w-5' />
              <span className='sr-only'>Notifications</span>
            </Button>
          )}
          {showSettings && (
<<<<<<< HEAD
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>
              <Settings className='h-5 w-5' />
              <span className='sr-only'>Settings</span>            </Button>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          )}
        </div>
      </div>
    </header>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
