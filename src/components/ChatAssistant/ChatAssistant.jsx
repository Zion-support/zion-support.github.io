<<<<<<< HEAD
import React, {useState, useEffect, useRef, useContext } from 'react' import {AuthContext } from '../../context/auth/AuthContext'';'' import {useDebounce } from '../../hooks/useDebounce'';'' import {useLocalStorage } from '../../hooks/useLocalStorage'';'' import {ChatMessage } from './ChatMessage'';'' import {ChatInput } from './ChatInput'';'' import {Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'';'' import {Button } from '@/components/ui/button'';'' ;
import {X } from 'lucide-react' import {focusManagement } from '@/utils/accessibility' export function ChatAssistant({isOpen, onClose, recipient, conversationId, initialMessages = [], onSendMessage, contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated';";"
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef, useContext } from &apos;react&apos; import { AuthContext } from &apos;../../context/auth/AuthContext&apos;';&apos;&apos; import { useDebounce } from &apos;../../hooks/useDebounce&apos;';&apos;&apos; import { useLocalStorage } from &apos;../../hooks/useLocalStorage&apos;';&apos;&apos; import { ChatMessage } from &apos;./ChatMessage&apos;';&apos;&apos; import { ChatInput } from &apos;./ChatInput&apos;';&apos;&apos; import { Avatar, AvatarFallback, AvatarImage } from &apos;@/components/ui/avatar&apos;';&apos;&apos; import { Button } from &apos;@/components/ui/button&apos;';&apos;&apos; import { X } from &apos;lucide-react&apos; import { focusManagement } from &apos;@/utils/accessibility&apos;&apos;' export function ChatAssistant({ isOpen, onClose, recipient, conversationId, initialMessages = [], onSendMessage, contextHeader }) {} const auth = useContext(AuthContext) ;const isGuest = !auth?.isAuthenticated';";&quot;"
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef, useContext } from 'react' import { AuthContext } from '../../context/auth/AuthContext'';'' import { useDebounce } from '../../hooks/useDebounce'';'' import { useLocalStorage } from '../../hooks/useLocalStorage'';'' import { ChatMessage } from './ChatMessage'';'' import { ChatInput } from './ChatInput'';'' import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'';'' import { Button } from '@/components/ui/button'';'' import { X } from 'lucide-react' import { focusManagement } from '@/utils/accessibility' export function ChatAssistant({ isOpen, onClose, recipient, conversationId, initialMessages = [], onSendMessage, contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated';";"
<<<<<<< HEAD
""
}
=======
=======
import React, { useState, useEffect, useRef, useContext } from 'react' import { AuthContext }  from '../../context/auth/AuthContext;'' import { useDebounce }  from '../../hooks/useDebounce;'' import { useLocalStorage }  from '../../hooks/useLocalStorage;'' import { ChatMessage }  from './ChatMessage;'' import { ChatInput }  from './ChatInput;'' import { Avatar, AvatarFallback, AvatarImage }  from '@/components/ui/avatar;'' import { Button }  from '@/components/ui/button;'' import { X } from 'lucide-react' import { focusManagement }  from '@/utils/accessibility';export function ChatAssistant({ isOpen, onClose, recipient, conversationId, initialMessages = [], onSendMessage, contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated;"
"
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
