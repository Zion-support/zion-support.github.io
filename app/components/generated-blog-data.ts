import type { Metadata } from 'next';

export type GeneratedBlogData = {
  template: 'page-shell' | 'tech-article';
  metadata: Metadata;
  values: string[];
  jsonLd?: Record<string, unknown>;
};
