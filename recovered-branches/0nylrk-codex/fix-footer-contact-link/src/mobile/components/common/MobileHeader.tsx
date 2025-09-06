
<<<<<<< HEAD
import React from "react",
import { useNavigate } from "react-router-dom",
import { ChevronLeft, Bell, Settings } from "lucide-react",
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface MobileHeaderProps {

  title: string

=======
import React from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft, Bell, Settings} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
interface MobileHeaderProps {;
  title: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;
}
<<<<<<< HEAD
export function MobileHeader({
=======

export function MobileHeader(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title;

  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
  onSettingsClick}: MobileHeaderProps) {;
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              onClick={() => navigate(-1)}
            >;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
          )}
          <h1 className="text-lg font-medium leading-none truncate">;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              size="icon"
              onClick={onNotificationsClick}>;
              <Bell className="h-5 w-5" />;
              <span className="sr-only">Notifications</span>;
            </Button>;
          )}
<<<<<<< HEAD
          {showSettings && (
            <Button
              variant="ghost"
=======
          {showSettings && (;
            <Button
              variant="ghost" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              size="icon"
              onClick={onSettingsClick}>;
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
            </Button>;
          )}
<<<<<<< HEAD
        </div>
      </div>
    </header>
  )
}
=======
        </div>;
      </div>;
    </header>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
