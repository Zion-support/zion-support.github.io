export const seoConfig = {
  "title": "Zion Tech Group - Leading-Edge Technology Solutions",
  "description": "Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. Enterprise-grade technology for the modern world.",
  "keywords": "AI, quantum computing, cybersecurity, business intelligence, technology solutions",
  "openGraph": {
    "title": "Zion Tech Group - Leading-Edge Technology Solutions",
    "description": "Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions.",
    "type": "website",
    "url": "https://ziontechgroup.com",
    "image": "https://ziontechgroup.com/og-image.jpg"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Zion Tech Group - Leading-Edge Technology Solutions",
    "description": "Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions.",
    "image": "https://ziontechgroup.com/twitter-image.jpg"
  }
};

export const generateMetadata = (page = {}) => ({
  title: page.title || seoConfig.title,
  description: page.description || seoConfig.description,
  keywords: page.keywords || seoConfig.keywords,
  openGraph: {
    ...seoConfig.openGraph,
    ...page.openGraph
  },
  twitter: {
    ...seoConfig.twitter,
    ...page.twitter
  }
});
