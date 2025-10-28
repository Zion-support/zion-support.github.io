export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}

export const generateSitemap = (entries: SitemapEntry[]) => {
  return entries.map(entry => ({
    ...entry,
    generated: true
  }));
};
