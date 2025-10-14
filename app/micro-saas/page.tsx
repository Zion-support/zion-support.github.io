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
  MapPin,
  DollarSign,
  BarChart3,
  FileText,
  Globe
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSAASServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Content Generation Pro",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation with brand voice training.",
      price: "$179/month",
      features: [
        "Multi-format Content Creation",
        "SEO Optimization Engine",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Multi-language Support",
        "Content Calendar Management",
        "Performance Analytics",
        "Team Collaboration Tools"
      ],
      category: "Content Creation",
      marketPrice: "$250-400/month",
      link: "/ai-content-generation-pro",
      savings: "Save $71-221/month"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Accounting Assistant",
      description: "Intelligent accounting automation with AI-powered expense tracking, invoice generation, and financial reporting for small to medium businesses.",
      price: "$99/month",
      features: [
        "Automated Expense Tracking",
        "Invoice Generation",
        "Financial Reporting",
        "Tax Preparation Support",
        "Receipt Scanning",
        "Bank Integration",
        "Compliance Monitoring",
        "Real-time Analytics"
      ],
      category: "Business Automation",
      marketPrice: "$150-300/month",
      link: "/ai-accounting-assistant",
      savings: "Save $51-201/month"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Content Moderation Pro",
      description: "Advanced AI-powered content moderation platform with real-time filtering, sentiment analysis, and automated compliance management.",
      price: "$149/month",
      features: [
        "Real-time Content Filtering",
        "Sentiment Analysis",
        "Automated Moderation",
        "Custom Rule Engine",
        "Multi-language Support",
        "API Integration",
        "Analytics Dashboard",
        "Compliance Reporting"
      ],
      category: "Content Management",
      marketPrice: "$200-350/month",
      link: "/ai-content-moderation-pro",
      savings: "Save $51-201/month"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Climate Solutions Pro",
      description: "Comprehensive AI-powered climate monitoring and sustainability platform for businesses looking to reduce their environmental impact.",
      price: "$199/month",
      features: [
        "Carbon Footprint Tracking",
        "Sustainability Analytics",
        "Environmental Reporting",
        "Green Energy Optimization",
        "Waste Reduction Insights",
        "Compliance Monitoring",
        "Goal Setting & Tracking",
        "Industry Benchmarking"
      ],
      category: "Sustainability",
      marketPrice: "$300-500/month",
      link: "/ai-climate-solutions-pro",
      savings: "Save $101-301/month"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Agricultural Intelligence Pro",
      description: "Smart farming solution with AI-powered crop monitoring, yield prediction, and precision agriculture recommendations.",
      price: "$299/month",
      features: [
        "Crop Health Monitoring",
        "Yield Prediction",
        "Weather Analysis",
        "Soil Quality Assessment",
        "Pest Detection",
        "Irrigation Optimization",
        "Market Price Tracking",
        "Farm Management Tools"
      ],
      category: "Agriculture",
      marketPrice: "$400-700/month",
      link: "/ai-agricultural-intelligence-pro",
      savings: "Save $101-401/month"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI 3D Generation",
      description: "Advanced AI-powered 3D model generation and rendering platform for architects, designers, and content creators.",
      price: "$249/month",
      features: [
        "AI 3D Model Generation",
        "Texture Synthesis",
        "Lighting Optimization",
        "Animation Tools",
        "VR/AR Export",
        "Collaborative Workspace",
        "Asset Library",
        "Rendering Engine"
      ],
      category: "3D Design",
      marketPrice: "$350-600/month",
      link: "/ai-3d-generation",
      savings: "Save $101-351/month"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Blockchain Solutions",
      description: "Comprehensive blockchain integration platform with AI-powered smart contracts, DeFi protocols, and secure decentralized applications.",
      price: "$599/month",
      features: [
        "Smart Contract Development",
        "DeFi Protocol Integration",
        "NFT Marketplace",
        "Security Auditing",
        "Cross-chain Support",
        "Token Economics",
        "Governance Tools",
        "Analytics Dashboard"
      ],
      category: "Blockchain",
      marketPrice: "$800-1200/month",
      link: "/ai-blockchain-solutions",
      savings: "Save $201-601/month"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Customer Analytics Pro",
      description: "Advanced customer behavior analysis platform with AI-powered insights, segmentation, and personalized marketing recommendations.",
      price: "$199/month",
      features: [
        "Customer Segmentation",
        "Behavior Analysis",
        "Predictive Analytics",
        "Personalization Engine",
        "Churn Prediction",
        "Lifetime Value Analysis",
        "Marketing Automation",
        "ROI Tracking"
      ],
      category: "Analytics",
      marketPrice: "$300-500/month",
      link: "/ai-customer-analytics-pro",
      savings: "Save $101-301/month"
    }
  ];

  const categories = ['All', 'Content Creation', 'Business Automation', 'Content Management', 'Sustainability', 'Agriculture', '3D Design', 'Blockchain', 'Analytics'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { number: "30%", label: "Average Savings", icon: <DollarSign className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | Affordable AI-Powered Solutions</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including AI content generation, accounting automation, climate monitoring, and blockchain integration for small to medium businesses." />
        <meta name="keywords" content="micro SAAS, AI solutions, business automation, content generation, accounting software, climate monitoring, blockchain solutions" />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Affordable AI-powered micro SAAS solutions for modern businesses." />
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
                  Affordable Micro SAAS Solutions
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Micro SAAS
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Powerful, affordable AI-powered micro SAAS solutions designed for small to medium businesses. 
                  Get enterprise-grade features at startup-friendly prices with significant cost savings.
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-8">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Save up to 50% compared to enterprise solutions
                </div>
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
                <h2 className="text-4xl font-bold text-white mb-6">Our Micro SAAS Solutions</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Affordable, powerful AI-powered solutions that deliver enterprise-grade features at startup-friendly prices
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

                    {/* Savings Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full text-xs font-medium text-green-400 backdrop-blur-sm">
                        {service.savings}
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

          {/* Why Choose Micro SAAS Section */}
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SAAS Solutions?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Get enterprise-grade features without enterprise-grade prices
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Cost Effective</h3>
                  <p className="text-gray-300">Save up to 50% compared to enterprise solutions while getting the same powerful features.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                  <p className="text-gray-300">Get started in minutes with our intuitive setup process and comprehensive onboarding.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
                  <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for peace of mind.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Save with Micro SAAS?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start saving money while getting powerful AI-powered solutions for your business.
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

export default MicroSAASPage;