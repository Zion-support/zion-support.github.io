import React from 'react'
import { Link } from 'react-router-dom'
import {




  ArrowRight Icon
  Phone Icon
  Envelope Icon
  Map Pin Icon
  Heart Icon
} from '@heroicons/react/24/outline'
const Footer: React.FC = () => {
  const services = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  const company = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  const support = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  const legal = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  const social Links = 
  return (
    <div>
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          {/* Company Info */}
  )
          <div className="lg:col-span-2">
        
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
        
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
            <p>
          
              Leading provider of advanced A I and I T solutions, cybersecurity, cloud infrastructure
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
  )
            <div className="space-y-3 mb-6">
        
              <div className="flex items-center space-x-3 text-gray-300">
        
                <Phone Icon className="w-5 h-5 text-purple-400" />
                <span>+1-30 2-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
        
                <Envelope Icon className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
        
                <Map Pin Icon className="w-5 h-5 text-purple-400" />
                <span>364 E Main St ST E 1008, Middletown, D E 19709</span>
              </div>

            {/* Social Links */}
  )
            <div className="flex space-x-4">
        
              {social Links.map((social) => (
                <a
                  key={social.name}
  )
                  href={social.href}
  )
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-purple-500 transition-colors">
        
                    {social.name.char At(0)}
  )
                  </div>
                </a>
              ))}
  )
            </div>

          {/* Services */}
  )
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
  )
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight Icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
  )
                  </Link>
                </li>
              ))}
  )
            </ul>
          </div>

          {/* Company */}
  )
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
  )
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight Icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
  )
                  </Link>
                </li>
              ))}
  )
            </ul>
          </div>

        {/* Bottom Section */}
  )
        <div className="border-t border-slate-700 mt-12 pt-8">
        
          <div className="flex flex-col md:flex-row justify-between items-center">
        
            <div className="flex items-center space-x-4 text-gray-400 mb-4 md:mb-0">
        
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
        
                <span>Made with</span>
                <Heart Icon className="w-4 h-4 text-red-500" />
                <span>for innovation</span>
              </div>
            
            <div className="flex flex-wrap gap-4">
        
              {legal.map((item) => (
                <Link
                  key={item.name}
  )
                  to={item.href}
  )
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {item.name}
  )
                </Link>
              ))}
  )
            </div>
        </div>
    </footer>
  )
}
  )
export default Footer;;
