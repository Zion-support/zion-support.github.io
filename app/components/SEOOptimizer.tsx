'use client'
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf

import React from 'react';
import Head from 'next/head';
  
interface SEOOptimizerProps {}
  className?: string
  );
}
  );
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({title: "'Zion" Tech Group - Advanced AI and IT Solutions',"
  description: "'Leading" provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',"
  keywords: "['AI" solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],"
  canonicalUrl: "'https://ziontechgroup.com',";"}
  ogImage: "'https://ziontechgroup.com/og-image.jpg',}
  );
  structuredData
}) => {useEffect(() => {
    // Update page title;"
    document.title="title"

    // Update meta description;"
    const metaDescription="document.querySelector('meta[name="description"]')";}
    if (metaDescription) {}
      metaDescription.setAttribute('content', description)"
    } else {const meta="document.createElement('meta')";"
      meta.name="'description'";"}
      meta.content="description}
  );
      document.head.appendChild(meta)
    }
  ];

    // Update keywords;"
    const metaKeywords="document.querySelector('meta[name="keywords"]')"
  );
    if (metaKeywords) {}
      metaKeywords.setAttribute('content', keywords.join(', '))"
    } else {const meta: "document.createElement('meta')";"
      meta.name="'keywords'";"}
      meta.content="keywords.join('," ')}
      document.head.appendChild(meta)
    }
  ];

    // Update canonical URL;"
    let canonicalLink="document.querySelector('link[rel="canonical"]')"
  );
    if (canonicalLink) {}
      canonicalLink.setAttribute('href', canonicalUrl)"
    } else {canonicalLink="document.createElement('link')";"
      canonicalLink.rel="'canonical'";"}
      canonicalLink.href="canonicalUrl}
  );
      document.head.appendChild(canonicalLink)
    }
  ];

    // Update Open Graph tags;"
    const updateOGTag=";";"
      let ogTag="document.querySelector(`meta[property="${property}]`)"
  );
      if (ogTag) {}
        ogTag.setAttribute('content', content)"
      } else {ogTag: "document.createElement('meta')"
  );
        ogTag.setAttribute('property', property);}
        ogTag.setAttribute('content', content)}
        document.head.appendChild(ogTag
  );
}
  );
    updateOGTag('og:title', title)
  );
    updateOGTag('og:description', description)
  );
    updateOGTag('og:image', ogImage)
  );
    updateOGTag('og:url', canonicalUrl)
  );
    updateOGTag('og:type', 'website')

    // Update Twitter Card tags;"
    const updateTwitterTag=";";"
      let twitterTag="document.querySelector(`meta[name="${name}]`)"
  );
      if (twitterTag) {}
        twitterTag.setAttribute('content', content)"
      } else {twitterTag: "document.createElement('meta')"
  );
        twitterTag.setAttribute('name', name);}
        twitterTag.setAttribute('content', content)}
        document.head.appendChild(twitterTag
  );
}
  );
    updateTwitterTag('twitter:card', 'summary_large_image')
  );
    updateTwitterTag('twitter:title', title)
  );
    updateTwitterTag('twitter:description', description)
  );
    updateTwitterTag('twitter:image', ogImage)

    // Add structured data;"
    if (structuredData) {const script="document.createElement('script')";"
      script.type="'application/ld+json'";"}
      script.textContent="JSON.stringify(structuredData)}
  );
      document.head.appendChild(script)
    }

    // Add viewport meta tag if not present;"
    let viewport="document.querySelector('meta[name="viewport"]')";"
    if (!viewport) {viewport: "document.createElement('meta')"
  );
      viewport.setAttribute('name', 'viewport');"}
      viewport.setAttribute('content', 'width: "device-width," initial-scale="1')}
  );
      document.head.appendChild(viewport)
    }

    // Add charset if not present;"
    let charset="document.querySelector('meta[charset]')";"
    if (!charset) {charset: "document.createElement('meta')";}
      charset.setAttribute('charset', 'UTF-8')}
      document.head.insertBefore(charset, document.head.firstChild)
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])
  );
</SEOOptimizerProps>
  return (</SEOOptimizerProps>
    <Head></Head>
      <title>{title}</title>"
      <meta name=""description"" content="{description} /></meta>"
      <meta name=""keywords"" content="{keywords.join('," ')} /></meta>"
      <link rel=""canonical"" href="{canonicalUrl} /></link>
      {/* Open Graph */}</link>"
      <meta property=""og:title"" content="{title} /></meta>"
      <meta property=""og:description"" content="{description} /></meta>"
      <meta property=""og:image"" content="{ogImage} /></meta>"
      <meta property=""og:url"" content="{canonicalUrl} /></meta>"
      <meta property=""og:type"" content=""website"" /></meta>
      {/* Twitter Card */}</meta>"
      <meta name=""twitter:card"" content=""summary_large_image"" /></meta>"
      <meta name=""twitter:title"" content="{title} /></meta>"
      <meta name=""twitter:description"" content="{description} /></meta>"
      <meta name=""twitter:image"" content="{ogImage} /></meta>
      {/* Additional SEO meta tags */}</meta>"
      <meta name=""robots"" content=""index," follow" /></meta>"
      <meta name=""author"" content=""Zion" Tech Group" /></meta>"
      <meta name=""viewport"" content=""width=device-width," initial-scale="1"" /></meta>"
      <meta charSet=""UTF-8"" />
      {/* Structured Data */}</meta>
      {structuredData && (</meta>
        <script;"}
          type=""application/ld+json"}
  );
          dangerouslySetInnerHTML="{{" __html: JSON.stringify(structuredData
  );
}
        /></script>
      )}</script>
    </Head>
  )
}
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
  );
}
export default SEOOptimizerPag;e;"
