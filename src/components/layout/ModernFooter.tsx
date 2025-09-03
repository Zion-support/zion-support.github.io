import React from 'react'
import Link from 'next/link'
import { 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowUp, 
  ExternalLink,
  Network,
  Database,
  Settings,
  BarChart3,
  Code,
  Server,
  Lock,
  Award,
  TrendingUp,
  Target,
  Calendar,
  FileText,
  MessageSquare,
  Eye,
  Cpu,
  Wifi,
  Monitor,
  HardDrive,
  Router,
  Wrench,
  Cog,
  Activity,
  CheckCircle,
  Star,
  Clock,
  ArrowRight
} from 'lucide-react'

const ModernFooter = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Network },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', href: '/cloud-devops', icon: Server },
        { name: 'Data Analytics', href: '/data-analytics', icon: BarChart3 }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support Center', href: '/support' },
        { name: 'Training', href: '/training' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security', href: '/security' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ]

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/zion-tech-group', 
      icon: Linkedin 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/ziontechgroup', 
      icon: Twitter 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/zion-tech-group', 
      icon: Github 
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of innovative AI services, micro SaaS solutions, and comprehensive IT services. 
              We deliver cutting-edge technology solutions that drive business growth and digital transformation.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-300 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                      )}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest news and updates about our services and technology trends.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-r-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-cyan-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-cyan-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-cyan-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  )
}

export default ModernFooter