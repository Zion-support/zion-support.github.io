

export interface Message {
export interface Message {;
=======
=======
export interface Message {;



export interface Recipient {
  id: string;
  name: string;
==============
export interface Recipient {;
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
}
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  avatarUrl?: string;

  role?: string;
}

;
;
=======

  avatar_url?: string;
  role?: string;
}

=======
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
