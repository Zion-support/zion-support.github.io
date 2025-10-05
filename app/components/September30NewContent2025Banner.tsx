import { ArrowRight, TrendingUp, Rocket, Zap, Star, Sparkles } from 'lucide-react';
import React from 'react';
import Link from 'next/link';


const September30NewContent2025Banner: React.FC = () => {
  const newArticles = [
    {
      id: 0,
  title: 'AI-Accelerated Customer Experience 2025',
  slug: 'ai-accelerated-customer-experience-2025',
  excerpt: 'Real-time intent detection and autonomous workflows delivering 95% CSAT and 40% cost reduction across channels.',
  category: 'Customer Experience',
  date: '2025-09-30',
  readTime: '18 min',
  icon: '✨',
  gradient: 'from-cyan-600 to-blue-700'
    },
    {
      id: 1,
  title: 'AI-Powered Autonomous Operations 2025',
  slug: 'ai-autonomous-operations-2025',
  excerpt: 'Self-healing infrastructure achieving 99.99% uptime and 95% cost reduction. Discover how Fortune 500 enterprises achieve zero-touch IT operations.',
  category: 'Autonomous Operations',
  date: '2025-09-30',
  readTime: '15 min',
  icon: '🤖',
  gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
  title: 'Generative AI for Enterprise Architecture 2025',
  slug: 'generative-ai-enterprise-architecture-2025',
  excerpt: 'Production-scale GenAI systems serving 100M+ daily requests. Master LLM orchestration, RAG pipelines, and deployment patterns at enterprise scale.',
  category: 'GenAI Architecture',
  date: '2025-09-30',
  readTime: '18 min',
  icon: '🎨',
  gradient: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 3,
  title: 'Multimodal AI Agents Enterprise 2025',
  slug: 'multimodal-ai-agents-enterprise-2025',
  excerpt: 'Unified vision, language, and audio intelligence achieving 97% cross-modal accuracy. Transform operations with AI that truly sees, hears, and understands.',
  category: 'Multimodal AI',
  date: '2025-09-30',
  readTime: '16 min',
  icon: '👁️',
  gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 4,
  title: 'Quantum-Enhanced Machine Learning 2025',
  slug: 'quantum-enhanced-machine-learning-2025',
  excerpt: '1000x performance breakthrough with quantum computing. Real quantum advantage demonstrated in optimization, drug discovery, and financial modeling.',
  category: 'Quantum ML',
  date: '2025-09-30',
  readTime: '20 min',
  icon: '⚛️',
  gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 5,
  title: 'AI-Powered Cloud FinOps 2025',
  slug: 'ai-powered-cloud-finops-2025',
  excerpt: '60% cloud cost reduction through autonomous optimization. $450M+ annual savings achieved with AI-driven resource management and predictive scaling.',
  category: 'Cloud FinOps',
  date: '2025-09-30',
  readTime: '14 min',
  icon: '💰',
  gradient: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <div>
      {/* Animated background effects */}
      <div>
        <div></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div>
        {/* Header Section */}
        <div>
          <div>
            <Rocket />
            <span>
              🔥 5 BREAKTHROUGH ARTICLES RELEASED • SEPTEMBER 30, 2025
            </span>
            <Sparkles />
          </div>

          <h2>
            Latest AI Breakthroughs & Innovations
          </h2>
          
          <p>
            Cutting-edge research, enterprise implementations, and breakthrough technologies that are 
            revolutionizing AI operations, quantum computing, and cloud economics.
          </p>
        </div>

        {/* Articles Grid */}
        <div>
          {newArticles.slice(0, 3).map((article, index) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div></div>
              
              <div>
                {/* Icon & Badge */}
                <div>
                  <div>
                    {article.icon}
                  </div>
                  <div>
                    <div>
                      <TrendingUp />
                      <span>NEW</span>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div>
                  <span>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p>
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div>
                  <span>
                    <Zap />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short',
  day: 'numeric',
  year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div>
          {newArticles.slice(3).map((article) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {/* Card glow effect */}
              <div></div>
              
              <div>
                {/* Icon & Badge */}
                <div>
                  <div>
                    {article.icon}
                  </div>
                  <div>
                    <div>
                      <Star />
                      <span>FEATURED</span>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div>
                  <span>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p>
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div>
                  <span>
                    <Zap />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short',
  day: 'numeric',
  year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div>
          <div>
            <div>
              <h3>
                Transform Your Enterprise with AI
              </h3>
              <p>
                Join 500+ Fortune 500 enterprises achieving breakthrough results with AI-powered operations, 
                quantum computing, and autonomous systems. Get expert guidance from our team.
              </p>
              <div>
                <Link
                  href="/blog"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3 text-lg"
                >
                  <Sparkles />
                  <span>Explore All Articles</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <span>Schedule Expert Consultation</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div>
          {[
            { value: '500+',
  label: 'Enterprise Clients',
  icon: '🏢' },
            { value: '$2.5B+',
  label: 'Value Delivered',
  icon: '💎' },
            { value: '99.99%',
  label: 'System Reliability',
  icon: '⚡' },
            { value: '1000x',
  label: 'Performance Gains',
  icon: '🚀' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div>{stat.icon}</div>
              <div>
                {stat.value}
              </div>
              <div>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default September30NewContent2025Banner;