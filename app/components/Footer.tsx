import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services</Link></li>
              <li><Link to="/consulting" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm">
              Email: info@ziontechgroup.com<br />
              Phone: +1 (302) 464-0950
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
