import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
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
      description: "Explore cutting-edge technologies converging to create unprecedented possibilities",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🚀",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Ultimate Tech Showcase 2026",
      description: "Experience the most advanced technologies that will revolutionize industries",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🎯",
      badge: "FEATURED"cursor/fix-netlify-build-and-merge-to-main-a068
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

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
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;