import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, FileText } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";
import StructuredData from "./components/StructuredData";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import FuturisticButtonEnhanced from "./components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "./components/FuturisticTextEnhanced";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";
import LazyImage from "./components/LazyImage";
import EnhancedLoadingSpinner from "./components/EnhancedLoadingSpinner";
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

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
    ]
  };

  const heroFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Advanced artificial intelligence for business automation and insights"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Comprehensive cybersecurity solutions to protect your business"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance and ultra-fast response times"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Worldwide services with local expertise and support"
    }
  ];

  const services = [
    {
      title: "AI Services",
      description: "Transform your business with cutting-edge AI solutions",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      href: "/ai-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "IT Services",
      description: "Comprehensive IT solutions for modern businesses",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      href: "/services",
      features: ["Cloud Migration", "DevOps", "Network Security", "System Integration"]
    },
    {
      title: "Micro SAAS",
      description: "Innovative software solutions for every business need",
      icon: <Zap className="w-8 h-8 text-green-400" />,
      href: "/micro-saas",
      features: ["Analytics Tools", "CRM Systems", "Project Management", "Automation"]
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and edge computing",
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      href: "/5g-solutions",
      features: ["Network Infrastructure", "Edge Computing", "IoT Solutions", "Smart Cities"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedSEO
        title="Zion Tech Group - AI, IT Services & 5G Solutions"
        description="Leading provider of AI-powered solutions, IT services, and innovative micro SAAS applications. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, 5G technology, micro SAAS, cybersecurity, cloud migration, digital transformation"
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        structuredData={structuredData}
      />
      <StructuredData data={structuredData} />
      
      <FuturisticBackground>
        <EnhancedAccessibility>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <FuturisticTextEnhanced
                as="h1"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                delay={0.2}
              >
                Transform Your Business with
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </FuturisticTextEnhanced>
              
              <FuturisticTextEnhanced
                as="p"
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                delay={0.4}
              >
                Leading provider of AI solutions, IT services, and innovative micro SAAS applications. 
                Empowering businesses to thrive in the digital age.
              </FuturisticTextEnhanced>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" role="group" aria-label="Call to action buttons">
                <FuturisticButtonEnhanced
                  as={Link}
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  delay={0.6}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButtonEnhanced>
                
                <FuturisticButtonEnhanced
                  as={Link}
                  to="/demo"
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  delay={0.8}
                >
                  View Demo
                </FuturisticButtonEnhanced>
              </div>

              {/* Hero Features */}
              <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {heroFeatures.map((feature, index) => (
                  <FuturisticCard
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
                    delay={1 + index * 0.2}
                  >
                    <div className="text-purple-400 mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </FuturisticCard>
                ))}
              </ResponsiveGrid>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
            <ResponsiveContainer>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-purple-400 mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ResponsiveContainer>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <ResponsiveContainer>
              <div className="text-center mb-16">
                <FuturisticTextEnhanced
                  as="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                  delay={0.2}
                >
                  Our <span className="text-purple-400">Services</span>
                </FuturisticTextEnhanced>
                <FuturisticTextEnhanced
                  as="p"
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  delay={0.4}
                >
                  Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
                </FuturisticTextEnhanced>
              </div>

              <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <FuturisticCard
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    delay={0.6 + index * 0.2}
                  >
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <Star className="w-4 h-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton
                      as={Link}
                      to={service.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </ResponsiveGrid>
            </ResponsiveContainer>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
            <ResponsiveContainer>
              <div className="text-center">
                <FuturisticTextEnhanced
                  as="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                  delay={0.2}
                >
                  Ready to Transform Your Business?
                </FuturisticTextEnhanced>
                <FuturisticTextEnhanced
                  as="p"
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  delay={0.4}
                >
                  Join hundreds of companies that trust Zion Tech Group for their technology needs.
                </FuturisticTextEnhanced>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    as={Link}
                    to="/contact"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    delay={0.6}
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButtonEnhanced>
                  
                  <FuturisticButtonEnhanced
                    as={Link}
                    to="/consultation"
                    variant="outline"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                    delay={0.8}
                  >
                    Free Consultation
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </ResponsiveContainer>
          </section>
        </EnhancedAccessibility>
      </FuturisticBackground>
    </PerformanceOptimizer>
  );
};

export default HomePage;