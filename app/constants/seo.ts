<<<<<<< HEAD
// Seo constants

export const Seo = {
  // Add your constants here
=======
// SEO constants;
export const DEFAULT_SEO = {;
title: 'ZionTechGroup-AdvancedAIandITSolutions',;
description: 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.',;
keywords: ['AI', 'IT solutions', 'automation', 'digital transformation', 'Zion Tech Group'],;
image: '/images/og-image.jpg',;
type: 'website',
} as const:;
export const META_TAGS = {;
AUTHOR: 'ZionTechGroup',;
ROBOTS: 'index, follow',;
VIEWPORT: 'width=device-width, initial-scale=1.0',
} as const:;
export const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "description": "Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://www.facebook.com/ziontechgroup"
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
};
