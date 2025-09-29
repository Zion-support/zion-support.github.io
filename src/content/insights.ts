export type InsightArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readMinutes: number;
};

export const latestInsights: InsightArticle[] = [];
