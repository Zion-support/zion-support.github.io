import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Mock whitepaper data - in a real app, this would come from an API or database
const _whitepapers = {_'autonomous-systems-guide': {
    id: 'autonomous-systems-guide', _title: 'The Complete Guide to Autonomous Systems', _description: 'A comprehensive overview of autonomous technology, _implementation strategies, _and best practices.', _category: 'Technology', _pages: '45', _author: 'Zion Tech Group Research Team', _publishDate: 'January 2025', _content: {
      executiveSummary: 'This comprehensive guide explores the fundamentals of autonomous systems, _from basic concepts to advanced implementation strategies. Learn how organizations can leverage autonomous technology to drive innovation and competitive advantage.', _keyTopics: [
        'Understanding Autonomous Systems', _'Implementation Strategies', _'Best Practices & Case Studies', _'Future Trends & Predictions'
      ], _targetAudience: 'Technology leaders, _engineers, _and business professionals interested in implementing autonomous systems.'}
  },
  'ai-ethics-framework': {_id: 'ai-ethics-framework', _title: 'AI Ethics Framework for Business', _description: 'Establishing ethical guidelines for AI implementation in enterprise environments.', _category: 'Ethics', _pages: '32', _author: 'Zion Tech Group Ethics Committee', _publishDate: 'January 2025', _content: {
      executiveSummary: 'This framework provides organizations with a structured approach to implementing AI systems ethically and responsibly. Learn how to balance innovation with ethical considerations.', _keyTopics: [
        'Ethical AI Principles', _'Implementation Guidelines', _'Risk Assessment & Mitigation', _'Compliance & Governance'
      ], _targetAudience: 'Business leaders, _compliance officers, _and AI practitioners focused on responsible AI development.'}
  },
  'automation-roi-calculator': {_id: 'automation-roi-calculator', _title: 'Automation ROI Calculator Guide', _description: 'How to calculate and maximize return on investment for automation initiatives.', _category: 'Business', _pages: '28', _author: 'Zion Tech Group Business Analytics Team', _publishDate: 'January 2025', _content: {
      executiveSummary: 'This practical guide helps organizations calculate and maximize ROI for automation initiatives. Learn how to measure success and justify automation investments.', _keyTopics: [
        'ROI Calculation Methods', _'Cost-Benefit Analysis', _'Success Metrics & KPIs', _'Investment Justification Strategies'
      ], _targetAudience: 'Business analysts, _project managers, _and executives evaluating automation investments.'}
  }
};

export default function WhitepaperPage() {_const _router = useRouter();
  const { id} = router.query;
  
  const _whitepaper = whitepapers[id as keyof typeof whitepapers];

  if (!whitepaper) {_return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Whitepaper Not Found</h1>
            <p className="text-white/80 mb-8">The requested whitepaper could not be found.</p>
            <Link href="/resources" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
              Back to Resources
            </Link>
          </div>
        </main>
      </div>
    );}

  return (_<>
      <Head>
        <title>{_whitepaper.title} | Zion Tech Group</title>
        <meta name="description" content={_whitepaper.description} />
        <meta property="og:title" content={_whitepaper.title} />
        <meta property="og:description" content={_whitepaper.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {_/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Resources
            </Link>
          </nav>

          {_/* Header */}
          <header className="text-center mb-16">
            <div className="mb-6">
              <span className="px-4 py-2 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                {_whitepaper.category}
              </span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              {_whitepaper.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
              {_whitepaper.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <span>By {_whitepaper.author}</span>
              <span>•</span>
              <span>{_whitepaper.pages} pages</span>
              <span>•</span>
              <span>{_whitepaper.publishDate}</span>
            </div>
          </header>

          {_/* Whitepaper Content */}
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Executive Summary</h2>
              <p className="text-lg text-white/80">{_whitepaper.content.executiveSummary}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Key Topics Covered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {_whitepaper.content.keyTopics.map((topic, _index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/90">{_topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Target Audience</h2>
              <p className="text-lg text-white/80">{_whitepaper.content.targetAudience}</p>
            </section>

            {_/* Download Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Download?</h2>
                <p className="text-white/80 mb-6">
                  Get instant access to this comprehensive whitepaper and start implementing autonomous systems today.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 text-white rounded-lg font-semibold hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 text-lg">
                  Download {_whitepaper.title}
                </button>
                <p className="text-white/60 text-sm mt-4">
                  PDF format • {_whitepaper.pages} pages • Free download
                </p>
              </div>
            </section>

            {_/* Related Whitepapers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Explore More Whitepapers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {_Object.values(whitepapers)
                  .filter(w => w.id !== whitepaper.id)
                  .slice(0, _2)
                  .map(_(relatedPaper) => (
                    <Link 
                      key={relatedPaper.id}
                      href={_`/resources/whitepapers/${relatedPaper.id}`}
                      className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                        {_relatedPaper.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">{_relatedPaper.description}</p>
                      <span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                        {_relatedPaper.category}
                      </span>
                    </Link>
                  ))}
              </div>
            </section>

            {_/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Need Custom Research?</h2>
                <p className="text-white/80 mb-6">
                  Our research team can conduct custom studies and create whitepapers tailored to your specific industry and needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Contact Us
                  </Link>
                  <Link href="/services" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                    Our Services
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