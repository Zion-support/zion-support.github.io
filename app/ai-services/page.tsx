<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const AiServicesPage = () => {
  const aiServices = [
    {
      title: "AI Video Generation",
      description: "Create professional videos with AI-powered tools",
      icon: "🎥",
      price: "$2,500/month",
      features: ["Automated video creation", "Voice synthesis", "Scene generation", "Multi-language support"],
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      title: "AI Content Creation",
      description: "Generate high-quality content at scale",
      icon: "✍️",
      price: "$1,800/month",
      features: ["Blog posts", "Social media content", "Email campaigns", "SEO optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Analytics",
      description: "Advanced data analysis and insights",
      icon: "📊",
      price: "$2,200/month",
      features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "Data visualization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI security",
      icon: "🔒",
      price: "$3,000/month",
      features: ["Threat detection", "Automated response", "Security monitoring", "Compliance reporting"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline business processes",
      icon: "⚙️",
      price: "$1,500/month",
      features: ["Process automation", "Task scheduling", "Integration management", "Performance monitoring"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis and data extraction",
      icon: "📄",
      price: "$1,200/month",
      features: ["OCR Processing", "Data Extraction", "Document Classification", "Form Recognition"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  const features = [
    {
      title: "Expert AI Team",
      description: "Our team of AI specialists brings years of experience in machine learning and artificial intelligence.",
      icon: "👥"
    },
    {
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs and objectives.",
      icon: "🎯"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your AI systems run smoothly and efficiently.",
      icon: "🕐"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechCorp",
      content: "Zion Tech Group's AI services transformed our business operations. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "CTO, InnovateLab",
      content: "The AI analytics platform provided insights we never knew existed. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Director, DataFlow",
      content: "Professional, reliable, and innovative. Their AI solutions are cutting-edge and effective.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions for Business</title>
        <meta name="description" content="Discover our comprehensive AI services including video generation, content creation, analytics, cybersecurity, and workflow automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, business AI solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI services. 
            From content generation to cybersecurity, we provide intelligent solutions 
            that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                <Link to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your AI journey today and discover the power of intelligent automation and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;
=======
import React from 'react':;
import { Helmet } from 'react-helmet-async':;
import { Brain, Zap, Shield, Cloud, Users, Award, Star } from 'lucide-react':
'use client':;
import React from 'react':;
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone } from 'lucide-react':;
import Navigation from '../components/Navigation':;
import Footer from '../components/Footer':;
import SEOOptimizer from '../components/SEOOptimizer':;
import PerformanceOptimizer from '../components/PerformanceOptimizer':;
import AccessibilityEnhancer from '../components/AccessibilityEnhancer':;
import SecurityEnhancer from '../components/SecurityEnhancer':;
import Analytics from '../components/Analytics':
;
const AIServicesPage: React.FC = () =>{;
const services = [
    {;
title: "AI Consulting",;
description: "Strategic AI consulting to help you identify opportunities and develop AI roadmaps.",;
color: "from-purple-500 to-pink-500" },
    {;
icon: BarChart3,;
title: "AI Analytics",;
description: "Advanced analytics solutions powered by AI to extract insights from your data.",;
color: "from-blue-500 to-cyan-500" },
    {;
icon: Zap,;
title: "AI Automation",;
description: "Automate repetitive tasks and processes with intelligent AI solutions.",;
color: "from-green-500 to-emerald-500" },
    {;
icon: FileText,;
title: "AI Content Generation",;
description: "Generate high-quality content at scale using advanced AI models.",;
color: "from-orange-500 to-red-500" },
    {;
icon: MessageSquare,;
title: "AI Chatbots",;
description: "Intelligent chatbots and virtual assistants for customer support.",;
icon: MessageCircle,;
title: "AI Customer Service",;
description: "Intelligent chatbots and customer service solutions powered by AI.",;
color: "from-indigo-500 to-purple-500" },
    { icon: Shield,;
title: "AI Security",;
description: "AI-powered security solutions to protect your business from threats.",;
color: 'from-red-500 to-pink-500':;
description: "AI-powered security solutions to protect your business and data.",;
color: "from-cyan-500 to-blue-500" }
  ];
const features = [
    {;
title: "Custom AI Solutions",;
description: "Tailored AI implementations designed specifically for your business needs.",;
icon: "🤖" },
    {;
title: "Machine Learning Models",;
description: "Advanced ML models trained on your data for optimal performance.",;
icon: "🧠" },
    {;
title: "Real-time Processing",;
description: "High-performance AI systems that process data in real-time.",;
icon: "⚡" },
    { title: "Scalable Architecture",;
description: "AI solutions that grow with your business and handle increasing loads.",;
icon: '📈':;
icon: Shield,';
title: "AI Security",';':;
description: "AI-powered security solutions to protect your business and data.",';':;
color: 'from-cyan-500 to-blue-500''; }
    }
  ];
  const testimonials = [{ name: "Dr. Sarah Johnson",;
company: "MedTech Solutions",;
role: "CTO",':;
content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",':;
rating: 5; }
    },
    { name: "Michael Chen",;
company: "E-commerce Plus",;
role: "CEO",':;
content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",':;
rating: 5; }
    },
    { name: "Emily Rodriguez",;
company: "FinanceFlow",;
role: "Head of Analytics",;
content: "Their AI analytics platform has given us insights we never had before. Our decision-making process is now data-driven and highly effective.",;
rating: 5; }
    }
  ];
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>AI Services - Zion Tech Group</title><meta name="description" content="Comprehensive AI services and solutions for modern businesses. Transform your operations with cutting-edge artificial intelligence." /></Helmet><div className="relative z-10">{ /* Hero Section */ }
        <section className="py-20 px-4"><div className="max-w-6xl mx-auto text-center"><h1 className="text-5xl font-bold text-white mb-6">AI Services
            </h1><p className="text-xl text-gray-300 max-w-3xl mx-auto">":;
Transform your business with our comprehensive AI services designed to drive innovation and growth.
            </p></div></section>{ /* Services Grid */ }
        <section className="py-20 px-4"><div className="max-w-6xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) =>(
                <div:;
key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300""><div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>``
                    <service.icon className="w-6 h-6 text-white" />"
                  </div><h3 className="text-xl font-semibold text-white mb-3">{ service.title }
                  </h3><p className="text-gray-300 mb-4">{ service.description }
                  </p><button className="flex items-center text-white hover:text-gray-300 transition-colors">":;
Learn More
                    <Right className="w-4 h-4 ml-2" />"
                  </button></div>))}

      <div className="container mx-auto px-4 py-16"><div className="text-center mb-16"><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Services
          </h1><p className="text-xl text-gray-300 max-w-3xl mx-auto">Transform your business with our comprehensive suite of AI-powered solutions. ;
From analytics to automation, we provide cutting-edge technology to drive your success.
          </p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) =>(
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"><div className="flex items-center mb-4">{service.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3></div><p className="text-gray-300 mb-4">{service.description}</p><ul className="space-y-2">{service.features.map((feature, featureIndex) =>(
                  <li key={featureIndex} className="flex items-center text-gray-300"><Star className="w-4 h-4 text-yellow-400 mr-2" />{feature}
                  </li>))}
              </ul></div>))}
        </div><div className="text-center mt-16"><h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2><p className="text-gray-300 mb-8">Contact our AI experts to discuss how we can transform your business with artificial intelligence.
          </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Consultation
            </button><button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors">View All Services
            </button></div>{ /* CTA Section */ }
        <section className="py-20 px-4"><div className="max-w-4xl mx-auto text-center"><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?
            </h2><p className="text-xl text-gray-300 mb-8">":;
Let our AI experts help you unlock the full potential of artificial intelligence.
            </p><div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">":;
Get Started
              </button><button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"><div className="relative z-10 min-h-screen bg-slate-900">{ /* Hero Section */ }
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-7xl mx-auto text-center"><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Services
            </h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">":;
Transform your business with cutting-edge artificial intelligence solutions. ;
From consulting to implementation, we deliver AI that drives real results.
            </p><div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">":;
Get Started
              </button><button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">":;
Learn More
              </button></div></div></section></div></div><FuturisticBackground>;
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
          { /* Hero Section */ }
          <section className="relative py-20 px-4">;
            <div className="max-w-7xl mx-auto text-center">;
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
                AI:
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services:
                </span></h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our comprehensive AI services.;
                From analytics to automation, we provide cutting-edge AI solutions.;
              </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">Get Started:
                  <Right className="w-5 h-5 ml-2 inline" /></button><button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">Learn More:
                </button>;
              </div></div></section>;
          { /* Services Grid */ }
          <section className="py-20 px-4">;
            <div className="max-w-7xl mx-auto">;
              <h2 className="text-4xl font-bold text-white text-center mb-16">;
                Our AI Services:
              </h2>;
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
                { services.map((service, _index) =>( }
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">;
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>;`;`
aria-hidden="true";>;
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />;
                    </div><h3 className="text-lg font-semibold text-white mb-2 text-center">{service.title}</h3>;
                    <p className="text-gray-300 text-sm text-center">{service.description}</p>;
                  </div>))}
              </div></div></section>;
          { /* Testimonials Section */ }
          <section className="py-20 px-4 bg-slate-800/30">;
            <div className="max-w-7xl mx-auto">;
              <h2 className="text-4xl font-bold text-white text-center mb-16">;
                What Our Clients Say:
              </h2>;
              <div className="grid md:grid-cols-3 gap-8">;
                { testimonials.map((testimonial, _index) =>( }
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">;
                    <div className="flex items-center mb-4">;
                      { [...Array(testimonial.rating)].map((_, i) =>( }
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;
                      ))}
                    </div><p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>;
                    <div>;
                      <p className="text-white font-semibold">{testimonial.name}</p>;
                      <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>;
                    </div></div>))}
              </div></div></section>;
          { /* CTA Section */ }
          <section className="py-20 px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Business with AI?;
              </h2><p className="text-xl text-gray-300 mb-8">Join hundreds of companies already using our AI services to drive innovation and growth.;
              </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">Start Your AI Journey:
                  <Right className="w-5 h-5 ml-2 inline" /></button><button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">Schedule Consultation:
                </button>;
              </div></div></section>;
        </div></FuturisticBackground>;
    </>);
};
        { /* Services Grid */ }
        <section className="py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-7xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI Services
            </h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {services.map((service, index) =>(
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">"
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>``
                    <service.icon className="w-6 h-6 text-white" />"
                  </div><h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>"
                  <p className="text-gray-300 mb-4">{service.description}</p>"
                  <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center">":;
Learn More <Right className="w-4 h-4 ml-1" />"
                  </button></div>))
            </div></div></section>{ /* Features Section */ }
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800"><div className="max-w-7xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Services?
            </h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
              {features.map((feature, index) =>(
                <div key={index} className="text-center">"
                  <div className="text-4xl mb-4">{feature.icon}</div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>"
                </div>))
            </div></div></section>{ /* CTA Section */ }
        <section className="py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?
            </h2><p className="text-xl text-gray-300 mb-8">":;
Let's discuss how our AI services can help you achieve your goals.'
            </p><div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">":;
Schedule Consultation
              </button><button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">":;
View Portfolio
              </button></div></div></section></div></>);
export default AiServicesPage:;
export default AiServicesPage;'
        </div></div></div>);
};
;
export default AIServicesPage:;
title: 'Machine Learning Solutions',;
description: 'Custom ML models for predictive analytics and decision-making',;
icon: Brain,;
price: '$1,500/month',;
features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],;
color: 'text-purple-400'
    },
    {;
title: 'Natural Language Processing',;
description: 'Advanced NLP solutions for text analysis and language understanding',;
icon: MessageSquare,;
price: '$1,200/month',;
features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],;
color: 'text-blue-400'
    },
    {;
title: 'Computer Vision',;
description: 'Image and video analysis solutions for object detection and recognition',;
icon: Eye,;
price: '$1,800/month',;
features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],;
color: 'text-green-400'
    },
    {;
title: 'AI Automation',;
description: 'Intelligent process automation with decision-making capabilities',;
icon: Zap,;
price: '$1,400/month',;
features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],;
color: 'text-cyan-400'
    },
    {;
title: 'AI Data Visualization',;
description: 'Transform complex data into interactive visualizations',;
icon: BarChart,;
price: '$1,100/month',;
features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],;
color: 'text-orange-400'
    },
    {;
title: 'AI 3D Generation',;
description: 'Create 3D models and environments with AI technology',;
icon: Box,;
price: '$1,600/month',;
features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],;
color: 'text-pink-400'
    },
    {;
title: 'AI Voice Synthesis',;
description: 'Advanced voice cloning and text-to-speech solutions',;
icon: Mic,;
price: '$1,300/month',;
features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],;
color: 'text-indigo-400'
    },
    {;
title: 'AI Content Generation',;
description: 'Automated content creation for marketing and communication',;
icon: FileText,;
price: '$1,000/month',;
features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],;
color: 'text-yellow-400'
    },
    {;
title: 'AI Predictive Analytics',;
description: 'Advanced forecasting and trend analysis with machine learning',;
icon: TrendingUp,;
price: '$1,700/month',;
features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],;
color: 'text-red-400'
    },
    {;
title: 'AI Recommendation Engine',;
description: 'Personalized recommendation systems for e-commerce and content',;
icon: Target,;
price: '$1,400/month',;
features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'],;
color: 'text-teal-400'
    },
    {;
title: 'AI Fraud Detection',;
description: 'Advanced fraud prevention and security monitoring',;
icon: Shield,;
price: '$1,900/month',;
features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],;
color: 'text-red-500'
    },
    {;
title: 'AI Document Processing',;
description: 'Intelligent document analysis and data extraction',;
icon: Search,;
price: '$1,200/month',;
features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition'],;
color: 'text-gray-400'
    }
  ];
;
return (
    <><SEOOptimizer:;
title="AI Services - Zion Tech Group":;
description="Advanced AI services including machine learning, NLP, computer vision, automation, and more. Transform your business with cutting-edge artificial intelligence solutions.":;
keywords={['AI services', 'machine learning', 'NLP', 'computer vision', 'AI automation', 'predictive analytics', 'AI consulting']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      /><PerformanceOptimizer:;
enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      /><AccessibilityEnhancer:;
enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}><div></div></AccessibilityEnhancer><SecurityEnhancer:;
enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      /><Analytics /><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}
          <section className="text-center mb-16"><h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">AI Services
            </h1><p className="text-xl text-cyan-400 mb-8 font-medium">Advanced Artificial Intelligence Solutions
            </p><p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform your business with our comprehensive AI services. From machine learning to computer vision, ;
we provide cutting-edge artificial intelligence solutions tailored to your specific needs.
            </p></section>{/* Services Grid */}
          <section className="mb-16"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{aiServices.map((service, index) =>(
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300"><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto"><service.icon className="w-8 h-8 text-white" /></div><h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3><p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">{service.description}
                  </p><div className="mb-4"><h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4><ul className="space-y-1">{service.features.map((feature, featureIndex) =>(
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300"><div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>{feature}
                        </li>))}
                    </ul></div><div className="text-center"><div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div><a ;`;`
href="/contact":;
className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}>Get Started`
                    </a></div></article>))}
            </div></section>{/* CTA Section */}
          <section className="text-center"><div className="cyber-card p-8 max-w-4xl mx-auto"><h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business with AI?
              </h2><p className="text-gray-300 mb-6 text-lg">Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions ;
that will revolutionize your business operations and drive unprecedented growth.
              </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a:;
href="/contact":;
className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">Get Free Consultation
                </a><a:;
href="tel:+13024640950";
className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"><Phone className="w-5 h-5" />+1 302 464 0950
                </a></div></div></section></main><Footer /></div></>);
};
;
export default AIServicesPage:
  </div>
  </div>
  </div>
  </div>
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
