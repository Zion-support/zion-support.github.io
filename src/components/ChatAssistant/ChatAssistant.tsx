<<<<<<< HEAD
<<<<<<< HEAD
  const isGuest = !auth?.isAuthenticated
  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  useContext} from 'react',
=======
useState
  useEffect
  useRef
  ReactNode
  useContext} from 'react'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { AuthContext } from '../../context/auth/AuthContext'
import { useDebounce } from '../../hooks/useDebounce'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
export interface Message {
<<<<<<< HEAD
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
  read?: boolean
import React, {;
  useState,;
  useEffect,;
  useRef,;
  ReactNode,;
  useContext} from 'react',;
import { AuthContext } from '../../context/auth/AuthContext',;
import { useDebounce } from '../../hooks/useDebounce',;
import { useLocalStorage } from '../../hooks/useLocalStorage',;
import { ChatMessage } from './ChatMessage',;
import { ChatInput } from './ChatInput',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { Button } from '@/components/ui/button',;
import { X } from 'lucide-react';
export interface Message {;
  id: string,;
  role: 'user' | 'assistant',;
  message: string,;
  timestamp: Date,;
  read?: boolean;
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
ursor/fix-website-loading-errors-and-merge-6662


  useState
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
  id: string
  role: 'user' | 'assistant'
  message: string
  timestamp: Date

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
const is_guest = !auth?.is_authenticated;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      } else {
        setDisplayGuestMessages(storedGuestMessages)
      }
    }
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
      const newMessages = null;
        valueOrFn instanceof Function
          ? valueOrFn(displayGuestMessages)
          : valueOrFn
      setDisplayGuestMessages(newMessages)
      setStoredGuestMessages(newMessages), // Always update localStorage for guests
    } else {
      const newMessages =
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) : valueOrFn
      const newMessages =
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) : valueOrFn
      const newMessages = null;
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) : valueOrFn,
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


      const newMessages = null;
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) : valueOrFn,


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
  const isGuest = !auth?.isAuthenticated;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSendMessage = async (messageContent: string) => {;
    if (!messageContent && messageContent.trim()) return;
import React, {;
  useState,;
  useEffect,;
  useRef,;
  ReactNode,;
  useContext} from 'react',;
import { AuthContext } from '../../context/auth/AuthContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
export interface Message {;
  id: string,;
  role: 'user' | 'assistant',;
  message: string,;
  timestamp: Date,;
  read?: boolean;
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  onSendMessage: (message: string, conversationId?: string,) => Promise<void>,;
  contextHeader?: ReactNode,;
  /** Optional canned questions shown when the chat is empty */;
  starterQuestions?: string[];
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ChatAssistant(): any ({;
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Hooks called unconditionally at the top;
  const localStorageKey = `chatHistory-${recipient && recipient.id}`, // Key is always generated;
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<;
    Message[];
  >(isGuest ? localStorageKey : 'dummy-guest-key', // Use a dummy key if not guest to prevent LS write for logged-in users;
    []),;
  const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]>([]),;
  const [loggedInMessages, setLoggedInMessages] =;
    useState<Message[]>(initialMessages),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{;
    message: string,;
    conversationId?: string;
  } | null>(null),;
  const [showGuestModal, setShowGuestModal] = useState(false),;
  const [guestMessage, setGuestMessage] = useState<string | null>(null),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Effect for guest user messages;
  useEffect((,) => {;
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
    recipient && recipient.id]),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Effect for logged-in user messages;
  useEffect((,) => {;
    if (!isGuest) {;
      // Update state if initialMessages prop changes (e && e.g. new conversation loaded);
      setLoggedInMessages(initialMessages);
    }
  }, [isGuest, initialMessages, recipient && recipient.id]),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Determine currentMessages and setCurrentMessages based on isGuest;
  const currentMessages = isGuest ? displayGuestMessages : loggedInMessages,;
  const setCurrentMessages = (;
    valueOrFn: Message[] | ((val: Message[],) => Message[]),;
  ) => {;
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
<<<<<<< HEAD
  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000),;
=======

  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect((,) => {;
    if (debouncedApiCallParams) {;
      onSendMessage(debouncedApiCallParams && debouncedApiCallParams.message,;
        debouncedApiCallParams && debouncedApiCallParams.conversationId);
    }
  }, [debouncedApiCallParams, onSendMessage]),;
<<<<<<< HEAD
  useEffect((,) => {;
    scrollToBottom();
  }, [currentMessages]), // currentMessages will correctly refer to either guest or logged-in state;
  const scrollToBottom = () => {;
    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  },;
  const handleSendMessage = async (messageContent: string,) => {;
    if (!messageContent && messageContent.trim()) return,;
=======

  useEffect((,) => {;
    scrollToBottom();
  }, [currentMessages]), // currentMessages will correctly refer to either guest or logged-in state;

  const scrollToBottom = () => {;
    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  },;

  const handleSendMessage = async (messageContent: string,) => {;
    if (!messageContent && messageContent.trim()) return,;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!isGuest) {;
      // Logged-in user;
      const newMessage: Message = {;
        id: Date && Date.now().toString(),;
        role: 'user',;
        message: messageContent,;
        timestamp: new Date()},;
      setCurrentMessages((prev: Message[],) => [...prev, newMessage]),;
      setPendingApiCallParams({ message: messageContent, conversationId });
    } else {;
      // Guest user;
      setGuestMessage(messageContent),;
      setShowGuestModal(true);
    }
  },;
<<<<<<< HEAD
  const handleModalSendConfirm = () => {;
    if (!guestMessage) return,;
=======

  const handleModalSendConfirm = () => {;
    if (!guestMessage) return,;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const newMessage: Message = {;
      id: Date && Date.now().toString(),;
      role: 'user',;
      message: guestMessage,;
      timestamp: new Date()},;
    setCurrentMessages((prev: Message[],) => [...prev, newMessage]), // This will now use the guest-aware setCurrentMessages;
    setPendingApiCallParams({ message: guestMessage, conversationId }),;
<<<<<<< HEAD
    setShowGuestModal(false),;
    setGuestMessage(null);
  },;
=======

    setShowGuestModal(false),;
    setGuestMessage(null);
  },;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleModalCancel = () => {;
    setShowGuestModal(false),;
    setGuestMessage(null);
  },;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect((,) => {;
    if (!isOpen) return,;
    const handleKeyDown = (e: KeyboardEvent,) => {;
      if (e && e.key === 'Escape') {;
        e && e.preventDefault(),;
        onClose();
      }
    },;
    document && document.addEventListener('keydown', handleKeyDown),;
    return () => document && document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!isOpen) return null,;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
<<<<<<< HEAD
<<<<<<< HEAD
import React, {;
  useState,;
  useEffect,;
  useRef,;
  ReactNode,;
  useContext} from 'react',;
import { AuthContext } from '../../context/auth/AuthContext',;
import { useDebounce } from '../../hooks/useDebounce',;
import { useLocalStorage } from '../../hooks/useLocalStorage',;
import { ChatMessage } from './ChatMessage',;
import { ChatInput } from './ChatInput',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { Button } from '@/components/ui/button',;
import { X } from 'lucide-react';
;
export interface Message {;
  id:string,;
  role:'user' | 'assistant',;
  message:string,;
  timestamp:Date,;
  read?:boolean;
}
;
export interface ChatAssistantProps {;
  isOpen:boolean,;
  onClose:() => void,;
  recipient:{;
    id:string,;
    name:string,;
    avatarUrl?:string,;
    role?:string;
  },;
  conversationId?:string,;
  initialMessages?:Message[],;
  onSendMessage:(message:string, conversationId?:string) => Promise<void>,;
  contextHeader?:ReactNode,;
  /** Optional canned questions shown when the chat is empty */;
  starterQuestions?:string[],;
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
  starterQuestions = []} ChatAssistantProps) {;
  const auth = useContext(AuthContext),;
  const isGuest = !auth?.isAuthenticated,;
;
  // Hooks called unconditionally at the top;
  const localStorageKey = `chatHistory-${recipient.id}`, // Key is always generated;
  const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage<;
    Message[];
  >(;
    isGuest ? localStorageKey :'dummy-guest-key', // Use a dummy key if not guest to prevent LS write for logged-in users;
    []),;
  const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]>(;
    []),;
  const [loggedInMessages, setLoggedInMessages] =;
    useState<Message[]>(initialMessages),;
;
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  const [pendingApiCallParams, setPendingApiCallParams] = useState<{;
    message:string,;
    conversationId?:string;
  } | null>(null),;
  const [showGuestModal, setShowGuestModal] = useState(false),;
  const [guestMessage, setGuestMessage] = useState<string | null>(null),;
;
  // Effect for guest user messages;
  useEffect(() => {;
    if (isGuest) {;
      // Priority:initialMessages prop > localStorage > empty array;
      if (initialMessages && initialMessages.length > 0) {;
        setDisplayGuestMessages(initialMessages),;
        setStoredGuestMessages(initialMessages), // Persist if initialMessages are provided;
      } else {;
        setDisplayGuestMessages(storedGuestMessages),;
      }
    }
  }, [;
    isGuest,;
    initialMessages,;
    storedGuestMessages,;
    setStoredGuestMessages,;
    recipient.id]),;
;
  // Effect for logged-in user messages;
  useEffect(() => {;
    if (!isGuest) {;
      // Update state if initialMessages prop changes (e.g. new conversation loaded);
      setLoggedInMessages(initialMessages),;
    }
  }, [isGuest, initialMessages, recipient.id]),;
;
  // Determine currentMessages and setCurrentMessages based on isGuest;
  const currentMessages = isGuest ? displayGuestMessages :loggedInMessages,;
  const setCurrentMessages = (;
    valueOrFn:Message[] | ((val:Message[]) => Message[])) => {;
    if (isGuest) {;
      const newMessages =;
        valueOrFn instanceof Function;
          ? valueOrFn(displayGuestMessages);
          :valueOrFn,;
      setDisplayGuestMessages(newMessages),;
      setStoredGuestMessages(newMessages), // Always update localStorage for guests;
    } else {;
      const newMessages =;
        valueOrFn instanceof Function ? valueOrFn(loggedInMessages) :valueOrFn,;
      setLoggedInMessages(newMessages),;
    }
  },;
;
  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000),;
;
  useEffect(() => {;
    if (debouncedApiCallParams) {;
      onSendMessage(;
        debouncedApiCallParams.message,;
        debouncedApiCallParams.conversationId),;
    }
  }, [debouncedApiCallParams, onSendMessage]),;
;
  useEffect(() => {;
    scrollToBottom(),;
  }, [currentMessages]), // currentMessages will correctly refer to either guest or logged-in state;
;
  const scrollToBottom = () => {;
    messagesEndRef.current?.scrollIntoView({ behavior:'smooth' }),;
  },;
;
  const handleSendMessage = async (messageContent:string) => {;
    if (!messageContent.trim()) return,;
;
    if (!isGuest) {;
      // Logged-in user;
      const newMessage:Message = {;
        id:Date.now().toString(),;
        role:'user',;
        message:messageContent,;
        timestamp:new Date()},;
      setCurrentMessages((prev:Message[]) => [...prev, newMessage]),;
      setPendingApiCallParams({ message:messageContent, conversationId }),;
    } else {;
      // Guest user;
      setGuestMessage(messageContent),;
      setShowGuestModal(true),;
    }
  },;
;
  const handleModalSendConfirm = () => {;
    if (!guestMessage) return,;
;
    const newMessage:Message = {;
      id:Date.now().toString(),;
      role:'user',;
      message:guestMessage,;
      timestamp:new Date()},;
    setCurrentMessages((prev:Message[]) => [...prev, newMessage]), // This will now use the guest-aware setCurrentMessages;
    setPendingApiCallParams({ message:guestMessage, conversationId }),;
;
    setShowGuestModal(false),;
    setGuestMessage(null),;
  },;
;
  const handleModalCancel = () => {;
    setShowGuestModal(false),;
    setGuestMessage(null),;
  },;
;
  useEffect(() => {;
    if (!isOpen) return,;
    const handleKeyDown = (e:KeyboardEvent) => {;
      if (e.key === 'Escape') {;
        e.preventDefault(),;
        onClose();
      }
    },;
    document.addEventListener('keydown', handleKeyDown),;
    return () => document.removeEventListener('keydown', handleKeyDown),;
  }, [isOpen, onClose]),;
;
  if (!isOpen) return null,;
;
  return (;
    <div;
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4";
      role="dialog";
      aria-modal="true";
      aria-labelledby="chat-assistant-title";
    >;
=======
      aria-labelledby="chat-assistant-title">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      aria-labelledby="chat-assistant-title">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">;
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">;
          <div className="flex items-center space-x-3">;
            <Avatar className="h-10 w-10 border border-zion-purple/20">;
<<<<<<< HEAD
<<<<<<< HEAD
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />;
              <AvatarFallback className="bg-zion-purple/20 text-white">;
                {recipient.name.charAt(0).toUpperCase()}
=======
              <AvatarImage src={recipient && recipient.avatarUrl} alt={recipient && recipient.name} />;
              <AvatarFallback className="bg-zion-purple/20 text-white">;
                {recipient && recipient.name.charAt(0).toUpperCase()}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <AvatarImage src={recipient && recipient.avatarUrl} alt={recipient && recipient.name} />;
              <AvatarFallback className="bg-zion-purple/20 text-white">;
                {recipient && recipient.name.charAt(0).toUpperCase()}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h2 id="chat-assistant-title" className="font-medium text-white">;
<<<<<<< HEAD
<<<<<<< HEAD
      aria-labelledby="chat-assistant-title"
    >
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-zion-purple/20">
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />
              <AvatarFallback className="bg-zion-purple/20 text-white">
                {recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 id="chat-assistant-title" className="font-medium text-white">
                {recipient.name}
              </h2>
              {recipient.role && (
                <div className="text-xs text-zion-slate">{recipient.role}</div>
              )}
            </div>
          </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {recipient && recipient.name}
              </h2>;
              {recipient && recipient.role && (;
                <div className="text-xs text-zion-slate">{recipient && recipient.role}</div>;
              )}
            </div>;
          </div>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
<<<<<<< HEAD
<<<<<<< HEAD
            onClick = {onClose,}
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
            onClick = {onClose,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick={onClose}


            aria-label="Close chat"
<<<<<<< HEAD
            <X className="h-5 w-5" />
          </Button>
        </div>
<<<<<<< HEAD
            onClick = {onClose,}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            aria-label="Close chat">;
            <X className="h-5 w-5" />;
          </Button>;
        </div>;
<<<<<<< HEAD
                {recipient.name}
              </h2>;
              {recipient.role && (;
                <div className="text-xs text-zion-slate">{recipient.role}</div>;
              )}
            </div>;
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="text-white hover:bg-zion-purple/10 rounded-full";
            onClick={onClose}
            aria-label="Close chat";
          >;
            <X className="h-5 w-5" />;
          </Button>;
        </div>;
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Context Header (Optional) */}
        {contextHeader && (;
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">;
            {contextHeader}
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        )}
;
        {/* Messages */}
            onClick = {onClose,}
            onClick={onClose}
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        {/* Context Header (Optional) */}
        {contextHeader && (
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">
            {contextHeader}
          </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )}
        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          aria-live="polite"
        >
          {currentMessages.length === 0 ? (
            <div className="text-center text-zion-slate py-8 space-y-4">
              <p>Start a conversation with {recipient.name}</p>
              {starterQuestions.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {starterQuestions.map((q, idx,) => (
                    <Button
                      key = {idx,}
                      variant="outline"
                      className="text-xs"
                      onClick = {(,) => handleSendMessage(q),}
                    >
<<<<<<< HEAD
        <div;
          className="flex-1 overflow-y-auto p-4 space-y-4";
          aria-live="polite";
        >;
          {currentMessages.length === 0 ? (;
            <div className="text-center text-zion-slate py-8 space-y-4">;
              <p>Start a conversation with {recipient.name}</p>;
              {starterQuestions.length > 0 && (;
                <div className="flex flex-wrap justify-center gap-2">;
                  {starterQuestions.map((q, idx) => (;
                    <Button;
                      key={idx}
                      variant="outline";
                      className="text-xs";
                      onClick={() => handleSendMessage(q)}
                    >;                      {q}
                    </Button>;
                </div>;
              )}
            </div>;
          <div ref={messagesEndRef} />;
        </div>;
          ) :(;
            currentMessages.map((msg) => (;
              <ChatMessage key={msg.id} role={msg.role} message={msg.message} />;
            ));          )}
          <div ref={messagesEndRef} />;
        </div>;
;
        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">;
          <ChatInput onSend={handleSendMessage} />;
        </div>;
      </div>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {starterQuestions.map((q, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="text-xs"
                      onClick={() => handleSendMessage(q)}
                    >;


                      {q}
<<<<<<< HEAD
<<<<<<< HEAD
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            currentMessages.map((msg,) => (
              <ChatMessage key={msg.id} role={msg.role} message={msg.message} />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
      {showGuestModal && guestMessage && (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Button>;
                  ))}
                </div>;
              )}
            </div>;
          ) : (;
            currentMessages && currentMessages.map((msg,) => (;
              <ChatMessage key={msg && msg.id} role={msg && msg.role} message={msg && msg.message} />;
            ));
          )}

          <div ref={messagesEndRef} />;
        </div>;

        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">;
          <ChatInput onSend={handleSendMessage} />;
        </div>;
      </div>;

      {showGuestModal && guestMessage && (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
<<<<<<< HEAD
<<<<<<< HEAD
;
      {showGuestModal && guestMessage && (;
        <div;
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4";
          role="dialog";
          aria-modal="true";
          aria-labelledby="confirm-message-title";
        >;
          <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md">;
            <h3;
              id="confirm-message-title";
              className="text-lg font-semibold text-white mb-4";
            >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          aria-labelledby="confirm-message-title">;
          <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md">;
            <h3
              id="confirm-message-title"
              className="text-lg font-semibold text-white mb-4">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Confirm Message;
            </h3>;
            <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words">;
              {guestMessage}
            </p>;
            <div className="flex justify-end space-x-3">;
<<<<<<< HEAD
<<<<<<< HEAD
                onClick = {handleModalCancel,}
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                variant="outline"
                onClick = {handleModalCancel,}
                onClick={handleModalCancel}
<<<<<<< HEAD
                className="text-white border-zion-purple hover:bg-zion-purple/10"
              >
                Cancel
              </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Button
                onClick = {handleModalSendConfirm,}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                onClick = {handleModalSendConfirm,}
                onClick={handleModalSendConfirm}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
};
};
}
;
}

                onClick = {handleModalCancel,}
                className="text-white border-zion-purple hover:bg-zion-purple/10">;
                Cancel;
              </Button>;
              <Button
                onClick = {handleModalSendConfirm,}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
  }, [;
    is_guest,
    initial_messages,
    storedGuestMessages,
    setStoredGuestMessages,
    recipient.id]),
  // Effect for logged - in user messages;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      // Update state if initial_messages prop changes (e.g. new conversation loaded);
      setLoggedInMessages (initial_messages);
    }
  }, [is_guest, initial_messages, recipient.id]),
  // Determine current_messages and setCurrentMessages based on is_guest;
  const current_messages = is_guest ? displayGuestMessages : loggedInMessages,
  const setCurrentMessages = (
    valueOrFn: Message[] | ((val: Message[], ) =>: any Message[]),
  ) => {
    // Check condition
if ( {) {
  $2
}
      const new_messages =;
        valueOrFn instanceof Function;
          ? valueOrFn (displayGuestMessages);
          : valueOrFn,
      setDisplayGuestMessages (new_messages),
      setStoredGuestMessages (new_messages), // Always update local_storage for guests;
    } else {
      const new_messages =;
        valueOrFn instanceof Function ? valueOrFn (loggedInMessages) : valueOrFn,
      setLoggedInMessages (new_messages);
    }
  },
  const debouncedApiCallParams = use_debounce (pendingApiCallParams, 3000),
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      onSendMessage (debouncedApiCallParams.message,
        debouncedApiCallParams.conversation_id);
    }
  }, [debouncedApiCallParams, onSendMessage]),
  useEffect ((, ) => {
    scrollToBottom ();
  }, [current_messages]), // current_messages will correctly refer to either guest or logged - in state;
  const scrollToBottom = () =>: any {
    messagesEndRef.current?.scrollIntoView ({ behavior: 'smooth' });
  },
  const handleSendMessage = async (message_content: string, ) => {
    if () return, ) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      // Logged - in user;
      const new_message: Message = {
        id: Date.now ().to_string (),
        role: 'user',
        message: message_content,
        timestamp: new Date ()},
      setCurrentMessages ((prev: Message[], ) => [...prev, new_message]),
      setPendingApiCallParams ({ message: message_content, conversation_id });
    } else {
      // Guest user;
      setGuestMessage (message_content),
      setShowGuestModal (true);
    }
  },
  const handleModalSendConfirm = () =>: any {
    // Check condition
if (return, ) {
  $2
}
    const new_message: Message = {
      id: Date.now ().to_string (),
      role: 'user',
      message: guest_message,
      timestamp: new Date ()},
    setCurrentMessages ((prev: Message[], ) => [...prev, new_message]), // This will now use the guest - aware setCurrentMessages;
    setPendingApiCallParams ({ message: guest_message, conversation_id }),
    setShowGuestModal (false),
    setGuestMessage (null);
  },
  const handleModalCancel = () =>: any {
    setShowGuestModal (false),
    setGuestMessage (null);
  },
  useEffect ((, ) => {
    // Check condition
if (return, ) {
  $2
}
    const handleKeyDown = (e: KeyboardEvent, ) =>: any {
      // Check condition
if ( {) {
  $2
}
        e.prevent_default (),
        on_close ();
      }
    },
    document.addEventListener ('keydown', handleKeyDown),
    return () => document.removeEventListener ('keydown', handleKeyDown);
  }, [is_open, on_close]),
  // Check condition
if (return null, ) {
  $2
}
  return (
    <div;
      className="fixed inset - 0 bg - black / 50 z - 50 flex items - center justify - center p - 4";
      role="dialog";
      aria - modal="true";
      aria - labelledby="chat - assistant - title";
    >;
      <div className="w - full max - w-xl bg - zion - blue rounded - lg shadow - xl overflow - hidden flex flex - col max - h-[80vh]">;
        {/* Header */}
        <div className="bg - zion - blue - dark p - 3 flex items - center justify - between border - b border - zion - purple / 20">;
          <div className="flex items - center space - x-3">;
            <Avatar className="h - 10 w - 10 border border - zion - purple / 20">;
              <AvatarImage src={recipient.avatar_url} alt={recipient.name} />;
              <AvatarFallback className="bg - zion - purple / 20 text - white">;
                {recipient.name.char_at (0).toUpperCase ()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h2 id="chat - assistant - title" className="font - medium text - white">;
                {recipient.name}
              </h2>;
              {recipient.role && (
                <div className="text - xs text - zion - slate">{recipient.role}</div>)}
            </div>;
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="text - white hover:bg - zion - purple / 10 rounded - full";
            on_click = {on_close, }
            aria - label="Close chat";
          >;
            <X className="h - 5 w - 5" />;
          </Button>;
        </div>;
        {/* Context Header (Optional) */}
        {context_header && (
          <div className="border - b border - zion - purple / 20 bg - zion - blue - dark / 50 p - 3">;
            {context_header}
          </div>)}
        {/* Messages */}
        <div;
          className="flex - 1 overflow - y-auto p - 4 space - y-4";
          aria - live="polite";
        >;
          {current_messages.length === 0 ? (
            <div className="text - center text - zion - slate py - 8 space - y-4">;
              <p > Start a conversation with {recipient.name}</p>;
              {starter_questions.length > 0 && (
                <div className="flex flex - wrap justify - center gap - 2">;
                  {starter_questions.map ((q, idx, ) => (
                    <Button;
                      key = {idx, }
                      variant="outline";
                      className="text - xs";
                      on_click = {(, ) => handleSendMessage (q), }
                    >;
                      {q}
                    </Button>))}
                </div>)}
            </div>) : (
            current_messages.map ((msg, ) => (
              <ChatMessage key={msg.id} role={msg.role} message={msg.message} />)))}
          <div ref={messagesEndRef} />;
        </div>;
        {/* Input */}
        <div className="p - 3 border - t border - zion - purple / 20 bg - zion - blue - dark / 30">;
          <ChatInput on_send={handleSendMessage} />;
        </div>;
      </div>;
      {showGuestModal && guest_message && (
        <div;
          className="fixed inset - 0 bg - black / 60 z-[100] flex items - center justify - center p - 4";
          role="dialog";
          aria - modal="true";
          aria - labelledby="confirm - message - title";
        >;
          <div className="bg - zion - blue - darker p - 6 rounded - lg shadow - xl w - full max - w-md">;
            <h3;
              id="confirm - message - title";
              className="text - lg font - semibold text - white mb - 4";
            >;
              Confirm Message;
            </h3>;
            <p className="text - zion - slate mb - 6 whitespace - pre - wrap break - words">;
              {guest_message}
            </p>;
            <div className="flex justify - end space - x-3">;
              <Button;
                variant="outline";
                on_click = {handleModalCancel, }
                className="text - white border - zion - purple hover:bg - zion - purple / 10";
              <Button;
                variant="outline";
                onClick={handleModalCancel}
                className="text-white border-zion-purple hover:bg-zion-purple/10";
              >;
                Cancel;
              </Button>;
              <Button;
                onClick={handleModalSendConfirm}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white";
              >;
                Send;
              </Button>;
            </div>;
          </div>;
        </div>;
      )}
    </div>;
  ),; /** Optional canned questions shown when the chat is empty */ starterQuestions?: string[] ;
}const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage< Message[] > (isGuest ? localStorageKey : 'dummy-guest-key', //Use a dummy key if not guest to prevent LS write for logged-in users []);
const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]> ([]);
const [loggedInMessages, setLoggedInMessages] = useState<Message[]> (initialMessages);
//Effect for guest user messages useEffect ( () => {;
  if (isGuest) {;
  //Priority: initialMessages prop > localStorage > empty array if (initialMessages && initialMessages.length > 0) {;
  ;
}
}, [ isGuest;
initialMessages;
storedGuestMessages;
setStoredGuestMessages;
recipient.id]);
//Effect for logged-in user messages useEffect ( () => {;
  if (!isGuest) {;
  //Update state if initialMessages prop changes (e.g. new conversation loaded) useEffect ( () => {;
  if (debouncedApiCallParams) {;
  onSendMessage (if (!isGuest) {;
  //Logged-in user const newMessage: Message = {;
  setShowGuestModal (false);
setGuestMessage (null) ;
};
if (!isOpen) return null;
return (<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="chat-assistant-title" >) ";
}</div> </div> <Button > <X className="h-5 w-5" /> </Button> </div> {;
  contextHeader ;
}</div>) ;
}{;
  /* Messages */ ";
}<div className="flex-1 overflow-y-auto p-4 space-y-4" aria-live="polite" > > {;
  q ;
}</Button>) ) ;
}</div>) ;
}</div>) : (currentMessages.map ( (msg) => (<ChatMessage key= {;
  msg.id ;
}role= {;
  msg.role ;
}message= {;
  msg.message ;
}/>) ) ) ;
}<div ref= {;
  messagesEndRef ;
}/> </div> </div> </div> {";
  showGuestModal && guestMessage && (<div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-message-title" > <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md" > <h3 id="confirm-message-title" className="text-lg font-semibold text-white mb-4" > Confirm Message </h3> <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words" > {;
  guestMessage ";
}</p> <div className="flex justify-end space-x-3" > <Button > Cancel </Button> <Button > Send </Button> </div> </div> </div>) ;
}</div>) ;
}'"
      )}
    </div>
  );
};
};
}
}
;
;


                onClick={handleModalCancel}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                className="text-white border-zion-purple hover:bg-zion-purple/10"
              >
                Cancel
              </Button>
              <Button
<<<<<<< HEAD

=======
                onClick = {handleModalSendConfirm,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={handleModalSendConfirm}

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



        </div>)}
    </div>);
}
<<<<<<< HEAD
}

<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
