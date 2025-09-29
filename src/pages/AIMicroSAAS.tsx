import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Bot,
  BarChart3,
  Clock,
  DollarSign,
  Users,
  Shield,
  TrendingUp,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AIMicroSAAS(): React.JSX.Element {
  const [selectedService, setSelectedService] = useState(0);

  const microSAASServices = [
    {
      title: "AI Workflow Automation",
      description: "Transform business operations with intelligent process automation that learns and adapts to your workflows.",
      icon: Zap,
      features: [
        "Visual Process Designer",
        "Smart Trigger Detection",
        "Performance Monitoring",
        "Custom Integration APIs",
        "Real-time Analytics",
        "Auto-scaling Workflows"
      ],
      benefits: [
        "Reduce manual tasks by 80%",
        "Improve efficiency by 60%",
        "Cut operational costs by 40%"
      ],
      pricing: "$99/month",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      route: "/services/ai-workflow-automation"
    },
    {
      title: "AI Virtual Assistant",
      description: "24/7 intelligent customer support and business operations with natural language understanding.",
      icon: Bot,
      features: [
        "Natural Language Processing",
        "Multi-channel Support",
        "24/7 Availability",
        "Personalized Interactions",
        "Knowledge Base Integration",
        "Advanced Analytics"
      ],
      benefits: [
        "Reduce response time by 90%",
        "Increase conversions by 40%",
        "Save 30+ hours/week"
      ],
      pricing: "$79/month",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      route: "/services/ai-virtual-assistant"
    },
    {
      title: "AI Data Analytics",
      description: "Transform data into actionable insights with machine learning and predictive analytics.",
      icon: BarChart3,
      features: [
        "Predictive Analytics",
        "Real-time Dashboards",
        "Data Integration",
        "Automated Insights",
        "Custom Reports",
        "Anomaly Detection"
      ],
      benefits: [
        "Improve decisions by 60%",
        "Increase retention by 45%",
        "Reduce risks by 70%"
      ],
      pricing: "$149/month",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      route: "/services/ai-data-analytics"
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Active Users" },
    { icon: TrendingUp, value: "300%", label: "Efficiency Gain" },
    { icon: Star, value: "4.9/5", label: "User Rating" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      quote: "The AI Workflow Automation saved us 20 hours per week. It's like having a digital assistant that never sleeps!",
      author: "Sarah Johnson",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "Our customer satisfaction increased by 45% since implementing the AI Virtual Assistant. Amazing results!",
      author: "Michael Chen",
      company: "InnovateLab",
      rating: 5
    },
    {
      quote: "The AI Data Analytics platform gave us insights we never knew existed. Game-changing for our business!",
      author: "Emily Rodriguez",
      company: "FinanceFirst",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Micro SAAS Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered micro SAAS services including workflow automation, virtual assistants, and data analytics. Transform your business today."
        />
        <meta property="og:title" content="AI-Powered Micro SAAS Services - Zion Tech Group" />
        <meta
          property="og:description"
          content="Revolutionary AI-powered micro SAAS services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-micro-saas" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Micro SAAS Services - Zion Tech Group" />
        <meta
          name="twitter:description"
          content="Revolutionary AI-powered micro SAAS services"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
              <Sparkles className="w-4 h-4 mr-2" />
              NEW: AI-Powered Micro SAAS Services 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary{" "}
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                AI Micro SAAS
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of business automation with our cutting-edge AI-powered micro SAAS services. 
              Transform your operations, boost productivity, and drive unprecedented growth.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {microSAASServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  selectedService === index ? "ring-2 ring-zion-cyan" : ""
                }`}
                onClick={() => setSelectedService(index)}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-zion-slate-light"
                      >
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-zion-slate-light"
                      >
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-zion-slate-light">Starting from</div>
                    <div className="text-2xl font-bold text-zion-cyan">{service.pricing}</div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-zion-slate-light">
                Join thousands of satisfied customers who have transformed their businesses with our AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-zion-slate">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-zion-slate-light mb-8 text-lg">
                Start your AI transformation journey today. Choose from our revolutionary micro SAAS services and experience unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Target className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}