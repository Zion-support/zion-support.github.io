import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  Users, 
  Mail, 
  Target, 
  Calendar,
  Clock,
  Globe,
  Package,
  Receipt,
  Heart,
  Cpu,
  Database,
  Smartphone,
  Monitor,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Lock,
  RefreshCw,
  Headphones
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaaSServicesPage = () => {
  const microSaasServices = [
    {
      category: "AI-Powered Solutions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Zion AI Analytics Pro",
          description: "Advanced AI-powered business intelligence with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable business intelligence.",
          features: [
            "Real-time data visualization",
            "Predictive analytics engine",
            "Automated report generation",
            "Custom dashboard creation",
            "API integrations",
            "Mobile app access"
          ],
          pricing: {
            starter: { price: "$299", period: "month", features: "Up to 10 users, 1M data points" },
            professional: { price: "$599", period: "month", features: "Up to 50 users, 10M data points" },
            enterprise: { price: "$1,299", period: "month", features: "Unlimited users, unlimited data" }
          },
          link: "/zion-ai-analytics-pro",
          popular: true,
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: "Zion AI CRM Pro",
          description: "Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive customer insights.",
          features: [
            "AI lead scoring",
            "Automated email sequences",
            "Customer behavior analysis",
            "Sales pipeline management",
            "Integration with 100+ tools",
            "Mobile CRM app"
          ],
          pricing: {
            starter: { price: "$199", period: "month", features: "Up to 5 users, 10K contacts" },
            professional: { price: "$399", period: "month", features: "Up to 25 users, 100K contacts" },
            enterprise: { price: "$799", period: "month", features: "Unlimited users, unlimited contacts" }
          },
          link: "/zion-ai-crm-pro",
          popular: true,
          icon: <Users className="w-6 h-6" />
        },
        {
          name: "Zion AI Marketing Automation Pro",
          description: "Complete marketing automation platform with AI content generation, multi-channel campaigns, and advanced analytics.",
          features: [
            "AI content generation",
            "Multi-channel campaigns",
            "Behavioral targeting",
            "A/B testing automation",
            "ROI tracking",
            "Social media integration"
          ],
          pricing: {
            starter: { price: "$149", period: "month", features: "Up to 10K contacts, 5 campaigns" },
            professional: { price: "$299", period: "month", features: "Up to 50K contacts, 20 campaigns" },
            enterprise: { price: "$599", period: "month", features: "Unlimited contacts, unlimited campaigns" }
          },
          link: "/zion-ai-marketing-automation-pro",
          popular: true,
          icon: <Target className="w-6 h-6" />
        },
        {
          name: "Zion AI Email Assistant",
          description: "AI-powered email management with smart categorization, automated responses, and intelligent scheduling.",
          features: [
            "Smart email categorization",
            "Automated response suggestions",
            "Email scheduling optimization",
            "Spam detection",
            "Email analytics",
            "Integration with all major email clients"
          ],
          pricing: {
            starter: { price: "$99", period: "month", features: "Up to 5 email accounts" },
            professional: { price: "$199", period: "month", features: "Up to 25 email accounts" },
            enterprise: { price: "$399", period: "month", features: "Unlimited email accounts" }
          },
          link: "/zion-ai-email-assistant",
          icon: <Mail className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "Zion Security Shield Pro",
          description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring.",
          features: [
            "AI threat detection",
            "Automated incident response",
            "Compliance monitoring",
            "Vulnerability scanning",
            "Security training modules",
            "24/7 monitoring dashboard"
          ],
          pricing: {
            starter: { price: "$499", period: "month", features: "Up to 50 devices, basic monitoring" },
            professional: { price: "$999", period: "month", features: "Up to 200 devices, advanced monitoring" },
            enterprise: { price: "$1,999", period: "month", features: "Unlimited devices, full protection" }
          },
          link: "/zion-security-shield-pro",
          popular: true,
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: "Zion Cloud Vault Pro",
          description: "Secure cloud storage with end-to-end encryption, automated backups, and advanced access controls.",
          features: [
            "End-to-end encryption",
            "Automated backups",
            "Advanced access controls",
            "File versioning",
            "Collaboration tools",
            "Mobile access"
          ],
          pricing: {
            starter: { price: "$99", period: "month", features: "1TB storage, 10 users" },
            professional: { price: "$199", period: "month", features: "5TB storage, 50 users" },
            enterprise: { price: "$399", period: "month", features: "Unlimited storage, unlimited users" }
          },
          link: "/zion-cloud-vault-pro",
          icon: <Cloud className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Productivity & Management",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Zion AI Project Manager Pro",
          description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting.",
          features: [
            "AI task prioritization",
            "Resource allocation optimization",
            "Automated progress tracking",
            "Team collaboration tools",
            "Gantt chart automation",
            "Mobile project access"
          ],
          pricing: {
            starter: { price: "$99", period: "month", features: "Up to 10 projects, 5 team members" },
            professional: { price: "$199", period: "month", features: "Up to 50 projects, 25 team members" },
            enterprise: { price: "$399", period: "month", features: "Unlimited projects, unlimited team" }
          },
          link: "/zion-ai-project-manager-pro",
          popular: true,
          icon: <Calendar className="w-6 h-6" />
        },
        {
          name: "Zion Performance Monitor",
          description: "Employee performance tracking with AI insights, goal setting, and automated feedback generation.",
          features: [
            "Performance analytics",
            "Goal tracking",
            "Automated feedback",
            "Team performance insights",
            "Integration with HR systems",
            "Mobile performance app"
          ],
          pricing: {
            starter: { price: "$149", period: "month", features: "Up to 25 employees" },
            professional: { price: "$299", period: "month", features: "Up to 100 employees" },
            enterprise: { price: "$599", period: "month", features: "Unlimited employees" }
          },
          link: "/zion-performance-monitor",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          name: "Zion Inventory Smart",
          description: "AI-powered inventory management with demand forecasting, automated reordering, and optimization insights.",
          features: [
            "Demand forecasting",
            "Automated reordering",
            "Inventory optimization",
            "Multi-location support",
            "Barcode scanning",
            "Mobile inventory app"
          ],
          pricing: {
            starter: { price: "$199", period: "month", features: "Up to 1,000 SKUs, 1 location" },
            professional: { price: "$399", period: "month", features: "Up to 10,000 SKUs, 5 locations" },
            enterprise: { price: "$799", period: "month", features: "Unlimited SKUs, unlimited locations" }
          },
          link: "/zion-inventory-smart",
          icon: <Package className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Analytics & Insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Zion Customer Sentiment Tracker",
          description: "AI-powered customer sentiment analysis across all channels with real-time insights and automated alerts.",
          features: [
            "Multi-channel sentiment analysis",
            "Real-time monitoring",
            "Automated alerts",
            "Trend analysis",
            "Custom dashboards",
            "API integrations"
          ],
          pricing: {
            starter: { price: "$149", period: "month", features: "Up to 10K mentions/month" },
            professional: { price: "$299", period: "month", features: "Up to 100K mentions/month" },
            enterprise: { price: "$599", period: "month", features: "Unlimited mentions" }
          },
          link: "/ai-customer-sentiment-tracker",
          icon: <Heart className="w-6 h-6" />
        },
        {
          name: "Zion Financial Crime Detection Pro",
          description: "Advanced AI-powered financial fraud detection with real-time monitoring and automated compliance reporting.",
          features: [
            "Real-time fraud detection",
            "Machine learning algorithms",
            "Compliance reporting",
            "Risk scoring",
            "Transaction monitoring",
            "Regulatory compliance"
          ],
          pricing: {
            starter: { price: "$399", period: "month", features: "Up to 10K transactions/month" },
            professional: { price: "$799", period: "month", features: "Up to 100K transactions/month" },
            enterprise: { price: "$1,599", period: "month", features: "Unlimited transactions" }
          },
          link: "/ai-financial-crime-detection-pro",
          icon: <Lock className="w-6 h-6" />
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics Pro transformed our data analysis. We now make decisions 3x faster with 95% accuracy.",
      rating: 5,
      service: "Zion AI Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI CRM system increased our lead conversion by 40% in just 2 months. Incredible ROI!",
      rating: 5,
      service: "Zion AI CRM Pro"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield Pro gives us peace of mind. Zero security incidents since implementation.",
      rating: 5,
      service: "Zion Security Shield Pro"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Deployment",
      description: "Get started in minutes with our one-click deployment system"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and encryption"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Auto-Updates",
      description: "Always have the latest features with automatic updates"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions"
        description="Discover our comprehensive suite of micro SAAS services including AI analytics, CRM, security, and productivity tools. Transform your business with cutting-edge technology."
        keywords="micro saas, business software, AI tools, CRM, analytics, security, productivity, automation, cloud solutions"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-advanced particle-system" />
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Micro SAAS Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Powerful, ready-to-use software solutions that transform your business operations. 
            From AI-powered analytics to enterprise security, we have everything you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-cyber px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center group"
            >
              <Monitor className="w-5 h-5 mr-2" />
              <span>Watch Demo</span>
            </Link>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that demand excellence, security, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services by Category */}
      {microSaasServices.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {category.category}
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {category.category === "AI-Powered Solutions" && "Harness the power of artificial intelligence to transform your business operations."}
                {category.category === "Security & Compliance" && "Protect your business with enterprise-grade security and compliance solutions."}
                {category.category === "Productivity & Management" && "Streamline operations and boost productivity with intelligent management tools."}
                {category.category === "Analytics & Insights" && "Gain deep insights into your business with advanced analytics and monitoring."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center p-3 bg-white/5 rounded-lg">
                          <div className="text-sm text-gray-400 capitalize mb-1">{plan}</div>
                          <div className="text-lg font-bold text-white mb-1">
                            {details.price}<span className="text-sm text-gray-400">/{details.period}</span>
                          </div>
                          <div className="text-xs text-gray-400">{details.features}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
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
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
                <div className="text-xs text-cyan-400 font-medium">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-cyan-400">kleber@ziontechgroup.com</span> | <span className="text-cyan-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaaSServicesPage;