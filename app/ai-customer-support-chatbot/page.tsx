import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

const AICustomerSupportChatbotPage: React.FC = () => {
  const features = [
    'Natural Language Processing (NLP)',
    'Multi-language support (50+ languages)',
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
    { name: 'Salesforce', description: 'CRM Integration' },
    { name: 'HubSpot', description: 'Marketing Automation' },
    { name: 'Zendesk', description: 'Ticket Management' },
    { name: 'Slack', description: 'Team Communication' },
    { name: 'Microsoft Teams', description: 'Enterprise Chat' },
    { name: 'WhatsApp Business', description: 'Messaging Platform' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer support chatbot with NLP, multi-language support, and seamless human handoff capabilities." />
        <meta name="keywords" content="AI chatbot, customer support, NLP, automation, customer service" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Customer Support Chatbot
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer support with our advanced AI chatbot that provides 24/7 assistance, 
                understands natural language, and seamlessly hands off to human agents when needed.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Integrations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                  <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
                  <p className="text-gray-400">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Support?</h2>
            <p className="text-xl mb-8">
              Get started with our AI chatbot and see immediate improvements in your customer support efficiency.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Started Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSupportChatbotPage;