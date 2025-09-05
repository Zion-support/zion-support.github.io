
<<<<<<< HEAD
import { ReactNode } from "react",;
;
export interface HelpArticle {;
  id:string,;
  title:string,;
  content:string,;
  lastUpdated:string,;
  tags:string[];
=======
import { ReactNode } from "react",export interface HelpArticle {
  id: string,
  title: string,
  content: string,
  lastUpdated: string,
  tags: string[]
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface HelpCategory {;
  id:string,;
  name:string,;
  description:string,;
  icon:ReactNode,;
  articles:HelpArticle[];
}
<<<<<<< HEAD
;
export interface SupportTicket {;
  id:string,;
  userId:string,;
  subject:string,;
  message:string,;
  status:"open" | "in-progress" | "resolved" | "closed",;
  priority:"low" | "medium" | "high",;
  createdAt:string,;
  updatedAt:string;
}
=======

export interface SupportTicket {
  id: string,
  userId: string,
  subject: string,
  message: string,
  status: "open" | "in-progress" | "resolved" | "closed",
  priority: "low" | "medium" | "high",
  createdAt: string,
  updatedAt: string  userId: string;
  subject: string;
  message: string;
  status: &quot;open&quot; | &quot;in-progress&quot; | &quot;resolved&quot; | &quot;closed&quot;;
  priority: &quot;low&quot; | &quot;medium&quot; | &quot;high&quot;;
  createdAt: string;
  updatedAt: string;
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
