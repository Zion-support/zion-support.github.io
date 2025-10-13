import { ArrowRight, BarChart3, TrendingUp, Users, Clock, Shield, CheckCircle, Star, Mail, Smartphone, Globe, Zap, Database, Target, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAnalyticsPro() {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor your business performance with live dashboards that update in real-time",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Instant insights", "Live data streaming", "Custom refresh rates", "Mobile notifications"]
    },
    {
      title: "Predictive Modeling",
      description: "AI-powered forecasting to predict trends and make data-driven decisions",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Sales forecasting", "Demand prediction", "Risk assessment", "Trend analysis"]
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your business needs and KPIs",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Drag-and-drop builder", "Widget library", "Role-based access", "Export capabilities"]
    },
    {
      title: "API Integration",
      description: "Seamlessly connect with 100+ popular business tools and platforms",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Pre-built connectors", "Custom integrations", "Real-time sync", "Data transformation"]
    },
    {
      title: "Mobile App",
      description: "Access your analytics on-the-go with our native iOS and Android apps",
      icon: <Smartphone className="w-6 h-6" />,
      benefits: ["Offline access", "Push notifications", "Touch-optimized", "Secure authentication"]
    },
    {
      title: "White-label Options",
      description: "Rebrand the platform with your company's logo and colors",
      icon: <Award className="w-6 h-6" />,
      benefits: ["Custom branding", "Domain mapping", "Client portals", "Reseller program"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 dashboards",
        "10 data sources",
        "Basic reporting",
        "Email support",
        "1 user account",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Unlimited dashboards",
        "50 data sources",
        "Advanced reporting",
        "Priority support",
        "Up to 10 users",
        "1-year data retention",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Everything in Professional",
        "Unlimited data sources",
        "Custom reporting",
        "24/7 phone support",
        "Unlimited users",
        "Unlimited data retention",
        "White-label options",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We now make decisions 40% faster with real-time insights and predictive modeling.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The custom dashboards and API integrations saved us countless hours. The ROI was evident within the first month.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The predictive modeling helped us optimize our campaigns and increase conversion rates by 35%. Highly recommended!",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "40%", label: "Faster Decisions", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your data into actionable insights with Zion Analytics Pro. Real-time dashboards, predictive analytics, custom reporting, and API integrations. Starting from $29/month with 30-day free trial."
        />
        <meta
          name="keywords"
          content="business intelligence, analytics platform, data visualization, predictive analytics, real-time dashboards, custom reporting, API integration, business intelligence software"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Analytics
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                    {" "}Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your data into actionable insights with our AI-powered business intelligence platform. 
                  Real-time dashboards, predictive analytics, and custom reporting to accelerate your business growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">30-day free trial</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">No credit card required</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Setup in 5 minutes</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">24/7 support</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Live Dashboard Preview</h3>
                    <p className="text-gray-300">Real-time business metrics</p>
                  </div>
                  
                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Revenue</span>
                        <span className="text-green-400 text-sm">+12.5%</span>
                      </div>
                      <div className="text-2xl font-bold text-white">$124,567</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Users</div>
                        <div className="text-xl font-bold text-white">2,847</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Conversion</div>
                        <div className="text-xl font-bold text-white">3.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable business insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    } group`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about Zion Analytics Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Zion Analytics Pro to make data-driven decisions. 
                Start your free trial today with no credit card required.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/micro-saas"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  View All Solutions
                  <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}