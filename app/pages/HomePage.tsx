import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for business automation and optimization.",
      icon: <SparklesIcon className="w-8 h-8" />,
      link: "/ai-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance.",
      icon: <BoltIcon className="w-8 h-8" />,
      link: "/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses with 99.9% uptime guarantee.",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      link: "/cloud-infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business processes.",
      icon: <ArrowRightIcon className="w-8 h-8" />,
      link: "/digital-transformation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Animated Title */}
              <div className="mb-8">
                <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                  Zion Tech Group
                </h1>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce" />
                  <span className="text-2xl md:text-3xl text-white font-light">
                    Advanced AI & IT Solutions
                  </span>
                  <SparklesIcon className="w-8 h-8 text-cyan-400 animate-bounce" />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Empowering businesses worldwide with cutting-edge artificial intelligence, 
                cybersecurity, and cloud infrastructure solutions that drive innovation and growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  to="/ai-solutions"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <RocketLaunchIcon className="w-5 h-5" />
                  Explore AI Solutions
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Get Started
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business 
                and drive sustainable growth in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-purple-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts help you implement cutting-edge solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPinIcon className="w-5 h-5" />
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}