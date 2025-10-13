import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  Users, 
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
  TrendingDown,
  Heart,
  RefreshCw
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AICustomerChurnPredictorPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-red-400" />,
      title: "Predictive Analytics",
      description: "Advanced ML models identify at-risk customers with 92% accuracy before they churn"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
      title: "Early Warning System",
      description: "Real-time alerts and risk scores to prevent customer churn before it happens"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Retention Campaigns",
      description: "AI-powered personalized retention strategies and automated outreach campaigns"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-purple-400" />,
      title: "Churn Analysis",
      description: "Deep insights into churn patterns, reasons, and customer journey analysis"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Customer Health Score",
      description: "Comprehensive health metrics and engagement tracking for each customer"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-green-400" />,
      title: "Automated Actions",
      description: "Triggered retention workflows and personalized offers based on churn risk"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction",
        "Email alerts",
        "Standard reporting",
        "1 user account",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 customers",
        "Advanced ML predictions",
        "Real-time alerts",
        "Custom dashboards",
        "Up to 5 user accounts",
        "API access",
        "Retention campaigns",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
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
      name: "Jennifer Martinez",
      role: "Customer Success Director, SaaSPro",
      content: "AI Churn Predictor helped us reduce churn by 35% and increase customer lifetime value by 50%. The early warning system is game-changing.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "VP of Customer Experience, TechFlow",
      content: "We identified at-risk customers 30 days before they churned. This gave us enough time to implement retention strategies that saved us $2M annually.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Head of Retention, GrowthCo",
      content: "The automated retention campaigns are incredibly effective. Our customer satisfaction scores improved by 40% since implementing this solution.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Customer Churn Predictor - Reduce Churn by 35% | Zion Tech Group"
        description="Predict and prevent customer churn with AI-powered analytics. 92% accuracy in identifying at-risk customers. Boost retention and increase revenue."
        keywords="AI churn prediction, customer retention, churn analysis, customer success, retention campaigns, customer health score, ML churn prevention"
        canonical="https://ziontechgroup.com/ai-customer-churn-predictor"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400 font-medium">AI-Powered Churn Prevention</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Churn Predictor
              <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Predict. Prevent. Retain.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop customer churn before it happens. Our AI-powered platform identifies at-risk customers 
              with 92% accuracy and provides automated retention strategies to boost customer lifetime value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">92%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">35%</div>
                <div className="text-gray-300">Churn Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
                <div className="text-gray-300">LTV Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">30</div>
                <div className="text-gray-300">Days Early Warning</div>
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
              Advanced Churn Prevention Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI to identify at-risk customers and implement effective retention strategies.
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
              Our AI analyzes customer behavior patterns to predict churn risk and trigger retention actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Data Analysis</h3>
              <p className="text-gray-300">AI analyzes customer behavior, engagement, and usage patterns to identify risk factors.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Risk Scoring</h3>
              <p className="text-gray-300">Each customer receives a churn risk score with detailed insights and recommendations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Automated Actions</h3>
              <p className="text-gray-300">Trigger personalized retention campaigns and interventions based on risk levels.</p>
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
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-red-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
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
              Trusted by Customer Success Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Churn Predictor is helping companies retain customers and increase revenue.
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
                  <div className="text-red-400 text-sm">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-pink-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Reduce Customer Churn?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join hundreds of companies using AI Churn Predictor to retain customers and boost revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <FuturisticButton
              href="tel:+13024640950"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </FuturisticButton>
            <FuturisticButton
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </FuturisticButton>
          </div>

          <div className="text-red-100 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerChurnPredictorPage;