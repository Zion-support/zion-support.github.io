import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Voice Assistant Enterprise', href: '/ai-voice-assistant-enterprise' },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform' },
        { name: 'AI E-commerce Platform', href: '/ai-ecommerce-platform' },
        { name: 'AI Healthcare Platform', href: '/ai-healthcare-platform' },
        { name: 'AI Financial Platform', href: '/ai-financial-platform' },
        { name: 'AI Education Platform', href: '/ai-education-platform' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      services: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'API Management', href: '/ai-api-management' },
        { name: 'Database Solutions', href: '/ai-database-solutions' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'Performance Monitoring', href: '/performance-monitoring' },
        { name: 'DevOps Solutions', href: '/devops-solutions' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-5 h-5 text-green-400" />,
      services: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Private Networks', href: '/5g-private-networks' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Cloud className="w-5 h-5 text-orange-400" />,
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="l g: col-span-2">
            <Link to="/" className="flexitems-centerspace-x-3mb-6group">
              <div className="w -1 2 h-12 bg-gradient-to-r from-purple-500 to-cyan-500rounded-lgflexitems-centerjustify-centergroup-hover:scale-110transition-transformcyber-glow">
                <span className="text-whitefont-boldtext-xl">Z</span>
                </div>
        </div>
              <span className="text-xlfont-bold text-whitegroup-hover:text-purple-400transition-colors">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400mb-6max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3mb-6">
              <div className="flexitems-centerspace-x-3text-gray-300">
                <PhoneIcon className="w -5h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
                </div>
        </div>
              <div className="flexitems-centerspace-x-3text-gray-300">
                <EnvelopeIcon className="w -5h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
                </div>
        </div>
              <div className="flexitems-centerspace-x-3text-gray-300">
                <MapPinIcon className="w -5h-5 text-purple-400" />
                <span>3 6 4 E Main St STE 1 0 0 8, Middletown, DE 19 7 0 9</span>
                </div>
        </div>
              </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@ziontech.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>123 Tech Street, Innovation City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
        </div>
          <div className="flexspace-x-6">
            <Link to="/privacy" className="text-gray-400hover:text-whitetransition-colorstext-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400hover:text-whitetransition-colorstext-sm">Terms of Service</Link>
            </div>
        </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
  )
export default Footer;;
