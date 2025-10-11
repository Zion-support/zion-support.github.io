import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Link, ArrowRight, ExternalLink } from 'lucide-react'

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Services', url: '/services' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Blog', url: '/blog' },
        { name: 'Team', url: '/team' },
        { name: 'Careers', url: '/careers' }
      ]
    },
    {
      title: 'AI Services',
      links: [
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Healthcare', url: '/ai-healthcare' },
        { name: 'AI Fintech', url: '/ai-fintech' },
        { name: 'Quantum Computing', url: '/quantum-computing' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud Services', url: '/cloud-services' },
        { name: 'Cybersecurity', url: '/cybersecurity' },
        { name: 'Data Analytics', url: '/data-analytics' },
        { name: 'DevOps', url: '/devops' },
        { name: '5G Implementation', url: '/5g-implementation' }
      ]
    },
    {
      title: 'Micro SAAS',
      links: [
        { name: 'Project Management', url: '/project-management' },
        { name: 'Customer Support', url: '/customer-support' },
        { name: 'Inventory Management', url: '/inventory-management' },
        { name: 'Financial Tracking', url: '/financial-tracking' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Consultation', url: '/consultation' },
        { name: 'Demo', url: '/demo' },
        { name: 'Support', url: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find all the pages and resources available on our website. Navigate easily to any section you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Link className="h-6 w-6 text-cyan-400 mr-3" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        {link.name}
                        {link.url.startsWith('http') && (
                          <ExternalLink className="h-3 w-3 ml-2" />
                        )}
                      </a>
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Get Started</h3>
              <p className="text-gray-300 text-sm mb-4">Ready to transform your business?</p>
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                Contact Us →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-bold text-white mb-2">Learn More</h3>
              <p className="text-gray-300 text-sm mb-4">Explore our resources and tutorials</p>
              <a href="/tutorials" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                View Tutorials →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">See Demo</h3>
              <p className="text-gray-300 text-sm mb-4">Watch our solutions in action</p>
              <a href="/demo" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                Watch Demo →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">Get Support</h3>
              <p className="text-gray-300 text-sm mb-4">Need help? We're here for you</p>
              <a href="/support" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                Get Help →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Use our search functionality to quickly find specific content or pages.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search our website..."
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SitemapPage