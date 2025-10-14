import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Users, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered analytics platform with real-time insights, predictive modeling, and automated reporting for data-driven business decisions.",
      price: "$299/month",
      features: [
        "Real-time Data Processing",
        "Predictive Analytics Engine",
        "Custom Dashboard Builder",
        "API Integration Suite",
        "Machine Learning Insights",
        "Automated Report Generation",
        "Multi-source Data Connectors",
        "Advanced Visualization Tools"
      ],
      category: "Analytics",
      marketPrice: "$500-800/month",
      link: "/ai-analytics-dashboard-pro"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, debugging, and optimization platform supporting 50+ programming languages with advanced AI capabilities.",
      price: "$199/month",
      features: [
        "Multi-language Code Generation",
        "Intelligent Bug Detection",
        "Performance Optimization",
        "Code Review Automation",
        "Documentation Generation",
        "Test Case Creation",
        "Security Vulnerability Scanning",
        "Refactoring Suggestions"
      ],
      category: "Development",
      marketPrice: "$300-500/month",
      link: "/ai-code-assistant-pro"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Chatbot Enterprise",
      description: "Enterprise-grade conversational AI platform with advanced NLP, multi-language support, and seamless integration capabilities.",
      price: "$149/month",
      features: [
        "Advanced NLP Processing",
        "Multi-language Support",
        "Voice Recognition",
        "Sentiment Analysis",
        "Integration APIs",
        "Analytics Dashboard",
        "Custom Training Models",
        "24/7 Availability"
      ],
      category: "Conversational AI",
      marketPrice: "$200-400/month",
      link: "/ai-chatbot-enterprise"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Infrastructure",
      description: "Scalable cloud solutions with AI-powered auto-scaling, intelligent monitoring, and cost optimization for modern businesses.",
      price: "$499/month",
      features: [
        "Intelligent Auto-scaling",
        "AI-powered Monitoring",
        "Cost Optimization Engine",
        "99.9% Uptime Guarantee",
        "Multi-cloud Support",
        "Security Automation",
        "Performance Analytics",
        "Disaster Recovery"
      ],
      category: "Cloud Computing",
      marketPrice: "$800-1200/month",
      link: "/ai-cloud-infrastructure"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Suite",
      description: "Comprehensive AI-powered cybersecurity solution with threat detection, automated response, and compliance management.",
      price: "$399/month",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Compliance Management",
        "24/7 Security Monitoring",
        "Zero Trust Architecture",
        "Behavioral Analytics",
        "Threat Intelligence",
        "Security Training"
      ],
      category: "Cybersecurity",
      marketPrice: "$600-1000/month",
      link: "/ai-security-suite"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Content Generation Pro",
      description: "Advanced AI content creation platform for blogs, social media, marketing materials, and technical documentation.",
      price: "$179/month",
      features: [
        "Multi-format Content Creation",
        "SEO Optimization",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Multi-language Support",
        "Content Calendar Management",
        "Performance Analytics",
        "Team Collaboration Tools"
      ],
      category: "Content Creation",
      marketPrice: "$250-400/month",
      link: "/ai-content-generation-pro"
    }
  ];

  const categories = ['All', 'Analytics', 'Development', 'Conversational AI', 'Cloud Computing', 'Cybersecurity', 'Content Creation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.7%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and intelligent automation solutions for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI automation, intelligent systems" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
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
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Advanced AI Solutions
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Transform your business with cutting-edge artificial intelligence solutions. 
                  From machine learning to natural language processing, we deliver intelligent 
                  automation that drives real results.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
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
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to accelerate your business growth and drive innovation
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-cyan-500/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden"
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400 backdrop-blur-sm">
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
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">Market Price</div>
                            <div className="text-lg font-semibold text-gray-300 line-through">{service.marketPrice}</div>
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
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our AI solutions can accelerate your success and drive innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AIServicesPage;