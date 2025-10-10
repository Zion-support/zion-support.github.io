'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Zap, Shield, Globe, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    
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
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
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
      color: 'from-teal-500 to-cyan-600'
    }
  ];];];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success';
  ];

  const testimonials = [
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
    }
  ];

  useEffect(() => {];];
    const timer = setInterval(() => ;
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Features Showcase */}
      </div></div><div className="text-center mb-16">
        </div></div><h2 className="text-3xl font-bold text-white mb-4">
          Dynamic Content Showcase;
        </h2></h2></h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience our cutting-edge solutions through interactive demonstrations;
        </p></p></p>
      </div>

      {/* Feature Cards */})
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">)
        {features.map((feature, index) => (
          </div></div><div;
            key=feature.id}
            className={`bg-gradient-to-br $feature.color} p-6 rounded-2xl text-white transform transition-all duration-500 ${
              index === currentIndex ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}
          >
            </div></div><div className="flex items-center mb-4">
              </div></div><div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                </div></div><feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3></h3></h3>
            </div>
            <p className="text-white/90">{feature.description}</p></p></p>)
          </div>)
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
        </div></div><h3 className="text-2xl font-bold text-white mb-6 text-center">Key Benefits</h3></h3></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            </div></div><div key=index} className="flex items-center space-x-3">
              </div></div><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span></span></span>)
            </div>)
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          </div></div><div key=index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">)</div></div><div className="flex items-center mb-4">)
              {[...Array(testimonial.rating)].map((_, i) => ()</div></div><Star key=i} className="w-5 h-5 text-yellow-400 fill-current" />)
              ))}
            </div>
            <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p></p></p>
            <div className="border-t border-white/10 pt-4">
              </div></div><p className="text-white font-semibold">{testimonial.name}</p></p></p>
              <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p></p></p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        </div></div><button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
          Get Started Today;
          </button></button><ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
