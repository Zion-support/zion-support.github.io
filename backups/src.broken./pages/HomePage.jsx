import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { AnimatedCard } from '../components/ui/AnimatedCard';

export function HomePage() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Transform your business with cutting-edge AI solutions, cybersecurity services, and digital transformation expertise. Trusted by 500+ businesses worldwide."
      />
      <Header />
      
      <main className="min-h-screen" role="main">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                id="hero-heading"
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Transform Your Business with
                <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI solutions, cybersecurity services, and digital transformation expertise. 
                Trusted by 500+ businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  className="group"
                  onClick={() => window.location.href = '/services'}
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </AnimatedButton>
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="py-20 bg-zion-blue-darker"
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                id="features-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                We deliver innovative solutions that drive real business results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              <AnimatedCard 
                className="p-8 focus-within:border-zion-cyan/40"
                delay={0.1}
                direction="up"
              >
                <div 
                  className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Solutions</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation.
                </p>
              </AnimatedCard>

              <AnimatedCard 
                className="p-8 focus-within:border-zion-cyan/40"
                delay={0.2}
                direction="up"
              >
                <div 
                  className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure compliance.
                </p>
              </AnimatedCard>

              <AnimatedCard 
                className="p-8 focus-within:border-zion-cyan/40"
                delay={0.3}
                direction="up"
              >
                <div 
                  className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Reach</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  Serving clients worldwide with 24/7 support and localized expertise across multiple time zones.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">500+</div>
                <div className="text-zion-slate-light">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Support</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">5+</div>
                <div className="text-zion-slate-light">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zion-blue-darker">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their digital transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}