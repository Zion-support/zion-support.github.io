import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {_const _caseStudy = {
    id: 'ai-automation-manufacturing', _title: 'AI-Powered Manufacturing Automation', _company: 'Global Manufacturing Corp', _industry: 'Manufacturing', _challenge: 'Inefficient production processes, _high downtime, _and quality control issues', _solution: 'Implemented autonomous AI systems for predictive maintenance, _quality control, _and production optimization', _results: [
      '40% increase in production efficiency', _'60% reduction in unplanned downtime', _'35% improvement in product quality', _'25% reduction in operational costs'
    ], _technologies: ['Machine Learning', _'Computer Vision', _'IoT Sensors', _'Predictive Analytics'], _duration: '6 months', _teamSize: '8 engineers', _featured: true};

  return (_<>
      <Head>
        <title>{_caseStudy.title} - Case Study | Zion Tech Group</title>
        <meta name="description" content={_`Learn how ${caseStudy.company} achieved ${_caseStudy.results[0]} with AI automation.`} />
        <meta name="keywords" content="AI automation, _manufacturing, _case study, _predictive maintenance, _quality control" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {_/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
              </Link>
            </nav>

            {_/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {_caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{_caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold">{_caseStudy.company}</p>
              <div className="mt-4 text-white/60">
                <span className="mr-6">Duration: {_caseStudy.duration}</span>
                <span>Team: {_caseStudy.teamSize}</span>
              </div>
            </header>

            {_/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-red-400">The Challenge</h2>
              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <p className="text-white/90 text-lg">{_caseStudy.challenge}</p>
              </div>
            </section>

            {_/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Our Solution</h2>
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <p className="text-white/90 text-lg">{_caseStudy.solution}</p>
              </div>
            </section>

            {_/* Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {_caseStudy.technologies.map((tech, _index) => (
                  <div key={index} className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                    <span className="text-blue-400 font-semibold">{_tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {_/* Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Results Achieved</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {_caseStudy.results.map(_(result, _index) => (
                  <div key={index} className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-yellow-900 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-white/90 font-semibold">{_result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {_/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Achieve Similar Results?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This case study demonstrates the real impact of AI automation in manufacturing. 
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
                  >
                    View More Case Studies
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}