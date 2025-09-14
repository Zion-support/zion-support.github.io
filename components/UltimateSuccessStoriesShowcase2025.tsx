'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateSuccessStoriesShowcase2025 = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Manual inventory management causing 30% efficiency loss",
      solution: "AI-powered inventory automation system",
      results: {
        efficiency: "85%",
        costReduction: "60%",
        timeSaved: "40 hours/week",
        roi: "340%"
      },
      testimonial: "Zion Tech Group transformed our operations completely. The AI automation system they built increased our efficiency by 85% and saved us $2.3M annually.",
      author: "Sarah Johnson, CTO",
      image: "/images/success-techcorp.jpg",
      category: "AI Automation"
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Manual data processing taking 20+ hours per week",
      solution: "Intelligent document processing and workflow automation",
      results: {
        efficiency: "92%",
        costReduction: "75%",
        timeSaved: "18 hours/week",
        roi: "450%"
      },
      testimonial: "The document processing automation reduced our manual work by 92%. We can now process 10x more documents in half the time.",
      author: "Michael Chen, Operations Director",
      image: "/images/success-financeflow.jpg",
      category: "Process Automation"
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Patient data scattered across multiple systems",
      solution: "Unified AI-powered patient management platform",
      results: {
        efficiency: "78%",
        costReduction: "50%",
        timeSaved: "25 hours/week",
        roi: "280%"
      },
      testimonial: "Our patient care improved dramatically. The unified platform reduced data entry time by 78% and improved patient satisfaction by 40%.",
      author: "Dr. Emily Rodriguez, Medical Director",
      image: "/images/success-healthtech.jpg",
      category: "Data Integration"
    },
    {
      id: 4,
      company: "RetailMax Chain",
      industry: "Retail",
      challenge: "Outdated inventory system causing stockouts and overstock",
      solution: "AI-driven demand forecasting and inventory optimization",
      results: {
        efficiency: "88%",
        costReduction: "65%",
        timeSaved: "35 hours/week",
        roi: "520%"
      },
      testimonial: "The AI forecasting system eliminated stockouts completely and reduced excess inventory by 65%. Our profit margins increased by 23%.",
      author: "David Park, Supply Chain Manager",
      image: "/images/success-retailmax.jpg",
      category: "Predictive Analytics"
    },
    {
      id: 5,
      company: "EduTech Academy",
      industry: "Education",
      challenge: "Manual student progress tracking and personalized learning",
      solution: "AI-powered learning management and personalization engine",
      results: {
        efficiency: "95%",
        costReduction: "70%",
        timeSaved: "30 hours/week",
        roi: "380%"
      },
      testimonial: "Student engagement increased by 95% with personalized learning paths. Our teachers can now focus on teaching instead of administrative tasks.",
      author: "Lisa Thompson, Principal",
      image: "/images/success-edutech.jpg",
      category: "Personalization"
    }
  ];

  const categories = [...new Set(successStories.map(story => story.category))];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 SUCCESS STORIES 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve extraordinary results with AI and automation solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveStory(0)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeStory === 0
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Stories
          </button>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveStory(index + 1)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeStory === index + 1
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {successStories
            .filter(story => 
              activeStory === 0 || story.category === categories[activeStory - 1]
            )
            .map((story, index) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {story.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                      <p className="text-gray-600">{story.industry}</p>
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {story.category}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{story.challenge}</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{story.solution}</p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{story.results.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{story.results.costReduction}</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{story.results.timeSaved}</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{story.results.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{story.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {story.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">{story.author}</div>
                      <div className="text-sm text-gray-600">{story.company}</div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven AI and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Success Story
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateSuccessStoriesShowcase2025;