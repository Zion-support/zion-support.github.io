<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
title: string;  showBack?: boolean;  title: string
=======

  title: string;  showBack?: boolean;  title: string
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
<<<<<<< HEAD
interface MobileHeaderProps {
  title: string,
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;


  onSettingsClick?: () => void
export function MobileHeader({
<<<<<<< HEAD

=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onSettingsClick}: MobileHeaderProps) {
  const router = useRouter()
  return (
    <header className={cn(
<<<<<<< HEAD
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBack && (


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={() => router.back()}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <span className='sr-only'>Settings</span>            </Button>            <Button
              variant="ghost"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
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
          <h1 className="text-lg font-medium leading-none truncate">;
            {title}
<<<<<<< HEAD

          </h1>;
        </div>;
        <div className="flex items-center space-x-2">;
          {showNotifications && (;
            <Button
              variant="ghost" 

=======
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {showNotifications && (
            <Button
              variant="ghost"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              size="icon"
              onClick = {onNotificationsClick,}>;
              <Bell className="h-5 w-5" />;
              <span className="sr-only">Notifications</span>;
            </Button>;
          )}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD
          {showSettings && (;
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>;
              <Settings className='h-5 w-5' />;
              <span className='sr-only'>Settings</span>;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Button 
              <span className='sr-only'>Settings</span>            </Button>            <Button 
            <Button 
            <Button 
              <span className='sr-only'>Settings</span>            </Button>            <Button 
            <Button 


          {showSettings && (
              variant="ghost" 
              size="icon"
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
<<<<<<< HEAD

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
  onSettingsClick,;
}: MobileHeaderProps) {;
  const router = useRouter();


    >;
      <div className='flex items-center justify-between h-14 px-4'>;
        <div className='flex items-center'>;
          {showBack && (;
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Button
              variant='ghost'
              size='icon'
              className='mr-2'
<<<<<<< HEAD
              onClick={() => router && router.back()}
            >;
              <ChevronLeft className='h-5 w-5' />;
              <span className='sr-only'>Back</span>;
            </Button>;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
          )}
        </div>
      </div>;
    </header>;
  );  )
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
            </Button>;
          )}
<<<<<<< HEAD
        </div>;
      </div>;
    </header>;
  );
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
