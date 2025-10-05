import { ArrowRight, TrendingUp, Rocket, Target, Zap, Sparkles, Shield } from 'lucide-react';
import React from 'react';
import Link from 'next/link';


const NewContentPromotionalBanner2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
  title: 'AI Autonomous Workflows 2026',
  slug: 'ai-autonomous-workflows-2026',
  excerpt: 'Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration',
  category: 'Enterprise Automation',
  icon: '🤖',
  color: 'from-cyan-500 to-blue-600',
  bgColor: 'from-cyan-50 to-blue-50',
  badge: 'NEW',
  badgeColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
  title: 'Enterprise AI Transformation Roadmap 2026',
  slug: 'enterprise-ai-transformation-roadmap-2026',
  excerpt: 'Complete implementation guide delivering 300% ROI, 85% automation, and digital transformation',
  category: 'Strategic Guide',
  icon: '🎯',
  color: 'from-purple-500 to-fuchsia-600',
  bgColor: 'from-purple-50 to-fuchsia-50',
  badge: 'STRATEGIC',
  badgeColor: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 3,
  title: 'AI-Powered Security Operations Center 2026',
  slug: 'ai-security-operations-center-2026',
  excerpt: '99.9% threat detection, 95% faster response, and autonomous security operations',
  category: 'Cybersecurity',
  icon: '🛡️',
  color: 'from-red-500 to-orange-600',
  bgColor: 'from-red-50 to-orange-50',
  badge: 'CRITICAL',
  badgeColor: 'from-red-500 to-orange-600'
    }
  ];

  return (
    <div>
      {/* Animated background effects */}
      <div>
        <div></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div>
        {/* Header Section */}
        <div>
          <div>
            <Sparkles />
            <span>
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles />
          </div>

          <h2>
            <span>
              Latest AI Innovations
            </span>
            <br />
            <span>
              That Transform Business
            </span>
          </h2>
          
          <p>
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span>300%+ ROI</span> for enterprises worldwide
          </p>

          <div>
            <div>
              <TrendingUp />
              <span>10,000+ Readers</span>
            </div>
            <div>
              <Zap />
              <span>3 New Articles</span>
            </div>
            <div>
              <Target />
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div>
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div>
                {/* Icon & Badge */}
                <div>
                  <div>
                    {content.icon}
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${content.badgeColor} text-white text-sm font-bold shadow-lg`}>
                    {content.badge}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <span className={`px-3 py-1 rounded-full bg-white/10 text-gray-900 text-sm font-semibold border border-white/20`}>
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p>
                  {content.excerpt}
                </p>

                {/* CTA Button */}
                <Link
                  href={`/blog/${content.slug}`}
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${content.color} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight />
                </Link>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div>
          <div>
            <div>
              <Rocket />
              <h3>
                Ready to Transform Your Enterprise?
              </h3>
              <Shield />
            </div>
            
            <p>
              Join 500+ enterprises achieving <span>300% ROI</span>, 
              <span> 85% automation</span>, and 
              <span> complete digital transformation</span> with Zion Tech Group's AI solutions
            </p>

            <div>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3 text-lg transform hover:scale-105"
              >
                <Sparkles />
                <span>Start Your AI Journey</span>
              </Link>
              
              <Link
                href="/blog"
                className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg transform hover:scale-105"
              >
                <span>Explore All Content</span>
                <ArrowRight />
              </Link>
            </div>

            {/* Stats */}
            <div>
              <div>
                <div>
                  500+
                </div>
                <div>
                  Enterprise Clients
                </div>
              </div>
              <div>
                <div>
                  300%
                </div>
                <div>
                  Average ROI
                </div>
              </div>
              <div>
                <div>
                  99.9%
                </div>
                <div>
                  System Uptime
                </div>
              </div>
              <div>
                <div>
                  24/7
                </div>
                <div>
                  Expert Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;