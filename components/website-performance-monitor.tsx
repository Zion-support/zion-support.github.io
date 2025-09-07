<<<<<<< HEAD
const features = [ {
  //Simulate website analysis setTimeout ( () => {
  setAnalysisResults ({
  return (<> <Head> <title>Website Performance Monitor - Zion Tech Group | Real-Time Website Monitoring Tool</title> <meta name="description" content="Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations." /> <meta property="og:title" content="Website Performance Monitor - Zion Tech Group" /> <meta property="og:description" content="Real-time website performance monitoring with Core Web Vitals tracking and optimization recommendations." /> <meta name="twitter:card" content="summary large image" /> </Head> <div className="relative z-10 container-cursor text-center" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6" > <Activity className="w-4 h-4 mr-2" /> Real-Time Performance Monitoring </div> <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg" > Website Performance Monitor </h1> <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12" > Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking
and AI-powered optimization recommendations. Never let performance issues impact your users again. </p> <div className="flex flex-col sm:flex-row gap-6 justify-center" > <Button > {
  isAnalyzing ? (<> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" /> Analyzing... </>) : (<> <Zap className="w-5 h-5 mr-2" /> Analyze Website </>) 
}</Button> <Button href="#pricing" variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-2xl" > View Pricing </Button> </div> </div> </section> Powerful Monitoring Features </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Our performance monitoring platform provides everything you need to keep your website fast and reliable. </p> </div> </div> <div className= {
  `absolute -inset-2 bg-gradient-to-r from-transparent via-$ {
  feature.gradient 
}to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm` 
}/> </div> </p> </div> </div> </Card>) ) 
}</div> </div> </section> Comprehensive Performance Metrics </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Track all the metrics that matter for your website's performance and user experience. </p> </div> </Card>) ) 
}</div> </div> </section> Performance Analysis Results </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Here's a sample analysis of a website. Get real-time insights for your own website. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" > {
  /* Score Card */ 
}/> </svg> </div> <p className="text-gray-400" >Good performance with room for improvement</p> </Card> </span> </div> </div> </Card> </div> </div>) ) 
}</div> </Card> </div> </section>) 
}Simple Pricing </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Choose the monitoring plan that best fits your website performance needs. </p> </div> <Card key= {
  index 
}className= {
  `card-hover border-gradient-blue $ {
  plan.popular ? 'ring-2 ring-blue-500 scale-105' : '' 
}` 
}style= {
  {
  animationDelay: `$ {
  index * 0.1 
}s` 
}
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <Button > Get Started <ArrowRight className="w-5 h-5 ml-2" /> </Button> </Card>) ) 
}</div> </div> </section> <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden"> <div className="absolute inset-0 bg-[radial-gradient (circle, rgba (255, 255, 255, 0.1) 1px, transparent 1px) ] bg-[size: 20px 20px] opacity-10" /> <div className="container-cursor text-center relative z-10"> <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg"> text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"> Join thousands of businesses using our monitoring platform to keep their websites fast and reliable. </p> <div className=" flex flex-col sm:flex-row gap-6 justify-center"> <Button href=" /contact"size=" lg"className=" bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"> Start Free Trial <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /contact"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl" > Schedule Demo </Button> </div> </div> </section> </>) 
}
} from 'lucide-react';

<<<<<<< HEAD
=======

<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {
  }
  Activity,
Zap
  TrendingUp,
AlertTriangle
  CheckCircle,
ArrowRight
  Monitor,
<<<<<<< HEAD
Gauge
  BarChart3,
Clock;
} from 'lucide-react';import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock  } from 'lucide-react';'
=======
  Gauge,
  BarChart3,;
  Clock,;
<<<<<<< HEAD
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
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {
  Activity,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Monitor,
  Gauge,
  BarChart3,;
  Clock,;
} from 'lucide-react';import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock } from 'lucide-react';
export default function WebsitePerformanceMonitorPage() {;
} from 'lucide-react';

import {
  Activity
  Zap
  TrendingUp
  AlertTriangle
  CheckCircle
  ArrowRight
  Monitor
  Gauge
  BarChart3
  Clock;
} from 'lucide-react';import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock } from 'lucide-react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


    }
  ];
import React, { useState } from react';
import Head from 'next/head;
import Card from ../components/ui/Card';
import Button from '../components/ui/Button;
import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock } from lucide-react';

const metrics = [;
    {

=======


import React, { useState } from 'react',
import Head from 'next/head';,
import Card from '../components/ui/Card';,
import Button from '../components/ui/Button';
import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock } from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function WebsitePerformanceMonitorPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

const [analysisResults, setAnalysisResults] = useState(null);

const features = null;
            and AI-powered optimization recommendations. Never let performance issues impact your users again.
import {
  Activity;
Zap,
TrendingUp;
AlertTriangle,
CheckCircle;
ArrowRight,
Monitor;
Gauge,
BarChart3;}
Clock;}
} from 'lucide-react';import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock  } from 'lucide-react';

export default function WebsitePerformanceMonitorPage() {const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const features = [
  {icon: <Monitor className='w-8 h-8 text-white'    />,title: 'Real-Time Monitoring',
  description:;
        '24/7 monitoring of your website performance with instant alerts and notifications.';
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600';}
      gradient: 'from-blue-400 to-cyan-500';}
    }
    {icon: <Gauge className='w-8 h-8 text-white'    />;
      title: 'Performance Metrics';
      description:;
        'Comprehensive metrics including Core Web Vitals, page load times, and user experience scores.';
      color: 'bg-gradient-to-br from-green-500 to-emerald-600';}
      gradient: 'from-green-400 to-emerald-500';}
    }
    {icon: <AlertTriangle className='w-8 h-8 text-white'    />;
      title: 'Issue Detection';
      description:;
        'Automatically detect and alert on performance issues, downtime, and bottlenecks.';
      color: 'bg-gradient-to-br from-orange-500 to-red-600';}
      gradient: 'from-orange-400 to-red-500';}
    }
    {icon: <TrendingUp className='w-8 h-8 text-white'    />;
      title: 'Performance Optimization';
      description:;
        'AI-powered recommendations to improve your website speed and user experience.';
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600';}
      gradient: 'from-purple-400 to-indigo-500';}
>>>>>>> origin/chore/fix-lint-and-merge
    }
  ];

const metrics = [
    {
<<<<<<< HEAD

<<<<<<< HEAD
=======

<<<<<<< HEAD
        'Real user experience metrics and conversion impact analysis.'
      icon: '👥'
      color: 'text-pink-400'
    },  ];      gradient: 'from-blue-400 to-cyan-500'}
    {
      icon: <Gauge className="w-8 h-8 text-white" />
      title: 'Performance Metrics'
      description: 'Comprehensive metrics including Core Web Vitals, page load times, and user experience scores.';
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'}
    {
      icon: <AlertTriangle className="w-8 h-8 text-white" />
      title: 'Issue Detection'
      description: 'Automatically detect and alert on performance issues, downtime, and bottlenecks.';
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      gradient: 'from-orange-400 to-red-500'}
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />
      title: 'Performance Optimization'
      description: 'AI-powered recommendations to improve your website speed and user experience.'
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'}]
  const metrics = [
    {
      name: 'Core Web Vitals'
      description: 'LCP, FID, and CLS metrics that directly impact user experience and SEO rankings.';
      icon: '⚡'
      color: 'text-blue-400'
    }
    {
      name: 'Page Load Time'
      description: 'Comprehensive analysis of page load performance across different devices and locations.'
      icon: '🚀'
      color: 'text-green-400'
    }
    {
      name: 'Uptime Monitoring'
      description: '99.9% uptime monitoring with instant alerts for any downtime or performance issues.'
      icon: '🔄'
      color: 'text-purple-400'
    }
    {
      name: 'Mobile Performance'
      description: 'Mobile-first performance testing and optimization recommendations.'
      icon: '📱'
      color: 'text-orange-400'
    }
    {
      name: 'SEO Impact'
      description: 'Performance metrics that directly affect your search engine rankings and visibility.'
      icon: '🔍'
      color: 'text-cyan-400'
    }
    {
      name: 'User Experience'
      description: 'Real user experience metrics and conversion impact analysis.'
      icon: '👥'
      color: 'text-pink-400'
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        'Real user experience metrics and conversion impact analysis.',
      icon: '👥',
      color: 'text-pink-400',
    },  ];

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];
  const pricing = [
    {
      name: 'Starter'
      price: '$29'
      period: '/month'
      description: 'Perfect for small websites and blogs'
      features: [
        '5 websites monitored'
        'Basic performance metrics'
        'Daily monitoring'
        'Email alerts'
        'Basic reporting'
        'Core Web Vitals tracking'
      ]
      popular: false
    },    {        '5 websites monitoredBasic performance metricsDaily monitoringEmail alertsBasic reportingCore Web Vitals tracking'
      ];
      popular: false
    }
      name: 'Professional'
      price: '$79'
      period: '/month'
      description: 'Ideal for growing businesses and e-commerce sites'
      features: [
        '25 websites monitored'
        'Advanced performance metrics'
        'Real-time monitoring'
        'SMS & email alerts'
        'Advanced reporting'
        'Performance optimization tips'
        'API access'
        'Team collaboration'
      ]
      popular: true
    },    {
      name: 'Enterprise'
      price: '$199'
      period: '/month',        '25 websites monitoredAdvanced performance metricsReal-time monitoringSMS & email alertsAdvanced reportingPerformance optimization tipsAPI accessTeam collaboration'
      ];
      popular: true
<<<<<<< HEAD
    }
      name: 'Enterprise'
      price: '$199'
      period: '/month'
    };
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description:
        'For large organizations with critical performance requirements'
      features: [
        'Unlimited websites'
        'Enterprise-grade monitoring'
        'Custom alerting rules'
        '24/7 support'
        'Custom integrations'
        'White-label reporting'
        'SLA guarantees'
        'On-premise options'
      ]
      popular: false
    },  ];        'Unlimited websitesEnterprise-grade monitoringCustom alerting rules24/7 supportCustom integrationsWhite-label reportingSLA guaranteesOn-premise options'
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
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


export default function WebsitePerformanceMonitorPage() {;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);



      ];
      popular: false;
    }

      ];
      popular: false
    }


    };
      name: 'Enterprise',
      price: '$199',
      period: '/month',

<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleAnalyzeWebsite = async () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsAnalyzing(true);
    // Simulate website analysis,
setTimeout(() => {
      }
      setAnalysisResults({
<<<<<<< HEAD

        ]
      });
      setIsAnalyzing(false)
    }, 4000)
  }

return (;
    <>
      <Head>

      </Head>
    {name: 'Core Web Vitals;
      description:;
        LCP, FID, and CLS metrics that directly impact user experience and SEO rankings.',icon: '⚡,color: text-blue-400'},{name: 'Page Load Time,description:;
        Comprehensive analysis of page load performance across different devices and locations.',icon: '🚀,color: text-green-400'},{name: 'Uptime Monitoring,description:;
        99.9% uptime monitoring with instant alerts for any downtime or performance issues.',icon: '🔄,color: text-purple-400'},{name: 'Mobile Performance,description:;
        Mobile-first performance testing and optimization recommendations.',icon: '📱,color: text-orange-400'},{name: 'SEO Impact,description:;
        Performance metrics that directly affect your search engine rankings and visibility.',icon: '🔍,color: text-cyan-400'},{name: 'User Experience,description:;
        Real user experience metrics and conversion impact analysis.',icon: '👥,color: text-pink-400'}];
    {name: 'Starter;
      price: $29';
      period: '/month;
      description: Perfect for small websites and blogs';
      features: [;
'5 websites monitored,Basic performance metrics','Daily monitoring,Email alerts','Basic reporting,Core Web Vitals tracking'],popular: false},{name: 'Professional,price: $79',period: '/month,description: Ideal for growing businesses and e-commerce sites',features: [;
        '25 websites monitored;
        Advanced performance metrics';
        'Real-time monitoring;
        SMS & email alerts';
        'Advanced reporting;
        Performance optimization tips';
        'API access;
        Team collaboration';
      ];
      popular: true;
    },    {name: 'Enterprise;
      price: $199';
      period: '/month,        25 websites monitoredAdvanced performance metricsReal-time monitoringSMS & email alertsAdvanced reportingPerformance optimization tipsAPI accessTeam collaboration';
      ];
      popular: true;
export default function WebsitePerformanceMonitorPage() {const [isAnalyzing, setIsAnalyzing] = useState(false)const [analysisResults, setAnalysisResults]  = useState(null)}{name: 'Page Load Time,description: Comprehensive analysis of page load performance across different devices and locations.',icon: '🚀,color: text-green-400';
    }{name: 'Uptime Monitoring,description: 99 && 99.9% uptime monitoring with instant alerts for any downtime or performance issues.',icon: '🔄,color: text-purple-400';
    }{name: 'Mobile Performance,description: Mobile-first performance testing and optimization recommendations.',icon: '📱,color: text-orange-400';
    }{name: 'SEO Impact,description: Performance metrics that directly affect your search engine rankings and visibility.',icon: '🔍,color: text-cyan-400';
    }{name: 'User Experience,description: Real user experience metrics and conversion impact analysis.',icon: '👥,color: text-pink-400';
    }
  ];const pricing = [;
    {name: 'Starter,price: $29',period: '/month,description: Perfect for small websites and blogs',features: [;
        '5 websites monitored,Basic performance metrics','Daily monitoring,Email alerts','Basic reporting,Core Web Vitals tracking'],popular: false},    {        '5 websites monitoredBasic performance metricsDaily monitoringEmail alertsBasic reportingCore Web Vitals tracking;
    {name: Starter',price: '$29,period: /month',description: 'Perfect for small websites and blogs];
      popular: false;
    }name: Professional',price: '$79,period: /month',description: 'Ideal for growing businesses and e-commerce sites,features: [;
        25 websites monitored','Advanced performance metrics,Real-time monitoring','SMS & email alerts,Advanced reporting','Performance optimization tips,API access','Team collaboration],popular: true},    {name: Enterprise',price: '$199,period: /month',        '25 websites monitoredAdvanced performance metricsReal-time monitoringSMS & email alertsAdvanced reportingPerformance optimization tipsAPI accessTeam collaboration;
      ];
      popular: true;
    }name: Enterprise',price: '$199,period: /month',description:;
        'For large organizations with critical performance requirements,features: [;
        Unlimited websites','Enterprise-grade monitoring,Custom alerting rules','24/7 support,Custom integrations','White-label reporting,SLA guarantees','On-premise options],popular: false}];        Unlimited websitesEnterprise-grade monitoringCustom alerting rules24/7 supportCustom integrationsWhite-label reportingSLA guaranteesOn-premise options';'25 websites monitored,Advanced performance metrics','Real-time monitoring,SMS & email alerts','Advanced reporting,Performance optimization tips','API access,Team collaboration'],popular: true},{name: 'Enterprise,price: $199',period: '/month,description:;
        For large organizations with critical performance requirements';
      features: [;
        'Unlimited websites;
        Enterprise-grade monitoring';
        'Custom alerting rules;
        24/7 support';
        'Custom integrations;
        White-label reporting';
        'SLA guarantees;
        On-premise options';
      ];
      popular: false;
    }];        'Unlimited websitesEnterprise-grade monitoringCustom alerting rules24/7 supportCustom integrationsWhite-label reportingSLA guaranteesOn-premise options;
      ];
      popular: false;
    }description: For large organizations with critical performance requirements',features: [;
        'Unlimited websitesEnterprise-grade monitoringCustom alerting rules24/7 supportCustom integrationsWhite-label reportingSLA guaranteesOn-premise options;
      ];
      popular: false;
    }description:;
        For large organizations with critical performance requirements',features: [;
        'Unlimited websites,Enterprise-grade monitoring','Custom alerting rules,24/7 support','Custom integrations,White-label reporting','SLA guarantees,On-premise options'],popular: false}];const handleAnalyzeWebsite = async () => {setIsAnalyzing(true)// Simulate website analysis;
    setTimeout(() => {setAnalysisResults({url: 'https://example.com;
        overallScore: 87;
        lcp: 2.1s';
        fid: '45ms;
        cls: 0.08';
        loadTime: '1.8s;
        recommendations: [;
  const handleAnalyzeWebsite = async () => {setIsAnalyzing(true)// Simulate website analysis;
    setTimeout(() => {setAnalysisResults({url: https://example && example.com',overallScore: 87,lcp: '2 && 2.1s,fid: 45ms',cls: '0 && 0.08,loadTime: 1 && 1.8s',recommendations: [;
          'Optimize images and implement lazy loading,Minimize render-blocking resources','Enable compression and caching,Consider using a CDN for global performance']})setIsAnalyzing(false)}, 4000)}'Optimize images and implement lazy loadingMinimize render-blocking resourcesEnable compression and cachingConsider using a CDN for global performance;
        ];
      }){/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden>;
        <div className=absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)] />;
        <div className=absolute inset-0 bg-grid opacity-10" />;
        <div className="relative z-10 container-cursor text-center>;
          <div className=inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">;
            <Activity className="w-4 h-4 mr-2 />;
=======
        url: 'https://example.com'
        overallScore: 87
        lcp: '2.1s'
        fid: '45ms'
        cls: '0.08'
        loadTime: '1.8s'
        recommendations: [
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleAnalyzeWebsite = async () => {;
    setIsAnalyzing(true);
    // Simulate website analysis;
    setTimeout(() => {;
      setAnalysisResults({;
        url: 'https://example && example.com',;
        overallScore: 87,;
        lcp: '2 && 2.1s',;
        fid: '45ms',;
        cls: '0 && 0.08',;
        loadTime: '1 && 1.8s',;
        recommendations: [;
          'Optimize images and implement lazy loading',;
          'Minimize render-blocking resources',;
          'Enable compression and caching',;
          'Consider using a CDN for global performance',;
        ],;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      });
      setIsAnalyzing(false);
    }, 4000);  };          'Optimize images and implement lazy loadingMinimize render-blocking resourcesEnable compression and cachingConsider using a CDN for global performance';
        ];
          'Optimize images and implement lazy loadingMinimize render-blocking resourcesEnable compression and cachingConsider using a CDN for global performance'
        ]
      });
<<<<<<< HEAD
      setIsAnalyzing(false);
    }, 4000);  };          'Optimize images and implement lazy loadingMinimize render-blocking resourcesEnable compression and cachingConsider using a CDN for global performance'
        ]
      });
      setIsAnalyzing(false)
    }, 4000)
=======

      setIsAnalyzing(false);
    }, 4000);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    };

    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',

  };

<<<<<<< HEAD
  return (


  return (
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>
      <Head>
        <title>Website Performance Monitor - Zion Tech Group | Real-Time Website Monitoring Tool</title>
<meta name="description" content="Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations." />
        <meta property="og:title" content="Website Performance Monitor - Zion Tech Group" />
        <meta property="og:description" content="Real-time website performance monitoring with Core Web Vitals tracking and optimization recommendations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Real-Time Performance Monitoring
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Website Performance Monitor
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations. Never let performance issues impact your users again.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative section-padding bg-gradient-cursor overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0 && 0.06),transparent_50%)]' />;
        <div className='absolute inset-0 bg-grid opacity-10' />;
        <div className='relative z-10 container-cursor text-center'>;
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>;
            <Activity className='w-4 h-4 mr-2' />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            Real-Time Performance Monitoring;
          </div>;
          <h1 className=text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">;
            Website Performance Monitor;
          </h1>;
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12>;
            Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations. Never let performance issues impact your users again.;
  const handleAnalyzeWebsite = async () => {
    setIsAnalyzing(true);
    // Simulate website analysis;
    setTimeout(() => {
      setAnalysisResults({
        url: https://example && example.com',
        overallScore: 87,
        lcp: '2 && 2.1s,
        fid: 45ms',
        cls: '0 && 0.08,
        loadTime: 1 && 1.8s',
        recommendations: [;
          'Optimize images and implement lazy loading,
          Minimize render-blocking resources',
          'Enable compression and caching,
          Consider using a CDN for global performance']});
      setIsAnalyzing(false);
    }, 4000);  }          'Optimize images and implement lazy loadingMinimize render-blocking resourcesEnable compression and cachingConsider using a CDN for global performance;
        ];
      });


=======
      name: 'Core Web Vitals',
  description:
        'LCP, FID, and CLS metrics that directly impact user experience and SEO rankings.',
      icon: '⚡',}
  color: 'text-blue-400',}
    },
    {
      name: 'Page Load Time',
  description:
        'Comprehensive analysis of page load performance across different devices and locations.',
      icon: '🚀',}
  color: 'text-green-400',}
    },
    {
      name: 'Uptime Monitoring',
  description:
        '99.9% uptime monitoring with instant alerts for any downtime or performance issues.',
      icon: '🔄',}
  color: 'text-purple-400',}
    },
    {
      name: 'Mobile Performance',
  description:
        'Mobile-first performance testing and optimization recommendations.',
      icon: '📱',}
  color: 'text-orange-400',}
    },
    {
      name: 'SEO Impact',
  description:
        'Performance metrics that directly affect your search engine rankings and visibility.',
      icon: '🔍',}
  color: 'text-cyan-400',}
    },
    {
      name: 'User Experience',
  description:

        'Real user experience metrics and conversion impact analysis.',
      icon: '👥',}
  color: 'text-pink-400',}
    },
  ];

const pricing = [
    {
      name: 'Starter',
  price: '$29'
      period: '/month',
  description: 'Perfect for small websites and blogs'
      features: [
'5 websites monitored',
        'Basic performance metrics',
        'Daily monitoring',
        'Email alerts',
        'Basic reporting',
        'Core Web Vitals tracking',
      ],}
      popular: false,}
    },
    {
      name: 'Professional',
  price: '$79',
      period: '/month',
  description: 'Ideal for growing businesses and e-commerce sites',
      features: [

'25 websites monitored',
        'Advanced performance metrics',
        'Real-time monitoring',
        'SMS & email alerts',
        'Advanced reporting',
        'Performance optimization tips',
        'API access',
        'Team collaboration',
      ],}
      popular: true,}
    },
    {
      name: 'Enterprise',
  price: '$199',
      period: '/month',
  description:
        'For large organizations with critical performance requirements',
      features: [
        'Unlimited websites',
        'Enterprise-grade monitoring',
        'Custom alerting rules',
        '24/7 support',
        'Custom integrations',
        'White-label reporting',
        'SLA guarantees',
        'On-premise options',
      ],}
      popular: false,}
    },
  ];

const handleAnalyzeWebsite = async () => {
    setIsAnalyzing(true);
    // Simulate website analysis;
setTimeout(() => {
      setAnalysisResults({
        url: 'https://example.com',
  overallScore: 87;
lcp: '2.1s',
  fid: '45ms'
        cls: '0.08',
  loadTime: '1.8s'
        recommendations: [

'Optimize images and implement lazy loading',
          'Minimize render-blocking resources',
          'Enable compression and caching',
          'Consider using a CDN for global performance',}
        ],}
      });
      setIsAnalyzing(false);
    }, 4000)
};


  return (
    <>
      <Head><title>
          Website Performance Monitor - Zion Tech Group | Real-Time Website;
Monitoring Tool;
        </title>
        <meta;
name='description'
          content='Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations.'
           />
        <meta;
property='og: title'
          content='Website Performance Monitor - Zion Tech Group'
           />
        <meta;
property='og:description'
          content='Real-time website performance monitoring with Core Web Vitals tracking and optimization recommendations.'
           />
        <meta name='twitter:card' content='summary_large_image'    />
      </Head>

      {/* Hero Section *,}
}
      <section className='relative section-padding bg-gradient-cursor overflow-hidden'    />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]'    />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]'    />;
        <div className='absolute inset-0 bg-grid opacity-10'    />;
        <div className='relative z-10 container-cursor text-center'    />;
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'    />;
            <Activity className='w-4 h-4 mr-2'    />;
            Real-Time Performance Monitoring;
          </div>;
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'    />;
            Website Performance Monitor;
          </h1>;
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12'    />;
>>>>>>> origin/chore/fix-lint-and-merge
            Monitor your website performance in real-time with comprehensive;
            metrics, Core Web Vitals tracking, and AI-powered optimization;
            recommendations. Never let performance issues impact your users;
            again.;
          </p>;
<<<<<<< HEAD

=======
          <div className='flex flex-col sm:flex-row gap-6 justify-center'    />;
            <Button;
              onClick={handleAnalyzeWebsite}

              size='lg'
<<<<<<< HEAD
              className='bg-gradient-to-r from-blue-500 to-cyan-600 hover: from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow'
          </p    />
          <div className=\"flex flex-col sm:flex-row gap-6 justify-center\"    />
            <Button;
onClick={handleAnalyzeWebsite}
              size=\"lg\"
              className=\"bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow\"


              disabled={isAnalyzin,}
}
                />;
              {isAnalyzing ? (<>;
<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'    />;
                  Analyzing...;
                <   />;
              ) : (<>;
<Zap className='w-5 h-5 mr-2'    />;
                  Analyze Website;}
                <   />;}
              )}
            </Button>;
            <Button;
href='#pricing';
              variant='outline';
              size='lg';
              className='border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-2xl'    />

              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
<section className='section-padding bg-gradient-cursor-accent'    />;
        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
              Powerful Monitoring Features;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />;
=======
              className='bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow'              disabled={isAnalyzing}>;
              {isAnalyzing ? (;
                <>;
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />                  Analyzing...;
                </>;
              ) : (;
                <>;
                  <Zap className='w-5 h-5 mr-2' />                  Analyze Website      </Head>;
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0 && 0.06),transparent_50%)]" />;
        <div className="absolute inset-0 bg-grid opacity-10" />;
        <div className="relative z-10 container-cursor text-center">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">;
            <Activity className="w-4 h-4 mr-2" />;
            Real-Time Performance Monitoring;
          </div>;
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">;
            Website Performance Monitor;
          </h1>;
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">;
            Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations. Never let performance issues impact your users again.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;
            <Button
              onClick={handleAnalyzeWebsite}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow"
<<<<<<< HEAD
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className='w-5 h-5 mr-2' />                  <Zap className="w-5 h-5 mr-2" />
                  Analyze Website
                </>
              )}
            </Button>
            <Button
              href='#pricing'
              variant='outline'
              size='lg'
              className='border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-2xl'            >              href="#pricing"
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-2xl"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className='section - padding bg - gradient - cursor - accent'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Powerful Monitoring Features;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Our performance monitoring platform provides everything you need;
              to keep your website fast and reliable.;
            </p>;
          </div>;
<<<<<<< HEAD
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />;
            {features.map((feature, index) => (<Card;}
=======
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Powerful Monitoring Features
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Our performance monitoring platform provides everything you need
              to keep your website fast and reliable.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='card-hover group border-gradient-blue'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex items-start space-x-6'>
                  <div className='relative'>
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-4 text-white'>
                      {feature.title}
                    </h3>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              <Card
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                key={index}
                className='card-hover group border-gradient-blue';
                style={{ animationDelay: `${index * 0.1}s` ,
}
                  />;
                <div className='flex items-start space-x-6'    />;
                  <div className='relative'    />;
                    <div;
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover: scale-110 transition-transform duration-300`}    />

                      {feature.ico,}
}
                    </div>;
                    <div;
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover: opacity-20 transition-opacity duration-300 blur-sm,
}
                       />;
                  </div>;
                  <div className='flex-1'    />;
                    <h3 className='text-2xl font-bold mb-4 text-white'    />;
                      {feature.title}

                    </h3>
                    <p className='text-gray-400 leading-relaxed'    />
>>>>>>> origin/chore/fix-lint-and-merge
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
<<<<<<< HEAD
<<<<<<< HEAD
                    </h3>;
                    <p className=text-gray-400 leading-relaxed'>;
                      {feature.description}</p>;
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Metrics Section */}





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Comprehensive Performance Metrics
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Track all the metrics that matter for your website's performance
              and user experience.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {metrics.map((metric, index) => (
              <Card
<<<<<<< HEAD
                    <p className='text-gray-400 leading-relaxed'>                      {feature.description}              Powerful Monitoring Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our performance monitoring platform provides everything you need to keep your website fast and reliable.
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
                    <p className='text-gray-400 leading-relaxed'>                      {feature && feature.description}              Powerful Monitoring Features;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Our performance monitoring platform provides everything you need to keep your website fast and reliable.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {features.map ((feature, index) => (
              <Card;
                key={index}
                className='card - hover group border - gradient - blue';
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
                    </p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                </div>;
              </Card>;
            ))}
      {/* Metrics Section */}

=======

            ))}
      {/* Metrics Section */}
<section className='section-padding bg-gradient-cursor'    />;
        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
              Comprehensive Performance Metrics;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />;
              Track all the metrics that matter for your website's performance;
>>>>>>> origin/chore/fix-lint-and-merge
              and user experience.;
            </p>;
          </div>;
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'    />;
            {metrics.map((metric, index) => (<Card;
                    </p    />;
                  </div>;
                </div>;}
              </Card>;}
                      {feature.icon}
                    </div>;
                    <div className={`absolute -inset - 2 bg - gradient - to - r from - transparent via-${feature.gradient} to - transparent rounded - 2xl opacity - 0 group - hover: opacity - 20 transition - opacity duration - 300 blur - sm,
}    />;
                  </div>;
<<<<<<< HEAD

=======
                  <div className=\"flex - 1\"    />;
                    <h3 className=\"text - 2xl font - bold mb - 4 text - white\"    />;
                      {feature.title}
                    </h3>;
                    <p className=\"text - gray - 400 leading - relaxed\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      {feature.description}
            ))}
                key={index}
=======
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
            {metrics.map ((metric, index) => (
              <Card;
                key={index}
                className='card - hover border - gradient - blue text - center';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='text - 4xl mb - 4'>{metric.icon}</div>;
                <h3 className={`text - xl font - bold mb - 3 ${metric.color}`}>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    <p className='text-gray-400 leading-relaxed'>                      {feature.description}

                      {feature.description}

                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

              Comprehensive Performance Metrics
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Track all the metrics that matter for your website's performance
              and user experience.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='text-4xl mb-4'>{metric.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${metric.color}`}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  {metric.name}
                </h3>;
<<<<<<< HEAD

                  {metric.description}
<<<<<<< HEAD
=======

      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive Performance Metrics
<<<<<<< HEAD
                </p>              </Card>              Comprehensive Performance Metrics
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>
              Track all the metrics that matter for your website's performance and user experience.
            </p>
          </div>
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
<<<<<<< HEAD
=======
          </div>;
        </div>;
      </section>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Metrics Section */}
      <section className='section-padding bg-gradient-cursor>;
        <div className=container-cursor'>;
          <div className='text-center mb-20>;
            <h2 className=text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Comprehensive Performance Metrics;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Track all the metrics that matter for your websites performance;
              and user experience.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {metrics && metrics.map((metric, index) => (;
              <Card
                key={index}
                className=card-hover border-gradient-blue text-center
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='text-4xl mb-4'>{metric && metric.icon}</div>;
                <h3 className={`text-xl font-bold mb-3 ${metric && metric.color}`}>;
                  {metric && metric.name}
                </h3>;
                <p className=text-gray-400 text-sm leading-relaxed>;
                  {metric && metric.description}
                </p>              </Card>              Comprehensive Performance Metrics;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Track all the metrics that matter for your website's performance and user experience.;
            </p>;
          </div>;
<<<<<<< HEAD
              <Card
                key={index}
                className=card-hover border-gradient-blue text-center"
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {metrics && metrics.map((metric, index) => (;
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"

<<<<<<< HEAD
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </p>              </Card>
=======
                <p className='text - gray - 400 text - sm leading - relaxed'    />;

                  {metric.description}
>>>>>>> origin/chore/fix-lint-and-merge

                </p>
              </Card>

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
                  {metric.description}</h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Track all the metrics that matter for your website's performance and user experience.;
            </p>;
          </div>;
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {metrics.map((metric, index) => ({/* Metrics Section */}
      <section className=section-padding bg-gradient-cursor>;
        <div className='container-cursor'>;
          <div className=text-center mb-20>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Comprehensive Performance Metrics;
            </h2>;
            <p className=text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Track all the metrics that matter for your website's performance;
              and user experience.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6>;
            {metrics && metrics.map((metric, index) => (<Card;
                key={index}
                className=card-hover border-gradient-blue text-center';
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='text-4xl mb-4>{metric && metric.icon}</div>;
                <h3 className={`text-xl font-bold mb-3 ${metric && metric.color}`}>;
                  {metric && metric.name}
                </h3>;
                <p className=text-gray-400 text-sm leading-relaxed'>;
                  {metric && metric.description}
                </p>              </Card>              Comprehensive Performance Metrics;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Track all the metrics that matter for your website's performance and user experience.;
            </p>;
          </div>;
              <Card;
                key={index}
                className=card-hover border-gradient-blue text-center";
                </p>              </Card>;
                </p>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
            ))}{/* Demo Analysis Section */}
      {analysisResults && (</div>;
        </div>;
      </section>;{/* Demo Analysis Section */}
      {analysisResults && (<section className=section-padding bg-gradient-cursor-accent>;
=======




<<<<<<< HEAD
      {/* Demo Analysis Section */}
      {analysisResults && (

                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${metric.color}`}>{metric.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{metric.description}</p>
              </Card>
                </p>              </Card>

              </Card>

            ))}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Demo Analysis Section */}
      {analysisResults && (

          </div>;
        </div>;
      </section>;
      {/* Demo Analysis Section */}
      {analysisResults && (;
        <section className='section-padding bg-gradient-cursor-accent'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className='container-cursor'>;
            <div className=text-center mb-12>;
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
                Performance Analysis Results;
              </h2>;
              <p className=text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
                Here's a sample analysis of a website. Get real-time insights;
                for your own website.;
              </p>;
            </div>;
<<<<<<< HEAD
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8>;<section className=section-padding bg-gradient-cursor-accent'>;
=======

            ))}
>>>>>>> origin/chore/fix-lint-and-merge


<<<<<<< HEAD
=======
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Score Card */}
              <Card className='border-gradient-blue text-center'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Overall Performance Score;
                </h3>;
                <div className='text-6xl font-bold text-blue-400 mb-4'>;
                  {analysisResults && analysisResults.overallScore}/100;
                </div>;
                <div className='w-32 h-32 mx-auto mb-6'>;
          </div>
        </div>
      </section>

      {/* Demo Analysis Section */}
      {analysisResults && (
        <section className='section-padding bg-gradient-cursor-accent'>
          <div className='container-cursor'>
            <div className='text-center mb-12'>
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
                Performance Analysis Results
              </h2>
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                Here's a sample analysis of a website. Get real-time insights
                for your own website.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Score Card */}
              <Card className='border-gradient-blue text-center'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Overall Performance Score
                </h3>
                <div className='text-6xl font-bold text-blue-400 mb-4'>
                  {analysisResults.overallScore}/100
                </div>
                <div className='w-32 h-32 mx-auto mb-6'>
                  <svg
                    className='w-full h-full transform -rotate-90'
                    viewBox='0 0 36 36'>;
                    <path
                      d='M18 2 && 2.0845 a 15 && 15.9155 15 && 15.9155 0 0 1 0 31 && 31.831 a 15 && 15.9155 15 && 15.9155 0 0 1 0 -31 && 31.831'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeDasharray={`${(analysisResults && analysisResults.overallScore / 100) * 100}, 100`}
                      className='text-blue-500'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    />;
                  </svg>;
                </div>;
                <p className='text-gray-400'>;
                  Good performance with room for improvement;
                </p>;
              </Card>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Metrics Card */}
              <Card className='border-gradient-blue'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Core Web Vitals;
                </h3>;
                <div className='space-y-4'>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>;
                      LCP (Largest Contentful Paint);
                    </span>;
                    <span
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.lcp) < 2 && 2.5 ? 'text-green-400' : 'text-orange-400'}`}>;
                      {analysisResults && analysisResults.lcp}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>;
                      FID (First Input Delay);
                    </span>;
                    <span
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.fid) < 100 ? 'text-green-400' : 'text-orange-400'}`}>;
                      {analysisResults && analysisResults.fid}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>;
                      CLS (Cumulative Layout Shift);
                    </span>;
                    <span
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.cls) < 0 && 0.1 ? 'text-green-400' : 'text-orange-400'}`}>;
                      {analysisResults && analysisResults.cls}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>Page Load Time</span>;
                    <span
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                Performance Analysis Results
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample analysis of a website. Get real-time insights for your own website.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}>                      {analysisResults && analysisResults.loadTime}                Performance Analysis Results;
              </h2>;
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
                Here's a sample analysis of a website. Get real-time insights for your own website.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Score Card */}
              <Card className="border-gradient-blue text-center">;
                <h3 className="text-2xl font-bold mb-6 text-white">Overall Performance Score</h3>;
                <div className="text-6xl font-bold text-blue-400 mb-4">{analysisResults && analysisResults.overallScore}/100</div>;
                <div className="w-32 h-32 mx-auto mb-6">;
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">;
                    <path
                      d="M18 2 && 2.0845 a 15 && 15.9155 15 && 15.9155 0 0 1 0 31 && 31.831 a 15 && 15.9155 15 && 15.9155 0 0 1 0 -31 && 31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults && analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-blue-500"

<<<<<<< HEAD
=======
                    />;
                  </svg>;
                </div>;
                <p className="text-gray-400">Good performance with room for improvement</p>;
              </Card>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Recommendations */}
            <Card className="border-gradient-blue mt-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{rec}</span>
                  </div>
<<<<<<< HEAD
            {/* Recommendations */}
            {/* Recommendations */}
            <Card className="border-gradient-blue mt-8">
                    />
                  </svg>
                </div>
                <p className="text-gray-400">Good performance with room for improvement</p>
              </Card>
              {/* Metrics Card */}
              <Card className="border-gradient-blue">
                <h3 className="text-2xl font-bold mb-6 text-white">Core Web Vitals</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">LCP (Largest Contentful Paint)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.lcp) < 2.5 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.lcp}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">FID (First Input Delay)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.fid) < 100 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.fid}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CLS (Cumulative Layout Shift)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.cls) < 0.1 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.cls}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Page Load Time</span>
                    <span className={`font-bold ${parseFloat(analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.loadTime}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Recommendations */}
            <Card className='border-gradient-blue mt-8'>
              <h3 className='text-2xl font-bold mb-6 text-white'>
                Optimization Recommendations
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />

                    <span className='text-gray-300'>{rec}</span>                  </div>

                  </div>



<<<<<<< HEAD
                    <span className='text-gray-300'>{rec}</span>                  </div>            <Card className="border-gradient-blue mt-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{rec}</span>
                    <span className='text-gray-300'>{rec}</span>                  </div>

                  </div>

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}
<<<<<<< HEAD

      {/* Pricing Section */}
      <section id='pricing' className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>



=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Simple Pricing
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Choose the monitoring plan that best fits your website performance
              needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing.map((plan, index) => (              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the monitoring plan that best fits your website performance needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <section id='pricing' className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Simple Pricing;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
                </p>              </Card>              Comprehensive Performance Metrics;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Track all the metrics that matter for your website's performance and user experience.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
            {metrics.map ((metric, index) => (
              <Card;
                key={index}
                className="card - hover border - gradient - blue text - center";
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className="text - 4xl mb - 4">{metric.icon}</div>;
                <h3 className={`text - xl font - bold mb - 3 ${metric.color}`}>{metric.name}</h3>;
                <p className="text - gray - 400 text - sm leading - relaxed">{metric.description}</p>;
              </Card>))}
          </div>;
        </div>;
      </section>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Demo Analysis Section */}
      {analysisResults && (;
        <section className='section-padding bg-gradient-cursor-accent>;
          <div className=container-cursor'>;
            <div className='text-center mb-12>;
              <h2 className=text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
                Performance Analysis Results;
              </h2>;
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
                Heres a sample analysis of a website. Get real-time insights;
                for your own website.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;

      {/* Metrics Section */}
      <section className="section-padding bg-gradient-cursor>
        <div className=container-cursor">
          <div className="text-center mb-20>
            <h2 className=text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive Performance Metrics
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>
              Track all the metrics that matter for your websites performance and user experience.
            </p>
          </div>

          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=text-4xl mb-4">{metric.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${metric.color}`}>{metric.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed>{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
=======


>>>>>>> origin/chore/fix-lint-and-merge

      {/* Demo Analysis Section */}
      {analysisResults && (

<<<<<<< HEAD
=======
<section className='section-padding bg-gradient-cursor-accent'    />
          <div className='container-cursor'    />
            <div className='text-center mb-12'    />
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />
                Performance Analysis Results;
              </h2>
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
                Here's a sample analysis of a website. Get real-time insights;
for your own website.
              </p>
            </div>
            <div className='grid grid-cols-1 lg: grid-cols-2 gap-8'    />
}
              {/* Score Card *,}
}
                  <svg;
                    className='w-full h-full transform -rotate-90';
                    viewBox='0 0 36 36'    />;
                    <path;
                      d='M18 2 && 2.0845 a 15 && 15.9155 15 && 15.9155 0 0 1 0 31 && 31.831 a 15 && 15.9155 15 && 15.9155 0 0 1 0 -31 && 31.831';
                      fill='none';
                      stroke='currentColor';
                      strokeWidth='2';
                      strokeDasharray={`${(analysisResults && analysisResults.overallScore / 100) * 100}, 100`}
                      className='text-blue-500';
              {/* Metrics Card */}
              <Card className='border-gradient-blue'    />;
                <h3 className='text-2xl font-bold mb-6 text-white'    />;
                  Core Web Vitals;
                </h3>;
                <div className='space-y-4'    />;
                  <div className='flex justify-between items-center'    />;
                    <span className='text-gray-400'    />;
                      LCP (Largest Contentful Paint)</span>;
                    <span;
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.lcp) < 2 && 2.5 ? 'text-green-400' : 'text-orange-400'}`}    />

                      {analysisResults && analysisResults.lcp}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'    />;
                    <span className='text-gray-400'    />;
                      FID (First Input Delay)</span>;
                    <span;
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.fid) < 100 ? 'text-green-400' : 'text-orange-400'}`}    />

                      {analysisResults && analysisResults.fid}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'    />;
                    <span className='text-gray-400'    />;
                      CLS (Cumulative Layout Shift)</span>;
                    <span;
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.cls) < 0 && 0.1 ? 'text-green-400' : 'text-orange-400'}`}    />

                      {analysisResults && analysisResults.cls}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'    />;
                    <span className='text-gray-400'    />Page Load Time</span>;

                    <span;
className={`font-bold ${parseFloat(analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}    />

>>>>>>> origin/chore/fix-lint-and-merge
                      {analysisResults.loadTime}

                    </span>
                  </div>
                </div>
              </Card>
            </div>
<<<<<<< HEAD
                      className="text-blue-500

            {/* Recommendations */}

                  </div>
                    <span className=text-gray-300'>{rec}</span>                  </div>

                  </div>
origin/cursor/automate-test-improve-and-merge-code-2533
                      className={`font-bold ${parseFloat(analysisResults.loadTime) < 2 ? 'text-green-400 : text-orange-400'}`}
                    >;
                      {analysisResults.loadTime}
                    </span>;
                  </div>;
                </div>;
              </Card>;
            </div>;
            {/* Recommendations */}
<Card className='border-gradient-blue mt-8>;
              <h3 className=text-2xl font-bold mb-6 text-white'>;
                Optimization Recommendations;
              </h3>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4>;
                {analysisResults.recommendations.map((rec, index) => (<div key={index} className=flex items-start space-x-3'>;
                    <CheckCircle className='w-5 h-5 text-green-400 mt-1 flex-shrink-0 />;
                    <span className=text-gray-300'>{rec}</span>                  </div>;
                  </div>;
            <Card className='border-gradient-blue mt-8>;
              <h3 className=text-2xl font-bold mb-6 text-white'>;
                Optimization Recommendations;
              </h3>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4>;
                {analysisResults && analysisResults.recommendations.map((rec, index) => (<div key={index} className=flex items-start space-x-3'>;
                    <CheckCircle className='w-5 h-5 text-green-400 mt-1 flex-shrink-0 />;
                    <span className=text-gray-300'>{rec}</span>                  </div>            <Card className=border-gradient-blue mt-8">;
              <h3 className="text-2xl font-bold mb-6 text-white>Optimization Recommendations</h3>;
              <div className=grid grid-cols-1 md:grid-cols-2 gap-4">;
                {analysisResults && analysisResults.recommendations.map((rec, index) => (<div key={index} className="flex items-start space-x-3>;
                    <CheckCircle className=w-5 h-5 text-green-400 mt-1 flex-shrink-0" />;
                    <span className="text-gray-300>{rec}</span>;
                    <span className=text-gray-300">{rec}</span>;<span className='text-gray-300>{rec}</span>;
                  </div>;
=======
            {/* Recommendations */}
<Card className='border-gradient-blue mt-8'    />
              <h3 className='text-2xl font-bold mb-6 text-white'    />
                Optimization Recommendations;
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'    />
                {analysisResults.recommendations.map((rec, index) => (}
                  <div key={index} className='flex items-start space-x-3'    />
                    <CheckCircle className='w-5 h-5 text-green-400 mt-1 flex-shrink-0'    />

                    <span className='text-gray-300'    />{rec}</span>
                  </div>

>>>>>>> origin/chore/fix-lint-and-merge
                ))}
              </div>;
            </Card>;
          </div>;
        </section>;

      )}

      {/* Pricing Section */}
<<<<<<< HEAD

=======
<section id='pricing' className='section-padding bg-gradient-cursor'    />
        <div className='container-cursor'    />
          <div className='text-center mb-20'    />
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />
              Simple Pricing;
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Choose the monitoring plan that best fits your website performance;
needs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'    />
            {pricing.map((plan, index) => (
      <section id='pricing' className='section-padding bg-gradient-cursor'    />;

        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
              Simple Pricing;
            </h2>;
<<<<<<< HEAD
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />;
                </p>              </Card>              Comprehensive Performance Metrics;
=======
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Choose the monitoring plan that best fits your website performance;
              needs.;
            </p>;
          </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing.map ((plan, index) => (              Simple Pricing;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </h2>;
            <p className=\"text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed\"    />;
              Track all the metrics that matter for your website's performance and user experience.;
            </p>;
          </div>;
          <div className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6\"    />;

            {metrics.map ((metric, index) => (}
              <Card;}
                key={index}

                className={`card-hover border-gradient-blue ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}

                style={{ animationDelay: `${index * 0.1}s` ,
}
                  />;
                {plan.popular && (<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'    />;
                    <span className='bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      Most Popular;
<<<<<<< HEAD
                    </span>;}
                  </div>;}
                )}

<<<<<<< HEAD
=======
<div className='text-center mb-8'    />
                  <h3 className='text-2xl font-bold text-white mb-4'    />
=======
                    </span>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 4'>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {plan.name}
                  </h3>;
                  <div className='mb - 6'    />;
                    <span className='text - 4xl font - bold text - white'    />;

                      {plan.price}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className={`card-hover border-gradient-blue ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
<<<<<<< HEAD
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
=======

                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium'>                      Most Popular
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </span>
                    <span className='text-gray-400'    />{plan.period}</span>
                  </div>
                  <p className='text-gray-400'    />{plan.description}</p>
>>>>>>> origin/chore/fix-lint-and-merge
                </div>
                <ul className='space-y-4 mb-8'    />
                  {plan.features.map((feature, featureIndex) => (}
                    <li;}
key={featureIndex}
                      className='flex items-center text-gray-300'
                        />
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0'    />

<<<<<<< HEAD
<<<<<<< HEAD
                <ul className=space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                      {plan.price}</span>;
                    <span className='text-gray-400'>{plan.period}</span>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}


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
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                      {feature}                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
=======
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-4'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='mb-6'>;
                    <span className='text-4xl font-bold text-white'>;
                      {plan && plan.price}
                    </span>;
                    <span className='text-gray-400'>{plan && plan.period}</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                  <p className=text-gray-400>{plan.description}</p>;
                </div>;
                <ul className='space-y-4 mb-8'>;
                  {plan.features.map((feature, featureIndex) => (<li;
                      key={featureIndex}
<<<<<<< HEAD
                      className=flex items-center text-gray-300;
                    >;
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
                      {feature}
                    </li>;
                  ))}

                <Button;
href='/contact'
                  size='lg'

                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover: from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                    />
                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2'    />
                </Button>
              </Card>

<<<<<<< HEAD
=======
            ),
}
>>>>>>> origin/chore/fix-lint-and-merge
          </div>;
        </div>;
      </section>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
              </Card>;
<<<<<<< HEAD

              </Card>;
                    <li key={featureIndex} className=flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 />
=======
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                      {feature}                  </div>;
                  <p className="text-gray-400">{plan && plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />;

                      {feature}
                    </li>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





                    </li>
                  ))}

                </ul>;


<<<<<<< HEAD
                      {feature}
                    </li>;
                  ))}
                </ul>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Button
                  href='/contact'
                  size='lg'

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {feature}

                      {feature}

                      {feature}

                    </li>
                  ))}
                </ul>
                <Button
<<<<<<< HEAD
                  href=/contact"
                  size="lg
                  className={`w-full ${plan.popular ? bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className=w-5 h-5 ml-2" />
                </Button>
=======
<<<<<<< HEAD
                  href='/contact'
                  size='lg'
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  href="/contact"
=======
                  href="/contact"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
=======
                </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started

                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>

                </Button>



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </Card>
            ))}
      {/* CTA Section */}

            >
              Schedule Demo
=======
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover: from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white,
}>

                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2'    />                </Button>                  href=\'/contact\';
                  size=\'lg\';
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover: from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white,
}>

                  Get Started;
                  <ArrowRight className=\"w-5 h-5 ml-2\"    />;
              </Card>;
            ))}
      {/* CTA Section */}
<<<<<<< HEAD
      {/* CTA Section */}
<section className='section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden'    />;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10'    />;
        <div className='container-cursor text-center relative z-10'    />;
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'    />;
          </h2>;
          <p className='text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'    />;
            Join thousands of businesses using our monitoring platform to keep;
            their websites fast and reliable.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'    />;
      <section className='section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden'    />;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10'    />;
        <div className='container-cursor text-center relative z-10'    />;
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'    />;
          </h2>;
          <p className='text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'    />;
            Join thousands of businesses using our monitoring platform to keep;
            their websites fast and reliable.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'    />;

            <Button;
href='/contact'
              size='lg'
            <Button;
href='/contact'
=======
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
      <section className='section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='container-cursor text-center relative z-10'>
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'>


            Ready to Monitor Your Website Performance?

<<<<<<< HEAD

            Ready to Monitor Your Website Performance?

            Ready to Monitor Your Website Performance?
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </h2>
          <p className='text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of businesses using our monitoring platform to keep
            their websites fast and reliable.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
<<<<<<< HEAD
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 shadow-2xl'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 shadow-2xl'>;
              Start Free Trial;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button
              href='/contact'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              variant='outline'
              size='lg'
<<<<<<< HEAD
              className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl'            >              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
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

              className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl'
                />
              Schedule Demo;
>>>>>>> origin/chore/fix-lint-and-merge
            </Button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </>
            <Button;
              href=/contact;
              size='lg';
            <Button;
              href=/contact;
              variant='outline';
              size=lg;
  )}
}
  )}
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl';
            >;
  );
}
}
  );
}
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  )}
  )
}
=======
    <   />
  );
}
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
