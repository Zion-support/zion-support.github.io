
import React, { useState } from "react";""
import { useRouter } from "next/router";""
import { Button } from "@/components/ui/button";""
import { ChatBotPanel } from "./ChatBotPanel";""
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from "@/lib/utils";""
import { useTheme } from "@/hooks/useTheme";"
;
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  const router = useRouter(),;
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;)
          onClick={() => setIsOpen(true)}
"
          <MessageSquare className="h-6 w-6" />;"

        <div ;
          className={cn(;"
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",;""
            theme === "dark" ;""
              ? "bg-zion-blue-dark border border-zion-blue-light" ;""
              :"bg-white border border-gray-200";")
          )}"
          style={{ height: "600px";, maxHeight: "80vh" ;}}"
        >;
</div>"
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">;"
            <div className="flex items-center">;"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />;"
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" :"text-gray-800")}>;"
</h3>
              </h3>;
            </div>;"
            <div className="flex items-center gap-2">;"
</div>
              <Button;"
                variant="ghost";""
                size="icon";""
                className="h-8 w-8 rounded-full";""
                onClick={() => router.push('/help')}

                <Info className="h-5 w-5" />;"

                className="h-8 w-8 rounded-full";"
                onClick={() => setIsOpen(false)}
                <X className="h-5 w-5" />;"

            </div>;
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
}size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50" aria-label="Open support" > <MessageSquare className="h-6 w-6" /> ) ;"
}{;"  isOpen && (<div className= {";"  cn (Zion Support </h3> </div> <div className="flex items-center gap-2" > <Button > <Info className="h-5 w-5" />  <Button > <X className="h-5 w-5" />  </div> </div> <ChatBotPanel /> </div>) ;""
}</>) ;"}""
}{;"
  isOpen && (<div className= {";")"
  cn (Zion Support </h3> </div> <div className="flex items-center gap-2" > <Button > <Info className="h-5 w-5" />  <Button > <X className="h-5 w-5" />  </div> </div> <ChatBotPanel /> </div>) ;"
}</>) ;"
}""
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/SupportWidget.tsx;"