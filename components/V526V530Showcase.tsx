import React from 'react';
import { TrendingUp, Users, Shield, Target, Zap } from 'lucide-react';

const V526V530Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V526',
      name: 'Sentiment Evolution Tracker',
      icon: TrendingUp,
      description: 'Track sentiment changes across long email threads over time to understand relationship dynamics and detect deteriorating or improving relationships.',
      features: [
        'Real-time sentiment tracking across threads',
        'Sentiment evolution timeline visualization',
        'Relationship health scoring',
        'Turning point detection',
        'Volatility analysis'
      ],
      benefits: [
        'Understand relationship dynamics',
        'Detect issues before they escalate',
        'Improve customer satisfaction',
        'Data-driven relationship management'
      ],
      price: '$29-59/mo',
      color: 'from-purple-500 to-pink-500'
    },
    {
      version: 'V527',
      name: 'Relationship Intelligence',
      icon: Users,
      description: 'Analyze relationship strength with contacts, track communication patterns, and identify key opportunities using advanced intelligence algorithms.',
      features: [
        'Relationship strength scoring',
        'Communication frequency analysis',
        'Key relationship identification',
        'Opportunity detection',
        'Risk assessment'
      ],
      benefits: [
        'Stronger business relationships',
        'Identified growth opportunities',
        'Risk mitigation',
        'Strategic relationship building'
      ],
      price: '$34-69/mo',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      version: 'V528',
      name: 'Compliance Checker',
      icon: Shield,
      description: 'Scan emails for regulatory compliance including GDPR, HIPAA, SOX, CCPA, and PCI-DSS with sensitive data detection and risk assessment.',
      features: [
        'Multi-framework compliance scanning',
        'Real-time violation detection',
        'Sensitive data identification',
        'Compliance scoring',
        'Risk level assessment'
      ],
      benefits: [
        'Regulatory compliance assurance',
        'Reduced legal risk',
        'Protected sensitive data',
        'Audit-ready documentation'
      ],
      price: '$49-79/mo',
      color: 'from-green-500 to-emerald-500'
    },
    {
      version: 'V529',
      name: 'Template Optimizer',
      icon: Target,
      description: 'A/B test email templates, optimize for engagement (opens, clicks, replies), and get data-driven improvement suggestions.',
      features: [
        'A/B testing framework',
        'Subject line optimization',
        'Body content analysis',
        'Engagement rate tracking',
        'Performance analytics'
      ],
      benefits: [
        'Higher engagement rates',
        'Better email performance',
        'Data-driven optimization',
        'Continuous improvement'
      ],
      price: '$34-69/mo',
      color: 'from-orange-500 to-red-500'
    },
    {
      version: 'V530',
      name: 'Priority AI',
      icon: Zap,
      description: 'Advanced priority scoring using machine learning with smart categorization, routing, and learning from user patterns.',
      features: [
        'ML-based priority scoring',
        'Smart categorization',
        'Intelligent routing',
        'User pattern learning',
        'Multi-factor analysis'
      ],
      benefits: [
        'Accurate priority assessment',
        'Efficient email processing',
        'Personalized workflows',
        'Continuous improvement'
      ],
      price: '$39-79/mo',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            V526-V530: Advanced Email Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sentiment tracking, relationship intelligence, compliance checking, template optimization, and AI-powered priority scoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {engines.map((engine, idx) => {
            const Icon = engine.icon;
            return (
              <div
                key={engine.version}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${engine.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {engine.version}: {engine.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{engine.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {engine.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {engine.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <span className="mr-2 text-blue-500">★</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-900">{engine.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-lg mb-6">
            330 engines. 2,396 services. Infinite possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div>📞 +1 302 464 0950</div>
            <div>✉️ kleber@ziontechgroup.com</div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V526V530Showcase;
