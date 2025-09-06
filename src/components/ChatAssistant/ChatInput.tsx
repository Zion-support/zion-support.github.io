import React, {
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ChatInputProps {
  onSend: (message: string) => void;
disabled?: boolean ;
}export function ChatInput ({;
  onSend, disabled = false ;
}: ChatInputProps) {';
  const [message, setMessage] = useState ('');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts ;

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();  }, []);
=======
    inputRef.current?.focus()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');    }
=======
      setMessage('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend(message);
        setMessage('');      }
=======
        setMessage('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-end gap-2'>
      <textarea
        ref={inputRef}
        className='flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light'
        placeholder='Type your message...'
        value={message}
        onChange={e => setMessage(e.target.value)}        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
      <Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'
=======
        onChange={(e) => setMessage(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
<<<<<<< HEAD
      <Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        disabled={!message.trim() || disabled}
      >
        <Send className='h-5 w-5' />
      </Button>
    </form>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
