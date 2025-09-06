
<<<<<<< HEAD


=======
import { ReactNode  } from './react';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[]
}

<<<<<<< HEAD
export interface SupportTicket {

export interface SupportTicket {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


export interface SupportTicket {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
