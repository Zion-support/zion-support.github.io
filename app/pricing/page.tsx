import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Sparkles,
  Brain,
  Shield,
  BarChart3,
  Users,
  Cloud,
  Target,
  Calendar,
  Video,
  DollarSign,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Settings,
  TrendingUp,
  Heart,
  Receipt,
  Package,
  Code,
  Bot,
  Wifi,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Rocket,
  Mail,
  Database,
  Lock,
  Play,
  Award,
  Clock,
  FileText,
  Eye,
  AlertTriangle
} from "lucide-react";

export default function PricingPage() {
  const microSaasPricing = [
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$299",
      period: "/month",
      originalPrice: "$599",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling & Forecasting",
        "Custom Report Generation",
        "API Integration & Data Connectors",
        "Mobile App Access",
        "White-label Solutions"
      ],
      category: "AI Analytics",
      popular: true
    },
    {
      name: "Zion Security Shield Pro",
      description: "Advanced cybersecurity protection with AI-powered threat detection",
      icon: <Shield className="w-8 h-8" />,
      price: "$499",
      period: "/month",
      originalPrice: "$999",
      features: [
        "AI-Powered Threat Detection",
        "Automated Incident Response",
        "24/7 Security Monitoring",
        "Compliance Reporting (SOC2, GDPR)",
        "Vulnerability Assessment",
        "Security Training Modules"
      ],
      category: "Cybersecurity",
      popular: true
    },
    {
      name: "Zion AI Video Generator Pro",
      description: "Create professional videos with AI-powered script generation",
      icon: <Video className="w-8 h-8" />,
      price: "$79",
      period: "/month",
      originalPrice: "$159",
      features: [
        "AI-Powered Video Script Generation",
        "Multi-Language Voice Synthesis (50+ languages)",
        "Professional Video Templates (1000+ templates)",
        "Auto Video Editing & Optimization",
        "Brand Voice & Style Consistency",
        "Social Media Format Optimization"
      ],
      category: "Content Creation",
      popular: false
    },
    {
      name: "Zion AI HR Suite Pro",
      description: "Transform your human resources with AI-powered recruitment",
      icon: <Users className="w-8 h-8" />,
      price: "$149",
      period: "/month",
      originalPrice: "$299",
      features: [
        "AI-Powered Resume Screening & Matching",
        "Intelligent Candidate Ranking & Scoring",
        "Automated Interview Scheduling & Coordination",
        "Smart Onboarding Workflow Automation",
        "Performance Analytics & Predictive Insights",
        "Employee Sentiment Analysis & Engagement Tracking"
      ],
      category: "HR Management",
      popular: true
    },
    {
      name: "Zion AI Financial Analytics Pro",
      description: "Transform your financial operations with AI-powered forecasting",
      icon: <DollarSign className="w-8 h-8" />,
      price: "$199",
      period: "/month",
      originalPrice: "$399",
      features: [
        "AI-Powered Financial Forecasting & Predictive Analytics",
        "Real-time Financial Dashboard & KPI Monitoring",
        "Automated Financial Reporting & Compliance",
        "Advanced Risk Assessment & Portfolio Optimization",
        "Cash Flow Analysis & Working Capital Management",
        "Investment Analysis & ROI Optimization"
      ],
      category: "Financial Analytics",
      popular: true
    },
    {
      name: "Zion AI Cybersecurity Monitor Pro",
      description: "Protect your organization with AI-powered cybersecurity monitoring",
      icon: <Shield className="w-8 h-8" />,
      price: "$299",
      period: "/month",
      originalPrice: "$599",
      features: [
        "AI-Powered Threat Detection & Analysis",
        "Real-time Network Monitoring & Intrusion Detection",
        "Automated Incident Response & Remediation",
        "Advanced Behavioral Analytics & Anomaly Detection",
        "Multi-vector Attack Prevention & Blocking",
        "Compliance Monitoring & Reporting (SOC2, GDPR, HIPAA)"
      ],
      category: "Cybersecurity",
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      description: "Artificial Intelligence and Machine Learning Solutions",
      services: [
        "AI Analytics & Business Intelligence",
        "AI Content Generation & Marketing",
        "AI Customer Support & Chatbots",
        "AI Cybersecurity & Threat Detection",
        "AI Data Analytics & Visualization",
        "AI Document Processing & Automation",
        "AI Predictive Analytics & Forecasting",
        "AI Voice Assistant & Conversational AI",
        "AI Workflow Automation & Optimization"
      ]
    },
    {
      name: "IT Services",
      icon: <Settings className="w-6 h-6" />,
      description: "Information Technology Solutions and Support",
      services: [
        "Cloud Migration & Infrastructure",
        "DevOps Services & Automation",
        "IT Consulting & Strategy",
        "Network Security & Management",
        "Custom Software Development",
        "System Integration & Implementation",
        "Web Development & Design",
        "Database Management & Optimization",
        "IT Support & Maintenance"
      ]
    },
    {
      name: "5G Solutions",
      icon: <Wifi className="w-6 h-6" />,
      description: "Next-Generation Connectivity and Infrastructure",
      services: [
        "5G Network Infrastructure & Deployment",
        "5G Edge Computing & Processing",
        "5G IoT Solutions & Integration",
        "5G Smart City Solutions",
        "5G Private Networks & Security",
        "5G Mobile Applications & Development",
        "5G Data Analytics & Insights",
        "5G Implementation & Consulting"
      ]
    },
    {
      name: "Micro SAAS",
      icon: <Zap className="w-6 h-6" />,
      description: "Ready-to-Use Software Solutions",
      services: [
        "AI-Powered Business Tools",
        "Project Management & Collaboration",
        "Customer Relationship Management",
        "Financial Analytics & Reporting",
        "HR Management & Recruitment",
        "Content Creation & Marketing",
        "Cybersecurity & Compliance",
        "Data Analytics & Visualization"
      ]
    }
  ];

  const enterpriseFeatures = [
    "Custom Development & Integration",
    "Dedicated Account Manager",
    "24/7 Priority Support",
    "SLA Guarantees",
    "Training & Onboarding",
    "White-label Solutions",
    "API Access & Documentation",
    "Custom Reporting & Analytics"
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI and IT Solutions</title>
        <meta
          name="description"
          content="Transparent pricing for our AI services, IT solutions, 5G technology, and micro SAAS products. Choose the perfect plan for your business needs with flexible options and enterprise solutions."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT services pricing, 5G solutions pricing, micro SAAS pricing, enterprise solutions, business plans, technology pricing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Transparent & Competitive Pricing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Simple, Transparent Pricing
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                Choose the perfect plan for your business needs. All our services come with flexible pricing, 
                no hidden fees, and the ability to scale as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Service Categories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions across all major categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.slice(0, 4).map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                    {category.services.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{category.services.length - 4} more services
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Micro SAAS Solutions Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions with transparent, competitive pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasPricing.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    service.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                      {service.originalPrice && (
                        <span className="text-gray-500 line-through text-lg ml-2">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-xs text-cyan-400 mt-2">
                      {service.category}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom solutions for large organizations with specific requirements
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Custom Enterprise Solutions
                  </h3>
                  <p className="text-lg text-gray-300 mb-8">
                    For large organizations with complex requirements, we offer custom solutions 
                    tailored to your specific needs. Our enterprise packages include dedicated 
                    support, custom development, and flexible pricing.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {enterpriseFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                    >
                      Contact Sales
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/demo"
                      className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                    >
                      Schedule Demo
                      <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <h4 className="text-2xl font-bold text-white mb-4">Starting at</h4>
                    <div className="text-6xl font-bold text-cyan-400 mb-2">$2,999</div>
                    <div className="text-gray-300 text-lg mb-6">per month</div>
                    <div className="text-sm text-gray-400">
                      Custom pricing based on requirements
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Common questions about our pricing and services
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer free trials?</h3>
                <p className="text-gray-300">
                  Yes! All our micro SAAS solutions come with a 14-day free trial. No credit card required. 
                  You can test all features and see how our solutions work for your business.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
                <p className="text-gray-300">
                  Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect 
                  immediately, and we'll prorate any billing differences.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and bank transfers. For enterprise customers, 
                  we also offer annual billing with significant discounts.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Is there a setup fee?</h3>
                <p className="text-gray-300">
                  No setup fees for any of our standard plans. For enterprise custom solutions, 
                  setup fees may apply depending on the complexity of the implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. Start your free trial today or 
              contact us for a personalized consultation.
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
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}