export interface BreakthroughArticle { 
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  impact: string;
  metrics: {
    improvement: string;
    roi: string;
    timeframe: string;
  };
}