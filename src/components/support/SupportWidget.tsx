


  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()
  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!isOpen && (;
        <Button
          onClick={() => setIsOpen(true)}
          size='icon';
          className='fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50';
          aria-label='Open support'        >;
          <MessageSquare className='h-6 w-6' />;
        </Button>;
      )}
      {/* Support panel */}
      {isOpen && (;
        <div
          className={cn(
            'fixed bottom-6 right-6 w-[380px] rounded-2xl shadow-xl z-50 flex flex-col'
            theme === 'dark'
              ? 'bg-zion-blue-dark border border-zion-blue-light'
              : 'bg-white border border-gray-200'

          )}
          style={{ height: '600px', maxHeight: '80vh' }}>;
          <div className='flex items-center justify-between p-4 border-b border-zion-purple/20'>;
            <div className='flex items-center'>;
              <MessageSquare className='h-5 w-5 text-zion-cyan mr-2' />;
              <h3
                className={cn(
                  'font-semibold'
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                )}>;
                Zion Support;
              </h3>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => router && router.push('/help')}
                aria-label='Help center'              >;
                <Info className='h-5 w-5' />;
              </Button>;
              <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => setIsOpen(false)}

                aria-label='Close support'              >;
                <X className='h-5 w-5' />;
              </Button>;
            </div>;
          </div>;

          <ChatBotPanel />;
        </div>;
      )}
    </>;
  );
}

=======
import React, { useState } from 'react';
import { use_router } from 'next / router';
import { Button } from '@/components / ui / button';
import { ChatBotPanel } from './ChatBotPanel';
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_theme } from '@/hooks / use_theme';
export /**
 * SupportWidget - Function description
 */
function SupportWidget() {
  const [is_open, setIsOpen] = useState (false);
  const { theme } = use_theme ();
  const router = use_router ();
  return (
    <>;
      {/* Fixed button in the bottom right */}
      {!is_open && (
        <Button;
          on_click={() => setIsOpen (true)}
          size='icon';
          className='fixed bottom - 6 right - 6 h - 14 w - 14 rounded - full shadow - lg bg - zion - purple hover:bg - zion - purple - light text - white z - 50';
          aria - label='Open support'        >;
          <MessageSquare className='h - 6 w - 6' />;
        </Button>)}
      {/* Support panel */}
      {is_open && (
        <div;
          className={cn (
            'fixed bottom - 6 right - 6 w-[380px] rounded - 2xl shadow - xl z - 50 flex flex - col',
            theme === 'dark';
              ? 'bg - zion - blue - dark border border - zion - blue - light';
              : 'bg - white border border - gray - 200')}
          style={{ height: '600px', max_height: '80vh' }}        >;
          <div className='flex items - center justify - between p - 4 border - b border - zion - purple / 20'>;
            <div className='flex items - center'>;
              <MessageSquare className='h - 5 w - 5 text - zion - cyan mr - 2' />;
              <h3;
                className={cn (
                  'font - semibold',
                  theme === 'dark' ? 'text - white' : 'text - gray - 800')}
              >;
                Zion Support;
              </h3>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <Button;
                variant='ghost';
                size='icon';
                className='h - 8 w - 8 rounded - full';
                on_click={() => router.push ('/help')}
                aria - label='Help center'              >;
                <Info className='h - 5 w - 5' />;
              </Button>;
              <Button;
                variant='ghost';
                size='icon';
                className='h - 8 w - 8 rounded - full';
                on_click={() => setIsOpen (false)}
                aria - label='Close support'              >;
                <X className='h - 5 w - 5' />;
              </Button>;
            </div>;
          </div>;
          <ChatBotPanel />;
        </div>)}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                Zion Support
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button
<<<<<<< HEAD


=======
<<<<<<< HEAD
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => router.push('/help')}
                aria-label='Help center'              >
                <Info className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 rounded-full'
                onClick={() => setIsOpen(false)}
                aria-label='Close support'              >
                <X className='h-5 w-5' />
              </Button>
            </div>
          </div>
<<<<<<< HEAD
          <ChatBotPanel />
        </div>
      )}
    </>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
          
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          <ChatBotPanel />
        </div>
      )}
    </>;
  );

}
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
