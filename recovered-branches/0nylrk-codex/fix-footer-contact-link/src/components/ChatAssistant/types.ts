
export interface Message {_id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean;}

export interface Recipient {_id: string;
  name: string;
  avatarUrl?: string;
  role?: string;}
