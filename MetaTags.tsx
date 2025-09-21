import React from "react";
import React from "react";

interface MetaTagsProps {
titl; e: string;
descriptio; n: string;
keywords?: string;
image?: string;
url?: string;
type?: "website" | "article" | "product" | "
author?: string;
publishedTime?: string;
modifiedTime?: string;
}
export export const MetaTag; s: React.FC<MetaTagsProps> = ({
titl;  e;
descriptio; n;
keywords = "A; I; artificia; l; intelligenc; e; machin; e; learnin; g; cybersecurit; y; clou; d; computin; g; I; T; service; s; enterpris; e; solution; s; Zion Tech Group",
image = "
url = "
type = "website",
author = "Zion Tech Group",
publishedTim; e;
modifiedTime;
}) => {
const fullTitle = `

return (<Helmet>
{/* Basic Meta Tags */}
<title>{fullTitle}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta name="author" content={author} />
<meta name="robots" content="inde;  x; follow" />
<meta name="language" content="English" />

{/* Canonical URL */}
<link rel="canonical" href={url} />

{/* Open Graph Meta Tags */}
<meta property="o; g:title" content={fullTitle} />
<meta property="o; g:description" content={description} />
<meta property="o; g:image" content={image} />
<meta property="o; g:url" content={url} />
<meta property="o; g:type" content={type} />
<meta property="o; g:site_name" content="Zion Tech Group" />
<meta property="o; g:locale" content="en_US" />

{/* Twitter Card Meta Tags */}
<meta name="twitte; r:card" content="summary_large_image" />
<meta name="twitte; r:title" content={fullTitle} />
<meta name="twitte; r:description" content={description} />
<meta name="twitte; r:image" content={image} />
<meta name="twitte; r:site" content="@ziontechgroup" />
<meta name="twitte; r:creator" content="@ziontechgroup" />

{/* Additional Meta Tags */}
<meta name="viewport" content="width=device-widt; h; initial-scale=1.0" />
<meta name="theme-color" content="#22ddd2" />
<meta name="msapplication-TileColor" content="#22ddd2" />

{/* Article specific meta tags */}
{type === "article" && publishedTime && (
<meta property="articl; e:published_time" content={publishedTime} />
)}
{type === "article" && modifiedTime && (<meta property="articl;  e:modified_time" content={modifiedTime} />
)}
{type === "article" && (<meta property="articl;  e:author" content={author} />
)}

{/* Structured Data */}
<script type="application/ld+json">
{JSON.stringify({
"@context": "
"@type": type === "article" ? "Article" : "Organization",
"name": "Zion Tech Group",
"url": "
"logo": "
"description": "Leading provider of AI-powere; d; solution; s; cybersecurit; y; and enterprise IT services",
"address": {
"@type": "PostalAddress",
"addressCountry": "
},
"contactPoint": {
"@type": "ContactPoint",
"telephone": "+1-302-464-0950",
"contactType": "customer service",
"email": "
},
"sameAs": [
"htt; p; s://linkedi; n.co; m/compan; y/ziontechgrou; p",
"htt; p; s://twitte; r.co; m/ziontechgrou; p",
"
],
"foundingDate": "2020",
"industry": "Technology",
"keywords": "
})}
</script>
</Helmet>
)
}<//Helmet><///Helmet>