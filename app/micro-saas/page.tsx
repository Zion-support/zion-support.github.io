import { ArrowRight, Zap, Cloud, Shield, Database, Code, Smartphone, BarChart3, MessageSquare, Eye, FileText, Users, Settings, CheckCircle, Star, Target, Clock, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      title: "ZionAnalyticsPro",
      description: "Advanced AI-powered analytics platform with real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      path: "/zion-analytics-pro",
      price: "Starting at $299/month",
      features: ["Real-time dashboards", "AI predictions", "Automated reporting", "Custom visualizations"]
    },
    {
      title: "ZionSecurityShield",
      description: "Comprehensive cybersecurity suite with AI-powered threat detection, automated response, and 24/7 monitoring.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      path: "/zion-security-shield",
      price: "Starting at $499/month",
      features: ["Threat detection", "Automated response", "24/7 monitoring", "Compliance management"]
    },
    {
      title: "ZionCloudVault",
      description: "Secure cloud storage and backup solution with AI-powered data management and automated synchronization.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      path: "/zion-cloud-vault",
      price: "Starting at $199/month",
      features: ["Secure storage", "Auto backup", "Data sync", "Access control"]
    },
    {
      title: "ZionContentStudio",
      description: "AI-powered content creation platform that generates high-quality content for blogs, social media, and marketing.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      path: "/zion-content-studio",
      price: "Starting at $149/month",
      features: ["Content generation", "SEO optimization", "Brand voice", "Multi-format"]
    },
    {
      title: "ZionDataSync",
      description: "Intelligent data synchronization platform that connects and syncs data across multiple systems and platforms.",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      path: "/zion-data-sync",
      price: "Starting at $249/month",
      features: ["Multi-platform sync", "Real-time updates", "Data validation", "Custom mappings"]
    },
    {
      title: "ZionLeadMagnet",
      description: "AI-powered lead generation and nurturing platform that captures, qualifies, and converts prospects automatically.",
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      path: "/zion-lead-magnet",
      price: "Starting at $399/month",
      features: ["Lead capture", "Auto qualification", "Nurturing campaigns", "CRM integration"]
    },
    {
      title: "ZionProjectMaster",
      description: "Comprehensive project management platform with AI-powered task optimization and team collaboration tools.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      path: "/zion-project-master",
      price: "Starting at $199/month",
      features: ["Task management", "Team collaboration", "AI optimization", "Progress tracking"]
    },
    {
      title: "ZionEmailAutomation",
      description: "Advanced email marketing automation platform with AI-powered personalization and campaign optimization.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      path: "/zion-email-automation",
      price: "Starting at $179/month",
      features: ["Email automation", "AI personalization", "A/B testing", "Analytics"]
    },
    {
      title: "ZionSocialScheduler",
      description: "Intelligent social media management platform with AI-powered content scheduling and engagement optimization.",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      path: "/zion-social-scheduler",
      price: "Starting at $129/month",
      features: ["Multi-platform posting", "Optimal timing", "Engagement tracking", "Content suggestions"]
    },
    {
      title: "ZionWorkflowAutomation",
      description: "Business process automation platform that streamlines workflows and eliminates manual tasks with AI intelligence.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      path: "/zion-workflow-automation",
      price: "Starting at $299/month",
      features: ["Process automation", "Smart workflows", "ROI optimization", "Custom integrations"]
    },
    {
      title: "ZionInvoiceGenius",
      description: "AI-powered invoicing and billing platform that automates invoice generation, payment tracking, and financial reporting.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      path: "/zion-invoice-genius",
      price: "Starting at $99/month",
      features: ["Auto invoicing", "Payment tracking", "Financial reports", "Tax compliance"]
    },
    {
      title: "ZionInventorySmart",
      description: "Intelligent inventory management system with AI-powered demand forecasting and automated reordering.",
      icon: <Database className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      path: "/zion-inventory-smart",
      price: "Starting at $249/month",
      features: ["Demand forecasting", "Auto reordering", "Stock optimization", "Multi-location"]
    }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "All our micro SAAS products are ready to use immediately with no setup required",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "AI-Powered",
      description: "Every product is enhanced with cutting-edge AI technology for maximum efficiency",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and customer service for all products",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Products that grow with your business from startup to enterprise",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const categories = [
    {
      name: "Analytics & BI",
      count: "4 products",
      description: "Data analytics and business intelligence solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Security & Compliance",
      count: "3 products",
      description: "Cybersecurity and compliance management tools",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Content & Marketing",
      count: "3 products",
      description: "Content creation and marketing automation platforms",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Productivity & Workflow",
      count: "2 products",
      description: "Productivity and workflow automation solutions",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions. Ready-to-use software products for analytics, security, content creation, and business automation."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, ready-to-use software, business tools, productivity software, analytics platform, automation tools"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use software solutions that solve real business problems. 
              Deploy instantly, scale effortlessly, and transform your operations with our comprehensive suite of micro SAAS products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Live Demos
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Products?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built by experts, designed for businesses, powered by AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Product Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized by function to help you find exactly what you need.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}
                  >
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {category.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4">
                    {category.count}
                  </p>
                  <p className="text-gray-300">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Product Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to address every aspect of your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4`}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{product.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={product.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1000+ companies already using our micro SAAS solutions to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}