

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
  Rocket,;
  Settings,;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';

export default function AISeosuitePage() {
  const features = [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
export default function AISeosuitePage() {
  const features = [
    {
      icon: <Search className='w-8 h-8 text-white' />
      title: 'AI Keyword Research'
      description:
        'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
      gradient: 'from-blue-400 to-cyan-500'
    }
    {
      icon: <TrendingUp className='w-8 h-8 text-white' />
      title: 'Ranking Analytics'
      description:
        'Track your search rankings in real-time with comprehensive analytics and competitor insights.'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'
    }
    {
      icon: <Target className='w-8 h-8 text-white' />
      title: 'Content Optimization'
      description:
        'AI-powered content analysis and optimization suggestions to improve search visibility.'
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Technical SEO'
      description:
        'Comprehensive technical SEO audits with actionable recommendations for improvement.'
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      gradient: 'from-orange-400 to-red-500'
    }
    {
      icon: <Globe className='w-8 h-8 text-white' />
      title: 'Local SEO'
      description:
        'Optimize for local search with location-based keyword research and citation management.'
      color: 'bg-gradient-to-br from-teal-500 to-blue-600'
      gradient: 'from-teal-400 to-blue-500'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Automated Reports'
      description:

import { Search, TrendingUp, Target, BarChart3, Globe, Zap, Users, CheckCircle, ArrowRight, Play, Star, Eye, Brain, Shield, Lock, Sparkles, ChartBar, Lightbulb, Rocket, Settings } from 'lucide-react';
        'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
    },;
  ];




export default function AISeosuitePage() {
  const features = [
    {

=======  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$39'
      period: '/month'
      description: 'Perfect for small websites and blogs'
      features: [

        'Up to 5 websitesBasic keyword researchMonthly site auditsEmail supportBasic reportingMobile app access'
      ];
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    };
    {
import {
  Search
  TrendingUp
  Target
  BarChart3
  Globe
  Zap
  Users
  CheckCircle
  ArrowRight
  Play
  Star
  Eye
  Brain
  Shield
  Lock
  Sparkles
  ChartBar
  Lightbulb
  Rocket
  Settings;
} from 'lucide-react';
export default function AISeosuitePage() {
  const features = [
    {
      icon: <Search className='w-8 h-8 text-white' />,import { Search, TrendingUp, Target, BarChart3, Globe, Zap, Users, CheckCircle, ArrowRight, Play, Star, Eye, Brain, Shield, Lock, Sparkles, ChartBar, Lightbulb, Rocket, Settings } from 'lucide-react';
==============  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Eye,
  Brain,
  Shield,
  Lock,
  Sparkles,
  ChartBar,
  Lightbulb,
export default function AISeosuitePage() {_const _features = [
    {
      icon: <Search className=&quot;w-8 h-8 text-white&quot; />,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500'},
    {
      icon: <TrendingUp className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Ranking Analytics',
      description: 'Track your search rankings in real-time with comprehensive analytics and competitor insights.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <Target className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Content Optimization',
      description: 'AI-powered content analysis and optimization suggestions to improve search visibility.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'},
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Technical SEO',
      description: 'Comprehensive technical SEO audits with actionable recommendations for improvement.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500'},
    {
      icon: <Globe className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Local SEO',
      description: 'Optimize for local search with location-based keyword research and citation management.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',
      gradient: 'from-teal-400 to-blue-500'},
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Automated Reports',
      description: 'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500'}],

  const seoTools = [
    {
      category: 'Keyword Research',
    }
  ],

  const pricingPlans = [

=======
    };
    {
==============      features: [;
        'Up to 25 websites',
        'Advanced keyword research',
        'Weekly site audits',
        'Priority support',
        'Advanced reporting',
        'Competitor analysis',
        'API access',
        'White - label reports',
      ],
      popular: true,
      color: 'border - blue - 500',
      button_color: 'bg - blue - 600 hover:bg - blue - 700',
    },    {        'Up to 25 websites_advanced keyword research_weekly site audits_priority support_advanced reporting_competitor analysisAPI access_white - label reports';
      ];
      popular: true,
      color: 'border - blue - 500',
      button_color: 'bg - blue - 600 hover:bg - blue - 700';
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and enterprises',
=======
      features: [;=======

=======
      features: [;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'Unlimited websites',
        'Full SEO suite',
        'Daily site audits',
        'Dedicated support',
        'Custom reporting',
        'Advanced analytics',
        'SLA guarantee',
        'On - premise option',
      ],
      popular: false,
      color: 'border - purple - 600',
      button_color: 'bg - purple - 600 hover:bg - purple - 700',
    },
  ];
;
  const integrations = [;
    {
      name: 'Google Analytics',
      icon: '📊',
      description: 'Traffic data integration',
    },
    {
      name: 'Google Search Console',
      icon: '🔍',
      description: 'Search performance data',
    },    { name: 'WordPress', icon: '🔌', description: 'Plugin integration' },      popular: false,
      color: 'border - purple - 600',
      button_color: 'bg - purple - 600 hover:bg - purple - 700';
    }
  ];
;
  const integrations = [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    { name: 'Google Analytics', icon: '📊', description: 'Traffic data integration' },
    { name: 'Google Search Console', icon: '🔍', description: 'Search performance data' },
    { name: 'WordPress', icon: '🔌', description: 'Plugin integration' },
    { name: 'Shopify', icon: '🛒', description: 'E - commerce optimization' },
    { name: 'HubSpot', icon: '📈', description: 'Marketing automation sync' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'Zapier', icon: '⚡', description: '500+ app integrations' },
    { name: 'API Access', icon: '🔑', description: 'Custom integrations' }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  const use_cases = [;
    {
      title: 'E - commerce Websites',
      description:;
        'Optimize product pages, category pages, and search functionality for better conversions.',
      benefits: [;
        'Higher search rankings',
        'Increased organic traffic',
        'Better conversion rates',
        'Competitive advantage',
      ],
    },
    {
      title: 'Content Marketing',
      description:;
        'Optimize blog posts, articles, and content for search engines and user engagement.',
      icon: '📝',
      benefits: [;
        'Better content visibility',
        'Higher engagement rates',
        'More organic traffic',
        'Authority building',
      ],
    },
    {
      title: 'Local Businesses',
      description:;
        'Improve local search visibility and attract customers in your area.',
      icon: '📍',
      benefits: [;
        'Local search dominance',
        'Increased foot traffic',
        'Better customer acquisition',
        'Competitive positioning',
      ],
    },
    {
      title: 'SaaS Companies',
      description:;
        'Optimize landing pages, feature pages, and documentation for better user acquisition.',
      icon: '💻',
      benefits: [;
        'Higher conversion rates',
        'Better user experience',
        'Reduced acquisition costs',
        'Market expansion',
      ],
    },
  ];
;
  const success_metrics = [;
export default function AISeosuitePage() {
  const features = [
    {
      icon: <Search className='w-8 h-8 text-white' />
      title: 'AI Keyword Research'
      description:
        'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
      gradient: 'from-blue-400 to-cyan-500'
    }
    {
      icon: <TrendingUp className='w-8 h-8 text-white' />
      title: 'Ranking Analytics'
      description:
        'Track your search rankings in real-time with comprehensive analytics and competitor insights.'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'
    }
    {
      icon: <Target className='w-8 h-8 text-white' />
      title: 'Content Optimization'
      description:
        'AI-powered content analysis and optimization suggestions to improve search visibility.'
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Technical SEO'
      description:
        'Comprehensive technical SEO audits with actionable recommendations for improvement.'
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      gradient: 'from-orange-400 to-red-500'
    }
    {
      icon: <Globe className='w-8 h-8 text-white' />
      title: 'Local SEO'
      description:
        'Optimize for local search with location-based keyword research and citation management.'
      color: 'bg-gradient-to-br from-teal-500 to-blue-600'
      gradient: 'from-teal-400 to-blue-500'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Automated Reports'
      description:
        'Generate comprehensive SEO reports automatically with actionable insights and recommendations.'
      color: 'bg-gradient-to-br from-pink-500 to-rose-600'
      gradient: 'from-pink-400 to-rose-500'
    }
  ];
        'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
    },;
  ];

  const seoTools = [
    {
      category: 'Keyword Research'
      icon: <Search className='w-6 h-6 text-blue-400' />
      tools: [
        'Long-tail keyword finder'
        'Competitor keyword analysis'
        'Search volume estimation'
        'Keyword difficulty scoring'
        'Trending keywords'
      ]
    }
    {
      category: 'On-Page SEO'
      icon: <Target className='w-6 h-6 text-green-400' />
      tools: [
        'Content optimization'
        'Meta tag generator'
        'Schema markup builder'
        'Internal linking suggestions'
        'Image optimization'
      ]
    }
    {
      category: 'Technical SEO'
      icon: <Settings className='w-6 h-6 text-purple-400' />
      tools: [
        'Site audit tool'
        'Page speed analyzer'
        'Mobile optimization'
        'Core Web Vitals'
        'XML sitemap generator'
      ]
    }
    {
      category: 'Analytics & Reporting'
      icon: <BarChart3 className='w-6 h-6 text-orange-400' />
      tools: [
        'Ranking tracker'
        'Traffic analysis'
        'Conversion tracking'
        'Competitor monitoring'
        'Custom dashboards'
      ]
    },  ];      title: 'AI Keyword Research'
      description: 'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
      gradient: 'from-blue-400 to-cyan-500'}
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />
      title: 'Ranking Analytics'
      description: 'Track your search rankings in real-time with comprehensive analytics and competitor insights.'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'}
    {
      icon: <Target className="w-8 h-8 text-white" />
      title: 'Content Optimization'
      description: 'AI-powered content analysis and optimization suggestions to improve search visibility.'
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'}
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />
      title: 'Technical SEO'
      description: 'Comprehensive technical SEO audits with actionable recommendations for improvement.'
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      gradient: 'from-orange-400 to-red-500'}
    {
      icon: <Globe className="w-8 h-8 text-white" />
      title: 'Local SEO'
      description: 'Optimize for local search with location-based keyword research and citation management.'
      color: 'bg-gradient-to-br from-teal-500 to-blue-600'
      gradient: 'from-teal-400 to-blue-500'}
    {
      icon: <Zap className="w-8 h-8 text-white" />
      title: 'Automated Reports'
      description: 'Generate comprehensive SEO reports automatically with actionable insights and recommendations.'
      color: 'bg-gradient-to-br from-pink-500 to-rose-600'
      gradient: 'from-pink-400 to-rose-500'}]
  const seoTools = [
    {
      category: 'Keyword Research'
      icon: <Search className="w-6 h-6 text-blue-400" />
      tools: ['Long-tail keyword finderCompetitor keyword analysisSearch volume estimationKeyword difficulty scoringTrending keywords']
    }
    {
      category: 'On-Page SEO'
      icon: <Target className="w-6 h-6 text-green-400" />
      tools: ['Content optimizationMeta tag generatorSchema markup builderInternal linking suggestionsImage optimization']
    }
    {
      category: 'Technical SEO'
      icon: <Settings className="w-6 h-6 text-purple-400" />
      tools: ['Site audit toolPage speed analyzerMobile optimizationCore Web VitalsXML sitemap generator']
    }
    {
      category: 'Analytics & Reporting'
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />
      tools: ['Ranking trackerTraffic analysisConversion trackingCompetitor monitoringCustom dashboards']
    }
      icon: <Search className='w-8 h-8 text-white' />,
  ];

export default function AISeosuitePage() {
  const features = [
    {

  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$39'
      period: '/month'
      description: 'Perfect for small websites and blogs'
      features: [
        'Up to 5 websites'
        'Basic keyword research'
        'Monthly site audits'
        'Email support'
        'Basic reporting'
        'Mobile app access'
      ]
      popular: false
      color: 'border-gray-600'
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },    {        'Up to 5 websitesBasic keyword researchMonthly site auditsEmail supportBasic reportingMobile app access'
      ];
      popular: false
      color: 'border-gray-600'
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    }
      name: 'Professional'
      price: '$129'
      period: '/month'
      description: 'Ideal for growing businesses and agencies'
      features: [
        'Up to 25 websites'
        'Advanced keyword research'
        'Weekly site audits'
        'Priority support'
        'Advanced reporting'
        'Competitor analysis'
        'API access'
        'White-label reports'
      ]
      popular: true
      color: 'border-blue-500'
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },    {        'Up to 25 websitesAdvanced keyword researchWeekly site auditsPriority supportAdvanced reportingCompetitor analysisAPI accessWhite-label reports'
      ];
      popular: true
      color: 'border-blue-500'
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }
      name: 'Enterprise'
      price: '$399'
      period: '/month'
      description: 'For large organizations and enterprises'
      features: [
        'Unlimited websites'
        'Full SEO suite'
        'Daily site audits'
        'Dedicated support'
        'Custom reporting'
        'Advanced analytics'
        'SLA guarantee'
        'On-premise option'
      ]
      popular: false
      color: 'border-purple-600'
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];
  const integrations = [
    {
      name: 'Google Analytics'
      icon: '📊'
      description: 'Traffic data integration'
    }
    {
      name: 'Google Search Console'
      icon: '🔍'
      description: 'Search performance data'
    },    { name: 'WordPress', icon: '🔌', description: 'Plugin integration' },      popular: false
      color: 'border-purple-600'
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];
  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Traffic data integration' }
    { name: 'Google Search Console', icon: '🔍', description: 'Search performance data' }
    { name: 'WordPress', icon: '🔌', description: 'Plugin integration' }
    { name: 'Shopify', icon: '🛒', description: 'E-commerce optimization' }
    { name: 'HubSpot', icon: '📈', description: 'Marketing automation sync' }
    { name: 'Slack', icon: '💬', description: 'Team notifications' }
    { name: 'Zapier', icon: '⚡', description: '500+ app integrations' }
    { name: 'API Access', icon: '🔑', description: 'Custom integrations' },  ];    { name: 'API Access', icon: '🔑', description: 'Custom integrations' }
  ];
  const useCases = [
    {
      title: 'E-commerce Websites'
      description:
        'Optimize product pages, category pages, and search functionality for better conversions.'
      benefits: [
        'Higher search rankings'
        'Increased organic traffic'
        'Better conversion rates'
        'Competitive advantage'
      ]
    }
    {
      title: 'Content Marketing'
      description:
        'Optimize blog posts, articles, and content for search engines and user engagement.'
      icon: '📝'
      benefits: [
        'Better content visibility'
        'Higher engagement rates'
        'More organic traffic'
        'Authority building'
      ]
    }
    {
      title: 'Local Businesses'
      description:
        'Improve local search visibility and attract customers in your area.'
      icon: '📍'
      benefits: [
        'Local search dominance'
        'Increased foot traffic'
        'Better customer acquisition'
        'Competitive positioning'
      ]
    }
    {
      title: 'SaaS Companies'
      description:
        'Optimize landing pages, feature pages, and documentation for better user acquisition.'
      icon: '💻'
      benefits: [
        'Higher conversion rates'
        'Better user experience'
        'Reduced acquisition costs'
        'Market expansion'
      ]
    }
  ];
  const successMetrics = [
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      metric: 'Organic Traffic'
      value: '+150%'
      description: 'Average increase in organic traffic'
    }
    {
      metric: 'Search Rankings'
      value: '+45%'
      description: 'Improvement in search rankings'
    }
    {
      metric: 'Conversion Rate'
      value: '+80%'
      description: 'Increase in conversion rates'
    }
    {
      metric: 'ROI'
      value: '400%'
      description: 'Average return on investment'
    },  ];    { metric: 'Organic Traffic', value: '+150%', description: 'Average increase in organic traffic' }
    { metric: 'Search Rankings', value: '+45%', description: 'Improvement in search rankings' }
    { metric: 'Conversion Rate', value: '+80%', description: 'Increase in conversion rates' }

export default function AISeosuitePage() {;
  const features = [;
    {;
      icon: <Search className='w-8 h-8 text-white' />,;
      title: 'AI Keyword Research',;
      description:;
        'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.',;
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',;
      gradient: 'from-blue-400 to-cyan-500',;
    },;
    {;
      icon: <TrendingUp className='w-8 h-8 text-white' />,;
      title: 'Ranking Analytics',;
      description:;
        'Track your search rankings in real-time with comprehensive analytics and competitor insights.',;
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',;
      gradient: 'from-green-400 to-emerald-500',;
    },;
    {;
      icon: <Target className='w-8 h-8 text-white' />,;
      title: 'Content Optimization',;
      description:;
        'AI-powered content analysis and optimization suggestions to improve search visibility.',;
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',;
      gradient: 'from-purple-400 to-indigo-500',;
    },;
    {;
      icon: <BarChart3 className='w-8 h-8 text-white' />,;
      title: 'Technical SEO',;
      description:;
        'Comprehensive technical SEO audits with actionable recommendations for improvement.',;
      color: 'bg-gradient-to-br from-orange-500 to-red-600',;
      gradient: 'from-orange-400 to-red-500',;
    },;
    {;
      icon: <Globe className='w-8 h-8 text-white' />,;
      title: 'Local SEO',;
      description:;
        'Optimize for local search with location-based keyword research and citation management.',;
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',;
      gradient: 'from-teal-400 to-blue-500',;
    },;
    {;
      icon: <Zap className='w-8 h-8 text-white' />,;
      title: 'Automated Reports',;
      description:;
        'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',;
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',;
      gradient: 'from-pink-400 to-rose-500',;
    },;
  ];
  const seoTools = [;
    {;
      category: 'Keyword Research',;
      icon: <Search className='w-6 h-6 text-blue-400' />,;
      tools: [;
        'Long-tail keyword finder',;
        'Competitor keyword analysis',;
        'Search volume estimation',;
        'Keyword difficulty scoring',;
        'Trending keywords',;
      ],;
    },;
    {;
      category: 'On-Page SEO',;
      icon: <Target className='w-6 h-6 text-green-400' />,;
      tools: [;
        'Content optimization',;
        'Meta tag generator',;
        'Schema markup builder',;
        'Internal linking suggestions',;
        'Image optimization',;
      ],;
    },;
    {;
      category: 'Technical SEO',;
      icon: <Settings className='w-6 h-6 text-purple-400' />,;
      tools: [;
        'Site audit tool',;
        'Page speed analyzer',;
        'Mobile optimization',;
        'Core Web Vitals',;
        'XML sitemap generator',;
      ],;
    },;
    {;
      category: 'Analytics & Reporting',;
      icon: <BarChart3 className='w-6 h-6 text-orange-400' />,;
      tools: [;
        'Ranking tracker',;
        'Traffic analysis',;
        'Conversion tracking',;
        'Competitor monitoring',;
        'Custom dashboards',;
      ],;
    },  ];      title: 'AI Keyword Research',;
      description: 'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.',;
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',;
      gradient: 'from-blue-400 to-cyan-500'},;
    {;
      icon: <TrendingUp className="w-8 h-8 text-white" />,;
      title: 'Ranking Analytics',;
      description: 'Track your search rankings in real-time with comprehensive analytics and competitor insights.',;
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',;
      gradient: 'from-green-400 to-emerald-500'},;
    {;
      icon: <Target className="w-8 h-8 text-white" />,;
      title: 'Content Optimization',;
      description: 'AI-powered content analysis and optimization suggestions to improve search visibility.',;
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',;
      gradient: 'from-purple-400 to-indigo-500'},;
    {;
      icon: <BarChart3 className="w-8 h-8 text-white" />,;
      title: 'Technical SEO',;
      description: 'Comprehensive technical SEO audits with actionable recommendations for improvement.',;
      color: 'bg-gradient-to-br from-orange-500 to-red-600',;
      gradient: 'from-orange-400 to-red-500'},;
    {;
      icon: <Globe className="w-8 h-8 text-white" />,;
      title: 'Local SEO',;
      description: 'Optimize for local search with location-based keyword research and citation management.',;
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',;
      gradient: 'from-teal-400 to-blue-500'},;
    {;
      icon: <Zap className="w-8 h-8 text-white" />,;
      title: 'Automated Reports',;
      description: 'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',;
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',;
      gradient: 'from-pink-400 to-rose-500'}],;
  const seoTools = [;
    {;
      category: 'Keyword Research',;
      icon: <Search className="w-6 h-6 text-blue-400" />,;
      tools: ['Long-tail keyword finderCompetitor keyword analysisSearch volume estimationKeyword difficulty scoringTrending keywords'];
=======
==============


=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };
    {;
      category: 'On-Page SEO',;
      icon: <Target className="w-6 h-6 text-green-400" />,;
      tools: ['Content optimizationMeta tag generatorSchema markup builderInternal linking suggestionsImage optimization'];
    };
    {;
      category: 'Technical SEO',;
      icon: <Settings className="w-6 h-6 text-purple-400" />,;
      tools: ['Site audit toolPage speed analyzerMobile optimizationCore Web VitalsXML sitemap generator'];
    };
    {;
      category: 'Analytics & Reporting',;
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,;
      tools: ['Ranking trackerTraffic analysisConversion trackingCompetitor monitoringCustom dashboards'];
    }
  ];
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const successMetrics = [
    { metric: 'Organic Traffic', value: '+150%', description: 'Average increase in organic traffic' },
    { metric: 'Search Rankings', value: '+45%', description: 'Improvement in search rankings' },
    { metric: 'Conversion Rate', value: '+80%', description: 'Increase in conversion rates' },
    { metric: 'ROI', value: '400%', description: 'Average return on investment' }


=======
    { metric: 'ROI', value: '400%', description: 'Average return on investment' }

=======

  ];

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>;
        <div className='absolute inset-0'>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0 && 0.08),transparent_50%)]' />;
        </div>;

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>;
              <Sparkles className='w-4 h-4 mr-2' />;
              AI-Powered Search Engine Optimization;
            </div>;
          </div>;

          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight'>;
            AI-Powered SEO Suite;
          </h1>;
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed'>;
            Dominate search rankings with AI-powered SEO tools, comprehensive;
            analytics, and intelligent optimization;
          </p>;

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;

  ];

  return (
    <>
      <Head>
        <title>
          AI-Powered SEO Suite | Zion Tech Group - Advanced SEO Tools &
          Analytics
        </title>
        <meta
          name='description'
          content='Comprehensive AI-powered SEO suite with keyword research, content optimization, technical SEO audits, and real-time analytics. Boost your search rankings and organic traffic.'
        />
        <meta
          property='og:title'
          content='AI-Powered SEO Suite | Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Advanced SEO tools with AI-powered optimization, keyword research, and comprehensive analytics.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)]' />
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
              <Sparkles className='w-4 h-4 mr-2' />
              AI-Powered Search Engine Optimization
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight'>
            AI-Powered SEO Suite
          </h1>
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed'>
            Dominate search rankings with AI-powered SEO tools, comprehensive
            analytics, and intelligent optimization
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              href='#pricing'
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='#demo'
              variant='outline'
              size='lg'

              className='border-white/20 hover:border-white/40 hover:bg-white/5'>;
              <Play className='w-5 h-5 mr-2' />              Watch Demo      </Head>;

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">;
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]" />;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0 && 0.08),transparent_50%)]" />;
        </div>;

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">;
              <Sparkles className="w-4 h-4 mr-2" />;
              AI-Powered Search Engine Optimization;
            </div>;
          </div>;

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">;
            AI-Powered SEO Suite;
          </h1>;
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">;
            Dominate search rankings with AI-powered SEO tools, comprehensive analytics, and intelligent optimization;
          </p>;

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">;=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Everything you need to dominate search rankings and drive organic;
              traffic;
            </p>;
          </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
            {features.map ((feature, index) => (
              <Card;
                key={index}
                className='text - center group bg - gray - 800 / 50 border border - gray - 700 hover:border - blue - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300 hover:-translate - y-1';
                style={{ animation_delay: `${index * 0.1 + 0.2}s` }}
              >;
                <div className='relative'>;
                  <div;
                    className={`w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center transition - all duration - 300 group - hover:scale - 110 group - hover:shadow - lg bg - gradient - to - br ${feature.color} shadow - xl`}
                  >;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    {feature.icon}
                  </div>;
                </div>;
                <h3 className='text - xl font - bold mb - 4 text - white group - hover:text - blue - 400 transition - colors duration - 300'>;
                  {feature.title}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </h3>
                <p className='text-gray-400 leading-relaxed'>                  {feature.description}              Powerful SEO Features            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Everything you need to dominate search rankings and drive organic traffic
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature && feature.color} shadow-xl`}>;
                    {feature && feature.icon}
                  </div>;
                </div>;
                <h3 className='text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300'>;
                  {feature && feature.title}
                </h3>;
                <p className='text-gray-400 leading-relaxed'>                  {feature && feature.description}              Powerful SEO Features;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Everything you need to dominate search rankings and drive organic traffic;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                </p>
              </Card>
=======
=======
                </p>
              </Card>>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>
        </div>
      </section>

                </p>
              </Card>>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





      <section className="py-24 bg-black relative overflow-hidden">

      {/* SEO Tools Section */}
      <section className='py-24 bg-black relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Comprehensive SEO Tools
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Professional-grade tools used by top SEO agencies and marketers
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>      <section className="py-24 bg-black relative overflow-hidden">
==============        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Comprehensive SEO Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

          </div>;
        </div>;
      </section>;
      {/* SEO Tools Section */}
      <section className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Comprehensive SEO Tools;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Professional-grade tools used by top SEO agencies and marketers;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>      <section className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Comprehensive SEO Tools;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
            {seoTools && seoTools.map((tool, index) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Card
                key={index}
                className='group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                <div className='flex items-start space-x-4'>;
                  <div className='flex-shrink-0'>{tool && tool.icon}</div>;
                  <div className='flex-1'>;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300'>;
                      {tool && tool.category}
                    </h3>;
                    <div className='grid grid-cols-1 gap-2'>;
                      {tool && tool.tools.map((toolName, toolIndex) => (;
                        <div
                          key={toolIndex}
                          className='flex items-center text-sm text-gray-300'>;
                          <CheckCircle className='w-4 h-4 text-blue-400 mr-2 flex-shrink-0' />                          {toolName}            {seoTools && seoTools.map((tool, index) => (;
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                <div className="flex items-start space-x-4">;
                  <div className="flex-shrink-0">{tool && tool.icon}</div>;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">;
                      {tool && tool.category}
                    </h3>;
                    <div className="grid grid-cols-1 gap-2">;
                      {tool && tool.tools.map((toolName, toolIndex) => (;
                        <div key={toolIndex} className="flex items-center text-sm text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Professional-grade tools used by top SEO agencies and marketers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoTools.map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{tool.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {tool.category}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {tool.tools.map((toolName, toolIndex) => (
                        <div key={toolIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {toolName}

                        </div>
=======
                          {toolName}
=======

                          {toolName}

                          {toolName}






      <section className="py-24 bg-gray-900 relative overflow-hidden">

      {/* Success Metrics Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Proven Results
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              See the impact our AI-powered SEO suite has on businesses
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>      <section className="py-24 bg-gray-900 relative overflow-hidden">
==============        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Proven Results
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

          </div>;
        </div>;
      </section>;
      {/* Success Metrics Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Proven Results;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              See the impact our AI-powered SEO suite has on businesses;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>      <section className="py-24 bg-gray-900 relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Proven Results;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>;
            {successMetrics && successMetrics.map((metric, index) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Card
                key={index}
                className='text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1'>;
                <div className='text-4xl font-bold mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300'>;
                  {metric && metric.value}
                </div>;
                <h3 className='text-xl font-bold mb-2 text-white'>;
                  {metric && metric.metric}
                </h3>;
                <p className='text-gray-400 text-sm'>{metric && metric.description}</p>              </Card>            {successMetrics && successMetrics.map((metric, index) => (;
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1">;
                <div className="text-4xl font-bold mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">;
                  {metric && metric.value}
                </div>;
                <h3 className="text-xl font-bold mb-2 text-white">{metric && metric.metric}</h3>;
                <p className="text-gray-400 text-sm">{metric && metric.description}</p>;
              </Card>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              See the impact our AI-powered SEO suite has on businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-bold mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{metric.metric}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </Card>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </Card>






      <section className="py-24 bg-black relative overflow-hidden">

              </Card>

            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className='py-24 bg-black relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Use Cases
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Trusted by businesses across industries for SEO success
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>      <section className="py-24 bg-black relative overflow-hidden">
==============        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Use Cases;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Trusted by businesses across industries for SEO success;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>      <section className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Use Cases;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
            {useCases && useCases.map((useCase, index) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Card
                key={index}
                className='group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                <div className='flex items-start space-x-4'>;
                  <div className='text-4xl'>{useCase && useCase.icon}</div>;
                  <div className='flex-1'>;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300'>;
                      {useCase && useCase.title}
                    </h3>;
                    <p className='text-gray-400 mb-4 leading-relaxed'>;
                      {useCase && useCase.description}
                    </p>;
                    <div className='grid grid-cols-2 gap-2'>;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div
                          key={benefitIndex}
                          className='flex items-center text-sm text-gray-300'>;
                          <TrendingUp className='w-4 h-4 text-blue-400 mr-2 flex-shrink-0' />                          {benefit}            {useCases && useCases.map((useCase, index) => (;
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                <div className="flex items-start space-x-4">;
                  <div className="text-4xl">{useCase && useCase.icon}</div>;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">;
                      {useCase && useCase.title}
                    </h3>;
                    <p className="text-gray-400 mb-4 leading-relaxed">;
                      {useCase && useCase.description}
                    </p>;
                    <div className="grid grid-cols-2 gap-2">;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">;
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Trusted by businesses across industries for SEO success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}

                        </div>
=======
                          {benefit}
=======

                          {benefit}

                          {benefit}






      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">

      {/* Pricing Section */}
      <section
        id='pricing'
        className='py-24 bg-gray-900 relative overflow-hidden'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Simple, Transparent Pricing
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Choose the plan that fits your SEO needs
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans.map((plan, index) => (      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
==============        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              Choose the plan that fits your SEO needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {pricingPlans.map((plan, index) => (
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section
        id='pricing'
        className='py-24 bg-gray-900 relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Simple, Transparent Pricing;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Choose the plan that fits your SEO needs;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans && pricingPlans.map((plan, index) => (;
              <Card
                key={index}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </p>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* SEO Tools Section */}
      <section className='py - 24 bg - black relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Comprehensive SEO Tools;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>              Professional - grade tools used by top SEO agencies and marketers;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>      <section className="py - 24 bg - black relative overflow - hidden">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10">;
          <div className="text - center mb - 20">;
            <h2 className="text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight">;
              Comprehensive SEO Tools;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            {seo_tools.map ((tool, index) => (
              <Card;
                key={index}
                className='group border border - gray - 700 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300';
              >;
                <div className='flex items - start space - x-4'>;
                  <div className='flex - shrink - 0'>{tool.icon}</div>;
                  <div className='flex - 1'>;
                    <h3 className='text - xl font - bold mb - 3 text - white group - hover:text - blue - 400 transition - colors duration - 300'>;
                      {tool.category}
                    </h3>;
                    <div className='grid grid - cols - 1 gap - 2'>;
                      {tool.tools.map ((tool_name, tool_index) => (
                        <div;
                          key={tool_index}
                          className='flex items - center text - sm text - gray - 300';
                        >;
                          <CheckCircle className='w - 4 h - 4 text - blue - 400 mr - 2 flex - shrink - 0' />                          {tool_name}            {seo_tools.map ((tool, index) => (
              <Card;
                key={index}
                className="group border border - gray - 700 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300";
              >;
                <div className="flex items - start space - x-4">;
                  <div className="flex - shrink - 0">{tool.icon}</div>;
                  <div className="flex - 1">;
                    <h3 className="text - xl font - bold mb - 3 text - white group - hover:text - blue - 400 transition - colors duration - 300">;
                      {tool.category}
                    </h3>;
                    <div className="grid grid - cols - 1 gap - 2">;
                      {tool.tools.map ((tool_name, tool_index) => (
                        <div key={tool_index} className="flex items - center text - sm text - gray - 300">;
                          <CheckCircle className="w - 4 h - 4 text - blue - 400 mr - 2 flex - shrink - 0" />;
                          {tool_name}
                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Success Metrics Section */}
      <section className='py - 24 bg - gray - 900 relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Proven Results;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>              See the impact our AI - powered SEO suite has on businesses;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>      <section className="py - 24 bg - gray - 900 relative overflow - hidden">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10">;
          <div className="text - center mb - 20">;
            <h2 className="text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight">;
              Proven Results;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
            {success_metrics.map ((metric, index) => (
              <Card;
                key={index}
                className='text - center group bg - gray - 800 / 50 border border - gray - 700 hover:border - blue - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300 hover:-translate - y-1';
              >;
                <div className='text - 4xl font - bold mb - 4 text - blue - 400 group - hover:scale - 110 transition - transform duration - 300'>;
                  {metric.value}
                </div>;
                <h3 className='text - xl font - bold mb - 2 text - white'>;
                  {metric.metric}
                </h3>;
                <p className='text - gray - 400 text - sm'>{metric.description}</p>              </Card>            {success_metrics.map ((metric, index) => (
              <Card;
                key={index}
                className="text - center group bg - gray - 800 / 50 border border - gray - 700 hover:border - blue - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300 hover:-translate - y-1";
              >;
                <div className="text - 4xl font - bold mb - 4 text - blue - 400 group - hover:scale - 110 transition - transform duration - 300">;
                  {metric.value}
                </div>;
                <h3 className="text - xl font - bold mb - 2 text - white">{metric.metric}</h3>;
                <p className="text - gray - 400 text - sm">{metric.description}</p>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py - 24 bg - black relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Use Cases;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>              Trusted by businesses across industries for SEO success;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>      <section className="py - 24 bg - black relative overflow - hidden">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10">;
          <div className="text - center mb - 20">;
            <h2 className="text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight">;
              Use Cases;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            {use_cases.map ((use_case, index) => (
              <Card;
                key={index}
                className='group border border - gray - 700 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300';
              >;
                <div className='flex items - start space - x-4'>;
                  <div className='text - 4xl'>{use_case.icon}</div>;
                  <div className='flex - 1'>;
                    <h3 className='text - xl font - bold mb - 3 text - white group - hover:text - blue - 400 transition - colors duration - 300'>;
                      {use_case.title}
                    </h3>;
                    <p className='text - gray - 400 mb - 4 leading - relaxed'>;
                      {use_case.description}
                    </p>;
                    <div className='grid grid - cols - 2 gap - 2'>;
                      {use_case.benefits.map ((benefit, benefit_index) => (
                        <div;
                          key={benefit_index}
                          className='flex items - center text - sm text - gray - 300';
                        >;
                          <TrendingUp className='w - 4 h - 4 text - blue - 400 mr - 2 flex - shrink - 0' />                          {benefit}            {use_cases.map ((use_case, index) => (
              <Card;
                key={index}
                className="group border border - gray - 700 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300";
              >;
                <div className="flex items - start space - x-4">;
                  <div className="text - 4xl">{use_case.icon}</div>;
                  <div className="flex - 1">;
                    <h3 className="text - xl font - bold mb - 3 text - white group - hover:text - blue - 400 transition - colors duration - 300">;
                      {use_case.title}
                    </h3>;
                    <p className="text - gray - 400 mb - 4 leading - relaxed">;
                      {use_case.description}
                    </p>;
                    <div className="grid grid - cols - 2 gap - 2">;
                      {use_case.benefits.map ((benefit, benefit_index) => (
                        <div key={benefit_index} className="flex items - center text - sm text - gray - 300">;
                          <TrendingUp className="w - 4 h - 4 text - blue - 400 mr - 2 flex - shrink - 0" />;
                          {benefit}
                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section;
        id='pricing';
        className='py - 24 bg - gray - 900 relative overflow - hidden';
      >;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Simple, Transparent Pricing;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>              Choose the plan that fits your SEO needs;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing_plans.map ((plan, index) => (      <section id="pricing" className="py - 24 bg - gray - 900 relative overflow - hidden">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10">;
          <div className="text - center mb - 20">;
            <h2 className="text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {pricing_plans.map ((plan, index) => (
              <Card;
                key={index}
                className={`relative group ${plan.popular ? 'ring - 2 ring - blue - 500 scale - 105' : ''} border ${plan.color} hover:border - blue - 500 / 50 transition - all duration - 300`}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold'>                      Most Popular;
                    </span>;
                  </div>)}                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                    <span className="bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold">;
                      Most Popular;
                    </span>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 2'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    {plan.name}
                  </h3>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    {plan.price}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                className={`relative group ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} border ${plan.color} hover:border-blue-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}


                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>
                  <div className='text-4xl font-bold text-white mb-2'>
                    {plan.price}
                    <span className='text-lg text-gray-400'>{plan.period}</span>
                  </div>
                  <p className='text-gray-400'>{plan.description}</p>
                </div>
                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
=======
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-2'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='text-4xl font-bold text-white mb-2'>;
                    {plan && plan.price}
                    <span className='text-lg text-gray-400'>{plan && plan.period}</span>;
                  </div>;
                  <p className='text-gray-400'>{plan && plan.description}</p>;
                </div>;


                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'
                    >
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                      {feature}                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                      {feature}
                    </li>;
                  ))}

                </ul>;

                <Button
                  href='/contact'
                  className={`w-full ${plan && plan.buttonColor} text-white`}
                  size='lg'>;
                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  className={`w-full ${plan && plan.buttonColor} text-white`}
                  size="lg";
                >;
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </Button>;
              </Card>;






                  size="lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>




      <section className="py-24 bg-black relative overflow-hidden">

      {/* Integrations Section */}
      <section className='py-24 bg-black relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Seamless Integrations
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>      <section className="py-24 bg-black relative overflow-hidden">
==============        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Seamless Integrations;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Connect with your favorite tools and platforms;
            </p>;
          </div>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>      <section className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Seamless Integrations;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>;
            {integrations && integrations.map((integration, index) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Card
                key={index}
                className='text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>;
                  {integration && integration.icon}
                </div>;
                <h3 className='font-semibold text-white mb-2'>;
                  {integration && integration.name}
                </h3>;
                <p className='text-sm text-gray-400'>;
                  {integration && integration.description}
                </p>              </Card>            {integrations && integrations.map((integration, index) => (;
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">;
                  {integration && integration.icon}
                </div>;
                <h3 className="font-semibold text-white mb-2">{integration && integration.name}</h3>;
                <p className="text-sm text-gray-400">{integration && integration.description}</p>;
              </Card>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-400">{integration.description}</p>
              </Card>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              </Card>


          </div>;
        </div>;
      </section>;


      {/* CTA Section */}
=======
              </Card>

            ))}
          </div>
        </div>
      </section>

==============
            ))}

          </div>;
        </div>;
      </section>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* CTA Section */}


      {/* CTA Section */}


=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======            Ready to Dominate Search Rankings?
          </h2>
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of businesses who are already ranking higher and
            driving more organic traffic.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">;
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Button>;
            <Button
              href="#demo"
              variant="outline"
              size="lg"


}
    </>);
=======
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
=======
  );
=======

}=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
}
}
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
