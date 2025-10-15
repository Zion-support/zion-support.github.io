import React, { memo, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Shield, Brain, Code, Cloud, Wifi, Star, CheckCircle, Users, Award, TrendingUp, Clock } from 'lucide-react';
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
      description: "Advanced AI-powered analytics with real-time insights, predictive modeling, and automated reporting. Industry-leading solution trusted by Fortune 500 companies.",
      price: "$299/month",
      marketPrice: "$499/month",
      savings: "40% OFF",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Advanced Security", "24/7 Support"],
      link: "/ai-analytics-dashboard-pro",
      rating: 4.9,
      reviews: 1247
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, debugging, and optimization with support for 50+ programming languages. Boost developer productivity by 300%.",
      price: "$199/month",
      marketPrice: "$299/month",
      savings: "33% OFF",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Multi-language Support", "Git Integration", "Team Collaboration"],
      link: "/ai-code-assistant-pro",
      rating: 4.8,
      reviews: 892
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Infrastructure",
      description: "Scalable cloud solutions with AI-powered auto-scaling, monitoring, and cost optimization. Reduce cloud costs by up to 60%.",
      price: "$499/month",
      marketPrice: "$799/month",
      savings: "38% OFF",
      features: ["Auto-scaling", "AI Monitoring", "Cost Optimization", "99.9% Uptime", "Multi-cloud Support", "Disaster Recovery"],
      link: "/ai-cloud-infrastructure",
      rating: 4.9,
      reviews: 634
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Implementation",
      description: "Complete 5G network deployment with ultra-low latency and massive IoT connectivity. Future-proof your business infrastructure.",
      price: "$999/month",
      marketPrice: "$1499/month",
      savings: "33% OFF",
      features: ["5G Network Setup", "IoT Integration", "Edge Computing", "Performance Monitoring", "Security Hardening", "Compliance Support"],
      link: "/5g-implementation",
      rating: 4.7,
      reviews: 456
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security Suite",
      description: "Comprehensive cybersecurity with AI threat detection, automated response, and compliance management. Protect against 99.9% of threats.",
      price: "$399/month",
      marketPrice: "$599/month",
      savings: "33% OFF",
      features: ["AI Threat Detection", "Automated Response", "Compliance Management", "24/7 Monitoring", "Penetration Testing", "Security Training"],
      link: "/advanced-security-suite",
      rating: 4.9,
      reviews: 1123
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Chatbot Enterprise",
      description: "Enterprise-grade conversational AI with multi-language support and advanced NLP capabilities. Handle 10,000+ conversations simultaneously.",
      price: "$149/month",
      marketPrice: "$249/month",
      savings: "40% OFF",
      features: ["Multi-language Support", "Advanced NLP", "Integration APIs", "Analytics Dashboard", "Custom Training", "Voice Integration"],
      link: "/ai-chatbot-enterprise",
      rating: 4.8,
      reviews: 789
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Customer Insights Pro",
      description: "Transform customer data into actionable insights with AI-powered analytics and predictive modeling. Increase customer retention by 35%.",
      price: "$299/month",
      marketPrice: "$449/month",
      savings: "33% OFF",
      features: ["Real-time Analytics", "Predictive Modeling", "Customer Segmentation", "Churn Prevention", "Behavioral Analysis", "ROI Tracking"],
      link: "/ai-customer-insights-pro",
      rating: 4.9,
      reviews: 967
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Project Management Pro",
      description: "Intelligent project management with AI-powered task prioritization and resource allocation. Complete projects 40% faster.",
      price: "$199/month",
      marketPrice: "$299/month",
      savings: "33% OFF",
      features: ["AI Task Prioritization", "Resource Optimization", "Risk Assessment", "Performance Analytics", "Team Collaboration", "Time Tracking"],
      link: "/ai-project-management-pro",
      rating: 4.7,
      reviews: 654
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Social Media Manager Pro",
      description: "AI-powered social media management with automated content generation and optimization. Increase engagement by 250%.",
      price: "$149/month",
      marketPrice: "$249/month",
      savings: "40% OFF",
      features: ["Content Generation", "Auto Scheduling", "Engagement Optimization", "Multi-platform Management", "Influencer Analytics", "Crisis Management"],
      link: "/ai-social-media-manager-pro",
      rating: 4.8,
      reviews: 445
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "AI Email Marketing Pro",
      description: "Revolutionize email marketing with AI-powered optimization and intelligent automation. Increase open rates by 180%.",
      price: "$99/month",
      marketPrice: "$149/month",
      savings: "33% OFF",
      features: ["Subject Line Optimization", "Send Time Optimization", "Personalization Engine", "Advanced Analytics", "A/B Testing", "List Segmentation"],
      link: "/ai-email-marketing-pro",
      rating: 4.9,
      reviews: 1234
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Inventory Management Pro",
      description: "Intelligent inventory management with AI-powered forecasting and optimization. Reduce inventory costs by 30%.",
      price: "$199/month",
      marketPrice: "$299/month",
      savings: "33% OFF",
      features: ["Demand Forecasting", "Automated Reordering", "Cost Optimization", "Real-time Tracking", "Supplier Management", "Quality Control"],
      link: "/ai-inventory-management-pro",
      rating: 4.8,
      reviews: 567
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI HR Assistant Pro",
      description: "Intelligent human resources management with AI-powered recruitment, employee analytics, and performance tracking. Streamline HR operations by 50%.",
      price: "$249/month",
      marketPrice: "$399/month",
      savings: "38% OFF",
      features: ["Resume Screening", "Candidate Matching", "Performance Analytics", "Employee Engagement", "Payroll Integration", "Compliance Management"],
      link: "/ai-hr-assistant-pro",
      rating: 4.9,
      reviews: 723
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
        <link rel="stylesheet" href="/futuristic.css" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 particles">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl float" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 cyber-grid"></div>

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
                  <span className="text-cyber text-glow">
                    Advanced AI & IT
                  </span>
                  <br />
                  <span className="text-white text-glow">Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with cutting-edge artificial intelligence, 
                  5G technology, and comprehensive IT services. From micro SAAS solutions 
                  to enterprise-grade platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="btn-cyber bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center neon-cyan"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="btn-cyber border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center neon-cyan"
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
                  <span className="text-cyber text-glow">
                    Our Services
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive AI, IT, and 5G solutions designed to accelerate your business growth. 
                  From micro SAAS platforms to enterprise-grade systems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 lg:p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 h-full flex flex-col"
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
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-semibold">
                              {service.savings}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span className="line-through">{service.marketPrice}</span>
                            <span className="text-green-400 font-medium">Market Price</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center text-yellow-400 mb-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm font-semibold">{service.rating}</span>
                          </div>
                          <div className="text-xs text-gray-400">
                            {service.reviews.toLocaleString()} reviews
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <a
                      href={service.link}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-cyber text-glow">Ready to Transform Your Business?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discuss how our AI and IT solutions can accelerate your success.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center neon-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4 neon-cyan">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center neon-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 neon-cyan">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center neon-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 neon-cyan">
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
