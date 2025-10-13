import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  BarChart3, 
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
  Calculator,
  AlertCircle,
  RefreshCw,
  Award
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIPricingOptimizerPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-yellow-400" />,
      title: "Dynamic Pricing AI",
      description: "AI-powered dynamic pricing that adjusts in real-time based on demand, competition, and market conditions"
    },
    {
      icon: <Calculator className="w-8 h-8 text-green-400" />,
      title: "Price Elasticity Analysis",
      description: "Understand how price changes affect demand and optimize for maximum revenue and profit margins"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Revenue Optimization",
      description: "Maximize revenue with intelligent pricing strategies that balance volume and margin optimization"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: "Competitive Intelligence",
      description: "Monitor competitor pricing and market trends to stay competitive while maximizing profitability"
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "Segmented Pricing",
      description: "Personalized pricing strategies for different customer segments and market conditions"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-400" />,
      title: "A/B Testing",
      description: "Automated price testing and optimization to find the most effective pricing strategies"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 products",
        "Basic dynamic pricing",
        "Price elasticity analysis",
        "Email alerts",
        "Standard reporting",
        "1 user account",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 1,000 products",
        "Advanced AI pricing",
        "Real-time optimization",
        "Custom dashboards",
        "Up to 5 user accounts",
        "API access",
        "Competitive intelligence",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited products",
        "Custom AI models",
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
      name: "Alex Thompson",
      role: "Revenue Manager, E-commercePro",
      content: "AI Pricing Optimizer increased our revenue by 23% and improved profit margins by 15%. The dynamic pricing is incredibly effective.",
      rating: 5
    },
    {
      name: "Sarah Davis",
      role: "Pricing Director, RetailChain",
      content: "We optimized pricing across 200+ stores. The system helped us stay competitive while increasing margins by 18%.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, SaaSStartup",
      content: "The segmented pricing strategies transformed our business. We increased conversion rates by 35% and revenue by 40%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Pricing Optimizer - Increase Revenue by 23% | Zion Tech Group"
        description="Optimize pricing with AI-powered dynamic pricing and revenue optimization. Increase revenue by 23% and improve profit margins by 15%."
        keywords="AI pricing optimization, dynamic pricing, revenue optimization, price elasticity, competitive pricing, ML pricing strategy"
        canonical="https://ziontechgroup.com/ai-pricing-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <DollarSign className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">AI-Powered Revenue Optimization</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Pricing Optimizer
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Optimize. Price. Profit.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Maximize revenue with AI-powered dynamic pricing and optimization strategies. 
              Increase revenue by 23% and improve profit margins by 15% with intelligent pricing decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">23%</div>
                <div className="text-gray-300">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">15%</div>
                <div className="text-gray-300">Margin Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
                <div className="text-gray-300">Conversion Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">18%</div>
                <div className="text-gray-300">Competitive Edge</div>
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
              Advanced Pricing Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI to optimize pricing strategies, maximize revenue, and stay competitive in dynamic markets.
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
              Our AI analyzes market conditions, competitor pricing, and customer behavior to optimize your pricing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Market Analysis</h3>
              <p className="text-gray-300">AI analyzes market conditions, competitor pricing, and customer behavior patterns.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Price Optimization</h3>
              <p className="text-gray-300">Calculate optimal prices based on elasticity, demand, and profit maximization goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Dynamic Updates</h3>
              <p className="text-gray-300">Automatically adjust prices in real-time based on changing market conditions.</p>
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
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-yellow-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white'
                      : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white'
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
              Trusted by Revenue Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Pricing Optimizer is helping companies maximize revenue and profitability.
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
                  <div className="text-yellow-400 text-sm">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Pricing?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Join hundreds of companies using AI Pricing Optimizer to maximize revenue and profitability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <FuturisticButton
              href="tel:+13024640950"
              className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </FuturisticButton>
            <FuturisticButton
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </FuturisticButton>
          </div>

          <div className="text-yellow-100 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPricingOptimizerPage;