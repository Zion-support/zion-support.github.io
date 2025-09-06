

}
;
export interface ChatAssistantProps {;
  isOpen: boolean,;
  onClose: () => void,;
  recipient: {;
    id: string,;
    name: string,;
    avatarUrl?: string,;
    role?: string;
  },;
  conversationId?: string,;
  initialMessages?: Message[],;
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,;
  contextHeader?: ReactNode,;
  /** Optional canned questions shown when the chat is empty */;
  starterQuestions?: string[];
}
;
export function ChatAssistant({;
  isOpen,;
  onClose,;
  recipient,;
  conversationId,;
  initialMessages = [],;
  onSendMessage,;
  contextHeader,;
  starterQuestions = []}: ChatAssistantProps) {;
  const auth = useContext(AuthContext),;
  const isGuest = !auth?.isAuthenticated,;
  // Hooks called unconditionally at the top;
  const localStorageKey = `chatHistory-${recipient.id}`, // Key is always generated;
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<;
    Message[];
  >(;
    isGuest ? localStorageKey : 'dummy-guest-key', // Use a dummy key if not guest to prevent LS write for logged-in users;
    []),;
  const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]>(;
    []),;
  const [loggedInMessages, setLoggedInMessages] =;
    useState<Message[]>(initialMessages),;
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{;
    message: string,;
    conversationId?: string;
  } | null>(null),;
  const [showGuestModal, setShowGuestModal] = useState(false),;
  const [guestMessage, setGuestMessage] = useState<string | null>(null),;
  // Effect for guest user messages;
  useEffect(() => {;
    if (isGuest) {;
      // Priority: initialMessages prop > localStorage > empty array;
      if (initialMessages && initialMessages.length > 0) {;
        setDisplayGuestMessages(initialMessages),;
        setStoredGuestMessages(initialMessages), // Persist if initialMessages are provided;
      } else {;
        setDisplayGuestMessages(storedGuestMessages);
      }
    }
  }, [;
    isGuest,;
    initialMessages,;
    storedGuestMessages,;
    setStoredGuestMessages,;
    recipient.id]),;
  // Effect for logged-in user messages;
  useEffect(() => {;
    if (!isGuest) {;
      // Update state if initialMessages prop changes (e.g. new conversation loaded);
      setLoggedInMessages(initialMessages);
    }
  }, [isGuest, initialMessages, recipient.id]),;
  // Determine currentMessages and setCurrentMessages based on isGuest;
  const currentMessages = isGuest ? displayGuestMessages : loggedInMessages,;
  const setCurrentMessages = (;
    valueOrFn: Message[] | ((val: Message[]) => Message[])) => {;
    if (isGuest) {;
      const newMessages =;
        valueOrFn instanceof Function;
          ? valueOrFn(displayGuestMessages);
          : valueOrFn,;
      setDisplayGuestMessages(newMessages),;
      setStoredGuestMessages(newMessages), // Always update localStorage for guests;
    } else {;
      const newMessages =;
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) : valueOrFn,;
      setLoggedInMessages(newMessages);
    }
  },;
  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000),;
  useEffect(() => {;
    if (debouncedApiCallParams) {;
      onSendMessage(;
        debouncedApiCallParams.message,;
        debouncedApiCallParams.conversationId);
    }
  }, [debouncedApiCallParams, onSendMessage]),;
  useEffect(() => {;
    scrollToBottom();
  }, [currentMessages]), // currentMessages will correctly refer to either guest or logged-in state;
  const scrollToBottom = () => {;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  },;
  const handleSendMessage = async (messageContent: string) => {;
    if (!messageContent.trim()) return,;
    if (!isGuest) {;
      // Logged-in user;
      const newMessage: Message = {;
        id: Date.now().toString(),;
        role: 'user',;
        message: messageContent,;
        timestamp: new Date()},;
      setCurrentMessages((prev: Message[]) => [...prev, newMessage]),;
      setPendingApiCallParams({ message: messageContent, conversationId });
    } else {;
      // Guest user;
      setGuestMessage(messageContent),;
      setShowGuestModal(true);
    }
  },;
  const handleModalSendConfirm = () => {;
    if (!guestMessage) return,;
    const newMessage: Message = {;
      id: Date.now().toString(),;
      role: 'user',;
      message: guestMessage,;
      timestamp: new Date()},;
    setCurrentMessages((prev: Message[]) => [...prev, newMessage]), // This will now use the guest-aware setCurrentMessages;
    setPendingApiCallParams({ message: guestMessage, conversationId }),;
    setShowGuestModal(false),;
    setGuestMessage(null);
  },;
  const handleModalCancel = () => {;
    setShowGuestModal(false),;
    setGuestMessage(null);
  },;
  useEffect(() => {;
    if (!isOpen) return,;
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === 'Escape') {;
        e.preventDefault(),;
        onClose();
      }
    },
    document.addEventListener('keydown', handleKeyDown),
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose]),

  useState
  useEffect
  useRef
  ReactNode
  useContext} from 'react'
import { AuthContext } from '../../context/auth/AuthContext'
import { useDebounce } from '../../hooks/useDebounce'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
export interface Message {
  id: string
  role: 'user' | 'assistant'
  message: string
  timestamp: Date

  read?: boolean
}
export interface ChatAssistantProps {

  isOpen: boolean
  onClose: () => void
  recipient: {
    id: string
    name: string
    avatarUrl?: string
    role?: string
  }
  conversationId?: string
  initialMessages?: Message[]
  onSendMessage: (message: string, conversationId?: string,) => Promise<void>
  contextHeader?: ReactNode

  /** Optional canned questions shown when the chat is empty */
  starterQuestions?: string[]
}
export function ChatAssistant({

  isOpen
  onClose
  recipient
  conversationId
  initialMessages = []
  onSendMessage
  contextHeader
  starterQuestions = []}: ChatAssistantProps) {
  const auth = useContext(AuthContext)
  const isGuest = !auth?.isAuthenticated
  // Hooks called unconditionally at the top
  const localStorageKey = `chatHistory-${recipient.id}`, // Key is always generated
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<
    Message[]
  >(isGuest ? localStorageKey : 'dummy-guest-key', // Use a dummy key if not guest to prevent LS write for logged-in users
    [])
  const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]>([])
  const [loggedInMessages, setLoggedInMessages] =
    useState<Message[]>(initialMessages)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{
    message: string
    conversationId?: string
  } | null>(null)
  const [showGuestModal, setShowGuestModal] = useState(false)
  const [guestMessage, setGuestMessage] = useState<string | null>(null)
  // Effect for guest user messages
  useEffect((,) => {
    if (isGuest) {
      // Priority: initialMessages prop > localStorage > empty array
      if (initialMessages && initialMessages.length > 0) {
        setDisplayGuestMessages(initialMessages)
        setStoredGuestMessages(initialMessages), // Persist if initialMessages are provided
  const is_guest = !auth?.is_authenticated;
  const handleSendMessage = async (message_content: string) => {
    if () return) {
  $2
}
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  useContext} from 'react',
import { AuthContext } from '../../context / auth / AuthContext';
import { use_debounce } from '../../hooks / use_debounce';
import { useLocalStorage } from '../../hooks / useLocalStorage';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { X } from 'lucide-react';
export interface Message {
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
  read?: boolean;
}
export interface ChatAssistantProps {
  is_open: boolean,
  on_close: () => void,
  recipient: {
    id: string,
    name: string,
    avatar_url?: string,
    role?: string;
  },
  conversation_id?: string,
  initial_messages?: Message[],
  onSendMessage: (message: string, conversation_id?: string, ) => Promise < void>,
  context_header?: ReactNode,
  /** Optional canned questions shown when the chat is empty */;
  starter_questions?: string[];
}
export /**
 * ChatAssistant - Function description
 */
function ChatAssistant() {
  const auth = useContext (AuthContext),
  const is_guest = !auth?.is_authenticated,
  // Hooks called unconditionally at the top;
  const localStorageKey = `chat_history-${recipient.id}`, // Key is always generated;
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<;
    Message[];
  >(is_guest ? localStorageKey : 'dummy - guest - key', // Use a dummy key if not guest to prevent LS write for logged - in users;
    []),
  const [displayGuestMessages, setDisplayGuestMessages] = useState < Message[]>([]),
  const [loggedInMessages, setLoggedInMessages] =;
    useState < Message[]>(initial_messages),
  const messagesEndRef = useRef < HTMLDivElement | null>(null),
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{
    message: string,
    conversation_id?: string;
  } | null>(null),
  const [showGuestModal, setShowGuestModal] = useState (false),
  const [guest_message, setGuestMessage] = useState < string | null>(null),
  // Effect for guest user messages;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      // Priority: initial_messages prop > local_storage > empty array;
      // Check condition
if ( {) {
  $2
}
        setDisplayGuestMessages (initial_messages),
        setStoredGuestMessages (initial_messages), // Persist if initial_messages are provided;
      } else {
        setDisplayGuestMessages (storedGuestMessages);
      }
    }
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }, [
    isGuest
    initialMessages
    storedGuestMessages
    setStoredGuestMessages
    recipient.id])
  // Effect for logged-in user messages
  useEffect((,) => {
    if (!isGuest) {
      // Update state if initialMessages prop changes (e.g. new conversation loaded)
      setLoggedInMessages(initialMessages)
    }
  }, [isGuest, initialMessages, recipient.id])
  // Determine currentMessages and setCurrentMessages based on isGuest
  const currentMessages = isGuest ? displayGuestMessages : loggedInMessages
  const setCurrentMessages = (
    valueOrFn: Message[] | ((val: Message[],) => Message[])
  ) => {
    if (isGuest) {
<<<<<<< HEAD
      const newMessages = null;
        valueOrFn instanceof Function
          ? valueOrFn(displayGuestMessages)
          : valueOrFn
      setDisplayGuestMessages(newMessages)
      setStoredGuestMessages(newMessages), // Always update localStorage for guests
    } else {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      setLoggedInMessages(newMessages)
    }
  }
  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000)
  useEffect((,) => {
    if (debouncedApiCallParams) {
      onSendMessage(debouncedApiCallParams.message
        debouncedApiCallParams.conversationId)
    }
  }, [debouncedApiCallParams, onSendMessage])
  useEffect((,) => {
    scrollToBottom()
  }, [currentMessages]), // currentMessages will correctly refer to either guest or logged-in state
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleSendMessage = async (messageContent: string,) => {
    if (!messageContent.trim()) return
    if (!isGuest) {
      // Logged-in user
      const newMessage: Message = {
        id: Date.now().toString()
        role: 'user'
        message: messageContent
        timestamp: new Date()}
      setCurrentMessages((prev: Message[],) => [...prev, newMessage])
      setPendingApiCallParams({ message: messageContent, conversationId })
    } else {
      // Guest user
      setGuestMessage(messageContent)
      setShowGuestModal(true)
    }
  }
  const handleModalSendConfirm = () => {
    if (!guestMessage) return
    const newMessage: Message = {
      id: Date.now().toString()
      role: 'user'
      message: guestMessage
      timestamp: new Date()}
    setCurrentMessages((prev: Message[],) => [...prev, newMessage]), // This will now use the guest-aware setCurrentMessages
    setPendingApiCallParams({ message: guestMessage, conversationId })
    setShowGuestModal(false)
    setGuestMessage(null)
  }
  const handleModalCancel = () => {
    setShowGuestModal(false)
    setGuestMessage(null)
  }
  useEffect((,) => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent,) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])
  if (!isOpen) return null
  const isGuest = !auth?.isAuthenticated;

  const handleSendMessage = async (messageContent: string) => {;
    if (!messageContent && messageContent.trim()) return;
                className="text-white border-zion-purple hover:bg-zion-purple/10"
              >
                Cancel
              </Button>
              <Button
=======
                onClick = {handleModalSendConfirm,}
                onClick={handleModalSendConfirm}
<<<<<<< HEAD

                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>;
  );
