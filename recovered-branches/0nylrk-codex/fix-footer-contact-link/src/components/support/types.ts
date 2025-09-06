export interface HelpArticle {
  id: string;
  title: string;
  content: string;
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[]
  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
