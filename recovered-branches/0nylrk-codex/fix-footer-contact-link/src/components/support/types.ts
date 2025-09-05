
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
=======
import { ReactNode } from "react",;
export interface HelpArticle {;
  id: string,;
  title: string,;
  content: string,;
  lastUpdated: string,;
  tags: string[];
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export interface HelpCategory {;
  id: string,;
  name: string,;
  description: string,;
  icon: ReactNode,;
  articles: HelpArticle[];
}
<<<<<<< HEAD

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
  userId: string;
  subject: string;
  message: string;
  status: &quot;open&quot; | &quot;in-progress&quot; | &quot;resolved&quot; | &quot;closed&quot;;
  priority: &quot;low&quot; | &quot;medium&quot; | &quot;high&quot;;
  createdAt: string;
  updatedAt: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;