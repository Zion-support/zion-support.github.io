import React, {_useState, _useEffect, _useRef, _ReactNode, _useContext} from 'react';

export interface Message {_id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean;}

export interface ChatAssistantProps {_isOpen: boolean;
  onClose: () => void;
  recipient: {
    id: string;
    name: string;
    avatarUrl?: string;
    role?: string;};
  conversationId?: string;
  initialMessages?: Message[];
  onSendMessage: (_message: string, _conversationId?: string) => Promise<void>;
  contextHeader?: ReactNode;
  /** Optional canned questions shown when the chat is empty */
  starterQuestions?: string[];
}

export function ChatAssistant(_{_isOpen, _onClose, _recipient, _conversationId, _initialMessages = [], _onSendMessage, _contextHeader, _starterQuestions = []}: ChatAssistantProps) {_const _auth = useContext(AuthContext);
  const _isGuest = !auth?.isAuthenticated;

  // Hooks called unconditionally at the top
  const _localStorageKey = `chatHistory-${recipient.id}`; // Key is always generated
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<
    Message[]
  >(
    isGuest ? localStorageKey : 'dummy-guest-key', // Use a dummy key if not guest to prevent LS write for logged-in users
    [],
  );
  const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]>(
    [],
  );
  const [loggedInMessages, setLoggedInMessages] =
    useState<Message[]>(initialMessages);

  const _messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{_message: string;
    conversationId?: string;} | null>(null);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [guestMessage, setGuestMessage] = useState<string | null>(null);

  // Effect for guest user messages
  useEffect__(() => {_if (isGuest) {
      // Priority: initialMessages prop > localStorage > empty array
      if (initialMessages && initialMessages.length > 0) {
        setDisplayGuestMessages(initialMessages);
        setStoredGuestMessages(initialMessages); // Persist if initialMessages are provided} else {_setDisplayGuestMessages(storedGuestMessages);}
    }
  }, [
    isGuest,
    initialMessages,
    storedGuestMessages,
    setStoredGuestMessages,
    recipient.id]);

  // Effect for logged-in user messages
  useEffect__(() => {_if (!isGuest) {
      // Update state if initialMessages prop changes (e.g. new conversation loaded)
      setLoggedInMessages(initialMessages);}
  }, [isGuest, initialMessages, recipient.id]);

  // Determine currentMessages and setCurrentMessages based on isGuest
  const _currentMessages = isGuest ? displayGuestMessages : loggedInMessages;
  const _setCurrentMessages = (_valueOrFn: Message[] | ((val: Message[]) => Message[]),
  ) => {_if (isGuest) {
      const _newMessages =
        valueOrFn instanceof Function
          ? valueOrFn(displayGuestMessages)
          : valueOrFn;
      setDisplayGuestMessages(newMessages);
      setStoredGuestMessages(newMessages); // Always update localStorage for guests} else {_const _newMessages =
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) : valueOrFn;
      setLoggedInMessages(newMessages);}
  };

  const _debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000);

  useEffect__(() => {_if (debouncedApiCallParams) {
      onSendMessage(
        debouncedApiCallParams.message, _debouncedApiCallParams.conversationId, _);}
  }, [debouncedApiCallParams, onSendMessage]);

  useEffect__(() => {_scrollToBottom();}, [currentMessages]); // currentMessages will correctly refer to either guest or logged-in state

  const _scrollToBottom = () => {_messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  };

  const _handleSendMessage = async (_messageContent: string) => {_if (!messageContent.trim()) return;

    if (!isGuest) {
      // Logged-in user
      const newMessage: Message = {
        id: Date.now().toString(), _role: 'user', _message: messageContent, _timestamp: new Date()};
      setCurrentMessages(_(prev: Message[]) => [...prev, newMessage]);
      setPendingApiCallParams({_message: messageContent, _conversationId});
    } else {_// Guest user
      setGuestMessage(messageContent);
      setShowGuestModal(true);}
  };

  const _handleModalSendConfirm = () => {_if (!guestMessage) return;

    const newMessage: Message = {
      id: Date.now().toString(), _role: 'user', _message: guestMessage, _timestamp: new Date()};
    setCurrentMessages(_(prev: Message[]) => [...prev, newMessage]); // This will now use the guest-aware setCurrentMessages
    setPendingApiCallParams({_message: guestMessage, _conversationId});

    setShowGuestModal(false);
    setGuestMessage(null);
  };

  const _handleModalCancel = () => {_setShowGuestModal(false);
    setGuestMessage(null);};

  useEffect__(() => {_if (!isOpen) return;
    const _handleKeyDown = (_e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();}
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-assistant-title"
    >
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        {_/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-zion-purple/20">
              <AvatarImage src={_recipient.avatarUrl} alt={_recipient.name} />
              <AvatarFallback className="bg-zion-purple/20 text-white">
                {_recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 id="chat-assistant-title" className="font-medium text-white">
                {_recipient.name}
              </h2>
              {_recipient.role && (
                <div className="text-xs text-zion-slate">{recipient.role}</div>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick={_onClose}
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {_/* Context Header (Optional) */}
        {_contextHeader && (
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">
            {contextHeader}
          </div>
        )}

        {_/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
          aria-live="polite"
        >
          {_currentMessages.length === 0 ? (_<div className="text-center text-zion-slate py-8 space-y-4">
              <p>Start a conversation with {recipient.name}</p>
              {_starterQuestions.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {starterQuestions.map((q, _idx) => (_<Button
                      key={idx}
                      variant="outline"
                      className="text-xs"
                      onClick={_() => handleSendMessage(q)}
                    >
                      {_q}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (_currentMessages.map((msg) => (
              <ChatMessage key={_msg.id} role={_msg.role} message={_msg.message} />
            ))
          )}
          <div ref={_messagesEndRef} />
        </div>

        {_/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={_handleSendMessage} />
        </div>
      </div>

      {_showGuestModal && guestMessage && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-message-title"
        >
          <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3
              id="confirm-message-title"
              className="text-lg font-semibold text-white mb-4"
            >
              Confirm Message
            </h3>
            <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words">
              {guestMessage}
            </p>
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={_handleModalCancel}
                className="text-white border-zion-purple hover:bg-zion-purple/10"
              >
                Cancel
              </Button>
              <Button
                onClick={_handleModalSendConfirm}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
