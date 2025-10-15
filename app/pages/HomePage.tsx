import { Phone } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FuturisticBackground from "../components/FuturisticBackground";
import NeonButton from "../components/NeonButton";
import AnimatedCard from "../components/AnimatedCard";
import { services } from "../data/servicesData";
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, RocketLaunchIcon, SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"
        structuredData={structuredData}
      />
      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Animated Title */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                Zion Tech Group
              </h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce" />
                <BoltIcon className="w-8 h-8 text-cyan-400 animate-bounce delay-100" />
                <RocketLaunchIcon className="w-8 h-8 text-pink-400 animate-bounce delay-200" />
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">
              Advanced AI and IT Solutions for the Future
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity, 
              cloud infrastructure, and digital transformation solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NeonButton 
                to="/contact" 
                className="text-lg px-8 py-4"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </NeonButton>
              <Link 
                to="/services" 
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center text-white">
              <PhoneIcon className="w-6 h-6 mr-3 text-purple-400" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center text-white">
              <EnvelopeIcon className="w-6 h-6 mr-3 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-white">
              <MapPinIcon className="w-6 h-6 mr-3 text-pink-400" />
              <span>United States</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}