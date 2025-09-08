

import { format  } from 'date-fns';
import { MessageSquare  } from 'lucide-react';
import { useMessaging  } from '@/context/MessagingContext';
import { Button  } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { AspectRatio  } from '@/components/ui/aspect-ratio';
import { useAuth  } from '@/hooks/useAuth';
import { MessageBubble  } from './MessageBubble';
import { DateDivider } from './DateDivider';
export function ConversationDetailView() {  const { user } = useAuth();
  const {
    activeConversation;

  const {
    }
    activeConversation;
    activeMessages,
sendMessage
    loadMessages
  } = useMessaging();
  const [messageText, setMessageText] = useState('');'
  const messagesEndRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD

      }

=======
export function ConversationDetailView() {
  const { user } = useAuth($2);
  const { 
    activeConversation,
    activeMessages, 
    sendMessage, 
    loadMessages
  } = useMessaging($2);
  const [messageText, setMessageText] = useState($2);
  const messagesEndRef = $2;
  useEffect(() => {
    }
    if (activeConversation) {
      loadMessages(activeConversation.id)
    }
  }, [activeConversation?.id, loadMessages]);import React, { useState, useEffect, useRef } from 'react',;
import { format } from 'date-fns',;
import { MessageSquare } from 'lucide-react',;
import { useMessaging } from '@/context/MessagingContext',;
import { Button } from '@/components/ui/button',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { AspectRatio } from '@/components/ui/aspect-ratio',;
import { useAuth } from '@/hooks/useAuth',;
import { MessageBubble } from './MessageBubble',;
import { DateDivider } from './DateDivider',;
export function ConversationDetailView() { return null; }

  const { user } = useAuth(),;
  const {;
    }
    activeConversation,;
    activeMessages,;
    sendMessage,;
    loadMessages;

  } = useMessaging(),;'
  const [messageText, setMessageText] = useState(''),;
  const messagesEndRef = useRef<HTMLDivElement>(null),;
  useEffect(() => {;
    }
    if (activeConversation) {;
      }
      loadMessages(activeConversation.id);
    }
  }, [activeConversation?.id, loadMessages]),

import React, { useState, useEffect, useRef } from 'react';
import {MessageSquare} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {Button} from '@/components / ui / button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {AspectRatio} from '@/components / ui / aspect - ratio';
import {use_auth} from '@/hooks / use_auth';
import {MessageBubble} from './MessageBubble';

import {DateDivider} from './DateDivider';

  }, [activeConversation?.id, loadMessages]),

  const scrollToBottom = () => {
    }
    messagesEndRef.current?.scrollIntoView({ 'behavior': 'smooth' })'
  },
  const handleSendMessage = async ('e': React.FormEvent) => {
    }
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault(),
    if (!messageText.trim() || !activeConversation) return,

    await sendMessage(activeConversation.id, messageText),
    setMessageText('')'
  },
  
  if (!activeConversation) {  useEffect(() => {;
    scrollToBottom();
  }, [activeMessages]);

  const scrollToBottom = () => {;
    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
};

  const handleSendMessage = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!messageText && messageText.trim() || !activeConversation) return,;

    await sendMessage(activeConversation && activeConversation.id, messageText);
    setMessageText('')
};

  if (!activeConversation) {;
  
  if (!activeConversation) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">;"
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />;"
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>;"
        <p className="text-zion-slate text-center max-w-md">;
          Select a conversation from the list to view and send messages.;
        </p>;
      </div>;
    );
  }
<<<<<<< HEAD


  

  // Group messages by date

  const groupedMessages: { date: string, messages: any[] }[] = []
  activeMessages.forEach(message => {'
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd');
    const existingGroup = groupedMessages.find(group => group.date === messageDate);
    if (existingGroup) {}
      existingGroup.messages.push(message)
    } else {
      }
      groupedMessages.push({
        }
        'date': messageDate;
    'messages': [message]
      })
    }
  });        date: messageDate,;
        messages: [message];
      });
    }

  }),
  
  const hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description),
  return (
    <div className="flex-1 flex flex-col h-full">;
      {/* Header */}            </div>;
          </div>;
        </div>;
      </div>;            Send;
          </Button>;
        </form>;
      </div>;

}
    </div>);
    </div>;
  ); 
}
});
<AvatarImage src= {
  activeConversation.other user.avatar url 
}alt= {
  activeConversation.other user.name 
}/> activeConversation.other user.user type === 'employer' ? 'Employer' : activeConversation.other user.user type === 'admin' ? 'Admin' : 'User' 
}</div> </div> </div> </div> {
  activeConversation.context data.image url && (<div className="w-16 h-16 flex-shrink-0" > <AspectRatio ratio= {
  1/1 
}className="rounded bg-zion-blue-dark/30 overflow-hidden" > <img /> </AspectRatio> </div>) 
}<div> {
  activeConversation.context data.description 
}</div>) 
}</div> </div> </div>) 
}<p>No messages yet. Start the conversation!</p> </div>) : (groupedMessages.map ( (group, groupIndex) => (<div key= {
  group.date 
}> <MessageBubble key= {
  message.id 
}message= {
  message 
}isUserMessage= {
  message.sender id === user?.id 
}/>) ) 
}</div> </div>) ) ) 
}<div ref= {
  messagesEndRef 
}/> </div> placeholder="Type a message..." className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-white focus: outline-none focus:ring-2 focus:ring-zion-cyan" submit"className=" bg-zion-purple hover:bg-zion-purple-dark text-white" > Send </Button> </form> </div> </div>) 
}
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df