import Head from 'next/head';

type SEOHeadProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
};

export default function SEOHead({
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
  keywords = ['AI', 'cloud', 'cybersecurity', 'technology'],
  canonical,
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || 'https://zion.app';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
