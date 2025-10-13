import React from 'react';
import { BarChart3, TrendingUp, Brain, Target, Zap, CheckCircle, ArrowRight, PieChart, LineChart, Activity, Users, DollarSign, Globe, Clock, Award, Star, Database, Eye, Settings } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Helmet } from 'react-helmet-async';


const ZionAiBusinessIntelligencePro = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  
  const pricingPlans = [
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Perfect for growing businesses with advanced analytics needs",
      features: [
        "Up to 10 data sources",
        "AI-powered insights",
        "Real-time dashboards",
        "Basic predictive analytics",
        "Standard visualizations",
        "Email support",
        "5 user licenses",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "Comprehensive BI solution for large organizations",
      features: [
        "Up to 50 data sources",
        "Advanced AI analytics",
        "Custom dashboards",
        "Full predictive analytics",
        "Advanced visualizations",
        "Priority support",
        "25 user licenses",
        "90-day data retention",
        "API access",
        "Custom integrations",
        "Dedicated analyst"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise Plus",
      price: "$1,299",
      period: "/month",
      description: "Maximum analytics power for enterprise organizations",
      features: [
        "Unlimited data sources",
        "AI-powered insights engine",
        "White-label dashboards",
        "Custom AI models",
        "Unlimited visualizations",
        "24/7 phone support",
        "Unlimited user licenses",
        "Unlimited data retention",
        "Full API access",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Data Integration",
      description: "Connect and integrate data from 100+ sources including databases, cloud services, and APIs",
      icon: <Database className="w-8 h-8" />,
      features: ["100+ connectors", "Real-time sync", "Data transformation", "Quality monitoring"]
    },
    {
      title: "Advanced Visualizations",
      description: "Create stunning, interactive dashboards and reports with drag-and-drop simplicity",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["50+ chart types", "Interactive dashboards", "Mobile responsive", "Custom themes"]
    },
    {
      title: "AI-Powered Forecasting",
      description: "Predict future trends and outcomes using machine learning and statistical models",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Time series forecasting", "Anomaly detection", "Scenario planning", "Confidence intervals"]
    },
    {
      title: "Natural Language Processing",
      description: "Ask questions about your data in plain English and get instant, intelligent answers",
      icon: <Brain className="w-8 h-8" />,
      features: ["Voice queries", "Smart suggestions", "Auto-generated insights", "Multi-language support"]
    },
    {
      title: "Collaborative Analytics",
      description: "Share insights and collaborate with team members through comments, annotations, and alerts",
      icon: <Users className="w-8 h-8" />,
      features: ["Team collaboration", "Comment system", "Alert management", "Role-based access"]
    },
    {
      title: "Mobile Analytics",
      description: "Access your analytics anywhere with native mobile apps and responsive web interface",
      icon: <Globe className="w-8 h-8" />,
      features: ["Native mobile apps", "Offline access", "Push notifications", "Touch-optimized"]
    }
  ];

  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Zion AI Business Intelligence Pro - AI-Powered Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with Zion AI Business Intelligence Pro. AI-powered analytics, predictive modeling, and real-time dashboards for enterprise organizations." />
        <meta name="keywords" content="business intelligence, AI analytics, data visualization, predictive analytics, business intelligence platform, data insights, enterprise analytics" />
        <link rel="canonical" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <BarChart3 className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Business Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion AI Business Intelligence Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with AI-powered analytics, predictive modeling, and real-time dashboards. 
            Make smarter decisions faster with enterprise-grade business intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform provides comprehensive business intelligence capabilities that adapt to your data and business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform raw data into actionable business insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature.title}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Analytics Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the analytics plan that scales with your business intelligence needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature.title}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using Zion AI Business Intelligence Pro to drive data-driven decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
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
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Data Into Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of organizations using AI-powered business intelligence to make smarter, faster decisions that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                >
                Contact Sales
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAiBusinessIntelligencePro;