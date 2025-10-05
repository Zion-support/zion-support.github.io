import ArrowRight from 'next/link';

export default function FreshContent2027ShowcaseBanner() {
  return (
    <div>
      {/* Background Pattern */}
      <div>
        <div></div>
        <div></div>
      </div>

      <div>
        {/* Header */}
        <div>
          <div>
            <span>✨</span>
            Fresh Content 2027
          </div>
          <h2>
            Revolutionary AI Breakthroughs
          </h2>
          <p>
            Discover the latest cutting-edge innovations that are reshaping the future of enterprise technology
          </p>
        </div>

        {/* Content Cards */}
        <div>
          {/* Neuromorphic Computing */}
          <div>
            <div>
              <div>
                <span>🧠</span>
              </div>
              <div>
                <h3>Neuromorphic Computing</h3>
                <p>January 2027</p>
              </div>
            </div>
            <p>
              Brain-inspired computing that delivers 100,000x faster processing with 99.7% energy reduction
            </p>
            <ArrowRight 
              href="/blog/ai-2027-neuromorphic-computing-revolution"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group"
            >
              Read More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ArrowRight>
          </div>

          {/* Quantum-AI Hybrid */}
          <div>
            <div>
              <div>
                <span>⚛️</span>
              </div>
              <div>
                <h3>Quantum-AI Hybrid</h3>
                <p>February 2027</p>
              </div>
            </div>
            <p>
              The convergence of quantum computing and AI solving previously intractable problems
            </p>
            <ArrowRight 
              href="/blog/quantum-ai-hybrid-systems-2027"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm group"
            >
              Read More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ArrowRight>
          </div>

          {/* Autonomous Operations */}
          <div>
            <div>
              <div>
                <span>🤖</span>
              </div>
              <div>
                <h3>Autonomous Operations</h3>
                <p>March 2027</p>
              </div>
            </div>
            <p>
              Self-managing organizations that operate with superhuman efficiency and continuous optimization
            </p>
            <ArrowRight 
              href="/blog/autonomous-enterprise-operations-2027"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold text-sm group"
            >
              Read More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ArrowRight>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4">
            <ArrowRight 
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Articles
            </ArrowRight>
            <ArrowRight 
              href="/contact"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Get Expert Consultation
            </ArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
}