import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, BarChart3, Users, Target, Globe, ArrowRight, Star, CheckCircle, Video, MessageSquare, TrendingUp, Database, Eye, Award, Zap } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: "AI Video Generation",
      description: "Create professional videos in minutes with AI-powered script generation, voice synthesis, and smart editing",
      icon: <Video className="w-8 h-8" />,
      price: "From $29/month",
      features: ["AI Script Writing", "Voice Synthesis", "Auto Editing", "Multiple Formats"],
      href: "/ai-video-generation",
      popular: true
    },
    {
      title: "AI Content Generation",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $19/month",
      features: ["Blog Writing", "Social Media", "Email Campaigns", "SEO Optimization"],
      href: "/ai-content-generation",
      popular: false
    },
    {
      title: "AI Analytics Pro",
      description: "Advanced analytics and insights powered by machine learning for data-driven decisions",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $49/month",
      features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards", "Data Visualization"],
      href: "/ai-analytics",
      popular: true
    },
    {
      title: "AI Automation Suite",
      description: "Automate repetitive tasks and workflows with intelligent AI-powered automation",
      icon: <Zap className="w-8 h-8" />,
      price: "From $39/month",
      features: ["Workflow Automation", "Task Scheduling", "Process Optimization", "Integration APIs"],
      href: "/ai-automation",
      popular: false
    },
    {
      title: "AI Customer Support",
      description: "Intelligent chatbots and customer service solutions powered by advanced AI",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $25/month",
      features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
      href: "/ai-customer-support",
      popular: true
    },
    {
      title: "AI Security Solutions",
      description: "Protect your business with AI-powered security monitoring and threat detection",
      icon: <Shield className="w-8 h-8" />,
      price: "From $59/month",
      features: ["Threat Detection", "Anomaly Monitoring", "Automated Response", "Compliance Reporting"],
      href: "/ai-cybersecurity",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion's AI services transformed our operations. The automation capabilities saved us 40% in operational costs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CTO",
      content: "The AI analytics platform provided insights we never had before. It's like having a data scientist on our team.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GrowthCorp",
      role: "Operations Manager",
      content: "The workflow automation tools streamlined our processes and improved efficiency by 60%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including video generation, content creation, analytics, automation, and more. Transform your business with AI." />
      </Helmet>
      <EnhancedSEO />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services That Transform Businesses
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI services designed to automate, optimize, 
            and revolutionize your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our AI Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-colors ${
                  service.popular ? 'ring-2 ring-purple-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;