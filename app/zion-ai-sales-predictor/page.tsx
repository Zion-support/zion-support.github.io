import React from 'react';
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Brain, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
  DollarSign,
  Users,
  Calendar,
  PieChart,
  LineChart,
  Activity,
  Award,
  Shield,
  Cloud,
  Smartphone,
  Monitor,
  Headphones,
  MessageSquare,
  Globe,
  Mail,
  Phone,
  Search,
  Filter,
  Download,
  Share2,
  Clock,
  FileText,
  Database,
  Cpu,
  Layers,
  TrendingDown
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const ZionAISalesPredictorPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Sales Predictor Pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Advanced AI-powered sales forecasting and revenue prediction platform with machine learning algorithms and real-time analytics.",
    "url": "https://ziontechgroup.com/zion-ai-sales-predictor",
    "offers": {
      "@type": "Offer",
      "price": "199.99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "89"
    }
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Forecasting",
      description: "Advanced machine learning algorithms predict sales with 94% accuracy using historical data and market trends"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "Revenue Optimization",
      description: "Identify high-value opportunities and optimize pricing strategies for maximum revenue growth"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Lead Scoring",
      description: "Intelligent lead scoring system ranks prospects by likelihood to convert and potential value"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboard with live sales metrics, pipeline analysis, and performance tracking"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: "Customer Insights",
      description: "Deep customer behavior analysis and segmentation for targeted sales strategies"
    },
    {
      icon: <Activity className="w-6 h-6 text-red-400" />,
      title: "Market Intelligence",
      description: "External market data integration for competitive analysis and trend identification"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199.99",
      period: "per month",
      description: "Perfect for small sales teams",
      features: [
        "Up to 5,000 leads analyzed",
        "Basic forecasting models",
        "Standard reporting",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499.99",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25,000 leads analyzed",
        "Advanced AI models",
        "Custom reporting & dashboards",
        "Priority support",
        "Up to 10 user accounts",
        "API access",
        "CRM integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999.99",
      period: "per month",
      description: "For large sales organizations",
      features: [
        "Unlimited leads",
        "Custom AI model training",
        "White-label solution",
        "Dedicated account manager",
        "Unlimited users",
        "Advanced integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "VP of Sales, TechFlow Inc",
      content: "Zion AI Sales Predictor has increased our forecast accuracy by 40% and helped us identify $2M in additional revenue opportunities.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      role: "Sales Director, GrowthCorp",
      content: "The lead scoring feature is incredible. We've improved our conversion rate by 35% by focusing on high-probability prospects.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "CEO, SalesTech Solutions",
      content: "The market intelligence integration gives us a competitive edge. We can now predict market shifts before our competitors.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: "Increase Revenue",
      description: "Average 25% revenue increase through optimized sales strategies and better lead targeting"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Improve Accuracy",
      description: "94% forecast accuracy reduces planning errors and improves resource allocation"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: "Save Time",
      description: "Automated analysis saves 15+ hours per week on manual forecasting and reporting"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Grow Faster",
      description: "Data-driven insights accelerate sales cycles and improve win rates by 30%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Sales Predictor Pro - Advanced Sales Forecasting & Revenue Prediction"
        description="AI-powered sales forecasting platform with 94% accuracy. Predict revenue, optimize pricing, score leads, and accelerate growth with machine learning analytics."
        keywords="AI sales forecasting, revenue prediction, lead scoring, sales analytics, machine learning, business intelligence, CRM integration"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="relative py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-medium">AI Sales Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion AI Sales
              </span>
              <br />
              <span className="text-white">Predictor Pro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Predict sales with 94% accuracy using advanced AI. Optimize revenue, score leads, and accelerate growth 
              with machine learning-powered sales intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <BarChart3 className="mr-2 w-5 h-5" />
                View Demo
              </FuturisticButton>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">94% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Real-Time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">25% Revenue Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">CRM Integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Sales Performance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders who have revolutionized their sales processes with AI-powered insights.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features for
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Sales Teams</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to predict, optimize, and accelerate your sales performance.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your sales team. All plans include our core AI features.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="#contact"
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Sales Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our customers have transformed their sales performance.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="p-12 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-2 border-green-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Predict Your Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of sales teams already using Zion AI Sales Predictor Pro to boost revenue and improve forecasting accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton
                href="#contact"
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us: +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAISalesPredictorPage;