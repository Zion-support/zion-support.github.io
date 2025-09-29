import React, { useState } from 'react';
import Link from 'next/link';
import { caseStudies } from '../src/content/case-studies';

interface CaseStudiesSectionProps {
  title?: string;
  subtitle?: string;
  maxStudies?: number;
  showFilter?: boolean;
}

export default function CaseStudiesSection({
  title = "Success Stories",
  subtitle = "Real results from real clients using our AI solutions",
  maxStudies = 3,
  showFilter = false
}: CaseStudiesSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const industries = ['all', ...Array.from(new Set(caseStudies.map(study => study.industry)))];
  
  const filteredStudies = selectedIndustry === 'all' 
    ? caseStudies.slice(0, maxStudies)
    : caseStudies.filter(study => study.industry === selectedIndustry).slice(0, maxStudies);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          {showFilter && (
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: any }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
            {study.industry}
          </span>
          <span className="text-sm text-gray-500">{study.duration}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
        <p className="text-sm text-gray-600 font-medium">{study.company}</p>
      </div>

      {/* Challenge */}
      <div className="p-6 border-b border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Challenge:</h4>
        <p className="text-sm text-gray-600 line-clamp-3">{study.challenge}</p>
      </div>

      {/* Results */}
      <div className="p-6">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Results:</h4>
        <div className="space-y-2">
          {study.results.slice(0, 2).map((result: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-xs">✓</span>
              <span className="text-sm text-gray-600">{result}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {study.technologies.slice(0, 4).map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {study.technologies.length > 4 && (
              <span className="text-gray-500 text-xs px-2 py-1">
                +{study.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/case-studies/${study.id}`}
          className="block w-full mt-4 bg-gray-900 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
        >
          Read Full Case Study
        </Link>
      </div>
    </div>
  );
}

// Compact version for homepage
export function CompactCaseStudiesSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Proven Results
          </h2>
          <p className="text-gray-600">
            See how our AI solutions have transformed businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study) => (
            <div key={study.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {study.industry}
                </span>
                <span className="text-xs text-gray-500">{study.duration}</span>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{study.title}</h3>
              <p className="text-xs text-gray-600 mb-3">{study.company}</p>
              
              <div className="space-y-1 mb-4">
                {study.results.slice(0, 1).map((result: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-1 mt-0.5 text-xs">✓</span>
                    <span className="text-xs text-gray-600">{result}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/case-studies/${study.id}`}
                className="text-blue-600 text-xs font-semibold hover:text-blue-700"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}