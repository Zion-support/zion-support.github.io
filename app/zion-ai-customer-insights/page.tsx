import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award,
  Sparkles,
  BarChart3,
  Brain,
  Target,
  TrendingUp,
  Eye,
  MessageSquare,
  Heart,
  AlertTriangle,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Database,
  Shield,
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
      title: "AI-Powered Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and value using machine learning",
      icon: <Users className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Predictive Analytics",
      description: "Predict customer churn, lifetime value, and purchase likelihood with advanced AI models",
      icon: <Brain className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze customer feedback, reviews, and social media mentions to understand sentiment trends",
      icon: <Heart className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Real-time Dashboards",
      description: "Monitor customer metrics and insights with customizable, real-time dashboards",
      icon: <BarChart3 className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize and optimize customer journeys across all touchpoints and channels",
      icon: <Target className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Automated Alerts",
      description: "Get notified of important customer behavior changes and opportunities",
      icon: <AlertTriangle className="w-6 h-6" />,
      price: "Included"
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
        "Basic segmentation",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 10,000 customers",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Real-time alerts",
        "Predictive modeling",
        "Customer journey mapping",
        "Integration support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label dashboards",
        "24/7 phone support",
        "Custom integrations",
        "Advanced reporting",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "E-commerce Plus",
      role: "VP of Marketing",
      content: "Zion AI Customer Insights helped us understand our customers like never before. We increased retention by 35% and boosted revenue by 28% in just 6 months.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Marcus Thompson",
      company: "SaaS Solutions Inc",
      role: "Head of Customer Success",
      content: "The predictive analytics are incredibly accurate. We can now identify at-risk customers before they churn and take proactive action to retain them.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Kim",
      company: "Retail Innovations",
      role: "Customer Experience Director",
      content: "The customer journey mapping feature transformed how we approach customer experience. We've identified key touchpoints that were causing friction and optimized them.",
      rating: 5,
      avatar: "SK"
    }
  ];

  const insights = [
    {
      title: "Customer Lifetime Value Prediction",
      description: "Predict which customers will be most valuable over time",
      icon: <DollarSign className="w-8 h-8" />,
      accuracy: "94% accuracy"
    },
    {
      title: "Churn Risk Analysis",
      description: "Identify customers likely to churn before they leave",
      icon: <AlertTriangle className="w-8 h-8" />,
      accuracy: "91% accuracy"
    },
    {
      title: "Purchase Behavior Patterns",
      description: "Understand when and why customers make purchases",
      icon: <TrendingUp className="w-8 h-8" />,
      accuracy: "89% accuracy"
    },
    {
      title: "Sentiment Trend Analysis",
      description: "Track customer satisfaction and sentiment over time",
      icon: <Heart className="w-8 h-8" />,
      accuracy: "96% accuracy"
    }
  ];

  const integrations = [
    {
      name: "Salesforce",
      description: "Sync customer data and insights with your CRM",
      icon: <Database className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "HubSpot",
      description: "Integrate customer insights with your marketing automation",
      icon: <Target className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Google Analytics",
      description: "Combine web analytics with customer behavior data",
      icon: <BarChart3 className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Zendesk",
      description: "Connect support tickets with customer insights",
      icon: <MessageSquare className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Stripe",
      description: "Analyze payment patterns and subscription data",
      icon: <CreditCard className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Slack",
      description: "Get real-time insights and alerts in Slack",
      icon: <MessageSquare className="w-6 h-6" />,
      status: "Available"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "Optimize product recommendations and pricing strategies",
      icon: <ShoppingCart className="w-6 h-6" />,
      results: "25% increase in conversion"
    },
    {
      title: "SaaS Retention",
      description: "Reduce churn and increase customer lifetime value",
      icon: <Users className="w-6 h-6" />,
      results: "40% reduction in churn"
    },
    {
      title: "Marketing Personalization",
      description: "Create highly targeted marketing campaigns",
      icon: <Target className="w-6 h-6" />,
      results: "60% higher engagement"
    },
    {
      title: "Customer Support",
      description: "Improve support quality and response times",
      icon: <MessageSquare className="w-6 h-6" />,
      results: "50% faster resolution"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Customer Insights - Advanced Customer Analytics & Segmentation | Zion Tech Group"
        description="Unlock deep customer insights with AI-powered analytics. Predict churn, segment customers, and optimize experiences. Starting at $99/month. Free trial available."
        keywords="customer insights, customer analytics, customer segmentation, churn prediction, customer lifetime value, sentiment analysis, customer journey mapping"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Customer Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Unlock deep customer insights with AI-powered analytics. Predict churn, segment customers, 
            and optimize experiences to drive growth and retention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Users className="w-5 h-5" />}
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
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">35%</div>
              <div className="text-gray-300">Avg. Retention Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">94%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">28%</div>
              <div className="text-gray-300">Revenue Boost</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get accurate predictions and deep insights about your customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <div className="text-cyan-400 font-semibold">{insight.accuracy}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand and optimize your customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-cyan-400 text-sm">{feature.price}</p>
                  </div>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using our insights to drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-green-400 font-semibold">{useCase.results}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and data sources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4">
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                    <span className="text-green-400 text-sm font-medium">{integration.status}</span>
                  </div>
                </div>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
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
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Customer Insights
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
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Customer Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using AI to understand their customers better and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Users className="w-5 h-5" />}
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
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAICustomerInsightsPage;