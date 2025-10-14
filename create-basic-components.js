#!/usr/bin/env node

import fs from 'fs''
import path from 'path''
// Function to create directory if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}
// Function to create a component
function createComponent(filePath, content) {
  const dir = path.dirname(filePath)
  ensureDir(dir)'
  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`Created: ${filePath}`)
}
// Navigation component
const navigationComponent = `import React from "react""
import { Link } from "react-router-dom""
import { Menu, X } from "lucide-react"
const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return ("
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/20">"
      <div className="container mx-auto px-4">"
        <div className="flex items-center justify-between h-16">"
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          "
          <div className="hidden md:block">"
            <div className="ml-10 flex items-baseline space-x-4">"
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>"
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>"
              <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>"
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          "
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}"
              className="text-gray-300 hover:text-white"
            >"
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && ("
          <div className="md:hidden">"
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">"
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>"
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>"
              <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </Link>"
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navigation
`
// Footer component"
const footerComponent = `import React from "react""
import { Link } from "react-router-dom""
import { Mail, Phone, MapPin } from "lucide-react"
const Footer = () => {
  return ("
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-purple-500/20">"
      <div className="container mx-auto px-4 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>"
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300 mb-4">
              Leading provider of AI solutions, IT services, and digital transformation.
            </p>
          </div>
          
          <div>"
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>"
            <ul className="space-y-2">"
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>"
              <li><Link to="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>"
              <li><Link to="/cloud-services" className="text-gray-300 hover:text-white">Cloud Services</Link></li>"
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>"
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>"
            <ul className="space-y-2">"
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>"
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>"
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>"
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>"
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>"
            <div className="space-y-2">"
              <div className="flex items-center">"
                <Mail className="h-4 w-4 text-purple-400 mr-2" />"
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center">"
                <Phone className="h-4 w-4 text-purple-400 mr-2" />"
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>"
              <div className="flex items-center">"
                <MapPin className="h-4 w-4 text-purple-400 mr-2" />"
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        "
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">"
          <p className="text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
`
// Header component"
const headerComponent = `import React from "react""
import { Helmet } from "react-helmet-async"
const Header = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>"
      <meta name="description" content={description} />
    </Helmet>
  )
}
export default Header
`
// Sidebar component"
const sidebarComponent = `import React from "react""
import { Link } from "react-router-dom""
import { X } from "lucide-react"
const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return ("
    <div className="fixed inset-0 z-50">"
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />"
      <div className="fixed top-0 left-0 h-full w-64 bg-slate-900 p-6">"
        <div className="flex items-center justify-between mb-8">"
          <h2 className="text-xl font-bold text-white">Menu</h2>"
          <button onClick={onClose} className="text-gray-300 hover:text-white">"
            <X className="h-6 w-6" />
          </button>
        </div>
        "
        <nav className="space-y-4">"
          <Link to="/" className="block text-gray-300 hover:text-white py-2">
            Home
          </Link>"
          <Link to="/about" className="block text-gray-300 hover:text-white py-2">
            About
          </Link>"
          <Link to="/services" className="block text-gray-300 hover:text-white py-2">
            Services
          </Link>"
          <Link to="/contact" className="block text-gray-300 hover:text-white py-2">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}
export default Sidebar
`
// ErrorBoundary component"
const errorBoundaryComponent = `import React from "react"
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return ("
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>"
            <p className="text-gray-300 mb-8">Please refresh the page or try again later.</p>
            <button
              onClick={() => window.location.reload()}"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
`
// Loading component"
const loadingComponent = `import React from "react"
const Loading = () => {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
      <div className="text-center">"
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>"
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  )
}
export default Loading
`
// Main execution
async function main() {'
  console.log('Creating basic components...')'
  createComponent('app/components/Navigation.tsx', navigationComponent)'
  createComponent('app/components/Footer.tsx', footerComponent)'
  createComponent('app/components/Header.tsx', headerComponent)'
  createComponent('app/components/Sidebar.tsx', sidebarComponent)'
  createComponent('app/components/ErrorBoundary.tsx', errorBoundaryComponent)'
  createComponent('app/components/Loading.tsx', loadingComponent)'
  console.log('Basic components created successfully!')
}
main().catch(console.error)'"