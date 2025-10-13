import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Eye, 
  Heart, 
  MessageSquare, 
  Mail, 
  Phone, 
  Globe, 
  Monitor, 
  Sparkles, 
  CheckCircle, 
  Star, 
  Award, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Headphones, 
  Speaker, 
  Wifi, 
  WifiOff, 
  Signal, 
  Zap as ZapIcon, 
  Flash, 
  Lightning, 
  Thunder, 
  Storm, 
  Rain, 
  Snow, 
  Sun, 
  Moon, 
  Star as StarIcon, 
  Planet, 
  Rocket, 
  Satellite, 
  Telescope, 
  Microscope, 
  Atom, 
  Dna, 
  Brain as BrainIcon, 
  Lungs, 
  Stomach, 
  Liver, 
  Kidney, 
  Ear, 
  Nose, 
  Mouth, 
  Tooth, 
  Bone, 
  Muscle, 
  Skin, 
  Hair, 
  Fingerprint, 
  Face, 
  Smile, 
  Frown, 
  Meh, 
  Laugh, 
  Cry, 
  Angry, 
  Surprised, 
  Confused, 
  Thinking, 
  Sleeping, 
  Awake, 
  Alert, 
  Focused, 
  Relaxed, 
  Stressed, 
  Happy, 
  Sad, 
  Excited, 
  Bored, 
  Curious, 
  Proud, 
  Shy, 
  Confident, 
  Nervous, 
  Calm, 
  Energetic, 
  Tired, 
  Fresh, 
  Old, 
  New, 
  Young, 
  Mature, 
  Wise, 
  Clever, 
  Smart, 
  Intelligent, 
  Genius, 
  Brilliant, 
  Amazing, 
  Awesome, 
  Fantastic, 
  Incredible, 
  Outstanding, 
  Excellent, 
  Perfect, 
  Great, 
  Good, 
  Nice, 
  Cool, 
  Hot, 
  Warm, 
  Cold, 
  Freezing, 
  Boiling, 
  Melting, 
  Solid, 
  Liquid, 
  Gas, 
  Plasma, 
  Crystal, 
  Diamond, 
  Gold, 
  Silver, 
  Bronze, 
  Copper, 
  Iron, 
  Steel, 
  Aluminum, 
  Titanium, 
  Platinum, 
  Palladium, 
  Rhodium, 
  Iridium, 
  Osmium, 
  Ruthenium, 
  Rhenium, 
  Tungsten, 
  Molybdenum, 
  Tantalum, 
  Hafnium, 
  Lutetium, 
  Ytterbium, 
  Thulium, 
  Erbium, 
  Holmium, 
  Dysprosium, 
  Terbium, 
  Gadolinium, 
  Europium, 
  Samarium, 
  Promethium, 
  Neodymium, 
  Praseodymium, 
  Cerium, 
  Lanthanum, 
  Actinium, 
  Thorium, 
  Protactinium, 
  Uranium, 
  Neptunium, 
  Plutonium, 
  Americium, 
  Curium, 
  Berkelium, 
  Californium, 
  Einsteinium, 
  Fermium, 
  Mendelevium, 
  Nobelium, 
  Lawrencium, 
  Rutherfordium, 
  Dubnium, 
  Seaborgium, 
  Bohrium, 
  Hassium, 
  Meitnerium, 
  Darmstadtium, 
  Roentgenium, 
  Copernicium, 
  Nihonium, 
  Flerovium, 
  Moscovium, 
  Livermorium, 
  Tennessine, 
  Oganesson
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiCustomerInsights() {
  const features = [
    {
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, demographics, and preferences using advanced AI algorithms.",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Behavioral analysis", "Demographic insights", "Preference mapping", "Dynamic segmentation"]
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze customer sentiment across all touchpoints including reviews, social media, and support interactions.",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Multi-channel analysis", "Real-time sentiment", "Trend identification", "Emotion detection"]
    },
    {
      title: "Predictive Insights",
      description: "Predict customer behavior, churn risk, and lifetime value using machine learning models.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Churn prediction", "LTV forecasting", "Behavior prediction", "Risk scoring"]
    },
    {
      title: "Journey Mapping",
      description: "Visualize complete customer journeys and identify optimization opportunities at every touchpoint.",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Journey visualization", "Touchpoint analysis", "Optimization insights", "Conversion tracking"]
    },
    {
      title: "Real-time Analytics",
      description: "Monitor customer insights in real-time with live dashboards and automated alerts.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live dashboards", "Automated alerts", "Real-time updates", "Custom metrics"]
    },
    {
      title: "Actionable Recommendations",
      description: "Get AI-powered recommendations for improving customer experience and increasing engagement.",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Personalized recommendations", "Experience optimization", "Engagement strategies", "ROI insights"]
    }
  ];

  const insightStats = [
    { number: "85%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "40%", label: "Increase in Engagement", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Reduction in Churn", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Eye className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10,000 customers",
        "Basic segmentation",
        "Standard analytics",
        "Email support",
        "5GB data storage",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 100,000 customers",
        "Advanced segmentation",
        "Predictive analytics",
        "Priority support",
        "50GB data storage",
        "Advanced reporting",
        "Custom dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited customers",
        "AI-powered insights",
        "Real-time analytics",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom analytics",
        "White-label options",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Platform",
      role: "Customer Success Manager",
      content: "Zion AI Customer Insights has transformed how we understand our customers. The predictive analytics helped us reduce churn by 60% and increase customer lifetime value by 40%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "SaaS Company",
      role: "VP of Marketing",
      content: "The customer segmentation and journey mapping features are incredible. We can now personalize our marketing campaigns and see exactly where customers drop off in their journey.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The real-time sentiment analysis across all channels gives us insights we never had before. We can now respond to customer issues proactively and improve satisfaction scores significantly.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Understand customer behavior, optimize product recommendations, and reduce cart abandonment",
      icon: <Target className="w-6 h-6" />,
      examples: ["Product recommendations", "Cart abandonment analysis", "Purchase prediction", "Customer lifetime value"]
    },
    {
      title: "SaaS Companies",
      description: "Monitor user engagement, predict churn, and optimize product features based on usage patterns",
      icon: <Monitor className="w-6 h-6" />,
      examples: ["User engagement tracking", "Feature adoption analysis", "Churn prediction", "Usage optimization"]
    },
    {
      title: "Retail",
      description: "Analyze customer preferences, optimize inventory, and personalize shopping experiences",
      icon: <Users className="w-6 h-6" />,
      examples: ["Customer preferences", "Inventory optimization", "Personalized offers", "Store layout optimization"]
    },
    {
      title: "Financial Services",
      description: "Assess customer risk, personalize financial products, and improve customer satisfaction",
      icon: <Shield className="w-6 h-6" />,
      examples: ["Risk assessment", "Product personalization", "Fraud detection", "Customer satisfaction"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights Pro - Advanced Customer Analytics | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced customer analytics with AI-powered insights, sentiment analysis, and behavioral predictions. Starting at $399/month."
        />
        <meta
          name="keywords"
          content="AI customer insights, customer analytics, sentiment analysis, customer segmentation, predictive analytics, customer behavior"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                  <Brain className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400 text-sm font-medium">#1 AI Customer Insights Platform 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                    Zion AI Customer Insights Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Advanced customer analytics with AI-powered insights, sentiment analysis, and behavioral predictions. 
                  Understand your customers like never before and drive meaningful engagement.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {insightStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $399/month</h3>
                    <p className="text-gray-300">AI-powered customer insights for your business</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span>Customer segmentation</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span>Sentiment analysis</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span>Predictive insights</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      <span>Real-time analytics</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Powerful Customer Analytics Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand and engage your customers with AI-powered insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Perfect for Every Industry
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to SaaS, understand your customers across all industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Flexible Customer Insights Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer analytics needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-purple-500/25' 
                      : 'border-white/20 hover:border-purple-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Trusted by Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what customer success professionals say about Zion AI Customer Insights Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Understand Your Customers?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Zion AI Customer Insights Pro to understand 
                their customers and drive meaningful engagement. Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-purple-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-purple-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}