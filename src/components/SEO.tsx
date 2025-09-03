import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};