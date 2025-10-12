import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder' },
    { name: 'AI Content Generation', url: '/ai-content-generator' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant' }
  ]

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration' },
    { name: 'DevOps & CI/CD', url: '/devops' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Database Management', url: '/database' },
    { name: 'API Development', url: '/api' },
    { name: 'Mobile Development', url: '/mobile-development' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Zion Tech</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation