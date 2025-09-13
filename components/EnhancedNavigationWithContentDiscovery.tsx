import React, { useState } from 'react';
import Link from 'next/link';

export default function EnhancedNavigationWithContentDiscovery() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const contentCategories = [
    {
      title: "AI 2035 Revolutionary",
      items: [
        { name: "Revolutionary Breakthroughs", href: "/blog/ai-2035-revolutionary-breakthroughs", featured: true },
        { name: "Universal Transformation Case Study", href: "/case-studies/ai-2035-universal-transformation-breakthrough", featured: true },
        { name: "Ultimate Implementation Guide", href: "/resources/ai-2035-ultimate-implementation-master-guide", featured: true },
        { name: "Consciousness Transfer Technology", href: "/blog/ai-2035-revolutionary-breakthroughs", featured: false },
        { name: "Matter Manipulation AI", href: "/blog/ai-2035-revolutionary-breakthroughs", featured: false }
      ]
    },
    {
      title: "AI 2026 Breakthroughs",
      items: [
        { name: "Breakthrough Innovations", href: "/blog/ai-2026-breakthrough-innovations", featured: true },
        { name: "Future Predictions", href: "/blog/ai-2026-future-predictions", featured: true },
        { name: "Quantum AI Solutions", href: "/quantum-computing-solutions-breakthrough-2026", featured: true },
        { name: "Neural Interfaces", href: "/blog/ai-2026-neural-interface-breakthrough", featured: false },
        { name: "Autonomous Systems", href: "/blog/ai-2026-advanced-autonomous-systems", featured: false }
      ]
    },
    {
      title: "Success Stories",
      items: [
        { name: "Global Tech Giant (2,500% ROI)", href: "/case-studies/ai-2026-global-tech-giant-transformation", featured: true },
        { name: "Fortune 500 Manufacturing", href: "/case-studies/ai-2026-fortune-500-transformation-breakthrough", featured: true },
        { name: "Global Logistics Success", href: "/case-studies/ai-2026-global-logistics-transformation-success", featured: false },
        { name: "Retail Transformation", href: "/case-studies/ai-2026-global-retail-transformation-success", featured: false }
      ]
    },
    {
      title: "Implementation Guides",
      items: [
        { name: "Comprehensive Master Guide", href: "/resources/ai-2026-comprehensive-implementation-master-guide", featured: true },
        { name: "Implementation Toolkit", href: "/resources/ai-2026-implementation-toolkit", featured: true },
        { name: "ROI Calculator", href: "/tools/ai-roi-calculator-2026", featured: false },
        { name: "Best Practices", href: "/resources/ai-2026-best-practices-guide", featured: false }
      ]
    }
  ];

  const quickLinks = [
    { name: "All Content", href: "/content-showcase", icon: "🎯" },
    { name: "Blog Posts", href: "/blog", icon: "📝" },
    { name: "Case Studies", href: "/case-studies", icon: "🏆" },
    { name: "Resources", href: "/resources", icon: "📚" },
    { name: "Tools", href: "/tools", icon: "🛠️" }
  ];

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors focus-visible:focus"
          aria-label="Zion Tech Group - Home"
        >
          Zion Tech Group
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          {/* AI 2026 Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              AI 2026
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                NEW
              </span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Breakthrough Technologies</h3>
                <div className="space-y-2">
                  {contentCategories[0].items.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href} 
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        item.featured 
                          ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.featured && <span className="text-xs text-blue-600 mr-2">⭐</span>}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Library Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              Content Library
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {contentCategories.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">{category.title}</h3>
                      <div className="space-y-1">
                        {category.items.slice(0, 3).map((item, itemIndex) => (
                          <Link 
                            key={itemIndex}
                            href={item.href} 
                            className={`block px-2 py-1 text-xs rounded transition-colors ${
                              item.featured 
                                ? 'text-blue-700 hover:bg-blue-50 font-medium' 
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {item.featured && <span className="text-xs text-blue-600 mr-1">⭐</span>}
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <Link 
                    href="/content-showcase" 
                    className="block text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View All Content →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus flex items-center"
            >
              <span className="mr-1">{link.icon}</span>
              {link.name}
            </Link>
          ))}

          {/* Search Button */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus flex items-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus-visible:focus" 
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search for content, technologies, case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Search Suggestions */}
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Popular Searches</h4>
                <div className="space-y-1">
                  {['quantum AI', 'neural interfaces', 'ROI calculator', 'implementation guide'].map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(term)}
                      className="block text-left text-sm text-gray-600 hover:text-blue-600 w-full"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Recent Content</h4>
                <div className="space-y-1">
                  <Link href="/blog/ai-2026-breakthrough-innovations" className="block text-sm text-gray-600 hover:text-blue-600">
                    AI 2026 Breakthrough Innovations
                  </Link>
                  <Link href="/case-studies/ai-2026-global-tech-giant-transformation" className="block text-sm text-gray-600 hover:text-blue-600">
                    Global Tech Giant Transformation
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Quick Access</h4>
                <div className="space-y-1">
                  {quickLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="block text-sm text-gray-600 hover:text-blue-600">
                      {link.icon} {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}