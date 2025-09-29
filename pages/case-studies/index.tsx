import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { caseStudies } from '../../src/content/case-studies';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real success stories from our AI solutions. See how we've helped companies save millions and transform their operations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Real results from real clients. Discover how our AI solutions have transformed businesses across industries, 
                generating millions in savings and driving unprecedented growth.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold">$50M+</div>
                  <div className="text-blue-100">Cost Savings Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                All Industries
              </button>
              {Array.from(new Set(caseStudies.map(study => study.industry))).map((industry) => (
                <button key={industry} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the companies that have transformed their operations with our AI solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function CaseStudyCard({ study }: { study: any }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {study.industry}
          </span>
          <span className="text-sm text-gray-500">{study.duration}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
        <p className="text-sm text-gray-600 font-medium">{study.company}</p>
      </div>

      {/* Challenge */}
      <div className="p-6 border-b border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
        <p className="text-sm text-gray-600 line-clamp-3">{study.challenge}</p>
      </div>

      {/* Solution */}
      <div className="p-6 border-b border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{study.solution}</p>
      </div>

      {/* Results */}
      <div className="p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
        <div className="space-y-2">
          {study.results.map((result: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-xs">✓</span>
              <span className="text-sm text-gray-600">{result}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {study.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
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