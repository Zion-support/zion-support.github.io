import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const EnhancedHomepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate sections
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "AI-Powered Solutions",
      subtitle: "Revolutionary AI technology for 2025",
      description: "Transform your business with cutting-edge artificial intelligence, machine learning, and automation solutions.",
      features: ["Advanced AI Models", "Real-time Analytics", "Automated Workflows", "Predictive Insights"],
      cta: "Explore AI Solutions",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "Scalable and secure cloud solutions",
      description: "Build, deploy, and scale your applications with our robust cloud infrastructure and microservices architecture.",
      features: ["Auto-scaling", "99.9% Uptime", "Global CDN", "Security First"],
      cta: "View Cloud Services",
      gradient: "from-green-600 to-blue-600"
    },
    {
      title: "Micro SaaS Platform",
      subtitle: "Build and launch your SaaS business",
      description: "Create, deploy, and monetize your software-as-a-service applications with our comprehensive platform.",
      features: ["Rapid Development", "Built-in Analytics", "Payment Processing", "User Management"],
      cta: "Start Building",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className={cn(
              "text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              The Future of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Technology{" "}
              </span>
              is Here
            </h1>
            <p className={cn(
              "text-xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
              Join the revolution in 2025.
            </p>
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive suite of technology solutions designed for the future
            </p>
          </div>

          <div className="relative">
            {/* Section Indicators */}
            <div className="flex justify-center mb-8">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={cn(
                    "w-3 h-3 rounded-full mx-2 transition-all duration-300",
                    activeSection === index 
                      ? "bg-blue-600 scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSection * 100}%)` }}
              >
                {sections.map((section, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="p-12">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className={cn(
                            "inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r",
                            section.gradient,
                            "text-white"
                          )}>
                            {section.subtitle}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {section.title}
                          </h3>
                          <p className="text-lg text-gray-600 mb-8">
                            {section.description}
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {section.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                            {section.cta}
                          </Button>
                        </div>
                        <div className="relative">
                          <div className={cn(
                            "w-full h-80 rounded-lg bg-gradient-to-br",
                            section.gradient,
                            "opacity-20"
                          )} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl">🚀</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" },
              { number: "50+", label: "Countries Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of companies already using our solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomepage;