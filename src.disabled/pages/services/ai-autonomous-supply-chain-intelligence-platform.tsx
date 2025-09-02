import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Globe, 
  Shield, 
  BarChart3, 
  Zap, 
  Database, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Brain,
  Target,
  TrendingUp,
  Package
} from 'lucide-react';

const AIAutonomousSupplyChainIntelligencePlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 95%+ accuracy across all product categories"
    },
    {
      icon: <Truck className="w-6 h-6 text-green-500" />,
      title: "Autonomous Logistics Optimization",
      description: "Intelligent route planning, carrier selection, and delivery optimization for maximum efficiency"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Risk Management & Mitigation",
      description: "AI-driven risk assessment and proactive mitigation strategies for supply chain disruptions"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: "Real-time Supply Chain Analytics",
      description: "Live dashboards showing inventory levels, supplier performance, and operational metrics"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Global Supplier Intelligence",
      description: "Comprehensive supplier assessment, performance tracking, and alternative sourcing recommendations"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Automated Procurement",
      description: "AI-powered purchase order generation, supplier negotiations, and contract management"
    }
  ];

  const pricingPlans = [
    {
      name: "SMB Starter",
      price: "$1,499",
      period: "/month",
      description: "Perfect for small to medium businesses beginning their supply chain transformation",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Inventory optimization",
        "Supplier performance tracking",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Enterprise Professional",
      price: "$3,999",
      period: "/month",
      description: "Ideal for growing enterprises with complex supply chain operations",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Advanced risk management",
        "Multi-warehouse support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Global Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For multinational corporations requiring comprehensive supply chain intelligence",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Multi-region management",
        "Dedicated account manager",
        "24/7 support",
        "Advanced compliance tools",
        "White-label solutions",
        "International deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    "Reduce inventory costs by 25-40% with AI-optimized stock levels",
    "Improve forecast accuracy by up to 60% through machine learning",
    "Cut logistics costs by 20-35% with intelligent route optimization",
    "Enhance supplier performance through data-driven insights",
    "Achieve 99.9% order fulfillment rates with predictive analytics",
    "Reduce supply chain disruptions by 70% with proactive risk management"
  ];

  const supplyChainModules = [
    {
      category: "Demand Planning",
      solutions: [
        "AI-powered demand forecasting",
        "Seasonal trend analysis",
        "Promotional impact modeling",
        "New product introduction planning",
        "Customer segmentation analysis"
      ]
    },
    {
      category: "Inventory Management",
      solutions: [
        "Dynamic safety stock optimization",
        "Multi-echelon inventory planning",
        "ABC analysis and categorization",
        "Dead stock prevention",
        "Cycle count optimization"
      ]
    },
    {
      category: "Logistics & Transportation",
      solutions: [
        "Route optimization algorithms",
        "Carrier selection and management",
        "Freight cost optimization",
        "Last-mile delivery optimization",
        "Real-time shipment tracking"
      ]
    },
    {
      category: "Supplier Management",
      solutions: [
        "Supplier performance scoring",
        "Risk assessment and monitoring",
        "Alternative sourcing recommendations",
        "Contract management automation",
        "Quality control integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Truck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Autonomous Supply Chain Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your supply chain operations with intelligent AI-driven forecasting, 
              autonomous logistics optimization, and predictive risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Supply Chain Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform integrates all aspects of supply chain operations, from demand planning 
              to logistics optimization, creating a truly intelligent and autonomous supply network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Modules Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform addresses every major aspect of supply chain management, providing integrated 
              solutions that work together to create an intelligent, efficient, and resilient supply network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supplyChainModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <Target className="w-6 h-6 text-blue-500 mr-3" />}
                  {index === 1 && <Package className="w-6 h-6 text-green-500 mr-3" />}
                  {index === 2 && <Truck className="w-6 h-6 text-purple-500 mr-3" />}
                  {index === 3 && <Users className="w-6 h-6 text-orange-500 mr-3" />}
                  <h3 className="text-xl font-semibold text-gray-900">{module.category}</h3>
                </div>
                <ul className="space-y-2">
                  {module.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Supply Chain Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of companies worldwide in their transformation toward intelligent, 
              efficient, and resilient supply chain operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology & Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge AI and cloud technologies with seamless integration capabilities 
              for your existing ERP, WMS, and TMS systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Advanced algorithms for predictive analytics, optimization, and autonomous decision-making
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Big Data Analytics</h3>
              <p className="text-gray-600">
                Real-time processing and analysis of massive supply chain datasets for actionable insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">
                Forecasting models that predict demand, supply disruptions, and market trends
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600">
                Enterprise-grade security with end-to-end encryption and compliance frameworks
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your organization's size and supply chain complexity. 
              All plans include our core AI-powered supply chain intelligence capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of companies worldwide in their mission to create intelligent, 
              efficient, and resilient supply chain operations. Our team of experts is ready to help you get started.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-blue-300" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-blue-300" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-300" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Contact Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Visit Our Website
            </h3>
            <p className="text-gray-300 mb-6">
              Learn more about our comprehensive supply chain intelligence solutions and explore our full service portfolio.
            </p>
            <a 
              href="https://ziontechgroup.com/services/ai-autonomous-supply-chain-intelligence-platform"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSupplyChainIntelligencePlatform;