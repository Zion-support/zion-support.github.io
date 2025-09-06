
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { ReactNode  } from './react';

=======
import { ReactNode } from "react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD

  last_updated: string;
  tags: string[];

}
export interface HelpCategory {
=======

import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
  lastUpdated: string,
  tags: string[]
=======
  lastUpdated: string;
tags: string[]
}
export interface HelpCategory {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}

export interface HelpCategory {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
<<<<<<< HEAD
  articles: HelpArticle[]
}
<<<<<<< HEAD

=======



export interface SupportTicket {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  updatedAt: string;
}
;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
