import { Link } from "react-router-dom";
import { ArrowRight, Award, BarChart3, Brain, Calendar, Cloud, Code, Globe, Mail, Monitor, Package, Phone, Receipt, Shield, Smartphone, Sparkles, Star, Target, Users, Video, Zap } from 'lucide-react';
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
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure", 
        "description": "Cloud computing and infrastructure services"
      }
    ]
  };
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime SLA",
      link: "/services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50+ solutions",
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "10x faster speeds",
      link: "/5g-solutions"
    },
  ];

  const microSaasHighlights = [
    {
      name: "Zion AI Video Generator",
      description: "Create professional videos from text prompts using advanced AI. Generate engaging content 10x faster with voice synthesis, smart templates, and multiple formats.",
      price: "From $29/month",
      icon: <Video className="w-6 h-6" />,
      link: "/zion-ai-video-generator",
      featured: true,
      category: "Video Creation",
      marketPrice: "$99-200/month",
      benefits: ["AI video generation", "Voice synthesis", "200+ templates", "Multi-format support"]
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Generate professional invoices automatically with AI-powered data extraction and smart automation. Multi-currency support and automated follow-ups.",
      price: "From $19/month",
      icon: <Receipt className="w-6 h-6" />,
      link: "/zion-ai-invoice-generator",
      featured: true,
      category: "Billing & Finance",
      marketPrice: "$59-120/month",
      benefits: ["Auto invoice generation", "Multi-currency", "Payment tracking", "Automated reminders"]
    },
    {
      name: "Zion AI Customer Insights",
      description: "Unlock deep customer insights with AI-powered analytics, sentiment analysis, and predictive modeling. Understand your customers like never before.",
      price: "From $39/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/zion-ai-customer-insights",
      featured: true,
      category: "Analytics",
      marketPrice: "$150-300/month",
      benefits: ["360° customer view", "Sentiment analysis", "Predictive analytics", "Real-time insights"]
    },
    {
      name: "Zion AI Code Assistant",
      description: "Supercharge your development with AI-powered code generation, intelligent review, and automated debugging. Support for 50+ programming languages.",
      price: "From $29/month",
      icon: <Code className="w-6 h-6" />,
      link: "/ai-code-assistant",
      featured: true,
      category: "Development",
      marketPrice: "$99-200/month",
      benefits: ["AI code generation", "Intelligent review", "Bug detection", "50+ languages"]
    },
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence with real-time dashboards, predictive analytics, and automated insights. Features machine learning models for trend analysis and forecasting.",
      price: "From $299/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-ai-analytics-pro",
      featured: true,
      category: "Analytics",
      marketPrice: "$500-800/month",
      benefits: ["Real-time insights", "Predictive forecasting", "Custom dashboards", "API integration"]
    },
    {
      name: "Zion AI Security Suite",
      description: "Comprehensive cybersecurity platform with AI-powered threat detection, automated incident response, and compliance monitoring. Includes vulnerability scanning and security training.",
      price: "From $499/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/zion-ai-security-suite",
      featured: true,
      category: "Security",
      marketPrice: "$800-1200/month",
      benefits: ["24/7 monitoring", "Automated response", "Compliance reports", "Security training"]
    },
    {
      name: "Zion Cloud Infrastructure Pro",
      description: "Enterprise-grade cloud infrastructure with auto-scaling, load balancing, and disaster recovery. Includes managed services and 99.9% uptime SLA.",
      price: "From $199/month",
      icon: <Cloud className="w-6 h-6" />,
      link: "/zion-cloud-infrastructure-pro",
      featured: true,
      category: "Infrastructure",
      marketPrice: "$400-700/month",
      benefits: ["Auto-scaling", "Load balancing", "Disaster recovery", "24/7 support"]
    },
    {
      name: "Zion AI CRM Enterprise",
      description: "Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and advanced analytics. Integrates with 100+ business tools.",
      price: "From $199/month",
      icon: <Users className="w-6 h-6" />,
      link: "/zion-ai-crm-enterprise",
      featured: true,
      category: "CRM",
      marketPrice: "$300-500/month",
      benefits: ["AI lead scoring", "Automated workflows", "Advanced analytics", "100+ integrations"]
    },
    {
      name: "Zion AI Marketing Automation",
      description: "Complete marketing automation platform with AI-driven campaign optimization, multi-channel orchestration, and advanced segmentation. Includes A/B testing and ROI tracking.",
      price: "From $149/month",
      icon: <Target className="w-6 h-6" />,
      link: "/zion-ai-marketing-automation",
      featured: true,
      category: "Marketing",
      marketPrice: "$250-400/month",
      benefits: ["Multi-channel campaigns", "AI optimization", "Advanced segmentation", "ROI tracking"]
    },
    {
      name: "Zion AI Project Management Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and risk assessment. Features team collaboration tools and progress tracking.",
      price: "From $99/month",
      icon: <Calendar className="w-6 h-6" />,
      link: "/zion-ai-project-management-pro",
      featured: true,
      category: "Project Management",
      marketPrice: "$150-300/month",
      benefits: ["AI task prioritization", "Resource optimization", "Risk assessment", "Team collaboration"]
    },
    {
      name: "Zion AI Content Studio",
      description: "AI-powered content creation platform with automated writing, image generation, and video editing. Supports multiple languages and content formats.",
      price: "From $79/month",
      icon: <Mail className="w-6 h-6" />,
      link: "/zion-ai-content-studio",
      featured: false,
      category: "Content Creation",
      marketPrice: "$120-200/month",
      benefits: ["AI writing assistant", "Image generation", "Video editing", "Multi-language support"]
    },
    {
      name: "Zion AI Financial Analytics",
      description: "Advanced financial analytics with AI-powered forecasting, expense tracking, and investment analysis. Includes tax preparation and compliance monitoring.",
      price: "From $129/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-ai-financial-analytics",
      featured: false,
      category: "Finance",
      marketPrice: "$200-350/month",
      benefits: ["AI forecasting", "Expense tracking", "Tax preparation", "Compliance monitoring"]
    },
    {
      name: "Zion AI Inventory Optimizer",
      description: "Smart inventory management with AI-powered demand forecasting, automated reordering, and supply chain optimization. Reduces costs by up to 30%.",
      price: "From $89/month",
      icon: <Package className="w-6 h-6" />,
      link: "/zion-ai-inventory-optimizer",
      featured: false,
      category: "Inventory",
      marketPrice: "$150-250/month",
      benefits: ["Demand forecasting", "Automated reordering", "Cost reduction", "Supply chain optimization"]
    },
    {
      name: "Zion AI Customer Support Pro",
      description: "AI-powered customer support platform with intelligent chatbots, sentiment analysis, and automated ticket routing. Improves response time by 80%.",
      price: "From $119/month",
      icon: <Users className="w-6 h-6" />,
      link: "/zion-ai-customer-support-pro",
      featured: false,
      category: "Customer Support",
      marketPrice: "$180-300/month",
      benefits: ["AI chatbots", "Sentiment analysis", "Auto ticket routing", "80% faster response"]
    },
    {
      name: "Zion AI Data Cleaner Pro",
      description: "Advanced data cleaning and validation platform with AI-powered duplicate detection, data quality scoring, and automated data enrichment.",
      price: "From $69/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-ai-data-cleaner-pro",
      featured: false,
      category: "Data Management",
      marketPrice: "$100-180/month",
      benefits: ["Duplicate detection", "Data quality scoring", "Auto enrichment", "Data validation"]
    },
    {
      name: "Zion AI Email Assistant Pro",
      description: "Intelligent email management with AI-powered categorization, automated responses, and smart scheduling. Increases productivity by 60%.",
      price: "From $49/month",
      icon: <Mail className="w-6 h-6" />,
      link: "/zion-ai-email-assistant-pro",
      featured: false,
      category: "Productivity",
      marketPrice: "$80-150/month",
      benefits: ["Smart categorization", "Auto responses", "Smart scheduling", "60% productivity boost"]
    },
    {
      name: "Zion AI Social Media Manager",
      description: "Comprehensive social media management with AI-powered content scheduling, hashtag optimization, and performance tracking across all platforms.",
      price: "From $39/month",
      icon: <Globe className="w-6 h-6" />,
      link: "/zion-ai-social-media-manager",
      featured: true,
      category: "Social Media",
      marketPrice: "$99-200/month",
      benefits: ["Multi-platform scheduling", "Hashtag optimization", "Performance analytics", "Content calendar"]
    },
    {
      name: "Zion AI Meeting Assistant",
      description: "AI-powered meeting transcription, note-taking, and action item extraction with real-time collaboration and follow-up automation.",
      price: "From $49/month",
      icon: <Calendar className="w-6 h-6" />,
      link: "/zion-ai-meeting-assistant",
      featured: true,
      category: "Productivity",
      marketPrice: "$129-250/month",
      benefits: ["Live transcription", "Auto note-taking", "Action items", "Meeting summaries"]
    },
    {
      name: "Zion AI Website Analyzer",
      description: "Comprehensive website analysis with AI-powered SEO optimization, performance monitoring, and conversion rate optimization.",
      price: "From $39/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-ai-website-analyzer",
      featured: true,
      category: "Web Analytics",
      marketPrice: "$99-200/month",
      benefits: ["SEO analysis", "Performance monitoring", "Conversion optimization", "Competitor analysis"]
    },
    {
      name: "Zion AI HR Assistant Pro",
      description: "Streamlined HR management with AI-powered resume screening, employee onboarding, performance tracking, and compliance monitoring.",
      price: "From $59/month",
      icon: <Users className="w-6 h-6" />,
      link: "/zion-ai-hr-assistant",
      featured: false,
      category: "Human Resources",
      marketPrice: "$149-300/month",
      benefits: ["Resume screening", "Employee onboarding", "Performance tracking", "Compliance monitoring"]
    },
    {
      name: "Zion AI Backup Manager",
      description: "Intelligent data backup and recovery with AI-powered scheduling, version control, and automated disaster recovery planning.",
      price: "From $19/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/zion-ai-backup-manager",
      featured: false,
      category: "Data Protection",
      marketPrice: "$59-120/month",
      benefits: ["Auto backup scheduling", "Version control", "Disaster recovery", "Data encryption"]
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "80+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Particle System */}
        <div className="particle-container absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <ResponsiveContainer className="text-center relative z-10 hero-responsive">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8 neon-border">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
            Welcome to Zion Tech Group
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center text-responsive">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            <span className="text-cyan-400 font-semibold"> Transform your operations with cutting-edge technology and innovative solutions.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
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
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group data-stream">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to enterprise security, we have everything you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              >
                <Link
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {feature.stats}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Micro SAAS Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 cyber-grid-enhanced">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 holographic-text">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately. 
              <span className="text-cyan-400 font-semibold"> Save up to 60% compared to enterprise solutions.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-responsive">
            {microSaasHighlights.map((saas, index) => (
              <Link
                key={index}
                to={saas.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden neon-border"
              >
                {saas.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {saas.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {saas.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-cyan-400 font-medium">{saas.price}</p>
                      <span className="text-xs text-gray-400">vs {saas.marketPrice}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {saas.category}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {saas.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {saas.benefits.slice(0, 3).map((benefit, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded">
                        {benefit}
                      </span>
                    ))}
                    {saas.benefits.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/10 text-gray-400 text-xs rounded">
                        +{saas.benefits.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-xs text-green-400 font-semibold">
                    Free Trial Available
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/micro-saas"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 group cyber-button"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group
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
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore Services
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
