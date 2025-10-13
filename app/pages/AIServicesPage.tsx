import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.',
      features: ['Natural Language Processing', 'Multi-channel Integration', 'Sentiment Analysis', '24/7 Availability']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.',
      features: ['Data Mining', 'Statistical Modeling', 'Forecasting', 'Risk Assessment']
    },
    {
      icon: Shield,
      title: 'AI Security & Ethics',
      description: 'Ensure your AI systems are secure, ethical, and compliant with industry standards.',
      features: ['AI Security Audits', 'Ethical AI Guidelines', 'Bias Detection', 'Compliance Management']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows using AI-powered solutions.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Quality Control']
    },
    {
      icon: Target,
      title: 'Custom AI Solutions',
      description: 'Develop bespoke AI applications designed specifically for your unique business needs.',
      features: ['Custom Model Development', 'API Integration', 'Scalable Architecture', 'Ongoing Support']
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-Profit',
    'Startups'
  ];

  const benefits = [
    'Increased Efficiency',
    'Better Decision Making',
    'Cost Reduction',
    'Enhanced Customer Experience',
    'Competitive Advantage',
    'Scalable Solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy consulting, conversational AI, predictive analytics, and custom AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, predictive analytics, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help businesses leverage the power of AI to automate processes, gain insights, 
              and create intelligent solutions that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to work across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <h3 className="text-white font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Benefits of AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you implement AI solutions that transform your business and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;