'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  DollarSign, 
  Star, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Users,
  Database,
  Cloud,
  Code,
  Wifi,
  Target,
  Award,
  Settings,
  Lock,
  Eye,
  Cpu,
  Network,
  Bot,
  FileText,
  Camera,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Heart,
  ThumbsUp,
  Crown,
  Gem,
  Sparkles
} from 'lucide-react'
import { Link } from 'react-router-dom'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $25/month',
      link: '/ai-content-generator'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Solutions',
      description: 'Intelligent chatbots that provide 24/7 customer support and engagement.',
      features: ['Natural language processing', 'Multi-language support', 'CRM integration', 'Analytics dashboard'],
      price: 'Starting at $35/month',
      link: '/ai-chatbot-enterprise'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'API integration'],
      price: 'Starting at $29/month',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Camera className="w-12 h-12 text-orange-500" />,
      title: 'AI 3D Generation',
      description: 'Create stunning 3D models and visualizations using cutting-edge AI technology.',
      features: ['3D model generation', 'Texture mapping', 'Animation support', 'Export options'],
      price: 'Starting at $49/month',
      link: '/ai-3d-generation'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solutions to protect your digital assets.',
      features: ['Threat detection', 'Anomaly analysis', 'Automated response', 'Compliance monitoring'],
      price: 'Starting at $99/month',
      link: '/ai-cybersecurity-suite'
    },
    {
      icon: <Target className="w-12 h-12 text-pink-500" />,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered business intelligence.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Report automation'],
      price: 'Starting at $79/month',
      link: '/ai-business-intelligence'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      title: 'AI Customer Support',
      description: 'Intelligent customer support solutions that enhance user experience.',
      features: ['Ticket routing', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support'],
      price: 'Starting at $45/month',
      link: '/ai-customer-support'
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-500" />,
      title: 'AI Document Processing',
      description: 'Automate document processing with intelligent data extraction and analysis.',
      features: ['OCR processing', 'Data extraction', 'Form automation', 'Cloud storage'],
      price: 'Starting at $45/month',
      link: '/ai-document-processing'
    }
  ]

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: 'Advanced AI Models',
      description: 'State-of-the-art machine learning models for superior performance'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing for immediate results'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Scalability',
      description: 'Scale your AI solutions across multiple regions'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'The AI solutions from Zion Tech Group have revolutionized our business operations. The results speak for themselves.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataCorp Solutions',
      role: 'CTO',
      content: 'Outstanding AI implementation. Our productivity has increased by 300% since using their services.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCo',
      role: 'Marketing Director',
      content: 'The AI content generation tool has saved us countless hours. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group"
        description="Comprehensive AI services including content generation, chatbots, analytics, and more. Transform your business with cutting-edge AI technology. Contact us at +1 302 464 0950"
        keywords="AI services, artificial intelligence, machine learning, AI solutions, content generation, chatbots, analytics"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              🤖 Advanced AI Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From content generation to advanced analytics, we provide the AI tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              View Pricing
              <DollarSign className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to automate, optimize, and transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <span className="text-lg font-bold text-blue-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose Our AI Services?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-green-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses already using our AI solutions to drive growth and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your business goals. 
                Contact us today for a free consultation and demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  View Pricing
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage
