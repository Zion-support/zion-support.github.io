import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",
import { cn } from "@/lib/utils",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface Message {

  id: string
  content: string
  timestamp: string
  isMe: boolean

  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read'
}
interface MobileChatViewProps {
  contact: {

<<<<<<< HEAD


=======

    id: string
    name: string
    avatar?: string;
    status?: string
  }
  messages: Message[]
  onBack: () => void
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface Message {
  id: string,
  content: string,
  timestamp: string,
<<<<<<< HEAD



=======
  is_me: boolean,
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface MobileChatViewProps {
  contact: {
    id: string
    name: string
    avatar?: string;
<<<<<<< HEAD




  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'


}



  const [newMessage, setNewMessage] = useState(""),
  const navigate = useNavigate(),
  
  const handleSend = () => {"
    if (newMessage.trim() !== "") {}
      onSendMessage(newMessage),"
      setNewMessage("")
;
export function MobileChatView() { return null; }
    }

  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;'

    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },


  
=======
    status?: string
  }
  messages: Message[]
  onBack: () => void
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
interface Message {
  id: string,
  content: string,
  timestamp: string,
>>>>>>> origin/cursor/delete-old-data-records-6bba

    const roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {

  const startVideoCall = () => {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
<<<<<<< HEAD

  


=======


  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {

    });
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }),
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  },
<<<<<<< HEAD

  

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" onClick={onBack}>

            <ChevronLeft className="h-5 w-5" />
          </Button>"

          <div className="flex items-center flex-1 gap-3 mx-2">
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>

              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
<<<<<<< HEAD

      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe "
                  ? "bg-primary text-primary-foreground rounded-tr-none" 


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  : "bg-muted rounded-tl-none"

              )}
            >
              <p>{message.content}</p>

<<<<<<< HEAD
              <div className={cn(

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
=======

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
<<<<<<< HEAD

=======
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page;
    navigate(`/call/${roomId}`);
  },;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
    toast.success("Starting audio call", {;
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page with audio-only flag;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }

<<<<<<< HEAD
=======
    status?: string;
  }
  messages: Message[],
  on_back: () => void,
  onSendMessage: (content: string) => void;
}

      setNewMessage ("");
    }
  }
;

}
      e.prevent_default (),
      handle_send ();
    }
  }
;

      description: `Connecting with ${contact.name}...`;
    });
;
    // Navigate to video call page;`
    navigate (`/call/${room_id}`);
  }
;
  const startAudioCall = () =>: any {}`
    const room_id = `mobile - audio-${contact.id}`;"
    toast.success ("Starting audio call", {}`
      description: `Connecting with ${contact.name}...`;
    });
;
    // Navigate to video call page with audio - only flag;`
    navigate (`/call/${room_id}?audio_only = true`);
  }
;
  return ("
    <div className="flex flex - col h - full pb - safe">;"
      <header className="sticky top - 0 z - 10 bg - background border - b border - border">;"
        <div className="flex items - center h - 14 px - 4">;"
          <Button variant="ghost" size="icon" on_click={on_back}>;"
            <ChevronLeft className="h - 5 w - 5" />;
          </Button>;"

          <div className="flex items - center flex - 1 gap - 3 mx - 2">;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.char_at (0).toUpperCase ()}</AvatarFallback>;
            </Avatar>;

              <MoreVertical className="h - 5 w - 5" />;
            </Button>;
          </div>;
        </div>;

      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;
        {messages.map ((message) => (
          <div;
            key={message.id}


                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml-1">;
                    {message.status === 'read' ? '✓✓' : '✓'}

  };
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;'

    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault(),;
      handleSend();
    }
  };

    }
    const roomId = `mobile-${contact && contact.id}`;`    toast && toast.success("Starting video call", {,"
  }
  "description": `Connecting with ${contact && contact.name}...`;`    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`)`};
  const startAudioCall = () => {;
    }
    const roomId = `mobile-audio-${contact && contact.id}`;`    toast && toast.success("Starting audio call", {,"
  }
  "description": `Connecting with ${contact && contact.name}...`;`    });
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`)`};
return (  return (;
import React, { useState } from "react",;"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"

import { toast } from "sonner",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
interface Message {;
  id:string,;
  content:string,;
  timestamp:string,;
  isMe:boolean,;
  sender?:string,;
  avatar?:string,;'
  status?:'sent' | 'delivered' | 'read';}
;
interface MobileChatViewProps {;
  contact:{;
    id:string,;
    name:string,;
    avatar?:string,;
    status?:string;
  },;
  messages:Message[],;
  onBack:() => void,;
  onSendMessage:(content:string) => void;
}
;
<<<<<<< HEAD

export function MobileChatView() { return null; }
      setNewMessage(""),;    }

=======
export function MobileChatView() {;
  }
  const [newMessage, setNewMessage] = useState(""),;"
  const navigate = useNavigate(),;
  ;
    }
    if (newMessage.trim() !== "") {;"
      }
      onSendMessage(newMessage),;
      setNewMessage(""),;    }"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  ;
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {;'
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },;
  ;
<<<<<<< HEAD


    }),;
    ;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`),;

=======
    }
    const roomId = `mobile-${contact.id}`,;`    toast.success("Starting video call", {,"
  }
  "description":`Connecting with ${contact.name}...`;`    }),;
    ;
    // Navigate to video call page;
    navigate(`/call/${roomId}`),;`  },;
  ;
    }
    const roomId = `mobile-audio-${contact.id}`,;`    toast.success("Starting audio call", {,"
  }
  "description":`Connecting with ${contact.name}...`;`    }),;
    ;
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`),;`  },;
  ;
return (,;
  "description": `Connecting with ${contact.name}...`;`    }),;
    // Navigate to video call page;
    navigate(`/call/${roomId}`);`  },;
    }
  }
  "description": `Connecting with ${contact.name}...`;`    }),;
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`);`
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  ;

    }),;
    ;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`),;
  },;
  ;

    }),;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`);
  },;

    }),;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`);
<<<<<<< HEAD

  };
  return (
=======
  },;

>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button variant="ghost" size="icon" onClick={onBack}>;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD
=======
          <div className="flex items-center flex-1 gap-3 mx-2">;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className="font-medium">{contact.name}</h3>;
              <p className="text-xs text-muted-foreground">;
                {contact.status || "Online"}
              </p>;
            </div>;
          </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


          <div className="flex">;
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;
              <Phone className="h-5 w-5" />;
            </Button>;
<<<<<<< HEAD


            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;


=======
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Button variant="ghost" size="icon">;
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <p>{message && message.content}</p>;

                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>;
                {message && message.timestamp}
                {message && message.isMe && message && message.status && (;"
                  <span className="ml-1">;'
                    {message && message.status === 'read' ? '✓✓' : '✓'}

<<<<<<< HEAD

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>



=======
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>

                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {message.timestamp}
                {message.isMe && message.status && ("
                  <span className="ml-1">'
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
<<<<<<< HEAD


                )}
              </div>;
            </div>;
          </div>;
        ))}


      </div>;


      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;


=======


                )}

          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}


            <Send className="h-5 w-5" />;

          <Button
            size="icon" 
            onClick={handleSend}
            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;

          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}

            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" : ""}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )

            placeholder="Type a message...";
            className="flex-1";
          />;
          ;
          <Button ;
            size="icon" ;
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" :""}
          >;


>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Send className="h-5 w-5" />;
            disabled={!newMessage && newMessage.trim()}"
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;"
</Button>"
            <Send className="h-5 w-5" />;"
</Send>

          </Button>;
        </div>;
      </div>;
    </div>;


                  </span>)}
              </div>;
            </div>;
          </div>))}

          </Button>;
          <Input;
            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}

          />;
          <Button;"
            size="icon";
            on_click={handle_send}
            disabled={!new_message.trim ()}"
            className={!new_message.trim () ? "opacity - 50" : ""}

          </Button>;
        </div>;
      </div>;
    </div>);
<<<<<<< HEAD

}

}
;




=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
