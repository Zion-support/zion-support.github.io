<<<<<<< HEAD
<<<<<<< HEAD
export interface Message {
export interface Message {;
=======


export interface Message {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface Message {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface Recipient {
  id: string;
  name: string;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export interface Recipient {;
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface Recipient {
  id: string;
  name: string;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
