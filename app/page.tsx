'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FuturisticHero from './components/FuturisticHero';
import FuturisticServiceCard from './components/FuturisticServiceCard';
import ContentShowcase from './components/ContentShowcase';
import NewsletterSignup from './components/NewsletterSignup';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
    </div>;
  }

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT solutions, cloud computing, cybersecurity, and digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="relative z-10">
          <FuturisticHero />
          
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-white mb-16">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FuturisticServiceCard
                  icon={<Brain className="w-8 h-8" />}
                  title="AI Solutions"
                  description="Advanced artificial intelligence solutions for business automation and optimization."
                />
                <FuturisticServiceCard
                  icon={<Cloud className="w-8 h-8" />}
                  title="Cloud Computing"
                  description="Scalable cloud infrastructure and migration services for modern businesses."
                />
                <FuturisticServiceCard
                  icon={<Shield className="w-8 h-8" />}
                  title="Cybersecurity"
                  description="Comprehensive security solutions to protect your digital assets and data."
                />
                <FuturisticServiceCard
                  icon={<Code className="w-8 h-8" />}
                  title="Software Development"
                  description="Custom software solutions tailored to your business needs and requirements."
                />
                <FuturisticServiceCard
                  icon={<Zap className="w-8 h-8" />}
                  title="Digital Transformation"
                  description="Complete digital transformation strategies to modernize your business processes."
                />
                <FuturisticServiceCard
                  icon={<Users className="w-8 h-8" />}
                  title="Consulting"
                  description="Expert IT consulting services to guide your technology decisions and strategy."
                />
              </div>
            </div>
          </section>

          <ContentShowcase />
          <NewsletterSignup />
        </main>
        
        <Footer />
        <PerformanceOptimizer />
        <AccessibilityEnhancer />
      </div>
    </>
  );
};

export default HomePage;