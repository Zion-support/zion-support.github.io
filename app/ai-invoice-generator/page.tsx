import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Brain, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const AiInvoiceGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Invoice Generator | Zion Tech Group</title>
        <meta name="description" content="AI-powered invoice generation and financial document automation." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">AI Invoice Generator</h1>
            <p className="text-xl text-gray-300 mb-8">AI-powered invoice generation and financial document automation.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiInvoiceGeneratorPage;
