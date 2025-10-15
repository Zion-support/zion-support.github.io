import React, { memo, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Shield, Brain, Code, Cloud, Wifi, Star, CheckCircle, Users, Award, TrendingUp, Clock, Database, Smartphone, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "150+", label: "Clients" },
    { icon: <Award className="w-8 h-8" />, number: "99.9%", label: "Uptime" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "300%", label: "ROI" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support" }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered analytics with real-time insights, predictive modeling, and automated reporting for data-driven decision making.",
      price: "$299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Machine Learning Models", "Data Visualization"],
      link: "/ai-analytics-dashboard-pro",
      category: "AI Solutions",
      marketPrice: "$299-599",
      savings: "Save up to $300/month"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, debugging, and optimization with support for 50+ programming languages and frameworks.",
      price: "$199/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Multi-language Support", "Code Review", "Documentation Generation"],
      link: "/ai-code-assistant-pro",
      category: "AI Solutions",
      marketPrice: "$199-399",
      savings: "Save up to $200/month"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Infrastructure",
      description: "Scalable cloud solutions with AI-powered auto-scaling, monitoring, and cost optimization for enterprise workloads.",
      price: "$499/month",
      features: ["Auto-scaling", "AI Monitoring", "Cost Optimization", "99.9% Uptime", "Multi-cloud Support", "Disaster Recovery"],
      link: "/ai-cloud-infrastructure",
      category: "Cloud Solutions",
      marketPrice: "$499-999",
      savings: "Save up to $500/month"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Implementation",
      description: "Complete 5G network deployment with ultra-low latency, massive IoT connectivity, and edge computing capabilities.",
      price: "$999/month",
      features: ["5G Network Setup", "IoT Integration", "Edge Computing", "Performance Monitoring", "Private Networks", "Smart City Solutions"],
      link: "/5g-implementation",
      category: "5G Technology",
      marketPrice: "$999-1999",
      savings: "Save up to $1000/month"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security Suite",
      description: "Comprehensive cybersecurity with AI threat detection, automated response, and compliance management for enterprise security.",
      price: "$399/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Management", "24/7 Monitoring", "Penetration Testing", "Security Training"],
      link: "/advanced-security-suite",
      category: "Cybersecurity",
      marketPrice: "$399-799",
      savings: "Save up to $400/month"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Chatbot Enterprise",
      description: "Enterprise-grade conversational AI with multi-language support, advanced NLP capabilities, and seamless integration.",
      price: "$149/month",
      features: ["Multi-language Support", "Advanced NLP", "Integration APIs", "Analytics Dashboard", "Voice Recognition", "Custom Training"],
      link: "/ai-chatbot-enterprise",
      category: "AI Solutions",
      marketPrice: "$149-299",
      savings: "Save up to $150/month"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI Database Solutions",
      description: "Intelligent database management with automated optimization, query performance tuning, and predictive maintenance.",
      price: "$249/month",
      features: ["Query Optimization", "Automated Tuning", "Predictive Maintenance", "Real-time Monitoring", "Backup Automation", "Performance Analytics"],
      link: "/ai-database-solutions",
      category: "Database Solutions",
      marketPrice: "$249-499",
      savings: "Save up to $250/month"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "AI Mobile App Development",
      description: "Custom mobile applications powered by AI with cross-platform compatibility and advanced user experience features.",
      price: "$799/month",
      features: ["Cross-platform Development", "AI Integration", "Custom UI/UX", "App Store Optimization", "Performance Monitoring", "Push Notifications"],
      link: "/ai-mobile-app-development",
      category: "Mobile Development",
      marketPrice: "$799-1499",
      savings: "Save up to $700/month"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Content Management",
      description: "Intelligent content management system with automated content generation, SEO optimization, and multi-channel publishing.",
      price: "$179/month",
      features: ["Content Generation", "SEO Optimization", "Multi-channel Publishing", "Content Scheduling", "Analytics Dashboard", "Team Collaboration"],
      link: "/ai-content-management",
      category: "Content Solutions",
      marketPrice: "$179-359",
      savings: "Save up to $180/month"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI, IT, and 5G solutions. Transform your business with cutting-edge technology, micro SAAS services, and innovative digital solutions." />
        <meta name="keywords" content="AI solutions, IT services, 5G technology, micro SAAS, cloud computing, cybersecurity, business automation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-ping delay-3000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-400/5 rounded-full blur-2xl animate-ping delay-5000"></div>
        </div>

        {/* Futuristic Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse delay-3000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by 150+ Companies Worldwide
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Advanced AI & IT
                  </span>
                  <br />
                  <span className="text-white relative">
                    Solutions
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-sm opacity-75 animate-pulse"></div>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with cutting-edge artificial intelligence, 
                  5G technology, and comprehensive IT services. From micro SAAS solutions 
                  to enterprise-grade platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Quote
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Services
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive AI, IT, and 5G solutions designed to accelerate your business growth. 
                  From micro SAAS platforms to enterprise-grade systems.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden"
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-300">
                        {service.category}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex flex-col">
                            <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                            <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                          </div>
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                          </div>
                        </div>
                        
                        {/* Savings badge */}
                        <div className="mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {service.savings}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group-hover:shadow-cyan-500/40"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact us today to discuss how our AI and IT solutions can accelerate your success.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
