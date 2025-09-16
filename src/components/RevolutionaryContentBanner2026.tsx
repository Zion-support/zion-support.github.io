import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const announcements = [
    {
      title: "🚀 ULTIMATE TECH REVOLUTION 2026",
      subtitle: "Quantum Neural Networks • Reality Manipulation • Universal Consciousness",
      link: "/pages/UltimateTechRevolution2026",
      color: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      title: "🤖 REVOLUTIONARY AI BREAKTHROUGH 2026",
      subtitle: "Conscious AI Systems • Quantum Processing • Neural Reality Interface",
      link: "/pages/RevolutionaryAIBreakthrough2026",
      color: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      title: "🌌 NEXT-GEN SPACE TECH 2026",
      subtitle: "Warp Drive Technology • Dyson Spheres • Galactic Exploration",
      link: "/pages/NextGenSpaceTech2026",
      color: "from-indigo-600 via-blue-600 to-purple-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  const currentAnnouncementData = announcements[currentAnnouncement];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Main Revolutionary Banner */}
      <div className={`bg-gradient-to-r ${currentAnnouncementData.color} rounded-3xl p-12 mb-8 text-white text-center relative overflow-hidden animate-pulse`}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-5xl animate-bounce">🌟</span>
            <h2 className="text-5xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026</h2>
            <span className="text-5xl animate-bounce">🌟</span>
          </div>
          
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 animate-pulse">{currentAnnouncementData.title}</h3>
            <p className="text-xl opacity-95 max-w-4xl mx-auto">
              {currentAnnouncementData.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href={currentAnnouncementData.link}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Experience Revolutionary Content →
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              📚 Learn More
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-3">
            {announcements.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAnnouncement ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${announcement.color}/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => window.location.href = announcement.link}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">
                {announcement.title.includes('TECH') ? '🚀' : 
                 announcement.title.includes('AI') ? '🤖' : '🌌'}
              </div>
              <h4 className="text-lg font-bold mb-2">{announcement.title}</h4>
              <p className="text-sm opacity-90 mb-4 line-clamp-2">{announcement.subtitle}</p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold">
                Explore Now →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revolutionary Stats */}
      <div className="bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-sm opacity-90">Revolutionary Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-sm opacity-90">Infinite Possibilities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400 mb-2">2026</div>
            <div className="text-sm opacity-90">Future Technology</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-rose-400 mb-2">100%</div>
            <div className="text-sm opacity-90">Revolutionary</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;