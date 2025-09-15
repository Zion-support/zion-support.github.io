import React, { useState, useEffect } from 'react';

const ContentNavigation2026: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentSections = [
    { id: 'revolutionary-tech', label: 'Revolutionary Tech', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'ai-revolution', label: 'AI Revolution', icon: '🤖', color: 'from-blue-500 to-purple-500' },
    { id: 'quantum-computing', label: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { id: 'neural-interfaces', label: 'Neural Interfaces', icon: '🧠', color: 'from-purple-500 to-pink-500' },
    { id: 'space-tech', label: 'Space Technology', icon: '🚀', color: 'from-orange-500 to-red-500' },
    { id: 'biotech', label: 'Biotechnology', icon: '🧬', color: 'from-violet-500 to-purple-500' },
    { id: 'interactive-demos', label: 'Interactive Demos', icon: '🎮', color: 'from-emerald-500 to-teal-500' },
    { id: 'tech-insights', label: 'Tech Insights', icon: '🔮', color: 'from-indigo-500 to-cyan-500' }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSticky ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🌟</div>
            <span className="text-xl font-bold text-white">Zion Tech 2026</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {contentSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 space-y-2">
          {contentSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentNavigation2026;