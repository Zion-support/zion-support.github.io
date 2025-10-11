'use client';

import { useEffect } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, Play, Pause, Target } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      icon: 
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence that automates processes and drives innovation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: 
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business needs.',
      features: ['Auto-scaling', 'High Availability', 'Disaster Recovery', 'Global CDN'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: 
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption, compliance, and threat protection.',
      features: ['End-to-End Encryption', 'Multi-Factor Authentication', 'Compliance Standards', 'Threat Detection'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: 
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics and business intelligence.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Predictive Modeling'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: 
      title: 'Team Collaboration',
      description: 'Enhance productivity with tools that connect your team and streamline workflows.',
      features: ['Project Management', 'Communication Tools', 'File Sharing', 'Task Automation'],
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: Target,
      title: 'Custom Development',
      description: 'Tailored solutions designed specifically for your unique business requirements.',
      features: ['Custom Applications', 'API Integration', 'Legacy Modernization', 'Mobile Development'],
      color: 'from-red-400 to-pink-500'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
    
    return () => {
      // No cleanup needed when not playing
    };
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
  return (
    <div>

    <div>
  
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

const prevSlide = () => {
  return (
    <div>

    <div>
  
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

const togglePlayPause = () => {
  return (
    <div>

    <div>
  
    setIsPlaying(!isPlaying);
  };

const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

const currentSlideData = slides[currentSlide];

  return (
    <div>

    <div>
  
      <div>
  
        {/* Header */}
        <div>
  
          <h2>
  
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p>
  
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div>
  
          <div>
  
            <div>
  
              {/* Content */}
              <div>
  
                <div>
  
                  <div>
  
                    <currentSlideData>
  
                  </div>
                  <div>
  
                    <h3>
  
                      {currentSlideData.title}
                    </h3>
                    <p>
  
                      {currentSlideData.description}
                    </p>
                  </div>
                </div>

                <div>
  
                  {currentSlideData.features.map((feature, index) => (
                    <div>
  
                      <CheckCircle>
  
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div>
  
                  <button>
  
                    Learn More
                  </button>
                  <button>
  
                    Get Started
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div>
  
                <div>
  
                  <div>
  
                    <div>
  
                      <currentSlideData>
  
                    </div>
                    <div>
  
                      {currentSlideData.title}
                    </div>
                    <div>
  
                      Slide {currentSlide + 1} of {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div>
  
            <button>
  
              <ChevronLeft>
  
            </button>
            
            <button>
  
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            
            <button>
  
              <ChevronRight>
  
            </button>
          </div>

          {/* Dots Indicator */}
          <div>
  
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;