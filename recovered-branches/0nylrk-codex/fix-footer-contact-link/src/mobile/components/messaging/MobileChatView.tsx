


import React, { useState } from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";
import {cn} from "@/lib/utils";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";

import React, { useState } from './react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';

  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },
  


  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center flex-1 gap-3 mx-2">
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status |"Online"}
              </p>
            </div>
          </div>
          <div className="flex">
            <Button variant="ghost" size="icon" onClick={startAudioCall}>
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={startVideoCall}>
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(

              "flex",


              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(


                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 



                "max-w-[80%] rounded-2xl px-4 py-2";
                message.isMe
                  ? "bg-primary text-primary-foreground rounded-tr-none"
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 


                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className={cn(


                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml - 1">;
                    {message.status === 'read' ? '✓✓' : '✓'}



  };
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault(),;
      handleSend();
    }
  };
  const startVideoCall = () => {;
    const roomId = `mobile-${contact && contact.id}`;
    toast && toast.success("Starting video call", {;
      description: `Connecting with ${contact && contact.name}...`;
    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`);
  };
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact && contact.id}`;
    toast && toast.success("Starting audio call", {;
      description: `Connecting with ${contact && contact.name}...`;
    });
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`);
  };


              <p>{message && message.content}</p>;
              <divclassName={cn(
                "text-xs mt-1 flex justify-end"
                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>;
                {message && message.timestamp}
                {message && message.isMe && message && message.status && (;
                  <span className="ml-1">;
                    {message && message.status === 'read' ? '✓✓' : '✓'}



                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>


                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;


                {message.timestamp}
                {message.isMe && message.status && (
                  <span className="ml-1">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>



                )}
              </div>;
            </div>;
          </div>;
        ))}

      </div>;
      ;

      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;


          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}

          ;
          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
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

            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;



