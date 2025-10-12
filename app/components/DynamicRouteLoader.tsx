import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

interface DynamicRouteLoaderProps {
  path: string
  fallback?: React.ReactNode
}

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

// Dynamic component loader
const loadPageComponent = (path: string) => {
  // Convert path to component path
  const componentPath = path === '/' ? './page' : `./${path}/page`
  
  try {
    return React.lazy(() => import(/* @vite-ignore */ componentPath))
  } catch (error) {
    console.error(`Failed to load component for path: ${path}`, error)
    // Return a fallback component
    return React.lazy(() => Promise.resolve({
      default: () => (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-gray-300 mb-8">Page not found</p>
            <a 
              href="/" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Go Home
            </a>
          </div>
        </div>
      )
    }))
  }
}

const DynamicRouteLoader: React.FC<DynamicRouteLoaderProps> = ({ 
  path, 
  fallback = <PageLoader /> 
}) => {
  const PageComponent = loadPageComponent(path)
  
  // Generate page title and meta description based on path
  const getPageTitle = (path: string): string => {
    if (path === '/') return 'Zion Tech Group - AI & IT Solutions for the Future'
    
    const segments = path.split('/').filter(Boolean)
    const lastSegment = segments[segments.length - 1]
    
    // Convert kebab-case to Title Case
    const title = lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    return `${title} - Zion Tech Group`
  }
  
  const getPageDescription = (path: string): string => {
    if (path === '/') return 'Leading provider of AI, cloud services, cybersecurity, and 5G solutions. Transform your business with cutting-edge technology.'
    
    const segments = path.split('/').filter(Boolean)
    const lastSegment = segments[segments.length - 1]
    
    // Generate description based on path
    const descriptions: { [key: string]: string } = {
      'about': 'Learn about Zion Tech Group, our mission, vision, and the team behind cutting-edge AI and IT solutions.',
      'contact': 'Get in touch with Zion Tech Group for AI, cloud services, cybersecurity, and 5G solutions. Contact us today.',
      'pricing': 'View our competitive pricing for AI services, cloud solutions, cybersecurity, and 5G implementation.',
      'ai-services': 'Comprehensive AI services including content generation, chatbots, analytics, and automation solutions.',
      'it-services': 'Professional IT services including web development, mobile apps, DevOps, and infrastructure management.',
      'cybersecurity': 'Advanced cybersecurity solutions to protect your business from threats and ensure compliance.',
      'cloud-services': 'Scalable cloud infrastructure, migration services, and cloud-native development solutions.',
      '5g-implementation': '5G network implementation, IoT solutions, and edge computing for next-generation connectivity.'
    }
    
    return descriptions[lastSegment] || `Professional ${lastSegment.replace(/-/g, ' ')} services from Zion Tech Group.`
  }
  
  const pageTitle = getPageTitle(path)
  const pageDescription = getPageDescription(path)
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="AI solutions, cloud services, cybersecurity, 5G, IT consulting, data analytics" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ziontechgroup.com${path}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <Suspense fallback={fallback}>
        <PageComponent />
      </Suspense>
    </>
  )
}

export default DynamicRouteLoader