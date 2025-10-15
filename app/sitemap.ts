import { generateSitemap, sitemapEntries } from './utils/sitemapGenerator';

export const generateSitemapXML = () => {
  return generateSitemap(sitemapEntries);
};