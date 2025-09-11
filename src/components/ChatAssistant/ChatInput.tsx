<<<<<<< HEAD
<<<<<<< HEAD

import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
} from 'react'
import { Button } from '@/components/ui/button'

interface ChatInputProps {
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
import { Send } from 'lucide-react'
interface ChatInputProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {;
    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();

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

  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();    if (message && message.trim() && !disabled) {;
      onSend(message);


    }


      }
    }
  };



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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  },

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
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
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
<<<<<<< HEAD
      <Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'
        disabled={!message.trim() |disabled}      >
        <Send className='h-5 w-5' />
import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
import { Send } from 'lucide-react'
interface ChatInputProps {

  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
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
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();    if (message && message.trim() && !disabled) {;
      onSend(message);


    }


      }
    }
  };



  return (

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

<<<<<<< HEAD
=======
        disabled={!message.trim() |disabled}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
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
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
<<<<<<< HEAD
=======
      />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}


        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >
        <Send className="h-5 w-5" />


<<<<<<< HEAD
<<<<<<< HEAD
      >
        <Send className="h-5 w-5" />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </Button>
    </form>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
        disabled={!message.trim() || disabled}

        disabled={!message.trim() |disabled}
        disabled={!message.trim() || disabled}
=======

        disabled={!message.trim() || disabled}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        disabled={!message.trim() || disabled}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
        disabled={!message && message.trim() || disabled}>;
        <Send className='h-5 w-5' />;
      </Button>;
    </form>;
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
<<<<<<< HEAD
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
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
