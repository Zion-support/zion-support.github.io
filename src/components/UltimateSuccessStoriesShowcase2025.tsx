"use client";
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SuccessStory {
  id: string;
  company: string;
  industry: string;
  logo: string;
  challenge: string;
  solution: string;
  results: {
    roi: number;
    efficiency: number;
    costSavings: number;
    timeReduction: number;
  };
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
  };
  technologies: string[];
  featured: boolean;
}

const UltimateSuccessStoriesShowcase2025: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const successStories: SuccessStory[] = [
    {
      id: '1',
      company: 'TechCorp Global',
      industry: 'Manufacturing',
      logo: '/images/techcorp-logo.png',
      challenge: 'Manual quality control processes were causing 15% defect rates and significant production delays.',
      solution: 'Implemented AI-powered computer vision system for real-time quality inspection and predictive maintenance.',
      results: {
        roi: 340,
        efficiency: 45,
        costSavings: 2500000,
        timeReduction: 60
      },
      testimonial: {
        quote: 'The AI implementation transformed our manufacturing process. We achieved 45% efficiency gains and reduced defects by 80%. The ROI was beyond our expectations.',
        author: 'Sarah Johnson',
        position: 'VP of Operations',
        avatar: '/images/sarah-johnson.jpg'
      },
      technologies: ['Computer Vision', 'Predictive Analytics', 'IoT Sensors', 'Machine Learning'],
      featured: true
    },
    {
      id: '2',
      company: 'FinanceFlow Inc',
      industry: 'Financial Services',
      logo: '/images/financeflow-logo.png',
      challenge: 'Manual loan processing was taking 5-7 days per application, causing customer dissatisfaction and operational bottlenecks.',
      solution: 'Deployed AI-powered document processing and risk assessment system with automated decision-making capabilities.',
      results: {
        roi: 280,
        efficiency: 70,
        costSavings: 1800000,
        timeReduction: 85
      },
      testimonial: {
        quote: 'Our loan processing time went from 5-7 days to under 2 hours. Customer satisfaction increased by 40% and we processed 300% more applications.',
        author: 'Michael Chen',
        position: 'Chief Technology Officer',
        avatar: '/images/michael-chen.jpg'
      },
      technologies: ['NLP', 'Document Processing', 'Risk Assessment', 'Automated Decisioning'],
      featured: true
    },
    {
      id: '3',
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      logo: '/images/healthtech-logo.png',
      challenge: 'Patient diagnosis accuracy was inconsistent, and radiologists were overwhelmed with imaging workload.',
      solution: 'Integrated AI-powered medical imaging analysis with clinical decision support system.',
      results: {
        roi: 420,
        efficiency: 55,
        costSavings: 3200000,
        timeReduction: 50
      },
      testimonial: {
        quote: 'The AI system improved our diagnostic accuracy by 35% and reduced reading time by 50%. It\'s been a game-changer for patient care.',
        author: 'Dr. Emily Rodriguez',
        position: 'Chief Medical Officer',
        avatar: '/images/emily-rodriguez.jpg'
      },
      technologies: ['Medical Imaging AI', 'Clinical Decision Support', 'Natural Language Processing', 'Predictive Analytics'],
      featured: false
    },
    {
      id: '4',
      company: 'RetailMax',
      industry: 'Retail',
      logo: '/images/retailmax-logo.png',
      challenge: 'Inventory management was inefficient, leading to stockouts and overstock situations affecting revenue.',
      solution: 'Implemented AI-driven demand forecasting and automated inventory optimization system.',
      results: {
        roi: 195,
        efficiency: 40,
        costSavings: 1200000,
        timeReduction: 75
      },
      testimonial: {
        quote: 'Our inventory turnover improved by 40% and stockouts decreased by 90%. The AI system pays for itself every quarter.',
        author: 'David Kim',
        position: 'Supply Chain Director',
        avatar: '/images/david-kim.jpg'
      },
      technologies: ['Demand Forecasting', 'Inventory Optimization', 'Machine Learning', 'Real-time Analytics'],
      featured: false
    },
    {
      id: '5',
      company: 'LogiFlow Systems',
      industry: 'Logistics',
      logo: '/images/logiflow-logo.png',
      challenge: 'Route optimization was manual and inefficient, causing fuel costs and delivery delays.',
      solution: 'Deployed AI-powered route optimization and fleet management system with real-time tracking.',
      results: {
        roi: 310,
        efficiency: 60,
        costSavings: 2100000,
        timeReduction: 45
      },
      testimonial: {
        quote: 'Fuel costs dropped by 25% and delivery times improved by 45%. Our drivers love the optimized routes and customers are happier.',
        author: 'Lisa Thompson',
        position: 'Operations Manager',
        avatar: '/images/lisa-thompson.jpg'
      },
      technologies: ['Route Optimization', 'Fleet Management', 'GPS Tracking', 'Predictive Analytics'],
      featured: false
    },
    {
      id: '6',
      company: 'EduTech Academy',
      industry: 'Education',
      logo: '/images/edutech-logo.png',
      challenge: 'Personalized learning was difficult to scale, and student engagement was declining.',
      solution: 'Implemented AI-powered adaptive learning platform with personalized content recommendations.',
      results: {
        roi: 180,
        efficiency: 35,
        costSavings: 800000,
        timeReduction: 30
      },
      testimonial: {
        quote: 'Student engagement increased by 60% and learning outcomes improved significantly. The AI adapts to each student\'s pace and style.',
        author: 'Prof. James Wilson',
        position: 'Academic Director',
        avatar: '/images/james-wilson.jpg'
      },
      technologies: ['Adaptive Learning', 'Personalization Engine', 'Learning Analytics', 'Content Recommendation'],
      featured: false
    }
  ];

  const industries = ['all', 'Manufacturing', 'Financial Services', 'Healthcare', 'Retail', 'Logistics', 'Education'];

  const filteredStories = selectedIndustry === 'all' 
    ? successStories 
    : successStories.filter(story => story.industry === selectedIndustry);

  const featuredStories = successStories.filter(story => story.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🏆 SUCCESS STORIES SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies across industries have transformed their operations 
            and achieved remarkable ROI with our AI solutions.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
              }`}
            >
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </div>

        {/* Featured Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">⭐ FEATURED CASE STUDY</span>
                    <span className="text-2xl font-bold">{story.results.roi}% ROI</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-gray-600">{story.company.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{story.company}</h4>
                      <p className="text-gray-600">{story.industry}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {story.challenge}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{story.results.roi}%</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{story.results.efficiency}%</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-lg font-bold text-gray-600">{story.company.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{story.company}</h4>
                      <p className="text-sm text-gray-600">{story.industry}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">{story.results.roi}%</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {story.challenge}
                </p>

                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>+{story.results.efficiency}% Efficiency</span>
                  <span>${(story.results.costSavings / 1000000).toFixed(1)}M Saved</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {story.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h3>
            <p className="text-xl text-gray-600">Our AI solutions deliver consistent, measurable results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">280%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-gray-600">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$2.1M</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Create Your Success Story?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
              Start Your AI Journey
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Modal for detailed story view */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedStory.company}</h3>
                  <p className="text-gray-600">{selectedStory.industry}</p>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Challenge</h4>
                  <p className="text-gray-700 mb-6">{selectedStory.challenge}</p>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">Solution</h4>
                  <p className="text-gray-700 mb-6">{selectedStory.solution}</p>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">{selectedStory.results.roi}%</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">{selectedStory.results.efficiency}%</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">${(selectedStory.results.costSavings / 1000000).toFixed(1)}M</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">{selectedStory.results.timeReduction}%</div>
                      <div className="text-sm text-gray-600">Time Reduction</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-3">Client Testimonial</h5>
                    <p className="text-gray-700 italic mb-4">"{selectedStory.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-900">{selectedStory.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{selectedStory.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UltimateSuccessStoriesShowcase2025;