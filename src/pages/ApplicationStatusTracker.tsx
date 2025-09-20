import React from 'react';

export default function ApplicationStatusTracker() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <div className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Application Status Tracker</h1>
          <p className='text-gray-300'>
            Monitor the progress of your job applications and stay updated on their status.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6'>
            <div className='flex flex-row items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-white'>Total Applications</h3>
              <div className='h-4 w-4 text-blue-400'>📁</div>
            </div>
            <div className='text-2xl font-bold text-white'>12</div>
            <p className='text-xs text-gray-300'>Active applications</p>
          </div>

          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6'>
            <div className='flex flex-row items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-white'>Interviews</h3>
              <div className='h-4 w-4 text-green-400'>📅</div>
            </div>
            <div className='text-2xl font-bold text-white'>3</div>
            <p className='text-xs text-gray-300'>Scheduled this week</p>
          </div>

          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6'>
            <div className='flex flex-row items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-white'>Offers</h3>
              <div className='h-4 w-4 text-purple-400'>💼</div>
            </div>
            <div className='text-2xl font-bold text-white'>1</div>
            <p className='text-xs text-gray-300'>Pending review</p>
          </div>
        </div>

        <div className='space-y-4'>
          <p className='text-gray-300'>Your applications will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}