'use client';
import React, { useState, useEffect } from 'react';
import { BarChart, TrendingUp, PieChart, Target, CheckCircle, Star, ArrowRight, Clock, Shield, DollarSign, Users, Brain, Database, Zap } from 'lucide-react';

const AIBusinessIntelligencePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your data to uncover hidden patterns and opportunities.",
      benefit: "Discover 300% more insights"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with live data updates and customizable visualizations for all stakeholders.",
      benefit: "Make data-driven decisions instantly"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "AI predicts future trends, customer behavior, and market changes with 95% accuracy.",
      benefit: "Stay ahead of the competition"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Tracking",
      description: "Monitor KPIs and business objectives with intelligent alerts and performance recommendations.",
      benefit: "Achieve goals 50% faster"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Integration",
      description: "Connect 100+ data sources including CRM, ERP, social media, and web analytics.",
      benefit: "Unified view of all data"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with AI-powered insights and recommendations.",
      benefit: "Save 25+ hours per week"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Growth",
      value: "40%",
      description: "Average increase in revenue"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      value: "30%",
      description: "Reduction in operational costs"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Achievement",
      value: "85%",
      description: "Goals achieved on time"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Savings",
      value: "25+",
      description: "Hours saved per week"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic AI insights",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "5 user accounts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 data sources",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Real-time reports",
        "25 user accounts",
        "Predictive analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Advanced AI automation",
        "White-label dashboards",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited users",
        "Advanced security",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "Retail Corporation",
      role: "CEO",
      content: "AI Business Intelligence increased our revenue by 40% and reduced costs by 30%. The predictive analytics helped us make better decisions.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Manufacturing Co.",
      role: "Operations Director",
      content: "The real-time dashboards and automated reporting saved us 25+ hours per week. Our team can now focus on strategic initiatives.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "Data Analyst",
      content: "The AI-powered insights uncovered opportunities we never knew existed. Our goal achievement rate increased to 85%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Data into Strategic Advantage
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionize your business with our AI-powered intelligence platform. 
              Increase revenue by 40%, reduce costs by 30%, and achieve 85% of your goals 
              with advanced analytics, predictive insights, and automated reporting.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{benefit.title}</div>
                  <div className="text-gray-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Business Intelligence to gain competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligencePage;