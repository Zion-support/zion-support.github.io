import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Cpu, Shield, Globe, Zap, Database } from 'lucide-react';

export default function FiveGIoTSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" content="Advanced 5 G IoT solutions by Zion Tech Group. Connect, manage, and optimize IoT devices with ultra-reliable 5 G networks."container mx-auto px-4 py-16"text-center mb-16"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"flex flex-col sm:flex-row gap-4 justify-center"/contact"inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/demo"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-gray-300">
              Connect millions of IoT devices with 99.999% reliability and ultra-low latency.
            </p>
          </div>

          <div className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-gray-300">
              Process IoT data at the edge for real-time decision making and reduced latency.
            </p>
          </div>

          <div className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-gray-300">
              Secure your IoT ecosystem with advanced encryption and authentication protocols.
            </p>
          </div>

          <div className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-gray-300">
              Deploy IoT solutions across multiple regions with consistent performance.
            </p>
          </div>

          <div className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-gray-300">
              Monitor and analyze IoT data streams in real-time for instant insights.
            </p>
          </div>

          <div className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-gray-300">
              Efficiently store, process, and manage massive volumes of IoT data.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-3 xl font-bold text-white mb-4">
            Ready to Connect Your IoT Devices?
          </h2>
          <p className="/contact"
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>
    </div>
  );

