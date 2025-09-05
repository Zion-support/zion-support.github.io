import React from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="Advanced AI services including autonomous AI agents, financial trading systems, legal document analysis, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">AI Services</h1>
            <p className="text-xl text-slate-300 text-center">
              Advanced artificial intelligence solutions for your business.
            </p>
          </div>
=======
        <meta name=&quot;description&quot; content=&quot;Explore our 100+ advanced AI services including autonomous agents, machine learning, computer vision, NLP, and predictive analytics solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI services, artificial intelligence, machine learning, autonomous agents, computer vision, NLP, predictive analytics&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        <link rel=&quot;canonical&quot; href={`${contact.site}/ai-services`} />
      </Head>
      
      <ErrorBoundary level=&quot;page&quot;>
        <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
          {/* Hero Section */}
          <section className=&quot;py-20 px-4 text-center&quot; role=&quot;banner&quot;>
            <div className=&quot;max-w-4xl mx-auto&quot;>
              <h1 
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                AI Services
              </h1>
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Advanced Artificial Intelligence Solutions
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Harness the power of artificial intelligence with our comprehensive suite of AI services. 
                From autonomous agents to predictive analytics, we provide cutting-edge AI solutions 
                to transform your business operations.
              </p>
            </div>
          </section>

          {/* Category Filter */}
          <section className=&quot;py-8 px-4&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <div className=&quot;flex flex-wrap justify-center gap-4 mb-8&quot;>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className=&quot;py-16 px-4&quot; role=&quot;main&quot;>
            <div className=&quot;max-w-7xl mx-auto&quot;>
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {filteredServices.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className=&quot;absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full&quot;>
                        Popular
                      </div>
                    )}
                    
                    <h3 className=&quot;text-xl font-bold mb-3&quot;>{service.name}</h3>
                    <p className=&quot;text-slate-300 mb-4 text-sm&quot;>{service.description}</p>
                    
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Key Features:</h4>
                      <ul className=&quot;text-slate-400 text-sm space-y-1&quot;>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;flex items-center&quot;>
                            <span className=&quot;w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0&quot;></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>Use Cases:</h4>
                      <div className=&quot;flex flex-wrap gap-1&quot;>
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className=&quot;text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded&quot;>
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <span className=&quot;text-2xl font-bold text-green-400&quot;>{service.price}</span>
                      <span className=&quot;text-xs text-slate-500 capitalize&quot;>{service.category.replace('-', ' ')}</span>
                    </div>
                    
                    <button className=&quot;w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors&quot;>
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Capabilities Section */}
          <section className=&quot;py-16 px-4 bg-slate-900/40&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot;>
                Our AI Capabilities
              </h2>
              
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Machine Learning</h3>
                  <p className=&quot;text-slate-400&quot;>Advanced ML algorithms for pattern recognition and predictive modeling</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot; />
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z&quot; />
                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Computer Vision</h3>
                  <p className=&quot;text-slate-400&quot;>Image and video analysis with object detection and recognition</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z&quot; />
                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Natural Language</h3>
                  <p className=&quot;text-slate-400&quot;>Advanced NLP for text analysis, translation, and understanding</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Predictive Analytics</h3>
                  <p className=&quot;text-slate-400&quot;>Data-driven insights and forecasting for business intelligence</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className=&quot;py-16 px-4&quot;>
            <div className=&quot;max-w-4xl mx-auto text-center&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-8&quot;>
                Ready to Harness AI Power?
              </h2>
              <p className=&quot;text-lg text-slate-300 mb-8&quot;>
                Contact our AI experts to discuss how our advanced artificial intelligence services 
                can transform your business operations and drive innovation.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
                <Link 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors&quot;
                >
                  Get AI Consultation
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className=&quot;px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors&quot;
                >
                  Call {contact.phone}
                </Link>
                <a 
                  href={`mailto:${contact.email}`} 
                  className=&quot;px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors&quot;
                >
                  Email Us
                </Link>
              </div>
            </div>
          </section>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </main>
      </ErrorBoundary>
    </>
  );
}
<<<<<<< HEAD
=======
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';

export default function AIServicesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title=&quot;AI Services | Zion Tech Group&quot; description=&quot;LLM apps, RAG, evaluation, guardrails, and automation with transparent pricing.&quot; canonical=&quot;https://ziontechgroup.com/ai-services/&quot; />
      <div className=&quot;container mx-auto px-4 py-24 text-white&quot;>
        <div className=&quot;max-w-5xl mx-auto space-y-8&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>AI Services</h1>
          <p className=&quot;text-gray-300 text-lg&quot;>Productized AI solutions: evaluation labs, safety & guardrails, chatbots, agents, search/RAG, and automation. See <Link className=&quot;text-cyan-400 underline&quot; href=&quot;/market-pricing&quot;>Market Pricing</Link> for typical vendor benchmarks.</p>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            {[
              { title: 'RAG & Vector Search', href: '/vector-search-starter' },
              { title: 'AI Evaluation Lab', href: '/rag-evaluation-lab' },
              { title: 'AI Guardrails', href: '/ai-powered-cybersecurity' },
              { title: 'AI Content Generator', href: '/intelligent-content-automation-platform' },
              { title: 'AI Customer Service', href: '/ai-customer-service' },
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (
              <Link key={c.href} href={c.href} className=&quot;p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors&quot;>
                <div className=&quot;text-xl font-semibold&quot;>{c.title}</div>
                <div className=&quot;text-sm text-gray-400 mt-2&quot;>Implementation‑ready with pricing and SLAs.</div>
              </Link>
            ))}
          </div>
          <div className=&quot;text-sm text-gray-400&quot;>Questions? <Link className=&quot;text-cyan-400 underline&quot; href=&quot;/contact&quot;>Contact us</Link>.</div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
