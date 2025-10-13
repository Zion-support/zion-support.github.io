import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  DollarSign, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Globe,
  Smartphone,
  Mail,
  Phone
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AISalesPredictorPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Advanced ML Algorithms",
      description: "State-of-the-art machine learning models trained on millions of sales data points for 95%+ accuracy"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Real-time Predictions",
      description: "Get instant sales forecasts and trend analysis with live data integration"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Lead Scoring",
      description: "AI-powered lead qualification with probability scores and conversion likelihood"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Revenue Forecasting",
      description: "Accurate revenue predictions with confidence intervals and scenario planning"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Insights",
      description: "Smart recommendations for improving sales performance and closing rates"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Data Security",
      description: "Enterprise-grade security with SOC 2 compliance and end-to-end encryption"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 leads/month",
        "Basic sales predictions",
        "Email support",
        "Standard reporting",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 leads/month",
        "Advanced ML predictions",
        "Priority support",
        "Custom dashboards",
        "Up to 5 user accounts",
        "API access",
        "Integration with CRM"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited leads",
        "Custom ML models",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited users",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      content: "AI Sales Predictor increased our conversion rate by 40% and helped us identify high-value prospects we were missing.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Sales Director, GrowthCo",
      content: "The accuracy of predictions is incredible. We've reduced our sales cycle by 25% and improved forecasting accuracy by 60%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, StartupXYZ",
      content: "This tool transformed our sales process. The ROI was evident within the first month of implementation.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Sales Predictor - Advanced Sales Forecasting & Lead Scoring | Zion Tech Group"
        description="Boost your sales with AI-powered predictions, lead scoring, and revenue forecasting. 95% accuracy rate with real-time insights. Start your free trial today!"
        keywords="AI sales predictor, sales forecasting, lead scoring, revenue prediction, machine learning sales, sales analytics, CRM integration"
        canonical="https://ziontechgroup.com/ai-sales-predictor"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">AI-Powered Sales Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Sales Predictor
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Predict. Convert. Scale.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your sales process with AI-powered predictions, lead scoring, and revenue forecasting. 
              Achieve 95% accuracy in sales predictions and boost conversion rates by up to 40%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Conversion Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-gray-300">Faster Sales Cycle</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">60%</div>
                <div className="text-gray-300">Better Forecasting</div>
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
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge machine learning to predict sales outcomes, score leads, and optimize your revenue pipeline.
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

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
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
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Sales Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Sales Predictor is transforming sales processes across industries.
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
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of sales teams already using AI Sales Predictor to boost their performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <FuturisticButton
              href="tel:+13024640950"
              className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </FuturisticButton>
            <FuturisticButton
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </FuturisticButton>
          </div>

          <div className="text-cyan-100 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISalesPredictorPage;