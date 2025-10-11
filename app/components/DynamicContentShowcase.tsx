'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Zap, Shield, Globe, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600',},
    {id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
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
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600';
    };
  ];
  const benefits = const benefits = const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',;
    'Cost-effective pricing plans',;
    'Proven track record of success';
  ];

  const testimonials = const testimonials = const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5;
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding performance and reliability. Our team productivity increased by 300%.',
      rating: 5;
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'The best investment we made. Seamless integration and exceptional support.',
      rating: 5;
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [features.length]);

        ))}
      </div>

      {/* Benefits Section */}
          ))}
        </div>
      </div>

      {/* Testimonials */}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
        </button>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
