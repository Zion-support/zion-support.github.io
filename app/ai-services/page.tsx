import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Brain, MessageSquare, BarChart3, Zap, Shield, Database, Star, Clock, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI-powered content creation with multi-language support, SEO optimization, and brand voice customization.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates', 'Plagiarism detection', 'Real-time collaboration'],
      pricing: 'Starting at $299/month',
      link: '/ai-content-generation-pro',
      popular: true,
      neon: 'neon-glow-cyan'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solutions with natural language processing and seamless human handoff capabilities.',
      features: ['Natural language processing', 'Multi-channel support', 'Human handoff', 'Analytics dashboard', 'Custom training', '24/7 availability'],
      pricing: 'Starting at $199/month',
      link: '/ai-customer-support-chatbot',
      popular: false,
      neon: 'neon-glow-purple'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting capabilities.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Automated reports', 'Custom metrics', 'Data visualization', 'Machine learning insights'],
      pricing: 'Starting at $399/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      neon: 'neon-glow-green'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: 'AI Process Automation',
      description: 'Streamline workflows with intelligent automation that learns and adapts to your business processes.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring', 'Machine learning', 'Scalable solutions'],
      pricing: 'Starting at $499/month',
      link: '/ai-automation',
      popular: true,
      neon: 'neon-glow-yellow'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solutions with threat detection and automated response capabilities.',
      features: ['Threat detection', 'Automated response', 'Behavioral analysis', 'Risk assessment', 'Compliance monitoring', 'Real-time alerts'],
      pricing: 'Starting at $599/month',
      link: '/ai-cybersecurity-suite',
      popular: false,
      neon: 'neon-glow-red'
    },
    {
      icon: <Database className="w-12 h-12 text-blue-400" />,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI-powered analytics and machine learning.',
      features: ['Data processing', 'Pattern recognition', 'Predictive modeling', 'Custom algorithms', 'Real-time insights', 'Data visualization'],
      pricing: 'Starting at $349/month',
      link: '/ai-data-analytics',
      popular: false,
      neon: 'neon-glow-blue'
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6 text-blue-400" /> }
  ]

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, automation, and cybersecurity. Cutting-edge artificial intelligence solutions for modern enterprises." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI content generation, AI chatbots, AI analytics, AI automation, AI cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced <span className="cyber-text">AI Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate processes, generate content, gain intelligent insights, and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="cyber-button text-lg px-8 py-4"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="cyber-button-secondary text-lg px-8 py-4"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="cyber-text">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered services designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className={`cyber-card h-full ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className={`w-16 h-16 ${service.neon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold text-lg mb-4">{service.pricing}</div>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="cyber-text">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are built with cutting-edge technology and designed to deliver measurable business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced AI Technology</h3>
              <p className="text-gray-300">Leverage state-of-the-art machine learning models and neural networks for superior performance.</p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">Our AI solutions have helped businesses achieve 300%+ improvement in efficiency and productivity.</p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with industry standards to protect your data and operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="holographic-border p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI journey today and discover how artificial intelligence can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Get Free AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="cyber-button-secondary text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
