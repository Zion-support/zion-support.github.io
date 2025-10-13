import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle, Zap, Shield, BarChart3, Cloud, Users, Target, Calendar, Brain, Globe, Lock, Smartphone, Monitor, Database, Settings, TrendingUp, Award, Clock, DollarSign } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const MicroSAASPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions - Zion Tech Group",
    "description": "Comprehensive collection of ready-to-use micro SAAS solutions for immediate business deployment",
    "url": "https://ziontechgroup.com/micro-saas",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Zion Analytics Pro",
          "description": "AI-powered business intelligence platform",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "299",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  const microSaasSolutions = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform raw data into actionable insights.",
      price: "From $299/month",
      originalPrice: "$399/month",
      discount: "25% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time dashboards", "Predictive analytics", "Automated reporting", "Custom visualizations", "API integration", "Mobile app"],
      category: "Analytics",
      rating: 4.9,
      users: "2,500+",
      link: "/zion-analytics-pro",
      featured: true,
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Enterprise-grade security for all business sizes.",
      price: "From $499/month",
      originalPrice: "$699/month",
      discount: "28% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["AI threat detection", "Automated response", "24/7 monitoring", "Compliance reporting", "Incident management", "Security training"],
      category: "Security",
      rating: 4.8,
      users: "1,800+",
      link: "/zion-security-shield",
      featured: true,
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Your data, secured and accessible anywhere.",
      price: "From $99/month",
      originalPrice: "$149/month",
      discount: "33% OFF",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["End-to-end encryption", "Unlimited storage", "Real-time sync", "Version control", "Team collaboration", "Mobile access"],
      category: "Storage",
      rating: 4.7,
      users: "5,200+",
      link: "/zion-cloud-vault",
      featured: true,
      popular: false
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive customer insights. Boost your sales performance.",
      price: "From $199/month",
      originalPrice: "$299/month",
      discount: "33% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["AI lead scoring", "Automated follow-ups", "Predictive insights", "Sales forecasting", "Email integration", "Mobile CRM"],
      category: "CRM",
      rating: 4.9,
      users: "3,100+",
      link: "/zion-ai-crm-pro",
      featured: true,
      popular: true
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced audience segmentation. Scale your marketing efforts.",
      price: "From $149/month",
      originalPrice: "$249/month",
      discount: "40% OFF",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["AI content generation", "Multi-channel campaigns", "Audience segmentation", "A/B testing", "ROI tracking", "Social media integration"],
      category: "Marketing",
      rating: 4.8,
      users: "2,800+",
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      popular: false
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated progress tracking. Complete project visibility and control.",
      price: "From $99/month",
      originalPrice: "$149/month",
      discount: "33% OFF",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: ["AI task prioritization", "Resource optimization", "Progress tracking", "Team collaboration", "Time tracking", "Reporting"],
      category: "Project Management",
      rating: 4.7,
      users: "1,900+",
      link: "/zion-ai-project-manager-pro",
      featured: true,
      popular: false
    },
    {
      name: "Zion AI Code Assistant Pro",
      description: "AI-powered coding assistant with intelligent code generation, debugging, and optimization. Accelerate development with AI-powered programming support.",
      price: "From $79/month",
      originalPrice: "$129/month",
      discount: "38% OFF",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: ["AI code generation", "Smart debugging", "Code optimization", "Multi-language support", "IDE integration", "Code review"],
      category: "Development",
      rating: 4.9,
      users: "4,500+",
      link: "/zion-ai-code-assistant-pro",
      featured: false,
      popular: true
    },
    {
      name: "Zion AI Content Studio Pro",
      description: "AI-powered content creation platform with automated writing, image generation, and multi-format publishing. Create engaging content at scale.",
      price: "From $129/month",
      originalPrice: "$199/month",
      discount: "35% OFF",
      icon: <Globe className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["AI writing assistant", "Image generation", "Multi-format support", "SEO optimization", "Brand consistency", "Publishing automation"],
      category: "Content Creation",
      rating: 4.8,
      users: "3,700+",
      link: "/zion-ai-content-studio-pro",
      featured: false,
      popular: true
    },
    {
      name: "Zion AI Customer Support Bot Pro",
      description: "AI-powered customer support chatbot with natural language processing, multi-language support, and seamless human handoff. 24/7 customer service automation.",
      price: "From $89/month",
      originalPrice: "$149/month",
      discount: "40% OFF",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["Natural language processing", "Multi-language support", "Human handoff", "Knowledge base", "Analytics dashboard", "Integration APIs"],
      category: "Customer Support",
      rating: 4.7,
      users: "2,200+",
      link: "/zion-ai-customer-support-bot-pro",
      featured: false,
      popular: false
    },
    {
      name: "Zion AI Data Pipeline Pro",
      description: "AI-powered data integration and processing platform with automated ETL, real-time analytics, and intelligent data quality management. Streamline your data operations.",
      price: "From $179/month",
      originalPrice: "$279/month",
      discount: "36% OFF",
      icon: <Database className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["Automated ETL", "Real-time processing", "Data quality management", "API integrations", "Scalable infrastructure", "Monitoring dashboard"],
      category: "Data Management",
      rating: 4.8,
      users: "1,600+",
      link: "/zion-ai-data-pipeline-pro",
      featured: false,
      popular: false
    },
    {
      name: "Zion AI HR Assistant Pro",
      description: "AI-powered human resources management with automated recruitment, employee analytics, and intelligent workforce planning. Optimize your HR operations.",
      price: "From $159/month",
      originalPrice: "$239/month",
      discount: "33% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: ["Automated recruitment", "Employee analytics", "Workforce planning", "Performance tracking", "Compliance management", "Employee portal"],
      category: "Human Resources",
      rating: 4.6,
      users: "1,300+",
      link: "/zion-ai-hr-assistant-pro",
      featured: false,
      popular: false
    },
    {
      name: "Zion AI Financial Analytics Pro",
      description: "AI-powered financial analysis and forecasting platform with automated reporting, risk assessment, and investment insights. Make data-driven financial decisions.",
      price: "From $229/month",
      originalPrice: "$349/month",
      discount: "34% OFF",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      features: ["Financial forecasting", "Risk assessment", "Automated reporting", "Investment analysis", "Compliance tracking", "Real-time alerts"],
      category: "Finance",
      rating: 4.9,
      users: "1,100+",
      link: "/zion-ai-financial-analytics-pro",
      featured: false,
      popular: true
    }
  ];

  const categories = [
    { name: "All Solutions", count: microSaasSolutions.length, active: true },
    { name: "Analytics", count: microSaasSolutions.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: microSaasSolutions.filter(s => s.category === "Security").length, active: false },
    { name: "Storage", count: microSaasSolutions.filter(s => s.category === "Storage").length, active: false },
    { name: "CRM", count: microSaasSolutions.filter(s => s.category === "CRM").length, active: false },
    { name: "Marketing", count: microSaasSolutions.filter(s => s.category === "Marketing").length, active: false },
    { name: "Project Management", count: microSaasSolutions.filter(s => s.category === "Project Management").length, active: false },
    { name: "Development", count: microSaasSolutions.filter(s => s.category === "Development").length, active: false },
    { name: "Content Creation", count: microSaasSolutions.filter(s => s.category === "Content Creation").length, active: false },
    { name: "Customer Support", count: microSaasSolutions.filter(s => s.category === "Customer Support").length, active: false },
    { name: "Data Management", count: microSaasSolutions.filter(s => s.category === "Data Management").length, active: false },
    { name: "Human Resources", count: microSaasSolutions.filter(s => s.category === "Human Resources").length, active: false },
    { name: "Finance", count: microSaasSolutions.filter(s => s.category === "Finance").length, active: false }
  ];

  const benefits = [
    {
      title: "Immediate Deployment",
      description: "Ready-to-use solutions that can be deployed in minutes, not months",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "AI-Powered Intelligence",
      description: "Every solution leverages cutting-edge AI for maximum efficiency",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance with industry standards",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and customer service",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Solutions that grow with your business needs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Cost-Effective",
      description: "Affordable pricing with transparent, no-hidden-fees structure",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Comprehensive collection of AI-powered micro SAAS solutions for immediate business deployment. Analytics, security, CRM, marketing automation, and more."
        keywords="micro saas, business software, AI solutions, analytics, CRM, marketing automation, project management, cloud storage, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Micro SAAS Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Ready-to-use AI-powered software solutions for immediate business deployment. 
            Transform your operations with our comprehensive suite of micro SAAS applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed for immediate deployment with enterprise-grade features
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {solution.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                {solution.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {solution.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(solution.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({solution.users} users)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-white">{solution.price}</span>
                    <span className="text-sm text-gray-400 line-through">{solution.originalPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {solution.discount}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {solution.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {solution.features.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{solution.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={solution.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
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
              icon={<Zap className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<Award className="w-5 h-5" />}
            >
              View All Services
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;