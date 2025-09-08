<<<<<<< HEAD
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean;
}

export interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: {
    id: string;
    name: string;
    avatarUrl?: string;
    role?: string;
  };
  conversationId?: string;
  initialMessages?: Message[];
  onSendMessage: (message: string, conversationId?: string) => Promise<void>;
  contextHeader?: ReactNode;
}

export function ChatAssistant({
  isOpen,
  onClose,
  recipient,
  conversationId,
  initialMessages = [],
  onSendMessage,
  contextHeader
}: ChatAssistantProps) {
  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);
<<<<<<< HEAD
