
export interface Message {;
  id:string,;
  role:'user' | 'assistant',;
  message:string,;
  timestamp:Date,;
  read?:boolean;
}
<<<<<<< HEAD
;
export interface Recipient {;
  id:string,;
  name:string,;
  avatarUrl?:string,;
  role?:string;
}
=======

export interface Recipient {
  id: string,
  name: string,
  avatarUrl?: string,
  role?: string
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
