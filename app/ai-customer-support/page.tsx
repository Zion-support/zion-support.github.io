'use client';
import { Helmet } from 'react-helmet-async';


const AiCustomerSupportPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Enhance customer experience with AI-powered support solutions including chatbots and automated assistance." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Customer Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver exceptional customer support with AI-powered chatbots, automated responses, and intelligent assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Intelligent Chatbots</h3>
              <p className="text-gray-600">AI-powered chatbots that understand and respond to customer queries.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Ticket Routing</h3>
              <p className="text-gray-600">Automated ticket classification and routing to appropriate agents.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sentiment Analysis</h3>
              <p className="text-gray-600">Real-time customer sentiment analysis and response optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCustomerSupportPage;
