'use client';

import { useEffect } from 'react-helmet-async';
import {     ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: 
      title: 'AI-Powered Automation',
      description: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: 
      title: 'Cloud-Native Architecture',
      description: 'Built for the cloud with scalability, reliability, and performance at its core.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: 
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption, compliance, and threat protection.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: 
      title: 'Real-Time Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and business intelligence.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechCorp Solutions',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented have increased our efficiency by 300% and reduced costs significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'Their cloud migration services were exceptional. We achieved 99.9% uptime and our applications now run 5x faster than before.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Enterprises',
      content: 'The security enhancements they implemented gave us peace of mind. Our data is now more secure than ever, and we passed all compliance audits.',
      rating: 5
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Increase productivity and efficiency',
    'Enhance customer experience',
    'Improve data security and compliance',
    'Scale your business faster',
    'Gain competitive advantage',
    'Access to expert support',
    'Future-proof your technology'
  ];

  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
    
    return () => {
      // No cleanup needed when not playing
    };
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
  return (
    <div>

    <div>
  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

const prevTestimonial = () => {
  return (
    <div>

    <div>
  
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

const togglePlayPause = () => {
  return (
    <div>

    <div>
  
    setIsPlaying(!isPlaying);
  };

  return (
    <div>

    <div>
  
      {/* Hero Section */}
      <section>
  
  <div>
  
        <div>
  
          <h1>
  
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future</span> of Technology
          </h1>
          <p>
  
            Discover how our cutting-edge AI and IT solutions can transform your business and drive unprecedented growth.
          </p>
          <div>
  
            <button>
  
              <Zap>
  
              Get Started
            </button>
            <button>
  
              <ArrowRight>
  
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl font-bold text-white mb-6">Powerful Features</h2>
            <p>
  
              Our comprehensive suite of AI and IT solutions provides everything you need to succeed in the digital age.
            </p>
          </div>

          <div>
  
            {features.map((feature, index) => (
              <div>
  
                <div>
  
                  <feature>
  
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p>
  
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div>
  
            <div>
  
              <div>
  
                <div>
  
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star>
  
                  ))}
                </div>
                <blockquote>
  
                  "{currentTestimonial.content}"
                </blockquote>
                
                <div>
  
                  <div>
  
                    <Users>
  
                  </div>
                  <div>
  
                    <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                    <div className="text-gray-400">{currentTestimonial.role}</div>
                    <div className="text-purple-400 text-sm">{currentTestimonial.company}</div>
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
  
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Benefits</h2>
            <p>
  
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>

          <div>
  
            <div>
  
              {benefits.map((benefit, index) => (
                <div>
  
                  <CheckCircle>
  
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2>
  
              Ready to Experience the Future?
            </h2>
            <p>
  
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div>
  
              <button>
  
                <Zap>
  
                <span>Start Free Trial</span>
              </button>
              <button>
  
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;