

import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useRouter  } from 'next/router';
import { toast } from "sonner";

interface Message {
  id: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  content: string;
  timestamp: string;
id: string;,
  content: string;
  timestamp: string;,
pr-12325
  isMe: boolean;
  sender?: string;
  avatar?: string;

  status?: 'sent' | 'delivered' | 'read';
interface MobileChatViewProps {;
  contact: {;,
    id: string;,
    name: string;,
    avatar?: string;

    status?: string
  },
  messages: Message[];,
  onBack: () => void;,
  onSendMessage: (content:,  string) => void,
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void


                {message.timestamp}
                {message.isMe && message.status && (;
                  <span className="ml-1">;
                    {message.status === 'read' ? '✓✓' : '✓'}'
              <div className={cn(;
                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
                {message.timestamp}
                {message.isMe && message.status && (;
                  <span className="ml-1">;

                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>;
                )}
              </div>;
            </div>;
          </div>;
        ))}

          </Button>
          <Input value={newMessage}
            onChange={e = /> setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...''
            className='flex-1'          />'
          <Button
            size='icon''
            onClick={handleSend}
            disabled={!newMessage.trim()}

          </Button>
          <Input value={newMessage}
            onChange={e = /> setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...''
            className='flex-1'          />'
          <Button
            size='icon''
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}'
            aria-label='Send message'          >'
            <Send className='h-5 w-5' />'
          </Button>
        </div>
      </div>;
    </div>;
  )
};
}
}

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

      </div>;

            <ChevronLeft className='h - 5 w - 5' />;

          <div className='flex items - center flex - 1 gap - 3 mx - 2'>;

              <AvatarImage src={contact.avatar} alt={contact.name} />;


              <h3 className='font - medium'>{contact.name}</h3>;
              <p className='text - xs text - muted - foreground'>;
              on_click={startAudioCall}
              aria - label='Start audio call'            >;

              <Phone className='h - 5 w - 5' />;

              on_click={startVideoCall}
              aria - label='Start video call'            >;

              <Video className='h - 5 w - 5' />;

            <Button variant='ghost' size='icon' aria - label='More options'>;

              <MoreVertical className='h - 5 w - 5' />;

      </header>;
            <div;
              className={cn(
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe;
                  ? 'bg-primary text-primary-foreground rounded-tr-none
                  : 'bg-muted rounded-tl-none)
              )}            >
              <p>{message.content}</p>

                  'text-xs mt-1 flex justify-end',
                    ? 'text-primary-foreground/80
                    : 'text-muted-foreground)
                )}

      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
      <div className="flex-1 overflow-y-auto p-4 space-y-4">"
            key={message.id} 
            className={cn("
              "flex",""
              message.isMe ? "justify-end" : "justify-start"")
                "max-w-[80%] rounded-2xl px-4 py-2","
                message.isMe;"
                  ? "bg-primary text-primary-foreground rounded-tr-none"""
                  : "bg-muted rounded-tl-none"")
              <div className={cn("
                "text-xs mt-1 flex justify-end",""
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"")
              )}>
    <div className="flex flex-col h-full pb-safe">;"
      <header className="sticky top-0 z-10 bg-background border-b border-border">;"
        <div className="flex items-center h-14 px-4">;"
            variant="ghost";""
            size="icon";"
            aria-label="Go back";"
          >;
            <ChevronLeft className="h-5 w-5" />;"

          ;"
          <div className="flex items-center flex-1 gap-3 mx-2">;"


              <AvatarFallback>{contact.name.charAt(0).toUpperCase()};
              <h3 className="font-medium">{contact.name}</h3>;""
              <p className="text-xs text-muted-foreground">;"
          </div>;"
          <div className="flex">;"
              onClick={startAudioCall}"
              aria-label="Start audio call";"
              <Phone className="h-5 w-5" />;"

              onClick={startVideoCall}"
              aria-label="Start video call";"
              <Video className="h-5 w-5" />;"

            <Button variant="ghost" size="icon" aria-label="More options">;"
              <MoreVertical className="h-5 w-5" />;"

      </header>;"
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;"
            key={message.id} ;
            className={cn(;"
              "flex",;""
              message.isMe ? "justify-end" : "justify-start";")
                "max-w-[80%] rounded-2xl px-4 py-2";"
                  ? "bg-primary text-primary-foreground rounded-tr-none";""
                  : "bg-muted rounded-tl-none";")
              <p>{message.content}</p>;
                className={cn ("
                  'text - xs mt - 1 flex justify - end',
                  message.is_me;
                    ? 'text - primary - foreground / 80';')
                    : 'text - muted - foreground')}
                  <span className="ml-1">;"
</span>
      <div className="sticky bottom-0 bg-background border-t border-border p-2">"
        <div className="flex items-center gap-2">"
          <Button variant="ghost" size="icon" aria-label="Attach file">"
            <PaperclipIcon className="h-5 w-5" />"

          <Input;
            value={newMessage}

            onChange={e => setNewMessage(e.target.value)}

            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : }
            aria-label='Send message'          >

            <Send className='h-5 w-5' />






            onChange={(e) => setNewMessage(e.target.value)}

            disabled={!newMessage.trim()}"
            className={!newMessage.trim() ? "opacity-50" : ""}""
            aria-label="Send message""
            <Send className="h-5 w-5" />"

pr-12325

      <div className='sticky bottom-0 bg-background border-t border-border p-2'>;
        <div className='flex items-center gap-2'>;
          <Button variant='ghost' size='icon' aria-label='Attach file'>;
            <PaperclipIcon className='h-5 w-5' />;
          </Button>;

          <Input
            value={newMessage}

            onChange={(e) => setNewMessage(e.target.value)}

            onKeyDown={handleKeyDown}

            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />

          </Button>
        </div>
      </div>
    </div>
  )
            placeholder='Type a message...';
            className='flex-1'          />;
          <Button
            size='icon''
            onClick={handleSend}
            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? 'opacity-50' : ''}'
            aria-label='Send message'>;
            <Send className='h-5 w-5' />;
          </Button>;
        </div>;
      </div>;
    </div>;
  );
}
                  </span>)}
              </div>;
            </div>;
          </div>))}
      </div>;
      <div className='sticky bottom - 0 bg - background border - t border - border p - 2'>;
        <div className='flex items - center gap - 2'>;
          <Button variant='ghost' size='icon' aria - label='Attach file'>;
            <PaperclipIcon className='h - 5 w - 5' />;
          </Button>;
          <Input ;
            value={new_message}
            on_change={e = /> setNewMessage (e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...';
            className='flex - 1'          />;
          <Button;
            size='icon';
            on_click={handle_send}
            disabled={!new_message.trim ()}
            className={!new_message.trim () ? 'opacity - 50' : ''}'
            aria - label='Send message'          >;
            <Send className='h - 5 w - 5' />;
          </Button>;
        </div>;
      </div>;
    </div>);
}
}
;
}
;
  );
origin/cursor/automate-test-improve-and-merge-code-2533

            <PaperclipIcon className='h-5 w-5' />;





            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? 'opacity-50' : }
            aria-label='Send message'>;

            <Send className='h-5 w-5' />;

                  </span>)}
          </div>))}
      <div className='sticky bottom - 0 bg - background border - t border - border p - 2'>;
        <div className='flex items - center gap - 2'>;
          <Button variant='ghost' size='icon' aria - label='Attach file'>;

            <PaperclipIcon className='h - 5 w - 5' />;

            value={new_message}
            on_change={e => setNewMessage (e.target.value)}

            on_click={handle_send}
            disabled={!new_message.trim ()}
            className={!new_message.trim () ? 'opacity - 50' : }
            aria - label='Send message'          >;

            <Send className='h - 5 w - 5' />;

    </div>);`;
pr-12325
