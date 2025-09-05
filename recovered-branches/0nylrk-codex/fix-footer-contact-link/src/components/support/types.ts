
import { ReactNode } from &quot;react&quot;;

export interface HelpArticle {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[];
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: &quot;open&quot; | &quot;in-progress&quot; | &quot;resolved&quot; | &quot;closed&quot;;
  priority: &quot;low&quot; | &quot;medium&quot; | &quot;high&quot;;
  createdAt: string;
  updatedAt: string;
}
