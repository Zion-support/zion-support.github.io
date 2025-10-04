export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  client: string;
  industry: string;
  publishedAt: string;
  tags: string[];
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
}

export const caseStudies: CaseStudy[] = [];

export default caseStudies;