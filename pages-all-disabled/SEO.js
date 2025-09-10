import Head from 'next/head';

export default function SEO({ title, description, keywords }) {
  return (
    <Head>
      <title>{title || 'Zion Tech Group - Technology Solutions'}</title>
      <meta name="description" content={description || 'Leading technology solutions provider'} />
      <meta name="keywords" content={keywords || 'technology, web development, mobile apps'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || 'Zion Tech Group'} />
      <meta property="og:description" content={description || 'Technology solutions provider'} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Zion Tech Group'} />
      <meta name="twitter:description" content={description || 'Technology solutions provider'} />
    </Head>
  );
}
