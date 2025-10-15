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
                <span className="text-2xl md:text-3xl font-semibold text-white">
                  Advanced AI & IT Solutions
                </span>
                <BoltIcon className="w-8 h-8 text-cyan-400 animate-bounce" />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Empowering businesses with cutting-edge artificial intelligence, 
                cybersecurity, and digital transformation solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <NeonButton
                to="/contact"
                className="text-lg px-8 py-4"
                icon={<RocketLaunchIcon className="w-6 h-6" />}
              >
                Get Started Today
              </NeonButton>
              <Link
                to="/about"
                className="text-lg px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}