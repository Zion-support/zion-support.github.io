import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ChatBotPanel } from './ChatBotPanel';
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { ChatBotPanel } from "./ChatBotPanel";
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button
<<<<<<< HEAD
          onClick={() => setIsOpen(true)}
          size='icon'
          className='fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50'
          aria-label='Open support'
=======
          onClick = {(,) => setIsOpen(true),}
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50"
          aria-label="Open support"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          <MessageSquare className='h-6 w-6' />
        </Button>
      )}

      {/* Support panel */}
      {isOpen && (
<<<<<<< HEAD
        <div
          className={cn(
            'fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col',
            theme === 'dark'
              ? 'bg-zion-blue-dark border border-zion-blue-light'
              : 'bg-white border border-gray-200'
          )}
          style={{ height: '600px', maxHeight: '80vh' }}
=======
        <div 
          className = {cn(
            "fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col",
            theme === "dark" 
              ? "bg-zion-blue-dark border border-zion-blue-light" 
              : "bg-white border border-gray-200"
          ),}
          style={{ height: "600px", maxHeight: "80vh" }}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          <div className='flex items-center justify-between p-4 border-b border-zion-purple/20'>
            <div className='flex items-center'>
              <MessageSquare className='h-5 w-5 text-zion-cyan mr-2' />
              <h3
                className={cn(
                  'font-semibold',
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                )}
              >
                Zion Support
              </h3>
            </div>
            <div className='flex items-center gap-2'>
              <Button
<<<<<<< HEAD
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => router.push('/help')}
                aria-label='Help center'
=======
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick = {() => router.push('/help'),}
                aria-label="Help center"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                <Info className='h-5 w-5' />
              </Button>
              <Button
<<<<<<< HEAD
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => setIsOpen(false)}
                aria-label='Close support'
=======
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick = {() => setIsOpen(false),}
                aria-label="Close support"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              >
                <X className='h-5 w-5' />
              </Button>
            </div>
          </div>

          <ChatBotPanel />
        </div>
      )}
    </>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
