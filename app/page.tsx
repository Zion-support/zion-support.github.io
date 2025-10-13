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
    ],
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
  );
};

export default HomePage;