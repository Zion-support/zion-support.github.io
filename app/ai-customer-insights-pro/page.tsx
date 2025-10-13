import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Eye,
  MessageSquare,
  Target,
  PieChart,
  FileText,
  Settings,
  Bell,
  Download,
  Play,
  Pause,
  RefreshCw,
  Heart,
  ThumbsUp,
  AlertTriangle
} from "lucide-react";

export default function AiCustomerInsightsPro() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Customer Segmentation",
      description: "Automatically segment customers using advanced machine learning algorithms that analyze behavior patterns, preferences, and lifetime value.",
      benefits: ["95% segmentation accuracy", "Dynamic customer profiles", "Real-time updates"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Customer Analytics",
      description: "Forecast customer behavior, churn risk, and purchase likelihood using sophisticated predictive models trained on your data.",
      benefits: ["90% churn prediction accuracy", "Revenue forecasting", "Behavioral predictions"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Sentiment Analysis Engine",
      description: "Analyze customer feedback, reviews, and social media mentions to understand sentiment and emotional responses in real-time.",
      benefits: ["Real-time sentiment tracking", "Multi-language support", "Emotion detection"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Recommendations",
      description: "Generate highly personalized product recommendations and marketing messages based on individual customer preferences and behavior.",
      benefits: ["40% higher conversion rates", "Personalized experiences", "Dynamic content"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Customer Journey Mapping",
      description: "Visualize complete customer journeys across all touchpoints with AI-powered insights and optimization recommendations.",
      benefits: ["Complete journey visibility", "Bottleneck identification", "Optimization suggestions"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy-First Analytics",
      description: "Advanced privacy protection with GDPR compliance, data anonymization, and secure processing of customer information.",
      benefits: ["GDPR compliant", "Data anonymization", "Enterprise security"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic segmentation",
        "Standard analytics",
        "Email support",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 customers",
        "Advanced AI insights",
        "Predictive analytics",
        "Priority support",
        "Custom integrations",
        "Real-time dashboards"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Full AI suite",
        "Custom models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CMO",
      company: "RetailMax",
      content: "AI Customer Insights Pro helped us increase customer retention by 35% through better segmentation and personalized experiences.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Head of Analytics",
      company: "TechStart",
      content: "The predictive analytics are incredibly accurate. We can now predict customer churn with 90% accuracy and take proactive measures.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "VP Marketing",
      company: "GlobalBrand",
      content: "The sentiment analysis feature has transformed how we understand our customers. We can now respond to issues before they escalate.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Optimize product recommendations and personalize shopping experiences for higher conversion rates.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "SaaS",
      description: "Reduce churn and increase customer lifetime value with predictive analytics and engagement insights.",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Financial Services",
      description: "Enhance customer experience and detect fraud with advanced behavioral analysis and risk assessment.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Improve patient engagement and outcomes with personalized communication and treatment recommendations.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const metrics = [
    {
      title: "Customer Lifetime Value",
      improvement: "+45%",
      description: "Average increase in CLV through better targeting"
    },
    {
      title: "Churn Reduction",
      improvement: "-60%",
      description: "Decrease in customer churn with predictive insights"
    },
    {
      title: "Conversion Rate",
      improvement: "+40%",
      description: "Higher conversion through personalized experiences"
    },
    {
      title: "Customer Satisfaction",
      improvement: "+55%",
      description: "Improved satisfaction through better understanding"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Customer Insights Pro - Advanced Customer Analytics & Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with AI-powered analytics, predictive modeling, and personalized recommendations. Increase CLV by 45% and reduce churn by 60%." />
        <meta name="keywords" content="AI customer insights, customer analytics, predictive analytics, customer segmentation, sentiment analysis, personalization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-insights-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Customer Insights Pro - Advanced Customer Analytics & Intelligence" />
        <meta property="og:description" content="Transform customer data into actionable insights with AI-powered analytics, predictive modeling, and personalized recommendations." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-insights-pro" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Customer Insights Pro - Advanced Customer Analytics & Intelligence" />
        <meta name="twitter:description" content="Transform customer data into actionable insights with AI-powered analytics, predictive modeling, and personalized recommendations." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Customer Insights Pro",
            "description": "Advanced customer analytics platform with AI-powered insights and predictive modeling",
            "url": "https://ziontechgroup.com/ai-customer-insights-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
            <Brain className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-300 font-medium">AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Customer Insights
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform customer data into actionable insights with AI-powered analytics, predictive modeling, 
            and personalized recommendations. Increase CLV by 45% and reduce churn by 60%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{metric.improvement}</div>
                <div className="text-gray-300 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to understand your customers like never before
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer insights platform adapts to your industry's unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'border border-blue-500 text-blue-300 hover:bg-blue-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Customer Insights Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Understanding?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Customer Insights Pro to better understand and serve their customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}