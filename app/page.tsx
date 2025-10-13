import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, FileText } from "lucide-react";
<<<<<<< HEAD
=======
import EnhancedSEO from "./components/EnhancedSEO";
import StructuredData from "./components/StructuredData";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
<<<<<<< HEAD
import FuturisticBackgroundEnhanced from "./components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "./components/FuturisticCardEnhanced";
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
import FuturisticButtonEnhanced from "./components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "./components/FuturisticTextEnhanced";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";
import LazyImage from "./components/LazyImage";
import EnhancedLoadingSpinner from "./components/EnhancedLoadingSpinner";
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8

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
<<<<<<< HEAD
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity and threat protection services"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure",
        "description": "Cloud migration and infrastructure management services"
      }
    ]
  };

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
      link: "/ai-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions and threat monitoring.",
      link: "/cybersecurity",
      features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Migrate and optimize your infrastructure with our cloud solutions and managed services.",
      link: "/cloud-services",
      features: ["Cloud Migration", "Infrastructure Management", "Scalability", "Cost Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions that can transform your business operations immediately.",
      link: "/micro-saas",
      features: ["AI Tools", "Business Automation", "Quick Deployment", "No Setup Required"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Leverage the power of 5G technology for next-generation connectivity and IoT solutions.",
      link: "/5g-solutions",
      features: ["5G Infrastructure", "IoT Solutions", "Edge Computing", "Smart Cities"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Unlock insights from your data with our advanced analytics and business intelligence solutions.",
      link: "/data-analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Analytics"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Leading Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With Advanced Technology</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We deliver cutting-edge AI solutions, cybersecurity, cloud services, and digital transformation 
              that drive real business results. Partner with us to unlock your company's full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <Monitor className="w-5 h-5" />
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology services designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from businesses that have transformed with our solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5" />
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <Target className="w-5 h-5" />
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
=======
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButtonEnhanced
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              glowColor="cyan"
              neon={true}
              animated={true}
            >
              Start Your Journey
            </FuturisticButtonEnhanced>
            <FuturisticButtonEnhanced
              href="/services"
              variant="outline"
              size="lg"
              icon={Sparkles}
              iconPosition="right"
              glowColor="purple"
              neon={true}
              animated={true}
            >
              Explore Services
            </FuturisticButtonEnhanced>
          </div>
        </div>
        </section>
        </main>
        </FuturisticBackground>
        </EnhancedAccessibility>
      </PerformanceOptimizer>
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Digital Transformation",
      "IT Consulting",
      "Software Development"
    ]
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations and decision-making processes.",
      href: "/ai-services"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Cybersecurity Excellence",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      href: "/cybersecurity-solutions"
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions to modernize your IT infrastructure and reduce costs.",
      href: "/cloud-services"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to accelerate your business growth and innovation.",
      href: "/digital-transformation"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedSEO
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with cutting-edge AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Expert technology consulting and implementation."
        keywords="AI solutions, cybersecurity, cloud infrastructure, digital transformation, technology consulting, software development"
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        structuredData={structuredData}
      />
      <StructuredData data={structuredData} />
      
      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <ResponsiveContainer>
              <div className="text-center">
                <FuturisticTextEnhanced
                  as="h1"
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                  variant="gradient"
                >
                  Transform Your Business with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                    AI-Powered Solutions
                  </span>
                </FuturisticTextEnhanced>
                
                <FuturisticText
                  as="p"
                  className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
                >
                  Leading provider of cutting-edge AI solutions, cybersecurity, cloud infrastructure, 
                  and digital transformation services. Accelerate your business growth with our expert technology consulting.
                </FuturisticText>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <FuturisticButtonEnhanced
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </FuturisticButtonEnhanced>
                  
                  <FuturisticButton
                    as={Link}
                    to="/demo"
                    variant="secondary"
                    size="lg"
                  >
                    View Demo
                  </FuturisticButton>
                </div>

                {/* Stats */}
                <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <FuturisticCard key={index} className="text-center p-6">
                      <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm md:text-base">
                        {stat.label}
                      </div>
                    </FuturisticCard>
                  ))}
                </ResponsiveGrid>
              </div>
            </ResponsiveContainer>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <ResponsiveContainer>
              <div className="text-center mb-16">
                <FuturisticText
                  as="h2"
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Why Choose Zion Tech Group?
                </FuturisticText>
                <FuturisticText
                  as="p"
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                >
                  We combine cutting-edge technology with deep industry expertise to deliver 
                  solutions that drive real business value.
                </FuturisticText>
              </div>

              <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="mb-6 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    <Link
                      to={feature.href}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </FuturisticCard>
                ))}
              </ResponsiveGrid>
            </ResponsiveContainer>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <ResponsiveContainer>
              <FuturisticCard className="p-12 text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50">
                <FuturisticText
                  as="h2"
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Ready to Transform Your Business?
                </FuturisticText>
                <FuturisticText
                  as="p"
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                  Let's discuss how our AI-powered solutions can accelerate your digital transformation journey.
                </FuturisticText>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="lg"
                  >
                    Start Your Project
                  </FuturisticButtonEnhanced>
                  <FuturisticButton
                    as={Link}
                    to="/consultation"
                    variant="secondary"
                    size="lg"
                  >
                    Free Consultation
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            </ResponsiveContainer>
          </section>
        </div>
      </FuturisticBackground>
    </PerformanceOptimizer>
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
  );
};

export default HomePage;