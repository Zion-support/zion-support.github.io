import React from "react";
import { Link    } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BoltIcon;
   } from "@heroicons/react/24/outline"
import FuturisticBackground from "../components/FuturisticBackground";
import NeonButton from "../components/NeonButton";
import AnimatedCard from "../components/AnimatedCard";
import { services    } from "../data/servicesData";

export default function HomePage()  {

  const structuredData = {
export default function HomePage() {
const structuredData = {
    "@context": "https://schema.org",""
    "@type": "WebSite",""
    "name": "Zion Tech Group",""
    "url": "https://ziontechgroup.com",""
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation.",""
    "potentialAction": {""
      "@type": "SearchAction",""
      "target": "https://ziontechgroup.com/search?q={search_term_string}",""
      "query-input": "required name=search_term_string"""
    }
  };

const HomePage = () => {
  return (
<>
      <SEOHead ;
        title="Zion Tech Group - Advanced AI and IT Solutions"""
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."""
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"""
        structuredData={structuredData}
      /></SEOHead>
      <FuturisticBackground /></FuturisticBackground>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">""
        <div>""</div>
          <div>""
            {/* Animated Title */}</div>
            <div>""</div>
              <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">""
                Zion Tech Group;
              </h1>
              <div>""</div>
                <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce" />""
                <BoltIcon className="w-8 h-8 text-cyan-400 animate-bounce delay-100" />""
                <RocketLaunchIcon className="w-8 h-8 text-pink-400 animate-bounce delay-200" />""
              </div>
    </>
            
            <p>""
              Advanced AI and IT Solutions for Modern Businesses;</p>
            </p>
            <p>""
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.</p>
            </p>
            
            <div>""</div>
              <NeonButton to="/contact" variant="primary" size="lg">""
                Get Started Today;
                <ArrowRightIcon className="w-5 h-5 ml-2" />""
              </NeonButton>
              <NeonButton to="/services" variant="secondary" size="lg">""
                Explore Services;
                <ArrowRightIcon className="w-5 h-5 ml-2" />""
              </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 relative">""
        <div>""</div>
          <div>""</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""
              Our Featured Services;
            </h2>
            <p>""
              Comprehensive technology solutions designed to accelerate your business growth with real, proven results;</p>
            </div>
          
          <div>""
            {featuredServices.map((service, index) => (</div>
              <AnimatedCard key={service.id} glowColor={service.glowColor} className="group">""
                <div>""</div>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.shortDescription}</p>
                
                <div>""
                  {service.features.slice(0, 4).map((feature, featureIndex) => (</div>
                    <div>""</div>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                  )})}
                </div>
                
                <div>""</div>
                  <div>""</div>
                    <span>${service.pricing.basic}</span>
                    <span className="text-gray-400 text-sm ml-2">/month</span>
                  <p className="text-gray-400 text-sm text-center mt-1">Starting from</p>
                
                <div>""</div>
                  <NeonButton to={service.href} variant="primary" size="sm">""
                    Learn More;
                    <ArrowRightIcon className="w-4 h-4 ml-2" />""
                  </NeonButton>
                  <NeonButton to="/contact" variant="secondary" size="sm">""
                    Get Quote;
                  </div>
              </AnimatedCard>
            ))}
          </div>
          
          <div>""</div>
            <NeonButton to="/services" variant="primary" size="lg">""
              View All Services;
              <ArrowRightIcon className="w-5 h-5 ml-2" />""
            </div>
        </section>

      {/* About Section */}
      <section className="py-20 relative">""
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900"></div>
        <div>""</div>
          <div>""</div>
            <div>""</div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""
                Why Choose Zion Tech Group?
              </h2>
              <p>""
                With over 4 years of experience in cutting-edge technology solutions, 
                we've helped businesses across various industries transform their operations ''
                and achieve unprecedented growth.</p>
              </div>
            
            <div>""</div>
              <AnimatedCard glowColor="purple" className="text-center">""
                <div className="text-6xl font-bold text-purple-400 mb-4 animate-pulse">50+</div>
                <div className="text-xl text-gray-300 mb-2">Projects Completed</div>
                <div className="text-gray-400 text-sm">Successfully delivered across various industries</AnimatedCard>
              <AnimatedCard glowColor="cyan" className="text-center">""
                <div className="text-6xl font-bold text-cyan-400 mb-4 animate-pulse">25+</div>
                <div className="text-xl text-gray-300 mb-2">Happy Clients</div>
                <div className="text-gray-400 text-sm">Satisfied customers worldwide</AnimatedCard>
              <AnimatedCard glowColor="green" className="text-center">""
                <div className="text-6xl font-bold text-green-400 mb-4 animate-pulse">99%</div>
                <div className="text-xl text-gray-300 mb-2">Success Rate</div>
                <div className="text-gray-400 text-sm">Projects delivered on time and within budget</AnimatedCard>
            </div>
            
            <div>""</div>
              <NeonButton to="/about" variant="primary" size="lg">""
                Learn More About Us;
                <ArrowRightIcon className="w-5 h-5 ml-2" />""
              </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">""
        <div className="absolute inset-0 bg-slate-900"></div>
        <div>""</div>
          <div>""</div>
            <div>""</div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""
                Ready to Transform Your Business?
              </h2>
              <p>""
                Let's discuss how our technology solutions can drive your business forward''</p>
              </div>
            
            <div>""</div>
              <AnimatedCard glowColor="purple" className="text-center">""
                <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />""
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p>+1-302-464-0950</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</AnimatedCard>
              <AnimatedCard glowColor="cyan" className="text-center">""
                <EnvelopeIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />""
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</AnimatedCard>
              <AnimatedCard glowColor="green" className="text-center">""
                <MapPinIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />""
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p>Middletown, DE</p>
                <p className="text-gray-400 text-sm mt-2">364 E Main St STE 1008</AnimatedCard>
            </div>
            
            <div>""</div>
              <NeonButton to="/contact" variant="primary" size="lg">""
                Get In Touch;
                <ArrowRightIcon className="w-5 h-5 ml-2" />""
              </NeonButton>
              <NeonButton to="/demo" variant="secondary" size="lg">""
                Schedule Demo;
                <ArrowRightIcon className="w-5 h-5 ml-2" />""
              </div>
  );
};

export default HomePage;