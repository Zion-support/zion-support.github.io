import React from 'react';
import { GraduationCap, GitBranch, Users, BarChart3, Target } from 'lucide-react';

const V671V675Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V671',
      icon: GraduationCap,
      title: 'Email Learning & Development Tracker',
      description: 'Extract learning opportunities, skill gaps, and training needs from email conversations with personalized learning path recommendations.',
      features: [
        'Skill gap detection (technical, business, soft skills, domain)',
        'Learning opportunity extraction from daily communications',
        'Training needs identification with urgency assessment',
        'Personalized learning path generation with time estimates',
        'Knowledge sharing detection and impact scoring',
        'Professional development tracking and analytics'
      ],
      stats: {
        skills_tracked: '4 categories',
        learning_paths: 'Personalized',
        knowledge_shares: 'Impact scored'
      }
    },
    {
      id: 'V672',
      icon: GitBranch,
      title: 'Email Decision Tracking System',
      description: 'Track decisions made via email with context preservation, stakeholder alignment verification, and decision audit trails.',
      features: [
        'Decision detection and classification (final, tentative, reversal)',
        'Stakeholder alignment verification with percentage scoring',
        'Decision context preservation for future reference',
        'Action item extraction from decisions',
        'Decision audit trail generation',
        'Decision impact assessment over time'
      ],
      stats: {
        decisions_tracked: '8 types',
        alignment_scoring: '0-100%',
        audit_events: 'Complete trail'
      }
    },
    {
      id: 'V673',
      icon: Users,
      title: 'Email Customer Success Intelligence',
      description: 'Monitor customer health signals, churn risk indicators, and expansion opportunities from customer emails.',
      features: [
        'Customer health score calculation (0-100)',
        'Churn risk detection (minimal, low, medium, high, critical)',
        'Expansion opportunity identification (upsell, cross-sell, referral)',
        'Sentiment trend analysis (improving, stable, declining)',
        'Engagement level tracking (high, medium, low)',
        'Proactive intervention recommendations'
      ],
      stats: {
        health_scoring: '0-100 scale',
        churn_signals: '9 indicators',
        expansion_types: '3 categories'
      }
    },
    {
      id: 'V674',
      icon: BarChart3,
      title: 'Email Resource Allocation Optimizer',
      description: 'Analyze email workload patterns to optimize team resource allocation and capacity planning.',
      features: [
        'Workload analysis per team member (very high, high, medium, low)',
        'Capacity utilization tracking with percentage estimates',
        'Overallocation detection (utilization >= 90%)',
        'Underutilization identification (utilization <= 60%)',
        'Resource rebalancing recommendations with transfer amounts',
        'Team efficiency optimization scoring'
      ],
      stats: {
        workload_levels: '4 categories',
        utilization_range: '0-100%',
        efficiency_scoring: '0-100 points'
      }
    },
    {
      id: 'V675',
      icon: Target,
      title: 'Email Strategic Initiative Tracker',
      description: 'Identify and track strategic initiatives, OKRs, and business goals mentioned in executive communications.',
      features: [
        'Strategic initiative detection from executive emails',
        'OKR (Objectives and Key Results) extraction',
        'Goal alignment verification with consistency scoring',
        'Progress tracking from email updates (0-100%)',
        'Strategic priority classification (critical, high, medium, low)',
        'Executive communication analysis and insights'
      ],
      stats: {
        initiative_types: '4 categories',
        okr_tracking: 'Full lifecycle',
        alignment_scoring: '0-100%'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            V671-V675: Business Intelligence Engines
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced email intelligence for learning & development, decision tracking, customer success, 
            resource optimization, and strategic initiative management
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold">
            <span>475 Total Engines</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>3,023 Services</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engines.map((engine, index) => {
            const Icon = engine.icon;
            return (
              <div
                key={engine.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full">
                  {engine.id}
                </div>

                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {engine.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {engine.description}
                </p>

                <div className="space-y-3 mb-6">
                  {engine.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {engine.features.length > 4 && (
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      +{engine.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(engine.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {key.replace(/_/g, ' ')}
                        </div>
                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Business Intelligence Suite Benefits
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Organizational Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Capture knowledge, identify skill gaps, and create personalized learning paths from daily communications
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Decision Excellence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Track decisions, verify alignment, and maintain complete audit trails for accountability
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Strategic Execution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Monitor customer success, optimize resources, and track strategic initiatives from executive communications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V671V675Showcase;
