:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD:src/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useRouter } from 'next/router',
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
title: string;  showBack?: boolean;  title: string
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
:src_backup/mobile/components/common/MobileHeader.tsx
onSettingsClick?: () => void;

export function MobileHeader({
  title;
  showBack;
:src_backup/mobile/components/common/MobileHeader.tsx
  title: string;  showBack?: boolean;  title: string
origin/cursor/automate-test-improve-and-merge-code-2533
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface MobileHeaderProps {
  title: string,
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;

:src_backup/mobile/components/common/MobileHeader.tsx
  onSettingsClick?: () => void
<<<<<<< HEAD
}

export function MobileHeader({
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
:src_backup/mobile/components/common/MobileHeader.tsx
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
)}
          <h1 className="text-lg font-medium leading-none truncate">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {showNotifications && (
            <Button 
              variant="ghost"
              onClick = {(,) => router && router.back(),}
            >;"
              <ChevronLeft className="h-5 w-5" />;"
              <span className="sr-only">Back</span>;
            </Button>;
:src_backup/mobile/components/common/MobileHeader.tsx
          )}"
          <h1 className="text-lg font-medium leading-none truncate">
            {title}

          </h1>;
        </div>;"
        <div className="flex items-center space-x-2">;
          {showNotifications && (;
            <Button"
              variant="ghost" 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              size="icon"
              onClick = {onNotificationsClick,}>;
              <Bell className="h-5 w-5" />;
              <span className="sr-only">Notifications</span>;
            </Button>;
          )}
          {showSettings && (
            <Button 
:src_backup/mobile/components/common/MobileHeader.tsx
<<<<<<< HEAD
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
:src_backup/mobile/components/common/MobileHeader.tsx

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
:src_backup/mobile/components/common/MobileHeader.tsx
export function MobileHeader({;
  title,;
  showBack = false,;
  showNotifications = false,;
  showSettings = false,;
  className,;
  onNotificationsClick,;
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
    >;
      <div className='flex items-center justify-between h-14 px-4'>;
        <div className='flex items-center'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
:src_backup/mobile/components/common/MobileHeader.tsx
size="icon"
              onClick={onSettingsClick}
            >"
              <Settings className="h-5 w-5" />"
              <span className="sr-only">Settings</span>
            </Button>
:src_backup/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
:src_backup/mobile/components/common/MobileHeader.tsx
              <span className="sr-only">Settings</span>;
            </Button>;
          )}

        </div>;
      </div>;
    </header>;
  );
}
:src_backup/mobile/components/common/MobileHeader.tsx
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
:src/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/common/MobileHeader.tsx
