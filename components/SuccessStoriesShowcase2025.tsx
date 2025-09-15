"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SuccessStoriesShowcase2025 = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual processes causing 40+ hours of weekly inefficiency",
      solution: "AI automation platform with predictive maintenance",
      results: {
        roi: "500%",
        costSavings: "$2.3M",
        productivity: "340%",
        timeReduction: "85%"
      },
      testimonial: "Zion Tech Group transformed our operations beyond our expectations. The AI automation platform not only reduced costs but also improved our product quality and employee satisfaction.",
      author: "Sarah Johnson",
      position: "CTO",
      image: "🏭",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      company: "SocialFlow AI",
      industry: "SaaS",
      challenge: "First-time entrepreneur with no technical expertise",
      solution: "Complete micro SaaS development from MVP to $100K ARR",
      results: {
        roi: "2000%",
        arr: "$100K",
        users: "1,200+",
        churn: "3.2%"
      },
      testimonial: "Working with Zion Tech Group was the best decision I made. They didn't just build my product; they became my business partners.",
      author: "Marcus Chen",
      position: "Founder",
      image: "🚀",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      company: "TechStart Solutions",
      industry: "Technology",
      challenge: "Scaling infrastructure to support rapid growth",
      solution: "Cloud-native architecture with AI-powered optimization",
      results: {
        roi: "800%",
        scalability: "10x",
        uptime: "99.9%",
        performance: "300%"
      },
      testimonial: "The scalability and performance improvements we achieved with Zion Tech Group's solutions exceeded all our expectations.",
      author: "Emily Rodriguez",
      position: "VP of Engineering",
      image: "⚡",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      company: "HealthTech Innovations",
      industry: "Healthcare",
      challenge: "Manual patient data processing and analysis",
      solution: "AI-powered diagnostic platform with predictive analytics",
      results: {
        roi: "600%",
        accuracy: "95%",
        timeReduction: "70%",
        patientSatisfaction: "98%"
      },
      testimonial: "The AI diagnostic platform revolutionized our patient care delivery and significantly improved outcomes.",
      author: "Dr. Michael Thompson",
      position: "Chief Medical Officer",
      image: "🏥",
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  const currentStory = successStories[activeStory];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            🏆 SUCCESS STORIES 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how companies across industries achieved unprecedented success 
            with our AI and technology solutions.
          </p>
        </div>

        {/* Main Success Story Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story Content */}
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl bg-gradient-to-br ${currentStory.gradient} text-white`}>
              <div className="text-6xl mb-4">{currentStory.image}</div>
              <h3 className="text-2xl font-bold mb-2">{currentStory.company}</h3>
              <p className="text-lg opacity-90 mb-6">{currentStory.industry}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                  <p className="opacity-90">{currentStory.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <p className="opacity-90">{currentStory.solution}</p>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentStory.results).map(([key, value]) => (
                <div key={key} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{value}</div>
                  <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">💬</div>
              <blockquote className="text-xl italic mb-6 leading-relaxed">
                "{currentStory.testimonial}"
              </blockquote>
              <div className="border-t border-white border-opacity-20 pt-4">
                <div className="font-bold text-lg">{currentStory.author}</div>
                <div className="text-sm opacity-75">{currentStory.position}, {currentStory.company}</div>
              </div>
            </div>

            {/* Story Navigation */}
            <div className="flex space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStory 
                      ? 'bg-yellow-400 scale-125' 
                      : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`group text-left p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                index === activeStory
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black'
                  : 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20'
              }`}
            >
              <div className="text-3xl mb-3">{story.image}</div>
              <h4 className="font-bold text-lg mb-2">{story.company}</h4>
              <p className="text-sm opacity-75 mb-3">{story.industry}</p>
              <div className="text-2xl font-bold mb-1">
                {index === activeStory ? story.results.roi || story.results.arr : 'View Story'}
              </div>
              <div className="text-xs opacity-75">
                {index === activeStory ? 'ROI Achieved' : 'Click to view'}
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their business with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
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