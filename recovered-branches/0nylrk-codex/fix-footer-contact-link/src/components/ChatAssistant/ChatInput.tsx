<<<<<<< HEAD
<<<<<<< HEAD

import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
import React, {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useState,
=======
useState,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, {
=======

import React, {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  useState,
  useRef,
  useEffect,
<<<<<<< HEAD
  FormEvent,;
  KeyboardEvent,;
=======
  FormEvent,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "react";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
} from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button";
=======


"
} from "react";"
import { Button } from "@/components/ui/button";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Send } from "lucide-react";
interface ChatInputProps {;
  onSend: (message: string) => void;
<<<<<<< HEAD
  disabled?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  useEffect(() => {;
    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();
<<<<<<< HEAD
    if (message && message.trim() && !disabled) {;"
=======
    if (message && message.trim() && !disabled) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      (onSend(message), setMessage(""));
    }
  };

<<<<<<< HEAD
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;"
    if (e && e.key === "Enter" && !e && e.shiftKey) {;
      e && e.preventDefault();
      if (message && message.trim() && !disabled) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;
    if (e && e.key === "Enter" && !e && e.shiftKey) {;
      e && e.preventDefault();
      if (message && message.trim() && !disabled) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        (onSend(message), setMessage(""));
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  };
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
=======

  };

  }
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  };

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',"
import { Button } from "@/components/ui/button","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Send } from "lucide-react",
interface ChatInputProps {}
  onSend: (message: string) => void,
  disabled?: boolean';
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;"
import { Button } from "@/components/ui/button",;"
import { Send } from "lucide-react",;
interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
}
;
export function ChatInput() { return null; }
  }, []),;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e.preventDefault(),;
    if (message.trim() && !disabled) {;
      onSend(message),;'
      setMessage('');
    }
  },;
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;'
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      if (message.trim() && !disabled) {;
        onSend(message);'
        setMessage('');
      }
    }
  },
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
(onSend(message), setMessage(""));
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"
=======


  return ("
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;

      <textarea;
        ref={inputRef}"
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        placeholder="Type your message..."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        value={message}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        onChange={(e) => setMessage(e && e.target.value)}
<<<<<<< HEAD
=======
        value={message}
        onChange={(e) => setMessage(e && e.target.value)}
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
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
  );
<Button;
        type="submit";
        className="bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center";
        disabled={!message.trim () || disabled}
      >;
        <Send className="h - 5 w - 5" />;
      </Button>;
    </form>);
}

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
        value={message}});
  )

}
  )
}


import React, {


} from "react";""
} from "react";""
import { Button } from "@/components/ui/button";""
import { Send } from "lucide-react";"
interface ChatInputProps {;
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;"
  const [message, setMessage] = useState("");"
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;

  const inputRef = useRef<HTMLTextAreaElement>(null),;


"
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;"
</form>"
</form>
      <textarea;
        ref={inputRef}"
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"""
        placeholder="Type your message...""
        value={message}
        onChange={(e) => setMessage(e && e.target.value)}
</textarea>

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {;

  const handleKeyPress = (e:KeyboardEvent<HTMLTextAreaElement>) => {;
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light";""
        placeholder="Type your message...";        value={message}"
        onChange={(e) => setMessage(e.target.value)}
<<<<<<< HEAD
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
        onChange={(e) => setMessage(e.target.value)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
<<<<<<< HEAD
        disabled={!message.trim() |disabled}
=======
=======
      <Button;"
        type="submit"""
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        disabled={!message.trim() || disabled}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
<<<<<<< HEAD
  );
);
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
  );
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
=======
        value={message}});
=======
);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        value={message}});
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  );
}
  )
}
<<<<<<< HEAD
=======

}


'
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;"
import { Button } from "@/components/ui/button",;"
import { Send } from "lucide-react",;
;
interface ChatInputProps {;
  onSend:(message:string) => void,;
  disabled?:boolean;
}
;
export function ChatInput() { return null; }
  }, []),;
;
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {;
    e.preventDefault(),;
    if (message.trim() && !disabled) {;
      onSend(message),;'
      setMessage('');
    }
  },;
;
  const handleKeyPress = (e:KeyboardEvent<HTMLTextAreaElement>) => {;'
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      if (message.trim() && !disabled) {;
        onSend(message),;'
        setMessage('');
      }
    }
  },;
;
  return (;"
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
      <textarea;
        ref={inputRef}"
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light";"
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
      <Button "
        type="submit" "
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}
      >"
        <Send className="h-5 w-5" />
      </Button>
    </form>


  );


}
  )
}
<<<<<<< HEAD


}
  )
}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
  )
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        <Send className="h-5 w-5" />"

pr-12325
</Send>
      </Button>
    </form>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
