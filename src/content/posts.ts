/**
 * Blog posts data
 */

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
}

/**
 * Sample blog posts
 */
export const posts: Post[] = [
  {
    slug: "ai-automation-guide",
    title: "Complete Guide to AI Automation",
    description: "Learn how to implement AI automation in your organization",
    category: "AI",
    publishedAt: "2024-12-01",
    featured: true
  }
];

export default posts;