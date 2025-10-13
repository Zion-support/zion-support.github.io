import React from 'react';
import { Link } from 'react-router-dom';
import { Package, BarChart3, Zap, Users, TrendingUp, ArrowRight, Star, CheckCircle, Clock, DollarSign, Globe, Smartphone, Monitor, Bot, Brain, Sparkles, AlertTriangle, RefreshCw, Target } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SmartInventoryManagementPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Smart Inventory Management System",
    "description": "AI-powered inventory management with predictive analytics, automated reordering, and real-time tracking for optimal stock levels.",
    "url": "https://ziontechgroup.com/smart-inventory-management",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Demand Forecasting",
      description: "Predict future demand with 95% accuracy using machine learning algorithms"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automated Reordering",
      description: "Smart reorder points that automatically place orders when stock runs low"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with insights into inventory performance and trends"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Optimized Stock Levels",
      description: "AI-driven recommendations for optimal inventory levels to reduce costs"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Smart Alerts",
      description: "Proactive notifications for low stock, overstock, and expiration dates"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-location Sync",
      description: "Seamlessly manage inventory across multiple warehouses and locations"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 products",
        "Basic AI forecasting",
        "Automated reordering",
        "Real-time tracking",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 products",
        "Advanced AI features",
        "Multi-location support",
        "Advanced analytics",
        "API integrations",
        "Priority support",
        "Custom reports",
        "Barcode scanning"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited products",
        "Full AI suite",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "Advanced reporting",
        "Custom workflows",
        "API access"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Inventory Costs",
      description: "Optimize stock levels and reduce carrying costs by up to 30%",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Prevent Stockouts",
      description: "AI-powered forecasting prevents stockouts and lost sales",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      title: "Save Time",
      description: "Automate inventory management tasks and save 20+ hours per week",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Improve Accuracy",
      description: "Real-time tracking ensures 99.9% inventory accuracy",
      icon: <Target className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Retail Chain",
      content: "Reduced our inventory costs by 35% and eliminated stockouts completely!",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "E-commerce Store",
      content: "The AI forecasting is incredibly accurate. We never run out of popular items anymore.",
      rating: 5
    },
    {
      name: "James Thompson",
      company: "Manufacturing",
      content: "Saved us 25 hours per week on inventory management. The ROI was immediate.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Smart Inventory Management System | Zion Tech Group"
        description="AI-powered inventory management with predictive analytics, automated reordering, and real-time tracking. Reduce costs by 30% and prevent stockouts."
        keywords="inventory management, AI forecasting, stock management, automated reordering, inventory tracking, supply chain optimization"
        canonical="https://ziontechgroup.com/smart-inventory-management"
        structuredData={structuredData}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticText className="text-4xl md:text-6xl font-bold mb-6">
                Smart Inventory Management
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Powered by AI
                </span>
              </FuturisticText>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your inventory management with AI-driven forecasting, 
                automated reordering, and real-time tracking that reduces costs 
                by up to 30% and prevents stockouts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/demo"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Forecast Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Inventory Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">25h</div>
                  <div className="text-gray-300">Time Saved/Week</div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Smart Inventory System?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your inventory management with cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your inventory management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key={index} 
                  className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    as={Link}
                    to="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our smart inventory management system
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Optimize Your Inventory?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and see the difference AI can make
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
                    as={Link}
                    to="/contact"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                  <FuturisticButton
                    as={Link}
                    to="/demo"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                  >
                    Schedule Demo
                    <Clock className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default SmartInventoryManagementPage;