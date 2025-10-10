'use client';

import React from 'react';
import { 
  ArrowRight,
  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "Fortune 500 Tech Company: 85% Efficiency Increase",
      company: "TechCorp",
      industry: "Technology",
      challenge: "Manual processes causing bottlenecks and inefficiencies",
      solution: "AI Workflow Automation Platform",
      results: [
        "85% increase in operational efficiency",
        "$2.3M annual cost savings",
        "60% reduction in processing time",
        "99.9% accuracy in automated tasks"
      ],
      testimonial: "Zion Tech Group's AI solutions transformed our operations. The ROI was evident within the first quarter.",
      author: "Sarah Chen, CTO",
      image: "/images/case-studies/techcorp.jpg",
      duration: "6 months"
    },
    {
      title: "Global Pharmaceuticals: 60% Faster Drug Discovery",
      company: "Global Pharmaceuticals Inc.",
      industry: "Healthcare",
      challenge: "Traditional drug discovery taking 2+ years per compound",
      solution: "AI Drug Discovery Pro Platform",
      results: [
        "60% faster research timeline",
        "3 new compounds discovered in 6 months",
        "40% reduction in research costs",
        "95% accuracy in molecular predictions"
      ],
      testimonial: "The AI Drug Discovery Pro platform accelerated our research beyond our expectations.",
      author: "Dr. Michael Rodriguez, Research Director",
      image: "/images/case-studies/pharma.jpg",
      duration: "8 months"
    },
    {
      title: "GreenTech Solutions: 40% Carbon Footprint Reduction",
      company: "GreenTech Solutions",
      industry: "Environmental",
      challenge: "High carbon footprint and inefficient energy usage",
      solution: "AI Climate Solutions Pro",
      results: [
        "40% reduction in carbon footprint",
        "25% improvement in energy efficiency",
        "30% cost savings on energy bills",
        "Real-time environmental monitoring"
      ],
      testimonial: "Their climate solutions helped us achieve our sustainability goals while improving efficiency.",
      author: "Jennifer Walsh, VP of Operations",
      image: "/images/case-studies/greentech.jpg",
      duration: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their operations with AI and technology.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                        {study.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                          <span>{study.company}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {study.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {study.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <blockquote className="text-gray-300 italic mb-4">
                            "{study.testimonial}"
                          </blockquote>
                          <div className="text-sm text-cyan-400 font-semibold">
                            {study.author}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      Read Full Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results across industries and business sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the hundreds of companies that have transformed their business with our AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;