import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MessageSquare, 
  Target, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Shield, 
  Award,
  Clock,
  DollarSign,
  PieChart,
  Activity,
  Filter,
  Download,
  Share,
  Settings,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Crown,
  Diamond,
  Flame,
  Thunder,
  Sun,
  Moon,
  Heart,
  ThumbsUp,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AICustomerInsights = () => {
  const features = [
    {
      title: "Sentiment Analysis",
      description: "Analyze customer emotions and sentiment across all touchpoints in real-time",
      icon: <Heart className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior, churn risk, and lifetime value using advanced ML models",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "85% prediction accuracy"
    },
    {
      title: "Real-time Insights",
      description: "Get instant insights and alerts as customer data changes across all channels",
      icon: <Zap className="w-6 h-6" />,
      stats: "Sub-second response"
    },
    {
      title: "Multi-channel Integration",
      description: "Connect data from email, social media, support tickets, surveys, and more",
      icon: <Globe className="w-6 h-6" />,
      stats: "50+ integrations"
    },
    {
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and value",
      icon: <Users className="w-6 h-6" />,
      stats: "Unlimited segments"
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards with KPIs and metrics that matter to your business",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "100+ templates"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customers",
        "Basic sentiment analysis",
        "5 data sources",
        "Standard dashboards",
        "Email support",
        "Monthly reports"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 100,000 customers",
        "Advanced sentiment analysis",
        "Predictive analytics",
        "20 data sources",
        "Custom dashboards",
        "Priority support",
        "Real-time alerts",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For large organizations with complex customer data needs",
      features: [
        "Unlimited customers",
        "AI-powered insights",
        "Custom ML models",
        "Unlimited data sources",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Customer Retention",
      description: "Identify at-risk customers and implement targeted retention strategies",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Reduce churn by 40%", "Increase retention rates", "Improve customer satisfaction"]
    },
    {
      title: "Product Development",
      description: "Understand customer needs and preferences to guide product decisions",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Data-driven decisions", "Faster product iteration", "Higher adoption rates"]
    },
    {
      title: "Marketing Optimization",
      description: "Create personalized campaigns based on customer behavior and preferences",
      icon: <MessageSquare className="w-8 h-8" />,
      benefits: ["3x higher engagement", "Better conversion rates", "Improved ROI"]
    },
    {
      title: "Support Enhancement",
      description: "Proactively address customer issues and improve support quality",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Faster issue resolution", "Reduced support tickets", "Higher satisfaction"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "E-commerce Platform",
      role: "Head of Customer Success",
      content: "Zion AI Customer Insights helped us reduce churn by 35% in just 3 months. The predictive analytics are incredibly accurate and actionable.",
      rating: 5,
      avatar: "SC",
      results: "35% churn reduction"
    },
    {
      name: "Michael Rodriguez",
      company: "SaaS Startup",
      role: "VP of Marketing",
      content: "The real-time insights and customer segmentation features have transformed our marketing strategy. Our campaign ROI increased by 200%.",
      rating: 5,
      avatar: "MR",
      results: "200% ROI increase"
    },
    {
      name: "Emily Johnson",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "We can now predict customer behavior with 90% accuracy. This has revolutionized how we approach customer experience and retention.",
      rating: 5,
      avatar: "EJ",
      results: "90% prediction accuracy"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Using", icon: <Users className="w-6 h-6" /> },
    { number: "50M+", label: "Customers Analyzed", icon: <Database className="w-6 h-6" /> },
    { number: "95%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "40%", label: "Average Churn Reduction", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Customer Insights - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with AI-powered analytics. Sentiment analysis, predictive modeling, and real-time customer intelligence. Start your free trial today!" />
        <meta name="keywords" content="AI customer insights, customer analytics, sentiment analysis, predictive analytics, customer intelligence, customer segmentation, churn prediction, customer behavior" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Brain className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              AI Customer Insights
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform customer data into actionable insights with our AI-powered analytics platform. 
            Predict behavior, analyze sentiment, and optimize customer experience in real-time.
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
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful AI features that transform raw customer data into actionable business insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Drive Business Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use customer insights to make data-driven decisions and improve business outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your business grows. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies are using AI customer insights to drive growth and retention
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-blue-400">{testimonial.results}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Unlock Customer Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies using AI customer insights to make data-driven decisions 
              and improve customer experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No setup fees • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AICustomerInsights;