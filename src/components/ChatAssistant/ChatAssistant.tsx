<<<<<<< HEAD
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  useContext} from 'react',
import { AuthContext } from '../../context/auth/AuthContext',
import { useDebounce } from '../../hooks/useDebounce',
import { useLocalStorage } from '../../hooks/useLocalStorage',
import { ChatMessage } from './ChatMessage',
import { ChatInput } from './ChatInput',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',
import { Button } from '@/components/ui/button',
import { X } from 'lucide-react'

export interface Message {
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
  read?: boolean
}

export interface ChatAssistantProps {
  isOpen: boolean,
  onClose: () => void,
  recipient: {
    id: string,
    name: string,
    avatarUrl?: string,
    role?: string
  },
  conversationId?: string,
  initialMessages?: Message[],
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,
  contextHeader?: ReactNode,
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  /** Optional canned questions shown when the chat is empty */
  starterQuestions?: string[]
}

<<<<<<< HEAD
export function ChatAssistant({
  isOpen,
  onClose,
  recipient,
  conversationId,
  initialMessages = [],
  onSendMessage,
  contextHeader,
  starterQuestions = []}: ChatAssistantProps) {
  const auth = useContext(AuthContext),
  const isGuest = !auth?.isAuthenticated,

  // Hooks called unconditionally at the top
  const localStorageKey = `chatHistory-${recipient.id}`, // Key is always generated
=======
export function ChatAssistant(_{_isOpen, _onClose, _recipient, _conversationId, _initialMessages = [], _onSendMessage, _contextHeader, _starterQuestions = []}: ChatAssistantProps) {_const _auth = useContext(AuthContext);
  const _isGuest = !auth?.isAuthenticated;

  // Hooks called unconditionally at the top
  const _localStorageKey = `chatHistory-${recipient.id}`; // Key is always generated
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<
    Message[]
  >(
    isGuest ? localStorageKey : 'dummy-guest-key', // Use a dummy key if not guest to prevent LS write for logged-in users
    []),
  const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]>(
    []),
  const [loggedInMessages, setLoggedInMessages] =
    useState<Message[]>(initialMessages),

<<<<<<< HEAD
  const messagesEndRef = useRef<HTMLDivElement | null>(null),
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{
    message: string,
    conversationId?: string
  } | null>(null),
  const [showGuestModal, setShowGuestModal] = useState(false),
  const [guestMessage, setGuestMessage] = useState<string | null>(null),
=======
  const _messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{_message: string;
    conversationId?: string;} | null>(null);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [guestMessage, setGuestMessage] = useState<string | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Effect for guest user messages
  useEffect__(() => {_if (isGuest) {
      // Priority: initialMessages prop > localStorage > empty array
      if (initialMessages && initialMessages.length > 0) {
<<<<<<< HEAD
        setDisplayGuestMessages(initialMessages),
        setStoredGuestMessages(initialMessages), // Persist if initialMessages are provided
      } else {
        setDisplayGuestMessages(storedGuestMessages)
      }
=======
        setDisplayGuestMessages(initialMessages);
        setStoredGuestMessages(initialMessages); // Persist if initialMessages are provided} else {_setDisplayGuestMessages(storedGuestMessages);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [
    isGuest,
    initialMessages,
    storedGuestMessages,
    setStoredGuestMessages,
    recipient.id]),

  // Effect for logged-in user messages
  useEffect__(() => {_if (!isGuest) {
      // Update state if initialMessages prop changes (e.g. new conversation loaded)
<<<<<<< HEAD
      setLoggedInMessages(initialMessages)
    }
  }, [isGuest, initialMessages, recipient.id]),

  // Determine currentMessages and setCurrentMessages based on isGuest
  const currentMessages = isGuest ? displayGuestMessages : loggedInMessages,
  const setCurrentMessages = (
    valueOrFn: Message[] | ((val: Message[]) => Message[])) => {
    if (isGuest) {
      const newMessages =
        valueOrFn instanceof Function
          ? valueOrFn(displayGuestMessages)
          : valueOrFn,
      setDisplayGuestMessages(newMessages),
      setStoredGuestMessages(newMessages), // Always update localStorage for guests
    } else {
      const newMessages =
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) : valueOrFn,
      setLoggedInMessages(newMessages)
    }
  },

  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {_if (debouncedApiCallParams) {
      onSendMessage(
<<<<<<< HEAD
        debouncedApiCallParams.message,
        debouncedApiCallParams.conversationId)
    }
  }, [debouncedApiCallParams, onSendMessage]),

  useEffect(() => {
    scrollToBottom()
  }, [currentMessages]), // currentMessages will correctly refer to either guest or logged-in state

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },

  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return,
=======
        debouncedApiCallParams.message, _debouncedApiCallParams.conversationId, _);}
  }, [debouncedApiCallParams, onSendMessage]);

  useEffect__(() => {_scrollToBottom();}, [currentMessages]); // currentMessages will correctly refer to either guest or logged-in state

  const _scrollToBottom = () => {_messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  };

  const _handleSendMessage = async (_messageContent: string) => {_if (!messageContent.trim()) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    if (!isGuest) {
      // Logged-in user
      const newMessage: Message = {
<<<<<<< HEAD
        id: Date.now().toString(),
        role: 'user',
        message: messageContent,
        timestamp: new Date()},
      setCurrentMessages((prev: Message[]) => [...prev, newMessage]),
      setPendingApiCallParams({ message: messageContent, conversationId })
    } else {
      // Guest user
      setGuestMessage(messageContent),
      setShowGuestModal(true)
    }
  },

  const handleModalSendConfirm = () => {
    if (!guestMessage) return,

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      message: guestMessage,
      timestamp: new Date()},
    setCurrentMessages((prev: Message[]) => [...prev, newMessage]), // This will now use the guest-aware setCurrentMessages
    setPendingApiCallParams({ message: guestMessage, conversationId }),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setShowGuestModal(false),
    setGuestMessage(null)
  },

<<<<<<< HEAD
  const handleModalCancel = () => {
    setShowGuestModal(false),
    setGuestMessage(null)
  },

  useEffect(() => {
    if (!isOpen) return,
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault(),
        onClose()
      }
    },
    document.addEventListener('keydown', handleKeyDown),
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose]),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!isOpen) return null,

  return (
    <div
      className=&quot;fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4&quot;
      role=&quot;dialog&quot;
      aria-modal=&quot;true&quot;
      aria-labelledby=&quot;chat-assistant-title&quot;
    >
<<<<<<< HEAD
      <div className=&quot;w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]&quot;>
        {/* Header */}
        <div className=&quot;bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20&quot;>
          <div className=&quot;flex items-center space-x-3&quot;>
            <Avatar className=&quot;h-10 w-10 border border-zion-purple/20&quot;>
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />
              <AvatarFallback className=&quot;bg-zion-purple/20 text-white&quot;>
                {recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 id=&quot;chat-assistant-title&quot; className=&quot;font-medium text-white&quot;>
                {recipient.name}
              </h2>
              {recipient.role && (
                <div className=&quot;text-xs text-zion-slate&quot;>{recipient.role}</div>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </div>
          </div>
          <Button
<<<<<<< HEAD
            variant=&quot;ghost&quot;
            size=&quot;icon&quot;
            className=&quot;text-white hover:bg-zion-purple/10 rounded-full&quot;
            onClick={onClose}
            aria-label=&quot;Close chat&quot;
=======
            variant="ghost"
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick={_onClose}
            aria-label="Close chat"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <X className=&quot;h-5 w-5&quot; />
          </Button>
        </div>

<<<<<<< HEAD
        {/* Context Header (Optional) */}
        {contextHeader && (
          <div className=&quot;border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3&quot;>
=======
        {_/* Context Header (Optional) */}
        {_contextHeader && (
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            {contextHeader}
          </div>
        )}

        {_/* Messages */}
        <div
          className=&quot;flex-1 overflow-y-auto p-4 space-y-4&quot;
          aria-live=&quot;polite&quot;
        >
<<<<<<< HEAD
          {currentMessages.length === 0 ? (
            <div className=&quot;text-center text-zion-slate py-8 space-y-4&quot;>
              <p>Start a conversation with {recipient.name}</p>
              {starterQuestions.length > 0 && (
                <div className=&quot;flex flex-wrap justify-center gap-2&quot;>
                  {starterQuestions.map((q, idx) => (
                    <Button
                      key={idx}
                      variant=&quot;outline&quot;
                      className=&quot;text-xs&quot;
                      onClick={() => handleSendMessage(q)}
=======
          {_currentMessages.length === 0 ? (_<div className="text-center text-zion-slate py-8 space-y-4">
              <p>Start a conversation with {recipient.name}</p>
              {_starterQuestions.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {starterQuestions.map((q, _idx) => (_<Button
                      key={idx}
                      variant="outline"
                      className="text-xs"
                      onClick={_() => handleSendMessage(q)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Input */}
        <div className=&quot;p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30&quot;>
          <ChatInput onSend={handleSendMessage} />
=======
        {_/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={_handleSendMessage} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>

      {_showGuestModal && guestMessage && (
        <div
          className=&quot;fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4&quot;
          role=&quot;dialog&quot;
          aria-modal=&quot;true&quot;
          aria-labelledby=&quot;confirm-message-title&quot;
        >
          <div className=&quot;bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md&quot;>
            <h3
              id=&quot;confirm-message-title&quot;
              className=&quot;text-lg font-semibold text-white mb-4&quot;
            >
              Confirm Message
            </h3>
            <p className=&quot;text-zion-slate mb-6 whitespace-pre-wrap break-words&quot;>
              {guestMessage}
            </p>
            <div className=&quot;flex justify-end space-x-3&quot;>
              <Button
<<<<<<< HEAD
                variant=&quot;outline&quot;
                onClick={handleModalCancel}
                className=&quot;text-white border-zion-purple hover:bg-zion-purple/10&quot;
=======
                variant="outline"
                onClick={_handleModalCancel}
                className="text-white border-zion-purple hover:bg-zion-purple/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Cancel
              </Button>
              <Button
<<<<<<< HEAD
                onClick={handleModalSendConfirm}
                className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
=======
                onClick={_handleModalSendConfirm}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
