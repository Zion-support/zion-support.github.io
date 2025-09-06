
 Define the types for our sitemap structure

export type SitemapItem = {
  path: string;
  label: string;
  description?: string;
  priority?: number;
  change_freq?: any