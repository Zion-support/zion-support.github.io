"use client";
'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  industry: string;
  image: string;
  quote: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  rating: number;
}

const TestimonialShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      image: "/images/testimonials/sarah-johnson.jpg",
      quote: "Zion Tech Group's AI transformation exceeded our wildest expectations. The 340% ROI and 65% reduction in downtime have revolutionized our operations. Their expertise and dedication made the complex implementation seamless.",
      results: [
        { metric: "ROI", value: "340%", improvement: "within 12 months" },
        { metric: "Downtime", value: "65%", improvement: "reduction" },
        { metric: "Cost Savings", value: "$2.3M", improvement: "annually" }
      ],
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "VP of Operations",
      company: "TechFlow Solutions",
      industry: "Technology",
      image: "/images/testimonials/michael-chen.jpg",
      quote: "The quantum-neural fusion technology implemented by Zion Tech Group has given us an incredible competitive advantage. Our processing speed increased by 10,000x, and we're now the market leader in our sector.",
      results: [
        { metric: "Processing Speed", value: "10,000x", improvement: "faster" },
        { metric: "Market Share", value: "35%", improvement: "increase" },
        { metric: "Customer Satisfaction", value: "98%", improvement: "rating" }
      ],
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Chief Medical Officer",
      company: "HealthFirst Medical",
      industry: "Healthcare",
      image: "/images/testimonials/emily-rodriguez.jpg",
      quote: "The AI diagnostic platform has transformed our patient care. We've achieved 99.8% accuracy in early disease detection, saving countless lives and reducing healthcare costs by 40%.",
      results: [
        { metric: "Diagnostic Accuracy", value: "99.8%", improvement: "accuracy" },
        { metric: "Cost Reduction", value: "40%", improvement: "savings" },
        { metric: "Patient Outcomes", value: "85%", improvement: "improvement" }
      ],
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      title: "CEO",
      company: "FinanceMax Group",
      industry: "Finance",
      image: "/images/testimonials/david-thompson.jpg",
      quote: "Zion Tech Group's AI-powered financial platform has revolutionized our investment strategies. We've achieved 500% returns on our AI-optimized portfolios while reducing risk by 60%.",
      results: [
        { metric: "Portfolio Returns", value: "500%", improvement: "increase" },
        { metric: "Risk Reduction", value: "60%", improvement: "decrease" },
        { metric: "Client Satisfaction", value: "95%", improvement: "rating" }
      ],
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Head of E-commerce",
      company: "RetailGiant",
      industry: "Retail",
      image: "/images/testimonials/lisa-wang.jpg",
      quote: "The autonomous customer service system handles 95% of our inquiries automatically. Our customer satisfaction increased by 80% while reducing support costs by 50%. It's been a game-changer.",
      results: [
        { metric: "Automation Rate", value: "95%", improvement: "inquiries handled" },
        { metric: "Customer Satisfaction", value: "80%", improvement: "increase" },
        { metric: "Support Costs", value: "50%", improvement: "reduction" }
      ],
      rating: 5
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies and innovative startups are transforming their businesses with our AI solutions
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Testimonial Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-purple-600 font-medium">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {currentTestimonial.industry}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Verified Results
                </span>
              </div>
            </div>

            {/* Results Metrics */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Key Results Achieved
              </h4>
              {currentTestimonial.results.map((result, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-500">
                        {result.improvement}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg">
                <div className="text-center">
                  <h5 className="font-semibold mb-2">Ready for Similar Results?</h5>
                  <p className="text-sm opacity-90 mb-3">
                    Get a free consultation to discover your potential ROI
                  </p>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-gray-50 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  isAutoPlaying 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {isAutoPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-purple-600 font-medium">
                  {testimonial.results[0].value} {testimonial.results[0].improvement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialShowcase;