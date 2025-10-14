import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  Users, 
  Mail, 
  Clock, 
  Globe, 
  Target, 
  Calendar, 
  Package, 
  Heart, 
  Receipt, 
  TrendingUp, 
  Cpu, 
  Database, 
  Code, 
  Smartphone, 
  Monitor,
  CheckCircle,
  Star,
  Sparkles,
  Award,
  Phone,
  MapPin
} from "lucide-react";

const MicroSaaSServicesPage = () => {
  const microSaasServices = [
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation. Transform your data into actionable business strategies.",
      price: "From $299/month",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration", "24/7 support"],
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      category: "AI-Powered",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Zion Security Shield Pro",
      description: "Enterprise-grade cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring. Protect your business from evolving cyber threats.",
      price: "From $499/month",
      features: ["AI threat detection", "Automated response", "Compliance monitoring", "Real-time alerts", "Security audits"],
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield-pro",
      category: "Security",
      color: "from-red-500 to-pink-500",
      popular: true
    },
    {
      name: "Zion Cloud Vault Enterprise",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Store, share, and collaborate on your files securely.",
      price: "From $99/month",
      features: ["End-to-end encryption", "Unlimited storage", "Team collaboration", "Version control", "Mobile access"],
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault-enterprise",
      category: "Storage",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive customer insights. Maximize your sales potential.",
      price: "From $199/month",
      features: ["AI lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting", "Integration APIs"],
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      category: "CRM",
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "Comprehensive marketing automation platform with AI-powered content generation, multi-channel orchestration, and advanced analytics. Scale your marketing efforts.",
      price: "From $149/month",
      features: ["AI content generation", "Multi-channel campaigns", "Advanced analytics", "A/B testing", "Lead nurturing"],
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      category: "Marketing",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "Intelligent project management with AI-powered task prioritization, resource allocation, and risk assessment. Streamline your project workflows.",
      price: "From $99/month",
      features: ["AI task prioritization", "Resource optimization", "Risk assessment", "Team collaboration", "Progress tracking"],
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      category: "Project Management",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Zion AI Email Analyzer Pro",
      description: "Advanced email analysis tool with sentiment analysis, spam detection, and productivity insights. Optimize your email communication.",
      price: "From $79/month",
      features: ["Sentiment analysis", "Spam detection", "Productivity insights", "Email templates", "Analytics dashboard"],
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer-pro",
      category: "Communication",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Reduce waste and maximize efficiency.",
      price: "From $129/month",
      features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Real-time tracking", "Supplier integration"],
      icon: <Package className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      category: "Inventory",
      color: "from-teal-500 to-green-500"
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all channels with automated alerts and actionable insights. Understand your customers better.",
      price: "From $89/month",
      features: ["Real-time analysis", "Multi-channel monitoring", "Automated alerts", "Sentiment trends", "Actionable insights"],
      icon: <Heart className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      category: "Analytics",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt processing, and compliance monitoring. Simplify your financial tracking.",
      price: "From $59/month",
      features: ["Auto categorization", "Receipt processing", "Compliance monitoring", "Expense reports", "Tax preparation"],
      icon: <Receipt className="w-8 h-8" />,
      link: "/zion-smart-expense-categorizer",
      category: "Finance",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Zion AI Code Assistant Pro",
      description: "Advanced AI-powered coding assistant with code generation, debugging, and optimization suggestions. Accelerate your development process.",
      price: "From $199/month",
      features: ["Code generation", "Debugging assistance", "Code optimization", "Multi-language support", "Team collaboration"],
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-code-assistant-pro",
      category: "Development",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Zion AI Content Studio Pro",
      description: "Comprehensive content creation platform with AI-powered writing, design, and optimization tools. Create engaging content at scale.",
      price: "From $149/month",
      features: ["AI content generation", "Design automation", "SEO optimization", "Multi-format support", "Brand consistency"],
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-content-studio-pro",
      category: "Content",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const categories = ["All", "AI-Powered", "Security", "Storage", "CRM", "Marketing", "Project Management", "Communication", "Inventory", "Analytics", "Finance", "Development", "Content"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics Pro transformed our data analysis. We've increased our decision-making speed by 300% and identified new revenue opportunities worth $2M annually.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools and improved our efficiency by 60%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group's micro SAAS solutions have become essential to our daily operations and growth strategy.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Micro SAAS Services | Zion Tech Group - AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS services including AI analytics, security, CRM, marketing automation, and more. Transform your business with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI analytics, business intelligence, CRM, marketing automation, project management, cloud storage, cybersecurity, business solutions"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From analytics to security, we have everything you need to accelerate growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to 
              address every aspect of modern business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
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
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
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
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
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
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
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
              Explore All Services
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaSServicesPage;
