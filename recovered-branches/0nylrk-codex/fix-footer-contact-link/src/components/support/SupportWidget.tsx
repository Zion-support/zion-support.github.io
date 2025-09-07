<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {ChatBotPanel} from "./ChatBotPanel";
import {MessageSquare, Info, X} from "lucide-react";
import {cn} from "@/lib/utils";
<<<<<<< HEAD

import {useTheme} from "@/hooks/useTheme";
export function SupportWidget() { return null; }
  const { theme } = useTheme();

  return (
    <>;

      {/* Fixed button in the bottom right */}
      {!isOpen && (;

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

import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",

import { cn } from "@/lib/utils";

import { useTheme } from "@/hooks/useTheme";
export function SupportWidget() {};
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import {useTheme} from "@/hooks/useTheme";
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {useTheme} from "@/hooks/useTheme";
export function SupportWidget() { return null; }
  const { theme } = useTheme();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <>;

      {/* Fixed button in the bottom right */}
      {!isOpen && (;
<<<<<<< HEAD
=======
        <Button

<<<<<<< HEAD


      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
  
  return (
    <>
>>>>>>> merged-prs-20250907-203621
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
<<<<<<< HEAD
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState($2);
  const { theme } = useTheme($2);
  return (
=======
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
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
      ;
      {/* Support panel */}
      {isOpen && (;
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col"
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

              : "bg-white border border-gray-200"
          )}
          style={{ height: "600px", maxHeight: "80vh" }}>;
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;
            <div className="flex items-center">;
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;
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
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",

import { cn } from "@/lib/utils";

import { useTheme } from "@/hooks/useTheme";
export function SupportWidget() {};
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
return (;
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import { ChatBotPanel } from "./ChatBotPanel","
import { MessageSquare, Info, X } from "lucide-react","
import { cn } from "@/lib/utils";"
import { useTheme } from "@/hooks/useTheme";"
export function SupportWidget() {
  }
return (;
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
>>>>>>> origin/chore/fix-lint-and-merge
    <>  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;
      {/* Fixed button in the bottom right */}
      {!isOpen && (
<<<<<<< HEAD
=======
=======
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
}
onClick={() => setIsOpen(true)}
          size="icon";"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple "hover":bg-zion-purple-light text-white z-50";"
          aria-label="Open support";"
        >;
          <MessageSquare className="h-6 w-6" />;"
        </Button>;
      )}
export function SupportWidget() {
  }
return (;
>>>>>>> merged-prs-20250907-203621
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
<<<<<<< HEAD
          onClick = $2;
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
              : "bg-white border border-gray-200"
          )}
=======
}
import { cn } from "@/lib/utils","
import { useTheme } from "@/hooks/useTheme","
export function SupportWidget() {
}
const [isOpen, setIsOpen] = useState(false),;
const { theme } = useTheme(),;
return (;
    <>
import { Button } from "@/components/ui/button";"
import { ChatBotPanel } from "./ChatBotPanel",;"
import { MessageSquare, Info, X } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
import { useTheme } from "@/hooks/useTheme",;"
      ;
      {/* Support panel */}
      {isOpen && (;
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col""
            }
            theme === "dark" "
              ? "bg-zion-blue-dark border border-zion-blue-light" "
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col","
            theme === "dark" "
              ? "bg-zion-blue-dark border border-zion-blue-light" "
              : "bg-white border border-gray-200""
          )}
          style={{ "height": "600px", "maxHeight": "80vh" }}>;"
=======
              : "bg-white border border-gray-200"
          )}"
          style={{ height: "600px", maxHeight: "80vh" }}>;"
>>>>>>> origin/chore/fix-lint-and-merge
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;"
            <div className="flex items-center">;"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;"
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;

                Zion Support;
              </h3>;
            </div>;"
            <div className="flex items-center gap-2">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
<<<<<<< HEAD
                onClick={() => window && window.location.href = "/help"}
=======
<<<<<<< HEAD
                onClick={() => window.location.href = "/help"}
=======
<<<<<<< HEAD
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => window.location.href = "/help"}
=======
                onClick={() => window && window.location.href = "/help"}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => window.location.href = "/help"}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;
<<<<<<< HEAD
onClick={() => window.location.href = "/help"}
=======
<<<<<<< HEAD
onClick={() => window.location.href = "/help"}
=======
<<<<<<< HEAD
                onClick={() => window.location.href = "/help"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                aria-label="Help center"
              >
                <Info className="h-5 w-5" />
              </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
<<<<<<< HEAD
                onClick={() => setIsOpen(false)}

=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => setIsOpen(false)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => setIsOpen(false)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
          ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ChatBotPanel />;
        </div>;
      )}
    </>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [is_open, setIsOpen] = useState (false);
  const { theme } = use_theme ();
      {!is_open && (

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

                <X className="h - 5 w - 5" />;
              </Button>;
            </div>;
          </div>;
          <ChatBotPanel />;

        </div>)}
    </>);
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
