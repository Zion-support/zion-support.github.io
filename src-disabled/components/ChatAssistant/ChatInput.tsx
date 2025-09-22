:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
import { Send } from 'lucide-react'

interface ChatInputProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',;
import { Button } from "@/components/ui/button",;
import { Send } from 'lucide-react';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ChatAssistant/ChatInput.tsx

:src_backup/components/ChatAssistant/ChatInput.tsx

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

interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
}
:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
;
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {;
  const [message, setMessage] = useState(''),;
  const inputRef = useRef<HTMLTextAreaElement>(null),;
export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
export function ChatInput({ onSend, disabled;
    }
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message.trim() && !disabled) {
        onSend(message);
setMessage('');
:src/components/ChatAssistant/ChatInput.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
    }
  };

:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ChatAssistant/ChatInput.tsx
  return (
    <form on_submit={handle_submit} className='flex items - end gap - 2'>;
      <textarea;
        ref={input_ref}
        className='flex - 1 min - h-[40px] max - h-[120px] px - 3 py - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border - transparent resize - none text - black placeholder:text - zion - slate - light';',
        placeholder='Type your message...';
        value={message}
:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
        on_change={e => set_message (e.target.value)}        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
      <Button;
        type='submit';
:src_backup/components/ChatAssistant/ChatInput.tsx
        className='bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center'        on_change={(e) => set_message (e.target.value)}

<<<<<<< HEAD
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
        disabled={!message.trim() |disabled}
:src_backup/components/ChatAssistant/ChatInput.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
:src_backup/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
<<<<<<< HEAD

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

      >
        <Send className="h-5 w-5" />

:src/components/ChatAssistant/ChatInput.tsx
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
:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD:src/components/ChatAssistant/ChatInput.tsx
<<<<<<< HEAD
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
:src/components/ChatAssistant/ChatInput.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
