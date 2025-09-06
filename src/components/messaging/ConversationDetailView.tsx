import React, { useState, useEffect, useRef } from 'react';
import {format} from 'date-fns';
import {MessageSquare} from 'lucide-react'
import {useMessaging} from '@/context/MessagingContext';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {AspectRatio} from '@/components/ui/aspect-ratio';
import {useAuth} from '@/hooks/useAuth';
import {MessageBubble} from './MessageBubble';
import {DateDivider} from './DateDivider';
export function ConversationDetailView() {
  const { user } = useAuth();
  const { 
    activeConversation;
    activeMessages, 
    sendMessage, 
    loadMessages
  } = useMessaging();
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  
  
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
