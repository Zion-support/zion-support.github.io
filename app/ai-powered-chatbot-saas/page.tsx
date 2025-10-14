import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIPoweredChatbotSAAS = () => {
  return (
    <>
      <Helmet >
        <title>AI-Powered Chatbot SAAS - Zion Tech Group</>
        <meta name="description" content="Advanced AI chatbot solution for customer service and support." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 >
                AI-Powered Chatbot SAAS
              </>
              <p >
                Advanced AI chatbot solution for customer service and support.
              </>
              <Link to="/contact">
                <FuturisticButton size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              </>
            </>
          </>
        </>
      </>
    </>
  );
};

export default AIPoweredChatbotSAAS;
