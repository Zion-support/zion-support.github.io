'use client'
import React from 'react'
import SEOHead from './components/SEOHead'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import FuturisticBackground from './components/FuturisticBackground'
import FuturisticCard from './components/FuturisticCard'
import NeonButton from './components/NeonButton'
import AnimatedText from './components/AnimatedText'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, Sparkles, TrendingUp, Award, Target, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { microSaasServices, getPopularMicroSaasServices } from '../data/micro-saas-services'
import { aiServices, getPopularAIServices } from '../data/ai-services'
import { itServices, getPopularITServices } from '../data/it-services'

const HomePage: React.FC = () => {
  const popularMicroSaas = getPopularMicroSaasServices()
  const popularAI = getPopularAIServices()
  const popularIT = getPopularITServices()

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticBackground />
      
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered IT solutions, cloud infrastructure, cybersecurity, and digital transformation services."
        keywords="AI solutions, IT services, cloud computing, cybersecurity, digital transformation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <AnimatedText text="Welcome to" type="fade" delay={0} />
            <br />
            <AnimatedText 
              text="Zion Tech Group" 
              type="glow" 
              delay={500}
              className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <AnimatedText 
              text="Leading the future of technology with cutting-edge AI solutions, robust IT infrastructure, and innovative digital transformation services." 
              type="fade" 
              delay={1000}
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedText delay={1500}>
              <NeonButton to="/contact" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </NeonButton>
            </AnimatedText>
            <AnimatedText delay={1700}>
              <NeonButton to="/about" variant="secondary" size="lg">
                Learn More
              </NeonButton>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive innovation and growth for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <Sparkles className="inline-block w-8 h-8 mr-3 text-purple-400" />
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, ready-to-use micro applications that solve specific business problems with AI-powered intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularMicroSaas.slice(0, 6).map((service, index) => (
              <FuturisticCard key={service.id} className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">
                    From ${service.pricing.free.price}/month
                  </span>
                  <NeonButton to={`/micro-saas/${service.id}`} size="sm" variant="accent">
                    Learn More
                  </NeonButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <NeonButton to="/micro-saas" size="lg">
              View All Micro SAAS Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </NeonButton>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <Brain className="inline-block w-8 h-8 mr-3 text-blue-400" />
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions that transform your business with cutting-edge AI technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularAI.slice(0, 6).map((service, index) => (
              <FuturisticCard key={service.id} className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">
                    From ${service.pricing.free.price}/month
                  </span>
                  <NeonButton to={`/ai-services/${service.id}`} size="sm" variant="accent">
                    Learn More
                  </NeonButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <NeonButton to="/ai-services" size="lg">
              View All AI Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </NeonButton>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <Cpu className="inline-block w-8 h-8 mr-3 text-green-400" />
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions including cloud migration, cybersecurity, and digital transformation services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularIT.slice(0, 6).map((service, index) => (
              <FuturisticCard key={service.id} className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">
                    From ${service.pricing.basic.price}
                  </span>
                  <NeonButton to={`/it-services/${service.id}`} size="sm" variant="accent">
                    Learn More
                  </NeonButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <NeonButton to="/it-services" size="lg">
              View All IT Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FuturisticCard className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <NeonButton to="/contact" size="lg">
                Contact Us
              </NeonButton>
              <NeonButton to="/ai-services" variant="secondary" size="lg">
                Explore AI Services
              </NeonButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Middletown, DE 19709</span>
              </div>
            </div>
          </FuturisticCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage