import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
    short_name: 'Zion Tech Group',
    description: 'Leading provider of AI automation, micro SaaS, and cutting-edge technology solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1f2937',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}