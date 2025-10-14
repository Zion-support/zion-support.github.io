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
      price: "From $39/month",
      features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards", "Automated Reports"],
      href: "/ai-analytics",
      popular: true
    },
    {
      title: "AI Customer Support",
      description: "Intelligent chatbots and customer service automation for 24/7 support",
      icon: <Users className="w-8 h-8" />,
      price: "From $24/month",
      features: ["Smart Chatbots", "Ticket Routing", "Sentiment Analysis", "Multi-language Support"],
      href: "/ai-customer-support",
      popular: false
    },
    {
      title: "AI Cybersecurity",
      description: "Advanced threat detection and security automation powered by AI",
      icon: <Shield className="w-8 h-8" />,
      price: "From $49/month",
      features: ["Threat Detection", "Automated Response", "Risk Assessment", "Compliance Monitoring"],
      href: "/ai-cybersecurity",
      popular: false
    },
    {
      title: "AI Workflow Automation",
      description: "Automate complex business processes with intelligent workflow management",
      icon: <Target className="w-8 h-8" />,
      price: "From $34/month",
      features: ["Process Automation", "Smart Routing", "Task Management", "Performance Analytics"],
      href: "/ai-workflow-automation",
      popular: false
    }
  ];

  const features = [
    {
      title: "Advanced AI Models",
      description: "Powered by state-of-the-art machine learning algorithms and neural networks",
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards",
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive analytics and reporting for data-driven decision making",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Global Scale",
      description: "Deploy AI solutions across multiple regions with 99.9% uptime",
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing systems and workflows",
      icon: <Zap className="w-6 h-6 text-orange-400" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and expert guidance",
      icon: <Users className="w-6 h-6 text-pink-400" />
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "10,000+", label: "Businesses Transformed", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50%", label: "Average Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
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
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced AI Solutions for Business"
        description="Discover our comprehensive AI services including video generation, content creation, analytics, cybersecurity, and workflow automation. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, business AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />

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
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
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
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-cyan-400">{service.icon}</div>
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
                <Link
                  to={service.href}
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
                  {feature.icon}
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
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
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
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
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

export default AIServicesPage;