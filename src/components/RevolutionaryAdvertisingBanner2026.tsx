import React, { useState, useEffect } from 'react';

const RevolutionaryAdvertisingBanner2026: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [userInterests, setUserInterests] = useState<string[]>([]);

  const bannerContent = [
    {
      id: 1,
      title: "🚀 ULTIMATE TECH REVOLUTION 2026",
      subtitle: "Experience the Future Today",
      description: "Discover breakthrough technologies that will reshape reality as we know it. From synthetic consciousness to quantum consciousness, the impossible is now possible.",
      gradient: "from-purple-900 via-indigo-900 to-blue-900",
      link: "/pages/UltimateTechRevolution2026",
      features: ["Synthetic Consciousness", "Quantum Reality", "Neural Transcendence"],
      urgency: "LIMITED TIME",
      discount: "FREE ACCESS",
      icon: "🌟",
      stats: { performance: "10^18x", accuracy: "99.99%", autonomy: "24/7" }
    },
    {
      id: 2,
      title: "🧬 BREAKTHROUGH INNOVATIONS 2026",
      subtitle: "Revolutionary Science & Technology",
      description: "Witness the most significant scientific breakthroughs in human history. From space-time manipulation to synthetic biology, we're creating the impossible.",
      gradient: "from-emerald-900 via-teal-900 to-cyan-900",
      link: "/pages/BreakthroughInnovations2026",
      features: ["Space-Time Tech", "Synthetic Biology", "Consciousness Upload"],
      urgency: "EXCLUSIVE",
      discount: "EARLY ACCESS",
      icon: "🧬",
      stats: { breakthrough: "50+", funding: "$2B+", researchers: "500+" }
    },
    {
      id: 3,
      title: "⚡ NEXT-GEN INNOVATION HUB",
      subtitle: "Where the Future is Born",
      description: "Join the most advanced innovation ecosystem on Earth. Collaborate with world-class scientists and engineers to create tomorrow's technologies today.",
      gradient: "from-orange-900 via-red-900 to-pink-900",
      link: "/pages/NextGenInnovationHub2026",
      features: ["AI Labs", "Quantum Research", "Bio Engineering"],
      urgency: "INVITATION ONLY",
      discount: "APPLY NOW",
      icon: "⚡",
      stats: { projects: "50+", success: "100%", labs: "15+" }
    }
  ];

  const interestCategories = [
    { name: "AI & Machine Learning", emoji: "🧠", color: "from-purple-600 to-pink-600" },
    { name: "Quantum Computing", emoji: "⚛️", color: "from-cyan-600 to-blue-600" },
    { name: "Neural Interfaces", emoji: "🧬", color: "from-emerald-600 to-teal-600" },
    { name: "Space Technology", emoji: "🚀", color: "from-orange-600 to-red-600" },
    { name: "Biotechnology", emoji: "🧪", color: "from-green-600 to-emerald-600" },
    { name: "Physics Research", emoji: "⚡", color: "from-yellow-600 to-orange-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerContent.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('revolutionary-banner');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInterestSelect = (interest: string) => {
    setUserInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div id="revolutionary-banner" className="py-16">
      {/* Main Revolutionary Banner */}
      <div className="container mx-auto px-4 mb-12">
        <div className={`bg-gradient-to-r ${bannerContent[currentBanner].gradient} rounded-3xl p-12 text-white relative overflow-hidden transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mr-4 animate-pulse">
                    {bannerContent[currentBanner].urgency}
                  </span>
                  <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    {bannerContent[currentBanner].discount}
                  </span>
                </div>
                
                <h2 className="text-5xl font-bold mb-4 leading-tight">
                  {bannerContent[currentBanner].title}
                </h2>
                <h3 className="text-2xl text-white/90 mb-6">
                  {bannerContent[currentBanner].subtitle}
                </h3>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {bannerContent[currentBanner].description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {bannerContent[currentBanner].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Dynamic Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(bannerContent[currentBanner].stats).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-sm text-white/70 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={bannerContent[currentBanner].link}
                    className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg hover:scale-105 transform shadow-2xl"
                  >
                    Experience Now →
                  </a>
                  <a
                    href="/pages/RevolutionaryTechBreakthrough2026"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="text-9xl mb-6 opacity-50 animate-bounce">
                  {bannerContent[currentBanner].icon}
                </div>
                <div className="text-2xl font-bold mb-4">2026 Technology</div>
                <div className="text-white/70">Revolutionary Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interest-Based Content Recommendation */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🎯 Personalized Technology Recommendations</h3>
            <p className="text-xl text-gray-600">Select your interests to get customized content recommendations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {interestCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleInterestSelect(category.name)}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  userInterests.includes(category.name)
                    ? `bg-gradient-to-br ${category.color} text-white shadow-2xl ring-4 ring-white/50`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h4 className="text-lg font-bold mb-2">{category.name}</h4>
                <p className="text-sm opacity-90">
                  {userInterests.includes(category.name) ? 'Selected ✓' : 'Click to select'}
                </p>
              </button>
            ))}
          </div>

          {userInterests.length > 0 && (
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Your Personalized Recommendations</h4>
                <p className="text-white/90 mb-4">
                  Based on your interests: {userInterests.join(', ')}
                </p>
                <a
                  href="/pages/RevolutionaryTechBreakthrough2026"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold"
                >
                  Get Recommendations →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Banner Navigation */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center space-x-4">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-900 to-indigo-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-4xl font-bold mb-6">Join Thousands of Innovators</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Over 10,000 scientists, engineers, and technologists are already experiencing the future with our revolutionary technologies.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-lg text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg text-gray-300">Research Labs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-lg text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-lg text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdvertisingBanner2026;