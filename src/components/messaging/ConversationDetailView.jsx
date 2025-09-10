import React, {useState, useEffect, useRef} from 'react';
import {format} from 'date-fns';
import { MessageSquare import { useMessaging } from '@/context/MessagingContext';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {AspectRatio} from '@/components/ui/aspect-ratio';
import React, {useState, useEffect, useRef} from 'react';'''
import {format} from 'date-fns';'''
import { MessageSquare import { useMessaging } from '@/context/MessagingContext';'''
import {Button} from '@/components/ui/button';'''
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';'''
import {AspectRatio} from '@/components/ui/aspect-ratio';'''
import {useAuth} from '@/hooks/useAuth';
;
;
export function ConversationDetailView(props: any) {    const { user } = useAuth();
    const {activeConversation, activeMessages, sendMessage, loadMessages} = useMessaging();'
    const [messageText, setMessageText] = useState('');