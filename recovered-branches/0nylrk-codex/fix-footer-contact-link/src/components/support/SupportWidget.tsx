<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx

<<<<<<< HEAD

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {ChatBotPanel} from "./ChatBotPanel";
import {MessageSquare, Info, X} from "lucide-react";
import {cn} from "@/lib/utils";
import {useTheme} from "@/hooks/useTheme";
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
  return (
    <>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
<<<<<<< HEAD
=======
=======


      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  
  return (
    <>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button

=======
import { cn } from "@/lib/utils",
import { useTheme } from "@/hooks/useTheme",
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false),
  const { theme } = useTheme(),
  
  return (
    <>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { ChatBotPanel } from "./ChatBotPanel",;
import { MessageSquare, Info, X } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useTheme } from "@/hooks/useTheme",;
<<<<<<< HEAD
;
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  ;
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx


========
      ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
      {/* Support panel */}
      {isOpen && (;
<<<<<<< HEAD
        <div
          className={cn(
<<<<<<< HEAD

=======
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col"
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx

=======

            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
              : "bg-white border border-gray-200"
          )}
          style={{ height: "600px", maxHeight: "80vh" }}>;
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;
            <div className="flex items-center">;
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;
=======
        <div ;
          className={cn(;
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",;
            theme === "dark" ;
              ? "bg-zion-blue-dark border border-zion-blue-light" ;
              :"bg-white border border-gray-200";
          )}
          style={{ height:"600px", maxHeight:"80vh" }}
        >;
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;
            <div className="flex items-center">;
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" :"text-gray-800")}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Zion Support;
              </h3>;
            </div>;
            <div className="flex items-center gap-2">;
<<<<<<< HEAD
=======
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme();
  return (;
    <>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50"
          aria-label="Open support"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
      {/* Support panel */}
      {isOpen && (
        <div
          className={cn(
<<<<<<< HEAD
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col";
            theme === "dark"
              ? "bg-zion-blue-dark border border-zion-blue-light"

=======
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              : "bg-white border border-gray-200"
          )}
          style={{ height: "600px", maxHeight: "80vh" }}
        >
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>
                Zion Support
              </h3>
            </div>
            <div className="flex items-center gap-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
<<<<<<< HEAD
                onClick={() => window && window.location.href = "/help"}
=======
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => window.location.href = "/help"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;
<<<<<<< HEAD
=======
                onClick={() => window.location.href = "/help"}
                aria-label="Help center"
              >
                <Info className="h-5 w-5" />
              </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
                onClick={() => setIsOpen(false)}

========
=======
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                onClick={() => setIsOpen(false)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
                aria-label="Close support";
              >;
                <X className="h-5 w-5" />;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ChatBotPanel />;
        </div>;
      )}
    </>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { ChatBotPanel } from './ChatBotPanel';
import { MessageSquare, Info, X } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_theme } from '@/hooks / use_theme';
export /**
 * SupportWidget - Function description
 */
function SupportWidget() {
  const [is_open, setIsOpen] = useState (false);
  const { theme } = use_theme ();
;
  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!is_open && (
        <Button;
          on_click={() => setIsOpen (true)}
          size="icon";
          className="fixed bottom - 6 right - 6 h - 14 w - 14 rounded - full shadow - lg bg - zion - purple hover:bg - zion - purple - light text - white z - 50";
          aria - label="Open support";
        >;
          <MessageSquare className="h - 6 w - 6" />;
        </Button>)}
      {/* Support panel */}
      {is_open && (
        <div;
          className={cn (
            "fixed bottom - 6 right - 6 w-[380px] rounded - 2xl shadow - xl z - 50 flex flex - col";
            theme === "dark";
              ? "bg - zion - blue - dark border border - zion - blue - light";
              : "bg - white border border - gray - 200")}
          style={{ height: "600px", max_height: "80vh" }}
        >;
          <div className="flex items - center justify - between p - 4 border - b border - zion - purple / 20">;
            <div className="flex items - center">;
              <MessageSquare className="h - 5 w - 5 text - zion - cyan mr - 2" />;
              <h3 className={cn ("font - semibold", theme === "dark" ? "text - white" : "text - gray - 800")}>;
                Zion Support;
              </h3>;
            </div>;
            <div className="flex items - center gap - 2">;
              <Button;
                variant="ghost";
                size="icon";
                className="h - 8 w - 8 rounded - full";
                on_click={() => window.location.href = "/help"}
                aria - label="Help center";
              >;
                <Info className="h - 5 w - 5" />;
              </Button>;
              <Button;
                variant="ghost";
                size="icon";
                className="h - 8 w - 8 rounded - full";
                on_click={() => setIsOpen (false)}
                aria - label="Close support";
              >;
                <X className="h - 5 w - 5" />;
              </Button>;
            </div>;
          </div>;
          <ChatBotPanel />;
        </div>)}
    </>);
}
=======
  ),;}
 export function SupportWidget () {
  const [isOpen, setIsOpen] = useState (false);
const {
  theme 
}= useTheme ();
/* Fixed button in the bottom right */ 
}{
  !isOpen && (<Button onClick= {
  () => setIsOpen (true) 
}size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50" aria-label="Open support" > <MessageSquare className="h-6 w-6" /> </Button>) 
}{
  /* Support panel */ 
}{
  isOpen && (<div className= {
  cn (Zion Support </h3> </div> <div className="flex items-center gap-2" > <Button > <Info className="h-5 w-5" /> </Button> <Button > <X className="h-5 w-5" /> </Button> </div> </div> <ChatBotPanel /> </div>) 
}</>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                onClick={() => setIsOpen(false)}
                aria-label="Close support"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <ChatBotPanel />
        </div>
      )}
    </>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
