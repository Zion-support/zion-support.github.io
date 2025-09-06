

export interface Message {;

<<<<<<< HEAD

export interface Message {;


export interface Message {
export interface Message {;
  id: string;
=======
export interface Message {export interface Message {;

export interface Message {
export interface Message {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean
}
<<<<<<< HEAD



export interface Recipient {;
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
}


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  name: string,;

  avatarUrl?: string;
=======
  name: string,;  avatarUrl?: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  role?: string;
}

<<<<<<< HEAD

  avatar_url?: string;
  role?: string;
}

;

;
;
export interface Recipient {
  id: string;
  name: string;
=======
export interface Recipient {
  id: string;
  name: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
