import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Database, Smartphone, Cpu, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI writing tools.',
      features: ['Blog Posts', 'Social Media', 'Product Descriptions', 'Email Campaigns'],
      pricing: '$29/month',
      link: '/ai-content-generator'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
      title: 'AI Chatbot Builder',
      description: 'Build intelligent chatbots that understand and respond to customer queries.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      pricing: '$49/month',
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-emerald-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Get actionable insights from your data with AI-powered analytics.',
      features: ['Predictive Analytics', 'Real-time Monitoring', 'Custom Reports', 'Data Visualization'],
      pricing: '$79/month',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Mail className="w-12 h-12 text-orange-400" />,
      title: 'AI Email Assistant',
      description: 'Automate email management and improve response times with AI.',
      features: ['Smart Categorization', 'Auto Responses', 'Sentiment Analysis', 'Priority Scoring'],
      pricing: '$39/month',
      link: '/ai-email-assistant'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-400" />,
      title: 'AI Voice Assistant',
      description: 'Create voice-enabled applications with natural language understanding.',
      features: ['Speech Recognition', 'Text-to-Speech', 'Voice Commands', 'Multi-platform Support'],
      pricing: '$59/month',
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-400" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent automation.',
      features: ['Workflow Automation', 'Process Optimization', 'Error Detection', 'Performance Monitoring'],
      pricing: '$99/month',
      link: '/ai-automation'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Rapid Implementation',
      description: 'Get up and running in days, not months, with our pre-built AI solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible plans and unlimited usage.'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, content generation, analytics, automation, AI consulting" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Transform your business with our comprehensive suite of AI services. From content generation to intelligent automation, 
              we provide cutting-edge artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose from our comprehensive suite of AI-powered services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {aiServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing}</span>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern AI technology and designed for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Let's discuss how our AI services can help you achieve your goals. Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View Micro SAAS
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Call: <a href="tel:+13024640950" className="font-semibold hover:text-white transition-colors">+1 302 464 0950</a></p>
                  <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:text-white transition-colors">kleber@ziontechgroup.com</a></p>
                  <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}