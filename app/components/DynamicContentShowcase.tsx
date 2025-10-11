<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Cloud } from 'lucide-react'

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ComponentType<any>
  color: string
}
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  benefits: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const features: Feature[] = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business operations.',
      icon: Brain,
      benefits: [
        'Machine Learning Integration',
        'Predictive Analytics',
        'Automated Decision Making',
        'Natural Language Processing'
      ],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '3x', label: 'Faster Processing' }
      ]
=======
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      icon: Brain,
      color: 'from-purple-500 to-blue-600'
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
<<<<<<< HEAD
      icon: Globe,
      benefits: [
        'Auto-scaling Resources',
        'Global CDN',
        '99.9% Uptime',
        'Enterprise Security'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '50+', label: 'Data Centers' }
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and data.',
      icon: Shield,
      benefits: [
        'Real-time Threat Detection',
        'Zero-trust Architecture',
        'Compliance Management',
        'Incident Response'
      ],
      stats: [
        { value: '24/7', label: 'Monitoring' },
        { value: '<1min', label: 'Response Time' }
      ]
=======
      icon: Cloud,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 6,
      title: 'Global Scalability',
      description: 'Scale your operations worldwide with our global infrastructure',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans'
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding performance and reliability. Highly recommended for enterprise use.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'VP Technology',
      content: 'The best investment we made for our digital transformation journey.',
      rating: 5
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeature = features[currentIndex];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI and technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <currentFeature.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{currentFeature.title}</h3>
                <p className="text-gray-300">{currentFeature.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentFeature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {currentFeature.stats && (
              <div className="grid grid-cols-2 gap-4">
                {currentFeature.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <currentFeature.icon className="h-16 w-16 text-cyan-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{currentFeature.title}</h4>
                <p className="text-gray-300">{currentFeature.description}</p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
=======
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [features.length])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Features Showcase */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">
          Dynamic Content Showcase
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience our cutting-edge solutions through interactive demonstrations
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl text-white transform transition-all duration-500 ${
              index === currentIndex ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
            <p className="text-white/90">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Try Our Solutions</h3>
          <p className="text-gray-300 text-lg">Experience the power of our AI technology firsthand</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
          Get Started Today
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  )
}

export default DynamicContentShowcase
>>>>>>> cursor/fix-errors-and-merge-to-main-7ba6
