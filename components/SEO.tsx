import Head from 'next/head'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string[]
}

export default function SEO({ title, description, keywords }: SEOProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
    </Head>
  )
}