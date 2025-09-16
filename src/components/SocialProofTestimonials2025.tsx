"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightStarQuoteUsersAwardTrendingUpCheckCircleGlobeBuildingZap

export default function SocialProofTestimonials2025() {
  const [currentTestimonialsetCurrentTestimonial] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      company: "Fortune 500 Global Corporation",
      avatar: "SJ",
      content: "The AI transformation was nothing short of revolutionary. We achieved results that we never thought possible - a 10,000% ROI that has positioned us as the industry leader. The quantum-neural fusion technology and autonomous systems have completely transformed how we operate.",
      rating: 5,
      roi: "10,000%",
      industry: "Technology"
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      company: "Industrial Solutions Inc",
      avatar: "MC",
      content: "Autonomous AI systems revolutionized our production linereducing costs by 90% while increasing output by 500%. The implementation was seamless and the results exceeded all our expectations. This is the future of manufacturing.",
      rating: 5,
      roi: "8,500%",
      industry: "Manufacturing"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Medical Director",
      company: "Health Systems Network",
      avatar: "ER",
      content: "Predictive Intelligence helped us improve patient outcomes by 95% while reducing operational costs by 80%. The AI-powered diagnostics and treatment recommendations have been game-changing for our healthcare delivery.",
      rating: 5,
      roi: "5,000%",
      industry: "Healthcare"
    },
    {
      name: "David Kim",
      title: "Chief Financial Officer",
      company: "Global Finance Corp",
      avatar: "DK",
      content: "The AI-powered financial optimization platform delivered unprecedented results. We saw a 3,000% ROI in the first year alonewith automated risk assessment and portfolio optimization that outperformed all traditional methods.",
      rating: 5,
      roi: "3,000%",
      industry: "Finance"
    },
    {
      name: "Lisa Thompson",
      title: "VP of Operations",
      company: "Retail Solutions Group",
      avatar: "LT",
      content: "Our retail operations were completely transformed. The AI-driven inventory management and customer personalization systems increased sales by 400% while reducing waste by 85%. The ROI was immediate and substantial.",
      rating: 5,
      roi: "2,500%",
      industry: "Retail"
    }
  ];

  const stats = [
    { number: "500+"label: "Success Stories"icon: Users },
    { number: "15,000%"label: "Max ROI Achieved"icon: TrendingUp },
    { number: "99.9%"label: "Customer Satisfaction"icon: Star },
    { number: "50+"label: "Countries Served"icon: Globe },
    { number: "Fortune 500"label: "Companies Trust Us"icon: Building },
    { number: "24/7"label: "Expert Support"icon: Zap }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  const currentItem = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-sm font-bold mb-6">
            ⭐ TRUSTED BY INDUSTRY LEADERS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Social Proof &
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of organizations that have achieved extraordinary results with our AI breakthrough technologies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.number}</div>
              <div className="text-blue-200 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'}`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl font-bold">{currentItem.avatar}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{currentItem.name}</h3>
                  <div className="text-blue-200">{currentItem.title}</div>
                  <div className="text-blue-300">{currentItem.company}</div>
                </div>
              </div>
              
              <blockquote className="text-xl text-blue-100 leading-relaxed mb-6">
                "{currentItem.content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(currentItem.rating)].map((_i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">{currentItem.roi}</div>
                  <div className="text-sm text-blue-300">ROI Achieved</div>
                </div>
              </div>
            </div>

            {/* Testimonial Selector */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-6">More Success Stories</h4>
              {testimonials.map((testimonialindex) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-sm font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-blue-200">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">{testimonial.roi}</div>
                      <div className="text-xs text-blue-300">ROI</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Industry Awards</h3>
            <p className="text-blue-200">Recognized as the #1 AI Solutions Provider by leading industry publications</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certified Excellence</h3>
            <p className="text-blue-200">ISO 27001 certified with SOC 2 Type II compliance for enterprise security</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
            <p className="text-blue-200">Serving clients across 50+ countries with 24/7 multilingual support</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start your AI transformation journey today and achieve similar extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/case-studies" 
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}