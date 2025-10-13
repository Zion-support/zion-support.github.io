import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar, 
  Brain, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Clock, 
  Award,
  DollarSign,
  TrendingUp,
  Settings,
  Database,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';

const MicroSaasPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions - Zion Tech Group",
    "description": "Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation.",
    "url": "https://ziontechgroup.com/micro-saas",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const microSaasServices = [
    {
      name: "Zion AI Accounting Assistant",
      description: "AI-powered accounting software that automates bookkeeping, expense tracking, and financial reporting for small to medium businesses.",
      price: "From $29/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-accounting-assistant",
      category: "Finance",
      features: ["AI expense categorization", "Real-time reporting", "Tax preparation", "Multi-currency support"],
      popular: true
    },
    {
      name: "Zion AI 3D Generator",
      description: "Create stunning 3D models from text descriptions and images using advanced AI technology for game development and design.",
      price: "From $29/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-3d-generator",
      category: "Design",
      features: ["Text-to-3D generation", "Image-to-3D conversion", "Real-time rendering", "Multiple export formats"],
      popular: true
    },
    {
      name: "Zion AI Blockchain Analytics",
      description: "Advanced AI-powered blockchain analytics platform for cryptocurrency and DeFi monitoring with real-time insights.",
      price: "From $99/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-blockchain-analytics",
      category: "Analytics",
      features: ["Real-time monitoring", "Risk assessment", "DeFi analysis", "Portfolio tracking"],
      popular: true
    },
    {
      name: "Zion AI Video Generator",
      description: "Create professional videos from text prompts using AI technology for marketing, education, and content creation.",
      price: "From $49/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      category: "Content",
      features: ["Text-to-video", "Multiple styles", "HD quality", "Auto voiceover"],
      popular: false
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automated follow-ups.",
      price: "From $99/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      category: "Sales",
      features: ["Lead scoring", "Automated follow-ups", "Predictive analytics", "Integration APIs"],
      popular: false
    },
    {
      name: "Zion AI Marketing Automation",
      description: "Comprehensive marketing automation platform with AI-powered content generation and multi-channel campaigns.",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation",
      category: "Marketing",
      features: ["AI content generation", "Multi-channel campaigns", "A/B testing", "Analytics dashboard"],
      popular: false
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response systems.",
      price: "From $199/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      category: "Security",
      features: ["Threat detection", "Automated response", "Compliance monitoring", "24/7 monitoring"],
      popular: false
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability for businesses.",
      price: "From $49/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      category: "Storage",
      features: ["End-to-end encryption", "Unlimited storage", "File sharing", "Version control"],
      popular: false
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Design", count: microSaasServices.filter(s => s.category === "Design").length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Sales", count: microSaasServices.filter(s => s.category === "Sales").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions have transformed our operations. The AI accounting assistant alone saved us 20 hours per week.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Design Studio Co.",
      role: "Creative Director",
      content: "The AI 3D Generator is incredible. We can now create professional 3D models in minutes instead of days.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Crypto Investment Fund",
      role: "Portfolio Manager",
      content: "The blockchain analytics platform gives us insights we never had before. It's a game-changer for our investment decisions.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <FuturisticBackgroundEnhanced>
      <EnhancedSEO
        title="Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group"
        description="Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation."
        keywords="micro saas, business tools, AI software, automation, productivity tools, business solutions, software as a service"
        canonical="https://ziontechgroup.com/micro-saas"
        structuredData={structuredData}
      />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">60+ Micro SAAS Solutions</span>
              </div>
              
              <FuturisticTextEnhanced
                variant="display"
                size="5xl"
                gradient={true}
                animated={true}
                glow={true}
                neon={true}
                className="mb-6"
              >
                Micro SAAS Solutions
              </FuturisticTextEnhanced>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations. 
                From AI-powered accounting to 3D generation, we have the tools you need to succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <FuturisticButtonEnhanced
                  href="#solutions"
                  variant="primary"
                  size="lg"
                  icon={Zap}
                  iconPosition="left"
                  glowColor="cyan"
                  neon={true}
                  animated={true}
                >
                  Explore Solutions
                </FuturisticButtonEnhanced>
                <FuturisticButtonEnhanced
                  href="/contact"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  glowColor="purple"
                  neon={true}
                  animated={true}
                >
                  Get Started
                </FuturisticButtonEnhanced>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our extensive collection of AI-powered micro SAAS solutions designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={service.popular ? 'cyan' : 'purple'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="h-full relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {service.name}
                      </h3>
                      <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <FuturisticButtonEnhanced
                    href={service.link}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    glowColor="cyan"
                    neon={true}
                    animated={true}
                  >
                    Learn More
                  </FuturisticButtonEnhanced>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our micro SAAS solutions are helping businesses worldwide achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor="cyan"
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="h-full"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              increase productivity, and drive growth. Start your journey today.
            </p>
            
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
                Get Started Today
              </FuturisticButtonEnhanced>
              <FuturisticButtonEnhanced
                href="/demo"
                variant="outline"
                size="lg"
                icon={Zap}
                iconPosition="left"
                glowColor="purple"
                neon={true}
                animated={true}
              >
                Schedule Demo
              </FuturisticButtonEnhanced>
            </div>
          </div>
        </section>
      </main>
    </FuturisticBackgroundEnhanced>
  );
};

export default MicroSaasPage;