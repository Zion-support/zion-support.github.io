'use client';
import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface DynamicContentShowcaseProps {
  testimonials?: Testimonial[];
  features?: Feature[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The AI solutions provided by Zion Tech Group have transformed our operations. Highly recommended!',
      rating: 5,
      avatar: '/images/avatars/sarah-johnson.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Exceptional service and cutting-edge technology. Our productivity has increased by 40%.',
      rating: 5,
      avatar: '/images/avatars/michael-chen.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'CloudFirst Inc',
      role: 'VP of Engineering',
      content: 'Professional team with deep expertise. They delivered exactly what we needed.',
      rating: 5,
      avatar: '/images/avatars/emily-rodriguez.jpg'
    }
  ],
  features = [
    {
      id: '1',
      title: 'AI-Powered Analytics',
      description: 'Get insights from your data with advanced machine learning algorithms',
      icon: <Star className="w-8 h-8 text-blue-500" />,
      benefits: ['Real-time insights', 'Predictive analytics', 'Automated reporting']
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: <Play className="w-8 h-8 text-green-500" />,
      benefits: ['99.9% uptime', 'Auto-scaling', 'Global CDN']
    },
    {
      id: '3',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security',
      icon: <Pause className="w-8 h-8 text-purple-500" />,
      benefits: ['24/7 monitoring', 'Threat detection', 'Compliance ready']
    }
  ],
  autoRotate = true,
  rotationInterval = 5000
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoRotate);

  useEffect(() => {
    if (isPlaying && autoRotate) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, rotationInterval);

      return () => clearInterval(timer);
    }
  }, [isPlaying, autoRotate, rotationInterval, testimonials.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <Quote className="w-12 h-12 text-blue-500 mb-4" />
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              <button
                onClick={togglePlayPause}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-blue-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions that drive real business results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
