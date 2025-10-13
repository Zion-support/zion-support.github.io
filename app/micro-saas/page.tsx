import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Users, Target, FileText, Mail, Smartphone, Globe, Star, CheckCircle, Clock, DollarSign, TrendingUp, Lock, Database, Code, Bot, Settings, Monitor, Smartphone as PhoneIcon, Wifi, Globe as GlobeIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29",
      pricePeriod: "month",
      originalPrice: "$49",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reporting",
        "API integrations",
        "Mobile app access",
        "24/7 support"
      ],
      benefits: [
        "40% increase in data-driven decisions",
        "60% reduction in reporting time",
        "Real-time insights across all channels",
        "Automated anomaly detection"
      ],
      category: "Analytics",
      popularity: "Most Popular",
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for small to medium businesses.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49",
      pricePeriod: "month",
      originalPrice: "$79",
      color: "from-red-500 to-orange-500",
      features: [
        "AI threat detection",
        "Automated response",
        "Compliance reporting",
        "24/7 monitoring",
        "Vulnerability scanning",
        "Security training"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Automated compliance reports",
        "Reduced security costs"
      ],
      category: "Security",
      popularity: "Best Value",
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools for teams of any size.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9",
      pricePeriod: "month",
      originalPrice: "$19",
      color: "from-green-500 to-emerald-500",
      features: [
        "End-to-end encryption",
        "Automated backups",
        "File sharing",
        "Version control",
        "Mobile sync",
        "Team collaboration"
      ],
      benefits: [
        "99.99% uptime guarantee",
        "Unlimited storage",
        "Advanced security",
        "Easy team management"
      ],
      category: "Storage",
      popularity: "Budget Friendly",
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-automation-hub",
      name: "Zion Automation Hub",
      description: "Comprehensive workflow automation platform that connects your favorite tools and automates repetitive tasks to boost productivity.",
      icon: <Zap className="w-8 h-8" />,
      price: "$39",
      pricePeriod: "month",
      originalPrice: "$59",
      color: "from-purple-500 to-pink-500",
      features: [
        "500+ app integrations",
        "Visual workflow builder",
        "Custom triggers",
        "Error handling",
        "Analytics dashboard",
        "Team collaboration"
      ],
      benefits: [
        "80% reduction in manual tasks",
        "10x faster workflow execution",
        "Seamless app integration",
        "Real-time monitoring"
      ],
      category: "Automation",
      popularity: "Productivity Boost",
      link: "/zion-automation-hub"
    },
    {
      id: "zion-ai-assistant",
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant powered by advanced AI that handles customer inquiries, schedules meetings, and provides 24/7 support.",
      icon: <Brain className="w-8 h-8" />,
      price: "$19",
      pricePeriod: "month",
      originalPrice: "$39",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Natural language processing",
        "Multi-language support",
        "CRM integration",
        "Custom training",
        "Analytics dashboard",
        "API access"
      ],
      benefits: [
        "90% query resolution rate",
        "24/7 availability",
        "Reduced support costs",
        "Improved customer satisfaction"
      ],
      category: "AI Assistant",
      popularity: "AI Powered",
      link: "/zion-ai-assistant"
    },
    {
      id: "zion-team-collaboration",
      name: "Zion Team Collaboration",
      description: "All-in-one team collaboration platform with project management, communication tools, and productivity features for remote and hybrid teams.",
      icon: <Users className="w-8 h-8" />,
      price: "$15",
      pricePeriod: "month",
      originalPrice: "$25",
      color: "from-teal-500 to-cyan-500",
      features: [
        "Project management",
        "Video conferencing",
        "File sharing",
        "Task tracking",
        "Team chat",
        "Calendar integration"
      ],
      benefits: [
        "30% increase in team productivity",
        "Seamless remote collaboration",
        "Centralized communication",
        "Advanced project tracking"
      ],
      category: "Collaboration",
      popularity: "Team Favorite",
      link: "/zion-team-collaboration"
    },
    {
      id: "zion-marketing-automation",
      name: "Zion Marketing Automation",
      description: "Complete marketing automation suite with email campaigns, social media management, lead scoring, and analytics for growing businesses.",
      icon: <Target className="w-8 h-8" />,
      price: "$59",
      pricePeriod: "month",
      originalPrice: "$99",
      color: "from-pink-500 to-rose-500",
      features: [
        "Email marketing",
        "Social media scheduling",
        "Lead scoring",
        "A/B testing",
        "Analytics dashboard",
        "CRM integration"
      ],
      benefits: [
        "3x higher email open rates",
        "50% increase in lead conversion",
        "Automated campaign optimization",
        "Comprehensive analytics"
      ],
      category: "Marketing",
      popularity: "Growth Engine",
      link: "/zion-marketing-automation"
    },
    {
      id: "zion-document-manager",
      name: "Zion Document Manager",
      description: "Intelligent document management system with OCR, automated categorization, version control, and advanced search capabilities.",
      icon: <FileText className="w-8 h-8" />,
      price: "$25",
      pricePeriod: "month",
      originalPrice: "$45",
      color: "from-amber-500 to-yellow-500",
      features: [
        "OCR technology",
        "Auto-categorization",
        "Version control",
        "Advanced search",
        "Digital signatures",
        "Compliance tracking"
      ],
      benefits: [
        "90% faster document retrieval",
        "Automated organization",
        "Reduced paper usage",
        "Enhanced security"
      ],
      category: "Document Management",
      popularity: "Efficiency Boost",
      link: "/zion-document-manager"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Automation", "AI Assistant", "Collaboration", "Marketing", "Document Management"];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We now make decisions 3x faster with real-time insights.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The automation hub saved us 20 hours per week. It's like having a dedicated automation team.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. The AI threat detection is incredibly accurate.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Monitor className="w-6 h-6" /> },
    { number: "50+", label: "Integrations", icon: <Settings className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Discover our comprehensive suite of micro SAAS solutions including analytics, security, automation, AI assistants, and collaboration tools. Starting from $9/month with 24/7 support."
        keywords="micro saas, business software, analytics, security, automation, AI assistant, collaboration tools, cloud storage, marketing automation, document management, productivity software"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">8 Powerful Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics to automation, our micro SAAS products are designed for instant deployment and maximum impact.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of micro SAAS solutions. Each product is designed for immediate deployment 
                and comes with 24/7 support, regular updates, and enterprise-grade security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popularity Badge */}
                  {product.popularity && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                        {product.popularity}
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          {product.price}
                          <span className="text-lg text-gray-400">/{product.pricePeriod}</span>
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">
                            {product.originalPrice}/{product.pricePeriod}
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{product.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-cyan-400 mb-2">Key Benefits:</div>
                      <div className="text-xs text-gray-300">
                        {product.benefits[0]}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={product.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Start Trial
                      </Link>
                    </div>
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your free trial today with no credit card required.
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
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
