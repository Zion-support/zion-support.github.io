
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CaseStudyPage() {
  const router = null;
  if (!caseStudy) {
    return (
      <>
        <Head>
          <title>Case Study Not Found | Zion Tech Group</title>
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-white">Case Study Not Found</h1>
              <p className="text-xl text-white/80 mb-8">
                The case study you're looking for doesn't exist.
              </p>
              <Link 
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
              >
                ← Back to Case Studies
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
        <title>{caseStudy.title} | Zion Tech Group - Case Study</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
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
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-cyan-400 text-lg mb-2">Challenge</h3>
                      <p className="text-white/80">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-fuchsia-400 text-lg mb-2">Solution</h3>
                      <p className="text-white/80">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-green-400 text-lg mb-4">Key Results</h3>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="text-white/80 flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-blue-400 text-lg mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/60 text-sm">Duration:</span>
                      <p className="text-white font-medium">{caseStudy.duration}</p>
                    </div>
                    <div>
                      <span className="text-white/60 text-sm">Industry:</span>
                      <p className="text-white font-medium">{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
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