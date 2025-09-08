import { ReactNode } from "react";
export interface HelpArticle {
export interface HelpArticle {

  id: string;
  title: string;
  content: string;
  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;


  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  name: string;
<<<<<<< HEAD

  description: string;
  icon: ReactNode;
  articles: HelpArticle[];
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
  createdAt: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
