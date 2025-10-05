import React from 'react';

const CognitiveOrchestrationMegaBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-rose-900/40 border-y border-purple-500/20 py-20'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 border border-purple-500/30 mb-8'>
            <span className='text-purple-400 font-bold text-lg tracking-wider uppercase animate-pulse'>
              🧠 COGNITIVE ORCHESTRATION
            </span>
          </div>
          <h1 className='text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent'>
            The Future of AI Orchestration
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intelligent Automation</h3>
              <p className="text-sm opacity-90">
                Self-managing systems that adapt and optimize automatically
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cognitive Processing</h3>
              <p className="text-sm opacity-90">
                Advanced reasoning and decision-making capabilities
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise Scale</h3>
              <p className="text-sm opacity-90">
                Built for large-scale organizational operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>