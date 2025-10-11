import {Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter} from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'

const EnhancedFooter: React.FC = () => {
  
  const currentYear = new Date().getFullYear()
  
  const services = [
    { name: 'AI Solutions', href: '/services/ai' },
    { name: 'Cloud Architecture', href: '/services/cloud' },
    { name: 'Web Development', href: '/services/web' },
    { name: 'Mobile Apps', href: '/services/mobile' },
    { name: 'Data Analytics', href: '/services/analytics' },
    { name: 'DevOps', href: '/services/devops' } ]

  const products = [
    { name: 'AI Platform', href: '/products/ai-platform' },
    { name: 'Cloud Suite', href: '/products/cloud-suite' },
    { name: 'Analytics Dashboard', href: '/products/analytics' },
    { name: 'Mobile SDK', href: '/products/mobile-sdk' } ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' } ]

  return (
    <>
<footer className="bg-gray-900 text-white">
      <div>
          <div>
          <div>
          <div>
              <div>
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital
              presence with cutting-edge AI, cloud architecture and innovative development services.
            </p>
            <div>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.slice(0, 6).map(product => (
                <li key={product.name}>
                  <Link to={product.href} className="text-gray-300 hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
        
        <div>
          <div>
            <div>
              <Mail />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div>
              <Phone />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <MapPin />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div>
              <Link to="/legal/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/legal/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EnhancedFooter