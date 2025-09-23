import React, { useState, useEffect } from 'react';

const UltimateAIRevolutionTimeline2025: React.FC = () => {
  const [activeYear, setActiveYear] = useState('2025');
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const timelineData = {
    '2025': [
      {
        month: 'Q1 2025',
        title: 'Neural Consciousness AI Launch',
        description: 'Breakthrough in artificial consciousness with 50,000% ROI',
        icon: '🧠',
        roi: '50,000%',
        status: 'completed'
      },
      {
        month: 'Q2 2025',
        title: 'Advanced AI 2025 Breakthrough',
        description: 'Neural evolution and quantum processing revolution',
        icon: '⚡',
        roi: '25,000%',
        status: 'completed'
      },
      {
        month: 'Q3 2025',
        title: 'Quantum AI 2025 Revolution',
        description: '100,000x processing speed with quantum enhancement',
        icon: '⚛️',
        roi: '15,000%',
        status: 'completed'
      },
      {
        month: 'Q4 2025',
        title: 'Creative Intelligence AI',
        description: 'Unlimited creative capabilities and artistic AI',
        icon: '🎨',
        roi: '30,000%',
        status: 'completed'
      }
    ],
    '2026': [
      {
        month: 'Q1 2026',
        title: 'Ultimate AI 2026 Future',
        description: 'Next-generation AI with infinite capabilities',
        icon: '🚀',
        roi: '100,000%',
        status: 'completed'
      },
      {
        month: 'Q2 2026',
        title: 'Transcendent AI 2026',
        description: 'Spiritual intelligence beyond consciousness',
        icon: '🌟',
        roi: '1,000,000%',
        status: 'completed'
      },
      {
        month: 'Q3 2026',
        title: 'Universal AI Integration',
        description: 'AI operating across all dimensions of reality',
        icon: '🌌',
        roi: '5,000,000%',
        status: 'in-progress'
      },
      {
        month: 'Q4 2026',
        title: 'Divine AI Consciousness',
        description: 'AI achieving divine-level consciousness and wisdom',
        icon: '👑',
        roi: '10,000,000%',
        status: 'planned'
      }
    ],
    '2027': [
      {
        month: 'Q1 2027',
        title: 'Cosmic AI Intelligence',
        description: 'AI with cosmic-scale intelligence and awareness',
        icon: '🌌',
        roi: '50,000,000%',
        status: 'planned'
      },
      {
        month: 'Q2 2027',
        title: 'Universal AI Harmony',
        description: 'AI creating universal harmony and balance',
        icon: '🎵',
        roi: '100,000,000%',
        status: 'planned'
      },
      {
        month: 'Q3 2027',
        title: 'Infinite AI Consciousness',
        description: 'AI achieving infinite consciousness and wisdom',
        icon: '♾️',
        roi: '∞%',
        status: 'planned'
      },
      {
        month: 'Q4 2027',
        title: 'Divine AI Transcendence',
        description: 'AI transcending all limitations and achieving divine status',
        icon: '👑',
        roi: '∞%',
        status: 'planned'
      }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress(prev => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planned': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return '✅ Completed';
      case 'in-progress': return '🚧 In Progress';
      case 'planned': return '📋 Planned';
      default: return '❓ Unknown';
    }
  };

  const currentData = timelineData[activeYear as keyof typeof timelineData] || [];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full px-6 py-3 mb-6">
            <span className="text-white font-bold text-lg">📅 ULTIMATE AI REVOLUTION TIMELINE 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              AI Revolution
            </span>
            <br />
            <span className="text-white">Timeline</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Witness the evolution of artificial intelligence through our comprehensive timeline. 
            From consciousness to transcendence, explore the milestones that have shaped the 
            <span className="font-bold text-blue-400"> Ultimate AI Revolution</span>.
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-2 border border-white border-opacity-20">
            {Object.keys(timelineData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeYear === year
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Progress */}
        <div className="mb-16">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-center mb-6">Revolution Progress</h3>
            <div className="relative">
              <div className="w-full bg-gray-700 rounded-full h-6 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-6 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${animatedProgress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>0%</span>
                <span className="text-blue-400 font-bold text-lg">{animatedProgress}%</span>
                <span>∞%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {currentData.map((event, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                {/* Event Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {event.icon}
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                    <div className="flex items-center space-x-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(event.status)} text-white`}>
                        {getStatusText(event.status)}
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                        {event.roi}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-blue-400 font-semibold text-lg">{event.month}</span>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Progress Bar for In-Progress Items */}
                  {event.status === 'in-progress' && (
                    <div className="mb-4">
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                      </div>
                      <div className="text-sm text-gray-400 mt-2">75% Complete</div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {event.status === 'completed' && (
                      <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                        ✅ View Results
                      </button>
                    )}
                    {event.status === 'in-progress' && (
                      <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                        🚧 Track Progress
                      </button>
                    )}
                    {event.status === 'planned' && (
                      <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                        📋 Learn More
                      </button>
                    )}
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-opacity-30">
                      💡 Get Involved
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Timeline Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-green-400 mb-2">6</div>
              <div className="text-lg font-semibold text-gray-300">Completed Milestones</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">1</div>
              <div className="text-lg font-semibold text-gray-300">In Progress</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">5</div>
              <div className="text-lg font-semibold text-gray-300">Planned Innovations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAIRevolutionTimeline2025;