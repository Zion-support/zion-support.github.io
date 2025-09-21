export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  results: string[];
  image?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'AI-Powered Customer Service',
    description: 'Implemented AI chatbot solution for customer support.',
    client: 'TechCorp',
    industry: 'Technology',
    results: [
      '50% reduction in support tickets',
      '24/7 customer support',
      '95% customer satisfaction'
    ],
  },
];