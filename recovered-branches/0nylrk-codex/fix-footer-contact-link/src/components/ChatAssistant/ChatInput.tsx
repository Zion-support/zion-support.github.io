<<<<<<< HEAD

useState,


=======
useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
import React, {;
  }
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;

import React, {
  }
  useState,
  useRef,
  useEffect,

} from "react";

import { Button } from "@/components/ui/button";

import { Send } from "lucide-react";
interface ChatInputProps {;
<<<<<<< HEAD

  onSend: (message: string) => void;


=======
  }
  "onSend": ("message": string) => void;
  disabled?: boolean
}
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",

import { Send } from "lucide-react",
interface ChatInputProps {}
  onSend: (message: string) => void,
  disabled?: boolean';
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;"
import { Button } from "@/components/ui/button",;"
import { Send } from "lucide-react",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
        onSend(message);'
        setMessage('');

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    }
  },

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}});
  )

}
  )
}