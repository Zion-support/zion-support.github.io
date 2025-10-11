'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, ExternalLink } from 'lucide-react'

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', url: '/', description: 'Main landing page' },
    { name: 'About', url: '/about', description: 'Learn about our company' },
    { name: 'Services', url: '/services', description: 'Our comprehensive service offerings' },
    { name: 'Pricing', url: '/pricing', description: 'Transparent pricing plans' },
    { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
    { name: 'Careers', url: '/careers', description: 'Join our team' },
    { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
    { name: 'Support', url: '/support', description: 'Get help and support' },
    { name: 'Consultation', url: '/consultation', description: 'Free consultation request' }
  ]

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data analytics' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Build intelligent chatbots' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-enhanced security solutions' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Automated customer support' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Streamline business processes' },
    { name: 'AI Content Generator', url: '/ai-content-generator', description: 'Automated content creation' }
  ]

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Complete IT solutions' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Comprehensive security' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' }
  ]

  const microSaas = [
    { name: 'Micro SaaS', url: '/micro-saas', description: 'Focused software solutions' },
    { name: 'Analytics Tools', url: '/analytics-tools', description: 'Business analytics tools' },
    { name: 'API Development', url: '/api-development', description: 'Custom API solutions' },
    { name: 'AR/VR Platform', url: '/ar-vr-platform', description: 'Immersive technology solutions' }
  ]

  const resources = [
    { name: 'Tutorials', url: '/tutorials', description: 'Learn with our tutorials' },
    { name: 'API Documentation', url: '/api-docs', description: 'Technical documentation' },
    { name: 'Privacy Policy', url: '/privacy', description: 'Privacy and data protection' },
    { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' }
  ]

  const sections = [
    { title: 'Main Pages', pages: mainPages, icon: Globe },
    { title: 'AI Services', pages: aiServices, icon: Brain },
    { title: 'IT Services', pages: itServices, icon: Settings },
    { title: 'Micro SaaS', pages: microSaas, icon: Package },
    { title: 'Resources', pages: resources, icon: FileText }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate through all our pages and discover the full range of our services and resources.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <section.icon className="h-8 w-8 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">{page.name}</h3>
                          <p className="text-gray-300 text-sm mb-2">{page.description}</p>
                          <a 
                            href={page.url}
                            className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                          >
                            {page.url}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Site Overview</h2>
              <p className="text-xl text-gray-300">Quick statistics about our website</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {mainPages.length + aiServices.length + itServices.length + microSaas.length + resources.length}
                </div>
                <div className="text-gray-300">Total Pages</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{aiServices.length}</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{itServices.length}</div>
                <div className="text-gray-300">IT Services</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{microSaas.length}</div>
                <div className="text-gray-300">Micro SaaS</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Functionality */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our search functionality to quickly find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Search our website..."
                className="flex-1 max-w-md px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default SitemapPage;