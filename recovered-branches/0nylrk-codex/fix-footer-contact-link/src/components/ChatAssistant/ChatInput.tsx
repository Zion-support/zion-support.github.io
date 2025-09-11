import React, {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
=======

import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;

=======

import React, {
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from "react";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
interface ChatInputProps {;
  onSend: (message: string) => void;
  disabled?: boolean
}

export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);


  useEffect(() => {;
    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();
    if (message && message.trim() && !disabled) {;
      (onSend(message), setMessage(""));
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;
    if (e && e.key === "Enter" && !e && e.shiftKey) {;
      e && e.preventDefault();
      if (message && message.trim() && !disabled) {;

        (onSend(message), setMessage(""));
      }
    }


  };

=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
import { Send } from "lucide-react",
interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from "lucide-react",;
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e && e.target.value)}
=======
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,
} from './react';
import { Button  } from '@/components / ui / button';
import { Send  } from './lucide-react';
interface ChatInputProps {
  on_send: (message: string) => void;
  disabled?: boolean;
}
export /**
 * ChatInput - Function description
 */
function ChatInput() {
  const [message, set_message] = useState ("");
  const input_ref = useRef < HTMLTextAreaElement>(null);
;
  useEffect (() => {
    // Focus input when component mounts;
    input_ref.current?.focus ();
  }, []);
;
  const handle_submit = (e: FormEvent < HTMLFormElement>) =>: any {
    e.prevent_default ();
    // Check condition
if (&& !disabled) {) {
  $2
}
      (on_send (message), set_message (""));
    }
  }
;
  const handleKeyPress = (e: KeyboardEvent < HTMLTextAreaElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      // Check condition
if (&& !disabled) {) {
  $2
}
        (on_send (message), set_message (""));
      }
    }
  }
;
  return (
    <form on_submit={handle_submit} className="flex items - end gap - 2">;
      <textarea;
        ref={input_ref}
        className="flex - 1 min - h-[40px] max - h-[120px] px - 3 py - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border - transparent resize - none text - white placeholder:text - zion - slate - light";
        placeholder="Type your message...";
        value={message}
        on_change={(e) => set_message (e.target.value)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;

        disabled={!message && message.trim() || disabled}>;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;

  );
=======
      <Button;
        type="submit";
        className="bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center";
        disabled={!message.trim () || disabled}
      >;
        <Send className="h - 5 w - 5" />;
      </Button>;
    </form>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======

);
=======
  )

}
=======
  )
}
  )
}
