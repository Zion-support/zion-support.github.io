import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { ArrowRight, Globe, FileText, Users, Settings, Brain, Zap, Shield, Database, Cloud, Code, BarChart, MessageSquare, Eye, Cpu, Target, Lock, BarChart3, FileText as FileTextIcon, Search, Bot, Calculator, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react'
const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main homepage with company overview' },
    { name: 'About Us', path: '/about', description: 'Learn about our company and mission' },
    { name: 'Services', path: '/services', description: 'Comprehensive AI and IT services' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
    { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and results' },
    { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
    { name: 'Demo', path: '/demo', description: 'Request a personalized demo' },
    { name: 'Team', path: '/team', description: 'Meet our expert team' },
    { name: 'Careers', path: '/careers', description: 'Join our growing team' },
    { name: 'Support', path: '/support', description: 'Get help and support' },
    { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }
  ]
  const microSaasServices = [
    { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning and management' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Smart email campaign automation' },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI-powered customer support' },
    { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis and review' },
    { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation' },
    { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'Automated lead generation and qualification' },
    { name: 'AI Document Processor', path: '/ai-document-processing', description: 'Intelligent document analysis' },
    { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'AI-powered SEO optimization' },
    { name: 'AI E-commerce Assistant', path: '/ai-ecommerce-solutions', description: 'E-commerce optimization tools' },
    { name: 'AI Financial Analyzer', path: '/ai-financial-analyzer', description: 'Financial analysis and forecasting' }
  ]
  const aiServices = [
    { name: 'Machine Learning Solutions', path: '/machine-learning', description: 'Custom ML models and algorithms' },
    { name: 'Natural Language Processing', path: '/nlp', description: 'Text analysis and language understanding' },
    { name: 'Computer Vision', path: '/computer-vision', description: 'Image and video analysis' },
    { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'Quantum AI Computing', path: '/quantum-ai', description: 'Next-generation quantum algorithms' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' }
  ]
  const itServices = [
    { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration and infrastructure' },
    { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', path: '/devops', description: 'Development and deployment automation' },
    { name: 'Database Services', path: '/database-services', description: 'Database optimization and management' },
    { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Enterprise networking solutions' },
    { name: 'IT Support & Helpdesk', path: '/it-support', description: '24/7 technical support' }
  ]
  const specializedServices = [
    { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum algorithms and security' },
    { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', path: '/blockchain', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', path: '/iot-edge', description: 'Connected devices and edge computing' },
    { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics Solutions', path: '/robotics', description: 'Intelligent automation' }
  ]
  const blogCategories = [
    { name: 'AI Trends', path: '/blog?category=AI Trends', description: 'Latest AI trends and developments' },
    { name: 'Enterprise Transformation', path: '/blog?category=Transformation', description: 'Business transformation insights' },
    { name: 'Success Stories', path: '/blog?category=Success Story', description: 'Client success stories' },
    { name: 'Technical Guides', path: '/blog?category=Architecture', description: 'Technical implementation guides' },
    { name: 'Cost Optimization', path: '/blog?category=Cost Optimization', description: 'Efficiency and cost reduction' }
  ]
  return (
    <React.Fragment>
      <SEOOptimizer
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of all pages and services available on Zion Tech Group website. Find AI services, IT solutions, and resources easily."
        keywords={['sitemap', 'AI services', 'IT solutions', 'website navigation', 'pages']}
        canonicalUrl="https://ziontechgroup.com/sitemap"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
              Site Map
  
            <p className="text-xl text-cyan-400 mb-8">
              Navigate through all our pages and services,
  
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Find everything you need on our website. From AI services to IT solutions, 
              case studies to technical resources - everything is organized for easy navigation.
          {/* Main Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Main Pages
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <$2 />
                  key={index}
                  to={page.path}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {page.name}
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-300 text-sm">{page.description}
              ))}
          {/* Micro SAAS Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Micro SAAS Services
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasServices.map((service, index) => (
                <$2 />
                  key={index}
                  to={service.path}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-300 text-sm">{service.description}
              ))}
          {/* AI Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">AI Services
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <$2 />
                  key={index}
                  to={service.path}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {service.name}
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-300 text-sm">{service.description}
              ))}
          {/* IT Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">IT Services
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <$2 />
                  key={index}
                  to={service.path}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.name}
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-300 text-sm">{service.description}
              ))}
          {/* Specialized Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Specialized Solutions
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <$2 />
                  key={index}
                  to={service.path}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {service.name}
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-300 text-sm">{service.description}
              ))}
          {/* Blog Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Blog Categories
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogCategories.map((category, index) => (
                <$2 />
                  key={index}
                  to={category.path}
                  className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                      {category.name}
                    <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-300 text-sm">{category.description}
              ))}
          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team for personalized assistance and recommendations
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <$2 />
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold">
                  Contact Us
  
                <$2 />
                  to="/demo"
                  className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                  Request Demo
  
              </div>
        </div>
      </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  ),
}
export default SitemapPage</Link>
  </Link>
  </p>
  </h2>
  </h2>
  </h2>
  </h2>
  </h2>
  </h2>
  </p>
  </h1>
  </SEOOptimizer>
</div></div></div></div></div></div></div></div></div></div></div></div></p></p></p></p></p></p></p></h3></h3></h3></h3></h3></h3></section></section></section></section></section></section></section>