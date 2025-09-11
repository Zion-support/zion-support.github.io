<<<<<<< HEAD
=======
import React, {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;

<<<<<<< HEAD

import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
import React, {
=======
=======

import React, {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from "react";

} from "react";
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from "react";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
interface ChatInputProps {;
  onSend: (message: string) => void;
  disabled?: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
=======

export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();
  }, []);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();
    if (message && message.trim() && !disabled) {;
      (onSend(message), setMessage(""));
    }
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;
    if (e && e.key === "Enter" && !e && e.shiftKey) {;
      e && e.preventDefault();
      if (message && message.trim() && !disabled) {;

<<<<<<< HEAD
  };

  }
  };
=======
        (onSend(message), setMessage(""));
      }
    }


  };

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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



<<<<<<< HEAD

        (onSend(message), setMessage(""));
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
<<<<<<< HEAD
import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
} from "react";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      (onSend(message), setMessage(""));
    }
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        (onSend(message), setMessage(""));
      }
    }
}

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from "lucide-react",;
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
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light";
        placeholder="Type your message...";        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() |disabled}
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;

        disabled={!message && message.trim() || disabled}>;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;
<<<<<<< HEAD
  );
=======

  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Button;
        type="submit";
        className="bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center";
        disabled={!message.trim () || disabled}
      >;
        <Send className="h - 5 w - 5" />;
      </Button>;
    </form>);
<<<<<<< HEAD

);
  )

  );

}

  )
}
      <Button ;
        type="submit" ;
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center";
        disabled={!message.trim() || disabled}
      >;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;
  ),; interface ChatInputProps {
  onSend: (message: string) => void;
disabled?: boolean 
}export function ChatInput ({
  onSend, disabled = false 
}: ChatInputProps) {
  const [message, setMessage] = useState ('');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts 
}
};
> <Send className="h-5 w-5" /> </Button> </form>) 
}

  );
);
  )
}
  )
}
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
