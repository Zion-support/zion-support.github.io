import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Settings,
  Globe
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics for data-driven decision making.',
      price: 'From $299/month',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'API Integration'],
      link: '/ai-analytics-dashboard-pro',
      featured: true
    },
    {
      name: 'AI Cybersecurity Suite Pro',
      description: 'Advanced threat protection with AI-powered detection, automated response, and 24/7 monitoring.',
      price: 'From $499/month',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      features: ['Threat Detection', 'Automated Response', '24/7 Monitoring', 'Compliance Reports'],
      link: '/ai-cybersecurity-suite-pro',
      featured: true
    },
    {
      name: 'AI Content Generation Pro',
      description: 'Automated content creation with AI-powered writing, editing, and optimization for all your marketing needs.',
      price: 'From $199/month',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Content Writing', 'SEO Optimization', 'Multi-language', 'Brand Voice'],
      link: '/ai-content-generation-pro',
      featured: true
    },
    {
      name: 'AI Customer Support Chatbot',
      description: 'Intelligent customer service with AI-powered chatbots that provide 24/7 support and personalized assistance.',
      price: 'From $149/month',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['24/7 Support', 'Natural Language', 'Multi-channel', 'Analytics'],
      link: '/ai-customer-support-chatbot',
      featured: true
    },
    {
      name: 'AI Code Assistant Pro',
      description: 'AI-powered development tools that help developers write better code faster with intelligent suggestions.',
      price: 'From $99/month',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
      link: '/ai-code-assistant-pro',
      featured: true
    },
    {
      name: 'AI Business Intelligence Pro',
      description: 'Data-driven insights with AI-powered analytics, reporting, and business intelligence solutions.',
      price: 'From $399/month',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Reports', 'Real-time Updates'],
      link: '/ai-business-intelligence-pro',
      featured: true
    }
  ];

  const stats = [
    { number: '40+', label: 'AI Solutions', icon: <Brain className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Shield className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'AI-powered product recommendations and inventory management',
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare Analytics',
      description: 'AI-driven patient insights and treatment optimization',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Financial Services',
      description: 'AI-powered fraud detection and risk assessment',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Manufacturing',
      description: 'AI-driven predictive maintenance and quality control',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our advanced AI services including analytics, cybersecurity, content generation, and customer support solutions."
        keywords="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI cybersecurity"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to cybersecurity, we provide AI-powered tools that drive growth and innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of AI services designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to work across industries, providing tailored intelligence for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {useCase.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with our advanced AI solutions. Get started today and experience the future of intelligent automation.
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
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
