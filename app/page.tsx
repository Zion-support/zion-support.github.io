'use client'
import React from 'react'
import SEOHead from './components/SEOHead'
import FuturisticBackground from './components/FuturisticBackground'
import FuturisticCard from './components/FuturisticCard'
import NeonButton from './components/NeonButton'
import AnimatedText, { TypewriterText } from './components/AnimatedText'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react'

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ]

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation.',
      link: '/ai-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs.',
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      link: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      link: '/business-intelligence'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Micro SaaS',
      description: 'Ready-to-use SaaS applications that solve specific business problems.',
      link: '/micro-saas'
    },
    {
      icon: <Wifi className="w-8 h-8 text-cyan-500" />,
      title: '5G Solutions',
      description: 'Next-generation 5G network implementation and optimization services.',
      link: '/5g-implementation'
    }
  ]

  const microSaasServices = [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      title: 'AI Meeting Assistant',
      description: 'Transform meetings with AI-powered transcription and insights',
      price: 'From $29/month',
      link: '/micro-saas/ai-meeting-assistant'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'AI Project Manager',
      description: 'Intelligent project management with predictive analytics',
      price: 'From $39/month',
      link: '/micro-saas/ai-project-manager'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: 'AI Invoice Generator',
      description: 'Automate invoicing with AI-powered generation and tracking',
      price: 'From $19/month',
      link: '/micro-saas/ai-invoice-generator'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: 'AI Health Tracker',
      description: 'Monitor health with AI insights and personalized recommendations',
      price: 'From $9/month',
      link: '/micro-saas/ai-health-tracker'
    }
  ]

  return (
    <FuturisticBackground>
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered IT solutions, cloud infrastructure, cybersecurity, and digital transformation services."
        keywords="AI solutions, IT services, cloud computing, cybersecurity, digital transformation, micro SaaS"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Brain className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-white text-sm font-medium">AI-Powered Technology Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              <TypewriterText 
                texts={['Zion Tech Group', 'The Future of Tech', 'AI Innovation', 'Digital Transformation']}
                className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                delay={1000}
                pauseDuration={3000}
              />
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading the future of technology with cutting-edge AI solutions, 
            robust IT infrastructure, and innovative digital transformation services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <NeonButton 
              href="/contact" 
              variant="primary"
              size="lg"
              className="flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </NeonButton>
            <NeonButton 
              href="/about" 
              variant="outline"
              size="lg"
            >
              Learn More
            </NeonButton>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-gray-300">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span>Enterprise security</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-purple-400 mr-2" />
              <span>Global reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="group">
                <Link to={service.link} className="block">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  <div className="mt-4 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                    Learn More →
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use applications that solve specific business problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <FuturisticCard key={index} className="group">
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="text-purple-400 font-semibold text-sm">{service.price}</div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <FuturisticCard className="bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500/50">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our technology solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton 
                  href="/contact" 
                  variant="secondary"
                  size="lg"
                >
                  Contact Us
                </NeonButton>
                <NeonButton 
                  href="/ai-services" 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Explore AI Services
                </NeonButton>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </section>
    </FuturisticBackground>
  )
}