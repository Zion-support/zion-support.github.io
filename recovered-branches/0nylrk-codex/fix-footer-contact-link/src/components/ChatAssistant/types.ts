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
  avatarUrl?: string;
<<<<<<< HEAD
  role?: string
}
=======
  role?: string;
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
