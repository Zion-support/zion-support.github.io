import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticHero from '../components/FuturisticHero';
import FuturisticServiceCard from '../components/FuturisticServiceCard';
import { services, getPopularServices, getNewServices } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

export default function HomePage() {
  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions for businesses worldwide. Discover our comprehensive suite of AI-powered services, micro SAAS solutions, and cutting-edge IT services." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, artificial intelligence, cloud computing, cybersecurity, data analytics, automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your digital future with our comprehensive suite of AI-powered services and micro SAAS solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>
      
      <FuturisticBackground />
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <FuturisticHero />

        {/* Popular Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism border border-purple-400/30 mb-6 neon-glow-purple">
                <Star className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-400">Most Popular</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="neon-text-purple">Popular Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most requested AI and IT solutions trusted by thousands of businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {popularServices.slice(0, 6).map((service, index) => (
                <FuturisticServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-purple-400 rounded-xl hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 hover:neon-glow-purple"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism border border-pink-400/30 mb-6 neon-glow-pink">
                <Sparkles className="w-4 h-4 text-pink-400 mr-2" />
                <span className="text-sm font-medium text-pink-400">Just Launched</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="neon-text-pink">New Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our latest innovations in AI technology and micro SAAS solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newServices.slice(0, 6).map((service, index) => (
                <FuturisticServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-pink-400 rounded-xl hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 hover:neon-glow-pink"
              >
                Explore New Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-morphism rounded-2xl p-12 neon-glow">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your
                <span className="block neon-text">Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI and IT solutions to accelerate growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}