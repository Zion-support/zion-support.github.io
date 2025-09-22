import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, Globe, Target } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import AnimatedCounter from './components/AnimatedCounter'
import ScrollReveal from './components/ScrollReveal'
import SEOOptimizer from './components/SEOOptimizer'

export default function Home() {
  const pageSEO = {
    title: 'Zion Tech Group - Advanced AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
    keywords: ['AI solutions', 'cloud services', 'cybersecurity', 'enterprise software', 'digital transformation', 'technology consulting'],
    canonicalUrl: 'https://zion.app',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Advanced AI and Technology Solutions',
      url: 'https://zion.app',
      logo: 'https://zion.app/logo.png',
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        email: 'contact@ziontechgroup.com'
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer {...pageSEO} />
      <Navigation />

      {/* Hero Section */}
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" aria-hidden="true"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced AI and{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. 
              We deliver enterprise-grade technology that drives innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="border border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal origin="bottom" delay={100}>
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Cutting-edge artificial intelligence solutions for enterprise automation and decision-making.
              </p>
              <Link href="/services/ai" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal origin="bottom" delay={200}>
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Scalable cloud infrastructure, migration services, and DevOps automation.
                </p>
                <Link href="/services/cloud" className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal origin="bottom" delay={300}>
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced security solutions and comprehensive threat protection strategies.
                </p>
                <Link href="/services/security" className="text-red-400 hover:text-red-300 text-sm font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal origin="bottom" delay={400}>
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Next-generation technology and digital transformation consulting.
                </p>
                <Link href="/services/innovation" className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <ScrollReveal origin="bottom" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <ScrollReveal origin="bottom" delay={300}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter end={500} suffix="+" duration={2000} />
                  </h3>
                  <p className="text-gray-300">Enterprise Clients</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal origin="bottom" delay={400}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter end={50} suffix="+" duration={2000} />
                  </h3>
                  <p className="text-gray-300">Countries Served</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal origin="bottom" delay={500}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter end={99.9} suffix="%" duration={2000} />
                  </h3>
                  <p className="text-gray-300">Uptime Guarantee</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <Testimonials />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}