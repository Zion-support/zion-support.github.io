









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


  


  



  


      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(



              <div className={cn(

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>


export function MobileChatView() { return null; }
      setNewMessage(""),;    }



    }),;
    ;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`),;


  };
  return (


            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;





                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>





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



}

}
;




