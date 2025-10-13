import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Target, 
  Calendar, 
  FileText, 
  Brain, 
  Globe,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import FuturisticText from "../components/FuturisticText";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";
import ResponsiveText from "../components/ResponsiveText";
import LazyImage from "../components/LazyImage";
import EnhancedLoadingSpinner from "../components/EnhancedLoadingSpinner";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const MicroSaasPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions - Zion Tech Group",
    "description": "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools",
    "url": "https://ziontechgroup.com/micro-saas",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Micro SAAS Solutions",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Zion Analytics Pro",
          "description": "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser"
        },
        {
          "@type": "SoftwareApplication", 
          "name": "Zion Security Shield",
          "description": "Advanced cybersecurity protection with AI-powered threat detection and automated response",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Web Browser"
        }
      ]
    }
  };

  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      featured: true,
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"]
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      featured: true,
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"]
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true,
      features: ["End-to-End Encryption", "Unlimited Storage", "File Sharing", "Version Control"]
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: true,
      features: ["Lead Scoring", "Automation", "Pipeline Management", "Customer Insights"]
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      features: ["Content Generation", "Multi-channel", "A/B Testing", "ROI Tracking"]
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $49/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      featured: true,
      features: ["Task Prioritization", "Resource Allocation", "Time Tracking", "Progress Reports"]
    },
    {
      name: "Zion AI Code Assistant Pro",
      description: "AI-powered code generation, debugging, and optimization with support for 50+ programming languages",
      price: "From $199/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-code-assistant-pro",
      featured: true,
      features: ["Code Generation", "Debugging", "50+ Languages", "Code Review"]
    },
    {
      name: "Zion AI Content Studio Pro",
      description: "AI-powered content creation platform with automated writing, design, and video generation",
      price: "From $149/month",
      icon: <Sparkles className="w-8 h-8" />,
      link: "/zion-ai-content-studio-pro",
      featured: true,
      features: ["Content Writing", "Design Generation", "Video Creation", "Brand Consistency"]
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Globe className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our operations. We implemented 5 tools in just 2 weeks and saw immediate results.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered analytics platform gave us insights we never had before. Our decision-making process is now data-driven.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. The micro SAAS solutions are incredibly powerful and easy to implement.",
      rating: 5
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackground>
          <EnhancedSEO
            title="Micro SAAS Solutions - Ready-to-Use Software | Zion Tech Group"
            description="Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools. Transform your business operations with our micro SAAS platform."
            keywords="micro saas, software solutions, business automation, productivity tools, analytics platform, security software, crm, project management"
            canonical="https://ziontechgroup.com/micro-saas"
            structuredData={structuredData}
          />
          
          <StructuredData type="WebPage" data={structuredData} />

          <main id="main-content" role="main" aria-label="Micro SAAS Solutions">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">60+ Ready-to-Use Solutions</span>
                </div>
                
                <FuturisticText
                  variant="display"
                  size="6xl"
                  gradient={true}
                  animated={true}
                  glow={true}
                  neon={true}
                  className="mb-6 leading-tight"
                >
                  Micro SAAS Solutions
                </FuturisticText>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Ready-to-use software solutions that can transform your business operations immediately. 
                  No complex setup, no lengthy implementation - just powerful tools that work out of the box.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButton
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={Sparkles}
                    iconPosition="left"
                    glowColor="cyan"
                    neon={true}
                    animated={true}
                  >
                    Get Started Today
                  </FuturisticButton>
                  <FuturisticButton
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={Play}
                    iconPosition="left"
                    glowColor="purple"
                    neon={true}
                    animated={true}
                  >
                    Watch Demo
                  </FuturisticButton>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Featured Solutions */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Featured Micro SAAS Solutions
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Our most popular ready-to-use software solutions that can be deployed immediately to transform your business operations.
                  </p>
                </div>
                <ResponsiveGrid className="gap-8">
                  {microSaasServices.map((service, index) => (
                    <FuturisticCard
                      key={index}
                      glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                      hoverEffect={true}
                      animated={true}
                      neon={true}
                      className="relative overflow-hidden"
                    >
                      <Link
                        to={service.link}
                        className="block"
                      >
                        {service.featured && (
                          <div className="absolute top-4 right-4 z-20">
                            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                              {service.name}
                            </h3>
                            <p className="text-cyan-400 font-medium text-lg">{service.price}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </FuturisticCard>
                  ))}
                </ResponsiveGrid>
              </ResponsiveContainer>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what our clients say about our micro SAAS solutions
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                  Start your digital transformation journey today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
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
                  </FuturisticButton>
                  <FuturisticButton
                    href="/services"
                    variant="outline"
                    size="lg"
                    icon={Sparkles}
                    iconPosition="right"
                    glowColor="purple"
                    neon={true}
                    animated={true}
                  >
                    Explore All Services
                  </FuturisticButton>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackground>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default MicroSaasPage;