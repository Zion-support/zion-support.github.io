<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD:src/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useRouter } from 'next/router',
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
title: string;  showBack?: boolean;  title: string
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/common/MobileHeader.tsx
  title: string;
=======
title: string;  showBack?: boolean;  title: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
onSettingsClick?: () => void;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx

export function MobileHeader({
  title;
  showBack;
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
  title: string;  showBack?: boolean;  title: string
origin/cursor/automate-test-improve-and-merge-code-2533
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface MobileHeaderProps {
=======
interface MobileHeaderProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
  title: string,
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;

<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
  onSettingsClick?: () => void
<<<<<<< HEAD
}
=======
export function MobileHeader({

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
<<<<<<< HEAD:src/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function MobileHeader({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  onSettingsClick?: () => void;
export function MobileHeader({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
  title,
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
  onSettingsClick}: MobileHeaderProps) {}
  const router = useRouter(),

  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/common/MobileHeader.tsx
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
origin/cursor/automate-test-improve-and-merge-code-2533
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4">
=======


  title,
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
  onSettingsClick}: MobileHeaderProps) {}
  const router = useRouter(),

  return (
    <header className={cn("
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",;
      className;
    )}>"
      <div className="flex items-center justify-between h-14 px-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
        <div className="flex items-center">
          {showBack && (
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2" 
              onClick={() => router.back()}

            >
              <ChevronLeft className="h-5 w-5" />
=======
            <Button "
              variant="ghost" "
              size="icon" "
              className="mr-2" 
              onClick={() => router.back()}


            >"
              <ChevronLeft className="h-5 w-5" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
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
=======
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
    <headerclassName={cn("
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
      className;
    )}>;"
      <div className="flex items-center justify-between h-14 px-4">;"
        <div className="flex items-center">;
          {showBack && (;
            <Button"
              variant="ghost" "
              size="icon" "
              className="mr-2" 
=======

      className
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
          {showBack && (;
            <Button

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
              onClick = {(,) => router && router.back(),}
            >;"
              <ChevronLeft className="h-5 w-5" />;"
              <span className="sr-only">Back</span>;
            </Button>;
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
          )}"
          <h1 className="text-lg font-medium leading-none truncate">
            {title}

          </h1>;
        </div>;"
        <div className="flex items-center space-x-2">;
          {showNotifications && (;
            <Button"
              variant="ghost" 
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          )}
          <h1 className="text-lg font-medium leading-none truncate">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {showNotifications && (
            <Button 
              variant="ghost" 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
              size="icon"
              onClick = {onNotificationsClick,}>;
              <Bell className="h-5 w-5" />;
              <span className="sr-only">Notifications</span>;
            </Button>;
          )}
          {showSettings && (
            <Button 
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
=======
              <span className='sr-only'>Settings</span>            </Button>            <Button 
            <Button 

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
              variant="ghost" 
=======
"
              size="icon"
              onClick={onNotificationsClick}
            >"
              <Bell className="h-5 w-5" />"
              <span className="sr-only">Notifications</span>
            </Button>
          )}

          {showSettings && (;
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>;'
              <Settings className='h-5 w-5' />;'
              <span className='sr-only'>Settings</span>;

            <Button '
              <span className='sr-only'>Settings</span>            </Button>            <Button;
            <Button;
"
              variant="ghost" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
              size="icon"
              onClick={onSettingsClick}
            >"
              <Settings className="h-5 w-5" />"
              <span className="sr-only">Settings</span>
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
=======

;
}
}
}

<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
            </Button>
import React from "react",;
import { useRouter } from 'next/router',;
import { ChevronLeft, Bell, Settings } from 'lucide-react';
import { cn } from "@/lib/utils",;
=======
            </Button>"
import React from "react",;'
import { useRouter } from 'next/router',;'
import { ChevronLeft, Bell, Settings } from 'lucide-react';"
import { cn } from "@/lib/utils",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
export function MobileHeader({;
  title,;
  showBack = false,;
  showNotifications = false,;
  showSettings = false,;
  className,;
  onNotificationsClick,;
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
  onSettingsClick}: MobileHeaderProps) {;
  const router = useRouter();
<<<<<<< HEAD
  return (;
    <header className={cn(;
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
      className;
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
=======

=======
  onSettingsClick,;
}:,  MobileHeaderProps) {;
  const router = useRouter();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
    >;
      <div className='flex items-center justify-between h-14 px-4'>;
        <div className='flex items-center'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          {showBack && (;
<<<<<<< HEAD
            <Button;
              variant="ghost";
              size="icon";
              className="mr-2";
              onClick={() => router.back()}
=======
            <Button
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
              variant='ghost'
              size='icon'
              className='mr-2'
<<<<<<< HEAD:src/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
              onClick={() => router && router.back()}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              variant='ghost''
              size='icon''
              className='mr-2''
              onClick={() => router && router.back()}
            >;
              <ChevronLeft className='h-5 w-5' />;
              <span className='sr-only'>Back</span>;
            </Button>;
            <Button
              <span className='sr-only'>Settings</span>            </Button>            <Button '
            <Button
              variant="ghost" "
              size="icon""
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />"
              <span className="sr-only">Settings</span>"
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
              <span className='sr-only'>Settings</span>            </Button>            <Button'
              variant="ghost" "
              size="icon""
              onClick = {onSettingsClick,}>;
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
          )}
;
}}}}}}))))))
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
            >;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
=======
            <Button 
              <span className='sr-only'>Settings</span>            </Button>            <Button 
            <Button 
              variant="ghost" 
=======
export function MobileHeader() { return null; }
              onClick={() => router && router.back()}
            >;'
              <ChevronLeft className='h-5 w-5' />;'
              <span className='sr-only'>Back</span>;
            </Button>;
            <Button '
              <span className='sr-only'>Settings</span>            </Button>            <Button;
            <Button "
              variant="ghost" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
              size="icon"
              onClick={onSettingsClick}
            >"
              <Settings className="h-5 w-5" />"
              <span className="sr-only">Settings</span>
            </Button>
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
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
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
=======
          )}'
          <h1 className='text-lg font-medium leading-none truncate'>{title}</h1>;
        </div>;'
        <div className='flex items-center space-x-2'>;
          {showNotifications && (;'
            <Button variant='ghost' size='icon' onClick={onNotificationsClick}>;'
              <Bell className='h-5 w-5' />;'
              <span className='sr-only'>Notifications</span>;
            </Button>;
          )}

          {showSettings && (;'
            <Button variant='ghost' size='icon' onClick={onSettingsClick}>;'
              <Settings className='h-5 w-5' />;'
              <span className='sr-only'>Settings</span>            </Button>            <Button"
              variant="ghost" 
"
              size="icon"
              onClick = {onSettingsClick,}>;"
              <Settings className="h-5 w-5" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
              <span className="sr-only">Settings</span>;
            </Button>;
          )}
<<<<<<< HEAD
=======
              <span className="sr-only">Settings</span>;
            </Button>;
          )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
        </div>;
      </div>;
    </header>;
  );
}
<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
=======
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/common/MobileHeader.tsx
=======
;


;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/mobile/components/common/MobileHeader.tsx
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
              <span className='sr-only'>Settings</span>
            </Button>
          )}
        </div>
      </div>
    </header>
);
<<<<<<< HEAD:src/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/common/MobileHeader.tsx
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
