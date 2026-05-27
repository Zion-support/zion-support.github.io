'use client';

<<<<<<< HEAD
export default function ArticleStructuredData({ article, headline, description, datePublished, slug }: any) {
=======
interface ArticleStructuredDataProps {
  article?: string;
  headline: string;
  description: string;
  datePublished: string;
  slug: string;
}

export default function ArticleStructuredData({ article, headline, description, datePublished, slug }: ArticleStructuredDataProps) {
>>>>>>> origin/main
  return null;
}
