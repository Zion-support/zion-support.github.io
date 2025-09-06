

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  avatarUrl?: string;

  role?: string;
}


  avatar_url?: string;
  role?: string;
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
