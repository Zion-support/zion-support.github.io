<<<<<<< HEAD
export interface Message {
=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface Message {
=======
export interface Message {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean
}
<<<<<<< HEAD
export interface Recipient {
  id: string;
  name: string;
  avatarUrl?: string;
=======
<<<<<<< HEAD
export interface Recipient {
  id: string;
  name: string;
=======

export interface Recipient {;
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  role?: string;
}

<<<<<<< HEAD
=======

  avatar_url?: string;
  role?: string;
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
