import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Mic } from 'lucide-react';
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer",
        "name": "Cybersecurity Services",
        "description": "Comprehensive cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure",
        "description": "Cloud migration and infrastructure management"
      }
    ]
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning technologies to transform your business operations."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Advanced Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "5G Technology",
      description: "Next-generation 5G infrastructure and applications for ultra-fast connectivity and IoT solutions."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global Reach",
      description: "Worldwide technology services with local expertise and 24/7 support across multiple time zones."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and predictive analytics.",
      icon: <Brain className="w-6 h-6" />,
      link: "/ai-analytics"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital infrastructure with enterprise-grade security measures.",
      icon: <Shield className="w-6 h-6" />,
      link: "/ai-cybersecurity"
    },
    {
      title: "5G Implementation",
      description: "Deploy next-generation 5G networks and IoT solutions for your business.",
      icon: <Zap className="w-6 h-6" />,
      link: "/5g-implementation"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern business requirements.",
      icon: <Cloud className="w-6 h-6" />,
      link: "/services"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G technology, and comprehensive IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, 5G technology, cybersecurity, cloud computing, digital transformation, IT services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticText
                as="h1"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                variant="gradient"
              >
                Transforming Business with
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Advanced Technology
                </span>
              </FuturisticText>
              
              <ResponsiveText
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
                size="lg"
              >
                Leading provider of AI-powered solutions, 5G technology, and comprehensive IT services. 
                We help businesses innovate, scale, and succeed in the digital age.
              </ResponsiveText>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/services"
                  variant="outline"
                  size="lg"
                >
                  Explore Services
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <ResponsiveContainer>
            <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FuturisticCard key={index} className="text-center p-6">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that drive real business value.
              </p>
            </div>
            
            <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="p-6 text-center hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your unique business needs.
              </p>
            </div>
            
            <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <FuturisticCard key={index} className="p-8 hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <FuturisticButton
                        as={Link}
                        to={service.link}
                        variant="outline"
                        size="sm"
                        className="group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </FuturisticButton>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <FuturisticCard className="text-center p-8 md:p-12">
              <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our advanced technology solutions can help you achieve 
                your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/consultation"
                  variant="outline"
                  size="lg"
                >
                  <Monitor className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default HomePage;