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
"
          <MessageSquare className="h-6 w-6" />"

        
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
            <div className="flex items-center">"
              <MessageSquare className="h-5 w-5 text-zion-cyan mr-2" />"

              <h3;
                  "font-semibold",""
                  theme === "dark" ? "text-white" : "text-gray-800",")
                )}
</h3>
    <>"
import React, { useState } from "react",;""
import { useRouter } from "next/router",;""
import { Button } from "@/components/ui/button",;""
import { ChatBotPanel } from "./ChatBotPanel",;""
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from "@/lib/utils",;""
import { useTheme } from "@/hooks/useTheme",;"
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  return (;

        
              : "bg-white border border-gray-200"")
              <h3 className={cn("font-semibold", theme === "dark" ? "text-white" : "text-gray-800")}>"
            <div className="flex items-center gap-2">"
</div>
              <Button;"
                variant="ghost"""
                size="icon"""
                className="h-8 w-8 rounded-full"""
                onClick={() => router.push("/help")}"
                <Info className="h-5 w-5" />"

              
                className="h-8 w-8 rounded-full""
                onClick={() => setIsOpen(false)}
                <X className="h-5 w-5" />"

              

          <ChatBotPanel />

    </>
  );
}
;