import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest insights, updates, and thought leadership from Zion Tech Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">AI Innovation</h3>
            <p className="text-gray-300 mb-4">Exploring the latest developments in artificial intelligence and machine learning.</p>
            <Link href="/blog/ai-innovation" className="text-cyan-400 hover:text-cyan-300">Read More →</Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">Insights into quantum computing breakthroughs and applications.</p>
            <Link href="/blog/quantum-computing" className="text-cyan-400 hover:text-cyan-300">Read More →</Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Technology Trends</h3>
            <p className="text-gray-300 mb-4">Analysis of emerging technology trends and their business impact.</p>
            <Link href="/blog/technology-trends" className="text-cyan-400 hover:text-cyan-300">Read More →</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
