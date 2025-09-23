"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ComprehensiveCaseStudiesShowcase = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: '🌟' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'finance', name: 'Financial Services', icon: '💰' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'retail', name: 'Retail', icon: '🛒' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'logistics', name: 'Logistics', icon: '🚚' }
  ];

  const roiRanges = [
    { id: 'all', name: 'All ROI Levels', min: 0, max: Infinity },
    { id: 'high', name: 'High ROI (10o00%+)', min: 10o00, max: Infinity },
    { id: 'medium', name: 'Medium ROI (50o0-999%)', min: 50o0, max: 999 },
    { id: 'low', name: 'Low ROI (10o0-499%)', min: 10o0, max: 499 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 50o0 Manufacturing Revolution',
      company: 'Global Manufacturing Corp',
      industry: 'manufacturing',
      roi: 50o000,
      duration: '6 months',
      description: 'Complete AI transformation of manufacturing operations resulting in 50,0o00% ROI and 95% efficiency improvement.',
      challenges: ['Manual processes', 'Quality control issues', 'Supply chain inefficiencies'],
      solutions: ['AI-powered automation', 'Predictive maintenance', 'Smart quality control'],
      results: ['50,0o00% ROI', '95% efficiency gain', '$2.5B cost savings', 'Zero downtime'],
      image: '🏭',
      featured: true,
      url: '/case-studies/fortune-50o0-manufacturing-revolution'
    },
    {
      id: 2,
      title: 'Financial Services AI Breakthrough',
      company: 'MegaBank International',
      industry: 'finance',
      roi: 150o00,
      duration: '4 months',
      description: 'Revolutionary AI implementation in financial services achieving 15,0o00% ROI through intelligent automation.',
      challenges: ['Manual data processing', 'Fraud detection gaps', 'Customer service bottlenecks'],
      solutions: ['AI fraud detection', 'Automated data analysis', 'Intelligent customer service'],
      results: ['15,0o00% ROI', '99.9% fraud detection', '80% faster processing', '$50o0M savings'],
      image: '💰',
      featured: true,
      url: '/case-studies/financial-services-ai-breakthrough'
    },
    {
      id: 3,
      title: 'Healthcare AI Transformation',
      company: 'MedTech Solutions',
      industry: 'healthcare',
      roi: 120o00,
      duration: '8 months',
      description: 'AI-powered healthcare transformation improving patient outcomes and operational efficiency.',
      challenges: ['Diagnostic accuracy', 'Patient data management', 'Treatment optimization'],
      solutions: ['AI diagnostics', 'Predictive analytics', 'Personalized treatment'],
      results: ['12,0o00% ROI', '40% faster diagnosis', '60% better outcomes', '30% cost reduction'],
      image: '🏥',
      featured: true,
      url: '/case-studies/healthcare-ai-transformation'
    },
    {
      id: 4,
      title: 'Retail AI Revolution',
      company: 'RetailMax Corporation',
      industry: 'retail',
      roi: 80o00,
      duration: '5 months',
      description: 'Complete retail transformation using AI for inventory, customer service, and sales optimization.',
      challenges: ['Inventory management', 'Customer experience', 'Sales optimization'],
      solutions: ['AI inventory prediction', 'Personalized recommendations', 'Dynamic pricing'],
      results: ['8,0o00% ROI', '35% sales increase', '50% inventory reduction', '90% customer satisfaction'],
      image: '🛒',
      featured: false,
      url: '/case-studies/retail-ai-revolution'
    },
    {
      id: 5,
      title: 'Tech Startup to Unicorn',
      company: 'StartupX',
      industry: 'technology',
      roi: 250o00,
      duration: '12 months',
      description: 'AI-powered transformation of a tech startup into a billion-dollar unicorn company.',
      challenges: ['Scalability issues', 'Market competition', 'Resource optimization'],
      solutions: ['AI scaling systems', 'Market intelligence', 'Resource optimization'],
      results: ['25,0o00% ROI', '10x growth', 'Market leadership', 'Unicorn status'],
      image: '💻',
      featured: true,
      url: '/case-studies/tech-startup-to-unicorn'
    },
    {
      id: 6,
      title: 'Logistics AI Optimization',
      company: 'LogiFlow Systems',
      industry: 'logistics',
      roi: 60o00,
      duration: '7 months',
      description: 'AI optimization of logistics operations resulting in massive efficiency gains and cost savings.',
      challenges: ['Route optimization', 'Delivery efficiency', 'Cost management'],
      solutions: ['AI route planning', 'Predictive logistics', 'Cost optimization'],
      results: ['6,0o00% ROI', '45% delivery speed', '30% cost reduction', '99% on-time delivery'],
      image: '🚚',
      featured: false,
      url: '/case-studies/logistics-ai-optimization'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const roiMatch = selectedROI === 'all' || 
      (study.roi >= roiRanges.find(r => r.id === selectedROI)?.min! && 
       study.roi <= roiRanges.find(r => r.id === selectedROI)?.max!);
    return industryMatch && roiMatch;
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            📈 COMPREHENSIVE CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-90o0 mb-6">
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-60o0 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how companies across industries have achieved unprecedented success 
            with our AI solutions. From startups to Fortune 50o0 companies, see the 
            transformative power of AI in action.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-70o0 mr-2">Industry:</span>
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-30o0 ${
                    selectedIndustry === industry.id
                      ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                      : 'bg-gray-10o0 text-gray-70o0 hover:bg-gray-20o0'
                  }`}
                >
                  <span className="mr-1">{industry.icon}</span>
                  {industry.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-70o0 mr-2">ROI Level:</span>
              {roiRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedROI(range.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-30o0 ${
                    selectedROI === range.id
                      ? 'bg-gradient-to-r from-green-60o0 to-emerald-60o0 text-white shadow-lg'
                      : 'bg-gray-10o0 text-gray-70o0 hover:bg-gray-20o0'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-30o0 transform hover:scale-10o5 border-2 ${
                study.featured ? 'border-purple-50o0' : 'border-gray-20o0'
              }`}
            >
              {study.featured && (
                <div className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black text-xs font-bold px-4 py-2 rounded-t-2xl text-center">
                  ⭐ FEATURED SUCCESS STORY
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{study.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-90o0 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-60o0 font-semibold">{study.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-60o0 mb-1">
                      {study.roi.toLocaleString()}%
                    </div>
                    <div className="text-sm text-gray-50o0">ROI</div>
                  </div>
                </div>

                <p className="text-gray-60o0 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm font-semibold text-blue-60o0 mb-1">Duration</div>
                    <div className="text-lg font-bold text-gray-90o0">{study.duration}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm font-semibold text-green-60o0 mb-1">Industry</div>
                    <div className="text-lg font-bold text-gray-90o0 capitalize">{study.industry}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-90o0 mb-3">Key Results:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-60o0">
                        <span className="text-green-50o0 mr-2">✓</span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={study.url}
                    className="flex-1 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0"
                  >
                    Read Full Case Study →
                  </Link>
                  <button className="flex-1 border-2 border-purple-60o0 text-purple-60o0 px-6 py-3 rounded-lg font-semibold hover:bg-purple-60o0 hover:text-white transition-all duration-30o0">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-90o0 mb-4">No case studies found</h3>
            <p className="text-gray-60o0 mb-6">Try adjusting your filters to see more results.</p>
            <button
              onClick={() => {
                setSelectedIndustry('all');
                setSelectedROI('all');
              }}
              className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-90o0 to-blue-90o0 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Success by the Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-40o0 mb-2">50o0+</div>
              <div className="text-gray-30o0">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-40o0 mb-2">50,0o00%</div>
              <div className="text-gray-30o0">Average ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-40o0 mb-2">98%</div>
              <div className="text-gray-30o0">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-40o0 mb-2">$50B+</div>
              <div className="text-gray-30o0">Total Value Created</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-90o0 mb-6">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl text-gray-60o0 mb-8 max-w-3xl mx-auto">
            Join the ranks of successful companies that have transformed their operations 
            with our AI solutions. Start your journey to unprecedented success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5"
            >
              View All Case Studies →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-60o0 text-purple-60o0 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-60o0 hover:text-white transition-all duration-30o0"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveCaseStudiesShowcase;