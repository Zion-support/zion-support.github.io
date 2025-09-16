"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const SuccessStoriesShowcase2026 = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const successStories = [
    {
      id: 1,
      company: 'TechCorp Global',
      industry: 'Technology',
      logo: '🏢',
      challenge: 'Needed to automate complex data processing workflows that were taking 40+ hours per week',
      solution: 'Implemented AI-powered automation system with neural network optimization',
      results: {
        timeSaved: '95%',
        costReduction: '80%',
        productivityIncrease: '300%',
        roi: '500%'
      },
      testimonial: 'The AI automation system transformed our operations completely. What used to take 40 hours now takes 2 hours, and the accuracy is incredible.',
      author: 'Sarah Johnson',
      position: 'CTO, TechCorp Global',
      image: '👩‍💼'
    },
    {
      id: 2,
      company: 'Quantum Dynamics',
      industry: 'Quantum Computing',
      logo: '⚛️',
      challenge: 'Required quantum-level security for sensitive financial data processing',
      solution: 'Deployed quantum encryption protocols with neural interface integration',
      results: {
        timeSaved: '90%',
        costReduction: '75%',
        productivityIncrease: '400%',
        roi: '600%'
      },
      testimonial: 'Our quantum security implementation exceeded all expectations. The neural interface makes complex operations feel effortless.',
      author: 'Dr. Michael Chen',
      position: 'Chief Quantum Officer, Quantum Dynamics',
      image: '👨‍🔬'
    },
    {
      id: 3,
      company: 'NeuralTech Solutions',
      industry: 'AI Research',
      logo: '🧠',
      challenge: 'Needed to scale AI model training from days to hours for real-time applications',
      solution: 'Implemented quantum-neural fusion architecture with advanced optimization',
      results: {
        timeSaved: '98%',
        costReduction: '85%',
        productivityIncrease: '500%',
        roi: '800%'
      },
      testimonial: 'The quantum-neural fusion technology is revolutionary. We can now train complex models in hours instead of days.',
      author: 'Dr. Elena Rodriguez',
      position: 'Head of AI Research, NeuralTech Solutions',
      image: '👩‍🔬'
    },
    {
      id: 4,
      company: 'Autonomous Enterprises',
      industry: 'Manufacturing',
      logo: '🏭',
      challenge: 'Required fully autonomous production lines with predictive maintenance',
      solution: 'Deployed autonomous business systems with AI-powered predictive analytics',
      results: {
        timeSaved: '92%',
        costReduction: '70%',
        productivityIncrease: '350%',
        roi: '450%'
      },
      testimonial: 'Our production lines now run autonomously with 99.9% uptime. The predictive maintenance prevents issues before they occur.',
      author: 'James Wilson',
      position: 'Operations Director, Autonomous Enterprises',
      image: '👨‍💼'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  const currentStory = successStories[activeStory];

  return (
    <div className={`py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies are transforming their operations with our AI solutions, 
            achieving remarkable ROI and unprecedented efficiency gains.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {story.logo} {story.company}
            </button>
          ))}
        </div>

        {/* Main Story Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Story Details */}
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{currentStory.logo}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentStory.company}</h3>
                  <p className="text-gray-600">{currentStory.industry}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">{currentStory.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">{currentStory.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{currentStory.results.timeSaved}</div>
                      <div className="text-sm text-gray-600">Time Saved</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{currentStory.results.costReduction}</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{currentStory.results.productivityIncrease}</div>
                      <div className="text-sm text-gray-600">Productivity Increase</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{currentStory.results.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 flex flex-col justify-center">
              <div className="text-6xl mb-6 text-center">{currentStory.image}</div>
              <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{currentStory.testimonial}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{currentStory.author}</div>
                <div className="text-gray-600">{currentStory.position}</div>
              </div>
            </div>
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successStories.map((story) => (
            <div
              key={story.id}
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeStory === story.id - 1 ? 'ring-2 ring-green-500' : ''
              }`}
              onClick={() => setActiveStory(story.id - 1)}
            >
              <div className="text-center">
                <div className="text-3xl mb-4">{story.logo}</div>
                <h4 className="font-bold text-gray-900 mb-2">{story.company}</h4>
                <p className="text-sm text-gray-600 mb-4">{story.industry}</p>
                <div className="text-2xl font-bold text-green-600 mb-2">{story.results.roi}</div>
                <div className="text-xs text-gray-500">ROI</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start your transformation journey today and achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View All Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase2026;