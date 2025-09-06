import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
} from 'react';
import { Button } from '@/components/ui/button';
  onSend: (message: string) => void
  disabled?: boolean
}
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    // Focus input when component mounts;
    inputRef.current?.focus();
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
    e.preventDefault();    if (message.trim() && !disabled) {
      onSend(message)
      setMessage('') }      setMessage('')
    }
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message.trim() && !disabled) {
        onSend(message)
        setMessage('') }        setMessage('')
      }
    }
  }

  }, []);
      >


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
        <Send className="h - 5 w - 5" />;
      </Button>;
    </form>);
}
