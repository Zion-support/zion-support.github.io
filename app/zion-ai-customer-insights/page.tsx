import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
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
  Mail,
  Bell,
  Calendar,
  Settings,
  PieChart,
  Activity
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "AI-Powered Customer Analytics",
      description: "Analyze customer behavior patterns and predict future actions using advanced machine learning",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Real-Time Sentiment Analysis",
      description: "Monitor customer sentiment across all channels in real-time with natural language processing",
      icon: <Heart className="w-6 h-6" />,
      stats: "Real-time insights"
    },
    {
      title: "Predictive Customer Lifetime Value",
      description: "Predict customer lifetime value and identify high-value prospects automatically",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "40% better targeting"
    },
    {
      title: "Churn Prediction & Prevention",
      description: "Identify customers at risk of churning and trigger automated retention campaigns",
      icon: <Users className="w-6 h-6" />,
      stats: "Reduce churn by 35%"
    },
    {
      title: "Personalized Recommendations",
      description: "Generate personalized product and content recommendations for each customer",
      icon: <Target className="w-6 h-6" />,
      stats: "25% higher conversion"
    },
    {
      title: "Cross-Channel Journey Mapping",
      description: "Track customer journeys across all touchpoints and identify optimization opportunities",
      icon: <Globe className="w-6 h-6" />,
      stats: "360° view"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customers",
        "Basic analytics dashboard",
        "Email support",
        "Standard reports",
        "Basic segmentation",
        "30-day data retention"
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
        "Up to 100,000 customers",
        "Advanced analytics dashboard",
        "Priority support",
        "Custom reports",
        "Advanced segmentation",
        "1-year data retention",
        "API access",
        "Real-time alerts"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with massive customer databases",
      features: [
        "Unlimited customers",
        "Custom analytics dashboard",
        "24/7 phone support",
        "White-label options",
        "Custom integrations",
        "Unlimited data retention",
        "Dedicated account manager",
        "Advanced AI models"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      company: "E-commerce Platform",
      role: "VP of Marketing",
      content: "Zion AI Customer Insights has transformed how we understand our customers. We've increased customer retention by 40% and boosted revenue by 25% in just 6 months.",
      rating: 5,
      avatar: "RT"
    },
    {
      name: "Mark Chen",
      company: "SaaS Company",
      role: "Head of Growth",
      content: "The predictive analytics are incredibly accurate. We can now identify high-value customers before they even know they want to upgrade, leading to much better conversion rates.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Williams",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The real-time sentiment analysis has been a game-changer for our customer service team. We can now address issues before they become problems.",
      rating: 5,
      avatar: "SW"
    }
  ];

  const insights = [
    {
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, demographics, and preferences",
      icon: <PieChart className="w-8 h-8" />,
      benefits: ["Better targeting", "Personalized campaigns", "Higher engagement"]
    },
    {
      title: "Purchase Prediction",
      description: "Predict when customers are likely to make their next purchase",
      icon: <ShoppingCart className="w-8 h-8" />,
      benefits: ["Timed promotions", "Inventory optimization", "Revenue forecasting"]
    },
    {
      title: "Satisfaction Monitoring",
      description: "Track customer satisfaction across all touchpoints continuously",
      icon: <Star className="w-8 h-8" />,
      benefits: ["Proactive support", "Quality improvement", "Retention focus"]
    },
    {
      title: "Lifetime Value Optimization",
      description: "Maximize customer lifetime value through data-driven strategies",
      icon: <CreditCard className="w-8 h-8" />,
      benefits: ["Revenue growth", "Resource allocation", "Strategic planning"]
    }
  ];

  const metrics = [
    { label: "Customer Retention Rate", value: "85%", improvement: "+15%" },
    { label: "Average Order Value", value: "$127", improvement: "+22%" },
    { label: "Customer Satisfaction", value: "4.8/5", improvement: "+0.6" },
    { label: "Churn Rate", value: "3.2%", improvement: "-40%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Customer Insights - Advanced Customer Analytics & AI | Zion Tech Group"
        description="Unlock deep customer insights with AI-powered analytics. Predict behavior, reduce churn, and increase lifetime value. Advanced customer intelligence for modern businesses."
        keywords="AI customer insights, customer analytics, predictive analytics, customer lifetime value, churn prediction, customer segmentation, behavioral analysis, customer intelligence"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Users className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Customer Intelligence Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Understand Your Customers
            </span>
            <br />
            <span className="text-white">Like Never Before</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock deep customer insights with AI-powered analytics. Predict behavior, reduce churn, 
            increase lifetime value, and create personalized experiences that drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Higher Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-gray-300 text-sm">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Prediction Accuracy</div>
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
              Advanced Customer Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven insights to understand and predict customer behavior
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

      {/* Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Customer Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform raw data into actionable customer intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {insight.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
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
              See the impact of AI-powered customer insights on business performance
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
              Scale your customer insights as your business grows
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
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming with AI customer insights
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
            Ready to Unlock Customer Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses who are already using Zion AI Customer Insights 
            to understand their customers better and drive growth.
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

export default ZionAICustomerInsightsPage;