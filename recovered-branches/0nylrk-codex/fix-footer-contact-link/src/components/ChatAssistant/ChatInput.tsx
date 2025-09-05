import React, {_useState, _useRef, _useEffect, _FormEvent, _KeyboardEvent} from 'react';

interface ChatInputProps {_onSend: (_message: string) => void;
  disabled?: boolean;}

export function ChatInput(_{_onSend, _disabled = false}: ChatInputProps) {_const [message, _setMessage] = useState('');
  const _inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect__(() => {
    // Focus input when component mounts
    inputRef.current?.focus();}, []);

  const _handleSubmit = (_e: FormEvent<HTMLFormElement>) => {_e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');}
  };

  const _handleKeyPress = (_e: KeyboardEvent<HTMLTextAreaElement>) => {_if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend(message);
        setMessage('');}
    }
  };

  return (_<form onSubmit={_handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={_inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={_message}
        onChange={_(e) => setMessage(e.target.value)}
        onKeyDown={_handleKeyPress}
        rows={_1}
        disabled={_disabled}
      />
      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={_!message.trim() || disabled}
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}