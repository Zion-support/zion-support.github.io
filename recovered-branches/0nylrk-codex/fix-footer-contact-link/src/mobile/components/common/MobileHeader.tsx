<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx


<<<<<<< HEAD
import React from "react",
import { useNavigate } from "react-router-dom",
import { ChevronLeft, Bell, Settings } from "lucide-react",
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft, Bell, Settings} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD
interface MobileHeaderProps {;
  title: string,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { useNavigate } from "react-router-dom",
import { ChevronLeft, Bell, Settings } from "lucide-react",
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface MobileHeaderProps {

  title: string

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  showBack?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  className?: string;
  onNotificationsClick?: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
  onSettingsClick?: () => void;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx


export function MobileHeader(): any ({;

========
export function MobileHeader(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
  title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
  onSettingsClick}: MobileHeaderProps) {;
  const navigate = useNavigate();
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface MobileHeaderProps {
  title: string,
  showBack?: boolean,
  showNotifications?: boolean,
  showSettings?: boolean,
  className?: string,
  onNotificationsClick?: () => void,
<<<<<<< HEAD
<<<<<<< HEAD

  onSettingsClick?: () => void
}

<<<<<<< HEAD
export function MobileHeader({

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onSettingsClick?: () => void
}

export function MobileHeader({;
  title;
  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
export function MobileHeader({
  title;

  showBack = false;
  showNotifications = false;
  showSettings = false;
  className;
  onNotificationsClick;
  onSettingsClick}: MobileHeaderProps) {
  const navigate = useNavigate();
  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";

  title,
  showBack = false,
  showNotifications = false,
  showSettings = false,
  className,
  onNotificationsClick,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onSettingsClick}: MobileHeaderProps) {
  const navigate = useNavigate(),

  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
    <headerclassName={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
      className
=======
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={() => navigate(-1)}
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
            <Button
              variant="ghost"
              size="icon"
              onClick={onSettingsClick}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          )}
        </div>
      </div>
    </header>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { useNavigate } from "react-router-dom",;
import { ChevronLeft, Bell, Settings } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface MobileHeaderProps {;
  title: string,;
  showBack?: boolean,;
  showNotifications?: boolean,;
  showSettings?: boolean,;
  className?: string,;
  onNotificationsClick?: () => void,;
  onSettingsClick?: () => void;
<<<<<<< HEAD
========
;
interface MobileHeaderProps {;
  title:string,;
  showBack?:boolean,;
  showNotifications?:boolean,;
  showSettings?:boolean,;
  className?:string,;
  onNotificationsClick?:() => void,;
  onSettingsClick?:() => void;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function MobileHeader({;
  title,;
  showBack = false,;
  showNotifications = false,;
  showSettings = false,;
  className,;
  onNotificationsClick,;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onSettingsClick}: MobileHeaderProps) {;
  const navigate = useNavigate();
  return (;
    <header className={cn(;
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
      className;
<<<<<<< HEAD

========
  onSettingsClick} MobileHeaderProps) {;
  const navigate = useNavigate(),;
;
  return (;
    <header className={cn(;
      "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border",;
      className;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    )}>;
      <div className="flex items-center justify-between h-14 px-4">;
        <div className="flex items-center">;
          {showBack && (;
<<<<<<< HEAD
<<<<<<< HEAD
            <Button
              variant="ghost" 
              size="icon" 
              className="mr-2" 
=======
            <Button ;
              variant="ghost" ;
              size="icon" ;
              className="mr-2" ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <Button;
              variant="ghost";
              size="icon";
              className="mr-2";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={() => navigate(-1)}
            >;
              <ChevronLeft className="h-5 w-5" />;
              <span className="sr-only">Back</span>;
            </Button>;
          )}
          <h1 className="text-lg font-medium leading-none truncate">;
            {title}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </h1>;
        </div>;
        <div className="flex items-center space-x-2">;
          {showNotifications && (;
<<<<<<< HEAD
<<<<<<< HEAD
            <Button
              variant="ghost" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
              size="icon"
              onClick={onNotificationsClick}>;
=======
            <Button ;
              variant="ghost" ;
              size="icon";
              onClick={onNotificationsClick}
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <Button;
              variant="ghost";
              size="icon";
              onClick={onNotificationsClick}
            >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Bell className="h-5 w-5" />;
              <span className="sr-only">Notifications</span>;
            </Button>;
          )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
          {showSettings && (;
<<<<<<< HEAD
            <Button
              variant="ghost" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
              size="icon"
              onClick={onSettingsClick}>;
=======
            <Button ;
              variant="ghost" ;
              size="icon";
              onClick={onSettingsClick}
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          {showSettings && (;
            <Button;
              variant="ghost";
              size="icon";
              onClick={onSettingsClick}
            >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Settings className="h-5 w-5" />;
              <span className="sr-only">Settings</span>;
            </Button>;
          )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
        </div>;
      </div>;
    </header>;
<<<<<<< HEAD
  );

}
import React from './react';
import { use_navigate } from './react-router-dom';
import { ChevronLeft, Bell, Settings } from './lucide-react';
import { cn } from '@/lib / utils';
import { Button } from '@/components / ui / button';
interface MobileHeaderProps {
  title: string,
  show_back?: boolean;
  show_notifications?: boolean;
  show_settings?: boolean;
  class_name?: string;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;
}
export /**
 * MobileHeader - Function description
 */
function MobileHeader() {
  const navigate = use_navigate ();
;
<<<<<<< HEAD

=======
  return (
    <header className={cn (
      "sticky top - 0 z - 40 bg - background / 80 backdrop - blur - sm border - b border - border";
      class_name)}>;
      <div className="flex items - center justify - between h - 14 px - 4">;
        <div className="flex items - center">;
          {show_back && (
            <Button;
              variant="ghost";
              size="icon";
              className="mr - 2";
              on_click={() => navigate (-1)}
            >;
              <ChevronLeft className="h - 5 w - 5" />;
              <span className="sr - only">Back</span>;
            </Button>)}
          <h1 className="text - lg font - medium leading - none truncate">;
            {title}
          </h1>;
        </div>;
        <div className="flex items - center space - x-2">;
          {show_notifications && (
            <Button;
              variant="ghost";
              size="icon";
              on_click={onNotificationsClick}
            >;
              <Bell className="h - 5 w - 5" />;
              <span className="sr - only">Notifications</span>;
            </Button>)}
          {show_settings && (
            <Button;
              variant="ghost";
              size="icon";
              on_click={onSettingsClick}
            >;
              <Settings className="h - 5 w - 5" />;
              <span className="sr - only">Settings</span>;
            </Button>)}
        </div>;
      </div>;
    </header>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 interface MobileHeaderProps {
  title: string;
showBack?: boolean;
showNotifications?: boolean;
showSettings?: boolean;
className?: string;
onNotificationsClick?: () => void;
onSettingsClick?: () => void 
}export function MobileHeader ({
  title;
showBack = false;
showNotifications = false;
showSettings = false;
className;
onNotificationsClick;
onSettingsClick 
}: MobileHeaderProps) {
  const navigate = useNavigate ();
return (<header className= {
  cn ("sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";
className) 
}> <div className="flex items-center justify-between h-14 px-4" > <div className="flex items-center" > {
  showBack && (<Button variant="ghost" size="icon" className="mr-2" () => navigate (-1) 
}> <ChevronLeft className="h-5 w-5" /> <span className="sr-only" >Back</span> </Button>) 
}<Button variant="ghost" size="icon" onClick= {
  onNotificationsClick 
}> <Bell className="h-5 w-5" /> <span className="sr-only" >Notifications</span> </Button>) 
}{
  showSettings && (<Button variant="ghost" size="icon" onClick= {
  onSettingsClick 
}> <Settings className="h-5 w-5" /> <span className="sr-only" >Settings</span> </Button>) 
}</div> </div> </header>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/common/MobileHeader.tsx
=======
        </div>;
      </div>;
    </header>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
