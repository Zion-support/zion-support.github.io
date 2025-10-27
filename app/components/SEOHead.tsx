import Head from 'next/head';

interface __SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
}

export default function SEOHead({ 
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = [],
  canonical
}: __SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
}
