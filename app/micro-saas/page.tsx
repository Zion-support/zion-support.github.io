import { ArrowRight, Star, CheckCircle, Zap, Shield, Cloud, BarChart3, Code, Brain, Database, Globe, Smartphone, Users, Award, Clock, DollarSign, TrendingUp, Lock, Headphones, Rocket, Target, PieChart, FileText, Settings, Monitor, Smartphone as Phone, Mail, Calendar, MessageSquare, Search, Filter, Download, Upload, Share2, Eye, Edit, Trash2, Plus, Minus, RefreshCw, Play, Pause, Stop, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Signal, SignalHigh, SignalZero, SignalLow, SignalMedium, SignalMax, Wifi as WifiIcon, WifiOff as WifiOffIcon, Battery as BatteryIcon, BatteryLow as BatteryLowIcon, Signal as SignalIcon, SignalHigh as SignalHighIcon, SignalZero as SignalZeroIcon, SignalLow as SignalLowIcon, SignalMedium as SignalMediumIcon, SignalMax as SignalMaxIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      tagline: "AI-Powered Business Intelligence Platform",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Get real-time dashboards, predictive analytics, and automated reporting.",
      price: { monthly: 29, yearly: 290, enterprise: "Custom" },
      features: [
        "Real-time data visualization",
        "AI-powered predictive analytics",
        "Automated report generation",
        "Custom dashboard creation",
        "Multi-source data integration",
        "Advanced filtering and search",
        "Export to multiple formats",
        "Team collaboration tools",
        "API access",
        "24/7 support"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      tagline: "Advanced Cybersecurity Protection Suite",
      description: "Comprehensive security solution with AI threat detection, real-time monitoring, and automated incident response for businesses of all sizes.",
      price: { monthly: 49, yearly: 490, enterprise: "Custom" },
      features: [
        "AI-powered threat detection",
        "Real-time security monitoring",
        "Automated incident response",
        "Vulnerability scanning",
        "Compliance reporting",
        "Multi-factor authentication",
        "Encrypted data storage",
        "Security training modules",
        "24/7 security monitoring",
        "Incident response team"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Security",
      popular: true,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      tagline: "Secure Cloud Storage & Collaboration Platform",
      description: "Enterprise-grade cloud storage with advanced security, real-time collaboration, and AI-powered file organization for seamless team productivity.",
      price: { monthly: 9, yearly: 90, enterprise: "Custom" },
      features: [
        "Unlimited cloud storage",
        "End-to-end encryption",
        "Real-time collaboration",
        "Version control",
        "AI file organization",
        "Advanced sharing controls",
        "Mobile app access",
        "Offline sync",
        "Team workspaces",
        "Integration APIs"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "Storage",
      popular: true,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      tagline: "AI-Powered Content Creation Suite",
      description: "Create high-quality content at scale with our AI writing assistant, image generator, and video creation tools for marketing and social media.",
      price: { monthly: 19, yearly: 190, enterprise: "Custom" },
      features: [
        "AI content generation",
        "Multi-format support",
        "Brand voice customization",
        "SEO optimization",
        "Image and video creation",
        "Content calendar",
        "Team collaboration",
        "Publishing automation",
        "Performance analytics",
        "Content templates"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "Content",
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      tagline: "Intelligent Data Integration Platform",
      description: "Seamlessly connect and synchronize data across all your business applications with our powerful integration platform and real-time sync capabilities.",
      price: { monthly: 39, yearly: 390, enterprise: "Custom" },
      features: [
        "500+ app integrations",
        "Real-time data sync",
        "Data transformation",
        "Error handling & retry",
        "Custom connectors",
        "Data validation",
        "Scheduled sync",
        "API management",
        "Data mapping tools",
        "Monitoring dashboard"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      category: "Integration",
      link: "/zion-data-sync"
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      tagline: "Advanced Lead Generation & CRM Platform",
      description: "Generate, nurture, and convert leads with our comprehensive CRM system featuring AI-powered lead scoring and automated follow-up sequences.",
      price: { monthly: 24, yearly: 240, enterprise: "Custom" },
      features: [
        "Lead capture forms",
        "AI lead scoring",
        "Automated follow-up",
        "Email marketing",
        "Pipeline management",
        "Contact segmentation",
        "Campaign tracking",
        "ROI analytics",
        "Integration APIs",
        "Mobile CRM app"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "CRM",
      link: "/zion-lead-magnet"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      tagline: "AI-Enhanced Project Management Suite",
      description: "Streamline project workflows with intelligent task management, resource allocation, and predictive analytics for optimal project delivery.",
      price: { monthly: 34, yearly: 340, enterprise: "Custom" },
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Timeline prediction",
        "Team collaboration",
        "Progress tracking",
        "Risk assessment",
        "Budget management",
        "Reporting dashboard",
        "Mobile access",
        "Integration tools"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Project Management",
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      tagline: "Intelligent Email Marketing Platform",
      description: "Create, send, and optimize email campaigns with AI-powered personalization, A/B testing, and advanced analytics for maximum engagement.",
      price: { monthly: 14, yearly: 140, enterprise: "Custom" },
      features: [
        "AI email personalization",
        "Drag-and-drop editor",
        "A/B testing",
        "Behavioral triggers",
        "List segmentation",
        "Deliverability optimization",
        "Performance analytics",
        "Template library",
        "Automation workflows",
        "Compliance tools"
      ],
      icon: <Mail className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      link: "/zion-email-automation"
    },
    {
      id: "zion-customer-insights",
      name: "Zion Customer Insights",
      tagline: "AI-Powered Customer Analytics Platform",
      description: "Understand your customers better with advanced analytics, sentiment analysis, and predictive modeling to improve customer experience and retention.",
      price: { monthly: 44, yearly: 440, enterprise: "Custom" },
      features: [
        "Customer journey mapping",
        "Sentiment analysis",
        "Churn prediction",
        "Behavioral analytics",
        "Segmentation tools",
        "ROI tracking",
        "Survey integration",
        "Real-time insights",
        "Custom reports",
        "API access"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Analytics",
      link: "/zion-customer-insights"
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      tagline: "No-Code Business Process Automation",
      description: "Automate repetitive tasks and streamline business processes with our visual workflow builder and AI-powered automation engine.",
      price: { monthly: 29, yearly: 290, enterprise: "Custom" },
      features: [
        "Visual workflow builder",
        "AI process optimization",
        "500+ app integrations",
        "Conditional logic",
        "Error handling",
        "Performance monitoring",
        "Team collaboration",
        "Custom triggers",
        "Data transformation",
        "Scalable execution"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      category: "Automation",
      link: "/zion-workflow-automation"
    },
    {
      id: "zion-financial-dashboard",
      name: "Zion Financial Dashboard",
      tagline: "AI-Powered Financial Analytics & Reporting",
      description: "Get comprehensive financial insights with automated reporting, budget tracking, and predictive financial modeling for better business decisions.",
      price: { monthly: 39, yearly: 390, enterprise: "Custom" },
      features: [
        "Real-time financial tracking",
        "AI budget optimization",
        "Predictive modeling",
        "Expense categorization",
        "Revenue forecasting",
        "Tax preparation tools",
        "Multi-currency support",
        "Compliance reporting",
        "Integration APIs",
        "Custom dashboards"
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      category: "Finance",
      link: "/zion-financial-dashboard"
    },
    {
      id: "zion-social-media-manager",
      name: "Zion Social Media Manager",
      tagline: "AI-Enhanced Social Media Management Platform",
      description: "Manage all your social media accounts with AI-powered content suggestions, optimal posting times, and comprehensive analytics across platforms.",
      price: { monthly: 19, yearly: 190, enterprise: "Custom" },
      features: [
        "Multi-platform management",
        "AI content suggestions",
        "Optimal posting times",
        "Hashtag optimization",
        "Engagement analytics",
        "Content calendar",
        "Team collaboration",
        "Brand monitoring",
        "Competitor analysis",
        "Automated responses"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      category: "Social Media",
      link: "/zion-social-media-manager"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "Integration", "CRM", "Project Management", "Marketing", "Automation", "Finance", "Social Media"];

  const stats = [
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "12", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We've seen a 300% improvement in decision-making speed and accuracy.",
      rating: 5,
      product: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The security features in Zion Security Shield are outstanding. We feel completely protected against cyber threats.",
      rating: 5,
      product: "Zion Security Shield"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Content Studio has revolutionized our content creation process. We're producing 5x more content with half the effort.",
      rating: 5,
      product: "Zion Content Studio"
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions including analytics, security, content creation, CRM, and automation tools. Transform your business with AI-powered technology."
        keywords="micro SAAS, business software, AI tools, analytics, CRM, project management, automation, cloud storage, cybersecurity, content creation"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">12 Powerful Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, AI-enhanced micro SAAS solutions designed to transform your business operations. 
              From analytics to automation, we provide everything you need to scale and succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions. 
                Each tool is designed to solve specific business challenges and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    product.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-1">
                      ${product.price.monthly}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      ${product.price.yearly}/year (Save 17%)
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      <li className="text-sm text-cyan-400 font-medium">
                        +{product.features.length - 4} more features
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={product.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  <div className="mb-2">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="text-sm text-cyan-400 font-medium">
                    Using: {testimonial.product}
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
              Start your free trial today and experience the power of AI-enhanced business tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
