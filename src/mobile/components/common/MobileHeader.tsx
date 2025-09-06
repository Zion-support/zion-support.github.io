<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import { useRouter  } from 'next/router';
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface MobileHeaderProps {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  title: string;  showBack?: boolean;  title: string
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
<<<<<<< HEAD
interface MobileHeaderProps {
  title: string,
>>>>>>>   showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;


  onSettingsClick?: () => void
export function MobileHeader({
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
  onSettingsClick?: () => void
export function MobileHeader({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  title
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      className
>>>>>>>     )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBack && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick = {(,) => router.back(),}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={() => router.back()}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
<<<<<<< HEAD
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
<<<<<<< HEAD

              variant="ghost" 
=======
              <span className='sr-only'>Settings</span>            </Button>            <Button
              variant="ghost"
>>>>>>>               variant="ghost" 
>>>>>>>               size="icon"
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          )}
          <h1 className="text-lg font-medium leading-none truncate">
            {title}
<<<<<<< HEAD

          </h1>;
        </div>;
        <div className="flex items-center space-x-2">;
          {showNotifications && (;
            <Button
              variant="ghost" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {showNotifications && (
            <Button
              variant="ghost"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              size="icon"
              onClick={onNotificationsClick}
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}
<<<<<<< HEAD

          {showSettings && (;
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>;
              <Settings className='h-5 w-5' />;
              <span className='sr-only'>Settings</span>;
            <Button 
              <span className='sr-only'>Settings</span>            </Button>            <Button 
            <Button 


              variant="ghost" 
>>>>>>>               size="icon"
>>>>>>>               onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          {showSettings && (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
            </Button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
        </div>;
      </div>;
    </header>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
