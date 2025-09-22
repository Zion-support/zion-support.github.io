import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Cybersecurity', href: '/services/security' },
        { name: 'Digital Transformation', href: '/services/innovation' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Documentation', href: '/docs' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Advanced AI and technology solutions that transform businesses and drive innovation in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}