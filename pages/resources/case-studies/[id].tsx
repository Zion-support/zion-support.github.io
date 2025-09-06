import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function CaseStudyResourcePage() {
  const router = null;
  if (!caseStudy) {
    return (
      <>
        <Head>
          <title>Case Study Resource Not Found | Zion Tech Group</title>
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-white">Case Study Resource Not Found</h1>
              <p className="text-xl text-white/80 mb-8">
                The case study resource you're looking for doesn't exist.
              </p>
              <Link 
                href="/resources"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
              >
                ← Back to Resources
              </Link>
            </div>
          </main>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Case Study Resource</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>
            
            <header className="mb-12">
              <div className="mb-6">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold mb-2">{caseStudy.company}</p>
              <p className="text-white/80 text-lg">{caseStudy.description}</p>
            </header>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Results</h2>
              <p className="text-green-400 font-semibold text-lg">{caseStudy.results}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
              />
            </div>
            
            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
              >
                Get Started with Your Project
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
};