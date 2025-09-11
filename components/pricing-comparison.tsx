>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';


=======
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';import Button from '../components/ui/Button';
import { Check, X, Star, TrendingUp, DollarSign, Zap } from 'lucide-react';
export default function PricingComparisonPage() {

  const serviceComparisons = [
    {
      service: 'AI Content Generator'
      zionPricing: {
        starter: '$19/month'
        professional: '$49/month'
        enterprise: '$199/month'
      }
      competitors: [        {
          name: 'Jasper AI'
          pricing: '$39/month'
          rating: '4.8/5'
          pros: ['Excellent templates', 'Good AI quality', 'Wide integrations']
          cons: [


            'Higher pricing',
            'Limited customization',
            'No unlimited plan',
          ],
          savings: 'Save $20/month with Zion',
        },        {
          name: 'Copy.ai',
          pricing: '$36/month',
          rating: '4.6/5',
          pros: ['Unlimited words', 'Good value', 'Simple interface'],
          cons: ['Basic features', 'Limited templates', 'No advanced SEO'],
          savings: 'Save $17/month with Zion',
        },        {
          name: 'Writesonic',
          pricing: '$19/month',
          rating: '4.4/5',          pros: ['Excellent templatesGood AI qualityWide integrations'],
          cons: ['Higher pricingLimited customizationNo unlimited plan'],
          savings: 'Save $20/month with Zion';
        };
          name: 'Copy.ai',
          pricing: '$36/month',
          rating: '4.6/5',
          pros: ['Unlimited words', 'Good value', 'Simple interface'],
          cons: ['Basic features', 'Limited templates', 'No advanced SEO'],
          savings: 'Save $17/month with Zion',
        },          pros: ['Unlimited wordsGood valueSimple interface'],
          cons: ['Basic featuresLimited templatesNo advanced SEO'],


          savings: 'Save $17/month with Zion'
        },        {
          name: 'Writesonic'
          pricing: '$19/month'
          rating: '4.4/5',          pros: ['Excellent templatesGood AI qualityWide integrations']
          cons: ['Higher pricingLimited customizationNo unlimited plan']
          savings: 'Save $20/month with Zion'
        }
          name: 'Copy.ai'
          pricing: '$36/month'
          rating: '4.6/5'
          pros: ['Unlimited words', 'Good value', 'Simple interface']
          cons: ['Basic features', 'Limited templates', 'No advanced SEO']
          savings: 'Save $17/month with Zion'
        },          pros: ['Unlimited wordsGood valueSimple interface']
          cons: ['Basic featuresLimited templatesNo advanced SEO']
          savings: 'Save $17/month with Zion'
        }
          name: 'Writesonic'
          pricing: '$19/month'
          rating: '4.4/5'
          pros: ['Affordable', 'Good for beginners', 'Basic features']
          cons: ['Limited features', 'Basic AI models', 'No team features']
          savings: 'Same price, better features'
        }
      ]
        'AI-powered content generation'
        'Multiple content formats'
        'SEO optimization'
        'Team collaboration'
        'API access'
        'Custom templates'
      ]
      color: 'from-purple-500 to-indigo-600'
      icon: '🤖'
    }
    {
      service: 'Cloud Monitoring'
      zionPricing: {
        starter: '$29/month'
        professional: '$99/month'
        enterprise: '$299/month'
      }
      competitors: [        {
          name: 'Datadog'
          pricing: '$15/host/month'
          rating: '4.7/5'
          pros: [
            'Comprehensive features'
            'Great integrations'
            'Advanced analytics'
          ]
          cons: ['Very expensive', 'Complex pricing', 'Steep learning curve']
          savings: 'Save $121/month for 10 servers'
        },        {
          name: 'New Relic'
          pricing: '$99/user/month'
          rating: '4.5/5',          pros: ['Comprehensive featuresGreat integrationsAdvanced analytics']
          cons: ['Very expensiveComplex pricingSteep learning curve']
          savings: 'Save $121/month for 10 servers'
        }
          name: 'New Relic'
          pricing: '$99/user/month'
          rating: '4.5/5'
          pros: ['Good APM', 'User-based pricing', 'Reliable']
          cons: [
            'Expensive for teams'
            'Limited server monitoring'
            'Complex setup'
          ]
          savings: 'Save $396/month for 5 users'
        },        {
          name: 'Prometheus + Grafana'
          pricing: 'Free'
          rating: '4.3/5',          pros: ['Good APMUser-based pricingReliable']
          cons: ['Expensive for teamsLimited server monitoringComplex setup']
          savings: 'Save $396/month for 5 users'
        }
          name: 'Prometheus + Grafana'
          pricing: 'Free'
          rating: '4.3/5'
          pros: ['Completely free', 'Highly customizable', 'Open source']
          cons: [
            'Requires DevOps expertise'
            'No managed service'
            'Maintenance overhead'
          ]
          savings: 'Professional service for $29/month'
        }
      ]
        'Real-time monitoring'
        'Multi-cloud support'
        'AI-powered alerting'
        'Advanced analytics'
        'Custom dashboards'
        'API access'
      ]
      color: 'from-green-500 to-emerald-600'
      icon: '☁️'
    }
    {
      service: 'DevOps Automation'
      zionPricing: {
        starter: '$39/month'
        professional: '$129/month'
        enterprise: '$399/month'
      }
      competitors: [        {
          name: 'GitHub Actions'
          pricing: 'Free + $0.008/min'
          rating: '4.6/5'
          pros: ['GitHub native', 'Good free tier', 'Wide adoption']
          cons: ['Expensive for teams', 'Limited features', 'Complex pricing']
          savings: 'Save $200+/month for active teams'
        },        {
          name: 'GitLab CI/CD'
          pricing: '$19/user/month'
          rating: '4.4/5',          pros: ['GitHub nativeGood free tierWide adoption']
          cons: ['Expensive for teamsLimited featuresComplex pricing']
          savings: 'Save $200+/month for active teams'
        }
          name: 'GitLab CI/CD'
          pricing: '$19/user/month'
          rating: '4.4/5'
          pros: ['Integrated platform', 'Good CI/CD', 'Unlimited repos']
          cons: [
            'User-based pricing'
            'Limited integrations'
            'Higher cost for teams'
          ]
          savings: 'Save $56/month for 5 users'
        },        {
          name: 'Jenkins'
          pricing: 'Free'
          rating: '4.2/5',          pros: ['Integrated platformGood CI/CDUnlimited repos']
          cons: ['User-based pricingLimited integrationsHigher cost for teams']
          savings: 'Save $56/month for 5 users'
        }
          name: 'Jenkins'
          pricing: 'Free'
          rating: '4.2/5'
          pros: ['Completely free', 'Highly customizable', 'Open source']
          cons: ['Requires maintenance', 'No managed service', 'Complex setup']
          savings: 'Professional service for $39/month'
        }
      ]
        'CI/CD pipelines'
        'Infrastructure as Code'
        'Security automation'
        'Multi-cloud deployment'
        'Team collaboration'
        'Custom integrations'
      ]
      color: 'from-blue-500 to-cyan-600'
      icon: '🚀'
    },  ];      icon: '🚀'
    }
  ];



=======  const marketInsights = [
    {
      insight: 'Zion services are 30-60% more affordable than market leaders'
      icon: <DollarSign className='w-6 h-6' />
      color: 'text-green-400'
    }
    {
      insight: 'All plans include free trials and no hidden fees'
      icon: <Check className='w-6 h-6' />
      color: 'text-blue-400'
    }
    {
      insight: 'Professional features at startup-friendly prices'
      icon: <Zap className='w-6 h-6' />
      color: 'text-purple-400'
    }
    {
      insight: 'Enterprise-grade reliability without enterprise pricing'
      icon: <Star className='w-6 h-6' />
      color: 'text-yellow-400'
    },  ];    {
      insight: 'All plans include free trials and no hidden fees'
      icon: <Check className="w-6 h-6" />
      color: 'text-blue-400'
    }
    {
      insight: 'Professional features at startup-friendly prices'
      icon: <Zap className="w-6 h-6" />
      color: 'text-purple-400'
    }
    {
      insight: 'Enterprise-grade reliability without enterprise pricing'
      icon: <Star className="w-6 h-6" />
      color: 'text-yellow-400'
export default function PricingComparisonPage() {_const _serviceComparisons = [
    {
      service: 'AI Content Generator', _zionPricing: {
        starter: '$19/month', _professional: '$49/month', _enterprise: '$199/month'},
      competitors: [

        {
          name: 'Jasper AI',
          pricing: '$39/month',
          rating: '4.8/5',
          pros: ['Excellent templatesGood AI qualityWide integrations'],
          cons: ['Higher pricingLimited customizationNo unlimited plan'],
          savings: 'Save $20/month with Zion'
};
        {
          name: 'Copy.ai',
          pricing: '$36/month',
          rating: '4.6/5',
          pros: ['Unlimited wordsGood valueSimple interface'],
          cons: ['Basic featuresLimited templatesNo advanced SEO'],
          savings: 'Save $17/month with Zion'
};
        {
          name: 'Writesonic',
          pricing: '$19/month',
          rating: '4.4/5',
          pros: ['AffordableGood for beginnersBasic features'],
          cons: ['Limited featuresBasic AI modelsNo team features'],
          savings: 'Same price, better features'
        }
];
      features: [
        'AI-powered content generationMultiple content formatsSEO optimizationTeam collaborationAPI accessCustom templates'
      ];
      color: 'from-purple-500 to-indigo-600',
      icon: '🤖'
    };
    {
      service: 'Cloud Monitoring',
      zionPricing: {
        starter: '$29/month',
        professional: '$99/month',
        enterprise: '$299/month'
    },
    competitors: [
        {
          name: 'Datadog',
          pricing: '$15/host/month',
          rating: '4.7/5',
          pros: ['Comprehensive featuresGreat integrationsAdvanced analytics'],
          cons: ['Very expensiveComplex pricingSteep learning curve'],
          savings: 'Save $121/month for 10 servers'
};
        {
          name: 'New Relic',
          pricing: '$99/user/month',
          rating: '4.5/5',
          pros: ['Good APMUser-based pricingReliable'],
          cons: ['Expensive for teamsLimited server monitoringComplex setup'],
          savings: 'Save $396/month for 5 users'
};
        {
          name: 'Prometheus + Grafana',
          pricing: 'Free',
          rating: '4.3/5',
          pros: ['Completely freeHighly customizableOpen source'],
          cons: ['Requires DevOps expertiseNo managed serviceMaintenance overhead'],
          savings: 'Professional service for $29/month'
        }
];
      features: [
        'Real-time monitoringMulti-cloud supportAI-powered alertingAdvanced analyticsCustom dashboardsAPI access'
      ];
      color: 'from-green-500 to-emerald-600',
      icon: '☁️'
    };
    {
      service: 'DevOps Automation',
      zionPricing: {
        starter: '$39/month',
        professional: '$129/month',
        enterprise: '$399/month'
    },
    competitors: [
        {
          name: 'GitHub Actions',
          pricing: 'Free + $0.008/min',
          rating: '4.6/5',
          pros: ['GitHub nativeGood free tierWide adoption'],
          cons: ['Expensive for teamsLimited featuresComplex pricing'],
          savings: 'Save $200+/month for active teams'
};
        {
          name: 'GitLab CI/CD',
          pricing: '$19/user/month',
          rating: '4.4/5',
          pros: ['Integrated platformGood CI/CDUnlimited repos'],
          cons: ['User-based pricingLimited integrationsHigher cost for teams'],
          savings: 'Save $56/month for 5 users'
};
        {
          name: 'Jenkins',
          pricing: 'Free',
          rating: '4.2/5',
          pros: ['Completely freeHighly customizableOpen source'],
          cons: ['Requires maintenanceNo managed serviceComplex setup'],
          savings: 'Professional service for $39/month'
        }
];
      features: [
        'CI/CD pipelinesInfrastructure as CodeSecurity automationMulti-cloud deploymentTeam collaborationCustom integrations'
      ];
      color: 'from-blue-500 to-cyan-600',
      icon: '🚀'
export default /**
 * PricingComparisonPage - Function description
 */
function PricingComparisonPage() {
  const service_comparisons = [;
    {
      service: 'AI Content Generator',
      zion_pricing: {
        starter: '$19 / month',
        professional: '$49 / month',
        enterprise: '$199 / month',
      },
      competitors: [        {
          name: 'Jasper AI',
          pricing: '$39 / month',
          rating: '4.8 / 5',
          pros: ['Excellent templates', 'Good AI quality', 'Wide integrations'],
          cons: [;
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, X, Star, TrendingUp, DollarSign, Zap } from 'lucide-react';
export default function PricingComparisonPage() {

  const serviceComparisons = [
    {
      service: 'AI Content Generator'
      zionPricing: {
        starter: '$19/month'
        professional: '$49/month'
        enterprise: '$199/month'
      }
      competitors: [        {
          name: 'Jasper AI'
          pricing: '$39/month'
          rating: '4.8/5'
          pros: ['Excellent templates', 'Good AI quality', 'Wide integrations']
          cons: [
            'Higher pricing'
            'Limited customization'
            'No unlimited plan'
          ]
          savings: 'Save $20/month with Zion'
        },        {
          name: 'Copy.ai'
          pricing: '$36/month'
          rating: '4.6/5'
          pros: ['Unlimited words', 'Good value', 'Simple interface']
          cons: ['Basic features', 'Limited templates', 'No advanced SEO']
            'Higher pricing',
            'Limited customization',
            'No unlimited plan',
          ],
          savings: 'Save $20/month with Zion',
        },        {
          name: 'Copy.ai',
          pricing: '$36/month',
          rating: '4.6/5',
          pros: ['Unlimited words', 'Good value', 'Simple interface'],
          cons: ['Basic features', 'Limited templates', 'No advanced SEO'],
          savings: 'Save $17/month with Zion',
        },        {
          name: 'Writesonic',
          pricing: '$19/month',
          rating: '4.4/5',          pros: ['Excellent templatesGood AI qualityWide integrations'],
          cons: ['Higher pricingLimited customizationNo unlimited plan'],
          savings: 'Save $20/month with Zion';
        };
          name: 'Copy.ai',
          pricing: '$36/month',
          rating: '4.6/5',
          pros: ['Unlimited words', 'Good value', 'Simple interface'],
          cons: ['Basic features', 'Limited templates', 'No advanced SEO'],
          savings: 'Save $17/month with Zion',
        },          pros: ['Unlimited wordsGood valueSimple interface'],
          cons: ['Basic featuresLimited templatesNo advanced SEO'],
          savings: 'Save $17/month with Zion'
        },        {
          name: 'Writesonic'
          pricing: '$19/month'
          rating: '4.4/5',          pros: ['Excellent templatesGood AI qualityWide integrations']
          cons: ['Higher pricingLimited customizationNo unlimited plan']
          savings: 'Save $20/month with Zion'
        }
          name: 'Copy.ai'
          pricing: '$36/month'
          rating: '4.6/5'
          pros: ['Unlimited words', 'Good value', 'Simple interface']
          cons: ['Basic features', 'Limited templates', 'No advanced SEO']
          savings: 'Save $17/month with Zion'
        },          pros: ['Unlimited wordsGood valueSimple interface']
          cons: ['Basic featuresLimited templatesNo advanced SEO']
          savings: 'Save $17/month with Zion'
        }
          name: 'Writesonic'
          pricing: '$19/month'
          rating: '4.4/5'
          pros: ['Affordable', 'Good for beginners', 'Basic features']
          cons: ['Limited features', 'Basic AI models', 'No team features']
          savings: 'Same price, better features'
        }
      ]
        'AI-powered content generation'
        'Multiple content formats'
        'SEO optimization'
        'Team collaboration'
        'API access'
        'Custom templates'
      ]
      color: 'from-purple-500 to-indigo-600'
      icon: '🤖'
    }
    {
      service: 'Cloud Monitoring'
      zionPricing: {
        starter: '$29/month'
        professional: '$99/month'
        enterprise: '$299/month'
      }
      competitors: [        {
          name: 'Datadog'
          pricing: '$15/host/month'
          rating: '4.7/5'
          pros: [
            'Comprehensive features'
            'Great integrations'
            'Advanced analytics'
          ]
          cons: ['Very expensive', 'Complex pricing', 'Steep learning curve']
          savings: 'Save $121/month for 10 servers'
        },        {
          name: 'New Relic'
          pricing: '$99/user/month'
          rating: '4.5/5',          pros: ['Comprehensive featuresGreat integrationsAdvanced analytics']
          cons: ['Very expensiveComplex pricingSteep learning curve']
          savings: 'Save $121/month for 10 servers'
        }
          name: 'New Relic'
          pricing: '$99/user/month'
          rating: '4.5/5'
          pros: ['Good APM', 'User-based pricing', 'Reliable']
          cons: [
            'Expensive for teams'
            'Limited server monitoring'
            'Complex setup'
          ]
          savings: 'Save $396/month for 5 users'
        },        {
          name: 'Prometheus + Grafana'
          pricing: 'Free'
          rating: '4.3/5',          pros: ['Good APMUser-based pricingReliable']
          cons: ['Expensive for teamsLimited server monitoringComplex setup']
          savings: 'Save $396/month for 5 users'
        }
          name: 'Prometheus + Grafana'
          pricing: 'Free'
          rating: '4.3/5'
          pros: ['Completely free', 'Highly customizable', 'Open source']
          cons: [
            'Requires DevOps expertise'
            'No managed service'
            'Maintenance overhead'
          ]
          savings: 'Professional service for $29/month'
        }
      ]
        'Real-time monitoring'
        'Multi-cloud support'
        'AI-powered alerting'
        'Advanced analytics'
        'Custom dashboards'
        'API access'
      ]
      color: 'from-green-500 to-emerald-600'
      icon: '☁️'
    }
    {
      service: 'DevOps Automation'
      zionPricing: {
        starter: '$39/month'
        professional: '$129/month'
        enterprise: '$399/month'
      }
      competitors: [        {
          name: 'GitHub Actions'
          pricing: 'Free + $0.008/min'
          rating: '4.6/5'
          pros: ['GitHub native', 'Good free tier', 'Wide adoption']
          cons: ['Expensive for teams', 'Limited features', 'Complex pricing']
          savings: 'Save $200+/month for active teams'
        },        {
          name: 'GitLab CI/CD'
          pricing: '$19/user/month'
          rating: '4.4/5',          pros: ['GitHub nativeGood free tierWide adoption']
          cons: ['Expensive for teamsLimited featuresComplex pricing']
          savings: 'Save $200+/month for active teams'
        }
          name: 'GitLab CI/CD'
          pricing: '$19/user/month'
          rating: '4.4/5'
          pros: ['Integrated platform', 'Good CI/CD', 'Unlimited repos']
          cons: [
            'User-based pricing'
            'Limited integrations'
            'Higher cost for teams'
          ]
          savings: 'Save $56/month for 5 users'
        },        {
          name: 'Jenkins'
          pricing: 'Free'
          rating: '4.2/5',          pros: ['Integrated platformGood CI/CDUnlimited repos']
          cons: ['User-based pricingLimited integrationsHigher cost for teams']
          savings: 'Save $56/month for 5 users'
        }
          name: 'Jenkins'
          pricing: 'Free'
          rating: '4.2/5'
          pros: ['Completely free', 'Highly customizable', 'Open source']
          cons: ['Requires maintenance', 'No managed service', 'Complex setup']
          savings: 'Professional service for $39/month'
        }
      ]
        'CI/CD pipelines'
        'Infrastructure as Code'
        'Security automation'
        'Multi-cloud deployment'
        'Team collaboration'
        'Custom integrations'
      ]
      color: 'from-blue-500 to-cyan-600'
      icon: '🚀'
    },  ];      icon: '🚀'
    }
  ];

  const marketInsights = [
    {
      insight: 'Zion services are 30-60% more affordable than market leaders'
      icon: <DollarSign className='w-6 h-6' />
      color: 'text-green-400'
    }
    {
      insight: 'All plans include free trials and no hidden fees'
      icon: <Check className='w-6 h-6' />
      color: 'text-blue-400'
    }
    {
      insight: 'Professional features at startup-friendly prices'
      icon: <Zap className='w-6 h-6' />
      color: 'text-purple-400'
    }
    {
      insight: 'Enterprise-grade reliability without enterprise pricing'
      icon: <Star className='w-6 h-6' />
      color: 'text-yellow-400'
    },  ];    {
      insight: 'All plans include free trials and no hidden fees',
      icon: <Check className="w - 6 h - 6" />,
      color: 'text - blue - 400';
    }
    {
      insight: 'Professional features at startup - friendly prices',
      icon: <Zap className="w - 6 h - 6" />,
      color: 'text - purple - 400';
    }
    {
      insight: 'Enterprise - grade reliability without enterprise pricing',
      icon: <Star className="w - 6 h - 6" />,
      color: 'text - yellow - 400';
    }
  ];
;
  return (
=======
=======
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {Check, X, Star, TrendingUp, DollarSign, Zap} from 'lucide-react';


        />;
        <meta name='twitter:card' content='summary_large_image' />;
      <div className='min-h-screen bg-black'>;

==============

                View Our Pricing

=======        <meta;
          name='description';
          content="See how Zion's micro SaaS services compare to market leaders. Detailed pricing analysis showing significant cost savings and better value.";
        />;
        <meta;
          property='og:title';
          content='Pricing Comparison - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content="Compare Zion's pricing to Jasper AI, Datadog, GitHub Actions and more. Save 30 - 60% with better features.";
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      <div className='min - h-screen bg - black'>;
        {/* Hero Section */}
        <section className='pt - 32 pb - 20 bg - gradient - to - br from - indigo - 900 / 20 to - purple - 900 / 20'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
            <div className='mb - 8'>;
              <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - indigo - 500 / 10 border border - indigo - 500 / 20 text - indigo - 400 text - sm font - medium mb - 6'>;
                <span className='w - 2 h - 2 bg - indigo - 500 rounded - full mr - 2 animate - pulse' />;
                Pricing Analysis;
              </div>;
            </div>;
            <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
              How We Compare to the Competition;
            </h1>;
            <p className='text - xl text - gray - 300 max - w-4xl mx - auto leading - relaxed mb - 12'>;
              See how Zion's micro SaaS services stack up against market;
              leaders. Get professional - grade features at startup - friendly;
              prices.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;
                href='#comparison';
                variant='primary';
                size='lg';
                className='bg - indigo - 600 hover:bg - indigo - 700 text - white'              >;
                View Comparison;
              </Button>;
              <Button;
                href='/pricing';
                variant='outline';
                size='lg';
                className='border - indigo - 500 text - indigo - 400 hover:bg - indigo - 500 hover:text - white'              >                href="#comparison";
                variant="primary";
                size="lg";
                className="bg - indigo - 600 hover:bg - indigo - 700 text - white";
                View Comparison;
              </Button>;
              <Button;
                href='/pricing';
                variant='outline';
                size='lg';
                className='border - indigo - 500 text - indigo - 400 hover:bg - indigo - 500 hover:text - white'                href="/pricing";
                variant="outline";
                size="lg";
                className="border - indigo - 500 text - indigo - 400 hover:bg - indigo - 500 hover:text - white";
                View Our Pricing;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </Button>;
            </div>;
          </div>;
        </section>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
        {/* Market Insights */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Zion?
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  key={index}
                  className="text - center group hover:scale - 105 transition - transform duration - 300";
                >;
                  <div className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br from - indigo - 500 to - purple - 600 flex items - center justify - center text - white mx - auto mb - 6`}>;
                    {insight.icon}

                    {insight.icon}


                    {insight.icon}

                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
=======
                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {insight.insight}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>




        {/* Detailed Comparison */}

        <section id="comparison" className="py-24 bg-gray-800">

        {/* Detailed Comparison */}
        <section id='comparison' className='py-24 bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>
                Detailed Service Comparison
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                See exactly how each service compares in features, pricing, and
                value.              </p>
            </div>
            {serviceComparisons.map((service, serviceIndex) => (        <section id="comparison" className="py-24 bg-gray-800">
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Detailed Service Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See exactly how each service compares in features, pricing, and value.
              </p>

            </div>
            {serviceComparisons.map((service, serviceIndex) => (

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          </div>
                          <div className='mb-4'>
                            <p className='text-lg font-semibold text-white'>
                              {competitor.pricing}
                            </p>
                          </div>
                          <div className='space-y-2 mb-4 text-xs'>
                            <div>
                              <p className='text-green-400 font-medium mb-1'>
                                Pros:
                              </p>
                              <ul className='text-gray-300 space-y-1'>
                                {competitor.pros.map((pro, proIndex) => (
                          </div>
                          <div className="mb-4">
                            <p className="text-lg font-semibold text-white">{competitor.pricing}</p>
                          </div>
                          <div className="space-y-2 mb-4 text-xs">
                            <div>
                              <p className="text-green-400 font-medium mb-1">Pros:</p>
                              <ul className="text-gray-300 space-y-1">
                                {competitor.pros.map((pro, proIndex) => (
                                  <li key={proIndex} className="flex items-center">
                                    <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                    {pro}
                                  </li>;
                                ))}

=======
=======
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-indigo-600 to-purple-600'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>

              Ready to Save Money and Get Better Features?
            </h2>
            <p className='text-xl text-indigo-100 mb-12'>
              Start your free trial today and see why thousands of businesses
              choose Zion.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                href='/ai-content-generator'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'              >
                Try AI Content Generator
              </Button>
              <Button
                href='/cloud-monitoring'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'              >
                Try Cloud Monitoring
              </Button>
              <Button
                href='/devops-automation'
                variant='secondary'
                size='lg'
=======
=======
  );
}

=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
              <Button
                href='/cloud-monitoring'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'                href="/cloud-monitoring"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try Cloud Monitoring
              </Button>
              <Button
                href='/devops-automation'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'                href="/devops-automation"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try DevOps Automation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
);
}
              <Button
=======

              <Button
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Button

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
