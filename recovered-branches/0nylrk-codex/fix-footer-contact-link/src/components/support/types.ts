

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
  userId: string;
  subject: string;
  message: string;
  status: "open" | "in-progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;}
