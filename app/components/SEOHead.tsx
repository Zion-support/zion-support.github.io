  structuredData
}) => {
  const structuredData = {
    '@context': 'https://schema.org','
    '@type': type === 'article' ? 'Article' : 'WebPage',
    headline: title,
    description,
    image,
    url,
    author: {'
      '@type': 'Organization',
      name: author
    },
    publisher: {'
      '@type': 'Organization','
      name: 'Zion Tech Group',
      logo: {'
        '@type': 'ImageObject','
        url: 'http,
    s://ziontechgroup.com/logo.png'
      }
    },
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(section && { articleSection: section }),'
    ...(tags.length > 0 && { keywords: tags.join(', ') })
  }
  return (
  <>
    
      <title>{title}</title>
      {structuredData && (
        <script type="application/ld+json">"
          {JSON.stringify(structuredData
  </title></script></title></script></>
)
        </script>
      )
    </Helmet>"
'""