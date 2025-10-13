import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
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
  Database
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "AI-Powered Customer Analytics",
      description: "Deep insights into customer behavior, preferences, and journey patterns using advanced machine learning",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Sentiment Analysis",
      description: "Monitor customer sentiment across all channels and get instant alerts for negative feedback",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Customer Behavior",
      description: "Predict customer actions, churn risk, and lifetime value with 95% accuracy using AI models",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Segmentation",
      description: "Automatically segment customers based on behavior, demographics, and purchase patterns",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cross-Channel Tracking",
      description: "Track customer interactions across email, social media, website, and mobile app",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Actionable Recommendations",
      description: "Get AI-powered recommendations to improve customer experience and increase retention",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses starting with customer insights",
      features: [
        "1,000 customer profiles",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "Monthly reports",
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
        "10,000 customer profiles",
        "Advanced analytics dashboard",
        "Real-time insights",
        "Priority support",
        "Custom integrations",
        "5 user accounts",
        "Predictive analytics",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with extensive customer data",
      features: [
        "Unlimited customer profiles",
        "Full analytics suite",
        "Real-time + historical data",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited users",
        "Custom AI models",
        "Advanced API access",
        "Data export/import",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const insights = [
    {
      title: "Customer Lifetime Value",
      description: "Predict and optimize customer lifetime value with AI-powered insights",
      icon: <DollarSign className="w-6 h-6" />,
      metric: "35% increase"
    },
    {
      title: "Churn Prediction",
      description: "Identify at-risk customers before they leave with 95% accuracy",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "95% accuracy"
    },
    {
      title: "Purchase Intent",
      description: "Predict when customers are ready to buy with behavioral analysis",
      icon: <Target className="w-6 h-6" />,
      metric: "40% higher conversion"
    },
    {
      title: "Sentiment Tracking",
      description: "Monitor customer satisfaction across all touchpoints in real-time",
      icon: <MessageSquare className="w-6 h-6" />,
      metric: "Real-time alerts"
    },
    {
      title: "Segment Performance",
      description: "Compare performance across different customer segments",
      icon: <PieChart className="w-6 h-6" />,
      metric: "8x better targeting"
    },
    {
      title: "Journey Mapping",
      description: "Visualize complete customer journeys and identify optimization opportunities",
      icon: <Activity className="w-6 h-6" />,
      metric: "60% faster insights"
    }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      company: "E-commerce Platform",
      role: "Head of Marketing",
      content: "Zion AI Customer Insights helped us understand our customers like never before. We increased retention by 45% in just 3 months.",
      rating: 5,
      avatar: "RT"
    },
    {
      name: "Mark Chen",
      company: "SaaS Company",
      role: "VP of Customer Success",
      content: "The predictive analytics are incredibly accurate. We can now prevent churn before it happens and increase customer lifetime value.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Johnson",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "Real-time sentiment analysis across all channels gives us immediate feedback. We've improved our customer satisfaction scores significantly.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Customer Insights - Advanced Customer Analytics & Behavior Prediction | Zion Tech Group"
        description="Unlock deep customer insights with Zion AI Customer Insights. Predict behavior, analyze sentiment, and optimize customer experience with AI-powered analytics. Start your free trial today!"
        keywords="customer insights, customer analytics, behavior prediction, sentiment analysis, customer segmentation, churn prediction, customer lifetime value"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Users className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Know Your Customers
            </span>
            <br />
            <span className="text-white">Better Than Ever</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock deep customer insights with AI-powered analytics. Predict behavior, analyze sentiment, 
            and optimize customer experience with advanced machine learning and real-time data processing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
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
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">45%</div>
              <div className="text-gray-300 text-sm">Higher Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">8x</div>
              <div className="text-gray-300 text-sm">Better Targeting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">Real-time</div>
              <div className="text-gray-300 text-sm">Insights</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Customer Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to understand and predict customer behavior
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

      {/* Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Insights at Your Fingertips
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get actionable insights that drive real business results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    {insight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{insight.metric}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{insight.description}</p>
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
              Choose the plan that fits your customer insights needs
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
              See what our users say about Zion AI Customer Insights
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
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using AI to gain deep customer insights and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
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

export default ZionAICustomerInsightsPage;