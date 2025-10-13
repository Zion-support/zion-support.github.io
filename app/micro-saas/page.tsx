import { ArrowRight, Zap, Shield, Cloud, BarChart3, MessageSquare, FileText, Settings, Users, CreditCard, Database, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business analytics and reporting platform with AI-powered insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $99/month",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "API integration"],
      path: "/zion-analytics-pro"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection system",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "Starting at $149/month",
      features: ["24/7 monitoring", "Threat detection", "Automated response", "Compliance reporting"],
      path: "/zion-security-shield"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage and file management with advanced encryption",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $79/month",
      features: ["Unlimited storage", "End-to-end encryption", "File sharing", "Version control"],
      path: "/zion-cloud-vault"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation and management platform for marketing teams",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $129/month",
      features: ["AI content generation", "Multi-platform publishing", "Brand guidelines", "Analytics"],
      path: "/zion-content-studio"
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization and integration across multiple platforms",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Real-time sync", "500+ integrations", "Data transformation", "Error handling"],
      path: "/zion-data-sync"
    },
    {
      title: "Zion Lead Magnet",
      description: "Lead generation and nurturing platform with automated email campaigns",
      icon: <Users className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $89/month",
      features: ["Lead capture forms", "Email automation", "CRM integration", "Analytics"],
      path: "/zion-lead-magnet"
    },
    {
      title: "Zion Project Master",
      description: "Project management and team collaboration platform with AI insights",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $119/month",
      features: ["Task management", "Team collaboration", "Time tracking", "AI insights"],
      path: "/zion-project-master"
    },
    {
      title: "Zion Email Automation",
      description: "Advanced email marketing automation with personalization and analytics",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "Starting at $69/month",
      features: ["Email templates", "Automation workflows", "A/B testing", "Deliverability"],
      path: "/zion-email-automation"
    },
    {
      title: "Zion Social Scheduler",
      description: "Social media management and scheduling platform with content optimization",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $79/month",
      features: ["Multi-platform posting", "Content calendar", "Analytics", "Team collaboration"],
      path: "/zion-social-scheduler"
    },
    {
      title: "Zion Workflow Automation",
      description: "Business process automation platform with drag-and-drop workflow builder",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "Starting at $159/month",
      features: ["Visual workflow builder", "500+ integrations", "Conditional logic", "Monitoring"],
      path: "/zion-workflow-automation"
    },
    {
      title: "Zion Invoice Genius",
      description: "AI-powered invoicing and payment management system for businesses",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "Starting at $49/month",
      features: ["Automated invoicing", "Payment processing", "Expense tracking", "Tax calculations"],
      path: "/zion-invoice-genius"
    },
    {
      title: "Zion Inventory Smart",
      description: "Intelligent inventory management with predictive analytics and automation",
      icon: <Database className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "Starting at $139/month",
      features: ["Real-time tracking", "Predictive analytics", "Automated reordering", "Multi-location"],
      path: "/zion-inventory-smart"
    }
  ];

  const benefits = [
    "Ready-to-use solutions",
    "No coding required",
    "Quick deployment",
    "Scalable infrastructure",
    "24/7 support",
    "Regular updates",
    "API access included",
    "Custom integrations"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Comprehensive micro SAAS solutions for businesses. Analytics, security, content management, and automation tools starting at $49/month."
        />
        <meta
          name="keywords"
          content="micro saas, software as a service, business tools, analytics, automation, content management, project management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}SAAS
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use software solutions that solve real business problems. 
              Deploy powerful tools in minutes, not months. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Browse Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Demos
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SAAS Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, ready-to-deploy software solutions designed to accelerate your business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <Link
                  key={index}
                  to={product.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {product.description}
                  </p>
                  <div className="text-center mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{product.price}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get enterprise-grade solutions without the complexity. Deploy in minutes, scale instantly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include 24/7 support and regular updates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">$49</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Up to 3 micro SAAS tools
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Basic support
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Standard integrations
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 block"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400 ring-2 ring-cyan-400/50 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">$149</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Up to 10 micro SAAS tools
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Priority support
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Advanced integrations
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Custom configurations
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 block"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">$299</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Unlimited micro SAAS tools
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                    White-label options
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 block"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our micro SAAS solutions today. No setup fees, no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}