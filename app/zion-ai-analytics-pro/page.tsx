import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ZionAIAnalyticsProPage: React.FC = () => {
  const features = [
    {
      title: "Real-time Analytics Dashboard",
      description: "Monitor your business performance with live data visualization and instant insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live data updates", "Custom dashboards", "Mobile responsive", "Export capabilities"]
    },
    {
      title: "AI-Powered Forecasting",
      description: "Predict future trends and outcomes using advanced machine learning algorithms.",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Predictive modeling", "Trend analysis", "Risk assessment", "Scenario planning"]
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance monitoring.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Data encryption", "Access controls", "Audit logs", "GDPR compliance"]
    },
    {
      title: "Automated Insights",
      description: "Get intelligent recommendations and automated reports without manual analysis.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Smart alerts", "Auto reports", "Anomaly detection", "Performance optimization"]
    }
  ];

const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Email support",
        "Standard reports",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 data sources",
        "Advanced dashboards",
        "Priority support",
        "Custom reports",
        "Up to 10 user accounts",
        "API access",
        "Data export"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "24/7 support",
        "White-label reports",
        "Unlimited users",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics Pro transformed our data analysis. We've seen a 40% improvement in decision-making speed and accuracy.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "DataCorp Solutions",
      role: "CTO",
      content: "The AI-powered forecasting is incredibly accurate. It helped us predict market trends 3 months in advance.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Analytics",
      role: "Data Director",
      content: "The automated insights save us 20 hours per week. The ROI was evident within the first month.",
      rating: 5,
      avatar: "ER"
    }
  ];

const integrations = [
    { name: "Google Analytics", logo: "GA" },
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" },
    { name: "Stripe", logo: "ST" },
    { name: "Shopify", logo: "SH" },
    { name: "MySQL", logo: "MY" },
    { name: "PostgreSQL", logo: "PG" },
    { name: "MongoDB", logo: "MG" }
  ];
  return (
    <>
      <Helmet>
        <title>Zion AI Analytics Pro - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion AI Analytics Pro. Real-time dashboards, AI-powered forecasting, and automated insights. Start your free trial today!" />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards, machine learning, data science" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-analytics-pro" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          
        <div className="absolute inset-0 overflow-hidden">
            
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
        <div className="max-w-7xl mx-auto text-center relative z-10">
            
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8 neon-border">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Analytics Platform 2024</span>
            </div>
            
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="holographic-text">
                Zion AI Analytics Pro
              </span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with advanced AI-powered analytics. Get real-time insights, predictive forecasting, 
              and automated recommendations that drive growth and optimize performance.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group cyber-button"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            {/* Key Stats */}
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              
        <div className="text-center group data-stream">
                
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                
        <div className="text-xl md:text-2xl font-bold text-white mb-2 holographic-text">40%</div>
                
        <div className="text-gray-300 text-sm">Faster Decisions</div>
              </div>
              
        <div className="text-center group data-stream">
                
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                
        <div className="text-xl md:text-2xl font-bold text-white mb-2 holographic-text">95%</div>
                
        <div className="text-gray-300 text-sm">Forecast Accuracy</div>
              </div>
              
        <div className="text-center group data-stream">
                
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                
        <div className="text-xl md:text-2xl font-bold text-white mb-2 holographic-text">Real-time</div>
                
        <div className="text-gray-300 text-sm">Data Updates</div>
              </div>
              
        <div className="text-center group data-stream">
                
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                
        <div className="text-xl md:text-2xl font-bold text-white mb-2 holographic-text">10,000+</div>
                
        <div className="text-gray-300 text-sm">Happy Users</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Analytics
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform raw data into actionable insights and drive business growth.
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-border"
                >
                  
        <div className="flex items-center mb-6">
                    
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  
          <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
        <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business. Start with a free trial.
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 neon-border' 
                      : 'border-white/20 hover:border-cyan-500/40'
                  }`}
                >
                  {plan.popular && (
                    
        <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
        <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
          <p className="text-gray-300 mb-4">{plan.description}</p>
                    
        <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 group flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 cyber-button'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Analytics Pro
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-border"
                >
                  
        <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
          <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
        <div className="flex items-center">
                    
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and data sources. We support 100+ integrations.
              </p>
            </div>
            
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10 text-center"
                >
                  
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-2 group-hover:scale-110 transition-transform">
                    {integration.logo}
                  </div>
                  
        <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-4xl mx-auto text-center">
            
        <div className="bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 neon-border">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Analytics?
              </h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Zion AI Analytics Pro to drive growth and make data-driven decisions.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group cyber-button"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  Schedule Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ZionAIAnalyticsProPage;