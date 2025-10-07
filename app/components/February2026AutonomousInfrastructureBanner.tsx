import React from 'react';
import { ArrowRight, Brain, TrendingUp, Zap } from 'lucide-react';

const February2026AutonomousInfrastructureBanner: React.FC = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          {/* Badge */}
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium mb-8 shadow-lg'>
            <Brain className='w-5 h-5 mr-2' />
            February 2026 Autonomous Infrastructure Revolution
          </div>

          {/* Main Headline */}
          <h1 className='text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight'>
            Autonomous Infrastructure
            <span className='block text-4xl md:text-6xl mt-4 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text'>
              Self-Managing Systems
            </span>
          </h1>

          {/* Subheadline */}
          <p className='text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed'>
            Experience the future with fully autonomous infrastructure that
            manages, heals, and optimizes itself. Achieve 99.9% uptime, 85% cost
            reduction, and $5-15B value creation.
          </p>

          {/* Key Capabilities Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto'>
            <div className='bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300'>
              <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Shield className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-lg font-semibold mb-3'>
                Self-Healing Systems
              </h3>
              <p className='text-gray-300 text-sm leading-relaxed'>
                Automatically detects and repairs failures with 99.9% uptime and
                zero-downtime maintenance
              </p>
            </div>

            <div className='bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Brain className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-lg font-semibold mb-3'>
                Predictive Maintenance
              </h3>
              <p className='text-gray-300 text-sm leading-relaxed'>
                99.7% accuracy in predicting equipment failures, preventing 95%
                of unplanned downtime
              </p>
            </div>

            <div className='bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300'>
              <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <TrendingUp className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-lg font-semibold mb-3'>Self-Optimization</h3>
              <p className='text-gray-300 text-sm leading-relaxed'>
                Continuous performance tuning with 85% resource utilization and
                75% energy savings
              </p>
            </div>

            <div className='bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300'>
              <div className='w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-lg font-semibold mb-3'>Autonomous Scaling</h3>
              <p className='text-gray-300 text-sm leading-relaxed'>
                Real-time resource allocation with automatic scaling based on
                demand patterns
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className='bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
              Ready to Transform Your Infrastructure?
            </h2>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join Fortune 500 companies achieving $5-15B value creation with
              autonomous infrastructure
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='/blog/ai-2026-february-autonomous-infrastructure-revolution'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Read the Full Article
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>

              <Link
                href='/services/ai-2026-february-revolutionary-edge-computing-consulting'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'
              >
                Get Consulting Services
              </Link>
            </div>
          </div>

          {/* Success Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-green-400 mb-2'>
                $5-15B
              </div>
              <div className='text-sm text-gray-300 uppercase tracking-wide'>
                Value Creation
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-blue-400 mb-2'>
                99.9%
              </div>
              <div className='text-sm text-gray-300 uppercase tracking-wide'>
                System Uptime
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-purple-400 mb-2'>
                85%
              </div>
              <div className='text-sm text-gray-300 uppercase tracking-wide'>
                Cost Reduction
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-yellow-400 mb-2'>
                95%
              </div>
              <div className='text-sm text-gray-300 uppercase tracking-wide'>
                Failure Prevention
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className='absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse'></div>
      <div className='absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000'></div>
      <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500'></div>
      <div className='absolute top-1/3 right-1/4 w-28 h-28 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1500'></div>
    </div>
  );
};

export default February2026AutonomousInfrastructureBanner;
