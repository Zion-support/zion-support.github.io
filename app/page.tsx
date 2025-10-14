import React, { memo, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Zap, Shield, Globe, Brain, Code, Cloud, Wifi, Star, CheckCircle, Users, Award, TrendingUp, Clock, DollarSign } from 'lucide-react';
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

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered analytics with real-time insights, predictive modeling, and automated reporting. Transform your data into actionable intelligence with our cutting-edge AI algorithms.",
      price: "$299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Machine Learning Models", "Data Visualization"],
      link: "/ai-analytics-dashboard-pro",
      category: "AI Services"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, debugging, and optimization with support for 50+ programming languages. Boost developer productivity with AI-powered coding assistance.",
      price: "$199/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Multi-language Support", "Code Review", "Documentation Generation"],
      link: "/ai-code-assistant-pro",
      category: "AI Services"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Infrastructure",
      description: "Scalable cloud solutions with AI-powered auto-scaling, monitoring, and cost optimization. Deploy and manage your applications with intelligent cloud automation.",
      price: "$499/month",
      features: ["Auto-scaling", "AI Monitoring", "Cost Optimization", "99.9% Uptime", "Multi-cloud Support", "Disaster Recovery"],
      link: "/ai-cloud-infrastructure",
      category: "IT Services"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Implementation",
      description: "Complete 5G network deployment with ultra-low latency and massive IoT connectivity. Future-proof your business with next-generation wireless technology.",
      price: "$999/month",
      features: ["5G Network Setup", "IoT Integration", "Edge Computing", "Performance Monitoring", "Network Optimization", "Security Implementation"],
      link: "/5g-implementation",
      category: "5G Solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security Suite",
      description: "Comprehensive cybersecurity with AI threat detection, automated response, and compliance management. Protect your digital assets with enterprise-grade security.",
      price: "$399/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Management", "24/7 Monitoring", "Penetration Testing", "Security Audits"],
      link: "/advanced-security-suite",
      category: "IT Services"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Chatbot Enterprise",
      description: "Enterprise-grade conversational AI with multi-language support and advanced NLP capabilities. Enhance customer experience with intelligent automation.",
      price: "$149/month",
      features: ["Multi-language Support", "Advanced NLP", "Integration APIs", "Analytics Dashboard", "Custom Training", "Voice Integration"],
      link: "/ai-chatbot-enterprise",
      category: "AI Services"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Content Generation Pro",
      description: "Create high-quality content at scale with AI-powered writing, image generation, and video production. Streamline your content marketing with intelligent automation.",
      price: "$249/month",
      features: ["Content Writing", "Image Generation", "Video Production", "SEO Optimization", "Multi-language", "Brand Consistency"],
      link: "/ai-content-generation-pro",
      category: "AI Services"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Business Intelligence Pro",
      description: "Transform raw data into strategic insights with AI-powered business intelligence. Make data-driven decisions with advanced analytics and reporting.",
      price: "$349/month",
      features: ["Data Integration", "Predictive Analytics", "Custom Reports", "Real-time Dashboards", "Data Mining", "Trend Analysis"],
      link: "/ai-business-intelligence-pro",
      category: "AI Services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI Database Solutions",
      description: "Intelligent database management with AI-powered optimization, automated backups, and performance tuning. Maximize your data infrastructure efficiency.",
      price: "$199/month",
      features: ["Database Optimization", "Automated Backups", "Performance Tuning", "Query Optimization", "Data Migration", "Monitoring"],
      link: "/ai-database-solutions",
      category: "IT Services"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5G Mobile Applications",
      description: "Build next-generation mobile apps optimized for 5G networks. Deliver ultra-fast, responsive mobile experiences with cutting-edge technology.",
      price: "$599/month",
      features: ["5G Optimization", "Cross-platform Development", "Real-time Features", "Edge Computing", "IoT Integration", "Performance Monitoring"],
      link: "/5g-mobile-applications",
      category: "5G Solutions"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "AI Automation Suite",
      description: "Automate business processes with AI-powered workflow automation. Increase efficiency and reduce manual work with intelligent process automation.",
      price: "$299/month",
      features: ["Workflow Automation", "Process Optimization", "Task Automation", "Integration APIs", "Custom Workflows", "Analytics"],
      link: "/ai-automation-suite",
      category: "AI Services"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "AI Blockchain Solutions",
      description: "Secure, transparent, and efficient blockchain solutions powered by AI. Build trust and transparency in your digital transactions.",
      price: "$499/month",
      features: ["Smart Contracts", "AI Security", "Transparent Transactions", "Decentralized Apps", "Tokenization", "Compliance"],
      link: "/ai-blockchain-solutions",
      category: "AI Services"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
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
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
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
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Advanced AI & IT
                  </span>
                  <br />
                  <span className="text-white">Solutions</span>
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
              
              {/* Service Categories */}
              {['AI Services', 'IT Services', '5G Solutions'].map((category) => (
                <div key={category} className="mb-16">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {category}
                    </span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.filter(service => service.category === category).map((service, index) => (
                      <div 
                        key={index} 
                        className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                            <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                            <div className="flex items-center text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                            {service.features.length > 4 && (
                              <div className="text-xs text-cyan-400 font-medium">
                                +{service.features.length - 4} more features
                              </div>
                            )}
                          </div>
                        </div>
                        <a
                          href={service.link}
                          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 neon-button"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 302 464 0950</a>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
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
