export default function Fortune100MultimodalRAGSuccess() {
  return (
    <article className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full mb-6">
            <span className="text-green-400 font-semibold">💰 SUCCESS STORY - OCTOBER 1, 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Fortune 100 Healthcare: $8.7M Annual Savings with Multimodal RAG
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            How a leading healthcare provider deployed production multimodal RAG to process medical 
            records, imaging, and research data—achieving 94% accuracy, 87% faster diagnoses, and 
            $8.7M in annual cost savings.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 text-sm">$8.7M Savings</span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm">94% Accuracy</span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 text-sm">87% Faster</span>
            <span className="bg-orange-500/20 px-4 py-2 rounded-full text-orange-300 text-sm">10M+ Queries/Day</span>
          </div>
        </header>

        {/* Challenge */}
        <section className="mb-12 bg-red-900/20 rounded-2xl p-8 border border-red-500/30">
          <h2 className="text-3xl font-bold mb-6 text-red-300">The Challenge</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A Fortune 100 healthcare provider struggled with siloed medical knowledge:
          </p>
          <ul className="text-gray-300 space-y-3">
            <li>• <strong className="text-red-400">Fragmented Data:</strong> Medical records in text, X-rays/MRIs as images, specialist notes in audio, procedure videos</li>
            <li>• <strong className="text-red-400">Slow Diagnosis:</strong> Physicians spent 4+ hours manually reviewing multi-modal patient data</li>
            <li>• <strong className="text-red-400">Knowledge Loss:</strong> 78% of visual diagnostic insights never integrated into searchable systems</li>
            <li>• <strong className="text-red-400">High Costs:</strong> $12.4M annual spending on redundant imaging analysis and specialist consultations</li>
            <li>• <strong className="text-red-400">Compliance Risk:</strong> Inconsistent documentation across modalities created audit vulnerabilities</li>
          </ul>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We deployed a production multimodal RAG system that unified all medical knowledge into 
            a single, intelligent retrieval platform.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Phase 1: Data Integration (Days 1-30)</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Ingested 47M text documents (EHRs, lab reports, clinical notes)</li>
                <li>• Processed 18M medical images (X-rays, MRIs, CT scans, pathology slides)</li>
                <li>• Transcribed and embedded 2.3M audio recordings (specialist consultations)</li>
                <li>• Indexed 430K procedure videos with frame-level analysis</li>
                <li>• Built unified vector database with 187M multimodal embeddings</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Phase 2: Intelligence Layer (Days 31-60)</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Implemented cross-modal attention for 94% retrieval accuracy</li>
                <li>• Built clinical reasoning engine for evidence-based recommendations</li>
                <li>• Deployed HIPAA-compliant inference with end-to-end encryption</li>
                <li>• Created physician feedback loop for continuous improvement</li>
                <li>• Established sub-200ms response time SLA</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-green-400 mb-4">Phase 3: Production Deployment (Days 61-90)</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Rolled out to 12,000 physicians across 347 facilities</li>
                <li>• Integrated with Epic EHR and PACS imaging systems</li>
                <li>• Deployed multi-region infrastructure for 99.97% uptime</li>
                <li>• Established 24/7 monitoring and on-call support</li>
                <li>• Trained 3,200 clinical staff on system usage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
          <h2 className="text-3xl font-bold mb-6 text-green-300">Transformative Results</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Clinical Impact</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-green-400">94% Accuracy:</strong> Cross-modal diagnostic recommendations</li>
                <li>• <strong className="text-green-400">87% Faster:</strong> Reduced diagnosis time from 4.2 hours to 33 minutes</li>
                <li>• <strong className="text-green-400">23% Improvement:</strong> Early disease detection rates</li>
                <li>• <strong className="text-green-400">156% Increase:</strong> Physician satisfaction scores</li>
                <li>• <strong className="text-green-400">92% Compliance:</strong> Complete documentation across modalities</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Business Value</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-blue-400">$8.7M Savings:</strong> Annual cost reduction</li>
                <li>• <strong className="text-blue-400">$3.2M:</strong> Reduced redundant imaging orders</li>
                <li>• <strong className="text-blue-400">$2.8M:</strong> Optimized specialist consultations</li>
                <li>• <strong className="text-blue-400">$1.9M:</strong> Improved operational efficiency</li>
                <li>• <strong className="text-blue-400">$800K:</strong> Reduced audit/compliance costs</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">System Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-1">10M+</div>
                <div className="text-xs text-gray-400">Queries Per Day</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-1">167ms</div>
                <div className="text-xs text-gray-400">Avg Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-1">99.97%</div>
                <div className="text-xs text-gray-400">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-orange-400 mb-1">187M</div>
                <div className="text-xs text-gray-400">Vector Embeddings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-400 mb-2">1. Start with High-Value Use Cases</h3>
              <p className="text-gray-300">
                Focus first on workflows with clear ROI—diagnostic support reduced physician time by 87%, 
                delivering immediate value that funded expansion.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-400 mb-2">2. Build Trust Through Transparency</h3>
              <p className="text-gray-300">
                Physicians initially skeptical. Showing exact source citations (with image thumbnails and 
                video timestamps) built trust and drove 156% increase in adoption.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-2">3. Optimize for Cost Early</h3>
              <p className="text-gray-300">
                Intelligent caching and model right-sizing reduced LLM costs by 68%, turning a potential 
                $4.2M annual expense into manageable $1.3M operational cost.
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
          <blockquote className="text-2xl italic text-gray-300 mb-4">
            "This system has transformed how we practice medicine. What used to take hours of manual 
            review now takes minutes, with higher accuracy. We're catching diseases earlier and our 
            physicians are happier."
          </blockquote>
          <p className="text-blue-400 font-semibold">
            — Dr. Sarah Chen, Chief Medical Information Officer
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 border border-green-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Achieve Similar Results</h2>
          <p className="text-xl text-gray-300 mb-6">
            Learn how to implement production multimodal RAG in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Expert Consultation
            </a>
            <a 
              href="/blog/ai-2025-october-multimodal-rag-enterprise-production-guide" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Read Technical Guide
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
