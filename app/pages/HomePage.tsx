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
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering organizations with cutting-edge technology solutions including AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NeonButton 
                href="/services" 
                className="text-lg px-8 py-4"
              >
                Explore Our Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </NeonButton>
              <NeonButton 
                href="/contact" 
                variant="outline"
                className="text-lg px-8 py-4"
              >
                Get Started Today
              </NeonButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our advanced technology solutions can help your business thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span>+1-302-464-0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>United States</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
