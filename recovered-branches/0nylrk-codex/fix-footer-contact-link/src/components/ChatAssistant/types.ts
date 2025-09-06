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
<<<<<<< HEAD
  avatarUrl?: string;

  role?: string;
}

=======
  avatar_url?: string;
  role?: string;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
