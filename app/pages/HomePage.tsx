import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FuturisticBackground from "../components/FuturisticBackground";
import NeonButton from "../components/NeonButton";
import AnimatedCard from "../components/AnimatedCard";
import { services } from "../data/servicesData";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Advanced AI and IT Solutions",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <FuturisticBackground />
      <SEOHead structuredData={structuredData} />
      
      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI & IT Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI and IT solutions designed for the future.
            We deliver innovation, efficiency, and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton className="px-8 py-4 text-lg">
              Get Started
            </NeonButton>
            <NeonButton variant="outline" className="px-8 py-4 text-lg">
              Learn More
            </NeonButton>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedCard key={index} glowColor={service.glowColor as "purple" | "cyan" | "pink" | "green" | "blue" | "yellow"}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.shortDescription}</p>
                  <Link 
                    to={service.href}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success.
          </p>
          <NeonButton className="px-8 py-4 text-lg">
            Contact Us Today
          </NeonButton>
        </div>
      </section>
    </div>
  );
}