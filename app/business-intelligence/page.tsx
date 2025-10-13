'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, PieChart, Target, Database, ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';

export default function BusinessIntelligencePage() {
  const biFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with predictive modeling and statistical insights.",
      features: ["Predictive Analytics", "Statistical Analysis", "Trend Analysis", "Correlation Studies"]
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Interactive dashboards and charts that make complex data easy to understand.",
      features: ["Interactive Dashboards", "Custom Charts", "Real-time Updates", "Mobile Responsive"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Connect and consolidate data from multiple sources for unified insights.",
      features: ["Multi-source Integration", "Data Cleansing", "ETL Processes", "Real-time Sync"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "KPI Tracking",
      description: "Monitor key performance indicators and business metrics in real-time.",
      features: ["Custom KPIs", "Goal Tracking", "Performance Alerts", "Benchmarking"]
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Faster decision making",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "25%",
      description: "Revenue increase",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: "60%",
      description: "Time saved on reporting",
      icon: <Users className="w-6 h-6" />
    },
    {
      metric: "95%",
      description: "Data accuracy",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Essential BI tools for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "Up to 10 users",
        "1 year data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Advanced BI for growing businesses",
      features: [
        "Unlimited data sources",
        "Advanced analytics",
        "Custom dashboards",
        "Priority support",
        "Up to 50 users",
        "3 years data retention",
        "API access",
        "Advanced visualizations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Complete BI solution for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated analyst",
        "24/7 phone support",
        "Unlimited users",
        "Unlimited data retention",
        "White-label options",
        "On-premise deployment",
        "Custom development"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Retail",
      title: "Sales Performance Analytics",
      description: "Track sales trends, customer behavior, and inventory optimization across all channels.",
      results: "Increased sales by 30% and reduced inventory costs by 20%"
    },
    {
      industry: "Healthcare",
      title: "Patient Outcome Analysis",
      description: "Analyze patient data to improve treatment outcomes and operational efficiency.",
      results: "Improved patient satisfaction by 45% and reduced readmission rates"
    },
    {
      industry: "Manufacturing",
      title: "Production Optimization",
      description: "Monitor production metrics and identify bottlenecks for process improvement.",
      results: "Increased production efficiency by 35% and reduced waste by 25%"
    },
    {
      industry: "Finance",
      title: "Risk Assessment Dashboard",
      description: "Real-time risk monitoring and compliance tracking for financial institutions.",
      results: "Reduced risk exposure by 50% and improved compliance scores"
    }
  ];

  const testimonials = [
    {
      name: "Lisa Wang",
      role: "VP Analytics, RetailCorp",
      content: "The BI platform has transformed how we make decisions. We can now see trends in real-time and respond quickly to market changes.",
      rating: 5
    },
    {
      name: "James Rodriguez",
      role: "Data Director, HealthTech",
      content: "The data integration capabilities are outstanding. We can now analyze patient data from multiple systems in one unified view.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      role: "CFO, Manufacturing Inc",
      content: "The KPI tracking and reporting features have given us incredible visibility into our operations. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Intelligence - Data-Driven Insights | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our comprehensive business intelligence platform. Advanced analytics, dashboards, and reporting." />
        <meta name="keywords" content="business intelligence, data analytics, dashboards, KPI tracking, data visualization, business insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                Advanced Business Intelligence Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Business Intelligence
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your data into actionable insights with our comprehensive business intelligence platform. 
                Make data-driven decisions with advanced analytics, interactive dashboards, and real-time reporting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  Start Free Trial
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proven <span className="text-green-400">Business Impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our business intelligence solutions deliver measurable improvements across all business metrics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                      <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {benefit.icon}
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                      <div className="text-gray-300">{benefit.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="text-emerald-400">BI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into actionable business insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {biFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                    <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Industry <span className="text-green-400">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses across industries are leveraging our BI platform for growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {useCase.industry}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-300 font-medium">📈 {useCase.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Flexible <span className="text-green-400">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the BI plan that fits your data analysis needs and budget.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 h-full ${
                    plan.popular ? 'border-green-500/50' : 'border-slate-700/50'
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700' 
                        : 'border border-slate-600 text-white hover:bg-slate-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-green-400">Data Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what business intelligence professionals say about our platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-green-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make <span className="text-green-400">Data-Driven Decisions</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with actionable insights from your data. Start your BI journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Start Free Trial
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-green-400">kleber@ziontechgroup.com</a> | 
              📞 <a href="tel:+13024640950" className="hover:text-green-400">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}