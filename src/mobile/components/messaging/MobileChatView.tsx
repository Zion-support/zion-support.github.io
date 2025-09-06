

import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useRouter } from 'next/router',
import { toast } from "sonner",
interface Message {
  id: string;
  content: string;
  timestamp: string;
  is_me: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
interface MobileChatViewProps {
  contact: {
    id: string;
    name: string;
    avatar?: string;
    status?: string;
  }
  messages: Message[];
  on_back: () => void;
  onSendMessage: (content: string) => void;
export /**
 * MobileChatView - Function description
 */
function MobileChatView() {
  const [new_message, setNewMessage] = useState ('');
  const router = use_router ();
  const handle_send = () =>: any {
    // Check condition
if (!== '') {) {
  $2
}
      onSendMessage (new_message);
      setNewMessage ('');

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState(""),
  const router = useRouter(),

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage),
      setNewMessage("")
;
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState(""),;
  const router = useRouter(),;
  const handleSend = () => {;
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");

    }
  };

  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault();
      handleSend();
    }
=======
  };

  const startVideoCall = () => {;
    const roomId = `mobile-${contact && contact.id}`;
    toast && toast.success('Starting video call', {;
      description: `Connecting with ${contact && contact.name}...`,;
    });

    // Navigate to video call page;
    router && router.push(`/call/${roomId}`);
  };

  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact && contact.id}`;
    toast && toast.success('Starting audio call', {;
      description: `Connecting with ${contact && contact.name}...`,;
    });

    // Navigate to video call page with audio-only flag;
    router && router.push(`/call/${roomId}?audioOnly=true`);
  };

  return (


  },
  
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  },
  
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  },
  

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button

            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>

              variant="ghost"
              size="icon"
              onClick={startAudioCall}
              aria-label="Start audio call"
            >
              <Phone className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={startVideoCall}
              aria-label="Start video call"
            >
              <Video className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" aria-label="More options">
              <MoreVertical className="h-5 w-5" />

            </Button>
          </div>
        </div>
      </header>

                    {message.status === 'read' ? '✓✓' : '✓'}

              </div>;
            </div>;
          </div>;
        ))}
      </div>

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
<<<<<<< HEAD
