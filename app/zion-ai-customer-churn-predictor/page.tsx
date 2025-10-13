import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingDown, 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Heart,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Award,
  Bell,
  Calendar,
  Settings,
  PieChart,
  Activity,
  Send,
  Inbox,
  Archive,
  Trash2,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  Users,
  FileText,
  Calculator,
  Bug,
  GitBranch,
  Terminal,
  Camera,
  Image,
  Video,
  Cpu,
  HardDrive
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAICustomerChurnPredictorPage = () => {
  const features = [
    {
      title: "AI Churn Prediction",
      description: "Predict customer churn with 95% accuracy using advanced machine learning",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Real-Time Alerts",
      description: "Get instant alerts when customers show churn risk indicators",
      icon: <Bell className="w-6 h-6" />,
      stats: "Real-time alerts"
    },
    {
      title: "Behavioral Analysis",
      description: "Analyze customer behavior patterns to identify churn signals",
      icon: <Activity className="w-6 h-6" />,
      stats: "Pattern recognition"
    },
    {
      title: "Retention Strategies",
      description: "Get AI-powered recommendations for customer retention campaigns",
      icon: <Target className="w-6 h-6" />,
      stats: "Personalized strategies"
    },
    {
      title: "Risk Scoring",
      description: "Assign churn risk scores to customers for prioritized action",
      icon: <AlertTriangle className="w-6 h-6" />,
      stats: "Risk scoring"
    },
    {
      title: "Success Tracking",
      description: "Track the effectiveness of retention efforts and campaigns",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Campaign analytics"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction",
        "Email alerts",
        "Email support",
        "Basic reports",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 customers",
        "Advanced AI prediction",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics",
        "1-year data retention",
        "API access",
        "Team collaboration"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with high customer volume",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "Advanced integrations",
        "24/7 phone support",
        "White-label options",
        "Unlimited data retention",
        "Dedicated account manager",
        "Custom reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Lisa Chen",
      company: "SaaS Company",
      role: "Head of Customer Success",
      content: "Zion AI Customer Churn Predictor has helped us reduce churn by 40% and increase customer lifetime value by 25%. The predictions are incredibly accurate.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "David Park",
      company: "E-commerce Platform",
      role: "VP of Growth",
      content: "The real-time alerts have been a game-changer. We can now intervene with at-risk customers before they churn, leading to much better retention rates.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Maria Rodriguez",
      company: "Subscription Service",
      role: "Customer Success Manager",
      content: "The behavioral analysis feature is amazing. It helps us understand exactly why customers are at risk and what actions we can take to retain them.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const benefits = [
    {
      title: "Churn Reduction",
      description: "Reduce customer churn by 40% with proactive intervention",
      icon: <TrendingDown className="w-8 h-8" />,
      stat: "40% less churn"
    },
    {
      title: "Revenue Protection",
      description: "Protect revenue by retaining high-value customers",
      icon: <DollarSign className="w-8 h-8" />,
      stat: "25% more revenue"
    },
    {
      title: "Customer Lifetime Value",
      description: "Increase customer lifetime value through better retention",
      icon: <Users className="w-8 h-8" />,
      stat: "30% higher LTV"
    },
    {
      title: "Retention Efficiency",
      description: "Improve retention campaign effectiveness with AI insights",
      icon: <Target className="w-8 h-8" />,
      stat: "60% better campaigns"
    }
  ];

  const metrics = [
    { label: "Churn Rate", value: "3.2%", improvement: "-40%" },
    { label: "Prediction Accuracy", value: "95%", improvement: "+25%" },
    { label: "Customer LTV", value: "$2,400", improvement: "+30%" },
    { label: "Retention Rate", value: "96.8%", improvement: "+15%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Customer Churn Predictor - Predict & Prevent Customer Churn | Zion Tech Group"
        description="Predict customer churn with 95% accuracy using AI. Real-time alerts, behavioral analysis, and retention strategies. Perfect for customer success teams. Start free trial today!"
        keywords="AI churn prediction, customer churn, churn prevention, customer retention, behavioral analysis, churn analytics, customer success, retention strategies"
        canonical="https://ziontechgroup.com/zion-ai-customer-churn-predictor"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <TrendingDown className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Churn Prediction Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Predict & Prevent
            </span>
            <br />
            <span className="text-white">Customer Churn</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Predict customer churn with 95% accuracy using AI. Get real-time alerts, 
            behavioral insights, and personalized retention strategies to keep your customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-300 text-sm">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Churn Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features to predict and prevent customer churn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <div className="text-cyan-400 text-sm font-medium">{feature.stats}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your customer retention with measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-2">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of AI-powered churn prediction on customer retention
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-sm font-medium">{metric.improvement}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your churn prediction as your customer base grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Customer Success Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how teams are improving retention with AI churn prediction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Predict & Prevent Churn?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of customer success teams who are already using Zion AI Customer Churn Predictor 
            to improve retention and grow revenue.
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
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAICustomerChurnPredictorPage;