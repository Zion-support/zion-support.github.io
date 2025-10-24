<<<<<<< HEAD
import { MetadataRoute } from 'next'
=======
import { MetadataRoute } from 'next';
>>>>>>> origin/main
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/private/',
        '*.json',
        '*.xml',
      ],
    },
    sitemap: 'https://ziontechgroup.com/sitemap.xml',
  };
}