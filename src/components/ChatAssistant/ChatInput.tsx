<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
import { Send } from 'lucide-react'

interface ChatInputProps {
=======
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
=======
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from "@/components/ui/button";
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
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
<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';
=======
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx

<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
import { Send } from 'lucide-react'
interface ChatInputProps {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';
<<<<<<< HEAD
=======

interface ChatInputProps {;
origin/cursor/automate-test-improve-and-merge-code-2533
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

<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
}
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
<<<<<<< HEAD
;
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState(''),;
  const inputRef = useRef<HTMLTextAreaElement>(null),;
=======
=======

=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  useEffect(() => {;
    // Focus input when component mounts;
<<<<<<< HEAD
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

=======
    inputRef && inputRef.current?.focus();

import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react'

interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean
}

<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
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

<<<<<<< HEAD
=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
export function ChatInput({ onSend, disabled;
    }
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message.trim() && !disabled) {
        onSend(message);
setMessage('');
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
      }
    }
  };

<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
return (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
return (
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx
  return (
    <form on_submit={handle_submit} className='flex items - end gap - 2'>;
      <textarea;
        ref={input_ref}
        className='flex - 1 min - h-[40px] max - h-[120px] px - 3 py - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border - transparent resize - none text - black placeholder:text - zion - slate - light';',
        placeholder='Type your message...';
        value={message}
<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx
        on_change={e => set_message (e.target.value)}        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
      <Button;
        type='submit';
<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx
        className='bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center'        on_change={(e) => set_message (e.target.value)}

<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
=======
        className='bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center'        on_change={(e) => set_message (e.target.value)}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
        disabled={!message.trim() |disabled}
<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx

<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">"
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"",
        placeholder="Type your message...""
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />,
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"",
        placeholder="Type your message...""
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
      <Button
        type="submit" "
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"",
        disabled={!message.trim() || disabled}
      >
        <Send className="h-5 w-5" />"
      </Button>
    </form>
  )
}
        disabled={!message.trim() || disabled}
      >
        <Send className="h-5 w-5" />"
      </Button>
    </form>
  )
}
      <Button;
        type='submit';
        className='bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center';',
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
}
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onChange={e => setMessage(e.target.value)}
origin/cursor/automate-test-improve-and-merge-code-2533
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx

      >
        <Send className="h-5 w-5" />


<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
      </Button>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </form>
  )
}

        disabled={!message.trim() || disabled}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
=======
}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx

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
        <Send className="h - 5 w-5" />;
      </Button>;
    </form>);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
<<<<<<< HEAD:src_backup/components/ChatAssistant/ChatInput.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx
<Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'
        disabled={!message.trim() |disabled}      >
        <Send className='h-5 w-5' />
      </Button>
    </form>
  );
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx
