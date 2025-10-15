import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const AiCustomerSupportChatbotPage: React.FC = () => {
  const features = [
    '24/7 automated customer support',
    'Seamless human handoff',
    'Integration with CRM systems',
    'Real-time conversation analytics',
    'Custom knowledge base training',
    'Sentiment analysis and mood detection',
    'Voice and text support',
    'Advanced conversation routing'
  ];

  const benefits = [
    'Reduce support costs by 60%',
    'Improve response time by 90%',
    'Handle 1000+ conversations simultaneously',
    'Increase customer satisfaction by 45%',
    'Available 24/7 without breaks',
    'Scale support without additional staff'
  ];

  const integrations = [
    { name: 'Salesforce' },
    { name: 'HubSpot' },
    { name: 'Zendesk' },
    { name: 'Intercom' },
    { name: 'Slack' },
    { name: 'Microsoft Teams' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot with advanced NLP, sentiment analysis, and seamless human handoff capabilities." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Customer Support Chatbot</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Revolutionize your customer support with our advanced AI chatbot. 
                Provide instant, intelligent responses and seamless human handoff.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI chatbot is equipped with cutting-edge technology to deliver exceptional customer experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Chatbot?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer support with measurable results and exceptional performance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows for a unified customer support experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-semibold">{integration.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI chatbot and see immediate improvements in your customer support metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCustomerSupportChatbotPage;