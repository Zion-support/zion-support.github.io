  id: string;
  slug ? : string;
  title: string;
  company: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metrics: {
      performance: string;
      savings: string;
      accuracy: string;
  };
  technologies: string[];
  featured: boolean;
  date: string;
  author: string;
  image?: string;
  newBadge?: boolean;
);
