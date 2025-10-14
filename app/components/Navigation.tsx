import React, { use State } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Chevron Down, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

export default function Navigation() {
  const [is Open, set Is Open] = use State(false)
  const [is Services Open, set Is Services Open] = use State(false)
  
  const toggle Menu = () => {
    set Is Open(!is Open)
  }

  const toggle Services = () => {
    set Is Services Open(!is Services Open)
  }

  const services = [
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cloud Solutions', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: '5 G Implementation', path: '/5 g-implementation', icon: <Globe className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Development', path: '/custom-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Solutions', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }]
  return (
    <nav className="bg-white/10 backdrop-blur-lgfixed w-full top-0 z-50 border-b border-white/20">
      <div className="max-w-7 xlmx-auto px-4 sm:px-6 lg:px-8">
        <div className="flexjustify-betweenitems-center h-16">
          <div className="flexitems-center">
            <Link to="/" className="flexitems-centerspace-x-2">
              <div className="w-8 h-8bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-whitefont-boldtext-lg">Z</span>
              </div>
              <span className="text-xlfont-boldtext-white">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hiddenlg:block">
            <div className="ml-10 flexitems-baseline space-x-1">
              <Link to="/" className="text-whitehover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-whitehover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <but tonon Click={toggle Services}
                  className="text-whitehover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4ml-1" />
                </butn>
                
                {is Services Open && (
                  <div className="absolutetop-fullleft-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    {services.map((service, index) => (
                      <Linkkey={index}
                        to={service.path}
                        className="flexitems-centerpx-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        on Click={() => set Is Services Open(false)}
                      >
                        {service.icon}
                        <span className="ml-3 text-smfont-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/ai-services" className="text-whitehover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                AI Services
              </Link>
              <Link to="/contact" className="text-whitehover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <but tonon Click={toggle Menu}
              className="text-whitehover:text-purple-300 focus:outline-none focus:text-purple-300"
            >
              {is Open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </butn>
          </div>
        </div>
      </div>

      {is Open && (
        <div className="lg:hidden">
          <div className="px-2 pt-2pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20">
            <Link to="/" className="text-whitehover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" on Click={() => set Is Open(false)}>
              Home
            </Link>
            <Link to="/about" className="text-whitehover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" on Click={() => set Is Open(false)}>
              About
            </Link>
            
            {/* Mobile Services Section */}
            <div className="px-3 py-2">
              <div className="text-whitefont-mediumtext-base mb-2">Services</div>
              <div className="pl-4 space-y-1">
                {services.map((service, index) => (
                  <Linkkey={index}
                    to={service.path}
                    className="flexitems-centertext-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                    on Click={() => set Is Open(false)}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/ai-services" className="text-whitehover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" on Click={() => set Is Open(false)}>
              AI Services
            </Link>
            <Link to="/contact" className="text-whitehover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" on Click={() => set Is Open(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}