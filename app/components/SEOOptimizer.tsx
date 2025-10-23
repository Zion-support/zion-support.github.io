'use client'
    }
  ]


    updateOGTag('og:title', title)
    updateOGTag('og:description', description)
    updateOGTag('og:image', ogImage)
    updateOGTag('og:url', canonicalUrl)
    updateOGTag('og:type', 'website')


    updateTwitterTag('twitter:card', 'summary_large_image')
    updateTwitterTag('twitter:title', title)
    updateTwitterTag('twitter:description', description)
    updateTwitterTag('twitter:image', ogImage)

    // Add structured data

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])

  return (
  );
};

>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
