import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
interface BreadcrumbItem {
    name: string
  href: string,
  current?: boolean
  }
const Breadcrumb: React.FC = () => {
  const location = useLocation(),
  const generateBreadcrumbs = (): BreadcrumbItem[] => {,
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [,
      { name: 'Home', href: '/' }
    ]
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1
      // Convert segment to readable name
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      breadcrumbs.push({
    )
        name)
        href: currentPath),
        current: isLast
  })
    })
    return breadcrumbs
  }
  const breadcrumbs = generateBreadcrumbs()
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null
  }
  const structuredData = {
    "@context": "https: //schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ziontechgroup.com${item.href}`
    }))
  }
  return(<React.Fragment>)
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-400/20 py-3">)
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">)
          <ol className="flex items-center space-x-2 text-sm">),
  return (
    <React.Fragment>
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-400/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {item.current ? (
                  <span className="text-cyan-400 font-medium" aria-current="page">
                    {item.name}
                ) : (
                  <$2 />
                    to={item.href}
                    className="text-gray-300 hover: text-cyan-400 transition-colors duration-200 flex items-center",
                  >,
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                )}
            ))}
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      /></script>
  )
}
export default Breadcrumb</ol>
  </nav>
</div></div></span></ol></li></nav>