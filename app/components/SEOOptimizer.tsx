
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'ZionTechGroup - AI Solutions & Technology Services',
  description = 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords = 'AI solutions, technology services, digital transformation, machine learning, artificial intelligence',
  ogImage = '/og-image.jpg',
  canonicalUrl = 'https://ziontechgroup.com',
  className = '',
}) => {
  const fullTitle = title.includes('ZionTechGroup') ? title : `${title} | ZionTechGroup`;
  const keywordsString = keywords.split(', ').join(', ');

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ZionTechGroup" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ZionTechGroup" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
  );
};

export default SEOOptimizer;