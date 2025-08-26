import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const CaseStudies: NextPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Success stories and case studies from Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Success stories and real-world applications of our AI and autonomous technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Manufacturing</h3>
            <p className="text-gray-300 mb-4">How we helped a manufacturing company increase efficiency by 40% using AI automation.</p>
            <div className="text-cyan-400 text-sm">Manufacturing • AI</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Financial Risk Management</h3>
            <p className="text-gray-300 mb-4">Implementing AI-driven risk assessment for a major financial institution.</p>
            <div className="text-cyan-400 text-sm">Finance • Risk Management</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Healthcare Automation</h3>
            <p className="text-gray-300 mb-4">Streamlining patient care processes with intelligent automation systems.</p>
            <div className="text-cyan-400 text-sm">Healthcare • Automation</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;
