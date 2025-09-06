<<<<<<< HEAD
=======
import { ReactNode } from "react";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD
import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;
}

export interface HelpCategory {;
=======
  lastUpdated: string;
  tags: string[];
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
<<<<<<< HEAD
=======
  articles: HelpArticle[];
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d



export interface SupportTicket {;


  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
