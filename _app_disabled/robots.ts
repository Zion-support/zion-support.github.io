<<<<<<< HEAD
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'],
    },
    sitemap: 'https://ziontechgroup.com/sitemap.xml',
  };
}
=======
import { MetadataRoute } from 'next'; export default function robots(): MetadataRoute.Robots { return { rules: {' userAgent: '*',' allow: '/',' disallow: ['/private/', '/admin/', '/api/'], },' sitemap: 'https://ziontechgroup.com/sitemap.xml', }; }'
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
