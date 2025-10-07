import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 shadow-lg animate-gradient-x'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center gap-4 flex-wrap'>
          <div className='flex items-center gap-2'>
            <Sparkles className='w-5 h-5 animate-pulse' />
            <span className='text-sm font-bold uppercase tracking-wide'>
              🚀 NEW - October 1, 2025
            </span>
          </div>

          <div className='hidden sm:block h-6 w-px bg-white/30'></div>

          <p className='text-sm font-medium'>
            <span className='font-bold'>NEW THIS WEEK: </span>
            Vector DB Optimization at 100B+ scale & Enterprise Agent Uptime
            99.9%
          </p>

          <Link
            to='/blog/ai-2025-oct-01-vector-database-optimization-enterprise'
            className='inline-flex items-center gap-1 bg-white text-purple-700 hover:bg-purple-50 px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md'
          >
            <Zap className='w-4 h-4' />
            Vector DB Guide
          </Link>

          <Link
            to='/blog/ai-2025-oct-02-enterprise-agent-systems-uptime-999'
            className='inline-flex items-center gap-1 bg-white text-purple-700 hover:bg-purple-50 px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md'
          >
            <Shield className='w-4 h-4' />
            Agent Uptime
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;
