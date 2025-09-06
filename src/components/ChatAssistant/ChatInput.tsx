<<<<<<< HEAD
<<<<<<< HEAD
import React, {
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus input when component mounts
<<<<<<< HEAD
    inputRef.current?.focus();
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    inputRef.current?.focus()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
<<<<<<< HEAD
<<<<<<< HEAD
      setMessage('');
=======
      setMessage('')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setMessage('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend(message);
<<<<<<< HEAD
<<<<<<< HEAD
        setMessage('');
=======
        setMessage('')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        setMessage('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }
  };

<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
<<<<<<< HEAD
        onChange={e => setMessage(e.target.value)}
=======

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        onChange={(e) => setMessage(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
<<<<<<< HEAD
<<<<<<< HEAD
      <Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'
=======
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        disabled={!message.trim() || disabled}
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
<<<<<<< HEAD
=======
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
