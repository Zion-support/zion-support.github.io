  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {;
const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';
