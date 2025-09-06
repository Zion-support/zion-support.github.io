<<<<<<< HEAD

import { ReactNode  } from './react';

export interface HelpArticle {
  id: string;
  title: string;
  content: string;

  last_updated: string;
  tags: string[];

}
export interface HelpCategory {
=======

import {ReactNode} from "react";
export interface HelpArticle {;
=======
import { ReactNode } from "react";
export interface HelpArticle {
>>>>>>> main
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[];
}



export interface SupportTicket {;


  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
}

=======

=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
