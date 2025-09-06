export interface Message {
export interface Message {;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean
}
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  avatarUrl?: string;

  role?: string;
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
