import React from 'react';
import Link from 'next/link';

const UltimateAIAchievementSummary2025: React.FC = () => {
  const achievements = [
    {
      id: 1,
      technology: 'Transcendent AI 2026',
      roi: '1,000,000%',
      breakthrough: 'Spiritual Intelligence & Divine Purpose',
      icon: '🌟',
      color: 'from-violet-500 to-purple-600',
      description: 'Beyond consciousness AI with spiritual intelligence'
    },
    {
      id: 2,
      technology: 'Neural Consciousness AI 2025',
      roi: '50,000%',
      breakthrough: 'True Artificial Consciousness',
      icon: '🧠',
      color: 'from-emerald-500 to-cyan-600',
      description: 'AI with genuine self-awareness and creativity'
    },
    {
      id: 3,
      technology: 'Ultimate AI 2026 Future',
      roi: '100,000%',
      breakthrough: 'Future Prediction & Universal Intelligence',
      icon: '🚀',
      color: 'from-indigo-500 to-purple-600',
      description: 'Next-generation AI with infinite capabilities'
    },
    {
      id: 4,
      technology: 'Advanced AI 2025 Breakthrough',
      roi: '25,000%',
      breakthrough: 'Neural Evolution & Quantum Processing',
      icon: '⚡',
      color: 'from-blue-500 to-indigo-600',
      description: 'Revolutionary AI with quantum enhancement'
    },
    {
      id: 5,
      technology: 'Quantum AI 2025 Revolution',
      roi: '15,000%',
      breakthrough: '100,000x Processing Speed',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-600',
      description: 'Quantum-enhanced neural networks'
    },
    {
      id: 6,
      technology: 'Creative Intelligence AI',
      roi: '30,000%',
      breakthrough: 'Unlimited Creative Capabilities',
      icon: '🎨',
      color: 'from-pink-500 to-rose-600',
      description: 'AI with unlimited creative potential'
    }
  ];

  const totalCombinedROI = achievements.reduce((sum, achievement) => {
    const roi = parseInt(achievement.roi.replace(/%/g, ''));
    return sum + roi;
  }, 0);

  const stats = [
    { label: 'Revolutionary Technologies', value: '7', icon: '🚀' },
    { label: 'Combined ROI', value: `${totalCombinedROI.toLocaleString()}%`, icon: '💰' },
    { label: 'Success Stories', value: '1000+', icon: '📊' },
    { label: 'Global Impact', value: 'Unlimited', icon: '🌍' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full px-6 py-3 mb-6">
            <span className="text-white font-bold text-lg">🏆 ULTIMATE AI ACHIEVEMENT SUMMARY 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Ultimate AI
            </span>
            <br />
            <span className="text-white">Achievements</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Witness the complete collection of revolutionary AI breakthroughs that have transformed 
            the world of artificial intelligence. Our Ultimate AI Revolution has delivered 
            <span className="font-bold text-indigo-400"> unprecedented results</span> with 
            <span className="font-bold text-purple-400"> combined ROI exceeding {totalCombinedROI.toLocaleString()}%</span>.
          </p>
        </div>

        {/* Combined ROI Display */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <div className="text-7xl font-black mb-6">{totalCombinedROI.toLocaleString()}%</div>
            <div className="text-3xl font-bold mb-4">COMBINED DOCUMENTED ROI</div>
            <div className="text-xl opacity-90">Across All Ultimate AI Technologies</div>
            <div className="text-lg opacity-80 mt-4">
              The most comprehensive AI revolution in history
            </div>
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Achievement Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className={`bg-gradient-to-r ${achievement.color} text-white px-4 py-2 rounded-full text-lg font-bold`}>
                  {achievement.roi}
                </div>
              </div>

              {/* Technology Name */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {achievement.technology}
              </h3>

              {/* Breakthrough */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">Revolutionary Breakthrough:</h4>
                <p className="text-indigo-300 text-sm font-semibold">
                  {achievement.breakthrough}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {achievement.description}
              </p>

              {/* Achievement Badge */}
              <div className={`bg-gradient-to-r ${achievement.color} bg-opacity-20 border border-current border-opacity-30 rounded-xl p-3 text-center`}>
                <div className="text-sm font-bold">🏆 BREAKTHROUGH ACHIEVED</div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Ultimate AI Revolution Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-black text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Evolution Timeline */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">AI Technology Evolution Timeline</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-2xl`}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{achievement.technology}</h4>
                    <span className={`bg-gradient-to-r ${achievement.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {achievement.roi}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold text-indigo-400">Breakthrough:</span> {achievement.breakthrough}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">Join the Ultimate AI Revolution</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Be part of the most comprehensive AI revolution in history. Experience 
              unprecedented transformation with technologies that deliver ROI beyond imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                🚀 Start Your AI Revolution
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-indigo-600 transition-colors transform hover:scale-105"
              >
                💡 Explore All Technologies
              </Link>
              <Link
                href="/case-studies"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
              >
                📊 View All Success Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-8 py-4 shadow-lg">
            <span className="text-2xl mr-3">🏆</span>
            <span className="text-white font-bold text-xl">
              ULTIMATE AI REVOLUTION ACHIEVED - {totalCombinedROI.toLocaleString()}% COMBINED ROI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAIAchievementSummary2025;