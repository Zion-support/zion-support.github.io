<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react',

export default function SEOAnalyzerToolPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false),
  const [analysisResults, setAnalysisResults] = useState(null),
  const [url, setUrl] = useState(''),
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function SEOAnalyzerToolPage() {_const [isAnalyzing, _setIsAnalyzing] = useState(false);
  const [analysisResults, _setAnalysisResults] = useState(null);
  const [url, _setUrl] = useState('');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _features = [
    {
<<<<<<< HEAD
      icon: <Search className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Comprehensive SEO Analysis',
      description: 'Deep analysis of on-page SEO factors, technical issues, and content optimization opportunities.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <Target className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Keyword Research',
      description: 'Discover high-value keywords and analyze search intent to optimize your content strategy.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500'},
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Competitive Analysis',
      description: 'Analyze your competitors\' SEO strategies and identify opportunities to outperform them.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'},
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and actionable insights to improve your search rankings.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500'}],

  const seoFactors = [
    {
      category: 'On-Page SEO',
      factors: [
        'Title tags optimizationMeta descriptionsHeader structure (H1, H2, H3)Content quality and lengthInternal linking structureImage optimization (alt tags)'
      ],
      icon: '📝',
      color: 'text-green-400'
    },
    {
      category: 'Technical SEO',
      factors: [
        'Page load speedMobile responsivenessXML sitemapRobots.txt configurationSSL certificateCore Web Vitals'
      ],
      icon: '⚙️',
      color: 'text-blue-400'
    },
    {
      category: 'Content SEO',
      factors: [
        'Keyword densityContent relevanceReadability scoresContent freshnessMultimedia optimizationSchema markup'
      ],
      icon: '📊',
      color: 'text-purple-400'
    },
    {
      category: 'Local SEO',
      factors: [
        'Google My BusinessLocal citationsReview managementLocal keyword targetingLocation-based contentLocal link building'
      ],
      icon: '📍',
      color: 'text-orange-400'
    }
  ],

  const pricing = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and bloggers',
      features: [
        '10 website analyses/monthBasic SEO metricsKeyword research (100 keywords)On-page SEO analysisEmail supportBasic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$89',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '50 website analyses/monthAdvanced SEO metricsKeyword research (500 keywords)Competitive analysisPriority supportAdvanced reportingAPI accessTeam collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: '/month',
      description: 'For large organizations and SEO agencies',
      features: [
        'Unlimited analysesEnterprise SEO metricsUnlimited keyword researchAdvanced competitive analysis24/7 dedicated supportCustom reportingWhite-label optionsCustom integrations'
      ],
      popular: false
    }
  ],

  const handleAnalyzeSEO = async () => {
    if (!url.trim()) return,
=======
      icon: <Search className="w-8 h-8 text-white" />, _title: 'Comprehensive SEO Analysis', _description: 'Deep analysis of on-page SEO factors, _technical issues, _and content optimization opportunities.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <Target className="w-8 h-8 text-white" />, _title: 'Keyword Research', _description: 'Discover high-value keywords and analyze search intent to optimize your content strategy.', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _gradient: 'from-blue-400 to-cyan-500'},
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'Competitive Analysis', _description: 'Analyze your competitors\' SEO strategies and identify opportunities to outperform them.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'AI-Powered Insights', _description: 'Get intelligent recommendations and actionable insights to improve your search rankings.', _color: 'bg-gradient-to-br from-orange-500 to-red-600', _gradient: 'from-orange-400 to-red-500'}];

  const _seoFactors = [
    {_category: 'On-Page SEO', _factors: [
        'Title tags optimization', _'Meta descriptions', _'Header structure (H1, _H2, _H3)', _'Content quality and length', _'Internal linking structure', _'Image optimization (alt tags)'
      ], _icon: '📝', _color: 'text-green-400'},
    {_category: 'Technical SEO', _factors: [
        'Page load speed', _'Mobile responsiveness', _'XML sitemap', _'Robots.txt configuration', _'SSL certificate', _'Core Web Vitals'
      ], _icon: '⚙️', _color: 'text-blue-400'},
    {_category: 'Content SEO', _factors: [
        'Keyword density', _'Content relevance', _'Readability scores', _'Content freshness', _'Multimedia optimization', _'Schema markup'
      ], _icon: '📊', _color: 'text-purple-400'},
    {_category: 'Local SEO', _factors: [
        'Google My Business', _'Local citations', _'Review management', _'Local keyword targeting', _'Location-based content', _'Local link building'
      ], _icon: '📍', _color: 'text-orange-400'}
  ];

  const _pricing = [
    {_name: 'Starter', _price: '$39', _period: '/month', _description: 'Perfect for small businesses and bloggers', _features: [
        '10 website analyses/month', _'Basic SEO metrics', _'Keyword research (100 keywords)', _'On-page SEO analysis', _'Email support', _'Basic reporting'
      ], _popular: false},
    {_name: 'Professional', _price: '$89', _period: '/month', _description: 'Ideal for growing businesses and agencies', _features: [
        '50 website analyses/month', _'Advanced SEO metrics', _'Keyword research (500 keywords)', _'Competitive analysis', _'Priority support', _'Advanced reporting', _'API access', _'Team collaboration'
      ], _popular: true},
    {_name: 'Enterprise', _price: '$249', _period: '/month', _description: 'For large organizations and SEO agencies', _features: [
        'Unlimited analyses', _'Enterprise SEO metrics', _'Unlimited keyword research', _'Advanced competitive analysis', _'24/7 dedicated support', _'Custom reporting', _'White-label options', _'Custom integrations'
      ], _popular: false}
  ];

  const _handleAnalyzeSEO = async () => {_if (!url.trim()) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsAnalyzing(true),
    // Simulate SEO analysis
    setTimeout__(() => {
      setAnalysisResults({
        url: url, _overallScore: 78, _onPageScore: 82, _technicalScore: 75, _contentScore: 80, _mobileScore: 85, _issues: [
          { type: 'error', _message: 'Missing meta description', _priority: 'high'},
          {_type: 'warning', _message: 'Title tag too long (65 characters)', _priority: 'medium'},
          {_type: 'info', _message: 'Consider adding more internal links', _priority: 'low'}
        ],
        recommendations: [
          'Optimize meta descriptions for better click-through ratesImprove page load speed by optimizing imagesAdd more relevant internal links to improve site structureImplement schema markup for rich snippets'
        ],
        keywords: [
          {_keyword: 'website optimization', _volume: '12K', _difficulty: 'medium'},
          {_keyword: 'SEO tools', _volume: '8K', _difficulty: 'low'},
          {_keyword: 'search engine optimization', _volume: '15K', _difficulty: 'high'}
        ]
      }),
      setIsAnalyzing(false)
    }, 4000)
  },

  return (
    <>
      <Head>
        <title>SEO Analyzer Tool - Zion Tech Group | Professional SEO Analysis & Optimization</title>
        <meta name=&quot;description&quot; content=&quot;Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve search rankings.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;SEO Analyzer Tool - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Professional SEO analysis tool with comprehensive insights and optimization recommendations.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />
=======
      {_/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        <div className=&quot;relative z-10 container-cursor text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6&quot;>
            <Search className=&quot;w-4 h-4 mr-2&quot; />
            Professional SEO Analysis
          </div>
          <h1 className=&quot;text-responsive-xl font-black mb-8 gradient-text text-shadow-lg&quot;>
            SEO Analyzer Tool
          </h1>
          <p className=&quot;text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12&quot;>
            Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, 
            keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.
          </p>
          
<<<<<<< HEAD
          {/* URL Input */}
          <div className=&quot;max-w-2xl mx-auto mb-8&quot;>
            <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
              <input
                type=&quot;url&quot;
                placeholder=&quot;Enter your website URL (e.g., https://example.com)&quot;
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className=&quot;flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent&quot;
              />
              <Button
                onClick={handleAnalyzeSEO}
                size=&quot;lg&quot;
                className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap&quot;
                disabled={isAnalyzing || !url.trim()}
=======
          {_/* window.URL Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter your website window.URL (e.g., https://example.com)"
                value={_url}
                onChange={_(_e) => setUrl(e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button
                onClick={_handleAnalyzeSEO}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap"
                disabled={_isAnalyzing || !url.trim()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_isAnalyzing ? (
                  <>
                    <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&quot; />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className=&quot;w-5 h-5 mr-2&quot; />
                    Analyze SEO
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;#pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl&quot;
            >
              View Pricing
            </Button>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl&quot;
            >
              Schedule Demo
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
              Powerful SEO Features
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {features.map((feature, index) => (
              <Card
                key={index}
                className=&quot;card-hover group border-gradient-green&quot;
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
                className="card-hover group border-gradient-green"
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
      {/* SEO Factors Section */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* SEO Factors Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Comprehensive SEO Analysis
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {seoFactors.map((category, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-green&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-center mb-6&quot;>
                  <div className=&quot;text-3xl mr-4&quot;>{category.icon}</div>
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.category}</h3>
                </div>
                <ul className=&quot;space-y-3&quot;>
                  {category.factors.map((factor, factorIndex) => (
                    <li key={factorIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                      {factor}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_seoFactors.map(_(category, _index) => (_<Card
                key={index}
                className="card-hover border-gradient-green"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{_category.icon}</div>
                  <h3 className={_`text-xl font-bold ${category.color}`}>{_category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {_category.factors.map((factor, _factorIndex) => (
                    <li key={factorIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {_factor}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Demo Analysis Results */}
      {analysisResults && (
        <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
          <div className=&quot;container-cursor&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Demo Analysis Results */}
      {_analysisResults && (
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                SEO Analysis Results
              </h2>
              <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
                Here's a sample analysis of a website. Get comprehensive insights for your own website.
              </p>
            </div>
            
            <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8&quot;>
              {/* Overall Score */}
<<<<<<< HEAD
              <Card className=&quot;border-gradient-green text-center&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Overall SEO Score</h3>
                <div className=&quot;text-6xl font-bold text-green-400 mb-4&quot;>{analysisResults.overallScore}/100</div>
                <div className=&quot;w-32 h-32 mx-auto mb-6&quot;>
                  <svg className=&quot;w-full h-full transform -rotate-90&quot; viewBox=&quot;0 0 36 36&quot;>
                    <path
                      d=&quot;M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831&quot;
                      fill=&quot;none&quot;
                      stroke=&quot;currentColor&quot;
                      strokeWidth=&quot;2&quot;
                      strokeDasharray={`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className=&quot;text-green-500&quot;
=======
              <Card className="border-gradient-green text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall SEO Score</h3>
                <div className="text-6xl font-bold text-green-400 mb-4">{_analysisResults.overallScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={_`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-green-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </svg>
                </div>
                <p className=&quot;text-gray-400&quot;>Good SEO foundation with room for improvement</p>
              </Card>

<<<<<<< HEAD
              {/* Detailed Scores */}
              <Card className=&quot;border-gradient-green&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Detailed Scores</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>On-Page SEO</span>
                    <span className=&quot;font-bold text-green-400&quot;>{analysisResults.onPageScore}/100</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Technical SEO</span>
                    <span className=&quot;font-bold text-orange-400&quot;>{analysisResults.technicalScore}/100</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Content SEO</span>
                    <span className=&quot;font-bold text-blue-400&quot;>{analysisResults.contentScore}/100</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Mobile SEO</span>
                    <span className=&quot;font-bold text-green-400&quot;>{analysisResults.mobileScore}/100</span>
=======
              {_/* Detailed Scores */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Detailed Scores</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">On-Page SEO</span>
                    <span className="font-bold text-green-400">{_analysisResults.onPageScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technical SEO</span>
                    <span className="font-bold text-orange-400">{_analysisResults.technicalScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Content SEO</span>
                    <span className="font-bold text-blue-400">{_analysisResults.contentScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Mobile SEO</span>
                    <span className="font-bold text-green-400">{_analysisResults.mobileScore}/100</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </Card>

<<<<<<< HEAD
              {/* Issues */}
              <Card className=&quot;border-gradient-green&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Issues Found</h3>
                <div className=&quot;space-y-3&quot;>
                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className=&quot;flex items-start space-x-3&quot;>
                      {issue.type === 'error' ? (
                        <AlertTriangle className=&quot;w-5 h-5 text-red-400 mt-1 flex-shrink-0&quot; />
=======
              {_/* Issues */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Issues Found</h3>
                <div className="space-y-3">
                  {_analysisResults.issues.map(_(issue, _index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {_issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className=&quot;w-5 h-5 text-yellow-400 mt-1 flex-shrink-0&quot; />
                      ) : (
                        <CheckCircle className=&quot;w-5 h-5 text-blue-400 mt-1 flex-shrink-0&quot; />
                      )}
                      <div>
<<<<<<< HEAD
                        <span className=&quot;text-gray-300&quot;>{issue.message}</span>
                        <div className=&quot;text-xs text-gray-500 mt-1&quot;>Priority: {issue.priority}</div>
=======
                        <span className="text-gray-300">{_issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">Priority: {_issue.priority}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

<<<<<<< HEAD
            {/* Recommendations and Keywords */}
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              <Card className=&quot;border-gradient-green&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Optimization Recommendations</h3>
                <div className=&quot;space-y-3&quot;>
                  {analysisResults.recommendations.map((rec, index) => (
                    <div key={index} className=&quot;flex items-start space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                      <span className=&quot;text-gray-300&quot;>{rec}</span>
=======
            {_/* Recommendations and Keywords */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
                <div className="space-y-3">
                  {_analysisResults.recommendations.map(_(rec, _index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{_rec}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  ))}
                </div>
              </Card>

<<<<<<< HEAD
              <Card className=&quot;border-gradient-green&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Keyword Opportunities</h3>
                <div className=&quot;space-y-4&quot;>
                  {analysisResults.keywords.map((keyword, index) => (
                    <div key={index} className=&quot;border-b border-gray-700 pb-3 last:border-b-0&quot;>
                      <div className=&quot;flex justify-between items-center mb-2&quot;>
                        <span className=&quot;font-semibold text-white&quot;>{keyword.keyword}</span>
                        <span className=&quot;text-sm text-gray-400&quot;>Volume: {keyword.volume}</span>
                      </div>
                      <div className=&quot;flex justify-between items-center&quot;>
                        <span className=&quot;text-sm text-gray-400&quot;>Difficulty: {keyword.difficulty}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
=======
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Keyword Opportunities</h3>
                <div className="space-y-4">
                  {_analysisResults.keywords.map(_(keyword, _index) => (
                    <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">{_keyword.keyword}</span>
                        <span className="text-sm text-gray-400">Volume: {_keyword.volume}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Difficulty: {_keyword.difficulty}</span>
                        <span className={_`px-2 py-1 rounded text-xs ${
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          keyword.difficulty === 'low' ? 'bg-green-500/20 text-green-400' :
                          keyword.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'}`}>
                          {_keyword.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
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
              Choose the SEO analysis plan that best fits your business needs and goals.
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
                className={_`card-hover border-gradient-green ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
<<<<<<< HEAD
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium&quot;>
=======
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>

                <Button
<<<<<<< HEAD
                  href=&quot;/contact&quot;
                  size=&quot;lg&quot;
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
=======
                  href="/contact"
                  size="lg"
                  className={_`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
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
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
=======
      <section className=&quot;section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;container-cursor text-center relative z-10&quot;>
          <h2 className=&quot;text-responsive-lg font-bold text-white mb-8 text-shadow-lg&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Ready to Improve Your SEO Rankings?
          </h2>
          <p className=&quot;text-responsive-md text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of businesses using our SEO analyzer to improve their search rankings and drive more organic traffic.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-green-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-green-600 shadow-2xl&quot;
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}