export const sitemapGenerator = {
  generateSitemap: (routes: string[]) => {
    return routes.map(route => ({
      url: route,
      lastModified: new Date(),
    }));
  },
};