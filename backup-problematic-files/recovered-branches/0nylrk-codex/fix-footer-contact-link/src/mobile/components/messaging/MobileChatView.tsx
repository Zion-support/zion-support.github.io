
import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
;
interface Message {;
  id: string;,;
  content: string;,;
  timestamp: string;,;
  isMe: boolean;,;
  sender?:string,;
  avatar?:string,;"
  status?:'sent' | 'delivered' | 'read';}
interface MobileChatViewProps {;
  contact: {;,
    name: string;,;
    avatar?:string,;
    status?:string;
  },;
  messages: Message[];,;
  onBack: () => void;,;
  onSendMessage:(content:string) => void;
}
export function MobileChatView({ contact, messages, onBack, onSendMessage } MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState(""),;"
  const navigate = useNavigate(),;
  const handleSend = () => {;"
    if (newMessage.trim() !== "") {;"
      onSendMessage(newMessage),;"
      setNewMessage(""),;    }"
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },;
  ;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
toast.success("Starting video call", {;
      description:`Connecting with ${contact.name}...`;
=======
  description: `Connecting with ${contact.name;}...`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),;
    ;
    // Navigate to video call page;
    navigate(`/call/${roomId}`),;
  },;
  ;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
toast.success("Starting audio call", {;
      description:`Connecting with ${contact.name}...`;
=======
  description: `Connecting with ${contact.name;}...`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),;
    ;
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`),;
  },;
  ;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button variant="ghost" size="icon" onClick={onBack}>;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD
          <div className="flex">;
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;
              <Phone className="h-5 w-5" />;
            </Button>;

            <Button variant="ghost" size="icon">;
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;

          <div ;
            key={message.id} ;
            className={cn(;"
              "flex",;""
              message.isMe ? "justify-end" :"justify-start";")
            )}
          >;
                "max-w-[80%] rounded-2xl px-4 py-2",;"
                message.isMe ;"
                  ? "bg-primary text-primary-foreground rounded-tr-none" ;""
                  :"bg-muted rounded-tl-none";")
              <p>{message.content}</p>;
              <div className={cn(;"
                "text-xs mt-1 flex justify-end",;""
                message.isMe ? "text-primary-foreground/80" :"text-muted-foreground";")
              )}>;                {message.timestamp}
{message.isMe && message.status && (;
                  <span className="ml-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  </span>;
                )}
              </div>;
            </div>;
          </div>;
        ))}
      </div>;
<<<<<<< HEAD
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;

          <Input;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1";
          />;
<<<<<<< HEAD
            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;

}/> <AvatarFallback> {
}  <div> </p> </div> </div>  <Button variant=" ghost"size=" icon"> <MoreVertical className="h-5 w-5"/>  </div> </div> </header> <div className="flex-1 overflow-y-auto p-4 space-y-4"> {"
  messages.map ( (message) => (<div key= {
  message.id;)
}) 
}> {
  message.isMe && message.status && (<span className="ml-1"> {"
</span>)
}</span>) 
}</div> </div> </div>) ) 
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"> <PaperclipIcon className="h-5 w-5"/> </Button> <Input > <Send className=" h-5 w-5" /> </Button> </div> </div> </div>) 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
