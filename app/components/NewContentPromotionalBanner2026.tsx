import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, Rocket, Shield, Target, ArrowRight, Zap } from 'lucide-react';

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
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{content.icon}</div>
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${content.badgeColor} text-white text-sm font-bold shadow-lg`}>
                    {content.badge}
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${content.bgColor} text-gray-900 text-sm font-semibold border border-white/20`}>
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-3xl font-extrabold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${content.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {content.excerpt}
                </p>

                {/* CTA Button */}
                </Link>
              </div>

              {/* Corner accent */}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;