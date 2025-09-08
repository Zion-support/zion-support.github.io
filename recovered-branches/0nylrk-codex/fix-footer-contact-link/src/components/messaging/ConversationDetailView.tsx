import React, { useState, useEffect, useRef } from 'react';



import { format  } from 'date-fns';
import { MessageSquare  } from 'lucide-react';
import { useMessaging  } from '@/context/MessagingContext';
import { Button  } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { AspectRatio  } from '@/components/ui/aspect-ratio';
import { useAuth  } from '@/hooks/useAuth';
import { MessageBubble  } from './MessageBubble';
import { DateDivider } from './DateDivider';


import {format} from 'date-fns';
import {MessageSquare} from 'lucide-react';
import {useMessaging} from '@/context/MessagingContext';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {AspectRatio} from '@/components/ui/aspect-ratio';
import {useAuth} from '@/hooks/useAuth';
import {MessageBubble} from './MessageBubble';
import {DateDivider} from './DateDivider';
export function ConversationDetailView() {;



  const { user } = useAuth();

  const {

    activeConversation;

    activeMessages;
    sendMessage;
    loadMessages;
  } = useMessaging();'
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

      }

  useEffect(() => {

    scrollToBottom()
  }, [activeMessages]),




  useEffect(() => {;

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



  



  // Group messages by date

  const groupedMessages: { date: string, messages: any[] }[] = []
  activeMessages.forEach(message => {'
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd');
    const existingGroup = groupedMessages.find(group => group.date === messageDate);
    if (existingGroup) {}
      existingGroup.messages.push(message)
    } else {}
      groupedMessages.push({}
        date: messageDate;
        messages: [message]
      })
    }

  return (
    <div className="flex-1 flex flex-col h-full">;
      {/* Header */}



        messages: [message];
      });
    }


  }),

  const hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description),


  return (
    <div className="flex-1 flex flex-col h-full">;
      {/* Header */}




              {activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 




               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>


              {activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 

{activeConversation.other_user.user_type === 'talent' ? 'Talent' :
               activeConversation.other_user.user_type === 'employer' ? 'Employer' :
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' : 

               activeConversation.other_user.user_type === 'employer' ? 'Employer' :
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>

<div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">;

            </div>;
          </div>;
        </div>;
      </div>;


                    src={activeConversation && activeConversation.context_data.image_url}
                    alt={activeConversation && activeConversation.context_data.title || "Context"}

                    className="object-cover"

                  />;
                </AspectRatio>;
              </div>;
            )}
            <div>;
              <div className="font-medium text-white mb-1">;

                {activeConversation && activeConversation.context_type === 'job' ? 'Regarding Job:' :;
                 activeConversation && activeConversation.context_type === 'talent' ? 'Regarding Talent:' :;
                 'Regarding:'}
              </div>;
              <div className="text-zion-cyan font-medium">;
                {activeConversation && activeConversation.context_data.title}
              </div>;
              {activeConversation && activeConversation.context_data.description && (;
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">;
                  {activeConversation && activeConversation.context_data.description}
                </div>;
              )}

            </div>;
          </div>;
        </div>;
      )}


      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea
            value={messageText}


            Send;
      {/* Header */}            </div>;
          </div>;
        </div>;
      </div>;            Send;
          </Button>;
        </form>;
      </div>;







}
</div>);
}
}
    </div>);
    </div>;
  ); 
}




