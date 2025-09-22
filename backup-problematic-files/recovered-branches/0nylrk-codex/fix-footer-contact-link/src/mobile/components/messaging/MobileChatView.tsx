
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
=======
import React, { useState } from "react";""
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react";""
import { cn } from "@/lib/utils";""
import { useNavigate } from "react-router-dom";""
import { toast } from "sonner";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
    toast.success("Starting video call", {;
      description:`Connecting with ${contact.name}...`;
=======
    toast.success("Starting video call", {,
<<<<<<< HEAD
  description:`Connecting with ${contact.name}...`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
    toast.success("Starting audio call", {;
      description:`Connecting with ${contact.name}...`;
=======
    toast.success("Starting audio call", {,
<<<<<<< HEAD
  description:`Connecting with ${contact.name}...`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button variant="ghost" size="icon" onClick={onBack}>;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
          ;
          <div className="flex items-center flex-1 gap-3 mx-2">;
"
    <div className="flex flex-col h-full pb-safe">;"
</div>"
      <header className="sticky top-0 z-10 bg-background border-b border-border">;"
</header>"
        <div className="flex items-center h-14 px-4">;"
          <Button variant="ghost" size="icon" onClick={onBack}>;"
            <ChevronLeft className="h-5 w-5" />;"

          ;"
          <div className="flex items-center flex-1 gap-3 mx-2">;"
</div>
pr-12325
            <Avatar>;

              <AvatarImage src={contact.avatar} alt={contact.name} />;

              <AvatarFallback>{contact.name.charAt(0).toUpperCase()};
            <div>;
              <h3 className="font-medium">{contact.name}</h3>;""
              <p className="text-xs text-muted-foreground">;"
</p>
              </p>;
            </div>;
<<<<<<< HEAD
          </div>;
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="flex">;
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;
              <Phone className="h-5 w-5" />;
            </Button>;
<<<<<<< HEAD

=======
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Button variant="ghost" size="icon">;
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;
<<<<<<< HEAD

=======
      ;
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {messages.map((message) => (;
=======
          </div>;"
          <div className="flex">;"
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;"
              <Phone className="h-5 w-5" />;"

            <Button variant="ghost" size="icon" onClick={startVideoCall}>;"
              <Video className="h-5 w-5" />;"

            <Button variant="ghost" size="icon">;"
              <MoreVertical className="h-5 w-5" />;"

      </header>;"
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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

=======
      ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD

=======
          ;
=======
                  <span className="ml-1">;"
</span>
                  </span>;
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;"
        <div className="flex items-center gap-2">;"
            <PaperclipIcon className="h-5 w-5" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Input;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
<<<<<<< HEAD
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1";
          />;
<<<<<<< HEAD

=======
          ;
          <Button ;
            size="icon" ;
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" :""}
          >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD

=======
  ),;}
 interface Message {
  id: string;
content: string;
timestamp: string;
isMe: boolean;
sender?: string;
avatar?: string;
status?: 'sent' | 'delivered' | 'read' 
}interface MobileChatViewProps {
  contact: {
  id: string;
name: string;
avatar?: string;
status?: string 
};
messages: Message[];
onBack: () => void;
onSendMessage: (content: string) => void 
}export function MobileChatView ({
  contact, messages, onBack, onSendMessage 
}: MobileChatViewProps) {
  const handleSend = () => {
  if (newMessage.trim () !== "") {
  onSendMessage (newMessage);
setNewMessage ("") contact.avatar 
}alt= {
  contact.name 
=======

          <Button ;"
            size="icon" ;"
            onClick={handleSend}
            disabled={!newMessage.trim()}"
            className={!newMessage.trim() ? "opacity-50" :""}"
            <Send className="h-5 w-5" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}/> <AvatarFallback> {
}  <div> </p> </div> </div>  <Button variant=" ghost"size=" icon"> <MoreVertical className="h-5 w-5"/>  </div> </div> </header> <div className="flex-1 overflow-y-auto p-4 space-y-4"> {"
  messages.map ( (message) => (<div key= {
  message.id;)
}) 
}> {
  message.isMe && message.status && (<span className="ml-1"> {"
</span>)
}</span>) 
<<<<<<< HEAD
}</div> </div> </div>) ) 
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"> <PaperclipIcon className="h-5 w-5"/> </Button> <Input > <Send className=" h-5 w-5" /> </Button> </div> </div> </div>) 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}</div> </div> </div>) ) "
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"> <PaperclipIcon className="h-5 w-5"/>  <Input > <Send className=" h-5 w-5" />  </div> </div> </div>)""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
