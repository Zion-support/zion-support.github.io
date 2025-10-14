import React from 'react';
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Support', href: '/support' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' }
  ];

  const social = [
    { name: 'LinkedIn', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { name: 'Twitter', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )},
    { name: 'GitHub', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )}
  ];

  const resourceLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
    { label: 'Support', href: '/support' },
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'White Papers', href: '/whitepapers' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Security', href: '/security' }
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },""
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },""
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },""
    { label: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },""
    { label: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },""
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }""
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },""
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },""
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },""
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }""
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <CpuChipIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT solutions for modern businesses. 
              Empowering digital transformation through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>""
              <div className="flex space-x-4">""
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"""
                    rel="noopener noreferrer"""
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300 group"""
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <div className="space-y-3">
              {resourceLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Address</p>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI innovations, technology trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';  ArrowRightIcon'
} from '@heroicons/react/24/outline";
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react";
  HeartIcon
} from '@heroicons/react/24/outline";
} from '@heroicons/react/24/outline";
  GlobeAltIcon
} from '@heroicons/react/24/outline";
} from '@heroicons/react/24/outline";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },'
    { name: 'IT Solutions', href: '/it-solutions' },'
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },'
    { name: 'Cybersecurity', href: '/cybersecurity' },'
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },'
    { name: 'Digital Transformation', href: '/digital-transformation' },'
    { name: '5G Solutions', href: '/5g-solutions' }'
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "IT Solutions", href: "/it-solutions" },
    { name: "Micro SaaS Solutions", href: "/micro-saas-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Cloud Infrastructure", href: "/cloud-solutions" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "5G Solutions", href: "/5g-solutions" }
  ];

  const company = [
    { name: 'About Us', href: '/about' },'
    { name: 'Solutions', href: '/solutions' },'
    { name: 'Pricing', href: '/pricing' },'
    { name: 'Blog', href: '/blog' },'
    { name: 'Careers', href: '/careers' },'
    { name: 'Case Studies', href: '/case-studies' }'
  ];
  const support = [
    { name: 'Contact', href: '/contact' },'
    { name: 'Support', href: '/support' },'
    { name: 'Tutorials', href: '/tutorials' },'
    { name: 'Demo', href: '/demo' },'
    { name: 'Documentation', href: '/docs' }'
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'API Documentation', href: '/api-docs' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },'
    { name: 'Terms of Service', href: '/terms' },'
    { name: 'Cookie Policy', href: '/cookies' },'
    { name: 'GDPR', href: '/gdpr' },'
    { name: 'Security', href: '/security' },'
    { name: 'Compliance', href: '/compliance' }'
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },'
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },'
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }'
  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },'
      { name: 'IT Solutions', href: '/it-solutions' },'
      { name: 'Cybersecurity', href: '/cybersecurity' },'
      { name: 'Cloud Solutions', href: '/cloud-solutions' },'
      { name: 'Digital Transformation', href: '/digital-transformation' },'
      { name: 'Micro SaaS', href: '/micro-saas-solutions' },'
      { name: '5G Solutions', href: '/5g-solutions' },'
    ],
    company: [
      { name: 'About Us', href: '/about' },'
      { name: 'Our Team', href: '/team' },'
      { name: 'Careers', href: '/careers' },'
      { name: 'Case Studies', href: '/case-studies' },'
      { name: 'Contact', href: '/contact' },'
    ],
    resources: [
      { name: 'Blog', href: '/blog' },'
      { name: 'Tutorials', href: '/tutorials' },'
      { name: 'Documentation', href: '/docs' },'
      { name: 'Support', href: '/support' },'
      { name: 'Demo', href: '/demo' },'
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },'
      { name: 'Terms of Service', href: '/terms' },'
      { name: 'Cookie Policy', href: '/cookies' },'
    ]
  }
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: GlobeAltIcon },'
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: GlobeAltIcon },'
  ];
  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },'
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },'
      { name: 'Cybersecurity', href: '/cybersecurity' },'
      { name: 'Digital Transformation', href: '/digital-transformation' }'
    ],
    company: [
      { name: 'About Us', href: '/about' },'
      { name: 'Our Team', href: '/team' },'
      { name: 'Careers', href: '/careers' },'
      { name: 'Contact', href: '/contact' }'
    ],
    resources: [
      { name: 'Blog', href: '/blog' },'
      { name: 'Documentation', href: '/docs' },'
      { name: 'Support', href: '/support' },'
      { name: 'FAQ', href: '/faq' }'
    ]
  }
  return (
    <footer className="bg-gray-900 text-white">"
      <div className="max-w-7xl mx-auto px-4 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
          {/* Company Info */}
          <div className="lg:col-span-2">"
            <Link to="/" className="flex items-center space-x-3 mb-6 group">"
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">"
                <span className="text-white font-bold text-xl">Z</span>"
          <div className="lg:col-span-1">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>"
    <footer className="bg-slate-900 border-t border-slate-700/50">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">"
          {/* Company Info */}
          <div className="lg:col-span-2">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">"
                <CpuChipIcon className="w-5 h-5 text-white" />"
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>"
            </div>
            <p className="text-gray-400 mb-6 max-w-md">"
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            {/* Contact Info */}            <div className="space-y-3 mb-6">"
            {/* Contact Info */}
            <div className="space-y-3 mb-6">"
              <div className="flex items-center space-x-3 text-gray-300">"
                <PhoneIcon className="w-5 h-5 text-purple-400" />"
            {/* Contact Info */}
            <div className="space-y-3">"
              <div className="flex items-center space-x-3 text-gray-400">"
                <PhoneIcon className="w-4 h-4" />"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          { /* Company Info */ }
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <CpuChipIcon className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            {/* Contact Info */}            <div className="space-y-3 mb-6">
            { /* Contact Info */ }
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
            { /* Contact Info */ }
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">"
                <EnvelopeIcon className="w-4 h-4" />"
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">"
                <MapPinIcon className="w-4 h-4" />"
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            {/* Social Links */}            <div className="flex space-x-4">"
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank""
                  rel="noopener noreferrer""
                  className="text-gray-400 hover:text-white transition-colors""
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && '📘'}'
                  {social.icon === 'twitter' && '🐦'}'
                  {social.icon === 'linkedin' && '💼'}'
                  {social.icon === 'github' && '🐙'}'
                </a>
              ))}            <div className="flex space-x-4">"
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
          <div className="lg:col-span-1">"
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300 mb-4">"
              Leading provider of AI and IT solutions that transform businesses 
              through innovative technology.
            </p>
            <div className="flex space-x-4">"
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Facebook className="w-5 h-5" />"
            {/* Social Links */}
            <div className="flex space-x-4">"
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
                <Linkedin className="w-5 h-5" />"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Twitter className="w-5 h-5" />"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Linkedin className="w-5 h-5" />"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                <Github className="w-5 h-5" />"
              </a>
                  <span className="sr-only">{social.name}</span>"
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">"
                    {social.icon === 'linkedin' && <span className="text-xs">in</span>}"
                    {social.icon === 'twitter' && <span className="text-xs">t</span>}"
                    {social.icon === 'github' && <span className="text-xs">g</span>}"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
                  <span className="sr-only">{social.name}</span>
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                    { social.icon === 'linkedin' && <span className="text-xs">in</span> }
                    { social.icon === 'twitter' && <span className="text-xs">t</span> }
                    { social.icon === 'github' && <span className="text-xs">g</span> }
                  </div>
                </a>
              ))
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">"
                <Github className="w-5 h-5" />"
              </a>
            </div>
          </div>
          { /* Services */ }
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    to={ link.href }
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    { link.name }
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading provider of AI-powered IT solutions and digital transformation services.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-400 hover:text-white">
                    {service.name};
                  </Link>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest news and updates from Zion Tech Group.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <HeartIcon className="h-4 w-4 text-red-400 mx-1" /> by Zion Tech Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
