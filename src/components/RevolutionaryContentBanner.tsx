import React from 'react';
const RevolutionaryContentBanner: React.FC = () => {
<<<<<<< HEAD
=======
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Discover the most revolutionary technology breakthroughs reshaping our digital future",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟",
      badge: "NEW"
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "Welcome to the world's most advanced innovation hub where the future is being created",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-green-600 to-teal-600",
      icon: "🚀",
      badge: "HOT"
    },
    {
      title: "AI-Powered Future 2027",
      description: "Experience the next generation of artificial intelligence that will transform everything",
      link: "/pages/AIPoweredFuture2027",
      gradient: "from-blue-600 to-indigo-600",
      icon: "🤖",
      badge: "TRENDING"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-50e5
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
<<<<<<< HEAD
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover our latest breakthrough content showcasing the most advanced technologies of 2025-2026
          </p>
        </div>
        {/* Featured Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="text-8xl mb-4">{content.icon}</div>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white">
                          {content.badge}
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {content.title}
                        </h3>
                        <p className="text-lg text-purple-100 mb-6">
                          {content.description}
                        </p>
                        <a
                          href={content.link}
                          className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
=======
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div key={currentSlide} className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">{featuredContent[currentSlide].icon}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                {featuredContent[currentSlide].badge}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {featuredContent[currentSlide].title}
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {featuredContent[currentSlide].description}
            </p>
            
            <a
              href={featuredContent[currentSlide].link}
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg"
            >
              Explore Now →
            </a>
          </div>
          
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-50e5
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
<<<<<<< HEAD
        {/* Quick Access Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`group bg-gradient-to-br ${content.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 text-white`}
            >
              <div className="text-4xl mb-3">{content.icon}</div>
              <h4 className="text-xl font-bold mb-2">{content.title}</h4>
              <p className="text-sm opacity-90 mb-4">{content.description}</p>
              <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Learn More →
              </div>
            </a>
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      description: "Discover the most groundbreaking technological innovations reshaping our digital future",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "🌟 Ultimate Tech Showcase 2026",
      description: "Experience the ultimate showcase of cutting-edge technology innovations for 2026",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-cyan-600 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "🧪 Next-Gen Innovation Hub 2026",
      description: "Welcome to the world's most advanced innovation hub where the future is being created",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-green-600 to-teal-600",
      textColor: "text-white"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);
  return (
    <div className="relative overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future of Technology
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our latest revolutionary content showcasing the most advanced technological innovations 
              that are reshaping industries and creating new possibilities for humanity.
            </p>
          </div>
          {/* Banner Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBanner * 100}%)` }}
              >
                {banners.map((banner, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${banner.gradient} p-8 rounded-xl`}>
                      <div className="text-center">
                        <h3 className="text-3xl font-bold mb-4">{banner.title}</h3>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{banner.description}</p>
                        <a 
                          href={banner.link}
                          className={`inline-block bg-white ${banner.textColor} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Banner Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentBanner ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Quick Access Links */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {banners.map((banner, index) => (
              <a
                key={index}
                href={banner.link}
                className={`bg-gradient-to-r ${banner.gradient} p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
              >
                <div className="text-white font-semibold text-lg">{banner.title}</div>
                <div className="text-white/80 text-sm mt-1">Click to explore</div>
              </a>
            ))}
          </div>
          ))}
        </div>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-50e5
      </div>
    </div>
  );
};


export default RevolutionaryContentBanner;
</div></div></div>