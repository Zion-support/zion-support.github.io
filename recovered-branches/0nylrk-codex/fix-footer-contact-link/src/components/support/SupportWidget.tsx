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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}


      {/* Support panel */}
      {isOpen && (;
        <div
          className={cn(
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col"
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

=======
=======
  
  return (
    <>
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <>
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button

      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
<<<<<<< HEAD

import { cn } from "@/lib/utils",
import { useTheme } from "@/hooks/useTheme",
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false),
  const { theme } = useTheme(),
  
  return (
    <>
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { ChatBotPanel } from "./ChatBotPanel",;
import { MessageSquare, Info, X } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useTheme } from "@/hooks/useTheme",;
      ;
      {/* Support panel */}
      {isOpen && (;
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col"
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              : "bg-white border border-gray-200"
          )}
          style={{ height: "600px", maxHeight: "80vh" }}>;
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;
            <div className="flex items-center">;
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                Zion Support;
              </h3>;
            </div>;
            <div className="flex items-center gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme();
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
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
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col";
            theme === "dark"
              ? "bg-zion-blue-dark border border-zion-blue-light"

            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={() => window && window.location.href = "/help"}
=======
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => window.location.href = "/help"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                onClick={() => window.location.href = "/help"}
                aria-label="Help center"
              >
                <Info className="h-5 w-5" />
              </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={() => setIsOpen(false)}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => setIsOpen(false)}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                aria-label="Close support";
              >;
                <X className="h-5 w-5" />;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD

=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ChatBotPanel />;
        </div>;
      )}
    </>;
<<<<<<< HEAD
  );
}

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
