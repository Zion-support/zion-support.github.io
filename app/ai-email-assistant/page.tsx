import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Brain, BarChart3, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AiEmailAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Email Assistant | Zion Tech Group</title>
        <meta name="description" content="Transform your email marketing with AI-powered assistance." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">AI Email Assistant</h1>
            <p className="text-xl text-gray-300 mb-8">Transform your email marketing with AI-powered assistance.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiEmailAssistantPage;
