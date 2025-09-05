<<<<<<< HEAD
import React from "react",
import { useRouter } from 'next/router',
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
=======
import React from &quot;react&quot;;
import { useRouter } from 'next/router';
import { ChevronLeft, Bell, Settings } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MobileHeaderProps {
  title: string,
  showBack?: boolean,
  showNotifications?: boolean,
  showSettings?: boolean,
  className?: string,
  onNotificationsClick?: () => void,
  onSettingsClick?: () => void
}

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
      &quot;sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border&quot;,
      className
    )}>
      <div className=&quot;flex items-center justify-between h-14 px-4&quot;>
        <div className=&quot;flex items-center&quot;>
          {showBack && (
            <Button 
              variant=&quot;ghost&quot; 
              size=&quot;icon&quot; 
              className=&quot;mr-2&quot; 
              onClick={() => router.back()}
            >
              <ChevronLeft className=&quot;h-5 w-5&quot; />
              <span className=&quot;sr-only&quot;>Back</span>
            </Button>
          )}
          <h1 className=&quot;text-lg font-medium leading-none truncate&quot;>
            {title}
          </h1>
        </div>
        <div className=&quot;flex items-center space-x-2&quot;>
          {showNotifications && (
            <Button 
              variant=&quot;ghost&quot; 
              size=&quot;icon&quot;
              onClick={onNotificationsClick}
            >
              <Bell className=&quot;h-5 w-5&quot; />
              <span className=&quot;sr-only&quot;>Notifications</span>
            </Button>
          )}
          {showSettings && (
            <Button 
              variant=&quot;ghost&quot; 
              size=&quot;icon&quot;
              onClick={onSettingsClick}
            >
              <Settings className=&quot;h-5 w-5&quot; />
              <span className=&quot;sr-only&quot;>Settings</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
