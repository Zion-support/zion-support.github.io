import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIServicesPage = () => {
  const aiServices = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced analytics platform with real-time insights and predictive modeling capabilities.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-analytics-dashboard-pro',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration']
    },
    {
      title: 'AI Cybersecurity Suite Pro',
      description: 'Comprehensive cybersecurity solution powered by artificial intelligence and machine learning.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      link: '/ai-cybersecurity-suite-pro',
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring']
    },
    {
      title: 'AI Content Generation Pro',
      description: 'AI-powered content creation platform for marketing, social media, and business communications.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/ai-content-generation-pro',
      features: ['Content Creation', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Matching']
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot solution for 24/7 customer support and engagement.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      link: '/ai-customer-support-chatbot',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Sentiment Analysis', 'Escalation Management']
    },
    {
      title: 'AI Code Assistant Pro',
      description: 'AI-powered coding assistant for developers with code generation and optimization capabilities.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      link: '/ai-code-assistant-pro',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Documentation']
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Advanced business intelligence platform with AI-driven insights and recommendations.',
      icon: <Award className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-business-intelligence-pro',
      features: ['Data Visualization', 'Trend Analysis', 'Forecasting', 'Custom Reports']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 300%',
    'Reduce operational costs by 50%',
    'Improve accuracy by 95%',
    'Scale seamlessly with your business',
    '24/7 monitoring and support',
    'Easy integration with existing systems'
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Cloud className="w-6 h-6" /> },
    { number: '50+', label: 'Industries Served', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI consulting"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to natural language processing, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI services designed to solve complex business challenges and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <Link to={service.link} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI solutions are designed to deliver measurable results that transform your business operations.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to harness the power of AI for your business? Contact our experts for a personalized consultation.
              </p>
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Contact Us
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Contact Us Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;