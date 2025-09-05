import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { useRouter } from 'next/router',
// Mock whitepaper data - in a real app, this would come from an API or database
const whitepapers = {
  'autonomous-systems-guide': {
    id: 'autonomous-systems-guide',
    title: 'The Complete Guide to Autonomous Systems',
    description: 'A comprehensive overview of autonomous technology, implementation strategies, and best practices.',
    category: 'Technology',
    pages: '45',
    author: 'Zion Tech Group Research Team',
    publishDate: 'January 2025',
    content: {
      executiveSummary: 'This comprehensive guide explores the fundamentals of autonomous systems, from basic concepts to advanced implementation strategies. Learn how organizations can leverage autonomous technology to drive innovation and competitive advantage.',
      keyTopics: [
        'Understanding Autonomous SystemsImplementation StrategiesBest Practices & Case StudiesFuture Trends & Predictions'
      ],
      targetAudience: 'Technology leaders, engineers, and business professionals interested in implementing autonomous systems.'
    }
  },
  'ai-ethics-framework': {
    id: 'ai-ethics-framework',
    title: 'AI Ethics Framework for Business',
    description: 'Establishing ethical guidelines for AI implementation in enterprise environments.',
    category: 'Ethics',
    pages: '32',
    author: 'Zion Tech Group Ethics Committee',
    publishDate: 'January 2025',
    content: {
      executiveSummary: 'This framework provides organizations with a structured approach to implementing AI systems ethically and responsibly. Learn how to balance innovation with ethical considerations.',
      keyTopics: [
        'Ethical AI PrinciplesImplementation GuidelinesRisk Assessment & MitigationCompliance & Governance'
      ],
      targetAudience: 'Business leaders, compliance officers, and AI practitioners focused on responsible AI development.'
    }
  },
  'automation-roi-calculator': {
    id: 'automation-roi-calculator',
    title: 'Automation ROI Calculator Guide',
    description: 'How to calculate and maximize return on investment for automation initiatives.',
    category: 'Business',
    pages: '28',
    author: 'Zion Tech Group Business Analytics Team',
    publishDate: 'January 2025',
    content: {
      executiveSummary: 'This practical guide helps organizations calculate and maximize ROI for automation initiatives. Learn how to measure success and justify automation investments.',
      keyTopics: [
        'ROI Calculation MethodsCost-Benefit AnalysisSuccess Metrics & KPIsInvestment Justification Strategies'
      ],
      targetAudience: 'Business analysts, project managers, and executives evaluating automation investments.'
    }
  }
},

export default function WhitepaperPage() {
  const router = useRouter(),
  const { id } = router.query,
  
  const whitepaper = whitepapers[id as keyof typeof whitepapers],

  if (!whitepaper) {
    return (
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Whitepaper Not Found</h1>
            <p className="text-white/80 mb-8">The requested whitepaper could not be found.</p>
            <Link href="/resources" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
=======
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-4xl font-bold mb-4&quot;>Whitepaper Not Found</h1>
            <p className=&quot;text-white/80 mb-8&quot;>The requested whitepaper could not be found.</p>
            <Link href=&quot;/resources&quot; className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Back to Resources
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{whitepaper.title} | Zion Tech Group</title>
        <meta name=&quot;description&quot; content={whitepaper.description} />
        <meta property=&quot;og:title&quot; content={whitepaper.title} />
        <meta property=&quot;og:description&quot; content={whitepaper.description} />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          {/* Breadcrumb */}
          <nav className=&quot;mb-8&quot;>
            <Link href=&quot;/resources&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
              ← Back to Resources
            </Link>
          </nav>

          {/* Header */}
          <header className=&quot;text-center mb-16&quot;>
            <div className=&quot;mb-6&quot;>
              <span className=&quot;px-4 py-2 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30&quot;>
                {whitepaper.category}
              </span>
            </div>
            <h1 className=&quot;text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent&quot;>
              {whitepaper.title}
            </h1>
            <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto mb-6&quot;>
              {whitepaper.description}
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-6 text-sm text-white/60&quot;>
              <span>By {whitepaper.author}</span>
              <span>•</span>
              <span>{whitepaper.pages} pages</span>
              <span>•</span>
              <span>{whitepaper.publishDate}</span>
            </div>
          </header>

          {/* Whitepaper Content */}
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold mb-6 text-cyan-400&quot;>Executive Summary</h2>
              <p className=&quot;text-lg text-white/80&quot;>{whitepaper.content.executiveSummary}</p>
            </section>

            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold mb-6 text-fuchsia-400&quot;>Key Topics Covered</h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                {whitepaper.content.keyTopics.map((topic, index) => (
                  <div key={index} className=&quot;bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20&quot;>
                    <div className=&quot;flex items-center gap-3&quot;>
                      <div className=&quot;w-2 h-2 bg-fuchsia-400 rounded-full&quot;></div>
                      <span className=&quot;text-white/90&quot;>{topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold mb-6 text-green-400&quot;>Target Audience</h2>
              <p className=&quot;text-lg text-white/80&quot;>{whitepaper.content.targetAudience}</p>
            </section>

            {/* Download Section */}
            <section className=&quot;mb-12&quot;>
              <div className=&quot;bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20 text-center&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-white&quot;>Ready to Download?</h2>
                <p className=&quot;text-white/80 mb-6&quot;>
                  Get instant access to this comprehensive whitepaper and start implementing autonomous systems today.
                </p>
                <button className=&quot;px-8 py-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 text-white rounded-lg font-semibold hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 text-lg&quot;>
                  Download {whitepaper.title}
                </button>
                <p className=&quot;text-white/60 text-sm mt-4&quot;>
                  PDF format • {whitepaper.pages} pages • Free download
                </p>
              </div>
            </section>

            {/* Related Whitepapers */}
            <section className=&quot;mb-12&quot;>
              <h2 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Explore More Whitepapers</h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                {Object.values(whitepapers)
                  .filter(w => w.id !== whitepaper.id)
                  .slice(0, 2)
                  .map((relatedPaper) => (
                    <Link 
                      key={relatedPaper.id}
                      href={`/resources/whitepapers/${relatedPaper.id}`}
                      className=&quot;group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300&quot;
                    >
                      <h3 className=&quot;text-lg font-semibold text-white group-hover:text-fuchsia-400 transition-colors mb-2&quot;>
                        {relatedPaper.title}
                      </h3>
                      <p className=&quot;text-white/70 text-sm mb-3&quot;>{relatedPaper.description}</p>
                      <span className=&quot;inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30&quot;>
                        {relatedPaper.category}
                      </span>
                    </Link>
                  ))}
              </div>
            </section>

            {/* CTA */}
            <section className=&quot;text-center&quot;>
              <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-white&quot;>Need Custom Research?</h2>
                <p className=&quot;text-white/80 mb-6&quot;>
                  Our research team can conduct custom studies and create whitepapers tailored to your specific industry and needs.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                  <Link href=&quot;/contact&quot; className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                    Contact Us
                  </Link>
                  <Link href=&quot;/services&quot; className=&quot;px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300&quot;>
                    Our Services
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