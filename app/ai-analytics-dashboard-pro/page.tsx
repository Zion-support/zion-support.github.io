import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AiAnalyticsDashboardProPage = () => {
  return;
}, []);

const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Monitor your business metrics in real-time with live data streaming and instant updates.",
      benefits: ["Live data updates", "Instant insights", "Real-time alerts", "Performance monitoring"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Leverage machine learning algorithms to uncover hidden patterns and predict future trends.",
      benefits: ["Predictive analytics", "Pattern recognition", "Anomaly detection", "Smart recommendations"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs and KPIs.",
      benefits: ["Drag-and-drop builder", "Custom widgets", "Role-based views", "Mobile optimization"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Data Source Integration",
      description: "Connect and analyze data from multiple sources including databases, APIs, and cloud services.",
      benefits: ["100+ integrations", "Data transformation", "ETL pipelines", "API management"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and compliance management.",
      benefits: ["End-to-end encryption", "Role-based access", "Audit logs", "GDPR compliance"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reporting",
      description: "Generate and distribute reports automatically with scheduled delivery and custom formats.",
      benefits: ["Scheduled reports", "Email delivery", "PDF/Excel export", "Custom templates"]
    }
  ];

const pricingPlans = [
    { name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "10 custom dashboards",
        "Real-time analytics",
        "Basic AI insights",
        "Email support",
        "5GB data storage"
      ],
      popular: false },
    { name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing companies with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Unlimited dashboards",
        "Advanced AI insights",
        "Custom integrations",
        "Priority support",
        "50GB data storage",
        "API access",
        "White-label options"
      ],
      popular: true },
    { name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited data sources",
        "Unlimited dashboards",
        "Full AI suite",
        "Custom development",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Advanced security",
        "On-premise deployment"
      ],
      popular: false }
  ];

const testimonials = [
    { name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "The AI Analytics Dashboard Pro has revolutionized how we analyze our data. The predictive insights have helped us increase revenue by 35%.",
      rating: 5 },
    { name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "Data Director",
      content: "The real-time analytics and custom dashboards have given us unprecedented visibility into our business operations.",
      rating: 5 },
    { name: "Emily Rodriguez",
      company: "GrowthTech",
      role: "VP of Analytics",
      content: "The AI-powered insights have helped us identify opportunities we never knew existed. ROI was achieved within 2 months.",
      rating: 5 }
  ];
  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time analytics, predictive modeling, and custom dashboards for businesses of all sizes." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards, machine learning" />
        <meta property="og:title" content="AI Analytics Dashboard Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered analytics platform with real-time insights and predictive modeling" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics-dashboard-pro" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        { /* Animated Background */ }
        
        <div className="absolute inset-0">
          
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        { /* Grid Pattern */ }
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="h-full w-full"></div>
        </div>
        <main className="relative z-10">
          { /* Hero Section */ }
          <section className="relative py-20 overflow-hidden">
            
        <div className="container mx-auto px-4">
              <div className={ `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Analytics Platform
                </div>
                
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Analytics Dashboard Pro
                  </span>
                </h1>
                
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your data into actionable insights with our advanced AI-powered analytics platform. 
                  Real-time dashboards, predictive modeling, and intelligent automation for modern businesses.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started Today
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          { /* Features Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful Features
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to turn your data into business intelligence and actionable insights.
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { features.map((feature, index) => (
                  <div 
                    key={index } 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      { feature.title }
                    </h3>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      { feature.description }
                    </p>
                    
        <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Simple Pricing
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your business needs. All plans include our core AI analytics features.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className={ `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40' }`}
                  >
                    { plan.popular && (
                      
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    ) }
                    
        <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                      
          <p className="text-gray-300 mb-4">{ plan.description }</p>
                      
        <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{ plan.price }</span>
                        <span className="text-gray-400 ml-2">/{ plan.period }</span>
                      </div>
                    </div>
                    
        <div className="space-y-4 mb-8">
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          { feature }
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={ `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Our Clients Say
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join hundreds of companies that have transformed their business with our AI analytics platform.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8">
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    
        <div className="flex items-center mb-4">
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{ testimonial.content }&rdquo;
                    </p>
                    <div>
                      
        <div className="font-semibold text-white">{ testimonial.name }</div>
                      
        <div className="text-cyan-400">{ testimonial.role }</div>
                      
        <div className="text-gray-400 text-sm">{ testimonial.company }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* CTA Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Data?
                </h2>
                
          <p className="text-xl text-gray-300 mb-8">
                  Start your journey with AI-powered analytics today. Get a free consultation and see how we can help your business grow.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default AiAnalyticsDashboardProPage;