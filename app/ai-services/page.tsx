import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      price: 'From $299/month',
      link: '/ai-analytics',
      popular: true
    },
    {
      name: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Workflow automation', 'Process optimization', 'Smart scheduling', 'Task management'],
      price: 'From $199/month',
      link: '/ai-automation',
      popular: false
    },
    {
      name: 'AI Business Intelligence',
      description: 'Make data-driven decisions with our comprehensive BI platform powered by AI.',
      icon: <Brain className="w-8 h-8" />,
      features: ['Advanced analytics', 'Data visualization', 'KPI tracking', 'Strategic insights'],
      price: 'From $399/month',
      link: '/ai-business-intelligence',
      popular: true
    },
    {
      name: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: <Code className="w-8 h-8" />,
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'Email campaigns'],
      price: 'From $149/month',
      link: '/ai-content-generation',
      popular: false
    },
    {
      name: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent chatbots and support automation.',
      icon: <Users className="w-8 h-8" />,
      features: ['24/7 chatbot support', 'Natural language processing', 'Ticket routing', 'Customer insights'],
      price: 'From $249/month',
      link: '/ai-customer-service',
      popular: true
    },
    {
      name: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and security monitoring.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Anomaly monitoring', 'Security alerts', 'Compliance reporting'],
      price: 'From $499/month',
      link: '/ai-cybersecurity',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Better Decision Making',
      description: 'Leverage data-driven insights for smarter business decisions',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: '24/7 Availability',
      description: 'AI systems work around the clock without breaks or downtime',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including analytics, automation, content generation, and customer service solutions."
        keywords="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI consulting"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to automation, we provide comprehensive AI services to drive growth and innovation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our AI Service Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify the best opportunities for automation and intelligence in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              Schedule Demo
              <Mail className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
