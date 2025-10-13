import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Target,
  Award,
  Sparkles,
  Mail,
  Smartphone,
  MapPin,
  CreditCard,
  Download,
  Share2,
  Settings,
  Eye,
  Filter,
  RefreshCw
} from "lucide-react";

const ZionAnalyticsPro = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Dashboards",
      description: "Monitor your business metrics with live, interactive dashboards that update in real-time."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to predict trends, sales, and customer behavior with 95% accuracy."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reports",
      description: "Generate comprehensive reports automatically and schedule them for delivery to stakeholders."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs and KPIs."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Multi-source Integration",
      description: "Connect to 100+ data sources including CRM, ERP, social media, and web analytics."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Advanced Filtering",
      description: "Slice and dice your data with powerful filtering and segmentation capabilities."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "3 custom dashboards",
        "Basic reporting",
        "Email support",
        "1GB data storage",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 data sources",
        "Unlimited dashboards",
        "Advanced analytics",
        "Priority support",
        "10GB data storage",
        "All integrations",
        "Custom metrics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Unlimited dashboards",
        "AI-powered insights",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" },
    { name: "Google Analytics", logo: "GA" },
    { name: "Shopify", logo: "SH" },
    { name: "Stripe", logo: "ST" },
    { name: "Mailchimp", logo: "MC" },
    { name: "Zapier", logo: "ZP" },
    { name: "Slack", logo: "SL" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We can now make data-driven decisions in real-time, leading to a 40% increase in revenue.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The predictive analytics feature is incredible. We can now forecast sales trends months in advance with remarkable accuracy.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The automated reporting saves us 20 hours per week. Our clients love the detailed insights we can now provide.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your data into actionable insights with Zion Analytics Pro. Real-time dashboards, predictive analytics, and automated reporting. Start from $29/month."
        />
        <meta
          name="keywords"
          content="business intelligence, data analytics, predictive analytics, real-time dashboards, automated reporting, data visualization, KPI tracking"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                  <BarChart3 className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">AI-Powered Business Intelligence</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Analytics
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {" "}Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your data into actionable insights with our advanced AI analytics platform. 
                  Get real-time dashboards, predictive analytics, and automated reporting that drives business growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Live Dashboard Preview</h3>
                    <p className="text-gray-300">Real-time business metrics</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">$2.4M</div>
                      <div className="text-sm text-gray-300">Revenue</div>
                      <div className="text-xs text-green-400 flex items-center justify-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +12.5%
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">1,247</div>
                      <div className="text-sm text-gray-300">Customers</div>
                      <div className="text-xs text-green-400 flex items-center justify-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +8.2%
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">94.2%</div>
                      <div className="text-sm text-gray-300">Satisfaction</div>
                      <div className="text-xs text-green-400 flex items-center justify-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +2.1%
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-pink-400 mb-1">$1,847</div>
                      <div className="text-sm text-gray-300">Avg. Order</div>
                      <div className="text-xs text-green-400 flex items-center justify-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +15.3%
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Next automated report in</div>
                    <div className="text-lg font-semibold text-cyan-400">2 hours 34 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features for Data-Driven Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform raw data into actionable business insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Connect Your Favorite Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with 100+ popular business applications and data sources.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">{integration.logo}</span>
                  </div>
                  <div className="text-sm text-gray-300">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                    plan.popular ? 'ring-2 ring-blue-500/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300 font-normal">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion Analytics Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Zion Analytics Pro to make data-driven decisions. 
              Start your free trial today and see the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-blue-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-blue-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsPro;