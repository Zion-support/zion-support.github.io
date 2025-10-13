import { ArrowRight, BarChart3, CheckCircle, TrendingUp, Users, Award, Clock, Shield, Zap, Database, Brain, Star, Mail, Smartphone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAnalyticsProPage() {
  const features = [
    {
      title: "Real-time Analytics Dashboard",
      description: "Monitor your business metrics in real-time with customizable dashboards that update automatically as data flows in.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Live data visualization", "Customizable widgets", "Mobile-responsive design", "Export capabilities"]
    },
    {
      title: "Predictive Modeling & Forecasting",
      description: "Leverage AI to predict future trends and make data-driven decisions with advanced machine learning algorithms.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Sales forecasting", "Demand prediction", "Risk assessment", "Trend analysis"]
    },
    {
      title: "Custom Report Generation",
      description: "Create professional reports automatically with our AI-powered report builder that understands your business needs.",
      icon: <Database className="w-6 h-6" />,
      benefits: ["Automated scheduling", "Multiple formats", "Brand customization", "Email distribution"]
    },
    {
      title: "API Integration & Webhooks",
      description: "Connect with 100+ popular business tools and platforms through our comprehensive API and webhook system.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["RESTful API", "Real-time webhooks", "SDK support", "Documentation"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      originalPrice: "$49",
      period: "per month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "1 user account",
        "100K data points/month"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      originalPrice: "$129",
      period: "per month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Advanced dashboards",
        "Predictive analytics",
        "Priority support",
        "Up to 10 user accounts",
        "1M data points/month",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      originalPrice: "$299",
      period: "per month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced AI models",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Unlimited data points",
        "Custom development",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our decision-making process. We now have real-time insights that helped us increase revenue by 40% in just 3 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The predictive analytics feature is incredible. We can now forecast demand accurately and optimize our inventory, saving us thousands of dollars monthly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The custom report generation saves us hours every week. The AI understands our business context and creates exactly what we need.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Revenue Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your data into actionable insights with Zion Analytics Pro. Real-time dashboards, predictive modeling, automated reporting, and AI-powered business intelligence for modern businesses."
        />
        <meta
          name="keywords"
          content="business intelligence, analytics platform, data visualization, predictive analytics, real-time dashboards, AI analytics, business intelligence software, data insights"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                  <BarChart3 className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Featured Micro SAAS</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
                    {" "}Analytics Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your data into actionable insights with our AI-powered business intelligence platform. 
                  Real-time dashboards, predictive modeling, and automated reporting that drives business growth.
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
                    <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                {/* Pricing */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-white">$29<span className="text-lg text-gray-400">/month</span></div>
                      <div className="text-sm text-gray-400 line-through">$49/month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-medium">40% OFF</div>
                      <div className="text-xs text-gray-400">Limited Time</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">Professional plan with advanced features and priority support</p>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 text-center block"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Live Dashboard Preview</h3>
                    <p className="text-gray-300">Real-time analytics in action</p>
                  </div>
                  
                  {/* Mock Dashboard */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">$2.4M</div>
                      <div className="text-sm text-gray-300">Revenue</div>
                      <div className="text-xs text-green-400">+12.5%</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">1,247</div>
                      <div className="text-sm text-gray-300">Customers</div>
                      <div className="text-xs text-green-400">+8.3%</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Sales Trend</span>
                      <span className="text-xs text-green-400">↑ 15.2%</span>
                    </div>
                    <div className="h-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded flex items-end">
                      <div className="w-full h-3/4 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t"></div>
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
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable business insights with AI-powered analytics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10'
                      : 'border-white/20 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">{plan.originalPrice}{plan.period}</div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Zion Analytics Pro to drive growth and make data-driven decisions. 
              Start your free trial today and experience the power of AI-powered analytics.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/micro-saas"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Solutions
                <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}