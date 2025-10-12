import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Brain, MessageSquare, BarChart3, FileText, Users, Zap, Shield, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      features: ['Natural language processing', 'Multi-language support', 'Integration with existing systems', 'Real-time learning'],
      pricing: 'Starting at $1,500/month',
      duration: '2-4 weeks'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Content Generation',
      description: 'AI-powered content creation for blogs, articles, marketing copy, and more.',
      features: ['SEO-optimized content', 'Multiple content types', 'Brand voice consistency', 'Bulk generation'],
      pricing: 'Starting at $800/month',
      duration: '1-2 weeks'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Advanced AI analytics to extract insights from your business data.',
      features: ['Predictive analytics', 'Real-time dashboards', 'Custom reports', 'Machine learning models'],
      pricing: 'Starting at $2,200/month',
      duration: '3-6 weeks'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Customer Insights',
      description: 'AI-driven customer behavior analysis and personalization solutions.',
      features: ['Customer segmentation', 'Behavior prediction', 'Personalized recommendations', 'Churn analysis'],
      pricing: 'Starting at $1,800/month',
      duration: '2-4 weeks'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling'],
      pricing: 'Starting at $1,200/month',
      duration: '2-3 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'AI Security',
      description: 'Advanced AI-powered security solutions to protect your digital assets.',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      pricing: 'Starting at $2,500/month',
      duration: '4-6 weeks'
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'Intelligent Solutions',
      description: 'AI that learns and adapts to your business needs'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: 'Scalable Technology',
      description: 'Solutions that grow with your business'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Faster Implementation',
      description: 'Deploy AI solutions in weeks, not months'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security for all AI implementations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including chatbots, content generation, data analytics, and process automation. Expert AI solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, content generation, data analytics, process automation, machine learning" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence. From chatbots to data analytics, 
            we deliver AI solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                  <span className="font-semibold text-green-400">{service.pricing}</span>
                  <span>{service.duration}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;