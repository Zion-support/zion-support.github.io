export interface HelpArticle {
  id: string;
  title: string;
  content: string;
import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
}

export interface HelpCategory {;
  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;
}

export interface HelpCategory {;
  id: string;
  name: string;
  description: string;
  icon: ReactNode;



export interface SupportTicket {;


  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
