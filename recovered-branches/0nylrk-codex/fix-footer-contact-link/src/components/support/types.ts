<<<<<<< HEAD

import { ReactNode } from "react";
=======
import { ReactNode  } from './react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD
  lastUpdated: string;
  tags: string[]
=======
  last_updated: string;
  tags: string[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface HelpCategory {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[]
}
export interface SupportTicket {
  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
<<<<<<< HEAD
  createdAt: string;

  updatedAt: string;
}

=======
  created_at: string;
  updated_at: string;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
