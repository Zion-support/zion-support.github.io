import Link from 'next/link';

export default function CaseStudiesPage() {

  componentDidCatch(error, errorInfo) {

import React from 'react';



import React from 'react';


import MainLayout from '../src/components/layout/MainLayout';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';














export default /**
    <MainLayout;


                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;




                            <Users className="w-4 h-4 mr-2" />;
                            <ArrowRight className="w-4 h-4 ml-2" />;
                          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />;
                                <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2" />;
                            <Users className="w - 4 h - 4 mr - 2" />;
                            <ArrowRight className="w - 4 h - 4 ml - 2" />;
                          <Building className="w - 16 h - 16 mx - auto mb - 4 opacity - 80" />;






    </MainLayout>;

import Head from 'next/head';


export default function CaseStudiesPage() {;

    <Layout>;
      <Head>;



import Head from 'next/head';


import Head from 'next/head';




 </Head> </section> </Layout>
export default function CaseStudiesPage() {
		<Layout>
			<Head>
			</Head>
		</Layout>

  const industries = ['All', 'Manufacturing', 'Financial Services', 'Healthcare', 'Retail', 'Logistics', 'Energy'];

    </MainLayout>);
import Link from 'next / link';
import Layout from '../components / Layout';
import Layout from '../components / Layout';
export default /**
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI Automation Success Stories</title>
        <meta name="description" content="Explore real-world case studies of successful AI automation implementations that delivered measurable business results." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world AI automation success stories and business results." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing how AI automation transforms businesses and delivers measurable results
            </p>
          </section>

          {/* Industry Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(industry => (
                <button
                  key={industry}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
                >
                  {industry}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center text-white/90">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map(study => (
                <div key={study.id} className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                      {study.industry}
                    </span>
                    <span className="text-white/60 text-sm">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-white/80 mb-4 font-medium">Client: {study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-cyan-400">Challenge</h4>
                    <p className="text-white/70 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Solution</h4>
                    <p className="text-white/70 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-white/70 text-sm">• {result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    Read Full Case Study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* All Case Studies Grid */}
          <section className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold mb-8 text-center text-white/90">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map(study => (
                <article key={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-xs rounded-full border border-fuchsia-500/30">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-white/80 mb-3 text-sm font-medium">Client: {study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1 text-cyan-400">Challenge</h4>
                    <p className="text-white/70 text-xs line-clamp-2">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1 text-fuchsia-400">Solution</h4>
                    <p className="text-white/70 text-xs line-clamp-2">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1 text-green-400">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-white/70 text-xs">• {result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-1 py-0.5 bg-white/10 text-white/60 text-xs rounded border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-20 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Let's discuss how AI automation can solve your business challenges and deliver measurable results like the ones shown in our case studies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/services"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}


