import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ChatBotPanel } from './ChatBotPanel';
import { MessageSquare, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>
      {/* Fixed button in the bottom right */}
      {!isOpen && (
        <Button

        >
          <MessageSquare className='h-6 w-6' />
        </Button>
      )}

      {/* Support panel */}
      {isOpen && (

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

              >
                <Info className='h-5 w-5' />
              </Button>
              <Button

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