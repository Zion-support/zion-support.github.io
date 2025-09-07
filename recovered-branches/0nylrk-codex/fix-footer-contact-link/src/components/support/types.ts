import { ReactNode } from "react";
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD
  lastUpdated: string;
=======
import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
}

export interface HelpCategory {;  lastUpdated: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  tags: string[];
}

export interface HelpCategory {;
<<<<<<< HEAD

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
  articles: HelpArticle[];
}



export interface SupportTicket {;


  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
}
;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
