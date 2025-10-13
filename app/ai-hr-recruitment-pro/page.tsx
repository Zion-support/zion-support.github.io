import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Brain, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const AiHrRecruitmentProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI HR Recruitment Pro | Zion Tech Group</title>
        <meta name="description" content="AI-powered HR recruitment and talent management solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">AI HR Recruitment Pro</h1>
            <p className="text-xl text-gray-300 mb-8">AI-powered HR recruitment and talent management solutions.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHrRecruitmentProPage;
