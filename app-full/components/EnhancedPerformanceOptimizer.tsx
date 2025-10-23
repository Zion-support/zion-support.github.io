'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const EnhancedPerformanceOptimizerPage: React.FC = () => {
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (</div>
<div key={index} className="flex items-start space-x-3">
<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
<p className="text-gray-300 text-lg">{benefit}</p>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>h2>
<p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your enhancedperformanceoptimizer needs and get a customized solution.</p>p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
<Phone className="mr-2 h-5 w-5" />
Call Now
</div>
</div>
</div>
</section>
</div>
)
}
</button>
</button>
</h2>
import { useEffect, useCallback } from 'react'
import { useAnalytics } from './EnhancedAnalytics'
import { Phone, Mail } from 'lucide-react'

interface PerformanceMetrics {
lcp: number | null
fid: number | null
cls: number | null
fcp: number | null
ttfb: number | null
}
const EnhancedPerformanceOptimizer: React.FC = () => {
const { trackEvent } = useAnalytics()
const optimizeImages = useCallback(() => {
const images = document.querySelectorAll('img')
images.forEach((img) => {
// Add loading="lazy" if not already present
if (!img.hasAttribute('loading')) {
img.setAttribute('loading', 'lazy')
}
// Add decoding="async" for better performance
if (!img.hasAttribute('decoding')) {
img.setAttribute('decoding', 'async')
}
})
}, [])
const preloadCriticalResources = useCallback(() => {
// Preload critical fonts
const fontLink = document.createElement('link')
fontLink.rel = 'preload'
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
fontLink.as = 'style'
document.head.appendChild(fontLink)
// Preload critical images
const criticalImages = [
'/favicon.svg',
'/og-image.svg'
]
criticalImages.forEach((src) => {
const link = document.createElement('link')
link.rel = 'preload'
link.href = src
link.as = 'image'
document.head.appendChild(link)
})
}, [])
const optimizeThirdPartyScripts = useCallback(() => {
// Defer non-critical scripts
const scripts = document.querySelectorAll('script[src]')
scripts.forEach((script) => {
if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
script.setAttribute('defer', 'true')
}
})
}, [])
const setupIntersectionObserver = useCallback(() => {
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
const element = entry.target as HTMLElement
// Add animation classes when elements come into view
element.classList.add('animate-fade-in')
// Track visibility for analytics
trackEvent('element_viewed', {
category: 'engagement',
label: element.id || element.className
})
}
})
},
{ threshold: 0.1 }
)
// Observe all sections
const sections = document.querySelectorAll('section, .card, .feature')
sections.forEach((section) => observer.observe(section))
return () => observer.disconnect()
}, [trackEvent])
const optimizeScrollPerformance = useCallback(() => {
let ticking = false
const updateScrollPosition = () => {
// Throttled scroll handling
const scrollY = window.scrollY
// Update navigation based on scroll position
const nav = document.querySelector('nav')
if (nav) {
if (scrollY > 50) {
nav.classList.add('scrolled')
} else {
nav.classList.remove('scrolled')
}
}
ticking = false
}
const handleScroll = () => {
if (!ticking) {
requestAnimationFrame(updateScrollPosition)
ticking = true
}
}
window.addEventListener('scroll', handleScroll, { passive: true })
return () => window.removeEventListener('scroll', handleScroll)
}, [])
const setupResourceHints = useCallback(() => {
// DNS prefetch for external domains
const domains = [
'fonts.googleapis.com',
'fonts.gstatic.com',
'www.google-analytics.com'
]
domains.forEach((domain) => {
const link = document.createElement('link')
link.rel = 'dns-prefetch'
link.href = `//${domain}`
document.head.appendChild(link)
})
}, [])
const trackPerformanceMetrics = useCallback(() => {
// Track Core Web Vitals
const metrics: PerformanceMetrics = {
lcp: null,
fid: null,
cls: null,
fcp: null,
ttfb: null
}
// Track page load time
window.addEventListener('load', () => {
const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
trackEvent('page_load_time', {
category: 'performance',
value: loadTime
})
})
// Track resource loading
const observer = new PerformanceObserver((list) => {
list.getEntries().forEach((entry) => {
if (entry.entryType === 'resource') {
trackEvent('resource_load', {
category: 'performance',
label: entry.name,
value: Math.round(entry.duration)
})
}
})
})
observer.observe({ entryTypes: ['resource'] })
}, [trackEvent])
useEffect(() => {
// Run optimizations after component mount
const timer = setTimeout(() => {
optimizeImages()
preloadCriticalResources()
optimizeThirdPartyScripts()
setupResourceHints()
trackPerformanceMetrics()
}, 100)
const cleanup = setupIntersectionObserver()
const scrollCleanup = optimizeScrollPerformance()
return () => {
clearTimeout(timer)
cleanup()
scrollCleanup()
}
}, [
optimizeImages,
preloadCriticalResources,
optimizeThirdPartyScripts,
setupIntersectionObserver,
optimizeScrollPerformance,
setupResourceHints,
trackPerformanceMetrics
])
return null
}
export default EnhancedPerformanceOptimizer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
