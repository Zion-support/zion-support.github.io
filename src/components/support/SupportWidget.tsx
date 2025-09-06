<<<<<<< HEAD
const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()
  return (
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size='icon'
          className='fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50'
          aria-label='Open support'        >
          <MessageSquare className='h-6 w-6' />
        </Button>
      )}
      {/* Support panel */}
      {isOpen && (
        <div
          className={cn(
            'fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col'
            theme === 'dark'
              ? 'bg-zion-blue-dark border border-zion-blue-light'
              : 'bg-white border border-gray-200'

          )}
          style={{ height: '600px', maxHeight: '80vh' }}        >
          <div className='flex items-center justify-between p-4 border-b border-zion-purple/20'>
            <div className='flex items-center'>
              <MessageSquare className='h-5 w-5 text-zion-cyan mr-2' />
              <h3
                className={cn(
                  'font-semibold'
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                )}
              >

import React, { useState } from "react",
import { useRouter } from "next/router",
import { Button } from "@/components/ui/button",
import { ChatBotPanel } from "./ChatBotPanel",
import { MessageSquare, Info, X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useTheme } from "@/hooks/useTheme",
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false),
  const { theme } = useTheme(),
  const router = useRouter(),
  
  return (
    <>
import React, { useState } from "react",;
import { useRouter } from "next/router",;
import { Button } from "@/components/ui/button",;
import { ChatBotPanel } from "./ChatBotPanel",;
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useTheme } from "@/hooks/useTheme",;
export function SupportWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const { theme } = useTheme(),;
  const router = useRouter();
  return (;
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button;
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50"
          aria-label="Open support"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
;
      {/* Support panel */}
      {isOpen && (
        <div 
          className={cn(
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
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                Zion Support
              </h3>
            </div>
            <div className="flex items-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
              <Button
=======
              <Button


=======
              <Button
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => router.push('/help')}
                aria-label="Help center"
              >
                <Info className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setIsOpen(false)}
                aria-label="Close support"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <ChatBotPanel />
        </div>
      )}
    </>;
  );
<<<<<<< HEAD

}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
