import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  url, 
  image = '/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={`https://zion.app${url}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://zion.app${url}`} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`https://zion.app${image}`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://zion.app${image}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#4f46e5" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://zion.app",
            "logo": "https://zion.app/logo.png",
            "description": "AI and technology solutions company",
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/zion-tech-group"
            ]
          })
        }}
      />
    </Head>
  );
}