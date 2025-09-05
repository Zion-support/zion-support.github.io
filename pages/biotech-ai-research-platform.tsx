import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';



export default function BiotechAIResearchPlatformPage() {
  return (
    <Layout>
      <Head>
        <title>Biotech AI Research Platform | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced AI platform for biotechnology research—drug discovery, genetic analysis, and trial optimization.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/biotech-ai-research-platform&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto space-y-8&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent&quot;>Biotech AI Research Platform</h1>
            <p className=&quot;mt-4 text-slate-300&quot;>Accelerate discovery with intelligent automation across analysis and experimentation.</p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
            <div className=&quot;lg:col-span-2 p-6 bg-black/40 border border-gray-700/50 p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm&quot;>
              <h2 className=&quot;text-white text-xl font-semibold mb-3&quot;>Overview</h2>
              <p className=&quot;text-slate-300&quot;>Drug discovery automation, sequence analysis, structure prediction, trial optimization, and compliance workflows with auditability.</p>
            </div>
            <div className=&quot;p-6 bg-black/40 border border-gray-700/50 p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm&quot;>
              <div className=&quot;text-3xl font-bold text-white text-base font-medium text-gray-400&quot;>Starting at $12,999<span >/month</span></div>
              <div className=&quot;text-sm text-gray-400 mt-2&quot;>Trial: 30 days • Setup: 1–2 weeks</div>
              <div className=&quot;mt-6 flex gap-3&quot;>
                <a href=&quot;/contact&quot; className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white&quot;>Contact Sales</Link>
                <a href=&quot;/services&quot; className=&quot;flex-1 border border-gray-600 text-gray-200&quot;>Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

