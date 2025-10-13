import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const microSaaSProducts = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business analytics with AI-driven insights and predictive modeling for data-driven decision making.",
      icon: ChartBarIcon,
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboard creation",
        "Automated reporting",
        "Multi-source data integration",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$299/month",
      setupFee: "$1,500",
      benefits: ["40% faster insights", "Real-time updates", "Custom dashboards"],
      useCases: ["E-commerce analytics", "Marketing performance", "Financial reporting"],
      href: "/ai-analytics-dashboard"
    },
    {
      title: "AI Content Management System",
      description: "Intelligent content creation, optimization, and management system with AI-powered writing assistance.",
      icon: CpuChipIcon,
      features: [
        "AI content generation",
        "SEO optimization",
        "Content scheduling",
        "Multi-language support",
        "Brand voice consistency",
        "Performance analytics"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$199/month",
      setupFee: "$999",
      benefits: ["5x content output", "SEO optimized", "Multi-language"],
      useCases: ["Blog management", "Social media", "Marketing content"],
      href: "/ai-content-management"
    },
    {
      title: "AI Customer Support Bot",
      description: "Advanced conversational AI bot for 24/7 customer support with natural language processing.",
      icon: ShieldCheckIcon,
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Sentiment analysis",
        "Escalation management",
        "Knowledge base integration",
        "Performance tracking"
      ],
      color: "from-green-500 to-teal-500",
      price: "$149/month",
      setupFee: "$799",
      benefits: ["24/7 availability", "Instant responses", "Cost reduction"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation"],
      href: "/ai-customer-support-bot"
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and security monitoring system with AI-powered analysis.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Automated response",
        "Compliance monitoring",
        "Incident reporting",
        "Security dashboards"
      ],
      color: "from-red-500 to-orange-500",
      price: "$399/month",
      setupFee: "$2,000",
      benefits: ["99.9% uptime", "Real-time alerts", "Compliance ready"],
      useCases: ["Network security", "Data protection", "Compliance"],
      href: "/ai-cybersecurity-monitor"
    },
    {
      title: "AI Business Intelligence Pro",
      description: "Comprehensive business intelligence platform with AI-driven insights and predictive analytics.",
      icon: ChartBarIcon,
      features: [
        "Predictive analytics",
        "Custom reporting",
        "Data visualization",
        "Trend analysis",
        "ROI tracking",
        "Executive dashboards"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$349/month",
      setupFee: "$1,800",
      benefits: ["Data-driven decisions", "Predictive insights", "Custom reports"],
      useCases: ["Business analytics", "Financial planning", "Market analysis"],
      href: "/ai-business-intelligence-pro"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation and assistance tool for developers with AI-powered suggestions.",
      icon: CogIcon,
      features: [
        "Code generation",
        "Bug detection",
        "Code optimization",
        "Documentation generation",
        "Multi-language support",
        "Version control integration"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$99/month",
      setupFee: "$499",
      benefits: ["Faster development", "Better code quality", "Reduced bugs"],
      useCases: ["Software development", "Code review", "Documentation"],
      href: "/ai-code-assistant-pro"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "1 AI solution included",
        "Basic support",
        "Standard setup",
        "Monthly updates",
        "Email support"
      ],
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses with multiple needs",
      features: [
        "Up to 3 AI solutions",
        "Priority support",
        "Custom setup",
        "Weekly updates",
        "Phone & email support",
        "Custom integrations"
      ],
      color: "from-blue-500 to-indigo-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited AI solutions",
        "Dedicated support",
        "Custom development",
        "Daily updates",
        "24/7 support",
        "Custom integrations",
        "On-premise deployment"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered Micro SaaS solutions designed to solve specific business problems with cutting-edge technology." />
        <meta name="keywords" content="micro SaaS, AI solutions, business software, analytics, content management, customer support, cybersecurity" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SaaS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our collection of AI-powered Micro SaaS solutions designed to solve specific business problems 
            with cutting-edge technology. Each solution is built to be powerful, focused, and easy to implement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center group"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SaaS Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${product.color} rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-sm text-gray-400">Setup: {product.setupFee}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={product.href}
                    className={`w-full bg-gradient-to-r ${product.color} text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${tier.popular ? 'border-purple-500/50' : 'border-white/20'} relative`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r ${tier.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of AI-powered Micro SaaS solutions or let us build a custom solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center group"
              >
                Start Your Journey
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>+1-302-464-0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}