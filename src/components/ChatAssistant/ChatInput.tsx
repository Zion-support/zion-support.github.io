export function ChatInput({ onSend, disabled = false }: ChatInputProps) {

  const [ message, setMessage ] = useState(''),
  const inputRef = useRef<HTMLTextAreaElement>(null),

    // Focus input when component mounts
    inputRef.current?.focus();  }, []);

  }, []);

    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');    }

    }

  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend(message);
        setMessage('');      }

      }

    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-end gap-2'>
      <textarea

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

      >
        <Send className='h-5 w-5' />
      </Button>
    </form>
  );