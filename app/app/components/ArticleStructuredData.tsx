import { JsonLD } from 'next-seo'

export default function ArticleStructuredData({ 
  title, 
  description, 
  datePublished, 
  dateModified, 
  author = 'Zion Tech Group',
  publisher = 'Zion Tech Group',
  image = '/logo.png',
  url = 'https://ziontechgroup.com'
}) {
  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "datePublished": datePublished,
            "dateModified": dateModified || datePublished,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": publisher,
              "logo": {
                "@type": "ImageObject",
                "url": image
              }
            },
            "image": image,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })
        }}
      />
    </Head>
  )
}
