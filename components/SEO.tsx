import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  )
}

export default SEO