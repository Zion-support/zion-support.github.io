import React from 'react';
import { Helmet } from 'react-helmet-async';
'use client';

const AiConversationalAiPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Conversational Ai - Zion Tech Group</title>
        <meta name="description" content="Ai Conversational Ai services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-conversational-ai, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5 ml-2" />
              <span className="w-5 h-5 ml-2" />Ai Conversational Ai
              </span>
            </h1>
            <p className="w-5 h-5 ml-2">Professional ai conversational ai services by Zion Tech Group.
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="text-2xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5 h-5 ml-2">We're working on bringing you comprehensive ai conversational ai solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5 h-5 ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default AiConversationalAiPage;