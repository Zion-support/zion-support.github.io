import React from 'react''
import { Helmet } from 'react-helmet-async''
import { Link } from 'react-router-dom'
const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <Helmet>
        <title>Footer - Zion Tech Group</title>"
        <meta name="description" content="Zion Tech Group footer with links and information." />
      </Helmet>"
      <div className="max-w-7xl mx-auto px-4 py-12">"
        <div className="grid md:grid-cols-4 gap-8">
          <div>"
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for modern enterprises.
            </p>
          </div>
          <div>"
            <h4 className="text-lg font-semibold mb-4">Services</h4>"
            <ul className="space-y-2">"
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400">AI Solutions</Link></li>"
              <li><Link to="/it-solutions" className="text-gray-300 hover:text-cyan-400">IT Solutions</Link></li>"
              <li><Link to="/cloud-services" className="text-gray-300 hover:text-cyan-400">Cloud Services</Link></li>
            </ul>
          </div>
          <div>"
            <h4 className="text-lg font-semibold mb-4">Company</h4>"
            <ul className="space-y-2">"
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400">About</Link></li>"
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400">Careers</Link></li>"
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400">Contact</Link></li>
            </ul>
          </div>
          <div>"
            <h4 className="text-lg font-semibold mb-4">Contact</h4>"
            <p className="text-gray-300">contact@ziontechgroup.com</p>"
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>"
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">"
          <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default EnhancedFooter'"