'use client';
import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Award, 
  Users, 
  Handshake, 
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Star,
  Phone,
  Mail
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with industry leaders',
      benefits: [
        'Joint go-to-market strategies',
        'Co-development opportunities',
        'Priority support and resources',
        'Exclusive access to new features',
        'Dedicated partner success manager'
      ],
      requirements: [
        'Proven track record in AI/IT industry',
        'Minimum $10M annual revenue',
        'Strong technical capabilities',
        'Global presence and reach'
      ]
    },
    {
      name: 'Technology Partners',
      description: 'Integration and technical collaboration partners',
      benefits: [
        'API access and documentation',
        'Technical integration support',
        'Co-marketing opportunities',
        'Training and certification programs',
        'Partner portal access'
      ],
      requirements: [
        'Compatible technology stack',
        'Strong development capabilities',
        'Quality assurance standards',
        'Customer support commitment'
      ]
    },
    {
      name: 'Channel Partners',
      description: 'Reseller and distribution partners',
      benefits: [
        'Competitive pricing and margins',
        'Sales and marketing support',
        'Lead generation assistance',
        'Training and enablement',
        'Co-branded marketing materials'
      ],
      requirements: [
        'Established sales channels',
        'Customer base in target markets',
        'Sales and technical expertise',
        'Commitment to growth targets'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      tier: 'Strategic',
      description: 'Cloud infrastructure and AI platform integration',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      tier: 'Strategic',
      description: 'Cloud computing and machine learning services',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      tier: 'Strategic',
      description: 'AI and data analytics platform partnership',
      website: 'https://cloud.google.com'
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      tier: 'Technology',
      description: 'CRM integration and customer success solutions',
      website: 'https://salesforce.com'
    },
    {
      name: 'ServiceNow',
      logo: '/partners/servicenow.png',
      tier: 'Technology',
      description: 'IT service management and automation',
      website: 'https://servicenow.com'
    },
    {
      name: 'Slack',
      logo: '/partners/slack.png',
      tier: 'Technology',
      description: 'Workplace collaboration and communication',
      website: 'https://slack.com'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access to new markets and revenue streams through our partner ecosystem'
    },
    {
      icon: Users,
      title: 'Customer Access',
      description: 'Leverage our customer base and relationships for mutual growth'
    },
    {
      icon: Zap,
      title: 'Technology Innovation',
      description: 'Collaborate on cutting-edge solutions and stay ahead of the competition'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce business risks through shared expertise and resources'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your market presence through our international network'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Gain industry recognition and credibility through our partnership'
    }
  ];

  const partnerPrograms = [
    {
      name: 'Partner Certification Program',
      description: 'Comprehensive training and certification for technical and sales teams',
      features: [
        'Technical training modules',
        'Sales enablement workshops',
        'Certification exams',
        'Ongoing education updates',
        'Certification renewal process'
      ]
    },
    {
      name: 'Co-Marketing Program',
      description: 'Joint marketing initiatives to drive awareness and lead generation',
      features: [
        'Co-branded marketing materials',
        'Joint webinars and events',
        'Case study development',
        'Social media collaboration',
        'Lead sharing agreements'
      ]
    },
    {
      name: 'Partner Portal',
      description: 'Dedicated platform for partner resources and collaboration',
      features: [
        'Resource library access',
        'Deal registration system',
        'Training materials',
        'Marketing asset downloads',
        'Support ticket system'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join our partner ecosystem and unlock new opportunities for growth, 
            innovation, and mutual success in the AI and technology space.
          </p>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <div
                key={tier.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders and technology innovators worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {partner.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                <div className="text-cyan-400 text-sm font-medium mb-2">{partner.tier} Partner</div>
                <p className="text-gray-300 text-xs mb-4">{partner.description}</p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive programs designed to support your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <div
                key={program.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{program.name}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Become a Partner?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join our partner ecosystem and unlock new opportunities for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;