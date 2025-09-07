<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ useState,useEffect,useRef,useContext } from';react' import { AuthContext } from '../../context/auth/AuthContext''';' import { useDebounce } from '../../hooks/useDebounce''';' import { useLocalStorage } from '../../hooks/useLocalStorage''';' import { ChatMessage } from './ChatMessage''';' import { ChatInput } from './ChatInput''';' import { Avatar,AvatarFallback,AvatarImage } from '@/components/ui/avatar''';' import { Button } from '@/components/ui/button''';' import { X } from 'lucide-react' import { focusManagement } from';';@/utils/accessibility' "export": function ChatAssistant({ isOpen,onClose,recipient,conversationId,initialMessages = [],onSendMessage,contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated'';
=======
import React,{ useState,useEffect,useRef,useContext } from\';react\' import { AuthContext } from \'../../context/auth/AuthContext\''\';\' import { useDebounce } from \'../../hooks/useDebounce\''\';\' import { useLocalStorage } from \'../../hooks/useLocalStorage\''\';\' import { ChatMessage } from \'./ChatMessage\''\';\' import { ChatInput } from \'./ChatInput\''\';\' import { Avatar,AvatarFallback,AvatarImage } from \'@/components/ui/avatar\''\';\' import { Button } from \'@/components/ui/button\''\';\' import { X } from \'lucide-react\' import { focusManagement } from\';\';@/utils/accessibility\' \"export\": function ChatAssistant({ isOpen,onClose,recipient,conversationId,initialMessages = [],onSendMessage,contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated\'';
const React,{ useState,useEffect,useRef,useContext } from";react" import { AuthContext } from "././context/auth/AuthContext""";" import { useDebounce } from "././hooks/useDebounce""";" import { useLocalStorage } from "././hooks/useLocalStorage""";" import { ChatMessage } from "./ChatMessage""";" import { ChatInput } from "./ChatInput""";" import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar""";" import { Button } from "@/components/ui/button""";" import { X } from "lucide-react" import { focusManagement } from";";@/utils/accessibility" export: function ChatAssistant({ isOpen,onClose,recipient,conversationId,initialMessages = [],onSendMessage,contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated"";'"'"
import _React,{ useState,useEffect,useRef,useContext } from';react' import { AuthContext } from '../../context/auth/AuthContext''';' import { useDebounce } from '../../hooks/useDebounce''';' import { useLocalStorage } from '../../hooks/useLocalStorage''';' import { ChatMessage } from './ChatMessage''';' import { ChatInput } from './ChatInput''';' import { Avatar,AvatarFallback,AvatarImage } from '@/components/ui/avatar''';' import { Button } from '@/components/ui/button''';' import { X } from 'lucide-react' import { focusManagement } from';';@/utils/accessibility' "export": function ChatAssistant({ isOpen,onClose,recipient,conversationId,initialMessages = [],onSendMessage,contextHeader }) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const ChatAssistant.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>ChatAssistant.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
