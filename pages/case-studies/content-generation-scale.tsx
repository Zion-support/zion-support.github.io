<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
export default function CaseStudyPage() {
  const caseStudy = {
    id: 'content-generation-scale',
    title: 'Scaling Content Generation 10x',
    company: 'Digital Marketing Agency',
    industry: 'Marketing',
    challenge: 'Unable to meet client demand for high-quality content at scale',
    solution: 'Deployed autonomous content generation systems with human oversight and quality control',
    results: [
      '10x increase in content output85% improvement in engagement metrics70% reduction in content creation time95% client satisfaction rate'
    ],
    technologies: ['Natural Language ProcessingContent OptimizationSEO AutomationAnalytics'],
    duration: '4 months',
    teamSize: '5 engineers + 3 content specialists',
    featured: false
  },
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudyPage() {_const _caseStudy = {
    id: 'content-generation-scale', _title: 'Scaling Content Generation 10x', _company: 'Digital Marketing Agency', _industry: 'Marketing', _challenge: 'Unable to meet client demand for high-quality content at scale', _solution: 'Deployed autonomous content generation systems with human oversight and quality control', _results: [
      '10x increase in content output', _'85% improvement in engagement metrics', _'70% reduction in content creation time', _'95% client satisfaction rate'
    ], _technologies: ['Natural Language Processing', _'Content Optimization', _'SEO Automation', _'Analytics'], _duration: '4 months', _teamSize: '5 engineers + 3 content specialists', _featured: false};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
<<<<<<< HEAD
        <title>{caseStudy.title} - Case Study | Zion Tech Group</title>
        <meta name=&quot;description&quot; content={`Learn how ${caseStudy.company} achieved ${caseStudy.results[0]} with AI automation.`} />
        <meta name=&quot;keywords&quot; content=&quot;AI automation, content generation, marketing, case study, NLP, SEO automation&quot; />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900&quot;>
        <main className=&quot;pt-20 pb-16&quot;>
          <div className=&quot;max-w-4xl mx-auto px-6&quot;>
            {/* Breadcrumb */}
            <nav className=&quot;mb-8&quot;>
              <Link href=&quot;/case-studies&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
=======
        <title>{_caseStudy.title} - Case Study | Zion Tech Group</title>
        <meta name="description" content={_`Learn how ${caseStudy.company} achieved ${_caseStudy.results[0]} with AI automation.`} />
        <meta name="keywords" content="AI automation, _content generation, _marketing, _case study, _NLP, _SEO automation" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {_/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ← Back to Case Studies
              </Link>
            </nav>

<<<<<<< HEAD
            {/* Header */}
            <header className=&quot;mb-12 text-center&quot;>
              <div className=&quot;mb-4&quot;>
                <span className=&quot;px-4 py-2 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30&quot;>
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>{caseStudy.title}</h1>
              <p className=&quot;text-xl text-purple-400 font-semibold&quot;>{caseStudy.company}</p>
              <div className=&quot;mt-4 text-white/60&quot;>
                <span className=&quot;mr-6&quot;>Duration: {caseStudy.duration}</span>
                <span>Team: {caseStudy.teamSize}</span>
              </div>
            </header>

            {/* Challenge */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-red-400&quot;>The Challenge</h2>
              <div className=&quot;bg-red-500/10 rounded-lg p-6 border border-red-500/20&quot;>
                <p className=&quot;text-white/90 text-lg&quot;>{caseStudy.challenge}</p>
              </div>
            </section>

            {/* Solution */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-green-400&quot;>Our Solution</h2>
              <div className=&quot;bg-green-500/10 rounded-lg p-6 border border-green-500/20&quot;>
                <p className=&quot;text-white/90 text-lg&quot;>{caseStudy.solution}</p>
              </div>
            </section>

            {/* Technologies */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-blue-400&quot;>Technologies Used</h2>
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;>
                {caseStudy.technologies.map((tech, index) => (
                  <div key={index} className=&quot;bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center&quot;>
                    <span className=&quot;text-blue-400 font-semibold&quot;>{tech}</span>
=======
            {_/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                  {_caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{_caseStudy.title}</h1>
              <p className="text-xl text-purple-400 font-semibold">{_caseStudy.company}</p>
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                ))}
              </div>
            </section>

<<<<<<< HEAD
            {/* Results */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-yellow-400&quot;>Results Achieved</h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                {caseStudy.results.map((result, index) => (
                  <div key={index} className=&quot;bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20&quot;>
                    <div className=&quot;flex items-center gap-3&quot;>
                      <div className=&quot;w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center&quot;>
                        <span className=&quot;text-yellow-900 font-bold text-sm&quot;>✓</span>
                      </div>
                      <span className=&quot;text-white/90 font-semibold&quot;>{result}</span>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                ))}
              </div>
            </section>

<<<<<<< HEAD
            {/* Call to Action */}
            <section className=&quot;text-center&quot;>
              <div className=&quot;bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-white&quot;>Ready to Scale Your Content?</h2>
                <p className=&quot;text-white/80 mb-6 max-w-2xl mx-auto&quot;>
=======
            {_/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Scale Your Content?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  This case study demonstrates the real impact of AI automation in content generation. 
                  Let's discuss how we can help you achieve similar results.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <Link 
                    href=&quot;/contact&quot;
                    className=&quot;bg-gradient-to-r from-purple-400 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300&quot;
                  >
                    Get Started
                  </Link>
                  <Link 
                    href=&quot;/case-studies&quot;
                    className=&quot;px-8 py-4 border border-white/20 rounded-lg text-white hover:border-purple-400/50 transition-all duration-300&quot;
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
  )
}