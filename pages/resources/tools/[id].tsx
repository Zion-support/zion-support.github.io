
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ToolResourcePage() {
  const router = null;
  if (!tool) {
    return (
      <>
        <Head>
          <title>Tool Resource Not Found | Zion Tech Group</title>
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-white">Tool Resource Not Found</h1>
              <p className="text-xl text-white/80 mb-8">
                The tool resource you're looking for doesn't exist.
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
        <title>{tool.title} | Zion Tech Group - Tool Resource</title>
        <meta name="description" content={tool.description} />
        <meta property="og:title" content={`${tool.title} | Zion Tech Group`} />
        <meta property="og:description" content={tool.description} />
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
                <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                  {tool.type}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">{tool.title}</h1>
              <p className="text-xl text-white/80 mb-4">{tool.description}</p>
              <div className="flex items-center gap-4 text-white/60">
                <span>Estimated time: {tool.estimatedTime}</span>
              </div>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: tool.fullContent }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-green-400 text-lg mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="text-white/80 flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-blue-400 text-lg mb-4">Tool Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/60 text-sm">Type:</span>
                      <p className="text-white font-medium">{tool.type}</p>
                    </div>
                    <div>
                      <span className="text-white/60 text-sm">Time Required:</span>
                      <p className="text-white font-medium">{tool.estimatedTime}</p>
                    </div>
                  </div>
                </div>
              </div>
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