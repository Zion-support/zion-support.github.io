import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  CheckCircle, 
  Zap, 
  Brain, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Smartphone,
  Monitor,
  Cloud,
  Target,
  Award,
  Sparkles,
  Heart,
  MessageSquare,
  ShoppingCart,
  Globe,
  PieChart,
  Activity
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import StructuredData from '../components/StructuredData';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAICustomerInsights = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Customer Insights",
    "description": "AI-powered customer analytics platform with behavioral insights, sentiment analysis, and predictive customer lifetime value",
    "url": "https://ziontechgroup.com/zion-ai-customer-insights",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "179",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "179",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      title: "AI-Powered Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and value with machine learning",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Dynamic segmentation", "Behavioral patterns", "Predictive grouping"]
    },
    {
      title: "Real-Time Sentiment Analysis",
      description: "Monitor customer sentiment across all touchpoints with advanced NLP and emotion detection",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Social media monitoring", "Review analysis", "Support ticket insights"]
    },
    {
      title: "Predictive Customer Lifetime Value",
      description: "Forecast customer value and churn risk with 95% accuracy using advanced ML models",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["CLV prediction", "Churn risk scoring", "Retention strategies"]
    },
    {
      title: "Behavioral Journey Mapping",
      description: "Visualize customer journeys and identify optimization opportunities across all touchpoints",
      icon: <Activity className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Journey visualization", "Bottleneck identification", "Conversion optimization"]
    },
    {
      title: "Cross-Channel Analytics",
      description: "Unify customer data from all channels for a complete 360-degree view",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      benefits: ["Multi-channel tracking", "Unified customer profiles", "Omnichannel insights"]
    },
    {
      title: "Automated Insights & Alerts",
      description: "Get intelligent recommendations and real-time alerts for customer behavior changes",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      benefits: ["Smart recommendations", "Real-time alerts", "Actionable insights"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic segmentation",
        "Email support",
        "Mobile app access",
        "Basic reporting",
        "Social media monitoring",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$179",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 100,000 customers",
        "Advanced AI insights",
        "Priority support",
        "Real-time analytics",
        "Custom dashboards",
        "API access",
        "1-year data retention",
        "A/B testing insights"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large enterprises",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "24/7 phone support",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager",
        "Unlimited data retention",
        "Advanced security"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "RetailMax Inc.",
      role: "Marketing Director",
      content: "Zion AI Customer Insights helped us increase customer retention by 35% and boost average order value by 28%. The predictive analytics are incredibly accurate.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Marcus Johnson",
      company: "E-commerce Solutions",
      role: "CEO",
      content: "The customer segmentation feature is a game-changer. We can now personalize our marketing campaigns and see 3x better conversion rates.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Sarah Chen",
      company: "Fashion Forward",
      role: "Customer Success Manager",
      content: "The real-time sentiment analysis helps us identify and resolve customer issues before they become problems. Our customer satisfaction scores have never been higher.",
      rating: 5,
      avatar: "SC"
    }
  ];

  const stats = [
    { number: "35%", label: "Increase in Retention", icon: <Target className="w-6 h-6" /> },
    { number: "95%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "3x", label: "Better Conversion", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "28%", label: "Higher AOV", icon: <DollarSign className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: "Shopify", logo: "S", description: "E-commerce analytics" },
    { name: "Salesforce", logo: "SF", description: "CRM integration" },
    { name: "HubSpot", logo: "H", description: "Marketing automation" },
    { name: "Zendesk", logo: "Z", description: "Support insights" },
    { name: "Google Analytics", logo: "GA", description: "Web analytics" },
    { name: "Facebook Ads", logo: "FB", description: "Social media insights" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Customer Insights - Customer Analytics Platform | Zion Tech Group"
        description="AI-powered customer analytics with behavioral insights, sentiment analysis, and predictive CLV. Increase retention by 35% and boost conversion by 3x."
        keywords="customer analytics, customer insights, behavioral analytics, sentiment analysis, customer lifetime value, customer segmentation"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
        structuredData={structuredData}
      />
      
      <StructuredData type="SoftwareApplication" data={structuredData} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Customer Insights
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock the power of customer data with AI-powered analytics. Increase retention by 35%, boost conversion by 3x, 
            and predict customer behavior with 95% accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Advanced Customer Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to understand and engage your customers with AI-powered insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite business tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {integration.logo}
                </div>
                <h3 className="text-white font-semibold mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
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
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
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
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Marketing Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Customer Insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already using Zion AI Customer Insights to boost retention and conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAICustomerInsights;