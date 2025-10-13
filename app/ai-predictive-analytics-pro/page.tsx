import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Award,
  Star,
  Activity,
  Settings,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Smartphone,
  Monitor,
  FileText,
  Calendar,
  MessageSquare,
  UserCheck,
  Workflow,
  Bot,
  Database,
  Network,
  Server,
  Zap,
  Lock,
  Eye,
  PieChart,
  Users,
  ShoppingCart
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AiPredictiveAnalyticsPro = () => {
  const features = [
    {
      title: "Advanced Machine Learning",
      description: "State-of-the-art ML algorithms that learn from your data to predict future trends with 95% accuracy",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Real-Time Predictions",
      description: "Generate predictions in real-time as data flows in, enabling instant decision-making",
      icon: <Clock className="w-6 h-6" />,
      stats: "Real-time processing"
    },
    {
      title: "Multi-Dimensional Analysis",
      description: "Analyze complex datasets across multiple dimensions to uncover hidden patterns and insights",
      icon: <PieChart className="w-6 h-6" />,
      stats: "Unlimited dimensions"
    },
    {
      title: "Automated Model Selection",
      description: "AI automatically selects the best algorithms and parameters for your specific use case",
      icon: <Settings className="w-6 h-6" />,
      stats: "Auto-optimization"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses starting their predictive analytics journey",
      features: [
        "Up to 10 data sources",
        "Basic ML models",
        "Email support",
        "Standard predictions",
        "1 user",
        "30-day data retention",
        "Basic visualizations",
        "Monthly reports"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Advanced predictive analytics for growing businesses with complex data needs",
      features: [
        "Up to 50 data sources",
        "Advanced ML models",
        "Priority support",
        "Real-time predictions",
        "10 users",
        "90-day data retention",
        "Advanced visualizations",
        "Custom dashboards",
        "API access",
        "Custom models"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Complete predictive analytics platform for large organizations",
      features: [
        "Unlimited data sources",
        "Custom ML models",
        "24/7 phone support",
        "Real-time streaming",
        "Unlimited users",
        "Unlimited data retention",
        "Custom visualizations",
        "White-label solution",
        "Dedicated account manager",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Demand Forecasting",
      description: "Predict future demand for products and services with advanced time series analysis",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Reduce inventory costs", "Improve planning", "Increase revenue", "Optimize resources"]
    },
    {
      title: "Customer Behavior Analysis",
      description: "Analyze customer patterns to predict churn, lifetime value, and purchasing behavior",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Reduce churn by 40%", "Increase LTV", "Personalize experiences", "Improve retention"]
    },
    {
      title: "Risk Assessment",
      description: "Identify and predict potential risks across financial, operational, and market domains",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Early risk detection", "Reduce losses", "Compliance monitoring", "Fraud prevention"]
    },
    {
      title: "Performance Optimization",
      description: "Predict system performance issues and optimize operations before problems occur",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Prevent downtime", "Optimize performance", "Reduce costs", "Improve efficiency"]
    },
    {
      title: "Market Trend Analysis",
      description: "Analyze market trends and predict future movements to inform strategic decisions",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Market insights", "Competitive advantage", "Strategic planning", "Investment guidance"]
    },
    {
      title: "Anomaly Detection",
      description: "Automatically detect unusual patterns and anomalies in your data streams",
      icon: <Eye className="w-8 h-8" />,
      benefits: ["Early detection", "Quality assurance", "Security monitoring", "Process optimization"]
    }
  ];

  const useCases = [
    {
      title: "Retail Sales Forecasting",
      description: "Predict product demand and optimize inventory management",
      icon: <ShoppingCart className="w-6 h-6" />,
      results: "30% inventory reduction"
    },
    {
      title: "Financial Risk Management",
      description: "Predict credit risk and market volatility for better investment decisions",
      icon: <DollarSign className="w-6 h-6" />,
      results: "25% risk reduction"
    },
    {
      title: "Manufacturing Quality Control",
      description: "Predict equipment failures and quality issues before they occur",
      icon: <Settings className="w-6 h-6" />,
      results: "50% defect reduction"
    },
    {
      title: "Healthcare Patient Outcomes",
      description: "Predict patient health outcomes and treatment effectiveness",
      icon: <Activity className="w-6 h-6" />,
      results: "40% better outcomes"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Retail Analytics Inc",
      role: "Data Science Director",
      content: "Zion AI Predictive Analytics Pro has transformed our forecasting accuracy. We've reduced inventory costs by 35% and improved our planning significantly.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      company: "Financial Services Corp",
      role: "Risk Management Director",
      content: "The predictive models are incredibly sophisticated. We've been able to identify risks months before they materialize, saving us millions.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "Manufacturing Solutions",
      role: "Operations Manager",
      content: "This platform has revolutionized our quality control. We can now predict equipment failures with 95% accuracy, preventing costly downtime.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const stats = [
    { number: "500+", label: "Predictive Models", icon: <Brain className="w-6 h-6" /> },
    { number: "95%", label: "Prediction Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "Real-time", label: "Processing Speed", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Predictive Analytics Pro - Advanced Predictive Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion AI Predictive Analytics Pro. Advanced machine learning, real-time predictions, and automated insights. Predict the future with 95% accuracy." />
        <meta name="keywords" content="predictive analytics, machine learning, AI predictions, data science, forecasting, business intelligence, predictive modeling, data analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-analytics-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Brain className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Predictive Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              AI Predictive Analytics Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Predict the future with confidence using advanced AI and machine learning. 
            Transform your data into actionable insights and make smarter business decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Predictive Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform provides cutting-edge predictive analytics capabilities for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Predictive Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into powerful predictions and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses across industries are using predictive analytics to achieve remarkable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {useCase.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {useCase.results}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Analytics Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the predictive analytics plan that matches your data needs and business scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using our predictive analytics platform to transform their operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Predict Your Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses using AI to predict the future and make smarter decisions. 
              Start your predictive analytics journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AiPredictiveAnalyticsPro;