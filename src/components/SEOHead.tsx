import React from 'react';
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4

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
