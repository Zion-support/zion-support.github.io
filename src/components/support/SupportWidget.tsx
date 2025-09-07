import React, { useState } from "react";""
import { useRouter } from "next/router";""
import { Button } from "@/components/ui/button";""
import { ChatBotPanel } from "./ChatBotPanel";""
import { MessageSquare, Info, X } from "lucide-react";""
import { cn } from "@/lib/utils";""
import { useTheme } from "@/hooks/useTheme";"
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;)
          onClick={() => setIsOpen(true)}
</Button>"
          <MessageSquare className="h-6 w-6" />"
</MessageSquare>
        </Button>
        <div;
          className={cn("
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",""
            theme === "dark"""
              ? "bg-zion-blue-dark border border-zion-blue-light"""
              : "bg-white border border-gray-200",")
          )}"
          style={{ height: "600px", maxHeight: "80vh" }}"
        >
</div>"
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">"
</div>"
            <div className="flex items-center">"
</div>"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />"
</MessageSquare>
              <h3;
                className={cn("
                  "font-semibold",""
                  theme === "dark" ? "text-white" : "text-gray-800",")
                )}
              >
</h3>
    <>"
import React, { useState } from "react",;""
import { useRouter } from "next/router",;""
import { Button } from "@/components/ui/button",;""
import { ChatBotPanel } from "./ChatBotPanel",;""
import { MessageSquare, Info, X } from 'lucide-react';''
import { cn } from "@/lib/utils",;""
import { useTheme } from "@/hooks/useTheme",;"
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  const router = useRouter();
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;)
          onClick={() => setIsOpen(true)}
</Button>"
          <MessageSquare className="h-6 w-6" />"
</MessageSquare>
        </Button>
        <div;
          className={cn("
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",""
            theme === "dark"""
              ? "bg-zion-blue-dark border border-zion-blue-light"""
              : "bg-white border border-gray-200"")
          )}"
          style={{ height: "600px", maxHeight: "80vh" }}"
        >
</div>"
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">"
</div>"
            <div className="flex items-center">"
</div>"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />"
</MessageSquare>"
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>"
</h3>
              </h3>
            </div>"
            <div className="flex items-center gap-2">"
</div>
              <Button;"
                variant="ghost"""
                size="icon"""
                className="h-8 w-8 rounded-full"""
                onClick={() => router.push("/help")}"
</Button>"
                <Info className="h-5 w-5" />"
</Info>
              </Button>
              <Button;"
                variant="ghost"""
                size="icon"""
                className="h-8 w-8 rounded-full""
                onClick={() => setIsOpen(false)}
</Button>"
                <X className="h-5 w-5" />"
</X>
              </Button>
            </div>
          </div>

          <ChatBotPanel />
</ChatBotPanel>
        </div>
    </>
  );
}
;
"