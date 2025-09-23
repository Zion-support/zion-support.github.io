import Head from 'next/head'

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ title = 'Zion Tech Group', description = 'Advanced AI and technology solutions', keywords = '' }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}