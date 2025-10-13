import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Code, 
  Database,
  Brain,
  Globe,
  Smartphone,
  Lock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Clock,
  TrendingUp
} from "lucide-react";

export default function Pricing() {
  const microSaasPlans = [
    {
      name: "Zion Analytics Pro",
      price: "$99",
      period: "/month",
      description: "Advanced business intelligence and analytics platform",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Automated reports",
        "Custom metrics",
        "API integration",
        "Data visualization",
        "Export capabilities",
        "Email notifications"
      ],
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      price: "$149",
      period: "/month",
      description: "Comprehensive cybersecurity monitoring and threat detection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      popular: true,
      features: [
        "24/7 monitoring",
        "Threat detection",
        "Automated response",
        "Compliance reporting",
        "Security audits",
        "Incident management",
        "Vulnerability scanning",
        "Security training"
      ],
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      price: "$79",
      period: "/month",
      description: "Secure cloud storage and backup solution",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      popular: false,
      features: [
        "Enterprise encryption",
        "Automated backups",
        "Version control",
        "Team collaboration",
        "99.9% uptime",
        "File sharing",
        "Access controls",
        "Audit logs"
      ],
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion Content Studio",
      price: "$129",
      period: "/month",
      description: "AI-powered content creation and management",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      popular: false,
      features: [
        "AI content generation",
        "SEO optimization",
        "Social scheduling",
        "Brand consistency",
        "Analytics",
        "Multi-language support",
        "Content templates",
        "Team workflows"
      ],
      link: "/zion-content-studio"
    }
  ];

  const aiServicePlans = [
    {
      name: "AI Analytics",
      price: "$299",
      period: "/month",
      description: "Machine learning algorithms for data analysis",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Predictive modeling",
        "Pattern recognition",
        "Automated insights",
        "Custom algorithms",
        "Real-time analysis",
        "Data preprocessing",
        "Model training",
        "Performance monitoring"
      ]
    },
    {
      name: "AI Content Generation",
      price: "$199",
      period: "/month",
      description: "Advanced AI models for content creation",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Content creation",
        "SEO optimization",
        "Brand voice",
        "Multi-language",
        "Quality assurance",
        "Content templates",
        "Plagiarism detection",
        "Style guides"
      ]
    },
    {
      name: "AI Customer Support",
      price: "$249",
      period: "/month",
      description: "Intelligent chatbots and virtual assistants",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "24/7 availability",
        "Natural language",
        "Multi-channel",
        "Learning capability",
        "Human handoff",
        "Sentiment analysis",
        "Knowledge base",
        "Integration APIs"
      ]
    }
  ];

  const itServicePlans = [
    {
      name: "Cloud Infrastructure",
      price: "$2,500",
      period: "/month",
      description: "Complete cloud migration and management",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Cloud migration",
        "Infrastructure setup",
        "Monitoring",
        "Security",
        "Cost optimization",
        "Auto-scaling",
        "Backup solutions",
        "Disaster recovery"
      ]
    },
    {
      name: "Cybersecurity Solutions",
      price: "$1,800",
      period: "/month",
      description: "Comprehensive security assessment and implementation",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Security audits",
        "Penetration testing",
        "Firewall setup",
        "Monitoring",
        "Incident response",
        "Compliance",
        "Security training",
        "Risk assessment"
      ]
    },
    {
      name: "Web Development",
      price: "$3,000",
      period: "/project",
      description: "Custom web applications and e-commerce solutions",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Custom development",
        "Responsive design",
        "E-commerce",
        "CMS integration",
        "Performance optimization",
        "SEO optimization",
        "Testing",
        "Maintenance"
      ]
    },
    {
      name: "Mobile Development",
      price: "$4,000",
      period: "/project",
      description: "Native and cross-platform mobile applications",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native apps",
        "Cross-platform",
        "UI/UX design",
        "App store deployment",
        "Maintenance",
        "Push notifications",
        "Analytics",
        "Testing"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI, IT & Micro SAAS Solutions</title>
        <meta
          name="description"
          content="Transparent pricing for our AI services, micro SAAS platforms, and IT solutions. Choose the perfect plan for your business needs."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, micro SAAS pricing, IT services pricing, cloud computing pricing, cybersecurity pricing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Transparent Pricing for All Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pricing
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All our services come with 
              transparent pricing and no hidden fees.
            </p>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions with transparent monthly pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.link}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence services with flexible pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServicePlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services with project-based and monthly pricing options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServicePlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer enterprise solutions tailored to your specific needs. 
              Contact us for a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-purple-400 font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-green-400 font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-cyan-500/25"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
