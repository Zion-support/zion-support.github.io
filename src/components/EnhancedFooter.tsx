import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Brain, 
  Rocket, 
  Cpu, 
  Shield, 
  Leaf, 
  Satellite,
  Zap,
  Star,
  TrendingUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI & Automation',
      icon: <Brain className="h-5 w-5 text-zion-cyan" />,
      services: [
        { name: 'AI Autonomous Business Operations', href: '/ultimate-innovative-services-2027#ai-autonomous-business-operations-2027' },
        { name: 'AI Autonomous Research Assistant', href: '/ultimate-innovative-services-2027#ai-autonomous-research-assistant-2027' },
        { name: 'AI-Powered IT Asset Management', href: '/ultimate-innovative-services-2027#ai-powered-it-asset-management-2027' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: <Rocket className="h-5 w-5 text-zion-purple-light" />,
      services: [
        { name: 'Quantum Neural Network Platform', href: '/ultimate-innovative-services-2027#quantum-neural-network-platform-2027' },
        { name: '5G Enterprise Solutions', href: '/ultimate-innovative-services-2027#5g-enterprise-solutions-2027' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cpu className="h-5 w-5 text-zion-cyan" />,
      services: [
        { name: 'AI-Powered IT Asset Management', href: '/ultimate-innovative-services-2027#ai-powered-it-asset-management-2027' },
        { name: 'Enterprise Infrastructure', href: '/all-services-2027?category=IT%20Services' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: <Shield className="h-5 w-5 text-zion-purple-light" />,
      services: [
        { name: 'SOC2 Compliance Automation', href: '/ultimate-innovative-services-2027#soc2-compliance-automation-2027' },
        { name: 'Enterprise Security Solutions', href: '/all-services-2027?category=Security%20%26%20Compliance' }
      ]
    },
    {
      title: 'Green Tech',
      icon: <Leaf className="h-5 w-5 text-zion-cyan" />,
      services: [
        { name: 'Sustainability Platform', href: '/ultimate-innovative-services-2027#green-tech-sustainability-platform-2027' },
        { name: 'ESG Solutions', href: '/all-services-2027?category=Green%20Tech' }
      ]
    },
    {
      title: 'Space Technology',
      icon: <Satellite className="h-5 w-5 text-zion-purple-light" />,
      services: [
        { name: 'Space Technology Innovation', href: '/ultimate-innovative-services-2027#space-technology-innovation-2027' },
        { name: 'Satellite Solutions', href: '/all-services-2027?category=Space%20Technology' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'All Services 2027', href: '/all-services-2027' },
    { name: 'Innovative Services', href: '/ultimate-innovative-services-2027' },
    { name: 'Pricing', href: '/ultimate-pricing-2027' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="h-5 w-5" /> },
    { name: 'YouTube', href: '#', icon: <Youtube className="h-5 w-5" /> },
    { name: 'GitHub', href: '#', icon: <Github className="h-5 w-5" /> }
  ];

  return (
    <footer className="bg-zion-slate-dark border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-zion-slate-light text-sm">Innovation 2027</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading provider of cutting-edge AI, IT, and emerging technology solutions. 
              Transform your business with our innovative micro SAAS services designed for 2027 and beyond.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors duration-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Star className="h-5 w-5 text-zion-cyan" />
              Our Services
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <h5 className="text-zion-cyan font-semibold mb-3 flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </h5>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-zion-purple-light" />
              Quick Links
            </h4>
            
            <ul className="space-y-2 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-zion-cyan" />
              Follow Us
            </h4>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-purple-light hover:bg-zion-purple/30 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-zion-purple/20 bg-zion-blue-dark/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="text-white font-bold text-xl mb-2">Stay Updated with Innovation</h4>
            <p className="text-zion-slate-light mb-6">
              Get the latest updates on our cutting-edge services and technology innovations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zion-purple/20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}