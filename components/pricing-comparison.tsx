<<<<<<< HEAD
<<<<<<< HEAD
=======

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
import Card from '../components/ui/Card';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

<<<<<<< HEAD
export default function PricingComparisonPage() {
  const serviceComparisons = [
    {
      service: 'AI Content Generator',
      zionPricing: {
        starter: '$19/month',
        professional: '$49/month',
        enterprise: '$199/month'
    },
    competitors: [

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <Head>;
        <title>;
          Pricing Comparison - Zion Tech Group | How We Stack Up Against the;
          Competition;
        </title>;
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      <div className='min-h-screen bg-black'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <meta name='twitter:card' content='summary_large_image' />;
      <div className='min-h-screen bg-black'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Hero Section */}
        <section className='pt-32 pb-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
            <div className='mb-8'>;
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6'>;
                <span className='w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse' />;
                Pricing Analysis;
              </div>;
            </div>;
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
              How We Compare to the Competition;
            </h1>;
            <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12'>;
              See how Zion's micro SaaS services stack up against market;
              leaders. Get professional-grade features at startup-friendly;
              prices.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Button
                href='#comparison'
                variant='primary'
                size='lg'
                className='bg-indigo-600 hover:bg-indigo-700 text-white'>;
                View Comparison;
              </Button>;
              <Button
                href='/pricing'
                variant='outline'
                size='lg'
                className='border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white'>                href="#comparison";
                variant="primary";
                size="lg";
                className="bg-indigo-600 hover:bg-indigo-700 text-white";
                View Comparison;
              </Button>;
              <Button
<<<<<<< HEAD
<<<<<<< HEAD
                href='/pricing'
                variant='outline'
                size='lg'
                className='border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white'                href="/pricing"
                variant="outline"
                size="lg"
                className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                href="/pricing"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
    <>
      <Head>
        <title>Pricing Comparison - Zion Tech Group | How We Stack Up Against the Competition</title>
        <meta name="description" content="See how Zion's micro SaaS services compare to market leaders. Detailed pricing analysis showing significant cost savings and better value." />
        <meta property="og:title" content="Pricing Comparison - Zion Tech Group" />
        <meta property="og:description" content="Compare Zion's pricing to Jasper AI, Datadog, GitHub Actions and more. Save 30-60% with better features." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse" />
                Pricing Analysis
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              How We Compare to the Competition
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              See how Zion's micro SaaS services stack up against market leaders. 
              Get professional-grade features at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#comparison"
                variant="primary"
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                View Comparison
              </Button>
              <Button
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
href="/pricing"
                variant="outline"
                size="lg"
                className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
              >
<<<<<<< HEAD
<<<<<<< HEAD
                View Our Pricing
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                View Our Pricing

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                View Our Pricing

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <meta;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </div>;
          </div>;
        </section>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Market Insights */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Zion?
<<<<<<< HEAD
<<<<<<< HEAD
              </h2>
                View Our Pricing
              </Button>
            </div>
          </div>
        </section>
        {/* Market Insights */}
        <section className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>
                Why Choose Zion?
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Key insights that make Zion the smart choice for your business.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {marketInsights.map((insight, index) => (
                <Card
                  key={index}
                  className='text-center group hover:scale-105 transition-transform duration-300'
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6`}
                  >                    {insight.icon}                Why Choose Zion?
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key insights that make Zion the smart choice for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsights.map((insight, index) => (
                <Card
        {/* Market Insights */}
        <section className='py - 24 bg - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                Why Choose Zion?;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                Key insights that make Zion the smart choice for your business.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
              {market_insights.map ((insight, index) => (
                <Card;
                  key={index}
                  className='text - center group hover:scale - 105 transition - transform duration - 300';
                >;
                  <div;
                    className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br from - indigo - 500 to - purple - 600 flex items - center justify - center text - white mx - auto mb - 6`}
                  >                    {insight.icon}                Why Choose Zion?;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                Key insights that make Zion the smart choice for your business.;
              </p>;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {market_insights.map ((insight, index) => (
                <Card;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={index}
                  className="text - center group hover:scale - 105 transition - transform duration - 300";
                >;
                  <div className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br from - indigo - 500 to - purple - 600 flex items - center justify - center text - white mx - auto mb - 6`}>;
                    {insight.icon}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  </div>;
                  <p className={`text - lg font - semibold ${insight.color}`}>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                    {insight.icon}


<<<<<<< HEAD
<<<<<<< HEAD
                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
                    {insight.insight}
        <section id="comparison" className="py-24 bg-gray-800">

                    {insight.icon}

                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
=======
                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {insight.insight}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {insight.insight}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Detailed Comparison */}

        <section id="comparison" className="py-24 bg-gray-800">

<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Detailed Service Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See exactly how each service compares in features, pricing, and value.
<<<<<<< HEAD
<<<<<<< HEAD
              </p>
            </div>
            {serviceComparisons.map((service, serviceIndex) => (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </p>

            </div>
            {serviceComparisons.map((service, serviceIndex) => (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </section>;
        {/* Detailed Comparison */}
        <section id='comparison' className='py-24 bg-gray-800'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-20'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
                Detailed Service Comparison;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                See exactly how each service compares in features, pricing, and;
                value.              </p>;
            </div>;
            {serviceComparisons && serviceComparisons.map((service, serviceIndex) => (        <section id="comparison" className="py-24 bg-gray-800">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-20">;
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;
                Detailed Service Comparison;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                See exactly how each service compares in features, pricing, and value.;
            </div>;
            {serviceComparisons && serviceComparisons.map((service, serviceIndex) => (;
              <div key={serviceIndex} className='mb-24'>;
                <div className='text-center mb-16'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service && service.color} flex items-center justify-center text-4xl mx-auto mb-6`}>;
                    {service && service.icon}
                  </div>;
                  <h3 className='text-3xl font-bold text-white mb-4'>;
                    {service && service.service}
                  </h3>;
                  <div className='flex flex-wrap justify-center gap-4 text-lg text-gray-300'>;
                    <span>;
                      Starter:{' '}
                      <span className='text-green-400 font-semibold'>;
                        {service && service.zionPricing.starter}
                  </p>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Detailed Comparison */}
        <section id='comparison' className='py - 24 bg - gray - 800'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                Detailed Service Comparison;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                See exactly how each service compares in features, pricing, and;
                value.              </p>;
            </div>;
            {service_comparisons.map ((service, service_index) => (        <section id="comparison" className="py - 24 bg - gray - 800">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <div className="text - center mb - 20">;
              <h2 className="text - 3xl sm:text - 4xl font - bold text - white mb - 8">;
                Detailed Service Comparison;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                See exactly how each service compares in features, pricing, and value.;
            </div>;
            {service_comparisons.map ((service, service_index) => (
              <div key={service_index} className='mb - 24'>;
                <div className='text - center mb - 16'>;
                  <div;
                    className={`w - 20 h - 20 rounded - 3xl bg - gradient - to - br ${service.color} flex items - center justify - center text - 4xl mx - auto mb - 6`}
                  >;
                    {service.icon}
                  </div>;
                  <h3 className='text - 3xl font - bold text - white mb - 4'>;
                    {service.service}
                  </h3>;
                  <div className='flex flex - wrap justify - center gap - 4 text - lg text - gray - 300'>;
                    <span>;
                      Starter:{' '}
                      <span className='text - green - 400 font - semibold'>;
                        {service.zion_pricing.starter}
                      </span>;
                    </span>;
                    <span>;
                      Professional:{' '}
<<<<<<< HEAD
<<<<<<< HEAD
                      <span className='text - blue - 400 font - semibold'>;
                        {service.zion_pricing.professional}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      <span className='text - blue - 400 font - semibold'>;
                        {service.zion_pricing.professional}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </span>;
                    </span>;
                    <span>;
                      Enterprise:{' '}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <span className='text-purple-400 font-semibold'>;
                        {service && service.zionPricing.enterprise}
                      <span className='text - purple - 400 font - semibold'>;
                        {service.zion_pricing.enterprise}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </span>;
                    </span>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div key={serviceIndex} className="mb-24">
                <div className="text-center mb-16">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mx-auto mb-6`}>
                    {service.icon}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.service}</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300">
                    <span>Starter: <span className="text-green-400 font-semibold">{service.zionPricing.starter}</span></span>
                    <span>Professional: <span className="text-blue-400 font-semibold">{service.zionPricing.professional}</span></span>
                    <span>Enterprise: <span className="text-purple-400 font-semibold">{service.zionPricing.enterprise}</span></span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        </div>;
                        <div className='text-center'>;
                          <p className='text-green-400 font-semibold mb-2'>;
                            Starting at;
                          </p>;
                          <p className='text-2xl font-bold text-white'>;
                            {service && service.zionPricing.starter}
                          </p>                        </div>                    {service && service.icon}
                  </div>;
                  <h3 className="text-3xl font-bold text-white mb-4">{service && service.service}</h3>;
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300">;
                    <span>Starter: <span className="text-green-400 font-semibold">{service && service.zionPricing.starter}</span></span>;
                    <span>Professional: <span className="text-blue-400 font-semibold">{service && service.zionPricing.professional}</span></span>;
                    <span>Enterprise: <span className="text-purple-400 font-semibold">{service && service.zionPricing.enterprise}</span></span>;
                  </div>;
                </div>;
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">;
                  {/* Zion Service */}
                  <div className="lg:col-span-1">;
                    <Card className="h-full border-2 border-green-500 bg-green-500/5">;
                      <div className="text-center p-6">;
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">;
                          Zion {service && service.service}
                        </div>;
                        <h4 className="text-xl font-bold text-white mb-4">Best Value</h4>;
                        <div className="space-y-3 mb-6">;
                          {service && service.features.map((feature, featureIndex) => (;
                            <div key={featureIndex} className="flex items-center text-gray-300">;
                              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                              <span className="text-sm">{feature}</span>;
                            </div>;
                          ))}

<<<<<<< HEAD
                  {/* Competitors */}
                  {service.competitors.map((competitor, compIndex) => (

<<<<<<< HEAD
                  {/* Competitors */}
                  {service.competitors.map((competitor, compIndex) => (
                    <div key={compIndex} className="lg:col-span-1">
                        </div>
                        <div className="text-center">
                          <p className="text-green-400 font-semibold mb-2">Starting at</p>
                          <p className="text-2xl font-bold text-white">{service.zionPricing.starter}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {/* Competitors */}
                  {service.competitors.map((competitor, compIndex) => (
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>;
                      </div>;
                    </Card>;
                  </div>;

=======

                  {/* Competitors */}
                  {service.competitors.map((competitor, compIndex) => (

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div key={compIndex} className='lg:col-span-1'>
                      <Card className='h-full border border-gray-700'>
                        <div className='text-center p-6'>
                          <div className='inline-flex items-center px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-sm font-medium mb-4'>
                            {competitor.name}
                          </div>
<<<<<<< HEAD

                          <div className='flex items-center justify-center mb-4'>                            {[...Array(5)].map((_, i) => (

                            {[...Array(5)].map((_, i) => (


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className='flex items-center justify-center mb-4'>                            {[...Array(5)].map((_, i) => (                    <div key={compIndex} className="lg:col-span-1">
                      <Card className="h-full border border-gray-700">
                        <div className="text-center p-6">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-sm font-medium mb-4">
                            {competitor.name}
                          </div>
                          <div className="flex items-center justify-center mb-4">
                          <div className='flex items-center justify-center mb-4'>                            {[...Array(5)].map((_, i) => (

                            {[...Array(5)].map((_, i) => (

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math && Math.floor(parseFloat(competitor && competitor.rating))
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />;
                            ))}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                            <span className='text-sm text-gray-400 ml-2'>
                              {competitor.rating}
                            </span>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                  <li
                                    key={proIndex}
                                    className='flex items-center'>;
                                    <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />                                    {pro}                          </div>;
                          <div className="mb-4">;
                            <p className="text-lg font-semibold text-white">{competitor && competitor.pricing}</p>;
                          </div>;
                          <div className="space-y-2 mb-4 text-xs">;
                            <div>;
                              <p className="text-green-400 font-medium mb-1">Pros:</p>;
                              <ul className="text-gray-300 space-y-1">;
                                {competitor && competitor.pros.map((pro, proIndex) => (;
                                  <li key={proIndex} className="flex items-center">;
                                    <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            <span className="text-sm text-gray-400 ml-2">{competitor.rating}</span>
=======
=======
                            <span className="text-sm text-gray-400 ml-2">{competitor.rating}</span>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <span className='text-sm text-gray-400 ml-2'>
                              {competitor.rating}
                            </span>

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                                    {pro}
                                  </li>;
                                ))}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              </ul>
                            </div>
                            <div>
                              <p className="text-red-400 font-medium mb-1">Cons:</p>
<<<<<<< HEAD
<<<<<<< HEAD
                                    {pro}
                                  </li>;
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className='text-red-400 font-medium mb-1'>
                                Cons:
                              </p>
                              <ul className='text-gray-300 space-y-1'>
                                {competitor.cons.map((con, conIndex) => (
                                  <li
                                    key={conIndex}
                                    className='flex items-center'
                                  >
                                    <X className='w-3 h-3 text-red-400 mr-2 flex-shrink-0' />                                    {con}                              <p className="text-red-400 font-medium mb-1">Cons:</p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              <ul className="text-gray-300 space-y-1">
                                {competitor.cons.map((con, conIndex) => (
                                  <li key={conIndex} className="flex items-center">
                                    <X className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
                                    {con}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                                    {con}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
<<<<<<< HEAD
<<<<<<< HEAD
                          <div className='text-center'>
                            <p className='text-green-400 font-semibold text-sm'>
                              {competitor.savings}
                            </p>                          </div>                          <div className="text-center">
=======
                          <div className="text-center">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          <div className="text-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <p className="text-green-400 font-semibold text-sm">{competitor.savings}</p>
                          </div>
                        </div>
                      </Card>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}
</div>;
              </div>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
          </div>
        </section>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </section>;


        {/* CTA Section */}


        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-indigo-600 to-purple-600'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              Ready to Save Money and Get Better Features?

            </h2>
            <p className='text-xl text-indigo-100 mb-12'>
              Start your free trial today and see why thousands of businesses
              choose Zion.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                href='/ai-content-generator'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'>;
                Try AI Content Generator;
              </Button>;
              <Button
                href='/cloud-monitoring'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'>;
                Try Cloud Monitoring;
              </Button>;
              <Button
                href='/devops-automation'
                variant='secondary'
                size='lg'

<<<<<<< HEAD
<<<<<<< HEAD
                Try DevOps Automation
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Save Money and Get Better Features?
            </h2>
            <p className="text-xl text-indigo-100 mb-12">
              Start your free trial today and see why thousands of businesses choose Zion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/ai-content-generator"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Try AI Content Generator
              </Button>
              <Button
href="/cloud-monitoring"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Try Cloud Monitoring
              </Button>
              <Button
href="/devops-automation"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                Try DevOps Automation

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                Try DevOps Automation

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Competitors */}
                  {service.competitors.map ((competitor, comp_index) => (
                    <div key={comp_index} className='lg:col - span - 1'>;
                      <Card className='h - full border border - gray - 700'>;
                        <div className='text - center p - 6'>;
                          <div className='inline - flex items - center px - 3 py - 1 rounded - full bg - gray - 500 / 20 text - gray - 400 text - sm font - medium mb - 4'>;
                            {competitor.name}
                          </div>;
                          <div className='flex items - center justify - center mb - 4'>                            {[...Array (5)].map ((_, i) => (                    <div key={comp_index} className="lg:col - span - 1">;
                      <Card className="h - full border border - gray - 700">;
                        <div className="text - center p - 6">;
                          <div className="inline - flex items - center px - 3 py - 1 rounded - full bg - gray - 500 / 20 text - gray - 400 text - sm font - medium mb - 4">;
                            {competitor.name}
                          </div>;
                          <div className="flex items - center justify - center mb - 4">;
                              <Star;
                                key={i}
                                className={`w - 4 h - 4 ${
                                  i < Math.floor (parse_float (competitor.rating));
                                    ? 'text - yellow - 400 fill - current';
                                    : 'text - gray - 400';
                                }`}
                              />))}
                            <span className='text - sm text - gray - 400 ml - 2'>;
                              {competitor.rating}
                            </span>;
                          </div>;
                          <div className='mb - 4'>;
                            <p className='text - lg font - semibold text - white'>;
                              {competitor.pricing}
                            </p>;
                          </div>;
                          <div className='space - y-2 mb - 4 text - xs'>;
                            <div>;
                              <p className='text - green - 400 font - medium mb - 1'>;
                                Pros:;
                              </p>;
                              <ul className='text - gray - 300 space - y-1'>;
                                {competitor.pros.map ((pro, pro_index) => (
                                  <li;
                                    key={pro_index}
                                    className='flex items - center';
                                  >;
                                    <Check className='w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0' />                                    {pro}                          </div>;
                          <div className="mb - 4">;
                            <p className="text - lg font - semibold text - white">{competitor.pricing}</p>;
                          </div>;
                          <div className="space - y-2 mb - 4 text - xs">;
                            <div>;
                              <p className="text - green - 400 font - medium mb - 1">Pros:</p>;
                              <ul className="text - gray - 300 space - y-1">;
                                {competitor.pros.map ((pro, pro_index) => (
                                  <li key={pro_index} className="flex items - center">;
                                    <Check className="w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0" />;
                                    {pro}
                                  </li>))}
                              </ul>;
                            </div>;
                            <div>;
                              <p className='text - red - 400 font - medium mb - 1'>;
                                Cons:;
                              </p>;
                              <ul className='text - gray - 300 space - y-1'>;
                                {competitor.cons.map ((con, con_index) => (
                                  <li;
                                    key={con_index}
                                    className='flex items - center';
                                  >;
                                    <X className='w - 3 h - 3 text - red - 400 mr - 2 flex - shrink - 0' />                                    {con}                              <p className="text - red - 400 font - medium mb - 1">Cons:</p>;
                              <ul className="text - gray - 300 space - y-1">;
                                {competitor.cons.map ((con, con_index) => (
                                  <li key={con_index} className="flex items - center">;
                                    <X className="w - 3 h - 3 text - red - 400 mr - 2 flex - shrink - 0" />;
                                  </li>))}
                              </ul>;
                            </div>;
                          </div>;
                          <div className='text - center'>;
                            <p className='text - green - 400 font - semibold text - sm'>;
                              {competitor.savings}
                            </p>                          </div>                          <div className="text - center">;
                            <p className="text - green - 400 font - semibold text - sm">{competitor.savings}</p>;
                          </div>;
                        </div>;
                      </Card>;
                    </div>))}
                </div>;
              </div>))}
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='py - 24 bg - gradient - to - r from - indigo - 600 to - purple - 600'>;
          <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
            </h2>;
            <p className='text - xl text - indigo - 100 mb - 12'>;
              Start your free trial today and see why thousands of businesses;
              choose Zion.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;
                href='/ai - content - generator';
                variant='secondary';
                size='lg';
                className='bg - white text - indigo - 600 hover:bg - gray - 100'              >;
                Try AI Content Generator;
              </Button>;
              <Button;
                href='/cloud - monitoring';
                variant='secondary';
                size='lg';
                className='bg - white text - indigo - 600 hover:bg - gray - 100'              >;
                Try Cloud Monitoring;
              </Button>;
              <Button;
                href='/devops - automation';
                variant='secondary';
                size='lg';
                className='bg - white text - indigo - 600 hover:bg - gray - 100'              >                href="/ai - content - generator";
                variant="secondary";
                size="lg";
                className="bg - white text - indigo - 600 hover:bg - gray - 100";
                Try AI Content Generator;
              </Button>;
              <Button;
                href='/cloud - monitoring';
                variant='secondary';
                size='lg';
                className='bg - white text - indigo - 600 hover:bg - gray - 100'                href="/cloud - monitoring";
                variant="secondary";
                size="lg";
                className="bg - white text - indigo - 600 hover:bg - gray - 100";
                Try Cloud Monitoring;
              </Button>;
              <Button;
                href='/devops - automation';
                variant='secondary';
                size='lg';
                className='bg - white text - indigo - 600 hover:bg - gray - 100'                href="/devops - automation";
                variant="secondary";
                size="lg";
                className="bg - white text - indigo - 600 hover:bg - gray - 100";
                Try DevOps Automation;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </>);
}
  );
}
    </>);
}
          </div>
        </section>

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );
}

=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='bg-white text-indigo-600 hover:bg-gray-100'              >                href="/ai-content-generator"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try AI Content Generator
              </Button>
<<<<<<< HEAD
<<<<<<< HEAD
              <Button

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Button

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
