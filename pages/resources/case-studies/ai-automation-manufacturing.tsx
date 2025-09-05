<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
export default function ResourceCaseStudyPage() {
  const caseStudy = {
    id: 'ai-automation-manufacturing',
    title: 'AI-Powered Manufacturing Automation',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    results: '40% increase in production efficiency, 60% reduction in downtime',
    description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.'
  },
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourceCaseStudyPage() {_const _caseStudy = {
    id: 'ai-automation-manufacturing', _title: 'AI-Powered Manufacturing Automation', _company: 'Global Manufacturing Corp', _industry: 'Manufacturing', _results: '40% increase in production efficiency, _60% reduction in downtime', _description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>{caseStudy.title} - Resource | Zion Tech Group</title>
        <meta name=&quot;description&quot; content={caseStudy.description} />
        <meta name=&quot;keywords&quot; content=&quot;AI automation, manufacturing, resource, case study, predictive maintenance&quot; />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            {/* Breadcrumb */}
            <nav className=&quot;mb-8&quot;>
              <Link href=&quot;/resources&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
=======
        <title>{_caseStudy.title} - Resource | Zion Tech Group</title>
        <meta name="description" content={_caseStudy.description} />
        <meta name="keywords" content="AI automation, manufacturing, resource, case study, predictive maintenance" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {_/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ← Back to Resources
              </Link>
            </nav>

<<<<<<< HEAD
            {/* Header */}
            <header className=&quot;mb-12 text-center&quot;>
              <div className=&quot;mb-4&quot;>
                <span className=&quot;px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30&quot;>
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>{caseStudy.title}</h1>
              <p className=&quot;text-xl text-cyan-400 font-semibold mb-4&quot;>{caseStudy.company}</p>
              <p className=&quot;text-white/80 text-lg max-w-3xl mx-auto&quot;>{caseStudy.description}</p>
            </header>

            {/* Key Results */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-green-400&quot;>Key Results</h2>
              <div className=&quot;bg-green-500/10 rounded-lg p-6 border border-green-500/20&quot;>
                <p className=&quot;text-white/90 text-lg&quot;>{caseStudy.results}</p>
              </div>
            </section>

            {/* Detailed Analysis */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-blue-400&quot;>Detailed Analysis</h2>
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;bg-blue-500/10 rounded-lg p-6 border border-blue-500/20&quot;>
                  <h3 className=&quot;text-xl font-semibold text-blue-400 mb-3&quot;>Implementation Strategy</h3>
                  <p className=&quot;text-white/90&quot;>
=======
            {_/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {_caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{_caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold mb-4">{_caseStudy.company}</p>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">{_caseStudy.description}</p>
            </header>

            {_/* Key Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Key Results</h2>
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <p className="text-white/90 text-lg">{_caseStudy.results}</p>
              </div>
            </section>

            {_/* Detailed Analysis */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Detailed Analysis</h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Implementation Strategy</h3>
                  <p className="text-white/90">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Our approach involved deploying autonomous AI systems across three key areas: predictive maintenance, 
                    quality control, and production optimization. Each system was designed to work independently while 
                    sharing data for comprehensive insights.
                  </p>
                </div>
                
                <div className=&quot;bg-purple-500/10 rounded-lg p-6 border border-purple-500/20&quot;>
                  <h3 className=&quot;text-xl font-semibold text-purple-400 mb-3&quot;>Technology Stack</h3>
                  <p className=&quot;text-white/90&quot;>
                    We utilized advanced machine learning algorithms, computer vision systems, IoT sensors, and 
                    predictive analytics to create a comprehensive automation solution that could adapt to changing 
                    production requirements.
                  </p>
                </div>
                
                <div className=&quot;bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20&quot;>
                  <h3 className=&quot;text-xl font-semibold text-yellow-400 mb-3&quot;>Business Impact</h3>
                  <p className=&quot;text-white/90&quot;>
                    The implementation resulted in significant improvements across all key metrics, with the most 
                    notable being the 40% increase in production efficiency and 60% reduction in unplanned downtime. 
                    These improvements directly translated to increased profitability and customer satisfaction.
                  </p>
                </div>
              </div>
            </section>

<<<<<<< HEAD
            {/* Related Resources */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-6 text-fuchsia-400&quot;>Related Resources</h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
=======
            {_/* Related Resources */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-fuchsia-400">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Link 
                  href=&quot;/case-studies/ai-automation-manufacturing&quot;
                  className=&quot;bg-fuchsia-500/10 rounded-lg p-6 border border-fuchsia-500/20 hover:border-fuchsia-400/50 transition-all duration-300&quot;
                >
                  <h3 className=&quot;text-lg font-semibold text-fuchsia-400 mb-2&quot;>Full Case Study</h3>
                  <p className=&quot;text-white/80 text-sm&quot;>Read the complete case study with detailed implementation insights.</p>
                </Link>
                
                <Link 
                  href=&quot;/resources/whitepapers/autonomous-systems-guide.pdf&quot;
                  className=&quot;bg-cyan-500/10 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300&quot;
                >
                  <h3 className=&quot;text-lg font-semibold text-cyan-400 mb-2&quot;>Autonomous Systems Guide</h3>
                  <p className=&quot;text-white/80 text-sm&quot;>Download our comprehensive guide to autonomous technology.</p>
                </Link>
              </div>
            </section>

<<<<<<< HEAD
            {/* Call to Action */}
            <section className=&quot;text-center&quot;>
              <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-white&quot;>Ready to Implement Similar Solutions?</h2>
                <p className=&quot;text-white/80 mb-6 max-w-2xl mx-auto&quot;>
=======
            {_/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Implement Similar Solutions?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  This resource demonstrates the real impact of AI automation in manufacturing. 
                  Let's discuss how we can help you achieve similar results.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <Link 
                    href=&quot;/contact&quot;
                    className=&quot;bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300&quot;
                  >
                    Get Started
                  </Link>
                  <Link 
                    href=&quot;/resources&quot;
                    className=&quot;px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300&quot;
                  >
                    Explore More Resources
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