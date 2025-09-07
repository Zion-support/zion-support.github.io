title: string;  showBack?: boolean;  title: string
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
interface MobileHeaderProps {
  title: string,
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;

  onSettingsClick?: () => void
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

  title,
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
  const router = useRouter(),

      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",

    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick = {(,) => router.back(),}
              onClick={() => router.back()}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
interface MobileHeaderProps {;
  title: string;  showBack?: boolean;  title: string,;
  onSettingsClick?: () => void;

export function MobileHeader(): any ({;
  title,;
  title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
  onSettingsClick}: MobileHeaderProps) {;
  const router = useRouter();

    <headerclassName={cn(
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
          {showBack && (;
              onClick = {(,) => router && router.back(),}
            >;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
          )}
          <h1 className="text-lg font-medium leading-none truncate">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {showNotifications && (
              onClick={onNotificationsClick}
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>

          {showSettings && (;
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>;
              <Settings className='h-5 w-5' />;
              <span className='sr-only'>Settings</span>;

              <span className='sr-only'>Settings</span>            </Button>            <Button 

              onClick={onSettingsClick}
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>

;
}

import React from "react",;
import { useRouter } from 'next/router',;
import { ChevronLeft, Bell, Settings } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
  title: string,;
  showBack?: boolean,;
  showNotifications?: boolean,;
  showSettings?: boolean,;
  className?: string,;
  onNotificationsClick?: () => void,;
export function MobileHeader({;
  showBack = false,;
  showNotifications = false,;
  showSettings = false,;
  className,;
  onNotificationsClick,;
  onSettingsClick,;
}: MobileHeaderProps) {;

      <div className='flex items-center justify-between h-14 px-4'>;
        <div className='flex items-center'>;
              variant='ghost'
              size='icon'
              className='mr-2'
              onClick={() => router && router.back()}
              <ChevronLeft className='h-5 w-5' />;
              <span className='sr-only'>Back</span>;
          <h1 className='text-lg font-medium leading-none truncate'>{title}</h1>;
        </div>;
        <div className='flex items-center space-x-2'>;
          {showNotifications && (;
            <Button variant='ghost' size='icon' onClick={onNotificationsClick}>;
              <Bell className='h-5 w-5' />;
              <span className='sr-only'>Notifications</span>;

              onClick = {onSettingsClick,}>;
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
