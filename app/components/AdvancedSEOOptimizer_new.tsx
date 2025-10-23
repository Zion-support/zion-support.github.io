'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface AdvancedSEOOptimizer_newProps {
  className?: string;
}

const AdvancedSEOOptimizer_new: React.FC<AdvancedSEOOptimizer_newProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        AdvancedSEOOptimizer_new
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default AdvancedSEOOptimizer_newPage;
description?: string
keywords?: string
canonicalUrl?: string
ogImage?: string
twitterCard?: string
structuredData?: objectchildren: React.ReactNode}
constAdvancedSEOOptimizerNew: React.FC<SEOOptimizerProp s>= ({title= 'Zion Tech Group - Advanced AI and IT Solutions',
description= 'Professional AI and IT solutions for your business. Advanced technology, expert support, and proven results.',
keywords= 'AI solutions, IT services, technology, business solutions, Zion Tech Group',
canonicalUrl,
ogImage= '/$1/og-image.jpg',
twitterCard= 'summary_large_image',
structuredData,
children}) => {const [seoScoresetSeoScore] = useState(0)
const [recommendationssetRecommendations]=useState<string[]>([])
constanalyzeSEO= useCallback(() => {
  
if (type ofwindow=== 'undefined') return letscore=0constnewRecommendations: string[] = []
// Check title length
if (title.length >= 30&&title.length<= 6 0) {
score +=20} else {newRecommendations.push('Title should be between 3 0-60characters')}
// Check description length
if (description.length >= 120&&description.length<= 16 0) {score +=20} else {newRecommendations.push('Description should be between 12 0-160characters')}
// Check for keywords in title
if (keywords && title.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {score +=15} else {newRecommendations.push('Include primary keyword in title')}
// Check for keywords in description
if (keywords && description.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {score +=15} else {newRecommendations.push('Include primary keyword in description')}
// Check for headingstructureconstheadings= do cument.querySelectorAll('h1, h2, h3, h4, h5, h6')
if (headings.length >0) {score +=10} else {newRecommendations.push('Add proper heading structure')}
// Check for images with alttextconstimages= do cument.querySelectorAll('img')
constimagesWithAlt= do cument.querySelectorAll('img[alt]')
if (images.length=== imagesWithAlt.length && images.length > 0) {score +=10} else {newRecommendations.push('Add alt text to all images')}
// Check for internallinksconstinternalLinks= do cument.querySelectorAll('a[href^="/"],a[href^="./"]')
if (internalLinks.length > 0) {score +=10} else {newRecommendations.push('Add internal links for better SEO')}
setSeoScore(score)
setRecommendations(newRecommendations)
}, [title, description, keywords])
useEffect(() => {analyzeSEO()}, [analyzeSEO])
constgenerateStructuredData= () => {const defaultStructuredData= {"@context":"https:// schema.org","@type":"Organization","name":"Zion Tech Group","description": description,"url": canonicalUrl || (type of windo w !== 'undefined' ? windo w.location.origin: ''),"logo": ogImage,"sameAs" : ["https:// twitter.com/ziontechgroup","https:// linkedin.com/$1/ziontechgroup"
]}
return structuredDat a || default StructuredData
}
return structuredData || defaultStructuredData
}
return (
    <>
      <Helmet>
<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
{/* Open Graph */}
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:type" content="website" />
{canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
{/* Twitter Card */}
<meta name="twitter:card" content={twitterCard} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />
{/* Structured Data */}
<script type="application/ld+json">
{JSON.stringify(generateStructuredData())}
</script>
</Helmet>
{children}
{process.env.NODE_ENV === 'development' && (
<div className="seo-debug" style={{
position: 'fixed',
top: '10 px',
left: '10 px',
background: 'rgba(0,0,0,0.8)',
color: 'white',
padding: '10 px',
borderRadius: '5 px',
fontSize: '12 px',
zIndex:1000,
maxWidth: '300 px'}}><di v>SEOScore:{seoScore}/100</di>{recommendations.length >0&&(<di v><di v>Recommendations:</di><ulstyle={{ margin: '5 px 0', paddingLeft: '15 px'}}>{recommendations.map((recindex)=>(<likey={index}>{rec}</l>))}</u></di>)}</di>)}</>)
}
export default AdvancedSEOOptimizerNew
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
