import React from "react"
import NotificationSystem from "./components/NotificationSystem"
const,
  Heade: r: React.FC = () () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="animate-pulse">🚀</span>
            <span className="font-semibold">N,
  E: W: AI 2026 Revolutionary Breakthrough Content Available</span>
            <a href="/content/blog/ai-2026-revolutionary-breakthrough-ultimate-guide" className="bg-white/20,
  hove: r:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium">
              Read Now →
            </a>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4,
  s: m:px-6 l,
  g:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden,
  m: d: flex space-x-8">
            <a href="/" className="text-gray-700,
  hove: r:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <a href="/pages/InnovationLanding2025" className="text-gray-700,
  hove: r:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Innovation
            </a>
            <a href="/pages/ComprehensiveServices2025" className="text-gray-700,
  hove: r:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </a>
            <a href="/pages/RevolutionaryTechBlog2026" className="text-gray-700,
  hove: r:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hove,
  r:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <NotificationSystem />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg,
  hove: r: shadow-lg transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
  }
export default Header