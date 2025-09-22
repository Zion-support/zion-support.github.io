
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
import React, { useState } from "react",;
import { useRouter } from "next/router",;
import { Button } from "@/components/ui/button",;
import { ChatBotPanel } from "./ChatBotPanel",;
import { MessageSquare, Info, X } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/SupportWidget.tsx
import { cn } from "@/lib/utils",;
import { useTheme } from "@/hooks/useTheme",;
;
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;

  ;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
<Button;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
          className={cn(;"
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",;""
            theme === "dark" ;""
              ? "bg-zion-blue-dark border border-zion-blue-light" ;""
              :"bg-white border border-gray-200";")
          )}"
          style={{ height: "600px";, maxHeight: "80vh" ;}}"
        >;
<div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;
            <div className="flex items-center">;
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" :"text-gray-800")}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                Zion Support;
              </h3>;
            </div>;
            <div className="flex items-center gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
                onClick={() => router.push('/help')}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/SupportWidget.tsx
                aria-label="Help center";
              >;
                <Info className="h-5 w-5" />;
              </Button>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
              <Button;
                variant="ghost";
                size="icon";
                className="h-8 w-8 rounded-full";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/SupportWidget.tsx
                onClick={() => setIsOpen(false)}
                <X className="h-5 w-5" />;"

            </div>;
</div>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/SupportWidget.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <ChatBotPanel />;

    </>;
),;}
 export function SupportWidget () {;
  const [isOpen, setIsOpen] = useState (false);
const { ;
  theme ;
 } = useTheme ();
const router = useRouter ();
/* Fixed button in the bottom right */ ;
}{;
  !isOpen && (<Button onClick={;)
  () => setIsOpen (true) ;
}size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50" aria-label="Open support" > <MessageSquare className="h-6 w-6" /> </Button>) ;
}{;
  /* Support panel */ ;
:temp_broken_files/support/SupportWidget.tsx
}{;"  isOpen && (<div className= {";"  cn (Zion Support </h3> </div> <div className="flex items-center gap-2" > <Button > <Info className="h-5 w-5" /> </Button> <Button > <X className="h-5 w-5" /> </Button> </div> </div> <ChatBotPanel /> </div>) ;
}</>) ;"}"
}{;
  isOpen && (<div className= {";
  cn (Zion Support </h3> </div> <div className="flex items-center gap-2" > <Button > <Info className="h-5 w-5" /> </Button> <Button > <X className="h-5 w-5" /> </Button> </div> </div> <ChatBotPanel /> </div>) ;
}</>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/SupportWidget.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/SupportWidget.tsx
