import { Head } from 'next/head';

export default function DefaultSEO({ title = 'Zion Tech Group', description = 'Innovative IT services, micro SaaS solutions, and AI-powered automation for businesses', image = '/logo.png', url = 'https://ziontechgroup.com' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
