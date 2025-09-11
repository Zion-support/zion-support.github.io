
import { ReactNode  } from './react';

<<<<<<< HEAD
<<<<<<< HEAD
import { ReactNode } from "react";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  last_updated: string;
  tags: string[];

}
export interface HelpCategory {
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
  lastUpdated: string,
  tags: string[]
<<<<<<< HEAD
<<<<<<< HEAD
  lastUpdated: string;
tags: string[]
}
export interface HelpCategory {
}

export interface HelpCategory {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export interface HelpCategory {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
export interface SupportTicket {
=======
  articles: HelpArticle[]
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  articles: HelpArticle[]
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export interface SupportTicket {;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
articles: HelpArticle[]
}
export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: "open" | "in-progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
updatedAt: string;
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  updatedAt: string;
}
;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
