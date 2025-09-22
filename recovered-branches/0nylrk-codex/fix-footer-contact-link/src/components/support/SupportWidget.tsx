import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {ChatBotPanel} from "./ChatBotPanel";
import {MessageSquare, Info, X} from "lucide-react";
import {cn} from "@/lib/utils";
import React, { useState } from "react";"
import {Button} from "@/components/ui/button";"
import {ChatBotPanel} from "./ChatBotPanel";"
import {MessageSquare, Info, X} from "lucide-react";"
import {cn} from "@/lib/utils";"
import {useTheme} from "@/hooks/useTheme";
export function SupportWidget() { return null; }
  const { theme } = useTheme();

  return (
    <>
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",



  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
<Button

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
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme();
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button


      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
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

import React, { useState } from "react",

  return (
    <>
  return (
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",

import { cn } from "@/lib/utils";
        <Button;
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button;
"
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import { ChatBotPanel } from "./ChatBotPanel","
import { MessageSquare, Info, X } from "lucide-react",";
import { cn } from "@/lib/utils";"
import { useTheme } from "@/hooks/useTheme";
export function SupportWidget() {};
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;
      {/* Fixed button in the bottom right */}
      {!isOpen && (
<Button

      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button

            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

              : "bg-white border border-gray-200"
          )}"
          style={{ height: "600px", maxHeight: "80vh" }}>;"
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;"
            <div className="flex items-center">;"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;"
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;

                Zion Support;
              </h3>;
            </div>;"
            <div className="flex items-center gap-2">;
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
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => window && window.location.href = "/help"}
<Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => window.location.href = "/help"}
                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;
onClick={() => window.location.href = "/help"}
                aria-label="Help center"
              >
                <Info className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setIsOpen(false)}

              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => setIsOpen(false)}
                aria-label="Close support";
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"                aria-label="Close support";
              >;
                <X className="h-5 w-5" />;
</Button>"
          <MessageSquare className="h-6 w-6" />;"
</MessageSquare>
        </Button>;"
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;"
</div>"
            <div className="flex items-center">;"
</div>"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;"
</MessageSquare>)"
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;"
</h3>
              </h3>;
            </div>;"
            <div className="flex items-center gap-2">;"
</div>
              <Button;"
                variant="ghost"""
                size="icon"""
                className="h-8 w-8 rounded-full"""
                onClick={() => window && window.location.href = "/help"}"
</Button>"
                <Info className="h-5 w-5" />;"
</Info>
              </Button>;
              <Button;"
                variant="ghost"""
                size="icon"""
                className="h-8 w-8 rounded-full""
                onClick={() => setIsOpen(false)}
</Button>

              <Button;"
                variant="ghost";""
                size="icon";""
                className="h-8 w-8 rounded-full";"
                onClick={() => setIsOpen(false)}
</Button>"
                <X className="h-5 w-5" />;"
</X>

              </Button>;
            </div>;
          </div>;


;
          <ChatBotPanel />;
        </div>;
      )}
    </>;
);
}
const [is_open, setIsOpen] = useState (false);
  const { theme } = use_theme ();
      {!is_open && (
<Button;
          on_click={() => setIsOpen (true)}"
          size="icon";"
          className="fixed bottom - 6 right - 6 h - 14 w - 14 rounded - full shadow - lg bg - zion - purple hover:bg - zion - purple - light text - white z - 50";"
          aria - label="Open support";
        >;"
          on_click={() => setIsOpen (true)}

          <MessageSquare className="h - 6 w - 6" />;"

        )}
          className={cn ("
            "fixed bottom - 6 right - 6 w-[380px] rounded - 2xl shadow - xl z - 50 flex flex - col";""
            theme === "dark";""
              ? "bg - zion - blue - dark border border - zion - blue - light";")"
              : "bg - white border border - gray - 200")}""
          style={{ height: "600px", max_height: "80vh" }}"
        >;
          <MessageSquare className="h - 6 w - 6" />;
        </Button>)}
      {/* Support panel */}
      {is_open && (
        <div;
          className={cn ("
            "fixed bottom - 6 right - 6 w-[380px] rounded - 2xl shadow - xl z - 50 flex flex - col";"
            theme === "dark";"
              ? "bg - zion - blue - dark border border - zion - blue - light";"
              : "bg - white border border - gray - 200")}"
          style={{ height: "600px", max_height: "80vh" }}
        >;"
          <div className="flex items - center justify - between p - 4 border - b border - zion - purple / 20">;"
            <div className="flex items - center">;"
              <MessageSquare className="h - 5 w - 5 text - zion - cyan mr - 2" />;"
              <h3 className={cn ("font - semibold", theme === "dark" ? "text - white" : "text - gray - 800")}>;
                Zion Support;
              </h3>;
            </div>;"
            <div className="flex items - center gap - 2">;
              <Button;"
                variant="ghost";"
                size="icon";"
                className="h - 8 w - 8 rounded - full";"
                on_click={() => window.location.href = "/help"}"
                aria - label="Help center";
              >;"
                <Info className="h - 5 w - 5" />;
              </Button>;
              <Button;"
                variant="ghost";"
                size="icon";"
                className="h - 8 w - 8 rounded - full";
                on_click={() => setIsOpen (false)}"
                aria - label="Close support";
              >;"
                <X className="h - 5 w - 5" />;
              </Button>;
            </div>;
          </div>;
          <ChatBotPanel />;
        </div>)}
    </>);
}
'"
"

