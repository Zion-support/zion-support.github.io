import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  Smartphone, 
  Mail,
  FileText,
  BarChart3,
  Database,
  Target,
  Activity,
  LineChart,
  DollarSign,
  UserCheck,
  Calendar,
  TrendingUp,
  Settings,
  Monitor,
  Sparkles,
  Lightbulb,
  TrendingDown
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 1,
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered analytics platform for business intelligence",
      features: ["Real-time analytics", "Predictive insights", "Custom dashboards", "Data visualization"],
      price: "$99/month",
      icon: <Brain className="w-8 h-8" />,
      href: "/zion-ai-analytics-pro",
      popular: true
    },
    {
      id: 2,
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      price: "$79/month",
      features: ["AI lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting"],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro",
      popular: false
    },
    {
      id: 3,
      name: "Zion AI Video Generator",
      description: "AI-powered video creation and editing platform",
      price: "$149/month",
      features: ["AI video generation", "Auto-editing", "Multiple formats", "Brand customization"],
      icon: <Monitor className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
      popular: false
    },
    {
      id: 4,
      name: "Zion AI Invoice Generator",
      description: "Automated invoice creation and management system",
      price: "$49/month",
      features: ["Auto-invoice generation", "Payment tracking", "Tax calculations", "Multi-currency support"],
      icon: <FileText className="w-8 h-8" />,
      href: "/zion-ai-invoice-generator",
      popular: false
    },
    {
      id: 5,
      name: "Zion AI Marketing Automation",
      description: "Complete marketing automation suite with AI optimization",
      price: "$129/month",
      features: ["Email campaigns", "Social media automation", "Lead nurturing", "Performance analytics"],
      icon: <Target className="w-8 h-8" />,
      href: "/zion-ai-marketing-automation",
      popular: true
    },
    {
      id: 6,
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management and optimization",
      price: "$89/month",
      features: ["Demand forecasting", "Stock optimization", "Supplier management", "Cost analysis"],
      icon: <Database className="w-8 h-8" />,
      href: "/zion-smart-inventory-optimizer",
      popular: false
    }
  ];

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Leverage advanced AI to automate complex business processes",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights with comprehensive analytics dashboards",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Grow your business with solutions that scale with you",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to keep your business running",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, AI-driven micro SAAS applications designed to streamline your business operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-200"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS applications are built with cutting-edge technology and designed for maximum efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SAAS applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-200"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;