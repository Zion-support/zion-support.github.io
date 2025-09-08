
import { ReactNode  } from './react';



  lastUpdated: string,
  tags: string[]



  description: string;
  icon: ReactNode;





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






