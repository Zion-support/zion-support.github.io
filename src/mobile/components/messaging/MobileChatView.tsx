
export function MobileChatView({
  contact
  messages
  onBack
  onSendMessage
}: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState('')
  const router = useRouter()
  const handleSend = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage)
      setNewMessage('')

import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useRouter } from 'next/router',
import { toast } from "sonner",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button
=======
            variant='ghost'
            size='icon'
            onClick={onBack}
            aria-label='Go back'          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <div className='flex items-center flex-1 gap-3 mx-2'>
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center flex-1 gap-3 mx-2">
=======
              aria-label='Start audio call'>;
              <Phone className='h-5 w-5' />;
            </Button>;


            <Button
              variant='ghost'
              size='icon'
              onClick={startVideoCall}
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status || "Online"}
              </p>
            </div>
          </div>
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
            </Button>
          </div>
        </div>
      </header>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                    {message.status === 'read' ? '✓✓' : '✓'}

              </div>;
            </div>;
          </div>;
        ))}
      </div>

          </Button>
          <Input
            value={newMessage}
          </Button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
