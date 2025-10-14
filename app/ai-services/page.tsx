import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, BarChart3, Shield, FileText, MessageSquare, Settings, TrendingUp, Zap, Users, DollarSign, Globe, Clock, Star, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage = () => {
  const aiServices = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics for data-driven decision making.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data visualization'],
      link: '/ai-analytics-dashboard-pro',
      price: 'From $299/month'
    },
    {
      title: 'AI Cybersecurity Suite Pro',
      description: 'Advanced threat protection with AI-powered detection, automated response, and comprehensive security monitoring.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      features: ['Threat detection', 'Automated response', 'Security monitoring', 'Compliance reporting'],
      link: '/ai-cybersecurity-suite-pro',
      price: 'From $499/month'
    },
    {
      title: 'AI Content Generation Pro',
      description: 'Automated content creation with AI-powered writing, editing, and optimization for all your content needs.',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Content writing', 'SEO optimization', 'Multi-language support', 'Brand voice consistency'],
      link: '/ai-content-generation-pro',
      price: 'From $199/month'
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent customer service with AI-powered chatbots that provide 24/7 support and personalized assistance.',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['24/7 support', 'Natural language processing', 'Multi-channel integration', 'Sentiment analysis'],
      link: '/ai-customer-support-chatbot',
      price: 'From $149/month'
    },
    {
      title: 'AI Code Assistant Pro',
      description: 'AI-powered development tools with intelligent code completion, debugging, and automated testing capabilities.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['Code completion', 'Bug detection', 'Auto-testing', 'Code optimization'],
      link: '/ai-code-assistant-pro',
      price: 'From $399/month'
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Advanced data analytics and business intelligence with AI-powered insights and strategic recommendations.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['Strategic insights', 'Performance metrics', 'Trend analysis', 'ROI optimization'],
      link: '/ai-business-intelligence-pro',
      price: 'From $349/month'
    },
    {
      title: 'AI Automation Platform',
      description: 'Comprehensive workflow automation with AI-powered process optimization and intelligent task management.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: ['Workflow automation', 'Process optimization', 'Task management', 'Integration capabilities'],
      link: '/ai-automation-platform',
      price: 'From $249/month'
    },
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analysis with AI-powered insights, pattern recognition, and predictive modeling capabilities.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      features: ['Data mining', 'Pattern recognition', 'Predictive modeling', 'Statistical analysis'],
      link: '/ai-data-analytics-pro',
      price: 'From $279/month'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Smart marketing campaigns with AI-powered targeting, personalization, and performance optimization.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      features: ['Campaign optimization', 'Audience targeting', 'Personalization', 'Performance tracking'],
      link: '/ai-marketing-automation',
      price: 'From $199/month'
    },
    {
      title: 'AI HR & Recruitment Pro',
      description: 'Intelligent talent management with AI-powered recruitment, employee analytics, and HR automation.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-600 to-indigo-600',
      features: ['Talent acquisition', 'Employee analytics', 'Performance tracking', 'HR automation'],
      link: '/ai-hr-recruitment-pro',
      price: 'From $229/month'
    },
    {
      title: 'AI Financial Analysis',
      description: 'Advanced financial forecasting and analysis with AI-powered insights and risk assessment capabilities.',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-600',
      features: ['Financial forecasting', 'Risk assessment', 'Investment analysis', 'Compliance monitoring'],
      link: '/ai-financial-analysis',
      price: 'From $379/month'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with AI-powered optimization and predictive analytics.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: ['Supply optimization', 'Demand forecasting', 'Inventory management', 'Logistics planning'],
      link: '/ai-supply-chain-optimizer',
      price: 'From $329/month'
    }
  ];

  const additionalServices = [
    { name: 'AI Voice Assistant Pro', link: '/ai-voice-assistant-pro' },
    { name: 'AI Image Recognition Pro', link: '/ai-image-recognition-pro' },
    { name: 'AI Predictive Maintenance', link: '/ai-predictive-maintenance' },
    { name: 'AI Sentiment Analysis Pro', link: '/ai-sentiment-analysis-pro' },
    { name: 'AI Recommendation Engine', link: '/ai-recommendation-engine' },
    { name: 'AI Fraud Detection Pro', link: '/ai-fraud-detection-pro' },
    { name: 'AI Language Translation', link: '/ai-language-translation' },
    { name: 'AI Chatbot Enterprise', link: '/ai-chatbot-enterprise' },
    { name: 'AI Data Mining Pro', link: '/ai-data-mining-pro' },
    { name: 'AI Video Analysis', link: '/ai-video-analysis' },
    { name: 'AI Time Series Forecasting', link: '/ai-time-series-forecasting' },
    { name: 'AI NLP Text Analysis', link: '/ai-nlp-text-analysis' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Comprehensive AI services including analytics, cybersecurity, content generation, automation, and more. Transform your business with cutting-edge artificial intelligence technology."
        keywords="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI cybersecurity, AI content generation, AI automation"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services That Transform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Unlock the power of artificial intelligence with our comprehensive suite of AI services. 
            From analytics to automation, we provide cutting-edge AI solutions that drive real business results.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Featured AI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most popular AI services designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <Link to={service.link} className="block">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold mb-2">{service.price}</div>
                    <div className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Additional AI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our full range of AI services designed to meet every business need.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm font-medium">
                  {service.name}
                </div>
              </Link>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI services to drive growth and innovation. 
            Start your AI transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;