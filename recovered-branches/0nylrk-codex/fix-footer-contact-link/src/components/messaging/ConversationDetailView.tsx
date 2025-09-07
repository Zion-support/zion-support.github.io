


import { format  } from 'date-fns';
import { MessageSquare  } from 'lucide-react';
import { useMessaging  } from '@/context/MessagingContext';
import { Button  } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { AspectRatio  } from '@/components/ui/aspect-ratio';
import { useAuth  } from '@/hooks/useAuth';
import { MessageBubble  } from './MessageBubble';
import { DateDivider } from './DateDivider';
export function ConversationDetailView() {
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
  // TODO: Implement
}
    activeConversation;

    activeMessages;
    sendMessage;
    loadMessages;
  } = useMessaging();
  const [messageText, setMessageText] = useState();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null),;

      <div className="flex-1 flex flex-col items-center justify-center p-8">;"
</div>"
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />;"
"
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>;""
        <p className="text-zion-slate text-center max-w-md">;"
</p>
        </p>;
      </div>;"
    <div className="flex-1 flex flex-col h-full">;"
    <div className="flex-1 flex flex-col h-full">"
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">"
        <div className="flex items-center gap-3">"
          <Avatar className="h-10 w-10 border border-zion-purple/20">"

            <AvatarImage;
              src={activeConversation.other_user.avatar_url}
              alt={activeConversation.other_user.name}
            />
            <AvatarFallback className="bg-zion-blue-dark text-white">"

            
          
          <div>
            <div className="font-medium text-white">"
</div>
            <div className="text-xs text-zion-slate">"
            ;
          <div>;
            <div className="font-medium text-white">;"
            <div className="text-xs text-zion-slate">;"
      <div className="p - 4 border - b border - zion - purple / 20 bg - zion - blue - dark / 30">;"
        <div className="flex items - center gap - 3">;"
          <Avatar className="h - 10 w - 10 border border - zion - purple / 20">;"

              src={active_conversation.other_user.avatar_url}
              alt={active_conversation.other_user.name}
            />;
            <AvatarFallback className="bg - zion - blue - dark text - white">;"

            <div className="font - medium text - white">;"
            <div className="text - xs text - zion - slate">;"
            </div>;
              <div className="font-medium text-white mb-1">;"
              <div className="text-zion-cyan font-medium">;"
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">;"
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;"
          <div className="text-center text-zion-slate py-12">;"
            <p>No messages yet. Start the conversation!</p>;
            <div key={group && group.date}>;
              <DateDivider date={new Date(group && group.date)} />;
              <div className="space-y-3">;"
                  <MessageBubble;
                    key={message && message.id}
                    message={message}
                    isUserMessage={message && message.sender_id === user?.id}

      <div className="p-3 border-t border-zion-purple/20">;"
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;"
</form>
          <textarea;
            value={messageText}

            onChange={(e) => setMessageText(e && e.target.value)}
</textarea>"
            onChange={(e) => setMessageText(e.target.value)}
</textarea>
          <Button;"
            type="submit"""
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;"

                    key={message.id}
                    isUserMessage={message.sender_id === user?.id}
                  />))}

            </div>)))}
        <div ref={messagesEndRef} />;
      <div className="p - 3 border - t border - zion - purple / 20">;"
        <form on_submit={handleSendMessage} className="flex items - start gap - 2">;"
            value={message_text}
            on_change={(e) => setMessageText (e.target.value)}
            type="submit";""
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";"
          >;

        </form>;
    </div>);
<AvatarImage src= {
  activeConversation.other user.avatar url;
}alt= {
  activeConversation.other user.name;"
}/> activeConversation.other user.user type === 'employer' ? 'Employer' : activeConversation.other user.user type === 'admin' ? 'Admin' : 'User

}</div> </div> </div> </div> {
  activeConversation.context data.image url && (<div className="w-16 h-16 flex-shrink-0" > <AspectRatio ratio= {"
</div>)"
}className="rounded bg-zion-blue-dark/30 overflow-hidden" > <img />  </div>)"
</img>
}<div> {
}</div>) 
}</div> </div> </div>) 
}<p>No messages yet. Start the conversation!</p> </div>) : (groupedMessages.map ( (group, groupIndex) => (<div key= {
  group.date;
}> <MessageBubble key= {
  message.id;
}message= {
  message;
}isUserMessage= {
  message.sender id === user?.id;)
}/>) ) 

}</div> </div>) ) ) 
}<div ref= {
  messagesEndRef;"
}/> </div> placeholder="Type a message..." className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-white focus: outline-none focus:ring-2 focus:ring-zion-cyan" submit"className=" bg-zion-purple hover:bg-zion-purple-dark text-white" > Send  </form> </div> </div>)"
    </div>);"