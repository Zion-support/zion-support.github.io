import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Bot, Zap, Users, Settings, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any coding knowledge using our visual builder.',
      benefits: ['Drag-and-drop interface', 'Pre-built templates', 'Custom workflows', 'Easy deployment']
    },
    {
      icon: Brain,
      title: 'AI-Powered Responses',
      description: 'Leverage advanced AI to provide natural, context-aware conversations.',
      benefits: ['Natural language processing', 'Context understanding', 'Learning capabilities', 'Multi-language support']
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple platforms and channels.',
      benefits: ['Website integration', 'Social media', 'Mobile apps', 'API integration']
    },
    {
      icon: Settings,
      title: 'Advanced Customization',
      description: 'Customize every aspect of your chatbot to match your brand and needs.',
      benefits: ['Brand customization', 'Custom responses', 'Workflow automation', 'Analytics dashboard']
    }
  ];

  const benefits = [
    'Reduce customer support costs by up to 80%',
    'Provide 24/7 customer assistance',
    'Improve response times and customer satisfaction',
    'Scale your support without scaling your team',
    'Collect valuable customer insights',
    'Integrate with your existing systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Build Intelligent Chatbots</title>
        <meta name="description" content="Build intelligent chatbots without coding using our AI-powered chatbot builder. No-code interface, multi-channel deployment, and advanced customization." />
        <meta name="keywords" content="AI chatbot builder, chatbot creation, no-code chatbot, customer support bot, conversational AI" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Chatbot Builder</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent, conversational chatbots without any coding knowledge. 
              Create, deploy, and manage AI-powered chatbots that engage your customers 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Building
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Chatbot Builder?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbot builder helps you create powerful, intelligent chatbots that deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Zap className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your First Chatbot?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building intelligent chatbots today and transform your customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiChatbotBuilderPage;