<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {ChatBotPanel} from "./ChatBotPanel";
import {MessageSquare, Info, X} from "lucide-react";
import {cn} from "@/lib/utils";
=======
import React, { useState } from "react";"
import {Button} from "@/components/ui/button";"
import {ChatBotPanel} from "./ChatBotPanel";"
import {MessageSquare, Info, X} from "lucide-react";"
import {cn} from "@/lib/utils";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {useTheme} from "@/hooks/useTheme";
export function SupportWidget() { return null; }
  const { theme } = useTheme();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  return (
    <>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
<<<<<<< HEAD
        <Button

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme();
  return (;
    <>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      {/* Support panel */}
      {isOpen && (;
        <div
          className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col"
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

<<<<<<< HEAD
=======
=======
  
  return (
    <>
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  
  return (
    <>
  return (
import React, { useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from "lucide-react",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { cn } from "@/lib/utils";
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
        <Button

      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button

            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 

<<<<<<< HEAD
=======
        <Button;
          onClick={() => setIsOpen(true)}"
          size="icon";"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";"
          aria-label="Open support";
        >;"
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          onClick={() => setIsOpen(true)}
          size="icon";
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50";
          aria-label="Open support";
        >;
          <MessageSquare className="h-6 w-6" />;
        </Button>;
      )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              : "bg-white border border-gray-200"
          )}"
          style={{ height: "600px", maxHeight: "80vh" }}>;"
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;"
            <div className="flex items-center">;"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;"
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Zion Support;
              </h3>;
            </div>;"
            <div className="flex items-center gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======

<<<<<<< HEAD


              <Button"
                variant="ghost""
                size="icon""
                className="h-8 w-8 rounded-full"


"
                aria-label="Help center";
              >;"
                <Info className="h-5 w-5" />;
              </Button>;



              <Button"
                variant="ghost""
                size="icon""
                className="h-8 w-8 rounded-full"

              <Button;"
                variant="ghost";"
                size="icon";"
                className="h-8 w-8 rounded-full";
                onClick={() => setIsOpen(false)}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <ChatBotPanel />;
        </div>;
      )}
    </>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
=======



import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { ChatBotPanel } from './ChatBotPanel';'
import { MessageSquare, Info, X } from './lucide-react';'
import { cn } from '@/lib / utils';'
import { use_theme } from '@/hooks / use_theme';
export /**;
 * SupportWidget - Function description;
 */
function SupportWidget() {}
=======

        ;"
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;"
</div>"
            <div className="flex items-center">;"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;"
)"
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>;"
</h3>
              </h3>;
            </div>;"
            <div className="flex items-center gap-2">;"
                variant="ghost"""
                size="icon"""
                className="h-8 w-8 rounded-full"""
                onClick={() => window && window.location.href = "/help"}"
                <Info className="h-5 w-5" />;"

                className="h-8 w-8 rounded-full""
                onClick={() => setIsOpen(false)}


                variant="ghost";""
                size="icon";""
                className="h-8 w-8 rounded-full";"
                <X className="h-5 w-5" />;"

            </div>;
          <ChatBotPanel />;

</ChatBotPanel>
        </div>;
    </>;
  );

}
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { ChatBotPanel } from './ChatBotPanel';
import { MessageSquare, Info, X } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_theme } from '@/hooks / use_theme';
export /**
 * SupportWidget - Function description;
 */
function SupportWidget() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [is_open, setIsOpen] = useState (false);
  const { theme } = use_theme ();
      {!is_open && (
<<<<<<< HEAD
        <Button;
<<<<<<< HEAD
          on_click={() => setIsOpen (true)}"
          size="icon";"
          className="fixed bottom - 6 right - 6 h - 14 w - 14 rounded - full shadow - lg bg - zion - purple hover:bg - zion - purple - light text - white z - 50";"
          aria - label="Open support";
        >;"
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <MessageSquare className="h - 6 w - 6" />;
        </Button>)}
      {/* Support panel */}
      {is_open && (
        <div;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <X className="h - 5 w - 5" />;
              </Button>;
            </div>;
          </div>;
          <ChatBotPanel />;
=======
          <div className="flex items - center justify - between p - 4 border - b border - zion - purple / 20">;"
            <div className="flex items - center">;"
              <MessageSquare className="h - 5 w - 5 text - zion - cyan mr - 2" />;"
              <h3 className={cn ("font - semibold", theme === "dark" ? "text - white" : "text - gray - 800")}>;"
            <div className="flex items - center gap - 2">;"
                className="h - 8 w - 8 rounded - full";""
                on_click={() => window.location.href = "/help"}"
                <Info className="h - 5 w - 5" />;"

                className="h - 8 w - 8 rounded - full";"
                on_click={() => setIsOpen (false)}
                <X className="h - 5 w - 5" />;"


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>)}
    </>);
}
<<<<<<< HEAD



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  ),;}
 export function SupportWidget () {
  const [isOpen, setIsOpen] = useState (false);
const {
  // TODO: Implement
  theme;
}= useTheme ();
/* Fixed button in the bottom right */ 
}{
  !isOpen && (<Button onClick= {)
  () => setIsOpen (true) 
}size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50" aria-label="Open support" > <MessageSquare className="h-6 w-6" /> )"

  isOpen && (<div className= {)"
  cn (Zion Support </h3> </div> <div className="flex items-center gap-2" > <Button > <Info className="h-5 w-5" />  <Button > <X className="h-5 w-5" />  </div> </div> <ChatBotPanel /> </div>)"
}</>) 
                onClick={() => setIsOpen(false)}"
                aria-label="Close support""
              >"
                <X className="h-5 w-5" />"

          <ChatBotPanel />

    </>
  )
pr-12325
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
