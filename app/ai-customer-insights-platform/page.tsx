import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BarChart3, Zap, Target, TrendingUp, ArrowRight, Star, CheckCircle, Clock, DollarSign, Globe, Smartphone, Monitor, Bot, Brain, Sparkles, Eye, MessageSquare, Heart } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AICustomerInsightsPlatformPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Customer Insights Platform",
    "description": "Advanced customer analytics platform with AI-powered insights, sentiment analysis, and predictive customer behavior modeling.",
    "url": "https://ziontechgroup.com/ai-customer-insights-platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "79",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Sentiment Analysis",
      description: "Analyze customer emotions and sentiment across all touchpoints with 98% accuracy"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customer Segmentation",
      description: "AI-powered customer segmentation for personalized marketing and experiences"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Predict customer behavior, churn risk, and lifetime value with machine learning"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Monitor customer satisfaction and engagement in real-time across all channels"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversation Analytics",
      description: "Analyze customer conversations to extract actionable insights and trends"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize the complete customer journey with AI insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic sentiment analysis",
        "Customer segmentation",
        "Basic analytics",
        "Email support",
        "Standard reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 customers",
        "Advanced AI features",
        "Predictive analytics",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Full AI suite",
        "Custom models",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Customer Retention",
      description: "Identify at-risk customers and take proactive action to improve retention by 40%",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Boost Customer Satisfaction",
      description: "Real-time insights help you address issues before they impact satisfaction",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Improve Marketing ROI",
      description: "Target the right customers with personalized campaigns that convert 3x better",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Reduce Churn Rate",
      description: "Predict and prevent customer churn with AI-powered early warning systems",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "E-commerce Platform",
      content: "Our customer retention increased by 45% after implementing AI insights. Game changer!",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "SaaS Company",
      content: "The predictive analytics helped us identify churn risks early and save 200+ customers.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Retail Chain",
      content: "Customer satisfaction scores improved by 30% with real-time sentiment monitoring.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Customer Insights Platform | Zion Tech Group"
        description="Advanced customer analytics with AI-powered insights, sentiment analysis, and predictive behavior modeling. Increase retention by 40%."
        keywords="customer insights, AI analytics, sentiment analysis, customer segmentation, predictive analytics, customer retention"
        canonical="https://ziontechgroup.com/ai-customer-insights-platform"
        structuredData={structuredData}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticText className="text-4xl md:text-6xl font-bold mb-6">
                AI Customer Insights Platform
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Know Your Customers Better
                </span>
              </FuturisticText>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform customer data into actionable insights with AI-powered analytics, 
                sentiment analysis, and predictive modeling that increases retention by 40% 
                and boosts satisfaction scores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/demo"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300">Retention Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                  <div className="text-gray-300">Sentiment Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
                  <div className="text-gray-300">Better Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
                  <div className="text-gray-300">Satisfaction Boost</div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Insights Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer relationships with cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand and engage your customers better
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key={index} 
                  className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    as={Link}
                    to="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI customer insights platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Understand Your Customers Better?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and see the difference AI insights can make
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
                    as={Link}
                    to="/contact"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                  <FuturisticButton
                    as={Link}
                    to="/demo"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                  >
                    Schedule Demo
                    <Clock className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default AICustomerInsightsPlatformPage;