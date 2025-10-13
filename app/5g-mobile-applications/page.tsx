import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Zap, Globe, Shield, Users, TrendingUp } from 'lucide-react';

export default function FiveGMobileApplicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" content="Advanced 5 G mobile application development by Zion Tech Group. Ultra-fast, low-latency mobile apps powered by 5 G technology."container mx-auto px-4 py-16"text-center mb-16"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"flex flex-col sm:flex-row gap-4 justify-center"/contact"inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/demo"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-gray-300">
              Build high-performance mobile apps that take full advantage of 5 G capabilities.
            </p>
          </div>

          <div className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-gray-300">
              Deliver instant responses and real-time interactions with sub-millisecond latency.
            </p>
          </div>

          <div className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-gray-300">
              Deploy your apps worldwide with consistent 5 G performance across all regions.
            </p>
          </div>

          <div className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-gray-300">
              Secure mobile applications with enterprise-grade security and compliance.
            </p>
          </div>

          <div className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-gray-300">
              Create immersive and engaging user experiences with 5 G-powered features.
            </p>
          </div>

          <div className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-gray-300">
              Build scalable mobile applications that can handle millions of concurrent users.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-3 xl font-bold text-white mb-4">
            Ready to Build 5 G Mobile Apps?
          </h2>
          <p className="/contact"
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>
    </div>
  );

