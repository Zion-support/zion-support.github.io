import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Globe, Shield, TrendingUp, Database } from 'lucide-react';

export default function FiveGEdgeComputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" content="Advanced 5 G edge computing solutions by Zion Tech Group. Ultra-low latency processing, real-time analytics, and distributed computing for 5 G networks."container mx-auto px-4 py-16"text-center mb-16"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"flex flex-col sm:flex-row gap-4 justify-center"/contact"inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/demo"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-gray-300">
              Process data at the edge with sub-millisecond latency for real-time applications.
            </p>
          </div>

          <div className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-gray-300">
              Execute complex computations at the edge for instant response times.
            </p>
          </div>

          <div className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-gray-300">
              Deploy computing resources across multiple edge locations for optimal coverage.
            </p>
          </div>

          <div className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-gray-300">
              Secure edge computing with advanced encryption and access controls.
            </p>
          </div>

          <div className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-gray-300">
              Store and manage data locally at the edge for faster access and reduced bandwidth.
            </p>
          </div>

          <div className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-gray-300">
              Scale your edge computing resources based on demand and usage patterns.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-3 xl font-bold text-white mb-4">
            Ready to Deploy Edge Computing?
          </h2>
          <p className="/contact"
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>
    </div>
  );

