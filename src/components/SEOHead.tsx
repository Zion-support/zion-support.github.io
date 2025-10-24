import React from 'react'
import { Helmet } from 'lucide-react';
import React from 'react';
import { Helmet } from 'lucide-react';

interface SEOHeadProps {}
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
  canonical?: string
}
const SEOHead: React.FC<SEOHeadProps> = ({}
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Transform your business with cutting-edge technology.'
  keywords = 'AI solutions, artificial intelligence, enterprise automation, digital transformation, cloud services, machine learning, business intelligence'
  image = 'https://ziontechgroup.com/og-image.jpg'
  url = 'https://ziontechgroup.com'
  type = 'website'
  author = 'Zion Tech Group'
  publishedTime
  modifiedTime
  section
  tags = []
  noindex = false
  nofollow = false
  canonical
}) => {}
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const canonicalUrl = canonical || url
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
  return ()
  <Helme t>{/* Basic MetaTags */}
    <titl e>{fullTitle}</titl><metaname=&quot;description&quot; content={description} /><metaname=&quot;keywords&quot; content={keywords} /><metaname=&quot;author&quot; content={author} /><metaname=&quot;robots&quot; content={robotsContent} /><linkrel=&quot;canonical&quot; href = {canonicalUrl} />{/* Open Graph MetaTags */}
   <metaproperty=&quot;og:type&quot; content={type} /><metaproperty=&quot;og:title&quot; content={fullTitle} /><metaproperty=&quot;og:description&quot; content={description} /><metaproperty=&quot;og:image&quot; content={image} /><metaproperty=&quot;og:url&quot; content={url} /><metaproperty=&quot;og:site_name&quot;content=&quot;Zion TechGroup&quot; /><metaproperty=&quot;og:locale&quot;content=&quot;en_US&quot; />{/* Twitter Card MetaTags */}
   <metaname=&quot;twitter:card&quot;content=&quot;summary_large_image&quot; /><metaname=&quot;twitter:title&quot; content={fullTitle} /><metaname=&quot;twitter:description&quot; content={description} /><metaname=&quot;twitter:image&quot; content={image} /><metaname=&quot;twitter:site&quot;content=&quot;@ziontechgroup&quot; /><metaname=&quot;twitter:creator&quot;content=&quot;@ziontechgroup&quot; />{/* Article specific metatags */}
      {type = == 'article' && ();
      <>{publishedTime&&<metaproperty=&quot;article:published_time&quot;content = {publishedTime} />}
         {modifiedTime&&<metaproperty=&quot;article:modified_time&quot;content = {modifiedTime} />}
         {author&&<metaproperty=&quot;article:author&quot;content = {author} />}
         {section&&<metaproperty=&quot;article:section&quot;content = {section} />}
          {tags.map((tagindex) => ();
         <metakey={index}property=&quot;article:tag&quot; content = {tag} />))}
</>)}
      {/* Additional SEO MetaTags */}
   <metaname=&quot;theme-color&quot;content=&quot;#4f46e5&quot; /><metaname=&quot;msapplication-TileColor&quot;content=&quot;#4f46e5&quot; /><metaname=&quot;apple-mobile-web-app-title&quot;content=&quot;Zion TechGroup&quot; /><metaname=&quot;application-name&quot;content=&quot;Zion TechGroup&quot; />{/* StructuredData */}
    <scripttype=&quot;application/ld+json&quot;>{JSON.stringify({}
          '@context': 'https:// schema.org'
          '@type': type = == 'article' ? 'Article' : 'WebPage'
          name: fullTitle
          description: description
          url: url
          image: image
          author: {}
            '@type': 'Organization'
            name : author
         }
          publisher: {'@type': 'Organization'
            name: 'Zion Tech Group'
            logo: {}
              '@type': 'ImageObject'
              url: 'https:// ziontechgroup.com/logo.png'
           }
          }
          ...(type=== 'article' && {datePublished: publishedTime
            dateModified: modifiedTime || publishedTimemainEntityOfPage: {}
              '@type': 'WebPage'
              '@id': url
           }
          })
        })}
      </script>
    </Helmet>
  )
}
export default SEOHead
