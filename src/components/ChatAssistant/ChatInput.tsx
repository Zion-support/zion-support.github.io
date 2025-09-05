<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Send } from 'lucide-react'

interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';
interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
  },

  return (
    <form onSubmit={handleSubmit} className=&quot;flex items-end gap-2&quot;>
      <textarea
        ref={inputRef}
        className=&quot;flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light&quot;
        placeholder=&quot;Type your message...&quot;
=======
  };
  return (;
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
      <textarea;
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light";
        placeholder="Type your message...";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
<<<<<<< HEAD
      />
      <Button 
        type=&quot;submit&quot; 
        className=&quot;bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center&quot;
        disabled={!message.trim() || disabled}
      >
        <Send className=&quot;h-5 w-5&quot; />
      </Button>
    </form>
  )
=======
      />;
      <Button;
        type="submit";
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center";
        disabled={!message.trim() || disabled}
      >;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}