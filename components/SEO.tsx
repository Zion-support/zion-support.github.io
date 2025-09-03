import Head from "next/head"
import React from "react"
interface SEOProps {
  title: string,,;
description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string,;
  author?: string,;
  publishedTime?: string,,;
  modifiedTime?: string,;
  section?: string,;
  tags?: string[]}

const SEO: React.FC<SEOProps> = ({,
  title,
  description,
  keywords,
  image,
  url,"
  type = "website","
  siteName = "Zion Tech Group","
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
}) => {
  return (
<Head>
      <title>{title}</title>
      <meta name="description" content="{description}"  />
      {keywords && <meta name="keywords" content="{keywords}"  />}"
      <meta name="author" content="{author}"  />
      
      {/* comment */}"
      <meta property="og:description" content="{description}"  />"
      <meta property="og:type" content="{type}"  />"
      <meta property="og:url" content="{currentUrl}"  />"
      <meta property="og:site_name" content="{siteName}"  />"
      <meta property="og:image" content="{defaultImage}"  />
      
      {/* comment */}"
      <meta name="twitter: card" content="summary_large_image"  />",
      <meta name="twitter:title" content="{title}"  />"
      <meta name="twitter:description" content="{description}"  />"
      <meta name="twitter:image" content="{defaultImage}"  />
      
      {/* comment */}"
      {publishedTime && <meta property="article:published_time" content="{publishedTime}"  />}"
      {modifiedTime && <meta property="article:modified_time" content="{modifiedTime}"  />}"
      {section && <meta property="article:section" content="{section}"  />}

      {tags && tags.map((tag, index) => ("
        <meta key="{index}" property="article:tag" content="{tag}"  />
      ))}

    </Head>
  )
}
""export default SEO