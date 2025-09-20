interface Message {id: string;
content: string;
  timestamp: string;
isMe: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read'
interface MobileChatViewProps {
  
  contact: {,
id: string;
    name: string;
}
    avatar?: string;}
    status?: string},
