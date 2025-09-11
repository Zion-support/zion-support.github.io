:src_backup/mobile/components/common/MobileHeader.tsx


title: string;  showBack?: boolean;  title: string

  title: string;

  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;


:src_backup/mobile/components/common/MobileHeader.tsx
onSettingsClick?: () => void;export function MobileHeader({title;
  showBack;
:src_backup/mobile/components/common/MobileHeader.tsx
onSettingsClick?: () => void;export function MobileHeader({title;
  showBack;
  title: string;  showBack?: boolean;  title: string
origin/cursor/automate-test-improve-and-merge-code-2533
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
interface MobileHeaderProps {
:src_backup/mobile/components/common/MobileHeader.tsx
:src_backup/mobile/components/common/MobileHeader.tsx
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",


:src_backup/mobile/components/common/MobileHeader.tsx
interface MobileHeaderProps {;
  title: string;  showBack?: boolean;  title: string,;
interface MobileHeaderProps {;
  title: string;  showBack?: boolean;  title: string,;
interface MobileHeaderProps {
  title: string;  showBack?: boolean;  title: string,
  showBack?: boolean;
interface MobileHeaderProps  {title: string,showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;onSettingsClick?: () => void;
export function MobileHeader() {const router = useRouter(),return (<header className={cn("sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",title,showBack = false,showNotifications = false,showSettings = false,className,onNotificationsClick,onSettingsClick}: MobileHeaderProps) {const router = useRouter(),return (<header className={cn("sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border","sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
      className;
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
          {showBack && (<Button;
              variant="ghost";
              size="icon";
              className="mr-2";
              onClick={() => router.back()}>;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
interface MobileHeaderProps  {title: string;  showBack?: boolean;  title: string,showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;export function MobileHeader(): any ({title,export function MobileHeader(): any ({title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
  onSettingsClick}: MobileHeaderProps) {const router  = useRouter()return (<headerclassName={cn("sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
      className;
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
          {showBack && (<Button;
              variant="ghost";
              size="icon";
              className="mr-2";
              onClick = {(,) => router && router.back()}
            >;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
          )}
          <h1 className="text-lg font-medium leading-none truncate">;
            {title}</h1>;
        </div>;
        <div className="flex items-center space-x-2">;
          {showNotifications && (<Button;
              variant="ghost";
              size="icon";
              onClick = {onNotificationsClick}>;
              <Bell className="h-5 w-5" />;
              <span className="sr-only">Notifications</span>;
            </Button>;
          )}{showSettings && (<Button variant='ghost' size='icon' onClick={onSettingsClick}>;
              <Settings className='h-5 w-5' />;
              <span className='sr-only'>Settings</span>;<Button;
              <span className='sr-only'>Settings</span>            </Button>            <Button;
            <Button;
              variant="ghost";
              size="icon";
              onClick={onSettingsClick}
            >;
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;}
}
}</Button>;
import React from "react";import { useRouter } from 'next/router',import { ChevronLeft, Bell, Settings  } from 'lucide-react';
import { cn } from "@/lib/utils",import { Button } from "@/components/ui/button",interface MobileHeaderProps  {title: string,showBack?: boolean,showNotifications?: boolean,showSettings?: boolean,className?: string,onNotificationsClick?: () => void,onSettingsClick?: () => void;
}export function MobileHeader() {const router  = useRouter()>;
      <div className='flex items-center justify-between h-14 px-4'>;
        <div className='flex items-center'>;
:src_backup/mobile/components/common/MobileHeader.tsx


:src_backup/mobile/components/common/MobileHeader.tsx
            <Button;
              <span className='sr-only'>Settings</span>            </Button>            <Button;
            <Button;
              variant="ghost";
              size="icon";
              onClick={onSettingsClick}
            >;
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
            </Button>;


:src_backup/mobile/components/common/MobileHeader.tsx
        <div className='flex items-center space-x-2'>;
          {showNotifications && (<Button variant='ghost' size='icon' onClick={onNotificationsClick}>;
              <Bell className='h-5 w-5' />;
              <span className='sr-only'>Notifications</span>;
        <div className="flex items-center space-x-2">;
  );
};