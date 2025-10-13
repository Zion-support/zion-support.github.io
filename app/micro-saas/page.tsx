import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Users, Target, Mail, Smartphone, Globe, Star, CheckCircle, TrendingUp, Clock, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$49/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics Engine",
        "Custom Report Builder",
        "API Integration",
        "Mobile App Access",
        "24/7 Support"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance monitoring. Keep your business safe from cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Reporting",
        "Vulnerability Scanning",
        "Security Training Modules",
        "24/7 Monitoring"
      ],
      color: "from-red-500 to-orange-500",
      popular: false,
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools. Your data, secured and accessible.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $9/month",
      originalPrice: "$15/month",
      features: [
        "1TB Secure Storage",
        "End-to-End Encryption",
        "Automated Backups",
        "File Sharing & Collaboration",
        "Version Control",
        "Mobile Sync"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false,
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant powered by advanced AI. Handle customer inquiries, automate tasks, and provide 24/7 support for your business.",
      icon: <Brain className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "CRM Integration",
        "Custom Training",
        "Analytics Dashboard",
        "API Access"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
      link: "/zion-ai-assistant"
    },
    {
      name: "Zion Team Manager",
      description: "Comprehensive project management and team collaboration platform. Streamline workflows, track progress, and boost team productivity.",
      icon: <Users className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$29/month",
      features: [
        "Project Tracking",
        "Team Collaboration",
        "Time Management",
        "Resource Planning",
        "Progress Reports",
        "Integration Hub"
      ],
      color: "from-indigo-500 to-purple-500",
      popular: false,
      link: "/zion-team-manager"
    },
    {
      name: "Zion Marketing Hub",
      description: "All-in-one marketing automation platform with email campaigns, social media management, and lead generation tools. Scale your marketing efforts.",
      icon: <Target className="w-8 h-8" />,
      price: "From $59/month",
      originalPrice: "$89/month",
      features: [
        "Email Marketing Automation",
        "Social Media Management",
        "Lead Generation Tools",
        "A/B Testing Platform",
        "Analytics & Reporting",
        "CRM Integration"
      ],
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "/zion-marketing-hub"
    },
    {
      name: "Zion Code Optimizer",
      description: "AI-powered code analysis and optimization tool. Improve code quality, detect bugs, and enhance performance automatically.",
      icon: <Zap className="w-8 h-8" />,
      price: "From $79/month",
      originalPrice: "$119/month",
      features: [
        "Code Quality Analysis",
        "Bug Detection & Fixing",
        "Performance Optimization",
        "Security Scanning",
        "Documentation Generation",
        "Multi-language Support"
      ],
      color: "from-yellow-500 to-orange-500",
      popular: false,
      link: "/zion-code-optimizer"
    },
    {
      name: "Zion Financial Tracker",
      description: "Advanced financial management and accounting solution with AI-powered insights, expense tracking, and automated reporting.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      features: [
        "Expense Tracking",
        "Invoice Management",
        "Financial Reporting",
        "Tax Preparation",
        "Budget Planning",
        "Bank Integration"
      ],
      color: "from-emerald-500 to-green-500",
      popular: false,
      link: "/zion-financial-tracker"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Setup",
      description: "Get started in minutes with our easy-to-use interface"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Enterprise Grade",
      description: "Built with enterprise-level security and reliability"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "No Long-term Contracts",
      description: "Cancel anytime with our flexible monthly plans"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, cloud storage, AI assistants, and more. Ready-to-use software for immediate business transformation."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business intelligence, cybersecurity, cloud storage, AI assistant, project management, marketing automation, code optimization, financial tracking"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no long-term contracts - just powerful tools that work from day one.
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
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of ready-to-use software solutions. 
                Each product is designed to solve specific business challenges with immediate impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${product.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
                >
                  {product.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {product.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">per month, billed monthly</p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{product.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={product.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More & Try Free
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Start your free trial today - no credit card required.
              </p>
              
              {/* Contact Details */}
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
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
