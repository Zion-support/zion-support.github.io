
<<<<<<< HEAD
import React, { useState } from "react",;
import { useRouter } from "next/router",;
import { Button } from "@/components/ui/button",;
import { ChatBotPanel } from "./ChatBotPanel",;
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useTheme } from "@/hooks/useTheme",;
;
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  const router = useRouter(),;
  ;
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
      ;
      {/* Support panel */}
      {isOpen && (;
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
                Zion Support;
              </h3>;
            </div>;
            <div className="flex items-center gap-2">;
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => router.push('/help')}
                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => setIsOpen(false)}
                aria-label="Close support";
              >;
                <X className="h-5 w-5" />;
              </Button>;
            </div>;
          </div>;
          ;
          <ChatBotPanel />;
        </div>;
      )}
    </>;
  ),;
=======
import React, { useState } from "react",
import { useRouter } from "next/router",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTheme } from "@/hooks/useTheme",export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false),
  const { theme } = useTheme(),
  const router = useRouter(),
import React, {_useState} from "react";

export function SupportWidget() {_const [isOpen, _setIsOpen] = useState(false);
  const { theme} = useTheme();
  const _router = useRouter();
  
  return (_<>
      {_/* Fixed button in the bottom right */}
      {_!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size=&quot;icon&quot;
          className=&quot;fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50&quot;
          aria-label=&quot;Open support&quot;
        >
          <MessageSquare className=&quot;h-6 w-6&quot; />
        </Button>
      )}
      
      {_/* Support panel */}
      {_isOpen && (
        <div 
          className={cn(
            &quot;fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col&quot;,
            theme === &quot;dark&quot; 
              ? &quot;bg-zion-blue-dark border border-zion-blue-light&quot; 
              : &quot;bg-white border border-gray-200&quot;
          )}
          style={{ height: &quot;600px&quot;, maxHeight: &quot;80vh&quot; }}
        >
          <div className=&quot;flex items-center justify-between p-4 border-b border-zion-purple/20&quot;>
            <div className=&quot;flex items-center&quot;>
              <MessageSquare className=&quot;h-5 w-5 text-zion-cyan mr-2&quot; />
              <h3 className={cn(&quot;font-semibold&quot;, theme === &quot;dark&quot; ? &quot;text-white&quot; : &quot;text-gray-800&quot;)}>                Zion Support
              </h3>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;icon&quot;
                className=&quot;h-8 w-8 rounded-full&quot;
                onClick={() => router.push('/help')}
                aria-label=&quot;Help center&quot;              >
                <Info className=&quot;h-5 w-5&quot; />
              </Button>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;icon&quot;
                className=&quot;h-8 w-8 rounded-full&quot;
                onClick={() => setIsOpen(false)}
                aria-label=&quot;Close support&quot;              >
                <X className=&quot;h-5 w-5&quot; />
              </Button>
            </div>
          </div>
          
          <ChatBotPanel />
        </div>
      )}
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
