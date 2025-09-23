
<<<<<<< HEAD
=======





export interface HelpArticle {
  id: string;
  title: string;
  content: string;

  last_updated: string;
  tags: string[];

}
export interface HelpCategory {




import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
  lastUpdated: string,
  tags: string[]
}

export interface HelpCategory {;







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[]
}

export interface SupportTicket {

export interface SupportTicket {;

  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";

  created_at: string;
  updated_at: string;
}






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









>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
