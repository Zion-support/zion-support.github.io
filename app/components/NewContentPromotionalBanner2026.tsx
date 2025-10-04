import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, Rocket, Shield, Target, ArrowRight, Zap } from 'lucide-react';

const NewContentPromotionalBanner2026: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const featuredContent = [{
=======
  const featuredContent = [
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-3825
=======
  const featuredContent = [{
>>>>>>> origin/main
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
  <div></div>
    <div className="text-left"></div>
      {/* Animated background effects */}
      <div className="text-left"></div>
        <div className="text-left"></div>
        <div className="text-left" style={{ animationDelay: '1s' }}></div>
        <div className="text-left" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-left"></div>
        {/* Header Section */}
        <div className="text-left"></div>
          <div className="text-left"></div>
            <Sparkles className="text-left" />
            <span className="text-left"></span>
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className="text-left" />
          </div>

          <h2 className="text-left">
            <span className="text-left"></span>
              Latest AI Innovations
            </span>
            <br />
            <span className="text-left"></span>
              That Transform Business
            </span>
          </h2>
          
          <p className="text-left"></p>
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span className="text-left">300%+ ROI</span> for enterprises worldwide
          </p>

          <div className="text-left"></div>
            <div className="text-left"></div>
              <TrendingUp className="text-left" />
              <span className="text-left">10,000+ Readers</span>
            </div>
            <div className="text-left"></div>
              <Zap className="text-left" />
              <span className="text-left">3 New Articles</span>
            </div>
            <div className="text-left"></div>
              <Target className="text-left" />
              <span className="text-left">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="text-left"></div>
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className="text-left"
              style={{ animationDelay: `${index * 150}ms` }}
            ></div>
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div className="text-left"></div>
                {/* Icon & Badge */}
                <div className="text-left"></div>
                  <div className="text-left"></div>
                    {content.icon}
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${content.badgeColor} text-white text-sm font-bold shadow-lg`}></div>
                    {content.badge}
                  </div>
                </div>

                {/* Category */}
                <div className="text-left"></div>
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${content.bgColor} text-gray-900 text-sm font-semibold border border-white/20`}></span>
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-3xl font-extrabold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${content.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p className="text-left"></p>
                  {content.excerpt}
                </p>

                {/* CTA Button */}
                <Link
                  href={`/blog/${content.slug}`}
                  className={`group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r ${content.color} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <span className="text-left">Read Full Article</span>
                  <ArrowRight className="text-left" />
                </Link>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-left"></div>
          <div className="text-left"></div>
            <div className="text-left"></div>
              <Rocket className="text-left" />
              <h3 className="text-left">
                Ready to Transform Your Enterprise?
              </h3>
              <Shield className="text-left" />
            </div>
            
            <p className="text-left"></p>
              Join 500+ enterprises achieving <span className="text-left">300% ROI</span>, 
              <span className="text-left"> 85% automation</span>, and 
              <span className="text-left"> complete digital transformation</span> with Zion Tech Group's AI solutions
            </p>

            <div className="text-left"></div>
              <Link
                href="/contact"
                className="text-left">
                <Sparkles className="text-left" />
                <span>Start Your AI Journey</span>
              </Link>
              
              <Link
                href="/blog"
                className="text-left">
                <span>Explore All Content</span>
                <ArrowRight className="text-left" />
              </Link>
            </div>

            {/* Stats */}
            <div className="text-left"></div>
              <div className="text-left"></div>
                <div className="text-left"></div>
                  500+
                </div>
                <div className="text-left"></div>
                  Enterprise Clients
                </div>
              </div>
              <div className="text-left"></div>
                <div className="text-left"></div>
                  300%
                </div>
                <div className="text-left"></div>
                  Average ROI
                </div>
              </div>
              <div className="text-left"></div>
                <div className="text-left"></div>
                  99.9%
                </div>
                <div className="text-left"></div>
                  System Uptime
                </div>
              </div>
              <div className="text-left"></div>
                <div className="text-left"></div>
                  24/7
                </div>
                <div className="text-left"></div>
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