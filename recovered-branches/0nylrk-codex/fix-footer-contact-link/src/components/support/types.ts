<<<<<<< HEAD


import { ReactNode } from "react";

=======
import { ReactNode } from "react";
>>>>>>> origin/main
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD

  lastUpdated: string;

  tags: string[]
}
=======
import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
}

export interface HelpCategory {;  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;

import { ReactNode } from "react";"

export interface HelpArticle {
  // TODO: Implement
}
  id: string;,
  title: string;

  content: string;,
  lastUpdated: string;
  tags: string[];

export interface HelpCategory {;

  lastUpdated: string;,

>>>>>>> origin/main

  name: string;
<<<<<<< HEAD
  description: string;

  icon: ReactNode;

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

  updatedAt: string
}
=======
  description: string;,
  icon: ReactNode;
  articles: HelpArticle[];



export interface SupportTicket {;


  user_id: string;
  subject: string;,
  message: string;"
  status: "open" | "in - progress" | "resolved" | "closed";","
  priority: "low" | "medium" | "high";"
  createdAt: string;,
  updatedAt: string;
;


"
pr-12325

>>>>>>> origin/main
