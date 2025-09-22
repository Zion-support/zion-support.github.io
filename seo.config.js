module.exports = {
  siteUrl: 'https://ziontechgroup.com',
  generateRobotsTxt: true,
  generateSitemaps: true,
  exclude: ['/admin/*', '/api/*', '/private/*'],
  additionalPaths: async (config) => {
    const result = [];
    
    // Add dynamic pages
    const services = ['ai-solutions', 'cloud-computing', 'cybersecurity', 'data-analytics'];
    services.forEach(service => {
      result.push({
        loc: `/services/${service}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      });
    });
    
    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/']
      }
    ],
    additionalSitemaps: [
      'https://ziontechgroup.com/sitemap.xml'
    ]
  }
};