import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Zap,
  TrendingUp,
  Users,
  Target,
  Award,
  Clock,
  Shield
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Customer Insights Pro",
      description: "Transform customer data into actionable insights with AI-powered analytics and predictive modeling.",
      price: "$299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Customer Segmentation", "Churn Prevention"],
      link: "/ai-customer-insights-pro",
      category: "Analytics",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Project Management Pro",
      description: "Intelligent project management with AI-powered task prioritization and resource allocation.",
      price: "$199/month",
      features: ["AI Task Prioritization", "Resource Optimization", "Risk Assessment", "Performance Analytics"],
      link: "/ai-project-management-pro",
      category: "Productivity",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Social Media Manager Pro",
      description: "AI-powered social media management with automated content generation and optimization.",
      price: "$149/month",
      features: ["Content Generation", "Auto Scheduling", "Engagement Optimization", "Multi-platform Management"],
      link: "/ai-social-media-manager-pro",
      category: "Marketing",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "AI Email Marketing Pro",
      description: "Revolutionize email marketing with AI-powered optimization and intelligent automation.",
      price: "$99/month",
      features: ["Subject Line Optimization", "Send Time Optimization", "Personalization Engine", "Advanced Analytics"],
      link: "/ai-email-marketing-pro",
      category: "Marketing",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Inventory Management Pro",
      description: "Intelligent inventory management with AI-powered forecasting and optimization.",
      price: "$199/month",
      features: ["Demand Forecasting", "Automated Reordering", "Cost Optimization", "Real-time Tracking"],
      link: "/ai-inventory-management-pro",
      category: "Operations",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Accounting Assistant",
      description: "Automated accounting with AI-powered bookkeeping, tax preparation, and financial insights.",
      price: "$149/month",
      features: ["Automated Bookkeeping", "Tax Preparation", "Financial Reporting", "Expense Tracking"],
      link: "/ai-accounting-assistant",
      category: "Finance",
      color: "from-teal-600 to-cyan-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI Content Moderation Pro",
      description: "Advanced content moderation with AI-powered detection and automated response systems.",
      price: "$179/month",
      features: ["AI Content Detection", "Automated Moderation", "Custom Rules Engine", "Real-time Monitoring"],
      link: "/ai-content-moderation-pro",
      category: "Security",
      color: "from-red-600 to-pink-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Climate Solutions Pro",
      description: "Environmental monitoring and sustainability solutions powered by AI and IoT technologies.",
      price: "$249/month",
      features: ["Environmental Monitoring", "Carbon Footprint Tracking", "Sustainability Analytics", "Green Energy Optimization"],
      link: "/ai-climate-solutions-pro",
      category: "Sustainability",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "AI Agricultural Intelligence Pro",
      description: "Smart farming solutions with AI-powered crop monitoring, yield prediction, and resource optimization.",
      price: "$299/month",
      features: ["Crop Monitoring", "Yield Prediction", "Resource Optimization", "Weather Analysis"],
      link: "/ai-agricultural-intelligence-pro",
      category: "Agriculture",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI 3D Generation",
      description: "AI-powered 3D model generation and rendering for design, gaming, and visualization applications.",
      price: "$199/month",
      features: ["3D Model Generation", "Texture Synthesis", "Animation Creation", "Rendering Optimization"],
      link: "/ai-3d-generation",
      category: "Design",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Blockchain Solutions",
      description: "Blockchain integration and smart contract development with AI-powered security and optimization.",
      price: "$399/month",
      features: ["Smart Contract Development", "Blockchain Analytics", "Security Auditing", "DeFi Integration"],
      link: "/ai-blockchain-solutions",
      category: "Blockchain",
      color: "from-gray-600 to-gray-800"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Operations", count: microSaasServices.filter(s => s.category === "Operations").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Sustainability", count: microSaasServices.filter(s => s.category === "Sustainability").length },
    { name: "Agriculture", count: microSaasServices.filter(s => s.category === "Agriculture").length },
    { name: "Design", count: microSaasServices.filter(s => s.category === "Design").length },
    { name: "Blockchain", count: microSaasServices.filter(s => s.category === "Blockchain").length }
  ];

  const stats = [
    { number: "11+", label: "Micro SAAS Services", icon: <Cloud className="w-6 h-6" /> },
    { number: "500+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS services. From analytics to marketing, productivity to operations - transform your business with intelligent automation." />
        <meta name="keywords" content="micro SAAS, AI services, business automation, productivity tools, marketing automation, analytics, project management" />
        <meta property="og:title" content="Micro SAAS Services - AI-Powered Business Solutions" />
        <meta property="og:description" content="Comprehensive suite of AI-powered micro SAAS services for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                AI-Powered Micro SAAS Solutions
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Micro SAAS
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Discover our comprehensive suite of AI-powered micro SAAS services designed to 
                transform your business operations, boost productivity, and drive growth.
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
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-gray-300">Filter our services by category to find exactly what you need</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white hover:bg-cyan-600/20 hover:border-cyan-400/40 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>{category.name}</span>
                  <span className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive AI-powered micro SAAS solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
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
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={service.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose from our comprehensive suite of AI-powered micro SAAS services and start your digital transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to revolutionize your business with our AI-powered micro SAAS solutions? Contact us today.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;