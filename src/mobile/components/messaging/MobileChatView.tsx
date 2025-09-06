
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useRouter } from 'next/router';
import { toast } from "sonner";
interface Message {
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
}

interface MobileChatViewProps {
  contact: {
    id: string,
    name: string,
    avatar?: string,
    status?: string
  },
  messages: Message[],
  onBack: () => void,
  onSendMessage: (content: string) => void
}

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState($2);
  const router = useRouter($2);
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage($2);
      setNewMessage("")
    }
  },
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault($2);
      handleSend()
    }
  },
  
  const startVideoCall = $2;
    toast.success($2);
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  },
  
  const startAudioCall = $2;
    toast.success($2);
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly = $2;
  return (
    <div className = $2;
              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div 
              className = $2;
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className = $2;
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                {message.timestamp}
                {message.isMe && message.status && (
                  <span className="ml-1">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1"
          />
          
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
