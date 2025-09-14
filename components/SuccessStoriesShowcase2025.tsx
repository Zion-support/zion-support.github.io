import React, { useState } from 'react';
import Link from 'next/link';

const SuccessStoriesShowcase2025 = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      size: "Fortune 100",
      roi: "3,000%",
      duration: "12 months",
      challenge: "Legacy system inefficiencies and manual processes",
      solution: "Comprehensive AI automation and intelligent systems",
      results: [
        "85% reduction in processing time",
        "95% decrease in manual errors",
        "100% system integration",
        "$150M annual cost savings"
      ],
      testimonial: "The AI transformation with Zion Tech Group has been nothing short of revolutionary. We've achieved results that exceeded our wildest expectations - a 3,000% ROI in just 12 months.",
      author: "Sarah Johnson, CEO",
      image: "/images/global-manufacturing-success.jpg"
    },
    {
      id: 2,
      company: "TechStart Innovations",
      industry: "Technology",
      size: "Startup to Unicorn",
      roi: "2,500%",
      duration: "18 months",
      challenge: "Rapid scaling and operational efficiency",
      solution: "AI-powered automation and predictive analytics",
      results: [
        "70% increase in productivity",
        "90% faster decision making",
        "60% reduction in operational costs",
        "3x faster product development"
      ],
      testimonial: "Zion Tech Group's AI solutions transformed us from a struggling startup to a unicorn company. The ROI speaks for itself - 2,500% in just 18 months.",
      author: "Michael Chen, Founder & CTO",
      image: "/images/techstart-success.jpg"
    },
    {
      id: 3,
      company: "Financial Services Global",
      industry: "Financial Services",
      size: "Fortune 500",
      roi: "1,200%",
      duration: "10 months",
      challenge: "Fraud detection and customer service",
      solution: "AI-powered fraud detection and customer experience optimization",
      results: [
        "95% reduction in fraud detection time",
        "80% improvement in customer satisfaction",
        "50% increase in transaction processing speed",
        "$200M additional revenue"
      ],
      testimonial: "Our AI implementation with Zion Tech Group has revolutionized our operations. We've seen incredible improvements in fraud detection and customer satisfaction.",
      author: "Jennifer Martinez, Chief Risk Officer",
      image: "/images/financial-services-success.jpg"
    },
    {
      id: 4,
      company: "Healthcare Solutions Inc",
      industry: "Healthcare",
      size: "Large Enterprise",
      roi: "1,800%",
      duration: "14 months",
      challenge: "Patient care optimization and operational efficiency",
      solution: "AI-driven patient care and operational automation",
      results: [
        "75% improvement in patient outcomes",
        "90% reduction in administrative tasks",
        "65% faster diagnosis",
        "40% increase in patient capacity"
      ],
      testimonial: "The AI solutions from Zion Tech Group have transformed our healthcare delivery. We're providing better care to more patients with incredible efficiency gains.",
      author: "Dr. Robert Kim, Chief Medical Officer",
      image: "/images/healthcare-success.jpg"
    }
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeStory];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="text-sm font-medium text-yellow-300">🏆 SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-blue-300 bg-clip-text text-transparent">
            Proven AI Success Stories
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Real companies, real results. See how our AI solutions have transformed businesses 
            across industries with measurable ROI and unprecedented success.
          </p>
        </div>

        {/* Main Success Story Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-4 py-2 rounded-full font-bold text-lg mr-4">
                  {currentStory.roi} ROI
                </div>
                <div className="text-sm opacity-90">
                  {currentStory.duration} • {currentStory.size}
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4 text-yellow-300">
                {currentStory.company}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                <strong>Industry:</strong> {currentStory.industry}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3 text-blue-300">Challenge</h4>
                <p className="opacity-90">{currentStory.challenge}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3 text-purple-300">Solution</h4>
                <p className="opacity-90">{currentStory.solution}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-300">Key Results</h4>
                <ul className="space-y-2">
                  {currentStory.results.map((result, index) => (
                    <li key={index} className="flex items-center opacity-90">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-400">
                <p className="text-lg italic mb-4">"{currentStory.testimonial}"</p>
                <cite className="text-sm opacity-90">- {currentStory.author}</cite>
              </blockquote>
            </div>

            {/* Story Image and Navigation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-yellow-300 mb-4">
                  {currentStory.roi}
                </div>
                <div className="text-2xl font-bold mb-2">Return on Investment</div>
                <div className="text-lg opacity-90 mb-6">in {currentStory.duration}</div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-300">
                      {currentStory.results.length}+
                    </div>
                    <div className="text-sm opacity-90">Key Improvements</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-300">
                      {currentStory.size}
                    </div>
                    <div className="text-sm opacity-90">Company Size</div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevStory}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextStory}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Story Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStory ? 'bg-yellow-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* All Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                index === activeStory ? 'border-yellow-400 bg-white/10' : 'border-white/20'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-2">
                  {story.roi}
                </div>
                <div className="text-sm opacity-90 mb-2">ROI</div>
                <div className="font-bold text-lg mb-1">{story.company}</div>
                <div className="text-sm opacity-90">{story.industry}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold mb-4 text-yellow-300">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Let us help you achieve similar results with our proven AI solutions. 
              Get a free consultation and custom implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Success Story
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase2025;