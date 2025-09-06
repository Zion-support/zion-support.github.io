<<<<<<< HEAD
<<<<<<< HEAD
import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
=======

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
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Send } from 'lucide-react'
interface ChatInputProps {
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

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onSend: (message: string) => void
  disabled?: boolean
}
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    // Focus input when component mounts;
    inputRef.current?.focus();
<<<<<<< HEAD
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

  }, []);
      >
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';
<<<<<<< HEAD
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
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();    if (message && message.trim() && !disabled) {;
      onSend(message);
      }
    }
  };


  return (


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
<<<<<<< HEAD
=======
      />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
      >
        <Send className="h-5 w-5" />


      >
        <Send className="h-5 w-5" />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </Button>
    </form>
  )
}
        disabled={!message.trim() || disabled}

<<<<<<< HEAD
        disabled={!message.trim() |disabled}
        disabled={!message.trim() || disabled}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
}
<<<<<<< HEAD
        disabled={!message && message.trim() || disabled}>;
        <Send className='h-5 w-5' />;
      </Button>;
    </form>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


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
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
