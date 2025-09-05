<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
import { Send } from "lucide-react",
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Send } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState(''),
  const inputRef = useRef<HTMLTextAreaElement>(null),
=======
import React, {_useState, _useRef, _useEffect, _FormEvent, _KeyboardEvent} from 'react';

interface ChatInputProps {_onSend: (_message: string) => void;
  disabled?: boolean;}

export function ChatInput(_{_onSend, _disabled = false}: ChatInputProps) {_const [message, _setMessage] = useState('');
  const _inputRef = useRef<HTMLTextAreaElement>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    // Focus input when component mounts
<<<<<<< HEAD
    inputRef.current?.focus()
  }, []),

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(),
    if (message.trim() && !disabled) {
      onSend(message),
      setMessage('')
    }
  },

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(),
      if (message.trim() && !disabled) {
        onSend(message),
        setMessage('')
      }
=======
    inputRef.current?.focus();}, []);

  const _handleSubmit = (_e: FormEvent<HTMLFormElement>) => {_e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');}
  };

  const _handleKeyPress = (_e: KeyboardEvent<HTMLTextAreaElement>) => {_if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend(message);
        setMessage('');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className=&quot;flex items-end gap-2&quot;>
      <textarea
        ref={inputRef}
        className=&quot;flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light&quot;
        placeholder=&quot;Type your message...&quot;
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
      <Button 
        type=&quot;submit&quot; 
        className=&quot;bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center&quot;
        disabled={!message.trim() || disabled}
=======
  return (_<form onSubmit={_handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={_inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={_message}
        onChange={_(e) => setMessage(e.target.value)}
        onKeyDown={_handleKeyPress}
        rows={_1}
        disabled={_disabled}
      />
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={_!message.trim() || disabled}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <Send className=&quot;h-5 w-5&quot; />
      </Button>
    </form>
  )
}