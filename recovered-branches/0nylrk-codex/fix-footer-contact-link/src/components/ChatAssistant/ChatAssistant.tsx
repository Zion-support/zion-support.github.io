import React, { useState, useEffect, useRef, ReactNode } from 'react';



import {ChatMessage} from './ChatMessage';
import {ChatInput} from './ChatInput';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";


import React, { useState, useEffect, useRef, ReactNode } from 'react',
import { ChatMessage } from './ChatMessage',
import { ChatInput } from './ChatInput',
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",



export interface Message {

  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,



  read?: boolean



    id: string,
    name: string,;

}

  read?: boolean;
}




  isOpen: boolean
  onClose: () => void
  recipient: {
    id: string
    name: string
    id: string,
    name: string,;

    avatarUrl?: string;

    role?: string

  }

  conversationId?: string;
  initialMessages?: Message[],
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,

  contextHeader?: ReactNode
}


  isOpen;
  onClose;
  recipient;
  conversationId;


import { X } from "lucide-react",
export interface Message {}
  id: string,'
  role: 'user' | 'assistant',
  message: string,

import { X } from "lucide-react",;
export interface Message {;
  id: string,;'

    }
  }, [initialMessages]),


  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return
    // Add user message to the chat
    const newMessage: Message = {

  const handleSendMessage = async (message: string) => {}
    if (!message.trim()) return;
    // Add user message to the chat;

    const newMessage: Message = {;
      id: Date && Date.now().toString(),;
      role: 'user',;
      message;
      timestamp: new Date();
    };

    setMessages((prev: Message[]) => [...prev, newMessage]);

    // Send message to recipient via the provided handler;
    await onSendMessage(message, conversationId);
  };


  if (!isOpen) return null;


      role: 'user',
      message,
      timestamp: new Date()
    },
    
    setMessages((prev: Message[]) => [...prev, newMessage]),
    
    // Send message to recipient via the provided handler;
    await onSendMessage(message, conversationId)
  },

  if (!isOpen) return null,




  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">;

      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">;
        {/* Header */}"
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">;"
          <div className="flex items-center space-x-3">;"
            <Avatar className="h-10 w-10 border border-zion-purple/20">;
              <AvatarImage src={recipient && recipient.avatarUrl} alt={recipient && recipient.name} />;"
              <AvatarFallback className="bg-zion-purple/20 text-white">;
                {recipient && recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            <div>;"
              <div className="font-medium text-white">{recipient && recipient.name}</div>;
              {recipient && recipient.role && (;"
                <div className="text-xs text-zion-slate">{recipient && recipient.role}</div>;
              )}
        {/* Context Header (Optional) */}
        {contextHeader && (;"
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">;
            {contextHeader}
          </div>;
        )}
        {/* Messages */}"
        <div className="flex-1 overflow-y-auto p-4 space-y-4">;
          {messages && messages.length === 0 ? (;"
            <div className="text-center text-zion-slate py-8">;
              <p>Start a conversation with {recipient && recipient.name}</p>;
            </div>;
          ) : (;
            messages && messages.map((msg) => (;


                role={msg.role}

                message={msg.message}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>


                key={msg && msg.id} 
                role={msg && msg.role}
                message={msg && msg.message}
              />;
            ));
          )}
          <div ref={messagesEndRef} />;
        </div>;

        {/* Input */}


        {/* Input */}

        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  )





