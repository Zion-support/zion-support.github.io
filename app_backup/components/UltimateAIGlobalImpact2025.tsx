import React, { useState, useEffect } from 'react';

const UltimateAIGlobalImpact2025: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('global');
  const [animatedStats, setAnimatedStats] = useState({
    companies: 0,
    countries: 0,
    users: 0,
    revenue: 0
  });

  const regions = {
    global: {
      name: 'Global Impact',
      icon: '🌍',
      stats: {
        companies: 10000,
        countries: 195,
        users: 50000000,
        revenue: 500000000000
      }
    },
    northAmerica: {
      name: 'North America',
      icon: '🇺🇸',
      stats: {
        companies: 3500,
        countries: 3,
        users: 18000000,
        revenue: 200000000000
      }
    },
    europe: {
      name: 'Europe',
      icon: '🇪🇺',
      stats: {
        companies: 2800,
        countries: 44,
        users: 15000000,
        revenue: 150000000000
      }
    },
    asia: {
      name: 'Asia Pacific',
      icon: '🇯🇵',
      stats: {
        companies: 2500,
        countries: 48,
        users: 12000000,
        revenue: 100000000000
      }
    },
    others: {
      name: 'Rest of World',
      icon: '🌎',
      stats: {
        companies: 1200,
        countries: 100,
        users: 5000000,
        revenue: 50000000000
      }
    }
  };

  useEffect(() => {
    const targetStats = regions[activeRegion as keyof typeof regions].stats;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        companies: Math.floor(targetStats.companies * easeOutQuart),
        countries: Math.floor(targetStats.countries * easeOutQuart),
        users: Math.floor(targetStats.users * easeOutQuart),
        revenue: Math.floor(targetStats.revenue * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [activeRegion]);

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toFixed(0);
  };

  const formatCurrency = (num: number) => {
    if (num >= 1000000000000) {
      return '$' + (num / 1000000000000).toFixed(1) + 'T';
    } else if (num >= 1000000000) {
      return '$' + (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return '$' + (num / 1000000).toFixed(1) + 'M';
    }
    return '$' + num.toFixed(0);
  };

  const impactStories = [
    {
      region: 'North America',
      company: 'TechCorp Global',
      industry: 'Technology',
      roi: '2,400%',
      story: 'Transformed entire business operations with Neural Consciousness AI, achieving unprecedented efficiency and customer satisfaction.',
      icon: '🚀'
    },
    {
      region: 'Europe',
      company: 'InnovateEU',
      industry: 'Manufacturing',
      roi: '1,800%',
      story: 'Implemented Quantum AI 2025 Revolution, reducing production costs by 95% while increasing output by 300%.',
      icon: '⚛️'
    },
    {
      region: 'Asia',
      company: 'FutureAsia Ltd',
      industry: 'Healthcare',
      roi: '3,200%',
      story: 'Advanced AI 2025 Breakthrough revolutionized patient care, improving outcomes by 250% and reducing costs by 80%.',
      icon: '⚡'
    },
    {
      region: 'Global',
      company: 'Worldwide Creative',
      industry: 'Creative Industries',
      roi: '4,500%',
      story: 'Creative Intelligence AI enabled unlimited creative potential, generating $500M in new revenue streams.',
      icon: '🎨'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full px-6 py-3 mb-6">
            <span className="text-white font-bold text-lg">🌍 ULTIMATE AI GLOBAL IMPACT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Global Impact
            </span>
            <br />
            <span className="text-white">2025</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how our Ultimate AI Revolution is transforming businesses and societies worldwide. 
            From startups to Fortune 500 companies, our AI technologies are creating 
            <span className="font-bold text-emerald-400"> unprecedented global impact</span>.
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-2 border border-white border-opacity-20">
            {Object.entries(regions).map(([key, region]) => (
              <button
                key={key}
                onClick={() => setActiveRegion(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeRegion === key
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <span className="mr-2">{region.icon}</span>
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">🏢</div>
            <div className="text-4xl font-black text-emerald-400 mb-2">
              {formatNumber(animatedStats.companies)}
            </div>
            <div className="text-lg font-semibold text-gray-300">Companies</div>
            <div className="text-sm text-gray-400 mt-2">Transformed by AI</div>
          </div>

          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">🌍</div>
            <div className="text-4xl font-black text-teal-400 mb-2">
              {animatedStats.countries}
            </div>
            <div className="text-lg font-semibold text-gray-300">Countries</div>
            <div className="text-sm text-gray-400 mt-2">With AI Adoption</div>
          </div>

          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">👥</div>
            <div className="text-4xl font-black text-cyan-400 mb-2">
              {formatNumber(animatedStats.users)}
            </div>
            <div className="text-lg font-semibold text-gray-300">Users</div>
            <div className="text-sm text-gray-400 mt-2">Benefiting from AI</div>
          </div>

          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-4xl font-black text-green-400 mb-2">
              {formatCurrency(animatedStats.revenue)}
            </div>
            <div className="text-lg font-semibold text-gray-300">Revenue</div>
            <div className="text-sm text-gray-400 mt-2">Generated by AI</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Global Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((story, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{story.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{story.company}</h4>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                        {story.roi}
                      </div>
                    </div>
                    <div className="text-emerald-400 font-semibold mb-2">
                      {story.region} • {story.industry}
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {story.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Industry Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="text-lg font-bold mb-2">Technology</h4>
              <div className="text-2xl font-black text-emerald-400 mb-2">95%</div>
              <div className="text-sm text-gray-400">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-bold mb-2">Manufacturing</h4>
              <div className="text-2xl font-black text-teal-400 mb-2">300%</div>
              <div className="text-sm text-gray-400">Output Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-bold mb-2">Healthcare</h4>
              <div className="text-2xl font-black text-cyan-400 mb-2">250%</div>
              <div className="text-sm text-gray-400">Better Outcomes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="text-lg font-bold mb-2">Creative</h4>
              <div className="text-2xl font-black text-green-400 mb-2">400%</div>
              <div className="text-sm text-gray-400">Creative Output</div>
            </div>
          </div>
        </div>

        {/* Global Reach Map */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Global AI Revolution Reach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-2">Worldwide Presence</h4>
              <div className="text-3xl font-black text-emerald-400 mb-2">195</div>
              <div className="text-sm text-gray-400">Countries with AI Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-xl font-bold mb-2">Global Network</h4>
              <div className="text-3xl font-black text-teal-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">AI Support Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Continuous Growth</h4>
              <div className="text-3xl font-black text-cyan-400 mb-2">∞</div>
              <div className="text-sm text-gray-400">Expanding Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAIGlobalImpact2025;