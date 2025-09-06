<<<<<<< HEAD
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean
}
export interface Recipient {
  id: string;
  name: string;
  avatar_url?: string;
  role?: string;
}
=======

export interface Message {;
  id:string,;
  role:'user' | 'assistant',;
  message:string,;
  timestamp:Date,;
  read?:boolean;
}
;
export interface Recipient {;
  id:string,;
  name:string,;
  avatarUrl?:string,;
  role?:string;
} 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
