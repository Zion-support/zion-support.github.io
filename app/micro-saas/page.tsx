import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  Target,
  DollarSign,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Award,
  Lock,
  Settings,
  PieChart,
  FileText,
  Video,
  Image,
  MessageSquare,
  Calendar,
  ShoppingCart,
  CreditCard,
  Truck,
  Wifi,
  Camera,
  Headphones,
  Mic,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Package,
  Share2
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"],
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-cloud-vault",
      features: ["End-to-end Encryption", "Unlimited Storage", "File Sharing", "Version Control"]
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/zion-ai-crm-pro",
      features: ["Lead Scoring", "Automated Follow-ups", "Sales Analytics", "Integration Hub"]
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-ai-marketing-automation-pro",
      features: ["Content Generation", "Multi-channel Campaigns", "A/B Testing", "Performance Analytics"]
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/zion-ai-project-manager-pro",
      features: ["Task Automation", "Resource Optimization", "Progress Tracking", "Team Collaboration"]
    }
  ];

  const benefits = [
    {
      title: "Ready to Use",
      description: "Deploy immediately with pre-configured solutions",
      icon: <Zap className="w-6 h-6" />,
      stat: "Instant deployment"
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing with no hidden costs",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "Up to 70% savings"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    }
  ];

  const microSaasServices = [
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced business intelligence with AI-powered insights and real-time dashboards",
      price: "From $299/month",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Real-time analytics", "AI predictions", "Custom dashboards", "Data visualization"],
      link: "/zion-ai-analytics-pro",
      featured: true
    },
    {
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring",
      price: "From $199/month",
      icon: <Users className="w-6 h-6" />,
      features: ["Lead scoring", "Automated follow-ups", "Sales forecasting", "Customer insights"],
      link: "/zion-ai-crm-pro",
      featured: true
    },
    {
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered content generation",
      price: "From $149/month",
      icon: <Video className="w-6 h-6" />,
      features: ["AI video creation", "Template library", "Brand customization", "Auto-subtitles"],
      link: "/zion-ai-video-generator",
      featured: true
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation with AI-powered templates and billing",
      price: "From $99/month",
      icon: <FileText className="w-6 h-6" />,
      features: ["Auto-generation", "Template library", "Payment tracking", "Tax calculations"],
      link: "/zion-ai-invoice-generator",
      featured: false
    },
    {
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics with AI-powered sentiment analysis",
      price: "From $179/month",
      icon: <Target className="w-6 h-6" />,
      features: ["Sentiment analysis", "Customer segmentation", "Behavior tracking", "Predictive insights"],
      link: "/zion-ai-customer-insights",
      featured: false
    },
    {
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis and optimization for better engagement",
      price: "From $129/month",
      icon: <Mail className="w-6 h-6" />,
      features: ["Email scoring", "A/B testing", "Subject optimization", "Send time optimization"],
      link: "/zion-ai-email-analyzer",
      featured: false
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting",
      price: "From $249/month",
      icon: <Package className="w-6 h-6" />,
      features: ["Demand forecasting", "Stock optimization", "Reorder alerts", "Cost analysis"],
      link: "/zion-smart-inventory-optimizer",
      featured: false
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels",
      price: "From $159/month",
      icon: <MessageSquare className="w-6 h-6" />,
      features: ["Multi-channel monitoring", "Real-time alerts", "Trend analysis", "Response suggestions"],
      link: "/zion-ai-customer-sentiment-tracker",
      featured: false
    },
    {
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense categorization and financial tracking",
      price: "From $89/month",
      icon: <CreditCard className="w-6 h-6" />,
      features: ["Auto-categorization", "Receipt scanning", "Budget tracking", "Tax preparation"],
      link: "/zion-smart-expense-categorizer",
      featured: false
    },
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced AI voice assistant for business operations",
      price: "From $199/month",
      icon: <Mic className="w-6 h-6" />,
      features: ["Voice commands", "Task automation", "Calendar management", "Multi-language support"],
      link: "/zion-ai-voice-assistant-pro",
      featured: false
    },
    {
      name: "Zion AI Code Reviewer",
      description: "AI-powered code review and quality assurance",
      price: "From $179/month",
      icon: <Code className="w-6 h-6" />,
      features: ["Code analysis", "Bug detection", "Performance optimization", "Security scanning"],
      link: "/zion-ai-code-reviewer",
      featured: false
    },
    {
      name: "Zion AI Social Media Manager",
      description: "AI-powered social media management and content scheduling",
      price: "From $149/month",
      icon: <Share2 className="w-6 h-6" />,
      features: ["Content scheduling", "Hashtag optimization", "Engagement tracking", "Trend analysis"],
      link: "/zion-ai-social-media-manager",
      featured: false
    }
  ];

  const stats = [
    { number: "500+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our business operations. The AI-powered tools saved us countless hours and significantly improved our efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS platform is incredibly powerful and easy to implement. We've seen a 60% increase in productivity since implementing these tools.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion's micro SAAS solutions are exactly what we needed to scale our operations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI. From analytics to automation, we have the tools to transform your business operations." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, analytics, CRM, project management, e-commerce" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">500+ Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Micro SAAS Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use software solutions that can transform your business operations immediately. 
            From AI-powered analytics to automated workflows, we have everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {microSaasServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
              )}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-cyan-400 font-medium">{service.price}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.slice(0, 2).map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                to={service.link}
                className="block text-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our micro SAAS solutions have transformed businesses worldwide
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

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
