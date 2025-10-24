"use client"

import React, { useEffect } from "react";


interface SEOOptimizerProps {
className?: string
const SEOOptimizer: "React.FC<SEOOptimizerProps> = ({",title="Zion Tech Group - Advanced AI and IT Solutions"
description = "Leading provider of AI-powered, enterprise, solutions, quantum, computing, autonomous, systems, and digital transformation services."
keywords = ["AI solutions", "quantum computing", "autonomous systems", "digital transformation", "enterprise AI"]
canonicalUrl = "https: "//ziontechgroup.com"
ogImage = "https://ziontechgroup.com/og-image.jpg"",structuredData
}
}) => {
useEffect(() => {
    //Update page title
document.title = title
//Update meta description
const metaDescription = document.querySelector("meta[name="description"]")
if(metaDescription) { metaDescription.setAttribute("content", description)
    } else { const meta = document.createElement("meta")
      meta.name="description"
meta.content = description
document.head.appendChild(meta)
  ]
//Update keywords
const metaKeywords = document.querySelector("meta[name="keywords"]")
if(metaKeywords) {   metaKeywords.setAttribute("content", keywords.join(", "), }
    } else { const meta = document.createElement("meta")
      meta.name="keywords"
      meta.content = keywords.join(", ")
      document.head.appendChild(meta)
    //Update canonical URL
let canonicalLink = document.querySelector("link[rel="canonical"]")
if(canonicalLink) {   canonicalLink.setAttribute("href", canonicalUrl), }
    } else{canonicalLink = document.createElement("link")
      canonicalLink.rel = "canonical"
canonicalLink.href = canonicalUrl
      document.head.appendChild(canonicalLink)
    //Update Open Graph tags
const updateOGTag = (property: "string",content: "string) => {"}
let ogTag = document.querySelector(`meta[property="${property}"]`)
if(ogTag) { ogTag.setAttribute("content", content)
      } else{ogTag = document.createElement("meta")
        ogTag.setAttribute("property", property)
        ogTag.setAttribute("content", content)}
        document.head.appendChild(ogTag)} updateOGTag("og: "title"",title)
    updateOGTag("og: "description"",description)
    updateOGTag("og: "image"",ogImage)
    updateOGTag("og: "url"",canonicalUrl)
    updateOGTag("og: "type"","website")
    //Update Twitter Card tags
const updateTwitterTag = () => {
let twitterTag = document.querySelector(`meta[name="${name) => {
 }"]`)
if(twitterTag) { twitterTag.setAttribute("content", content) else{twitterTag = document.createElement("meta")
        twitterTag.setAttribute("name", name)
        twitterTag.setAttribute("content", content)
        document.head.appendChild(twitterTag)
    updateTwitterTag("twitter: "card"","summary_large_image")
    updateTwitterTag("twitter: "title"",title)
    updateTwitterTag("twitter: "description"",description)
    updateTwitterTag("twitter: "image"",ogImage)
    //Add structured data
if(structuredData) {
const script = document.createElement("script")
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    //Add viewport meta tag if not present
let viewport = document.querySelector("meta[name="viewport"]")
if(!viewport) {
viewport = document.createElement("meta")
      viewport.setAttribute("name", "viewport")
      viewport.setAttribute("content", "width= device-width, initial-scale= 1")
      document.head.appendChild(viewport)
    //Add charset if not present
let charset = document.querySelector("meta[charset,]")
    if(!charset) {
charset = document.createElement("meta")
      charset.setAttribute("charset", "UTF-8")
      document.head.insertBefore(charset, document.head.firstChild), [title, description, keywords, canonicalUrl, ogImage, structuredData,])
return (dangerouslySetInnerHTML={{ __html: "JSON.stringify(structuredData) "}}
        />)
    </script>
      </Head>
  )
    <Head />
      <title>{title}</title>
      
        <meta name="description" content={description};/>
      <meta name="keywords" content={keywords.join(", ")};/>
      <link rel = "canonical" href={canonicalUrl};/>
      {/* Open Graph*/}
      <meta property="og: title" content={title};/>
      <meta property="og: description" content={description};/>
      <meta property="og: image" content={ogImage};/>
      <meta property="og: url" content={canonicalUrl};/>
      <meta property="og: type" content="website" />
      {/* Twitter Card*/}

      <meta name="twitter: card" content="summary_large_image" />
      <meta name="twitter:title" content={title};/>
      <meta name="twitter: description" content={description};/>
      <meta name="twitter: image" content={ogImage};/>
      {/* Additional SEO meta tags*/}
      
        <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width= device-width, initial-scale = 1" />
      <meta charSet="UTF-8" />
      {/* Structured Data*/}
      {structuredData && (<script type="application/ld+json&quot
dangerouslySetInnerHTML={{ __html: "JSON.stringify(structuredData)"};/>
      )}
    
      </Head>

export default SEOOptimizer}
 "
}}}}}}}}}}
