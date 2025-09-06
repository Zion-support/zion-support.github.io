

import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",

=======
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Send } from 'lucide-react'
interface ChatInputProps {

  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { Send } from 'lucide-react';

interface ChatInputProps {;
  onSend: (message: string) => void;
disabled?: boolean ;
}export function ChatInput(): any ({;
  onSend, disabled = false ;
}: ChatInputProps) {';
  const [message, setMessage] = useState ('');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts ;
export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;

  const [ message, setMessage ] = useState(''),;
  const inputRef = useRef<HTMLTextAreaElement>(null),;

  useEffect(() => {    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();  }, []);
    inputRef && inputRef.current?.focus();

interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
}

export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {;
    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();

=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react'

interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {

  const [ message, setMessage ] = useState(''),
  const inputRef = useRef<HTMLTextAreaElement>(null),


  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus()

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();    if (message && message.trim() && !disabled) {;
      onSend(message);


    }


      }
    }
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <form on_submit={handle_submit} className='flex items - end gap - 2'>;
      <textarea;
        ref={input_ref}
        className='flex - 1 min - h-[40px] max - h-[120px] px - 3 py - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border - transparent resize - none text - black placeholder:text - zion - slate - light';
        placeholder='Type your message...';
        value={message}
        on_change={e => set_message (e.target.value)}        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
      <Button;
        type='submit';
        className='bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center'        on_change={(e) => set_message (e.target.value)}

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;

        disabled={!message.trim() |disabled}
=======

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
=======

        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}


        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}

      >
        <Send className="h-5 w-5" />


      </Button>
    </form>
  )
}

        disabled={!message.trim() || disabled}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
}
=======


=======
      <Button;
        type='submit';
        className='bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center';
        disabled={!message.trim () || disabled}      >;
        <Send className='h - 5 w - 5' />;
      </Button>;
    </form>);
}
        disabled={!message.trim () || disabled}
      >;
        <Send className="h - 5 w - 5" />;
      </Button>;
    </form>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
