import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Search, TrendingUp, Target, BarChart3, Globe, Zap, Users, CheckCircle, ArrowRight, Play, Star, Eye, Brain, Shield, Lock, Sparkles, ChartBar, Lightbulb, Rocket, Settings } from 'lucide-react',
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
      icon: <Search className="w-6 h-6 text-blue-400" />,
      tools: ['Long-tail keyword finderCompetitor keyword analysisSearch volume estimationKeyword difficulty scoringTrending keywords']
    },
    {
      category: 'On-Page SEO',
      icon: <Target className="w-6 h-6 text-green-400" />,
      tools: ['Content optimizationMeta tag generatorSchema markup builderInternal linking suggestionsImage optimization']
    },
    {
      category: 'Technical SEO',
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      tools: ['Site audit toolPage speed analyzerMobile optimizationCore Web VitalsXML sitemap generator']
    },
    {
      category: 'Analytics & Reporting',
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      tools: ['Ranking trackerTraffic analysisConversion trackingCompetitor monitoringCustom dashboards']    }
  ],

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small websites and blogs',
      features: [
        'Up to 5 websitesBasic keyword researchMonthly site auditsEmail supportBasic reportingMobile app access'
      ],
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 websitesAdvanced keyword researchWeekly site auditsPriority supportAdvanced reportingCompetitor analysisAPI accessWhite-label reports'
      ],
      popular: true,
      color: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited websitesFull SEO suiteDaily site auditsDedicated supportCustom reportingAdvanced analyticsSLA guaranteeOn-premise option'
      ],
      popular: false,
      color: 'border-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ],

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Traffic data integration' },
    { name: 'Google Search Console', icon: '🔍', description: 'Search performance data' },
    { name: 'WordPress', icon: '🔌', description: 'Plugin integration' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce optimization' },
    { name: 'HubSpot', icon: '📈', description: 'Marketing automation sync' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'Zapier', icon: '⚡', description: '500+ app integrations' },
    { name: 'API Access', icon: '🔑', description: 'Custom integrations' }
  ],

  const useCases = [
    {
      title: 'E-commerce Websites',
      description: 'Optimize product pages, category pages, and search functionality for better conversions.',
      icon: '🛍️',
      benefits: ['Higher search rankingsIncreased organic trafficBetter conversion ratesCompetitive advantage']
    },
    {
      title: 'Content Marketing',
      description: 'Optimize blog posts, articles, and content for search engines and user engagement.',
      icon: '📝',
      benefits: ['Better content visibilityHigher engagement ratesMore organic trafficAuthority building']
    },
    {
      title: 'Local Businesses',
      description: 'Improve local search visibility and attract customers in your area.',
      icon: '📍',
      benefits: ['Local search dominanceIncreased foot trafficBetter customer acquisitionCompetitive positioning']
    },
    {
      title: 'SaaS Companies',
      description: 'Optimize landing pages, feature pages, and documentation for better user acquisition.',
      icon: '💻',
      benefits: ['Higher conversion ratesBetter user experienceReduced acquisition costsMarket expansion']
    }
  ],

  const successMetrics = [
    { metric: 'Organic Traffic', value: '+150%', description: 'Average increase in organic traffic' },
    { metric: 'Search Rankings', value: '+45%', description: 'Improvement in search rankings' },
    { metric: 'Conversion Rate', value: '+80%', description: 'Increase in conversion rates' },
    { metric: 'ROI', value: '400%', description: 'Average return on investment' }
  ],
      icon: <Search className="w-8 h-8 text-white" />, _title: 'AI Keyword Research', _description: 'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _gradient: 'from-blue-400 to-cyan-500'},
    {_icon: <TrendingUp className="w-8 h-8 text-white" />, _title: 'Ranking Analytics', _description: 'Track your search rankings in real-time with comprehensive analytics and competitor insights.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <Target className="w-8 h-8 text-white" />, _title: 'Content Optimization', _description: 'AI-powered content analysis and optimization suggestions to improve search visibility.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'},
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'Technical SEO', _description: 'Comprehensive technical SEO audits with actionable recommendations for improvement.', _color: 'bg-gradient-to-br from-orange-500 to-red-600', _gradient: 'from-orange-400 to-red-500'},
    {_icon: <Globe className="w-8 h-8 text-white" />, _title: 'Local SEO', _description: 'Optimize for local search with location-based keyword research and citation management.', _color: 'bg-gradient-to-br from-teal-500 to-blue-600', _gradient: 'from-teal-400 to-blue-500'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'Automated Reports', _description: 'Generate comprehensive SEO reports automatically with actionable insights and recommendations.', _color: 'bg-gradient-to-br from-pink-500 to-rose-600', _gradient: 'from-pink-400 to-rose-500'}];

  const _seoTools = [
    {_category: 'Keyword Research', _icon: <Search className="w-6 h-6 text-blue-400" />, _tools: ['Long-tail keyword finder', _'Competitor keyword analysis', _'Search volume estimation', _'Keyword difficulty scoring', _'Trending keywords']},
    {_category: 'On-Page SEO', _icon: <Target className="w-6 h-6 text-green-400" />, _tools: ['Content optimization', _'Meta tag generator', _'Schema markup builder', _'Internal linking suggestions', _'Image optimization']},
    {_category: 'Technical SEO', _icon: <Settings className="w-6 h-6 text-purple-400" />, _tools: ['Site audit tool', _'Page speed analyzer', _'Mobile optimization', _'Core Web Vitals', _'XML sitemap generator']},
    {_category: 'Analytics & Reporting', _icon: <BarChart3 className="w-6 h-6 text-orange-400" />, _tools: ['Ranking tracker', _'Traffic analysis', _'Conversion tracking', _'Competitor monitoring', _'Custom dashboards']}
  ];

  const _pricingPlans = [
    {_name: 'Starter', _price: '$39', _period: '/month', _description: 'Perfect for small websites and blogs', _features: [
        'Up to 5 websites', _'Basic keyword research', _'Monthly site audits', _'Email support', _'Basic reporting', _'Mobile app access'
      ], _popular: false, _color: 'border-gray-600', _buttonColor: 'bg-gray-600 hover:bg-gray-700'},
    {_name: 'Professional', _price: '$129', _period: '/month', _description: 'Ideal for growing businesses and agencies', _features: [
        'Up to 25 websites', _'Advanced keyword research', _'Weekly site audits', _'Priority support', _'Advanced reporting', _'Competitor analysis', _'API access', _'White-label reports'
      ], _popular: true, _color: 'border-blue-500', _buttonColor: 'bg-blue-600 hover:bg-blue-700'},
    {_name: 'Enterprise', _price: '$399', _period: '/month', _description: 'For large organizations and enterprises', _features: [
        'Unlimited websites', _'Full SEO suite', _'Daily site audits', _'Dedicated support', _'Custom reporting', _'Advanced analytics', _'SLA guarantee', _'On-premise option'
      ], _popular: false, _color: 'border-purple-600', _buttonColor: 'bg-purple-600 hover:bg-purple-700'}
  ];

  const _integrations = [
    {_name: 'Google Analytics', _icon: '📊', _description: 'Traffic data integration'},
    {_name: 'Google Search Console', _icon: '🔍', _description: 'Search performance data'},
    {_name: 'WordPress', _icon: '🔌', _description: 'Plugin integration'},
    {_name: 'Shopify', _icon: '🛒', _description: 'E-commerce optimization'},
    {_name: 'HubSpot', _icon: '📈', _description: 'Marketing automation sync'},
    {_name: 'Slack', _icon: '💬', _description: 'Team notifications'},
    {_name: 'Zapier', _icon: '⚡', _description: '500+ app integrations'},
    {_name: 'API Access', _icon: '🔑', _description: 'Custom integrations'}
  ];

  const _useCases = [
    {_title: 'E-commerce Websites', _description: 'Optimize product pages, _category pages, _and search functionality for better conversions.', _icon: '🛍️', _benefits: ['Higher search rankings', _'Increased organic traffic', _'Better conversion rates', _'Competitive advantage']},
    {_title: 'Content Marketing', _description: 'Optimize blog posts, _articles, _and content for search engines and user engagement.', _icon: '📝', _benefits: ['Better content visibility', _'Higher engagement rates', _'More organic traffic', _'Authority building']},
    {_title: 'Local Businesses', _description: 'Improve local search visibility and attract customers in your area.', _icon: '📍', _benefits: ['Local search dominance', _'Increased foot traffic', _'Better customer acquisition', _'Competitive positioning']},
    {_title: 'SaaS Companies', _description: 'Optimize landing pages, _feature pages, _and documentation for better user acquisition.', _icon: '💻', _benefits: ['Higher conversion rates', _'Better user experience', _'Reduced acquisition costs', _'Market expansion']}
  ];

  const _successMetrics = [
    {_metric: 'Organic Traffic', _value: '+150%', _description: 'Average increase in organic traffic'},
    {_metric: 'Search Rankings', _value: '+45%', _description: 'Improvement in search rankings'},
    {_metric: 'Conversion Rate', _value: '+80%', _description: 'Increase in conversion rates'},
    {_metric: 'ROI', _value: '400%', _description: 'Average return on investment'}
  ];

  return (
    <>
      <Head>
        <title>AI-Powered SEO Suite | Zion Tech Group - Advanced SEO Tools & Analytics</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive AI-powered SEO suite with keyword research, content optimization, technical SEO audits, and real-time analytics. Boost your search rankings and organic traffic.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI-Powered SEO Suite | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced SEO tools with AI-powered optimization, keyword research, and comprehensive analytics.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)]&quot; />        </div>
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6&quot;>
              <Sparkles className=&quot;w-4 h-4 mr-2&quot; />
              AI-Powered Search Engine Optimization
            </div>
          </div>
          
          <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight&quot;>
            AI-Powered SEO Suite
          </h1>
          <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed&quot;>
            Dominate search rankings with AI-powered SEO tools, comprehensive analytics, and intelligent optimization
          </p>

          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
            <Button
              href=&quot;#pricing&quot;
              size=&quot;lg&quot;
              className=&quot;bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;#demo&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white/20 hover:border-white/40 hover:bg-white/5&quot;
            >
              <Play className=&quot;w-5 h-5 mr-2&quot; />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400&quot;>+150%</div>
              <div className=&quot;text-gray-400&quot;>Organic Traffic</div>            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-green-400&quot;>+45%</div>
              <div className=&quot;text-gray-400&quot;>Search Rankings</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400&quot;>+80%</div>
              <div className=&quot;text-gray-400&quot;>Conversion Rate</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400&quot;>400%</div>
              <div className=&quot;text-gray-400&quot;>ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>              Powerful SEO Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Everything you need to dominate search rankings and drive organic traffic
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <Card
                key={index}
                className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className=&quot;relative&quot;>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300&quot;>
                  {feature.title}
                </h3>
                <p className=&quot;text-gray-400 leading-relaxed&quot;>
                  {feature.description}                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}
      <section className=&quot;py-24 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>              Comprehensive SEO Tools
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Professional-grade tools used by top SEO agencies and marketers
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {seoTools.map((tool, index) => (
              <Card                key={index}
                className=&quot;group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;flex-shrink-0&quot;>{tool.icon}</div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300&quot;>
                      {tool.category}
                    </h3>
                    <div className=&quot;grid grid-cols-1 gap-2&quot;>
                      {tool.tools.map((toolName, toolIndex) => (
                        <div key={toolIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-blue-400 mr-2 flex-shrink-0&quot; />
                          {toolName}                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>              Proven Results
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              See the impact our AI-powered SEO suite has on businesses
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {successMetrics.map((metric, index) => (              <Card
                key={index}
                className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;
              >
                <div className=&quot;text-4xl font-bold mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300&quot;>
                  {metric.value}
                </div>
                <h3 className=&quot;text-xl font-bold mb-2 text-white&quot;>{metric.metric}</h3>
                <p className=&quot;text-gray-400 text-sm&quot;>{metric.description}</p>              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className=&quot;py-24 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>              Use Cases
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Trusted by businesses across industries for SEO success
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {useCases.map((useCase, index) => (
              <Card                key={index}
                className=&quot;group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;text-4xl&quot;>{useCase.icon}</div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300&quot;>
                      {useCase.title}
                    </h3>
                    <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                      {useCase.description}
                    </p>
                    <div className=&quot;grid grid-cols-2 gap-2&quot;>
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                          <TrendingUp className=&quot;w-4 h-4 text-blue-400 mr-2 flex-shrink-0&quot; />
                          {benefit}                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>              Simple, Transparent Pricing
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Choose the plan that fits your SEO needs
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingPlans.map((plan, index) => (              <Card
                key={index}
                className={_`relative group ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} border ${_plan.color} hover:border-blue-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                  <div className=&quot;text-4xl font-bold text-white mb-2&quot;>
                    {plan.price}<span className=&quot;text-lg text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 mr-3 flex-shrink-0&quot; />
                      {feature}                    </li>
                  ))}
                </ul>

                <Button
                  href=&quot;/contact&quot;
                  className={`w-full ${plan.buttonColor} text-white`}
                  size=&quot;lg&quot;                >
                  Get Started
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className=&quot;py-24 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>              Seamless Integrations
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;>
            {integrations.map((integration, index) => (              <Card
                key={index}
                className=&quot;text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;
              >
                <div className=&quot;text-4xl mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                  {integration.icon}
                </div>
                <h3 className=&quot;font-semibold text-white mb-2&quot;>{integration.name}</h3>
                <p className=&quot;text-sm text-gray-400&quot;>{integration.description}</p>              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
      <section className=&quot;py-24 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
            Ready to Dominate Search Rankings?
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of businesses who are already ranking higher and driving more organic traffic.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-blue-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;#demo&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl&quot;
            >
              <Play className=&quot;w-5 h-5 mr-2&quot; />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}