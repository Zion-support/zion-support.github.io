import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
=======


export default function EdgeComputing5GPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G edge computing solutions for ultra-low latency and high performance." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">5G Edge Computing</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Deploy computing power at the edge with 5G technology for unprecedented performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-300">
                Achieve sub-millisecond response times with edge computing and 5G networks.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Distributed Processing</h3>
              <p className="text-gray-300">
                Distribute computing workloads across edge nodes for optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Process and analyze data in real-time at the edge for instant insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}