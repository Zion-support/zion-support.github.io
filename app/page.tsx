import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from "lucide-react";
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
      "https://www.linkedin.com/company/ziontechgroup"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "10-50",
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

  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
        structuredData={structuredData}
      />
      <FuturisticBackground>
        <ResponsiveContainer>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center text-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FuturisticText
                as="h1"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                variant="gradient"
              >
                Zion Tech Group
              </FuturisticText>
              <FuturisticText
                as="p"
                className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-300"
                variant="glow"
              >
                Advanced AI and IT Solutions
              </FuturisticText>
              <FuturisticText
                as="p"
                className="text-lg sm:text-xl mb-12 text-gray-400 max-w-4xl mx-auto"
                variant="fade"
              >
                Transform your business with cutting-edge AI technology, robust cybersecurity, 
                and innovative digital solutions. We deliver results that matter.
              </FuturisticText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Started
                </FuturisticButton>
                <FuturisticButton
                  href="/services"
                  variant="outline"
                  size="lg"
                  icon={<Target className="w-5 h-5" />}
                >
                  Our Services
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20">
            <div className="text-center mb-16">
              <FuturisticText
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                variant="gradient"
              >
                Our Services
              </FuturisticText>
              <FuturisticText
                as="p"
                className="text-xl text-gray-400 max-w-3xl mx-auto"
                variant="fade"
              >
                Comprehensive technology solutions designed to accelerate your digital transformation
              </FuturisticText>
            </div>

            <ResponsiveGrid className="gap-8">
              {/* AI Services */}
              <FuturisticCard className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Solutions</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Harness the power of artificial intelligence to automate processes, 
                  gain insights, and drive innovation across your organization.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    AI Analytics & Data Intelligence
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Content Generation & Automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Customer Support & Chatbots
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Predictive Analytics
                  </li>
                </ul>
                <FuturisticButton
                  href="/ai-services"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Explore AI Solutions
                </FuturisticButton>
              </FuturisticCard>

              {/* IT Services */}
              <FuturisticCard className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">IT Services</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Comprehensive IT infrastructure, security, and support services 
                  to keep your business running smoothly and securely.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Cloud Migration & Infrastructure
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Cybersecurity & Compliance
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Web & Mobile Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    System Integration & Support
                  </li>
                </ul>
                <FuturisticButton
                  href="/services"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Explore IT Services
                </FuturisticButton>
              </FuturisticCard>

              {/* Micro SAAS */}
              <FuturisticCard className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Micro SAAS</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Ready-to-use software solutions that solve specific business problems 
                  with minimal setup and maximum impact.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    AI-Powered Business Tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Analytics & Reporting Dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Automation & Workflow Tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Custom Business Applications
                  </li>
                </ul>
                <FuturisticButton
                  href="/micro-saas"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Explore Micro SAAS
                </FuturisticButton>
              </FuturisticCard>

              {/* 5G Solutions */}
              <FuturisticCard className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">5G Solutions</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Next-generation connectivity solutions that enable ultra-fast, 
                  low-latency applications and IoT implementations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Network Infrastructure & Design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Edge Computing Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    IoT & Smart City Applications
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Mobile App Development
                  </li>
                </ul>
                <FuturisticButton
                  href="/5g-solutions"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Explore 5G Solutions
                </FuturisticButton>
              </FuturisticCard>
            </ResponsiveGrid>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gradient-to-r from-slate-900/50 to-purple-900/50 rounded-3xl">
            <div className="text-center mb-16">
              <FuturisticText
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                variant="gradient"
              >
                Why Choose Zion Tech Group?
              </FuturisticText>
              <FuturisticText
                as="p"
                className="text-xl text-gray-400 max-w-3xl mx-auto"
                variant="fade"
              >
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </FuturisticText>
            </div>

            <ResponsiveGrid className="gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-400">
                  Certified professionals with years of experience in cutting-edge technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-400">
                  Track record of successful implementations and satisfied clients
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-400">
                  Always at the forefront of technology trends and best practices
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-400">
                  Round-the-clock support to ensure your systems run smoothly
                </p>
              </div>
            </ResponsiveGrid>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center">
            <FuturisticText
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              variant="gradient"
            >
              Ready to Transform Your Business?
            </FuturisticText>
            <FuturisticText
              as="p"
              className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
              variant="fade"
            >
              Let's discuss how our solutions can help you achieve your business goals. 
              Get a free consultation today.
            </FuturisticText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
              >
                Get Free Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/about"
                variant="outline"
                size="lg"
                icon={<Users className="w-5 h-5" />}
              >
                Learn More About Us
              </FuturisticButton>
            </div>
          </section>
        </ResponsiveContainer>
      </FuturisticBackground>
    </>
  );
};

export default HomePage;
