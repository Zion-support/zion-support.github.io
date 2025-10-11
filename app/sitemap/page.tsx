import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, ArrowRight, Globe, FileText, Users, Settings, BookOpen, Phone, Mail } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main landing page' },
    { name: 'About', path: '/about', description: 'Learn about our company' },
    { name: 'Services', path: '/services', description: 'Our AI and IT services' },
    { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
    { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and testimonials' },
    { name: 'Careers', path: '/careers', description: 'Join our team' }
  ]

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', description: 'Advanced analytics with AI' },
    { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' },
    { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Intelligent customer service' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Data insights with AI' },
    { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI-powered content creation' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Web Development', path: '/web-development', description: 'Custom web applications' },
    { name: 'Mobile Development', path: '/mobile-development', description: 'iOS and Android apps' },
    { name: 'Cybersecurity', path: '/cybersecurity', description: 'Comprehensive security solutions' },
    { name: 'Database Solutions', path: '/database-solutions', description: 'Data management and optimization' }
  ]

  const supportPages = [
    { name: 'Support Center', path: '/support', description: 'Get help and support' },
    { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
    { name: 'Tutorials', path: '/tutorials', description: 'Learn with our tutorials' },
    { name: 'Consultation', path: '/consultation', description: 'Expert consultation' },
    { name: 'Demo', path: '/demo', description: 'See our solutions in action' }
  ]

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' }
  ]

  const microSaas = [
    { name: 'Micro SaaS', path: '/micro-saas', description: 'Ready-to-use solutions' },
    { name: 'AI-Powered CRM', path: '/micro-saas/ai-crm', description: 'Intelligent customer management' },
    { name: 'Security Monitoring', path: '/micro-saas/security-monitoring', description: 'Cybersecurity monitoring suite' },
    { name: 'Cloud Manager', path: '/micro-saas/cloud-manager', description: 'Cloud infrastructure management' }
  ]

  const renderPageList = (pages: Array<{name: string, path: string, description: string}>, icon: React.ComponentType<any>) => (
    <div className="space-y-3">
      {pages.map((page, index) => (
        <div key={index} className="flex items-start group">
          <icon className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <Link 
              to={page.path}
              className="text-white hover:text-cyan-400 transition-colors font-medium group-hover:underline"
            >
              {page.name}
            </Link>
            <p className="text-gray-400 text-sm mt-1">{page.description}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
        </div>
      ))}
    </div>
  )

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources." />
        <meta name="keywords" content="sitemap, navigation, website map, pages, services" />
      </Helmet>

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
                Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources.
              </p>
            </div>
          </div>
        </section>

        {/* Main Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-8">
                  <Globe className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Main Pages</h2>
                </div>
                {renderPageList(mainPages, FileText)}
              </div>

              <div>
                <div className="flex items-center mb-8">
                  <Users className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">AI Services</h2>
                </div>
                {renderPageList(aiServices, Settings)}
              </div>
            </div>
          </div>
        </section>

        {/* IT Services and Support */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-8">
                  <Settings className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">IT Services</h2>
                </div>
                {renderPageList(itServices, Settings)}
              </div>

              <div>
                <div className="flex items-center mb-8">
                  <BookOpen className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Support & Resources</h2>
                </div>
                {renderPageList(supportPages, BookOpen)}
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS and Legal */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-8">
                  <FileText className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Micro SaaS</h2>
                </div>
                {renderPageList(microSaas, FileText)}
              </div>

              <div>
                <div className="flex items-center mb-8">
                  <FileText className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Legal & Policies</h2>
                </div>
                {renderPageList(legalPages, FileText)}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Contact us and we'll help you navigate to the right page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <a 
                href="tel:+13024640950"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
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