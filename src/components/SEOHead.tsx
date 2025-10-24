import { Helmet } from 'lucide-react';
import React from 'react';


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

  canonical
{}) => {};

  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || url;
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
  return (<metaproperty=&quot;og:title&quot; content={fullTitle} /><metaproperty=&quot;og:description&quot; content={description} /><metaproperty=&quot;og:image&quot; content={image} /><metaproperty=&quot;og:url&quot; content={url} /><metaproperty=&quot;og: site_name&quot;content=&quot;Zion TechGroup&quot; /><metaproperty=&quot;o,
      g:locale&quot;content=&quot;en_US&quot; />{
    /* Twitter Card MetaTags  */
    return (<metaname=&quot;twitter:title&quot; content={fullTitle} /><metaname=&quot;twitter:description&quot; content={description} /><metaname=&quot;twitter:image&quot; content={image} /><metaname=&quot;twitter: site&quot;content=&quot;@ziontechgroup&quot; /><metaname=&quot;twitte,
      r:creator&quot;content=&quot;@ziontechgroup&quot; />{/* Article specific metatags */}
      {type = == 'article' && ();
      <>{publishedTime&&<metaproperty=&quot;article:published_time&quot;content = {publishedTime} />}
         {modifiedTime&&<metaproperty=&quot;article:modified_time&quot;content = {modifiedTime} />}
         {author&&<metaproperty=&quot;article:author&quot;content = {author} />}
         {section&&<metaproperty=&quot;article:section&quot;content = {section} />}
          {tags.map((tagindex) => ();
         <metakey={index}property=&quot;article:tag&quot; content = {tag} />))};

  return ()}
      {
    /* Additional SEO MetaTags  */
    return (<metaname=&quot;msapplication-TileColor&quot;content=&quot;#4f46e5&quot; /><metaname=&quot;apple-mobile-web-app-title&quot;content=&quot;Zion TechGroup&quot; /><metaname=&quot;application-name&quot;content=&quot;Zion TechGroup&quot; />{
    /* StructuredData  */
    return ({JSON.stringify({}
          '@context': 'https: // schema.org'
          '@type': type = == 'article' ? 'Article' : 'WebPage'
          nam,
      e: fullTitle,
      description: description
          url: url
          imag,
      e: image
          autho,
      r: {}
            '@type': 'Organization'
            name : author
         }
          publisher: {'@type': 'Organization'
            nam,
      e: 'Zion Tech Group'
            log,
      o: {}
              '@type': 'ImageObject'
              url: 'http,
      s:// ziontechgroup.com/logo.png'
           }

            dateModified: modifiedTime || publishedTimemainEntityOfPag,
      e: {}
              '@type': 'WebPage'
              '@id': url
           }
{          })
{{        })};

  return (
    </Helmet>
  )
{}
export default Page;
}}