import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/']
    },
    sitemap: 'https://zion.app/sitemap.xml'
  }
};