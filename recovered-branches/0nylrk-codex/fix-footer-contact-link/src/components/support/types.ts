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