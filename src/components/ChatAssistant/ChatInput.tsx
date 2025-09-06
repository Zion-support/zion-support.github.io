<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
} from 'react'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD

import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
<<<<<<< HEAD

import { Send } from 'lucide-react'
interface ChatInputProps {

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
=======
>>>>>>> >>>>>>> import { Send } from 'lucide-react'
interface ChatInputProps {
=======
<<<<<<< HEAD

=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Send } from 'lucide-react'
interface ChatInputProps {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onSend: (message: string) => void
disabled?: boolean
}export function ChatInput ({
  onSend, disabled = false
}: ChatInputProps) {'
  const [message, setMessage] = useState ('')
const inputRef = useRef<HTMLTextAreaElement> (null)
//Focus input when component mounts
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [ message, setMessage ] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {    // Focus input when component mounts
    inputRef.current?.focus() }, [])
    inputRef.current?.focus()
interface ChatInputProps {

  onSend: (message: string) => void
  disabled?: boolean
}
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    // Focus input when component mounts;
    inputRef.current?.focus();
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e.preventDefault();    if (message.trim() && !disabled) {
      onSend(message)
      setMessage('') }      setMessage('')
<<<<<<< HEAD
========
<<<<<<< HEAD
useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,
} from 'react';
import { Button } from '@/components / ui / button';
import { Send } from 'lucide-react';
interface ChatInputProps {
  on_send: (message: string) => void;
disabled?: boolean;
}export /**
 * ChatInput - Function description
 */
function ChatInput() {';
  const [message, set_message] = useState ('');
const input_ref = useRef < HTMLTextAreaElement> (null);
//Focus input when component mounts;
export /**
 * ChatInput - Function description
 */
function ChatInput() {
  const [ message, set_message ] = useState (''),
  const input_ref = useRef < HTMLTextAreaElement>(null),
  useEffect (() => {    // Focus input when component mounts;
    input_ref.current?.focus () }, []);
    input_ref.current?.focus ();
interface ChatInputProps {
  on_send: (message: string) => void,
  disabled?: boolean;
}
export /**
 * ChatInput - Function description
 */
function ChatInput() {
  const [message, set_message] = useState ('');
  const input_ref = useRef < HTMLTextAreaElement>(null);
  useEffect (() => {
    // Focus input when component mounts;
    input_ref.current?.focus ();
  }, []);
  const handle_submit = (e: FormEvent < HTMLFormElement>) =>: any {
    e.prevent_default ();    // Check condition
if (&& !disabled) {) {
  $2
}
      on_send (message);
      set_message ('') }      set_message ('');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message.trim() && !disabled) {
        onSend(message)
        setMessage('') }        setMessage('')
      }
    }
  }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx

>>>>>>>   return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
=======
=======
  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';
interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
}
;
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState(''),;
  const inputRef = useRef<HTMLTextAreaElement>(null),;
  useEffect(() => {;
    // Focus input when component mounts;
    inputRef.current?.focus();
  }, []),;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e.preventDefault(),;
    if (message.trim() && !disabled) {;
      onSend(message),;
      setMessage('');
    }
  },;
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      if (message.trim() && !disabled) {;
        onSend(message);
        setMessage('');
      }

    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className='flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light'
        placeholder='Type your message...'
        value={message}
        onChange={e => setMessage(e.target.value)}        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
      <Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'        onChange={(e) => setMessage(e.target.value)}
<<<<<<< HEAD
>>>>>>>         onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
=======
=======
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'
        disabled={!message.trim() |disabled}      >
        <Send className='h-5 w-5' />
<<<<<<< HEAD
>>>>>>>       </Button>
    </form>
  )
}
        disabled={!message.trim() |disabled}
>>>>>>> import { Send } from 'lucide-react'
interface ChatInputProps {

  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
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
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
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
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx

>>>>>>>   }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();    if (message && message.trim() && !disabled) {;
      onSend(message);


    }


      }
    }
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (

========
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();    if (message && message.trim() && !disabled) {;
      onSend(message);
      setMessage('')
    }
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {;
    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault();
      if (message && message.trim() && !disabled) {;
        onSend(message);
        setMessage('')
      }
    }
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
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
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx

        disabled={!message.trim() |disabled}
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';
;
interface ChatInputProps {;
  onSend:(message:string) => void,;
  disabled?:boolean;
}
;
export function ChatInput({ onSend, disabled = false } ChatInputProps) {;
  const [message, setMessage] = useState(''),;
  const inputRef = useRef<HTMLTextAreaElement>(null),;
;
  useEffect(() => {;
    // Focus input when component mounts;
    inputRef.current?.focus(),;
  }, []),;
;
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {;
    e.preventDefault(),;
    if (message.trim() && !disabled) {;
      onSend(message),;
      setMessage('');
    }
  },;
;
  const handleKeyPress = (e:KeyboardEvent<HTMLTextAreaElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      if (message.trim() && !disabled) {;
        onSend(message),;
        setMessage('');
      }
    }
  },;
;
  return (;
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
      <textarea;
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light";
        placeholder="Type your message...";        value={message}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
<<<<<<< HEAD
      />
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}


        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
      >
        <Send className="h-5 w-5" />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
      >
        <Send className="h-5 w-5" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </Button>
    </form>
  )
}
<<<<<<< HEAD

<<<<<<< HEAD
      >
=======
        disabled={!message.trim() || disabled}

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
        disabled={!message.trim() |disabled}
=======
        disabled={!message.trim() || disabled}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        disabled={!message && message.trim() || disabled}>;
        <Send className='h-5 w-5' />;
      </Button>;
    </form>;
  );
}
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
=======
      />;
      <Button ;
        type="submit" ;
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center";
        disabled={!message.trim() || disabled}
      >;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;
  ),;}
 import {;
  {;
  {;
  Send ;
}from 'lucide-react' interface ChatInputProps {;
  onSend: (message: string) => void;
disabled?: boolean ;
}export function ChatInput ({;
  onSend, disabled = false ;
}: ChatInputProps) {';
  const [message, setMessage] = useState ('');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts ;
}
};
> <Send className="h-5 w-5" /> </Button> </form>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ChatAssistant/ChatInput.tsx
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
