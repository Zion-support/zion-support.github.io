
export interface Message {;

  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean
}


export interface Recipient {;
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
}

=======

export interface Message {;
  id: string,;
  role: 'user' | 'assistant',;
  message: string,;
  timestamp: Date,;
  read?: boolean;
}
;
export interface Recipient {;
  id: string,;
  name: string,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  avatarUrl?: string;

  role?: string;
}

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
