import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        '/temp/',
        '/backup/',
        '/test/',
        '/dev/',
        '/staging/',
        '*.json',
        '*.xml',
        '*.txt',
        '*.log'
      ],
    },
    sitemap: 'https://ziontechgroup.com/sitemap.xml',
    host: 'https://ziontechgroup.com',
  }
}