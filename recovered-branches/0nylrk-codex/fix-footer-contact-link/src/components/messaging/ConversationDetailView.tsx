

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const {
    activeConversation;

    activeMessages
    sendMessage
    loadMessages
  } = useMessaging();
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (activeConversation) {
      loadMessages(activeConversation.id)
    }
  }, [activeConversation?.id, loadMessages]);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {format} from 'date-fns';



import {format} from 'date-fns';
=======


=======
import {format} from 'date - fns';import {MessageSquare} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {Button} from '@/components / ui / button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {AspectRatio} from '@/components / ui / aspect - ratio';
import {use_auth} from '@/hooks / use_auth';
import {MessageBubble} from './MessageBubble';
import {DateDivider} from './DateDivider';

  }, [activeConversation?.id, loadMessages]),



  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault(),
    if (!messageText.trim() || !activeConversation) return,
    
    await sendMessage(activeConversation.id, messageText),
    setMessageText('')
  },
  const scrollToBottom = () => {;
    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!messageText && messageText.trim() || !activeConversation) return,;

    await sendMessage(activeConversation && activeConversation.id, messageText);
    setMessageText('');
  };

  if (!activeConversation) {;
=======
  
  if (!activeConversation) {    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">;
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />;
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>;
        <p className="text-zion-slate text-center max-w-md">;
          Select a conversation from the list to view and send messages.;
        </p>;
      </div>;
    );
  }


  



=======
==============


=======
  // Group messages by date;
  const groupedMessages: { date: string, messages: any[] }[] = [],;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
