export interface HelpArticle {
  id: string;
  title: string;
  content: string;
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
