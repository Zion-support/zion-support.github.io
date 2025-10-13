import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingDown, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  MessageSquare,
  Star,
  Clock,
  Award,
  Globe,
  Shield,
  Smartphone,
  Monitor,
  Mail,
  Bell,
  Settings,
  PieChart,
  Activity,
  Database,
  Send,
  Download,
  Filter,
  Search,
  AlertTriangle,
  Users,
  DollarSign
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAICustomerChurnPredictorPage = () => {
  const features = [
    {
      title: "AI-Powered Churn Prediction",
      description: "Predict customer churn with 95% accuracy using advanced machine learning and behavioral analysis",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Risk Scoring",
      description: "Get real-time churn risk scores for all customers with detailed explanations",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Behavioral Analysis",
      description: "Analyze customer behavior patterns to identify early warning signs of churn",
      icon: <Activity className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Interventions",
      description: "Automatically trigger retention campaigns and personalized offers for at-risk customers",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Retention Recommendations",
      description: "Get AI-powered recommendations for specific actions to retain at-risk customers",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cohort Analysis",
      description: "Analyze customer cohorts to understand churn patterns and trends over time",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses starting with churn prediction",
      features: [
        "1,000 customers",
        "Basic churn prediction",
        "Email alerts",
        "Email support",
        "Standard reports",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses with complex customer data",
      features: [
        "10,000 customers",
        "Advanced prediction models",
        "Real-time alerts",
        "Priority support",
        "Advanced reports",
        "5 user accounts",
        "Automated interventions",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with extensive customer bases",
      features: [
        "Unlimited customers",
        "Full AI prediction suite",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited users",
        "Advanced API access",
        "SLA guarantee",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Churn Prediction",
      description: "Predict customer churn with 95% accuracy",
      icon: <TrendingDown className="w-6 h-6" />,
      metric: "95% accuracy"
    },
    {
      title: "Early Warning",
      description: "Identify at-risk customers 30 days before churn",
      icon: <AlertTriangle className="w-6 h-6" />,
      metric: "30 days early"
    },
    {
      title: "Retention Rate",
      description: "Improve customer retention by up to 40%",
      icon: <Users className="w-6 h-6" />,
      metric: "40% improvement"
    },
    {
      title: "Revenue Protection",
      description: "Protect revenue by preventing customer churn",
      icon: <DollarSign className="w-6 h-6" />,
      metric: "25% revenue saved"
    },
    {
      title: "Intervention Success",
      description: "Successfully retain 80% of at-risk customers",
      icon: <Target className="w-6 h-6" />,
      metric: "80% success rate"
    },
    {
      title: "Cost Reduction",
      description: "Reduce customer acquisition costs through retention",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "50% cost reduction"
    }
  ];

  const testimonials = [
    {
      name: "Lisa Chen",
      company: "SaaS Platform",
      role: "Customer Success Manager",
      content: "Zion AI Customer Churn Predictor has been a game-changer for our business. We've reduced churn by 40% and increased customer lifetime value by 25%. The early warning system is incredibly accurate.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "David Park",
      company: "E-commerce Platform",
      role: "VP of Customer Success",
      content: "The behavioral analysis feature helps us understand why customers churn and take proactive measures. We've successfully retained 80% of at-risk customers through targeted interventions.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Maria Santos",
      company: "Subscription Service",
      role: "Head of Retention",
      content: "Automated interventions have saved us countless hours while improving our retention rates. The AI recommendations are spot-on and have helped us develop better retention strategies.",
      rating: 5,
      avatar: "MS"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Customer Churn Predictor - Prevent Customer Churn with AI | Zion Tech Group"
        description="Reduce customer churn with Zion AI Customer Churn Predictor. Predict churn with 95% accuracy, identify at-risk customers, and automate retention campaigns. Start your free trial today!"
        keywords="customer churn prediction, churn prevention, customer retention, churn analysis, customer lifetime value, retention campaigns, churn prediction AI"
        canonical="https://ziontechgroup.com/zion-ai-customer-churn-predictor"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <TrendingDown className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Churn Prevention</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Predict & Prevent
            </span>
            <br />
            <span className="text-white">Customer Churn</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Reduce customer churn by up to 40% with AI-powered prediction and prevention. 
            Identify at-risk customers early and take proactive measures to retain them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<TrendingDown className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">30</div>
              <div className="text-gray-300 text-sm">Days Early Warning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Retention Success</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Churn Prediction Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to predict and prevent customer churn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
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
              Powerful Churn Prevention Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Achieve remarkable results with AI-powered churn prediction and prevention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{capability.metric}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your churn prediction needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Customer Success Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Customer Churn Predictor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Prevent Customer Churn?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using AI to predict and prevent customer churn, increasing retention and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<TrendingDown className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAICustomerChurnPredictorPage;