/**
 * BlogContentIndex
 * Centralized index of all blog posts for easy discovery and navigation
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

/**
 * Blog post statistics
 */
export interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  averageReadTime: string;
}

/**
 * Format currency for display
 */
export function formatCurrency(total: number): string {
  return `$${total}M+`;
}

/**
 * Blog post statistics
 */
export const blogStats: BlogStats = {
  totalPosts: 0,
  totalCategories: 0,
  totalTags: 0,
  averageReadTime: "5 min"
};