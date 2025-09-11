

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
  avatarUrl?: string;

  role?: string;
}

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
