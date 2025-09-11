export interface MatchResult {
  id: string;
  score: number;
  item: unknown;
  reason: string;
}

export interface MatchResultItem {
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  skills?: string[];
  id: string;
  name: string;
  score: number;
  reason: string;
}

export const findMatches = (query: string, items: unknown[]): MatchResult[] => {
  return items.map((item, index) => ({
    id: item.id || index.toString(),
    score: Math.random() * 100,
    item,
    reason: "AI-powered match"
  }));
};
