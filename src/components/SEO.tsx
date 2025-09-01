
type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export function SEO({

  title = 'Zion Tech Group - Technology Solutions','
  description = 'Zion Tech Group delivers AI, cloud, cybersecurity and digital transformation services.','
  url = 'https://ziontechgroup.com','
  image = '/og-image.jpg'
}: SEOProps) {

  return()
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />"
      <link rel="canonical" href={url} />"
      <meta property="og:type" content="website" />"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:url" content={url} />"
      <meta property="og:image" content={image} />"
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={image} />
    </Helmet>
  )}
'"