<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock } from 'lucide-react',

export default function WebsitePerformanceMonitorPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false),
  const [analysisResults, setAnalysisResults] = useState(null),
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function WebsitePerformanceMonitorPage() {_const [isAnalyzing, _setIsAnalyzing] = useState(false);
  const [analysisResults, _setAnalysisResults] = useState(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _features = [
    {
<<<<<<< HEAD
      icon: <Monitor className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Real-Time Monitoring',
      description: '24/7 monitoring of your website performance with instant alerts and notifications.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500'},
    {
      icon: <Gauge className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Performance Metrics',
      description: 'Comprehensive metrics including Core Web Vitals, page load times, and user experience scores.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <AlertTriangle className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Issue Detection',
      description: 'Automatically detect and alert on performance issues, downtime, and bottlenecks.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500'},
    {
      icon: <TrendingUp className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Performance Optimization',
      description: 'AI-powered recommendations to improve your website speed and user experience.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'}],

  const metrics = [
    {
      name: 'Core Web Vitals',
      description: 'LCP, FID, and CLS metrics that directly impact user experience and SEO rankings.',
      icon: '⚡',
      color: 'text-blue-400'
    },
    {
      name: 'Page Load Time',
      description: 'Comprehensive analysis of page load performance across different devices and locations.',
      icon: '🚀',
      color: 'text-green-400'
    },
    {
      name: 'Uptime Monitoring',
      description: '99.9% uptime monitoring with instant alerts for any downtime or performance issues.',
      icon: '🔄',
      color: 'text-purple-400'
    },
    {
      name: 'Mobile Performance',
      description: 'Mobile-first performance testing and optimization recommendations.',
      icon: '📱',
      color: 'text-orange-400'
    },
    {
      name: 'SEO Impact',
      description: 'Performance metrics that directly affect your search engine rankings and visibility.',
      icon: '🔍',
      color: 'text-cyan-400'
    },
    {
      name: 'User Experience',
      description: 'Real user experience metrics and conversion impact analysis.',
      icon: '👥',
      color: 'text-pink-400'
    }
  ],

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small websites and blogs',
      features: [
        '5 websites monitoredBasic performance metricsDaily monitoringEmail alertsBasic reportingCore Web Vitals tracking'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and e-commerce sites',
      features: [
        '25 websites monitoredAdvanced performance metricsReal-time monitoringSMS & email alertsAdvanced reportingPerformance optimization tipsAPI accessTeam collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with critical performance requirements',
      features: [
        'Unlimited websitesEnterprise-grade monitoringCustom alerting rules24/7 supportCustom integrationsWhite-label reportingSLA guaranteesOn-premise options'
      ],
      popular: false
    }
  ],

  const handleAnalyzeWebsite = async () => {
    setIsAnalyzing(true),
=======
      icon: <Monitor className="w-8 h-8 text-white" />, _title: 'Real-Time Monitoring', _description: '24/7 monitoring of your website performance with instant alerts and notifications.', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _gradient: 'from-blue-400 to-cyan-500'},
    {_icon: <Gauge className="w-8 h-8 text-white" />, _title: 'Performance Metrics', _description: 'Comprehensive metrics including Core Web Vitals, _page load times, _and user experience scores.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <AlertTriangle className="w-8 h-8 text-white" />, _title: 'Issue Detection', _description: 'Automatically detect and alert on performance issues, _downtime, _and bottlenecks.', _color: 'bg-gradient-to-br from-orange-500 to-red-600', _gradient: 'from-orange-400 to-red-500'},
    {_icon: <TrendingUp className="w-8 h-8 text-white" />, _title: 'Performance Optimization', _description: 'AI-powered recommendations to improve your website speed and user experience.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'}];

  const _metrics = [
    {_name: 'Core Web Vitals', _description: 'LCP, _FID, _and CLS metrics that directly impact user experience and SEO rankings.', _icon: '⚡', _color: 'text-blue-400'},
    {_name: 'Page Load Time', _description: 'Comprehensive analysis of page load performance across different devices and locations.', _icon: '🚀', _color: 'text-green-400'},
    {_name: 'Uptime Monitoring', _description: '99.9% uptime monitoring with instant alerts for any downtime or performance issues.', _icon: '🔄', _color: 'text-purple-400'},
    {_name: 'Mobile Performance', _description: 'Mobile-first performance testing and optimization recommendations.', _icon: '📱', _color: 'text-orange-400'},
    {_name: 'SEO Impact', _description: 'Performance metrics that directly affect your search engine rankings and visibility.', _icon: '🔍', _color: 'text-cyan-400'},
    {_name: 'User Experience', _description: 'Real user experience metrics and conversion impact analysis.', _icon: '👥', _color: 'text-pink-400'}
  ];

  const _pricing = [
    {_name: 'Starter', _price: '$29', _period: '/month', _description: 'Perfect for small websites and blogs', _features: [
        '5 websites monitored', _'Basic performance metrics', _'Daily monitoring', _'Email alerts', _'Basic reporting', _'Core Web Vitals tracking'
      ], _popular: false},
    {_name: 'Professional', _price: '$79', _period: '/month', _description: 'Ideal for growing businesses and e-commerce sites', _features: [
        '25 websites monitored', _'Advanced performance metrics', _'Real-time monitoring', _'SMS & email alerts', _'Advanced reporting', _'Performance optimization tips', _'API access', _'Team collaboration'
      ], _popular: true},
    {_name: 'Enterprise', _price: '$199', _period: '/month', _description: 'For large organizations with critical performance requirements', _features: [
        'Unlimited websites', _'Enterprise-grade monitoring', _'Custom alerting rules', _'24/7 support', _'Custom integrations', _'White-label reporting', _'SLA guarantees', _'On-premise options'
      ], _popular: false}
  ];

  const _handleAnalyzeWebsite = async () => {_setIsAnalyzing(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    // Simulate website analysis
    setTimeout__(() => {
      setAnalysisResults({
<<<<<<< HEAD
        url: 'https://example.com',
        overallScore: 87,
        lcp: '2.1s',
        fid: '45ms',
        cls: '0.08',
        loadTime: '1.8s',
        recommendations: [
          'Optimize images and implement lazy loadingMinimize render-blocking resourcesEnable compression and cachingConsider using a CDN for global performance'
        ]
      }),
      setIsAnalyzing(false)
    }, 4000)
  },
=======
        url: 'https://example.com', _overallScore: 87, _lcp: '2.1s', _fid: '45ms', _cls: '0.08', _loadTime: '1.8s', _recommendations: [
          'Optimize images and implement lazy loading', _'Minimize render-blocking resources', _'Enable compression and caching', _'Consider using a CDN for global performance'
        ]});
      setIsAnalyzing(false);
    }, 4000);
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
        <title>Website Performance Monitor - Zion Tech Group | Real-Time Website Monitoring Tool</title>
        <meta name=&quot;description&quot; content=&quot;Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Website Performance Monitor - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Real-time website performance monitoring with Core Web Vitals tracking and optimization recommendations.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />
=======
      {_/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        <div className=&quot;relative z-10 container-cursor text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6&quot;>
            <Activity className=&quot;w-4 h-4 mr-2&quot; />
            Real-Time Performance Monitoring
          </div>
          <h1 className=&quot;text-responsive-xl font-black mb-8 gradient-text text-shadow-lg&quot;>
            Website Performance Monitor
          </h1>
          <p className=&quot;text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12&quot;>
            Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, 
            and AI-powered optimization recommendations. Never let performance issues impact your users again.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
<<<<<<< HEAD
              onClick={handleAnalyzeWebsite}
              size=&quot;lg&quot;
              className=&quot;bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow&quot;
              disabled={isAnalyzing}
=======
              onClick={_handleAnalyzeWebsite}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow"
              disabled={_isAnalyzing}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_isAnalyzing ? (
                <>
                  <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&quot; />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className=&quot;w-5 h-5 mr-2&quot; />
                  Analyze Website
                </>
              )}
            </Button>
            <Button
              href=&quot;#pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-2xl&quot;
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Features Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Powerful Monitoring Features
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Our performance monitoring platform provides everything you need to keep your website fast and reliable.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {features.map((feature, index) => (
              <Card
                key={index}
                className=&quot;card-hover group border-gradient-blue&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_features.map(_(feature, _index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {_feature.icon}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                    <div className={_`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
<<<<<<< HEAD
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-2xl font-bold mb-4 text-white&quot;>
                      {feature.title}
                    </h3>
                    <p className=&quot;text-gray-400 leading-relaxed&quot;>
                      {feature.description}
=======
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {_feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {_feature.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Metrics Section */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Metrics Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Comprehensive Performance Metrics
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Track all the metrics that matter for your website's performance and user experience.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue text-center&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;text-4xl mb-4&quot;>{metric.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${metric.color}`}>{metric.name}</h3>
                <p className=&quot;text-gray-400 text-sm leading-relaxed&quot;>{metric.description}</p>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_metrics.map(_(metric, _index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{_metric.icon}</div>
                <h3 className={_`text-xl font-bold mb-3 ${metric.color}`}>{_metric.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{_metric.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Demo Analysis Section */}
      {analysisResults && (
        <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
          <div className=&quot;container-cursor&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Demo Analysis Section */}
      {_analysisResults && (
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Performance Analysis Results
              </h2>
              <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
                Here's a sample analysis of a website. Get real-time insights for your own website.
              </p>
            </div>
            
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              {/* Score Card */}
<<<<<<< HEAD
              <Card className=&quot;border-gradient-blue text-center&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Overall Performance Score</h3>
                <div className=&quot;text-6xl font-bold text-blue-400 mb-4&quot;>{analysisResults.overallScore}/100</div>
                <div className=&quot;w-32 h-32 mx-auto mb-6&quot;>
                  <svg className=&quot;w-full h-full transform -rotate-90&quot; viewBox=&quot;0 0 36 36&quot;>
                    <path
                      d=&quot;M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831&quot;
                      fill=&quot;none&quot;
                      stroke=&quot;currentColor&quot;
                      strokeWidth=&quot;2&quot;
                      strokeDasharray={`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className=&quot;text-blue-500&quot;
=======
              <Card className="border-gradient-blue text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall Performance Score</h3>
                <div className="text-6xl font-bold text-blue-400 mb-4">{_analysisResults.overallScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={_`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-blue-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </svg>
                </div>
                <p className=&quot;text-gray-400&quot;>Good performance with room for improvement</p>
              </Card>

<<<<<<< HEAD
              {/* Metrics Card */}
              <Card className=&quot;border-gradient-blue&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Core Web Vitals</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>LCP (Largest Contentful Paint)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.lcp) < 2.5 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.lcp}
                    </span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>FID (First Input Delay)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.fid) < 100 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.fid}
                    </span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>CLS (Cumulative Layout Shift)</span>
                    <span className={`font-bold ${parseFloat(analysisResults.cls) < 0.1 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.cls}
                    </span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Page Load Time</span>
                    <span className={`font-bold ${parseFloat(analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}>
                      {analysisResults.loadTime}
=======
              {_/* Metrics Card */}
              <Card className="border-gradient-blue">
                <h3 className="text-2xl font-bold mb-6 text-white">Core Web Vitals</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">LCP (Largest Contentful Paint)</span>
                    <span className={_`font-bold ${parseFloat(analysisResults.lcp) < 2.5 ? 'text-green-400' : 'text-orange-400'}`}>
                      {_analysisResults.lcp}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">FID (First Input Delay)</span>
                    <span className={_`font-bold ${parseFloat(analysisResults.fid) < 100 ? 'text-green-400' : 'text-orange-400'}`}>
                      {_analysisResults.fid}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CLS (Cumulative Layout Shift)</span>
                    <span className={_`font-bold ${parseFloat(analysisResults.cls) < 0.1 ? 'text-green-400' : 'text-orange-400'}`}>
                      {_analysisResults.cls}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Page Load Time</span>
                    <span className={_`font-bold ${parseFloat(analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}>
                      {_analysisResults.loadTime}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </div>
                </div>
              </Card>
            </div>

<<<<<<< HEAD
            {/* Recommendations */}
            <Card className=&quot;border-gradient-blue mt-8&quot;>
              <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Optimization Recommendations</h3>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className=&quot;flex items-start space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                    <span className=&quot;text-gray-300&quot;>{rec}</span>
=======
            {_/* Recommendations */}
            <Card className="border-gradient-blue mt-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {_analysisResults.recommendations.map(_(rec, _index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{_rec}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}

<<<<<<< HEAD
      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Simple Pricing
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Choose the monitoring plan that best fits your website performance needs.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricing.map((plan, index) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricing.map(_(plan, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Card
                key={index}
                className={_`card-hover border-gradient-blue ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
<<<<<<< HEAD
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium&quot;>
=======
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Most Popular
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{plan.name}</h3>
                  <div className=&quot;mb-6&quot;>
                    <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                    <span className=&quot;text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 mr-3 flex-shrink-0&quot; />
                      {feature}
=======
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{_plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{_plan.price}</span>
                    <span className="text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-400">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>

                <Button
<<<<<<< HEAD
                  href=&quot;/contact&quot;
                  size=&quot;lg&quot;
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
=======
                  href="/contact"
                  size="lg"
                  className={_`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Get Started
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
      {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
=======
      <section className=&quot;section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;container-cursor text-center relative z-10&quot;>
          <h2 className=&quot;text-responsive-lg font-bold text-white mb-8 text-shadow-lg&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Ready to Monitor Your Website Performance?
          </h2>
          <p className=&quot;text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of businesses using our monitoring platform to keep their websites fast and reliable.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-blue-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl&quot;
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}