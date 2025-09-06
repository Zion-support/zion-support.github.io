
 Define the shape of a message;
export interface Message {;
  id:string,;
  sender_id:string,;
  recipient_id:string,;
  content:string,;
  created_at:string,;
  read:boolean,;
  sender_name?:string,;
  sender_avatar?:string,;
  attachment_url?:string,;
  attachment_name?:string;

 Define the shape of a conversation;
export interface Conversation {;
  id:string,;
  user_id:string,;
  other_user:{;
    id:string,;
    name:string,;
    avatar_url?:string,;
    user_type?:string;
  },;
  name:string,;
  avatar_url?:string,;
  last_message?:{;
    content:string,;
    created_at:string;
  },;
  updated_at:string,;
  unread_count:number,;
  context_type?: any