

export interface HelpArticle {
  id: string;
  title: string;
  content: string;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {
>>>>>>> origin/auto/autonomy-17186719616
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  articles: HelpArticle[];
}

export interface SupportTicket {
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
}




>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
>>>>>>> origin/auto/autonomy-17186719616
