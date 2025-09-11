
=======
' \' \' \' \"export\": function ChatAssistant({ isOpen,onClose,recipient,conversationId,initialMessages = [],onSendMessage,contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated\';\";\";
" " " " export: function ChatAssistant({ isOpen,onClose,recipient,conversationId,initialMessages = [],onSendMessage,contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated";";";"""<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React,{ useState,useEffect,useRef,useContext } from';react' import { AuthContext } from '../../context/auth/AuthContext''';' import { useDebounce } from '../../hooks/useDebounce''';' import { useLocalStorage } from '../../hooks/useLocalStorage''';' import { ChatMessage } from './ChatMessage''';' import { ChatInput } from './ChatInput''';' import { Avatar,AvatarFallback,AvatarImage } from '@/components/ui/avatar''';' import { Button } from '@/components/ui/button''';' import { X } from 'lucide-react' import { focusManagement } from';';@/utils/accessibility' "export": function ChatAssistant({ isOpen,onClose,recipient,conversationId,initialMessages = [],onSendMessage,contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated'';''}
