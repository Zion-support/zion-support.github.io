
<<<<<<< HEAD
<<<<<<< HEAD
import { ReactNode } from "react",
=======
import { ReactNode } from &quot;react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface HelpArticle {
  id: string,
  title: string,
  content: string,
  lastUpdated: string,
  tags: string[]
}

export interface HelpCategory {
  id: string,
  name: string,
  description: string,
  icon: ReactNode,
  articles: HelpArticle[]
}

export interface SupportTicket {
<<<<<<< HEAD
  id: string,
  userId: string,
  subject: string,
  message: string,
  status: "open" | "in-progress" | "resolved" | "closed",
  priority: "low" | "medium" | "high",
  createdAt: string,
  updatedAt: string
=======
  id: string;
=======

export interface HelpArticle {_id: string;
  title: string;
  content: string;
  lastUpdated: string;
  tags: string[];}

export interface HelpCategory {_id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[];}

export interface SupportTicket {_id: string;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  userId: string;
  subject: string;
  message: string;
  status: &quot;open&quot; | &quot;in-progress&quot; | &quot;resolved&quot; | &quot;closed&quot;;
  priority: &quot;low&quot; | &quot;medium&quot; | &quot;high&quot;;
  createdAt: string;
<<<<<<< HEAD
  updatedAt: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}
=======
  updatedAt: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
