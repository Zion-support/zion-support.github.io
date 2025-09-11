<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import React, { useState } from 'react';

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
  Search
  TrendingUp
  CheckCircle
  AlertTriangle
  ArrowRight
  Target
  BarChart3
  Globe
  Smartphone
  Zap;
} from 'lucide-react';import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react';
<<<<<<< HEAD

=======
} from 'lucide-react';import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react';

=======
import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';

import Button from '../components/ui/Button';

import {

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Search,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Target,
  BarChart3,
  Globe,
  Smartphone,;
  Zap,;
<<<<<<< HEAD
<<<<<<< HEAD
} from 'lucide-react';import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react';
export default function SEOAnalyzerToolPage() {;
} from 'lucide-react';

export default function SEOAnalyzerToolPage() {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export default function SEOAnalyzerToolPage() {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export default function SEOAnalyzerToolPage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [url, setUrl] = useState('');

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const features = [
    {
      icon: <Search className='w-8 h-8 text-white' />
      description:
        'Deep analysis of on-page SEO factors, technical issues, and content optimization opportunities.'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'
    }
    {
      icon: <Target className='w-8 h-8 text-white' />
      title: 'Keyword Research'
      description:
        'Discover high-value keywords and analyze search intent to optimize your content strategy.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
      gradient: 'from-blue-400 to-cyan-500'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Competitive Analysis'
      description:
        "Analyze your competitors' SEO strategies and identify opportunities to outperform them."
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'AI-Powered Insights'
      description:
        'Get intelligent recommendations and actionable insights to improve your search rankings.'
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      gradient: 'from-orange-400 to-red-500'
    }
  ];      gradient: 'from-orange-400 to-red-500'}]
  const seoFactors = [
    {
      category: 'On-Page SEO'
      factors: [
        'Title tags optimization'
        'Meta descriptions'
        'Header structure (H1, H2, H3)'
        'Content quality and length'
        'Internal linking structure'
        'Image optimization (alt tags)'
      ]
      icon: '📝'
      color: 'text-green-400',      icon: '📝'
      color: 'text-green-400'
    }
    {
      category: 'Technical SEO'
      factors: [
        'Page load speedMobile responsivenessXML sitemapRobots.txt configurationSSL certificateCore Web Vitals'
      ];
      icon: '⚙️'
      color: 'text-blue-400'
    }
    {
      category: 'Content SEO'
      factors: [
        'Keyword densityContent relevanceReadability scoresContent freshnessMultimedia optimizationSchema markup'
      ]
      icon: '📊'
      color: 'text-purple-400'
    }
    {
      category: 'Local SEO'
      factors: [
        'Google My BusinessLocal citationsReview managementLocal keyword targetingLocation-based contentLocal link building'
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    }
  ];


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ]
      icon: '📍'
      color: 'text-orange-400'
    }
<<<<<<< HEAD
features: [;
=======
=======
    {
      category: 'Technical SEO'
      factors: [
        'Page load speed'
        'Mobile responsiveness'
        'XML sitemap'
        'Robots.txt configuration'
        'SSL certificate'
        'Core Web Vitals'
      ]
      icon: '⚙️'
      color: 'text-blue-400'
    }
      ],
      icon: '📍',
      color: 'text-orange-400',

    },
    {
      category: 'Content SEO'
      factors: [
        'Keyword density'
        'Content relevance'
        'Readability scores'
        'Content freshness'
        'Multimedia optimization'
        'Schema markup'
      ]
      icon: '📊'
      color: 'text-purple-400'
    }
    {
      category: 'Local SEO'
      factors: [
        'Google My Business'
        'Local citations'
        'Review management'
        'Local keyword targeting'
        'Location-based content'
        'Local link building'
      ]
      icon: '📍'
      color: 'text-orange-400'
    },  ];      color: 'text-orange-400'
    }
  ];


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const features = [;
    {;
      icon: <Search className='w-8 h-8 text-white' />,;
      description:;
        'Deep analysis of on-page SEO factors, technical issues, and content optimization opportunities.',;
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',;
      gradient: 'from-green-400 to-emerald-500',;
    },;
    {;
      icon: <Target className='w-8 h-8 text-white' />,;
      title: 'Keyword Research',;
      description:;
        'Discover high-value keywords and analyze search intent to optimize your content strategy.',;
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',;
      gradient: 'from-blue-400 to-cyan-500',;
    },;
    {;
      icon: <BarChart3 className='w-8 h-8 text-white' />,;
      title: 'Competitive Analysis',;
      description:;
        "Analyze your competitors' SEO strategies and identify opportunities to outperform them.",;
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',;
      gradient: 'from-purple-400 to-indigo-500',;
    },;
    {;
      icon: <Zap className='w-8 h-8 text-white' />,;
      title: 'AI-Powered Insights',;
      description:;
        'Get intelligent recommendations and actionable insights to improve your search rankings.',;
      color: 'bg-gradient-to-br from-orange-500 to-red-600',;
      gradient: 'from-orange-400 to-red-500',;
    },;
  ];      gradient: 'from-orange-400 to-red-500'}],;
  const seoFactors = [;
    {;
      category: 'On-Page SEO',;
      factors: [;
        'Title tags optimization',;
        'Meta descriptions',;
        'Header structure (H1, H2, H3)',;
        'Content quality and length',;
        'Internal linking structure',;
        'Image optimization (alt tags)',;
      ],;
      icon: '📝',;
      color: 'text-green-400',      icon: '📝',;
      color: 'text-green-400';
    };
    {;
      category: 'Technical SEO',;
      factors: [;
        'Page load speedMobile responsivenessXML sitemapRobots && sitemapRobots.txt configurationSSL certificateCore Web Vitals';
      ];
      icon: '⚙️',;
      color: 'text-blue-400';
    };
    {;
      category: 'Content SEO',;
      factors: [;
        'Keyword densityContent relevanceReadability scoresContent freshnessMultimedia optimizationSchema markup';
      ],;
      icon: '📊',;
      color: 'text-purple-400';
    };
    {;
      category: 'Local SEO',;
      factors: [;
        'Google My BusinessLocal citationsReview managementLocal keyword targetingLocation-based contentLocal link building';
      ],;
      icon: '📍',;
      color: 'text-orange-400',;
    },;
    {;
      category: 'Technical SEO',;
      factors: [;
        'Page load speed',;
        'Mobile responsiveness',;
        'XML sitemap',;
        'Robots && Robots.txt configuration',;
        'SSL certificate',;
        'Core Web Vitals',;
      ],;
      icon: '⚙️',;
      color: 'text-blue-400',;
    },;
    {;
      category: 'Content SEO',;
      factors: [;
        'Keyword density',;
        'Content relevance',;
        'Readability scores',;
        'Content freshness',;
        'Multimedia optimization',;
        'Schema markup',;
      ],;
      icon: '📊',;
      color: 'text-purple-400',;
    },;
    {;
      category: 'Local SEO',;
      factors: [;
        'Google My Business',;
        'Local citations',;
        'Review management',;
        'Local keyword targeting',;
        'Location-based content',;
        'Local link building',;
      ],;
      icon: '📍',;
      color: 'text-orange-400',;
    },  ];      color: 'text-orange-400';
    }
        '10 website analyses/monthBasic SEO metricsKeyword research (100 keywords)On-page SEO analysisEmail supportBasic reporting'
      ];
      popular: false
    };
    {
;
  const pricing = [;
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and bloggers',
      features: [;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        '10 website analyses / month',
        'Basic SEO metrics',
        'Keyword research (100 keywords)',
        'On - page SEO analysis',
        'Email support',
        'Basic reporting',
      ],
      popular: false,
    },    {        '10 website analyses / month_basic SEO metrics_keyword research (100 keywords)On - page SEO analysis_email support_basic reporting';
      ];
      popular: false;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'Professional',
      price: '$89',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
<<<<<<< HEAD
<<<<<<< HEAD
features: [;
=======

      features: [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      features: [;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        '50 website analyses / month',
        'Advanced SEO metrics',
        'Keyword research (500 keywords)',
        'Competitive analysis',
        'Priority support',
        'Advanced reporting',
        'API access',
        'Team collaboration',
      ],
      popular: true,
    },    {        '50 website analyses / month_advanced SEO metrics_keyword research (500 keywords)Competitive analysis_priority support_advanced reportingAPI access_team collaboration';
      ];
      popular: true;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'Enterprise',
      price: '$249',
      period: '/month',
      description: 'For large organizations and SEO agencies',
<<<<<<< HEAD
<<<<<<< HEAD
features: [;
=======

      features: [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      features: [;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'Unlimited analyses',
        'Enterprise SEO metrics',
        'Unlimited keyword research',
        'Advanced competitive analysis',
        '24 / 7 dedicated support',
        'Custom reporting',
        'White - label options',
        'Custom integrations',
      ],
      popular: false,
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      category: 'Technical SEO'
      factors: [
        'Page load speed'
        'Mobile responsiveness'
        'XML sitemap'
        'Robots.txt configuration'
        'SSL certificate'
        'Core Web Vitals'
      ]
      icon: '⚙️'
      color: 'text-blue-400'
    }
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ],
      icon: '📍',
      color: 'text-orange-400',

    },
    {
      category: 'Content SEO'
      factors: [
        'Keyword density'
        'Content relevance'
        'Readability scores'
        'Content freshness'
        'Multimedia optimization'
        'Schema markup'
      ]
      icon: '📊'
      color: 'text-purple-400'
    }
    {
      category: 'Local SEO'
      factors: [
        'Google My Business'
        'Local citations'
        'Review management'
        'Local keyword targeting'
        'Location-based content'
        'Local link building'
      ]
      icon: '📍'
      color: 'text-orange-400'
    },  ];      color: 'text-orange-400'
    }
  ];
  const pricing = [
    {
      name: 'Starter'
      price: '$39'
      period: '/month'
      description: 'Perfect for small businesses and bloggers'
      features: [
        '10 website analyses/month'
        'Basic SEO metrics'
        'Keyword research (100 keywords)'
        'On-page SEO analysis'
        'Email support'
        'Basic reporting'
      ]
      popular: false
    },    {        '10 website analyses/monthBasic SEO metricsKeyword research (100 keywords)On-page SEO analysisEmail supportBasic reporting'
      ];
      popular: false
    }
      name: 'Professional'
      price: '$89'
      period: '/month'
      description: 'Ideal for growing businesses and agencies'
      features: [
        '50 website analyses/month'
        'Advanced SEO metrics'
        'Keyword research (500 keywords)'
        'Competitive analysis'
        'Priority support'
        'Advanced reporting'
        'API access'
        'Team collaboration'
      ]
      popular: true
    },    {        '50 website analyses/monthAdvanced SEO metricsKeyword research (500 keywords)Competitive analysisPriority supportAdvanced reportingAPI accessTeam collaboration'
      ];
      popular: true
    }
      name: 'Enterprise'
      price: '$249'
      period: '/month'
      description: 'For large organizations and SEO agencies'
      features: [
        'Unlimited analyses'
        'Enterprise SEO metrics'
        'Unlimited keyword research'
        'Advanced competitive analysis'
        '24/7 dedicated support'
        'Custom reporting'
        'White-label options'
        'Custom integrations'
      ]
      popular: false
    },  ];
;
  const handleAnalyzeSEO = async () => {
    if () return) {
  $2
}        'Unlimited analyses_enterprise SEO metrics_unlimited keyword research_advanced competitive analysis24 / 7 dedicated support_custom reporting_white - label options_custom integrations';
<<<<<<< HEAD
<<<<<<< HEAD
      ];
      popular: false;
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      ];
      popular: false;
    }


      ];
      popular: false;
    }

    

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setIsAnalyzing(true);
    // Simulate SEO analysis
    setTimeout(() => {
      setAnalysisResults({
        url: url
        overallScore: 78
        onPageScore: 82
        technicalScore: 75
        contentScore: 80
        mobileScore: 85
        issues: [
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAnalyzeSEO = async () => {
    if () return) {
  $2
}
    setIsAnalyzing (true);
    // Simulate SEO analysis;
    set_timeout (() => {
      setAnalysisResults ({
        url: url,
        overall_score: 78,
        onPageScore: 82,
        technical_score: 75,
        content_score: 80,
        mobile_score: 85,
        issues: [;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {
            type: 'error'
            message: 'Missing meta description'
            priority: 'high'
          }
          {
            type: 'warning'
            message: 'Title tag too long (65 characters)'
            priority: 'medium'
          }
          {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            type: 'info',
            message: 'Consider adding more internal links',
            priority: 'low',
          },
        ],
        recommendations: [;
          'Optimize meta descriptions for better click - through rates',
          'Improve page load speed by optimizing images',
          'Add more relevant internal links to improve site structure',
          'Implement schema markup for rich snippets',
        ],
        keywords: [;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {
            keyword: 'website optimization'
            volume: '12K'
            difficulty: 'medium'
          }
          { keyword: 'SEO tools', volume: '8K', difficulty: 'low' }
          {
            keyword: 'search engine optimization'
            volume: '15K'
            difficulty: 'high'
          }
        ]
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  const handleAnalyzeSEO = async () => {;
    if (!url && url.trim()) return;
    setIsAnalyzing(true);
    // Simulate SEO analysis;
    setTimeout(() => {;
      setAnalysisResults({;
        url: url,;
        overallScore: 78,;
        onPageScore: 82,;
        technicalScore: 75,;
        contentScore: 80,;
        mobileScore: 85,;
        issues: [;
          {;
            type: 'error',;
            message: 'Missing meta description',;
            priority: 'high',;
          },;
          {;
            type: 'warning',;
            message: 'Title tag too long (65 characters)',;
            priority: 'medium',;
          },;
          {;
            type: 'info',;
            message: 'Consider adding more internal links',;
            priority: 'low',;
          },;
        ],;
        recommendations: [;
          'Optimize meta descriptions for better click-through rates',;
          'Improve page load speed by optimizing images',;
          'Add more relevant internal links to improve site structure',;
          'Implement schema markup for rich snippets',;
        ],;
        keywords: [;
          {;
            keyword: 'website optimization',;
            volume: '12K',;
            difficulty: 'medium',;
          },;
          { keyword: 'SEO tools', volume: '8K', difficulty: 'low' },;
          {;
            keyword: 'search engine optimization',;
            volume: '15K',;
            difficulty: 'high',;
          },;
        ],;
      });
      setIsAnalyzing(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }, 4000);  };        recommendations: [
          'Optimize meta descriptions for better click-through ratesImprove page load speed by optimizing imagesAdd more relevant internal links to improve site structureImplement schema markup for rich snippets'
        ];
        keywords: [
          { keyword: 'website optimization', volume: '12K', difficulty: 'medium' }
          { keyword: 'SEO tools', volume: '8K', difficulty: 'low' }
          { keyword: 'search engine optimization', volume: '15K', difficulty: 'high' }
        ]
      });
<<<<<<< HEAD
      setIsAnalyzing(false)
    }, 4000)
  }
=======

      setIsAnalyzing(false);
    }, 4000);
  };
=======

  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      setIsAnalyzing(false);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }, 4000);  };

  };

  return (
    <>
      <Head>
        <title>
          SEO Analyzer Tool - Zion Tech Group | Professional SEO Analysis &
          Optimization
        </title>
        <meta
          name='description'
          content="Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve search rankings."
        />
        <meta
          property='og:title'
          content='SEO Analyzer Tool - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Professional SEO analysis tool with comprehensive insights and optimization recommendations.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      {/* Hero Section */}
      <section className='relative section-padding bg-gradient-cursor overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]' />
        <div className='absolute inset-0 bg-grid opacity-10' />
        <div className='relative z-10 container-cursor text-center'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6'>
            <Search className='w-4 h-4 mr-2' />
            Professional SEO Analysis
          </div>
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'>
            SEO Analyzer Tool
          </h1>
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12'>
            Analyze your website's SEO performance with our comprehensive tool.
            Get detailed insights, keyword research, and optimization
            recommendations to improve your search rankings and drive more
            organic traffic.
          </p>
          {/* URL Input */}
          <div className='max-w-2xl mx-auto mb-8'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='url'
                placeholder='Enter your website URL (e.g., https://example.com)'
                value={url}
                onChange={e => setUrl(e.target.value)}
                className='flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
              />
              <Button
                onClick={handleAnalyzeSEO}
                size='lg'
                className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap'                disabled={isAnalyzing |!url.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className='w-5 h-5 mr-2' />                    Analyze SEO      </Head>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Professional SEO Analysis
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            SEO Analyzer Tool
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleAnalyzeSEO = async () => {;
    if (!url && url.trim()) return;
    setIsAnalyzing(true);
    // Simulate SEO analysis;
    setTimeout(() => {;
      setAnalysisResults({;
        url: url,;
        overallScore: 78,;
        onPageScore: 82,;
        technicalScore: 75,;
        contentScore: 80,;
        mobileScore: 85,;
        issues: [;
          {;
            type: 'error',;
            message: 'Missing meta description',;
            priority: 'high',;
          },;
          {;
            type: 'warning',;
            message: 'Title tag too long (65 characters)',;
            priority: 'medium',;
          },;
          {;
            type: 'info',;
            message: 'Consider adding more internal links',;
            priority: 'low',;
          },;
        ],;
        recommendations: [;
          'Optimize meta descriptions for better click-through rates',;
          'Improve page load speed by optimizing images',;
          'Add more relevant internal links to improve site structure',;
          'Implement schema markup for rich snippets',;
        ],;
        keywords: [;
          {;
            keyword: 'website optimization',;
            volume: '12K',;
            difficulty: 'medium',;
          },;
          { keyword: 'SEO tools', volume: '8K', difficulty: 'low' },;
          {;
            keyword: 'search engine optimization',;
            volume: '15K',;
            difficulty: 'high',;
          },;
        ],;
      });
<<<<<<< HEAD
      setIsAnalyzing(false);
=======

          { type: 'error', message: 'Missing meta description', priority: 'high' },
          { type: 'warning', message: 'Title tag too long (65 characters)', priority: 'medium' },
          { type: 'info', message: 'Consider adding more internal links', priority: 'low' }
        ];
        recommendations: [
          'Optimize meta descriptions for better click-through ratesImprove page load speed by optimizing imagesAdd more relevant internal links to improve site structureImplement schema markup for rich snippets'

        ];

        keywords: [;
          { keyword: 'website optimization', volume: '12K', difficulty: 'medium' },;
          { keyword: 'SEO tools', volume: '8K', difficulty: 'low' },;

          { keyword: 'search engine optimization', volume: '15K', difficulty: 'high' }
        ];
      });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setIsAnalyzing(false);

    }, 4000);  };

  };
<<<<<<< HEAD


  return (

      setIsAnalyzing(false)
    }, 4000)
  }
=======
=======

  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      setIsAnalyzing(false);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }, 4000);  };

  };

<<<<<<< HEAD
  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsAnalyzing (false);
    }, 4000);  }        recommendations: [;
          'Optimize meta descriptions for better click - through rates_improve page load speed by optimizing images_add more relevant internal links to improve site structure_implement schema markup for rich snippets';
        ];
        keywords: [;
          { keyword: 'website optimization', volume: '12K', difficulty: 'medium' },
          { keyword: 'SEO tools', volume: '8K', difficulty: 'low' },
          { keyword: 'search engine optimization', volume: '15K', difficulty: 'high' }
        ];
      });
      setIsAnalyzing (false);
    }, 4000);
  }
;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <Head>;
        <title>;
          SEO Analyzer Tool - Zion Tech Group | Professional SEO Analysis &;
          Optimization;
        </title>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative section-padding bg-gradient-cursor overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0 && 0.08),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0 && 0.06),transparent_50%)]' />;
        <div className='absolute inset-0 bg-grid opacity-10' />;
        <div className='relative z-10 container-cursor text-center'>;
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6'>;
            <Search className='w-4 h-4 mr-2' />;
            Professional SEO Analysis;
          </div>;
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'>;
            SEO Analyzer Tool;
          </h1>;
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12'>;
        <meta;
          name='description';
          content="Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve search rankings.";
        />;
        <meta;
          property='og:title';
          content='SEO Analyzer Tool - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Professional SEO analysis tool with comprehensive insights and optimization recommendations.';
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative section - padding bg - gradient - cursor overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (34, 197, 94, 0.08), transparent_50%)]' />;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (34, 197, 94, 0.06), transparent_50%)]' />;
        <div className='absolute inset - 0 bg - grid opacity - 10' />;
        <div className='relative z - 10 container - cursor text - center'>;
          <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 10 border border - green - 500 / 20 text - green - 400 text - sm font - medium mb - 6'>;
            <Search className='w - 4 h - 4 mr - 2' />;
            Professional SEO Analysis;
          </div>;
          <h1 className='text - responsive - xl font - black mb - 8 gradient - text text - shadow - lg'>;
            SEO Analyzer Tool;
          </h1>;
          <p className='text - responsive - md text - gray - 300 max - w-5xl mx - auto leading - relaxed mb - 12'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Analyze your website's SEO performance with our comprehensive tool.;
            Get detailed insights, keyword research, and optimization;
            recommendations to improve your search rankings and drive more;
            organic traffic.;
          </p>;
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <Head>
        <title>SEO Analyzer Tool - Zion Tech Group | Professional SEO Analysis & Optimization</title>
        <meta name="description" content="Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve search rankings." />
        <meta property="og:title" content="SEO Analyzer Tool - Zion Tech Group" />
        <meta property="og:description" content="Professional SEO analysis tool with comprehensive insights and optimization recommendations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Professional SEO Analysis
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            SEO Analyzer Tool
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.
          </p>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap'                disabled={isAnalyzing || !url && url.trim()}>;
                {isAnalyzing ? (;
                  <>;
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />                    Analyzing...;
                  </>;
                ) : (;
                  <>;
                    <Search className='w-5 h-5 mr-2' />                    Analyze SEO      </Head>;
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0 && 0.08),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0 && 0.06),transparent_50%)]" />;
        <div className="absolute inset-0 bg-grid opacity-10" />;
        <div className="relative z-10 container-cursor text-center">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">;
            <Search className="w-4 h-4 mr-2" />;
            Professional SEO Analysis;
          </div>;
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">;
            SEO Analyzer Tool;
          </h1>;
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">;
            Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.;
          </p>;
          {/* URL Input */}
          <div className="max-w-2xl mx-auto mb-8">;
            <div className="flex flex-col sm:flex-row gap-4">;
              <input
                type="url"
                placeholder="Enter your website URL (e && e.g., https://example && example.com)"
                value={url}
                onChange={(e) => setUrl(e && e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
              />;
              <Button
                onClick={handleAnalyzeSEO}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap"
<<<<<<< HEAD
<<<<<<< HEAD
                disabled={isAnalyzing || !url.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className='w-5 h-5 mr-2' />                    <Search className="w-5 h-5 mr-2" />
                    Analyze SEO
                  </>
                )}
              </Button>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              href='#pricing'
              variant='outline'
              size='lg'
              className='border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl'>;
              View Pricing;
            </Button>;
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl'>              href="#pricing";
              variant="outline";
              size="lg";
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl";
              View Pricing;
            </Button>;
            <Button

<<<<<<< HEAD
<<<<<<< HEAD
              href='/contact'
              variant='outline'
              size='lg'
              className='border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl'              href="/contact"
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl"
              href="/contact"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="#pricing"
              variant="outline"
              size="lg"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl"
            >
              View Pricing
            </Button>
            <Button
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
href="/contact"
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl"
            >
<<<<<<< HEAD
<<<<<<< HEAD
              Schedule Demo
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              Schedule Demo

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              Schedule Demo

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className='section-padding bg-gradient-cursor-accent'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Powerful SEO Features;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
          {/* URL Input */}
          <div className='max - w-2xl mx - auto mb - 8'>;
            <div className='flex flex - col sm:flex - row gap - 4'>;
              <input;
                type='url';
                placeholder='Enter your website URL (e.g., https://example.com)';
                value={url}
                on_change={e => set_url (e.target.value)}
                className='flex - 1 px - 6 py - 4 bg - gray - 800 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - green - 500 focus:border - transparent';
              />;
              <Button;
                on_click={handleAnalyzeSEO}
                size='lg';
                className='bg - gradient - to - r from - green - 500 to - emerald - 600 hover:from - green - 600 hover:to - emerald - 700 text - white shadow - 2xl hover - glow whitespace - nowrap'                disabled={is_analyzing || !url.trim ()}
              >;
                {is_analyzing ? (
                  <>;
                    <div className='animate - spin rounded - full h - 5 w - 5 border - b-2 border - white mr - 2' />                    Analyzing...;
                  </>) : (
                  <>;
                    <Search className='w - 5 h - 5 mr - 2' />                    Analyze SEO      </Head>;
      {/* Hero Section */}
      <section className="relative section - padding bg - gradient - cursor overflow - hidden">;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (34, 197, 94, 0.08), transparent_50%)]" />;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (34, 197, 94, 0.06), transparent_50%)]" />;
        <div className="absolute inset - 0 bg - grid opacity - 10" />;
        <div className="relative z - 10 container - cursor text - center">;
          <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 10 border border - green - 500 / 20 text - green - 400 text - sm font - medium mb - 6">;
            <Search className="w - 4 h - 4 mr - 2" />;
            Professional SEO Analysis;
          </div>;
          <h1 className="text - responsive - xl font - black mb - 8 gradient - text text - shadow - lg">;
            SEO Analyzer Tool;
          </h1>;
          <p className="text - responsive - md text - gray - 300 max - w-5xl mx - auto leading - relaxed mb - 12">;
            Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.;
          </p>;
          {/* URL Input */}
          <div className="max - w-2xl mx - auto mb - 8">;
            <div className="flex flex - col sm:flex - row gap - 4">;
              <input;
                type="url";
                placeholder="Enter your website URL (e.g., https://example.com)";
                value={url}
                on_change={(e) => set_url (e.target.value)}
                className="flex - 1 px - 6 py - 4 bg - gray - 800 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - green - 500 focus:border - transparent";
              />;
              <Button;
                on_click={handleAnalyzeSEO}
                size="lg";
                className="bg - gradient - to - r from - green - 500 to - emerald - 600 hover:from - green - 600 hover:to - emerald - 700 text - white shadow - 2xl hover - glow whitespace - nowrap";
                disabled={is_analyzing || !url.trim ()}
              >;
                {is_analyzing ? (
                  <>;
                    <div className='animate - spin rounded - full h - 5 w - 5 border - b-2 border - white mr - 2' />                    <div className="animate - spin rounded - full h - 5 w - 5 border - b-2 border - white mr - 2" />;
                    Analyzing...;
                  </>) : (
                  <>;
                    <Search className='w - 5 h - 5 mr - 2' />                    <Search className="w - 5 h - 5 mr - 2" />;
                    Analyze SEO;
                  </>)}
              </Button>;
            </div>;
          </div>;
          <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
            <Button;
              href='#pricing';
              variant='outline';
              size='lg';
              className='border - green - 500 text - green - 400 hover:bg - green - 500 hover:text - white shadow - 2xl'            >;
              View Pricing;
            </Button>;
            <Button;
              href='/contact';
              variant='outline';
              size='lg';
              className='border - gray - 500 text - gray - 400 hover:bg - gray - 500 hover:text - white shadow - 2xl'            >              href="#pricing";
              variant="outline";
              size="lg";
              className="border - green - 500 text - green - 400 hover:bg - green - 500 hover:text - white shadow - 2xl";
              View Pricing;
            </Button>;
            <Button;
              href='/contact';
              variant='outline';
              size='lg';
              className='border - gray - 500 text - gray - 400 hover:bg - gray - 500 hover:text - white shadow - 2xl'              href="/contact";
              variant="outline";
              size="lg";
              className="border - gray - 500 text - gray - 400 hover:bg - gray - 500 hover:text - white shadow - 2xl";
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className='section - padding bg - gradient - cursor - accent'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Powerful SEO Features;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Our SEO analyzer provides comprehensive insights and tools to help;
              you dominate search rankings.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Powerful SEO Features
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature && feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />;
                  </div>;
                  <div className='flex-1'>;
                    <h3 className='text-2xl font-bold mb-4 text-white'>;
                      {feature && feature.title}
                    </h3>;
                    <p className='text-gray-400 leading-relaxed'>                      {feature && feature.description}              Powerful SEO Features;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="card-hover group border-gradient-green"
<<<<<<< HEAD


<<<<<<< HEAD



=======
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
                    </p>
                  </div>
                </div>
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
=======
            ))}
          </div>
        </div>
      </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* SEO Factors Section */}
=======
      {/* SEO Factors Section */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Comprehensive SEO Analysis
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              We analyze every aspect of your website's SEO to provide
              actionable insights and recommendations.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {seoFactors.map((category, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {features.map ((feature, index) => (
              <Card;
                key={index}
                className='card - hover group border - gradient - green';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='flex items - start space - x-6'>;
                  <div className='relative'>;
                    <div;
                      className={`w - 20 h - 20 rounded - 2xl flex items - center justify - center text - 3xl bg - gradient - to - br ${feature.color} shadow - xl group - hover:scale - 110 transition - transform duration - 300`}
                    >;
                      {feature.icon}
                    </div>;
                    <div;
                      className={`absolute -inset - 2 bg - gradient - to - r from - transparent via-${feature.gradient} to - transparent rounded - 2xl opacity - 0 group - hover:opacity - 20 transition - opacity duration - 300 blur - sm`}
                    />;
                  </div>;
                  <div className='flex - 1'>;
                    <h3 className='text - 2xl font - bold mb - 4 text - white'>;
                      {feature.title}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
          </div>;
        </div>;
      </section>;
      {/* SEO Factors Section */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Comprehensive SEO Analysis;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
                    </p>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* SEO Factors Section */}
      <section className='section - padding bg - gradient - cursor'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Comprehensive SEO Analysis;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              We analyze every aspect of your website's SEO to provide;
              actionable insights and recommendations.;
            </p>;
          </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
<<<<<<< HEAD
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
=======
=======
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      {feature.description}

                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Factors Section */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

              Comprehensive SEO Analysis
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoFactors.map((category, index) => (
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-4 h-4 text-green-400 mr-3 flex-shrink-0' />                      {factor}              Comprehensive SEO Analysis;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {seoFactors && seoFactors.map((category, index) => (;
              <Card
                key={index}
                className="card-hover border-gradient-green"
<<<<<<< HEAD
<<<<<<< HEAD
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.factors.map((factor, factorIndex) => (
                    <li key={factorIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                      {factor}
                    </li>;
                  ))}
                </ul>;
              </Card>;
            ))}
<<<<<<< HEAD
=======
=======


                      {factor}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Demo Analysis Results */}
      {analysisResults && (

          </div>;
        </div>;
      </section>;
      {/* Demo Analysis Results */}
      {analysisResults && (;
        <section className='section-padding bg-gradient-cursor-accent'>;
          <div className='container-cursor'>;
            <div className='text-center mb-12'>;
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
                SEO Analysis Results;
              </h2>;
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            {seo_factors.map ((category, index) => (
              <Card;
                key={index}
                className='card - hover border - gradient - green';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='flex items - center mb - 6'>;
                  <div className='text - 3xl mr - 4'>{category.icon}</div>;
                  <h3 className={`text - xl font - bold ${category.color}`}>;
                    {category.category}
                  </h3>;
                </div>;
                <ul className='space - y-3'>;
                  {category.factors.map ((factor, factor_index) => (
                    <li;
                      key={factor_index}
                      className='flex items - center text - gray - 300';
                    >;
                      <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 3 flex - shrink - 0' />                      {factor}              Comprehensive SEO Analysis;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            {seo_factors.map ((category, index) => (
              <Card;
                key={index}
                className="card - hover border - gradient - green";
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className="flex items - center mb - 6">;
                  <div className="text - 3xl mr - 4">{category.icon}</div>;
                  <h3 className={`text - xl font - bold ${category.color}`}>{category.category}</h3>;
                </div>;
                <ul className="space - y-3">;
                  {category.factors.map ((factor, factor_index) => (
                    <li key={factor_index} className="flex items - center text - gray - 300">;
                      <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 3 flex - shrink - 0" />;
                      {factor}
                    </li>))}
                </ul>;
              </Card>))}
          </div>;
        </div>;
      </section>;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </div>
      </section>

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Demo Analysis Results */}
      {analysis_results && (
        <section className='section - padding bg - gradient - cursor - accent'>;
          <div className='container - cursor'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
                SEO Analysis Results;
              </h2>;
              <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Here's a sample analysis of a website. Get comprehensive;
                insights for your own website.;
              </p>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                SEO Analysis Results
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample analysis of a website. Get comprehensive insights for your own website.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    />;
                  </svg>;
                </div>;
                <p className='text-gray-400'>;
                  Good SEO foundation with room for improvement;
                </p>;
              </Card>;
              {/* Detailed Scores */}
              <Card className='border-gradient-green'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Detailed Scores;
                </h3>;
                <div className='space-y-4'>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>On-Page SEO</span>;
                    <span className='font-bold text-green-400'>;
                      {analysisResults && analysisResults.onPageScore}/100;
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>Technical SEO</span>;
                    <span className='font-bold text-orange-400'>;
                      {analysisResults && analysisResults.technicalScore}/100;
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>Content SEO</span>;
                    <span className='font-bold text-blue-400'>;
                      {analysisResults && analysisResults.contentScore}/100;
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>Mobile SEO</span>;
                    <span className='font-bold text-green-400'>;
                      {analysisResults && analysisResults.mobileScore}/100;
                    </span>                  </div>                SEO Analysis Results;
              </h2>;
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
                Here's a sample analysis of a website. Get comprehensive insights for your own website.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Overall Score */}
              <Card className="border-gradient-green text-center">;
                <h3 className="text-2xl font-bold mb-6 text-white">Overall SEO Score</h3>;
                <div className="text-6xl font-bold text-green-400 mb-4">{analysisResults && analysisResults.overallScore}/100</div>;
                <div className="w-32 h-32 mx-auto mb-6">;
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">;
                    <path
                      d="M18 2 && 2.0845 a 15 && 15.9155 15 && 15.9155 0 0 1 0 31 && 31.831 a 15 && 15.9155 15 && 15.9155 0 0 1 0 -31 && 31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults && analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-green-500"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    />;
                  </svg>;
                </div>;
                <p className="text-gray-400">Good SEO foundation with room for improvement</p>;
              </Card>;
              {/* Detailed Scores */}
              <Card className="border-gradient-green">;
                <h3 className="text-2xl font-bold mb-6 text-white">Detailed Scores</h3>;
                <div className="space-y-4">;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">On-Page SEO</span>;
                    <span className="font-bold text-green-400">{analysisResults && analysisResults.onPageScore}/100</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">Technical SEO</span>;
                    <span className="font-bold text-orange-400">{analysisResults && analysisResults.technicalScore}/100</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">Content SEO</span>;
                    <span className="font-bold text-blue-400">{analysisResults && analysisResults.contentScore}/100</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">Mobile SEO</span>;
                    <span className="font-bold text-green-400">{analysisResults && analysisResults.mobileScore}/100</span>;
                  </div>;
                </div>;
              </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Issues */}
              <Card className='border-gradient-green'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Issues Found;
                </h3>;
                <div className='space-y-3'>;
                  {analysisResults && analysisResults.issues.map((issue, index) => (;
                    <div key={index} className='flex items-start space-x-3'>;
                      {issue && issue.type === 'error' ? (;
                        <AlertTriangle className='w-5 h-5 text-red-400 mt-1 flex-shrink-0' />;
                      ) : issue && issue.type === 'warning' ? (;
                        <AlertTriangle className='w-5 h-5 text-yellow-400 mt-1 flex-shrink-0' />;
                      ) : (;
                        <CheckCircle className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                      )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
                      <div>;
                        <span className='text-gray-300'>{issue && issue.message}</span>;
                        <div className='text-xs text-gray-500 mt-1'>;
                          Priority: {issue && issue.priority}
                        </div>                      </div>                  {analysisResults && analysisResults.issues.map((issue, index) => (;
                    <div key={index} className="flex items-start space-x-3">;
                      {issue && issue.type === 'error' ? (;
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />;
                      ) : issue && issue.type === 'warning' ? (;
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />;
                      ) : (;
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />;
                      )}
                      <div>;
                        <span className="text-gray-300">{issue && issue.message}</span>;
                        <div className="text-xs text-gray-500 mt-1">Priority: {issue && issue.priority}</div>;
                      </div>;
                    </div>;

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Issues */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Issues Found</h3>
                <div className="space-y-3">
                  {analysisResults.issues.map((issue, index) => (
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div>
                        <span className='text-gray-300'>{issue.message}</span>
                        <div className='text-xs text-gray-500 mt-1'>
                          Priority: {issue.priority}
<<<<<<< HEAD

                        </div>                      </div>                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-gray-300">{issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">Priority: {issue.priority}</div>
                      </div>
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Issues */}
              <Card className='border-gradient-green'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Issues Found
                </h3>
                <div className='space-y-3'>
                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className='flex items-start space-x-3'>
                      {issue.type === 'error' ? (
                        <AlertTriangle className='w-5 h-5 text-red-400 mt-1 flex-shrink-0' />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className='w-5 h-5 text-yellow-400 mt-1 flex-shrink-0' />
                      ) : (
                        <CheckCircle className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />
                      )}
                      <div>
                        <span className='text-gray-300'>{issue.message}</span>
                        <div className='text-xs text-gray-500 mt-1'>
                          Priority: {issue.priority}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        </div>                      </div>                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-gray-300">{issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">Priority: {issue.priority}</div>
                      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>                      </div>

                      </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  ))}
                </div>
              </Card>
            </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>;
              </Card>;
            </div>;


<<<<<<< HEAD



<<<<<<< HEAD
                    </div>
                  ))}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Recommendations and Keywords */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
              <Card className='border-gradient-green'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Optimization Recommendations;
                </h3>;
                <div className='space-y-3'>;
                  {analysisResults && analysisResults.recommendations.map((rec, index) => (;
                    <div key={index} className='flex items-start space-x-3'>;
                      <CheckCircle className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />;
                      <span className='text-gray-300'>{rec}</span>                    </div>            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              <Card className="border-gradient-green">;
                <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>;
                <div className="space-y-3">;
                  {analysisResults && analysisResults.recommendations.map((rec, index) => (;
                    <div key={index} className="flex items-start space-x-3">;
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />;
                      <span className="text-gray-300">{rec}</span>;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </Card>
            </div>

            {/* Recommendations and Keywords */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
                <div className="space-y-3">
                  {analysisResults.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{rec}</span>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </Card>;
              <Card className='border-gradient-green'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Keyword Opportunities;
                </h3>;
                <div className='space-y-4'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div
                      key={index}
                      className='border-b border-gray-700 pb-3 last:border-b-0'>;
                      <div className='flex justify-between items-center mb-2'>;
                        <span className='font-semibold text-white'>;
                          {keyword && keyword.keyword}
                        </span>;
                        <span className='text-sm text-gray-400'>;
                          Volume: {keyword && keyword.volume}
                        </span>;
                      </div>;
                      <div className='flex justify-between items-center'>;
                        <span className='text-sm text-gray-400'>;
                          Difficulty: {keyword && keyword.difficulty}
                        </span>;
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            keyword && keyword.difficulty === 'low'
                              ? 'bg-green-500/20 text-green-400'
                              : keyword && keyword.difficulty === 'medium'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                          }`}>                          {keyword && keyword.difficulty}                      <div className="flex justify-between items-center">;
                        <span className="text-sm text-gray-400">Difficulty: {keyword && keyword.difficulty}</span>;
                        <spanclassName={`px-2 py-1 rounded text-xs ${
                          keyword && keyword.difficulty === 'low' ? 'bg-green-500/20 text-green-400' :
                          keyword && keyword.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>;
                        </span>;
                      </div>;
                    </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Keyword Opportunities</h3>
                <div className="space-y-4">
                  {analysisResults.keywords.map((keyword, index) => (
                    <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">{keyword.keyword}</span>
                        <span className="text-sm text-gray-400">Volume: {keyword.volume}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Difficulty: {keyword.difficulty}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          keyword.difficulty === 'low' ? 'bg-green-500/20 text-green-400' :
                          keyword.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mb - 8'>;

                          {keyword.difficulty}


                          {keyword.difficulty}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        </span>
                      </div>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
      <section id="pricing" className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Simple Pricing
            </h2>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id='pricing' className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}
<<<<<<< HEAD
<div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mb - 8'>;
              {/* Overall Score */}
              <Card className='border - gradient - green text - center'>;
                <h3 className='text - 2xl font - bold mb - 6 text - white'>;
                  Overall SEO Score;
                </h3>;
                <div className='text - 6xl font - bold text - green - 400 mb - 4'>;
                  {analysis_results.overall_score}/100;
                </div>;
                <div className='w - 32 h - 32 mx - auto mb - 6'>;
                  <svg;
                    className='w - full h - full transform -rotate - 90';
                    view_box='0 0 36 36';
                  >;
                    <path;
                      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831';
                      fill='none';
                      stroke='current_color';
                      stroke_width='2';
                      stroke_dasharray={`${(analysis_results.overall_score / 100) * 100}, 100`}
                      className='text - green - 500';
                    />;
                  </svg>;
                </div>;
                <p className='text - gray - 400'>;
                  Good SEO foundation with room for improvement;
                </p>;
              </Card>;
              {/* Detailed Scores */}
              <Card className='border - gradient - green'>;
                <h3 className='text - 2xl font - bold mb - 6 text - white'>;
                  Detailed Scores;
                </h3>;
                <div className='space - y-4'>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - gray - 400'>On - Page SEO</span>;
                    <span className='font - bold text - green - 400'>;
                      {analysis_results.onPageScore}/100;
                    </span>;
                  </div>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - gray - 400'>Technical SEO</span>;
                    <span className='font - bold text - orange - 400'>;
                      {analysis_results.technical_score}/100;
                    </span>;
                  </div>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - gray - 400'>Content SEO</span>;
                    <span className='font - bold text - blue - 400'>;
                      {analysis_results.content_score}/100;
                    </span>;
                  </div>;
                  <div className='flex justify - between items - center'>;
                    <span className='text - gray - 400'>Mobile SEO</span>;
                    <span className='font - bold text - green - 400'>;
                      {analysis_results.mobile_score}/100;
                    </span>                  </div>                SEO Analysis Results;
              </h2>;
              <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
                Here's a sample analysis of a website. Get comprehensive insights for your own website.;
              </p>;
            </div>;
            <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mb - 8">;
              {/* Overall Score */}
              <Card className="border - gradient - green text - center">;
                <h3 className="text - 2xl font - bold mb - 6 text - white">Overall SEO Score</h3>;
                <div className="text - 6xl font - bold text - green - 400 mb - 4">{analysis_results.overall_score}/100</div>;
                <div className="w - 32 h - 32 mx - auto mb - 6">;
                  <svg className="w - full h - full transform -rotate - 90" view_box="0 0 36 36">;
                    <path;
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831";
                      fill="none";
                      stroke="current_color";
                      stroke_width="2";
                      stroke_dasharray={`${(analysis_results.overall_score / 100) * 100}, 100`}
                      className="text - green - 500";
                    />;
                  </svg>;
                </div>;
                <p className="text - gray - 400">Good SEO foundation with room for improvement</p>;
              </Card>;
              {/* Detailed Scores */}
              <Card className="border - gradient - green">;
                <h3 className="text - 2xl font - bold mb - 6 text - white">Detailed Scores</h3>;
                <div className="space - y-4">;
                  <div className="flex justify - between items - center">;
                    <span className="text - gray - 400">On - Page SEO</span>;
                    <span className="font - bold text - green - 400">{analysis_results.onPageScore}/100</span>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - gray - 400">Technical SEO</span>;
                    <span className="font - bold text - orange - 400">{analysis_results.technical_score}/100</span>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - gray - 400">Content SEO</span>;
                    <span className="font - bold text - blue - 400">{analysis_results.content_score}/100</span>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - gray - 400">Mobile SEO</span>;
                    <span className="font - bold text - green - 400">{analysis_results.mobile_score}/100</span>;
                  </div>;
                </div>;
              </Card>;
              {/* Issues */}
              <Card className='border - gradient - green'>;
                <h3 className='text - 2xl font - bold mb - 6 text - white'>;
                  Issues Found;
                </h3>;
                <div className='space - y-3'>;
                  {analysis_results.issues.map ((issue, index) => (
                    <div key={index} className='flex items - start space - x-3'>;
                      {issue.type === 'error' ? (
                        <AlertTriangle className='w - 5 h - 5 text - red - 400 mt - 1 flex - shrink - 0' />) : issue.type === 'warning' ? (
                        <AlertTriangle className='w - 5 h - 5 text - yellow - 400 mt - 1 flex - shrink - 0' />) : (
                        <CheckCircle className='w - 5 h - 5 text - blue - 400 mt - 1 flex - shrink - 0' />)}
                      <div>;
                        <span className='text - gray - 300'>{issue.message}</span>;
                        <div className='text - xs text - gray - 500 mt - 1'>;
                          Priority: {issue.priority}
                        </div>                      </div>                  {analysis_results.issues.map ((issue, index) => (
                    <div key={index} className="flex items - start space - x-3">;
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w - 5 h - 5 text - red - 400 mt - 1 flex - shrink - 0" />) : issue.type === 'warning' ? (
                        <AlertTriangle className="w - 5 h - 5 text - yellow - 400 mt - 1 flex - shrink - 0" />) : (
                        <CheckCircle className="w - 5 h - 5 text - blue - 400 mt - 1 flex - shrink - 0" />)}
                      <div>;
                        <span className="text - gray - 300">{issue.message}</span>;
                        <div className="text - xs text - gray - 500 mt - 1">Priority: {issue.priority}</div>;
                      </div>;
                    </div>))}
                </div>;
              </Card>;
            </div>;
            {/* Recommendations and Keywords */}
            <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
              <Card className='border - gradient - green'>;
                <h3 className='text - 2xl font - bold mb - 6 text - white'>;
                  Optimization Recommendations;
                </h3>;
                <div className='space - y-3'>;
                  {analysis_results.recommendations.map ((rec, index) => (
                    <div key={index} className='flex items - start space - x-3'>;
                      <CheckCircle className='w - 5 h - 5 text - green - 400 mt - 1 flex - shrink - 0' />;
                      <span className='text - gray - 300'>{rec}</span>                    </div>            <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
              <Card className="border - gradient - green">;
                <h3 className="text - 2xl font - bold mb - 6 text - white">Optimization Recommendations</h3>;
                <div className="space - y-3">;
                  {analysis_results.recommendations.map ((rec, index) => (
                    <div key={index} className="flex items - start space - x-3">;
                      <CheckCircle className="w - 5 h - 5 text - green - 400 mt - 1 flex - shrink - 0" />;
                      <span className="text - gray - 300">{rec}</span>))}
                </div>;
              </Card>;
              <Card className='border - gradient - green'>;
                <h3 className='text - 2xl font - bold mb - 6 text - white'>;
                  Keyword Opportunities;
                </h3>;
                <div className='space - y-4'>;
                    <div;
                      key={index}
                      className='border - b border - gray - 700 pb - 3 last:border - b-0';
                    >;
                      <div className='flex justify - between items - center mb - 2'>;
                        <span className='font - semibold text - white'>;
                          {keyword.keyword}
                        </span>;
                        <span className='text - sm text - gray - 400'>;
                          Volume: {keyword.volume}
                        </span>;
                      </div>;
                      <div className='flex justify - between items - center'>;
                        <span className='text - sm text - gray - 400'>;
                          Difficulty: {keyword.difficulty}
                        </span>;
                        <span;
                          className={`px - 2 py - 1 rounded text - xs ${
                            keyword.difficulty === 'low';
                              ? 'bg - green - 500 / 20 text - green - 400';
                              : keyword.difficulty === 'medium';
                                ? 'bg - yellow - 500 / 20 text - yellow - 400';
                                : 'bg - red - 500 / 20 text - red - 400';
                          }`}
                        >                          {keyword.difficulty}                      <div className="flex justify - between items - center">;
                        <span className="text - sm text - gray - 400">Difficulty: {keyword.difficulty}</span>;
                        <span className={`px - 2 py - 1 rounded text - xs ${
                          keyword.difficulty === 'low' ? 'bg - green - 500 / 20 text - green - 400' :;
                          keyword.difficulty === 'medium' ? 'bg - yellow - 500 / 20 text - yellow - 400' :;
                          'bg - red - 500 / 20 text - red - 400';
                        }`}>;
                        </span>;
                      </div>;
                    </div>))}
                </div>;
              </Card>;
            </div>;
          </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Simple Pricing
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Choose the SEO analysis plan that best fits your business needs
              and goals.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing.map((plan, index) => (              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the SEO analysis plan that best fits your business needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section id='pricing' className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Simple Pricing;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
        </section>)}
      {/* Pricing Section */}
      <section id='pricing' className='section - padding bg - gradient - cursor'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Simple Pricing;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Choose the SEO analysis plan that best fits your business needs;
              and goals.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing.map ((plan, index) => (              Simple Pricing;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Choose the SEO analysis plan that best fits your business needs and goals.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {pricing.map ((plan, index) => (
              <Card;
                key={index}
                className={`card - hover border - gradient - green ${plan.popular ? 'ring - 2 ring - green - 500 scale - 105' : ''}`}
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - gradient - to - r from - green - 500 to - emerald - 600 text - white px - 4 py - 2 rounded - full text - sm font - medium'>                      Most Popular;
                    </span>;
                  </div>)}                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                    <span className="bg - gradient - to - r from - green - 500 to - emerald - 600 text - white px - 4 py - 2 rounded - full text - sm font - medium">;
                      Most Popular;
                    </span>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 4'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {plan.name}
                  </h3>;
                  <div className='mb - 6'>;
                    <span className='text - 4xl font - bold text - white'>;
                      {plan.price}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className={`card-hover border-gradient-green ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium'>                      Most Popular
                    </span>
                  </div>
                )}                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}


<<<<<<< HEAD
<<<<<<< HEAD

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {plan.name}
                  </h3>
                  <div className='mb-6'>
                    <span className='text-4xl font-bold text-white'>
                      {plan.price}
                    </span>
                    <span className='text-gray-400'>{plan.period}</span>
                  </div>
                  <p className='text-gray-400'>{plan.description}</p>
                </div>
                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'
                    >
                      <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                      {feature}                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-4'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='mb-6'>;
                    <span className='text-4xl font-bold text-white'>;
                      {plan && plan.price}
                    </span>;
                    <span className='text-gray-400'>{plan && plan.period}</span>;
                  </div>;
                  <p className='text-gray-400'>{plan && plan.description}</p>;
                </div>;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                      {feature}                  </div>;
                  <p className="text-gray-400">{plan && plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;

                      {feature}
                    </li>;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





                    </li>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}

                </ul>;


<<<<<<< HEAD
<<<<<<< HEAD
                      {feature}
                    </li>;
                  ))}
                </ul>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Button
                  href='/contact'
                  size='lg'

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {feature}

                      {feature}

=======
=======
                      {feature}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {feature}

                    </li>
                  ))}
                </ul>
                <Button
<<<<<<< HEAD
<<<<<<< HEAD
                  href='/contact'
                  size='lg'
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  href="/contact"
=======
                  href="/contact"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  href="/contact"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
                </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>

                </Button>

<<<<<<< HEAD


              </Card>
            ))}
=======
              </Card>
            ))}
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </div>;
      </section>;


      {/* CTA Section */}


      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>

                </Button>

              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className='section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='container-cursor text-center relative z-10'>
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'>

<<<<<<< HEAD

            Ready to Improve Your SEO Rankings?

<<<<<<< HEAD

            Ready to Improve Your SEO Rankings?

            Ready to Improve Your SEO Rankings?
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            Ready to Improve Your SEO Rankings?

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </h2>
          <p className='text-responsive-md text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of businesses using our SEO analyzer to improve their
            search rankings and drive more organic traffic.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100 shadow-2xl'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100 shadow-2xl'>;
              Start Free Trial;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              href='/contact'
              variant='outline'
              size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl'            >              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>


  );
}
    </>);
}
  );
}
    </>);
}
);
  );
}
}
  );
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
