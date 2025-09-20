<<<<<<< HEAD

export default function ComprehensiveSitemap() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Comprehensive Sitemap
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our comprehensivesitemap page
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
}
=======
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Rocket,
  Target,
  Building,
  Phone,
  FileText,
  Users,
  HelpCircle,
  Globe,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
  Shield,
  Cloud,
  Workflow,
  Briefcase,
  Package,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Calendar,
  Code,
  Gauge,
  GraduationCap,
  MessageCircle,
  Settings,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

export function ComprehensiveSitemap() {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About Us', href: '/about', description: 'Company information and mission' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
        { name: 'Request Quote', href: '/request-quote', description: 'Get pricing information' }
      ]
    },
    {
      title: 'Services',
      icon: Rocket,
      pages: [
        { name: 'All Services', href: '/services', description: 'Complete service overview' },
        { name: 'AI Solutions', href: '/services/ai', description: 'Artificial intelligence services' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', href: '/services/cloud', description: 'Cloud infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital', description: 'Digital transformation consulting' },
        { name: 'IT Consulting', href: '/services/consulting', description: 'IT advisory services' },
        { name: 'Micro SAAS', href: '/services/micro-saas', description: 'Software-as-a-service solutions' },
        { name: 'Comprehensive Services', href: '/comprehensive-services', description: 'Full service portfolio' }
      ]
    },
    {
      title: 'Solutions',
      icon: Target,
      pages: [
        { name: 'All Solutions', href: '/solutions', description: 'Complete solution overview' },
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Enterprise solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Financial Services', href: '/solutions/financial', description: 'Financial technology' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Manufacturing solutions' },
        { name: 'Government', href: '/solutions/government', description: 'Government technology' },
        { name: 'Retail', href: '/solutions/retail', description: 'Retail technology' },
        { name: 'Education', href: '/solutions/education', description: 'Educational technology' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and articles' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories and examples' },
        { name: 'White Papers', href: '/white-papers', description: 'Research and analysis' },
        { name: 'Webinars', href: '/webinars', description: 'Online events and presentations' },
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', href: '/api', description: 'API documentation' },
        { name: 'Research & Development', href: '/research-development', description: 'R&D initiatives' }
      ]
    },
    {
      title: 'Support',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', href: '/help', description: 'Support and assistance' },
        { name: 'Contact Support', href: '/contact', description: 'Get help from our team' },
        { name: 'Training', href: '/training', description: 'Training programs' },
        { name: 'Community', href: '/community', description: 'User community' },
        { name: 'System Status', href: '/status', description: 'Service status and updates' }
      ]
    },
    {
      title: 'Company',
      icon: Building,
      pages: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership information' },
        { name: 'Press', href: '/press', description: 'Press releases and media' },
        { name: 'Leadership', href: '/about#team', description: 'Leadership team' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', href: '/privacy-policy', description: 'Privacy information' },
        { name: 'Terms of Service', href: '/terms-of-service', description: 'Terms and conditions' },
        { name: 'Cookie Policy', href: '/cookie-policy', description: 'Cookie usage information' }
      ]
    },
    {
      title: 'Additional Pages',
      icon: Globe,
      pages: [
        { name: 'Pricing', href: '/pricing', description: 'Service pricing information' },
        { name: 'Sitemap', href: '/sitemap', description: 'Basic sitemap' },
        { name: 'Comprehensive Sitemap', href: '/comprehensive-sitemap', description: 'Detailed sitemap' },
        { name: 'Developer Portal', href: '/developer', description: 'Developer resources' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/request-quote', icon: ArrowRight, color: 'from-cyan-500 to-blue-600' },
    { name: 'Contact Us', href: '/contact', icon: Phone, color: 'from-green-500 to-emerald-600' },
    { name: 'View Services', href: '/services', icon: Rocket, color: 'from-purple-500 to-pink-600' },
    { name: 'Read Blog', href: '/blog', icon: FileText, color: 'from-orange-500 to-red-600' }
  ];

  const serviceHighlights = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      services: ['AI Analytics', 'Natural Language Processing', 'Computer Vision', 'Predictive Modeling'],
      href: '/services/ai'
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      services: ['Threat Detection', 'Penetration Testing', 'Security Auditing', 'Incident Response'],
      href: '/services/cybersecurity'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      services: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Infrastructure as Code'],
      href: '/services/cloud'
    },
    {
      category: 'Digital Transformation',
      icon: Workflow,
      services: ['Process Optimization', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
      href: '/services/digital'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our complete website structure and discover all the services, 
            solutions, and resources available at Zion Tech Group.
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                  {link.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Sitemap */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Complete Website Structure</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {siteStructure.map((section) => (
              <div key={section.title} className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="group flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-200 hover:shadow-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">{page.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Service Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceHighlights.map((category) => (
              <div
                key={category.category}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  {category.services.map((service) => (
                    <div key={service} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={category.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding Something?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate 
            our services and find the right solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge technology solutions. 
              From AI and cybersecurity to cloud infrastructure and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComprehensiveSitemap;

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
