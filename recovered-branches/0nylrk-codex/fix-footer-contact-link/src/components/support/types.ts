<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { ReactNode  } from './react';

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD
<<<<<<< HEAD
  lastUpdated: string,
  tags: string[]
}

export interface HelpCategory {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

export interface HelpCategory {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
  articles: HelpArticle[]
=======
  articles: HelpArticle[];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



export interface SupportTicket {;


  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
}

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  updatedAt: string;
}
;

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
