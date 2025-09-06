
<<<<<<< HEAD
import { ReactNode } from "react";
=======
import { ReactNode  } from './react';

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export interface HelpArticle {
  id: string;
  title: string;
  content: string;

  last_updated: string;
  tags: string[];

}
export interface HelpCategory {
<<<<<<< HEAD
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
  lastUpdated: string,
  tags: string[]
}

export interface HelpCategory {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[]
}
<<<<<<< HEAD
export interface SupportTicket {

export interface SupportTicket {;
=======



export interface SupportTicket {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";

  created_at: string;
  updated_at: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { ReactNode } from "react",
export interface HelpArticle {
  id: string,
  title: string,
  content: string,
  lastUpdated: string,
  tags: string[]
import { ReactNode } from "react",;
export interface HelpArticle {;
  id: string,;
  title: string,;
  content: string,;
  lastUpdated: string,;
  tags: string[];
}
;
export interface HelpCategory {;
  id: string,;
  name: string,;
  description: string,;
  icon: ReactNode,;
  articles: HelpArticle[];
}

export interface SupportTicket {
  id: string,
  userId: string,
  subject: string,
  message: string,
  status: "open" | "in-progress" | "resolved" | "closed",
  priority: "low" | "medium" | "high",
  createdAt: string,
  updatedAt: string
;
export interface SupportTicket {;
  id: string,;
  userId: string,;
  subject: string,;
  message: string,;
  status: "open" | "in-progress" | "resolved" | "closed",;
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
}
;
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
