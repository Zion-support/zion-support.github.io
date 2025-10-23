"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Globe,
} from "lucide-react";

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description:
        "Advanced AI technology to transform your business operations and improve efficiency",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Lightning-fast processing and real-time analytics for optimal results",
      features: [
        "Real-time Processing",
        "Scalable Architecture",
        "Optimized Performance",
        "Low Latency",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with encryption and compliance standards",
      features: [
        "End-to-End Encryption",
        "Compliance Standards",
        "Security Audits",
        "24/7 Monitoring",
      ],
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Worldwide deployment and support for international businesses",
      features: [
        "Multi-Region Support",
        "Local Compliance",
        "Global CDN",
        "International Support",
      ],
    },
  ];

  const benefits = [
    "Advanced AI technology integration",
    "Real-time processing and analytics",
    "Enterprise-grade security and compliance",
    "Scalable and flexible solutions",
    "24/7 technical support",
    "Easy integration with existing systems",
    "Cost-effective pricing plans",
    "Proven track record of success",
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative">
      {/* Carousel Container */}
        
          </div><div className="relative overflow-hidden rounded-2xl">

          {slides.map((slide, index) => (
        
          </div><div key={index} className="w-full flex-shrink-0">
        
          </div><div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 md:p-12">
        
          </div><div className="max-w-4xl mx-auto">
        
          </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
        
          </div><div>
        
          </div><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <slide.icon className="w-8 h-8 text-white" />
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {slide.title}
                      </h2>
          
          </div><p className="text-xl text-gray-300 mb-8">
                        {slide.description}
                      </p>

                      <ul className="space-y-3 mb-8">

                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>

                    {/* Visual Element */}
                    <div className="flex justify-center">
        
          </div><div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
        
          </div><div className="text-center">
        
          </div><div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <slide.icon className="w-12 h-12 text-white" />
          
          </div><p className="text-white/60 text-sm">
                            Interactive Demo
                          </p>
        </div>
      </div>
        </div>
      </div>
        </div>
      </div>
            </div>
          ))}
        </div>

          <ChevronLeft className="w-6 h-6" />
        </button>

          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">

          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16">
        
          </div><div className="text-center mb-12">
          <h$1 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
          
          </div><p className="text-gray-300 max-w-2xl mx-auto">
            Our solutions deliver unmatched value and performance for your
            business.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
