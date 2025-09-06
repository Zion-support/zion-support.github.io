
interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus()
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('')
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend(message);
        setMessage('')
      }
    }
  };

        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
        disabled={!message.trim() || disabled}
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}
