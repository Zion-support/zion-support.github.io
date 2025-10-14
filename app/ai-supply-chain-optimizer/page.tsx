import { ArrowRight } from 'lucide-react';
import { Globe } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
ursor/fix-errors-and-merge-to-main-94a7
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-green-400" />,
      title: 'Route Optimization',
      description: 'AI-powered route planning to minimize delivery time and fuel costs'
    },
    {
      icon: <Package className="w-6 h-6 text-blue-400" />,
      title: 'Inventory Management',
      description: 'Smart inventory tracking with predictive restocking and demand forecasting'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: 'Performance Analytics',
      description: 'Real-time insights and analytics to optimize supply chain performance'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Risk Management',
      description: 'Identify and mitigate supply chain risks with AI-powered risk assessment'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic route optimization',
        'Inventory tracking',
        'Email support',
        'Standard analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 20 warehouses',
        'Advanced route optimization',
        'Predictive analytics',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited warehouses',
        'AI-powered optimization',
        'Real-time monitoring',
        '24/7 support',
        'Custom development',
        'Dedicated account manager'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Cost Reduction',
      description: 'Reduce logistics costs by up to 30% through optimized routing and inventory management'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: 'Time Savings',
      description: 'Automate manual processes and save hours of planning time every week'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Global Scale',
      description: 'Manage complex supply chains across multiple countries and time zones'
    }
  ];

ursor/fix-errors-and-merge-to-main-94a7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Optimize your supply chain with AI-powered route planning, inventory management, and predictive analytics." />
        <meta name="keywords" content="supply chain optimization, AI logistics, inventory management, route optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent mb-6">
                AI Supply Chain Optimizer
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your supply chain with AI-powered optimization, predictive analytics, and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-green-600 hover:bg-green-700">
                  Get Started
                </FuturisticButton>
                <FuturisticButton variant="outline">
                  View Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered supply chain optimizer provides comprehensive tools to streamline your logistics operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of AI-powered supply chain optimization.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton className="w-full justify-center">
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Supply Chain?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their supply chain operations with our AI-powered solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-white text-green-600 hover:bg-gray-100">
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
ursor/fix-errors-and-merge-to-main-94a7
      </div>
    </div>
  );
}
ursor/fix-errors-and-merge-to-main-94a7
