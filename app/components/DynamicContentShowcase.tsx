'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcases = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights and automated reporting.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated alerts'],
      image: '/images/analytics-dashboard.jpg',
      category: 'AI Solutions'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Scalable and secure cloud solutions with automated scaling and monitoring.',
      features: ['Auto-scaling', 'Security monitoring', 'Cost optimization', 'Disaster recovery'],
      image: '/images/cloud-infrastructure.jpg',
      category: 'IT Services'
    },
    {
      id: 3,
      title: 'Micro SaaS Applications',
      description: 'Ready-to-use business tools that solve specific problems with AI and automation.',
      features: ['Quick deployment', 'Easy integration', 'Scalable architecture', 'User-friendly interface'],
      image: '/images/micro-saas.jpg',
      category: 'Micro SaaS'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % showcases.length)
  }, 4000);
      return () => clearInterval(interval)
  }
  }, [isPlaying, showcases.length]);

  const nextShowcase = () => {
    setCurrentIndex((prev) => (prev + 1) % showcases.length)
  };

  const prevShowcase = () => {
    setCurrentIndex((prev) => (prev - 1 + showcases.length) % showcases.length)
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  };

  const resetShowcase = () => {
    setCurrentIndex(0);
    setIsPlaying(true)
  };

  const currentShowcase = showcases[currentIndex];

  return (
    <div className="bg-slate-800/50 rounded-lg p-8"></div>
      <div className="text-center mb-8"></div>
        <h2 className="text-2xl font-bold text-white mb-4">Dynamic Solutions Showcase</h2>
        <p className="text-gray-300"></p>
          Explore our innovative solutions and see how they can transform your business
        </p>
      </div>

      <div className="relative"></div>
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-8 min-h-[400px] flex items-center"></div>
          <div className="w-full"></div>
            <div className="flex items-center justify-between mb-6"></div>
              <div className="flex items-center space-x-4"></div>
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold"></span>
                  {currentShowcase.category}
                </span>
                <span className="text-gray-400 text-sm"></span>
                  {currentIndex + 1} of {showcases.length}
                </span>
              </div>
              <div className="flex items-center space-x-2"></div>
                <button
                  onClick={prevShowcase}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label="Previous showcase"
                ></button>
                  <ArrowRight className="w-4 h-4 rotate-180" /></ArrowRight>
                </button>
                <button
                  onClick={togglePlayPause}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                ></button>
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={resetShowcase}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label="Reset showcase"
                ></button>
                  <RotateCcw className="w-4 h-4" /></RotateCcw>
                </button>
                <button
                  onClick={nextShowcase}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label="Next showcase"
                ></button>
                  <ArrowRight className="w-4 h-4" /></ArrowRight>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"></div>
              <div></div>
                <h3 className="text-3xl font-bold text-white mb-4">{currentShowcase.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{currentShowcase.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6"></div>
                  {currentShowcase.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4"></div>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  ></a>
                    Learn More
                  </a>
                  <a
                    href="/demo"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  ></a>
                    View Demo
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-8 text-center text-white"></div>
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2">Interactive Demo</h4>
                <p className="text-cyan-100"></p>
                  Experience our solutions in action
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center space-x-2"></div>
          {showcases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
              aria-label={`Go to showcase ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
  };

export default DynamicContentShowcase;