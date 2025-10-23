'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOOptimizerProps {
title?: string
description?: string
keywords?: string
canonicalUrl?: string
ogImage?: string
twitterCard?: string
structuredData?: object
children: React.ReactNode
}
const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
title = 'Zion Tech Group - Advanced AI and IT Solutions',
description = 'Professional AI and IT solutions for your business. Advanced technology, expert support, and proven results.',
keywords = 'AI solutions, IT services, technology, business solutions, Zion Tech Group',
canonicalUrl,
ogImage = '/images/og-image.jpg',
twitterCard = 'summary_large_image',
structuredData,
children
}) => {
const [seoScore, setSeoScore] = useState(0)
const [recommendations, setRecommendations] = useState<string[]>([])
const analyzeSEO = useCallback(() => {
if (typeof window === 'undefined') return
let score = 0
const newRecommendations: string[] = []
// Check title length
if (title.length >= 30 && title.length <= 60) {
score += 20
} else {
newRecommendations.push('Title should be between 30-60 characters')
}
// Check description length
if (description.length >= 120 && description.length <= 160) {
score += 20
} else {
newRecommendations.push('Description should be between 120-160 characters')
}
// Check for keywords in title
if (keywords && title.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
score += 15
} else {
newRecommendations.push('Include primary keyword in title')
}
// Check for keywords in description
if (keywords && description.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
score += 15
} else {
newRecommendations.push('Include primary keyword in description')
}
// Check for heading structure
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
if (headings.length > 0) {
score += 10
} else {
newRecommendations.push('Add proper heading structure')
}
// Check for images with alt text
const images = document.querySelectorAll('img')
const imagesWithAlt = document.querySelectorAll('img[alt]')
if (images.length === imagesWithAlt.length && images.length > 0) {
score += 10
} else {
newRecommendations.push('Add alt text to all images')
}
// Check for internal links
const internalLinks = document.querySelectorAll('a[href^=&quot;/&quot;], a[href^=&quot;./&quot;]')
if (internalLinks.length > 0) {
score += 10
} else {
newRecommendations.push('Add internal links for better SEO')
}
setSeoScore(score)
setRecommendations(newRecommendations)
}, [title, description, keywords])
useEffect(() => {
analyzeSEO()
}, [analyzeSEO])
const generateStructuredData = () => {
const defaultStructuredData = {
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;Organization&quot;,
&quot;name&quot;: &quot;Zion Tech Group&quot;,
&quot;description&quot;: description,
&quot;url&quot;: canonicalUrl || window.location.origin,
&quot;logo&quot;: ogImage,
&quot;sameAs&quot;: [
&quot;https://twitter.com/ziontechgroup&quot;,
&quot;https://linkedin.com/company/ziontechgroup&quot;
]
}
return structuredData || defaultStructuredData
}
return (
<>
<Helmet>
<title>{title}</title>
<meta name=&quot;description&quot; content={description} />
<meta name=&quot;keywords&quot; content={keywords} />
{canonicalUrl && <link rel=&quot;canonical&quot; href={canonicalUrl} />}
{/* Open Graph */}
<meta property=&quot;og:title&quot; content={title} />
<meta property=&quot;og:description&quot; content={description} />
<meta property=&quot;og:image&quot; content={ogImage} />
<meta property=&quot;og:type&quot; content=&quot;website&quot; />
{canonicalUrl && <meta property=&quot;og:url&quot; content={canonicalUrl} />}
{/* Twitter Card */}
<meta name=&quot;twitter:card&quot; content={twitterCard} />
<meta name=&quot;twitter:title&quot; content={title} />
<meta name=&quot;twitter:description&quot; content={description} />
<meta name=&quot;twitter:image&quot; content={ogImage} />
{/* Structured Data */}
<script type=&quot;application/ld+json&quot;>
{JSON.stringify(generateStructuredData())}
</script>
</Helmet>
{children}
{process.env.NODE_ENV === 'development' && (
<div className=&quot;seo-debug&quot; style={{
position: 'fixed',
top: '10px',
left: '10px',
background: 'rgba(0,0,0,0.8)',
color: 'white',
padding: '10px',
borderRadius: '5px',
fontSize: '12px',
zIndex: 1000,
maxWidth: '300px'
}}></div>
<div>SEO Score: {seoScore}/100</div>
{recommendations.length > 0 && (
<div></div>
<div>Recommendations:</div>
<ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
{recommendations.map((rec, index) => (
<li key={index}>{rec}</li>
))}
</ul>
</div>
)}
</div>
)}
</>
)
}
export default AdvancedSEOOptimizer
</SEOOptimizerProps>