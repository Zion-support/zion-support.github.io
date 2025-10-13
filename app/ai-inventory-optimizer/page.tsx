import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Smartphone,
  Mail,
  Phone,
  BarChart3,
  AlertCircle,
  RefreshCw,
  Truck
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIInventoryOptimizerPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: "AI Demand Forecasting",
      description: "Predict demand with 94% accuracy using advanced machine learning and seasonal analysis"
    },
    {
      icon: <Package className="w-8 h-8 text-blue-400" />,
      title: "Smart Reorder Points",
      description: "Automated reorder triggers based on lead times, demand patterns, and supplier reliability"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "Inventory Optimization",
      description: "Minimize carrying costs while maximizing stock availability and reducing stockouts"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with inventory turnover, ABC analysis, and performance metrics"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-orange-400" />,
      title: "Stockout Prevention",
      description: "Early warning system to prevent stockouts and maintain optimal inventory levels"
    },
    {
      icon: <Truck className="w-8 h-8 text-yellow-400" />,
      title: "Supplier Integration",
      description: "Seamless integration with suppliers for automated ordering and real-time updates"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small retailers",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point optimization",
        "Email alerts",
        "Standard reporting",
        "1 user account",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced ML forecasting",
        "Real-time analytics",
        "Custom dashboards",
        "Up to 5 user accounts",
        "API access",
        "Supplier integration",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom ML models",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited users",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee",
        "Dedicated success manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      role: "Operations Manager, RetailMax",
      content: "AI Inventory Optimizer reduced our stockouts by 60% and cut carrying costs by 25%. The demand forecasting is incredibly accurate.",
      rating: 5
    },
    {
      name: "Maria Gonzalez",
      role: "Supply Chain Director, FashionCo",
      content: "We optimized our inventory across 50+ stores. The system helped us reduce excess inventory by 40% while improving availability.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "CEO, ElectronicsPlus",
      content: "The automated reorder system saved us countless hours and prevented costly stockouts. ROI was achieved within 3 months.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Inventory Optimizer - Reduce Stockouts by 60% | Zion Tech Group"
        description="Optimize inventory with AI-powered demand forecasting and smart reorder points. Reduce stockouts by 60% and cut carrying costs by 25%."
        keywords="AI inventory optimization, demand forecasting, inventory management, stockout prevention, supply chain optimization, ML inventory"
        canonical="https://ziontechgroup.com/ai-inventory-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Package className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">AI-Powered Inventory Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Inventory Optimizer
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Optimize. Predict. Profit.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your inventory management with AI-powered demand forecasting and smart optimization. 
              Reduce stockouts by 60% and cut carrying costs by 25% while maximizing sales opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                <div className="text-gray-300">Forecast Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-gray-300">Stockout Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Excess Inventory Cut</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Inventory Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI to optimize your inventory levels, predict demand, and prevent costly stockouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analyzes your sales data, seasonal patterns, and market trends to optimize inventory decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Data Analysis</h3>
              <p className="text-gray-300">AI analyzes historical sales, seasonal patterns, and external factors to predict demand.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Optimization</h3>
              <p className="text-gray-300">Calculate optimal reorder points, safety stock levels, and economic order quantities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Automation</h3>
              <p className="text-gray-300">Automatically trigger reorders and send alerts when inventory levels need attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <FuturisticButton
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Supply Chain Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Inventory Optimizer is helping companies optimize their supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400 text-sm">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of companies using AI Inventory Optimizer to reduce costs and improve efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <FuturisticButton
              href="tel:+13024640950"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </FuturisticButton>
            <FuturisticButton
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </FuturisticButton>
          </div>

          <div className="text-green-100 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInventoryOptimizerPage;