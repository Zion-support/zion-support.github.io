import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, ExternalLink, Home, Users, Briefcase, Phone, FileText, BookOpen, Settings } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Blog', url: '/blog' },
        { name: 'Careers', url: '/careers' }
      ]
    },
    {
      title: 'AI Services',
      icon: Settings,
      links: [
        { name: 'AI Services Overview', url: '/ai-services' },
        { name: 'AI Analytics', url: '/ai-analytics' },
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Healthcare', url: '/ai-healthcare' },
        { name: 'AI Fintech', url: '/ai-fintech' },
        { name: 'AI Content Generation', url: '/ai-content-generation' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity' }
      ]
    },
    {
      title: 'IT Services',
      icon: Briefcase,
      links: [
        { name: 'IT Services Overview', url: '/it-services' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
        { name: 'Cybersecurity', url: '/cybersecurity' },
        { name: 'Custom Development', url: '/services' },
        { name: 'Data Management', url: '/services' },
        { name: 'Network Solutions', url: '/services' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      links: [
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Support', url: '/support' },
        { name: 'Consultation', url: '/consultation' },
        { name: 'Demo', url: '/demo' },
        { name: 'Micro SaaS', url: '/micro-saas' }
      ]
    },
    {
      title: 'Legal',
      icon: FileText,
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' }
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Website Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all our AI and IT services, resources, and pages in one place." />
        <meta name="keywords" content="sitemap, navigation, website map, pages, services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Website <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sitemap</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. 
                Find all our AI and IT services, resources, and pages in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.url}
                          className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Quick Links</h2>
              <p className="text-xl text-gray-300">
                Popular pages and services
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link to="/ai-services" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-white font-semibold">AI Services</div>
              </Link>
              
              <Link to="/it-services" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-white font-semibold">IT Services</div>
              </Link>
              
              <Link to="/contact" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-white font-semibold">Contact Us</div>
              </Link>
              
              <Link to="/demo" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-white font-semibold">Live Demo</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for assistance or to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default SitemapPage