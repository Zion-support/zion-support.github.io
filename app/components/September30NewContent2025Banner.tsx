import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, ArrowRight, Zap, Rocket, Star } from 'lucide-react';

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
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                    </span>
                  </div>
                </div>

                    {article.category}
                  </span>
                </div>

                {/* Title */}
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
              </div>

          ))}
        </div>

        {/* Call-to-Action Section */}
        </div>
      </div>
    </div>
  );
};

export default September30NewContent2025Banner;