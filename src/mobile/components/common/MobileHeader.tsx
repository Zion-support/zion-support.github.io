<<<<<<< HEAD
import React from "react;
import { useRouter } from 'next/router;
import { ChevronLeft, Bell, Settings } from lucide-react'
import { cn } from @/lib/utils";
import { Button } from "@/components/ui/button;
=======
<<<<<<< HEAD
import React from "react";
import { useRouter  } from 'next/router';
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface MobileHeaderProps {
import React from 'react'
import { useRouter } from 'next/router'
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
interface MobileHeaderProps {;
  title: string;  showBack?: boolean;  title: string,
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
  onSettingsClick?: () => void
export function MobileHeader({
  title,
export function MobileHeader({
  title
  showBack = false
  showNotifications = false
  showSettings = false
  className
  onNotificationsClick
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter()
  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
import React from "react",
import { useRouter } from 'next/router',
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
interface MobileHeaderProps {
  title: string,
  showBack?: boolean,
  showNotifications?: boolean,
  showSettings?: boolean,
  className?: string,
  onNotificationsClick?: () => void,
  onSettingsClick?: () => void
}

  title: string;  showBack?: boolean;  title: string
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
title: string;  showBack?: boolean;  title: string
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
>>>>>>> merged-prs-20250907-203621
interface MobileHeaderProps {
  title: string,
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
<<<<<<< HEAD
  onSettingsClick?: () => void
}

export function MobileHeader({
=======


  onSettingsClick?: () => void
export function MobileHeader({
<<<<<<< HEAD
  onSettingsClick?: () => void
export function MobileHeader({
  title
export function MobileHeader({
  title
  showBack = false
  showNotifications = false
  showSettings = false
  className
  onNotificationsClick
=======


  title,
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter()
  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  title,
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter(),

  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",
<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBack && (
<<<<<<< HEAD
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick = {(,) => router.back(),}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={() => router.back()}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
<<<<<<< HEAD
              <span className='sr-only'>Settings</span>            </Button>            <Button
              variant="ghost"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface MobileHeaderProps {;
  title: string;  showBack?: boolean;  title: string,;
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;

export function MobileHeader(): any ({;
  title,;
export function MobileHeader(): any ({;
>>>>>>> merged-prs-20250907-203621
  title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
<<<<<<< HEAD
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter();

  return (
    <header className={cn(
      sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4>
        <div className=flex items-center">
          {showBack && (
            <Button 
              variant="ghost 
              size=icon" 
              className="mr-2 
              onClick={() => router.back()}
            >
              <ChevronLeft className=h-5 w-5" />
              <span className="sr-only>Back</span>
            </Button>
          )}
          <h1 className=text-lg font-medium leading-none truncate">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-2>
          {showNotifications && (
            <Button 
              variant=ghost" 
              size="icon
              onClick={onNotificationsClick}
            >
              <Bell className=h-5 w-5" />
              <span className="sr-only>Notifications</span>
            </Button>
          )}
          {showSettings && (
            <Button 
              variant=ghost" 
              size="icon
              onClick={onSettingsClick}
            >
              <Settings className=h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
=======
  onSettingsClick}: MobileHeaderProps) {;
  const router = useRouter();

  return (
    <headerclassName={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
      className
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
          {showBack && (;
            <Button
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick = {(,) => router && router.back(),}
            >;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
          )}
          <h1 className="text-lg font-medium leading-none truncate">
            {title}
<<<<<<< HEAD
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {showNotifications && (
            <Button
              variant="ghost"
=======

          </h1>;
        </div>;
        <div className="flex items-center space-x-2">;
          {showNotifications && (;
            <Button
              variant="ghost" 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              size="icon"
              onClick={onNotificationsClick}
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}
<<<<<<< HEAD
=======

          {showSettings && (;
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>;
              <Settings className='h-5 w-5' />;
              <span className='sr-only'>Settings</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            <Button 
              <span className='sr-only'>Settings</span>            </Button>            <Button 
            <Button 


              variant="ghost" 
              size="icon"
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
import React from "react",;
import { useRouter } from 'next/router',;
import { ChevronLeft, Bell, Settings } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
interface MobileHeaderProps {;
  title: string,;
  showBack?: boolean,;
  showNotifications?: boolean,;
  showSettings?: boolean,;
  className?: string,;
  onNotificationsClick?: () => void,;
  onSettingsClick?: () => void;
}
;
export function MobileHeader({;
  title,;
  showBack = false,;
  showNotifications = false,;
  showSettings = false,;
  className,;
  onNotificationsClick,;
  onSettingsClick,;
}: MobileHeaderProps) {;
  const router = useRouter();


    >;
      <div className='flex items-center justify-between h-14 px-4'>;
        <div className='flex items-center'>;
          {showBack && (;
<<<<<<< HEAD
          {showSettings && (
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>
              <Settings className='h-5 w-5' />
              <span className='sr-only'>Settings</span>
  showBack = false
  showNotifications = false
  showSettings = false
  className
  onNotificationsClick
  onSettingsClick
}: MobileHeaderProps) {
  const router = useRouter()
    >
      <div className='flex items-center justify-between h-14 px-4'>
        <div className='flex items-center'>
          {showBack && (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button
              variant='ghost'
              size='icon'
              className='mr-2'
<<<<<<< HEAD
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
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>
              <Settings className='h-5 w-5' />
              <span className='sr-only'>Settings</span>            </Button>            <Button
              variant="ghost"
=======
              onClick={() => router && router.back()}
            >;
              <ChevronLeft className='h-5 w-5' />;
              <span className='sr-only'>Back</span>;
            </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button 
              <span className='sr-only'>Settings</span>            </Button>            <Button 
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
<<<<<<< HEAD
          )}
        </div>
      </div>;
    </header>;
  );  )
}
;
}
}
}
            </Button>
import React from "react",;
import { useRouter } from 'next/router',;
import { ChevronLeft, Bell, Settings } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
interface MobileHeaderProps {;
  title: string,;
  showBack?: boolean,;
  showNotifications?: boolean,;
  showSettings?: boolean,;
  className?: string,;
  onNotificationsClick?: () => void,;
  onSettingsClick?: () => void;
}
;
export function MobileHeader({;
  title,;
  showBack = false,;
  showNotifications = false,;
  showSettings = false,;
  className,;
  onNotificationsClick,;
  onSettingsClick}: MobileHeaderProps) {;
  const router = useRouter();
  return (;
    <header className={cn(;
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
      className;
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
          {showBack && (;
            <Button;
              variant="ghost";
              size="icon";
              className="mr-2";
              onClick={() => router.back()}
            >;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
          )}
          <h1 className="text-lg font-medium leading-none truncate">;
            {title}
          </h1>;
        </div>;
        <div className="flex items-center space-x-2">;
          {showNotifications && (;
            <Button;
              variant="ghost";
              size="icon";
              onClick={onNotificationsClick}
            >;
              <Bell className="h-5 w-5" />;
              <span className="sr-only">Notifications</span>;
            </Button>;
          )}
          {showSettings && (;
            <Button;
              variant="ghost";
              size="icon";
              onClick={onSettingsClick}
            >;
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
            </Button>;
          )}
        </div>;
      </div>;
    </header>;
  );
}
;
;
=======
            </Button>
          )}
          <h1 className='text-lg font-medium leading-none truncate'>{title}</h1>;
        </div>;
        <div className='flex items-center space-x-2'>;
          {showNotifications && (;
            <Button variant='ghost' size='icon' onClick={onNotificationsClick}>;
              <Bell className='h-5 w-5' />;
              <span className='sr-only'>Notifications</span>;
            </Button>;
          )}

          {showSettings && (;
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>;
              <Settings className='h-5 w-5' />;
              <span className='sr-only'>Settings</span>            </Button>            <Button
              variant="ghost" 

              size="icon"
              onClick = {onSettingsClick,}>;
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
          )}


;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
