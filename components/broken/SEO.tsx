 {
  /* Robots Meta */ 
}{
  noindex && <meta name="robots" content="noindex" /> 
}{
  nofollow && <meta name="robots" content="nofollow" /> 
}{
  !noindex && !nofollow && <meta name="robots" content="index, follow" /> 
}{
  /* Open Graph Meta Tags */ 
}<meta property="og:title" content= {
  fullTitle 
}/> <meta property="og:description" content= {
  description 
}/> <meta property="og:type" content= {
  type 
}/> <meta property="og:url" content= {
  fullUrl 
}/> <meta property="og:image" content= {
  fullImage 
}/> <meta property="og:site name" content="Zion Tech Group" /> <meta property="og:locale" content="en US" /> {
  /* Twitter Card Meta Tags */ 
}<meta name="twitter:card" content="summary large image" /> <meta name="twitter:site" content="@ziontechgroup" /> <meta name="twitter:creator" content="@ziontechgroup" /> <meta name="twitter:title" content= {
  fullTitle 
}/> <meta name="twitter:description" content= {
  description 
}/> <meta name="twitter:image" content= {
  fullImage 
}/> {
  /* Article Specific Meta Tags */ 
}{
  type === 'article' && (<> {
  publishedTime && <meta property="article:published time" content= {
  publishedTime 
}/> 
}{
  modifiedTime && <meta property="article:modified time" content= {
  modifiedTime 
}/> 
}{
  author && <meta property="article:author" content= {
  author 
}/> 
}{
  section && <meta property="article:section" content= {
  section 
}/> 
}{
  tags.map ( (tag, index) => (<meta key= {
  index 
}property="article:tag" content= {
  tag 
}/> 
}</>) 
}{
  /* Structured Data */ 
}<script 
}] 
}
}) 
}
}/> {
  /* Custom Meta Tags */ 
}{
  structuredData && (<script type="application/ld+json" dangerouslySetInnerHTML= {
  {
  html: JSON.stringify (structuredData) 
}
}/>) 
}</Head>) 
};
export default SEO;
