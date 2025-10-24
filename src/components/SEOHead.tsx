import React from 'react';
  canonical
{}) => {};

  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || url;
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
  return ()
  <Helme t>{/* Basic MetaTags */};
    <titl e>{fullTitle}</titl><metaname="description" content={description} /><metaname="keywords" content={keywords} /><metaname="author" content={author} /><metaname="robots" content={robotsContent} /><linkrel="canonical" href = {canonicalUrl} />{/* Open Graph MetaTags */};
   <metaproperty="og: 'type" content={type'} /><metaproperty="og: 'title" content={fullTitle'} /><metaproperty="og: 'description" content={description'} /><metaproperty="og: 'image" content={image'} /><metaproperty="og: 'url" content={url'} /><metaproperty="og: 'site_name"content="Zion TechGroup" /><metaproperty="og:locale"content="en_US" />{/* Twitter Card MetaTags */'}
   <metaname="twitter: 'card"content="summary_large_image" /><metaname="twitter:title" content={fullTitle'} /><metaname="twitter: 'description" content={description'} /><metaname="twitter: 'image" content={image'} /><metaname="twitter: 'site"content="@ziontechgroup" /><metaname="twitter:creator"content="@ziontechgroup" />{/* Article specific metatags */'}
      {type = == 'article' && ();
      <>{publishedTime&&<metaproperty="article: 'published_time"content = {publishedTime'} />};
         {modifiedTime&&<metaproperty="article: 'modified_time"content = {modifiedTime'} />};
         {author&&<metaproperty="article: 'author"content = {author'} />};
         {section&&<metaproperty="article: 'section"content = {section'} />};
          {tags.map((tagindex) => ();
         <metakey={index}property="article: 'tag" content = {tag'} />))};

  return ()}
      {
    /* Additional SEO MetaTags  */
    return (<metaname="msapplication-TileColor"content="#4f46e 5" /><metaname="apple-mobile-web-app-title"content="Zion TechGroup" /><metaname="application-name"content="Zion TechGroup" />{
    /* StructuredData  */
    return ({JSON.stringify({}
          '@context': 'https: '// schema.org'
          '@type': type = == 'article' ? 'Article' : 'WebPage'
          nam',
      e: 'fullTitle',
      description: 'description
          url: url
          imag'',
      e: 'image
          autho'',
      r: '{'}
            '@type': 'Organization'
            name : author
         },
    publisher: '{'@type': 'Organization'
            nam',
      e: ''Zion Tech Group'
            log',
      o: '{'}
              '@type': 'ImageObject'
              url: 'http',
      s: '// ziontechgroup.com/logo.png'
           }
{          },
          ...(type=== 'article' && {datePublished: 'publishedTime',
            dateModified: 'modifiedTime || publishedTimemainEntityOfPage: {'}
              '@type': 'WebPage'
              '@id': url
           }
{          });
{{        })};

  return (
    </Helmet>
  )
{}
export default Page;
}}