<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'lucide-react'
import React from 'react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8

interface SEOHeadProps {
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
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, artificial intelligence, enterprise automation, digital transformation, cloud services, machine learning, business intelligence',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const canonicalUrl = canonical || url
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
  return (
  <Helme t>{/* Basic MetaTags */}
    <titl e>{fullTitle}</titl><metaname="description" content={description} /><metaname="keywords" content={keywords} /><metaname="author" content={author} /><metaname="robots" content={robotsContent} /><linkrel="canonical" href={canonicalUrl} />{/* Open Graph MetaTags */}
   <metaproperty="og:type" content={type} /><metaproperty="og:title" content={fullTitle} /><metaproperty="og:description" content={description} /><metaproperty="og:image" content={image} /><metaproperty="og:url" content={url} /><metaproperty="og:site_name"content="Zion TechGroup" /><metaproperty="og:locale"content="en_US" />{/* Twitter Card MetaTags */}
   <metaname="twitter:card"content="summary_large_image" /><metaname="twitter:title" content={fullTitle} /><metaname="twitter:description" content={description} /><metaname="twitter:image" content={image} /><metaname="twitter:site"content="@ziontechgroup" /><metaname="twitter:creator"content="@ziontechgroup" />{/* Article specific metatags */}
      {type=== 'article' && (
      <>{publishedTime&&<metaproperty="article:published_time"content={publishedTime} />}
         {modifiedTime&&<metaproperty="article:modified_time"content={modifiedTime} />}
         {author&&<metaproperty="article:author"content={author} />}
         {section&&<metaproperty="article:section"content={section} />}
          {tags.map((tagindex) => (
         <metakey={index}property="article:tag" content={tag} />))}
      </>)}
      {/* Additional SEO MetaTags */}
   <metaname="theme-color"content="#4f46e5" /><metaname="msapplication-TileColor"content="#4f46e5" /><metaname="apple-mobile-web-app-title"content="Zion TechGroup" /><metaname="application-name"content="Zion TechGroup" />{/* StructuredData */}
    <scripttype="application/ld+json">{JSON.stringify({
          '@context': 'https:// schema.org',
          '@type': type=== 'article' ? 'Article' : 'WebPage',
          name: fullTitle,
          description: description,
          url: url,
          image: image,
          author: {
            '@type': 'Organization',
            name : author
         },
          publisher: {'@type': 'Organization',
            name: 'Zion Tech Group',
            logo: {
              '@type': 'ImageObject',
              url: 'https:// ziontechgroup.com/logo.png'
           }
          },
          ...(type=== 'article' && {datePublished: publishedTime,
            dateModified: modifiedTime || publishedTimemainEntityOfPage: {
              '@type': 'WebPage',
              '@id': url
           }
          })
        })}
      </script>
    </Helmet>
  )
}
export default SEOHead
