useState,
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
<<<<<<< HEAD
=======

import React, {

=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
import React, {;
  }
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
import React, {
<<<<<<< HEAD
  }
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  useState,
  useRef,
  useEffect,
<<<<<<< HEAD

} from "react";

} from "react";

=======
  FormEvent,
  KeyboardEvent,;
<<<<<<< HEAD
} from "react";"
import { Button } from "@/components/ui/button";"
import { Send } from "lucide-react";"
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import React, {

  useState,
  useRef,
  useEffect,

} from "react";

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from "react";

} from "react";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Button } from "@/components/ui/button";

import { Send } from "lucide-react";
>>>>>>> origin/resolved-merge-conflicts
interface ChatInputProps {;
  }
  "onSend": ("message": string) => void;
  disabled?: boolean
}
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react','
import { Button } from "@/components/ui/button","
import { Send } from "lucide-react","
interface ChatInputProps {
  }
  "onSend": ("message": string) => void,
  disabled?: boolean,
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';'
import { Button } from "@/components/ui/button";"
import { Send } from "lucide-react",;"
<<<<<<< HEAD
=======
=======
  onSend: (message: string) => void;

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {;
    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();
  }, []);
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e && e.preventDefault();

      (onSend(message), setMessage(""));
    }
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        (onSend(message), setMessage(""));
      }
    }

<<<<<<< HEAD
=======
=======
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;
    if (e && e.key === "Enter" && !e && e.shiftKey) {;
      e && e.preventDefault();
      if (message && message.trim() && !disabled) {;

  };

  }
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",

import { Send } from "lucide-react",
interface ChatInputProps {}
  onSend: (message: string) => void,
  disabled?: boolean';
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;"
import { Button } from "@/components/ui/button",;"
import { Send } from "lucide-react",;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
interface ChatInputProps {;
  }
  "onSend": ("message": string) => void,;
  disabled?: boolean;
}
;
export function ChatInput() {;
  }
  const [message, setMessage] = useState(''),;'
  const inputRef = useRef<HTMLTextAreaElement>(null),;
  useEffect(() => {;
    // Focus input when component mounts;
    }
    inputRef.current?.focus();
  }, []),;
  const handleSubmit = ("e": FormEvent<HTMLFormElement>) => {;
    }
    e.preventDefault(),;
    if (message.trim() && !disabled) {;
      }
      onSend(message),;
      setMessage('');'
    }
  },;
  const handleKeyPress = ("e": KeyboardEvent<HTMLTextAreaElement>) => {;
    }
    if (e.key === 'Enter' && !e.shiftKey) {;'
      }
      e.preventDefault(),;
      if (message.trim() && !disabled) {;
<<<<<<< HEAD
        }
        onSend(message);
        setMessage('');'
      }
    }
  },
return (;
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;  return ("
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;"
      <textarea,
ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md "focus":outline-none "focus":ring-2 "focus":ring-zion-purple "focus":border-transparent resize-none text-white "placeholder":text-zion-slate-light""
        placeholder="Type your message...""
        value={message});
=======
        onSend(message);'
        setMessage('');
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
    }
  },

<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
=======
<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
=======
<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"

        placeholder="Type your message..."
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"

        disabled={!message.trim() || disabled}

      >
        <Send className="h-5 w-5" />
      </Button>
    </form>

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled});

}

  )

  );
}
>>>>>>> origin/resolved-merge-conflicts
  )
}
  )
}