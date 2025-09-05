import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { TrendingUp, BarChart3, DollarSign, Users, Globe, Target, Clock, Award, ArrowRight, ExternalLink, PieChart, LineChart, Activity, Zap } from 'lucide-react',

export default function MarketResearchPage() {
  const marketSegments = [
    {
      name: 'AI & Machine Learning',
      marketSize: '$15.7B',
      growthRate: '23.4% CAGR',
      keyTrends: [
        'Generative AI adoption acceleratingAI-powered automation increasingNatural language processing growthComputer vision applications expanding'
      ],
      topPlayers: ['OpenAIAnthropicGoogle AIMicrosoft Azure AI'],
      opportunities: [
        'AI content generation toolsPredictive analytics platformsAutomated customer serviceIntelligent process automation'
      ],
      color: 'from-fuchsia-500 to-purple-600',
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />
    },
    {
      name: 'Database & Analytics',
      marketSize: '$8.9B',
      growthRate: '18.7% CAGR',
      keyTrends: [
        'Real-time analytics demandCloud database migrationData privacy regulationsPerformance optimization focus'
      ],
      topPlayers: ['DataDogNew RelicSolarWindsSplunk'],
      opportunities: [
        'Database performance monitoringReal-time analytics dashboardsData visualization toolsQuery optimization platforms'
      ],
      color: 'from-cyan-500 to-blue-600',
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />
    },
    {
      name: 'Security & Identity',
      marketSize: '$12.3B',
      growthRate: '21.2% CAGR',
      keyTrends: [
        'Zero-trust security adoptionMulti-factor authentication growthAPI security concernsCompliance requirements increasing'
      ],
      topPlayers: ['OktaAuth0Ping IdentityOneLogin'],
      opportunities: [
        'Identity verification platformsAPI security gatewaysCompliance monitoring toolsThreat detection systems'
      ],
      color: 'from-green-500 to-emerald-600',
      icon: <Target className=&quot;w-8 h-8 text-white&quot; />
    },
    {
      name: 'Business Intelligence',
      marketSize: '$22.1B',
      growthRate: '19.8% CAGR',
      keyTrends: [
        'Self-service BI adoptionReal-time data integrationMobile BI growthPredictive analytics demand'
      ],
      topPlayers: ['TableauPower BILookerQlik'],
      opportunities: [
        'Custom dashboard buildersData integration platformsMobile analytics solutionsPredictive modeling tools'
      ],
      color: 'from-orange-500 to-red-600',
      icon: <Activity className=&quot;w-8 h-8 text-white&quot; />
    },
    {
      name: 'API Management',
      marketSize: '$6.8B',
      growthRate: '24.1% CAGR',
      keyTrends: [
        'Microservices architecture growthAPI-first developmentRate limiting importanceDeveloper experience focus'
      ],
      topPlayers: ['KongTykAWS API GatewayAzure API Management'],
      opportunities: [
        'API rate limiting servicesDeveloper portal platformsAPI analytics toolsWebhook management systems'
      ],
      color: 'from-indigo-500 to-purple-600',
      icon: <Globe className=&quot;w-8 h-8 text-white&quot; />
    },
    {
      name: 'User Experience Analytics',
      marketSize: '$9.4B',
      growthRate: '20.5% CAGR',
      keyTrends: [
        'Privacy-compliant trackingReal-time user insightsConversion optimization focusMobile app analytics growth'
      ],
      topPlayers: ['HotjarFullStoryMixpanelAmplitude'],
      opportunities: [
        'Heatmap and session recordingA/B testing platformsUser journey mapping toolsConversion funnel analytics'
      ],
      color: 'from-teal-500 to-cyan-600',
      icon: <Users className=&quot;w-8 h-8 text-white&quot; />
    }
  ],

  const competitiveAnalysis = [
    {
      company: 'Enterprise Giants',
      examples: ['SalesforceMicrosoftOracleSAP'],
      strengths: [
        'Extensive resources and R&DEstablished customer baseComprehensive feature setsGlobal presence and support'
      ],
      weaknesses: [
        'High pricing and complexitySlow innovation cyclesDifficult customizationLong implementation times'
      ],
      marketShare: '45-60%',
      pricing: 'High ($1000+/month)'
    },
    {
      company: 'Mid-Market Leaders',
      examples: ['HubSpotAtlassianSlackZoom'],
      strengths: [
        'Balanced features and pricingStrong user experienceActive community supportRegular feature updates'
      ],
      weaknesses: [
        'Limited customization optionsGrowing complexity over timeDependency on integrationsScalability challenges'
      ],
      marketShare: '25-35%',
      pricing: 'Medium ($100-500/month)'
    },
    {
      company: 'Micro SaaS Innovators',
      examples: ['ZapierNotionAirtableLinear'],
      strengths: [
        'Focused feature setsFast innovation cyclesAffordable pricingEasy implementation'
      ],
      weaknesses: [
        'Limited feature scopeSmaller support teamsIntegration dependenciesMarket volatility risk'
      ],
      marketShare: '15-25%',
      pricing: 'Low ($10-100/month)'
    }
  ],

  const marketTrends = [
    {
      trend: 'AI-First Approach',
      description: 'Companies prioritizing AI capabilities in their products',
      impact: 'High',
      timeline: '2024-2026',
      examples: [
        'AI-powered content generationIntelligent automationPredictive analyticsNatural language interfaces'
      ],
      opportunities: 'AI integration services, custom AI models, AI consulting'
    },
    {
      trend: 'Privacy-First Design',
      description: 'Growing focus on data privacy and compliance',
      impact: 'High',
      timeline: '2024-2027',
      examples: [
        'GDPR compliance toolsPrivacy analytics platformsData anonymization servicesConsent management systems'
      ],
      opportunities: 'Privacy compliance tools, data governance platforms, audit services'
    },
    {
      trend: 'API-First Architecture',
      description: 'Shift towards API-centric application development',
      impact: 'Medium',
      timeline: '2024-2026',
      examples: [
        'API management platformsDeveloper experience toolsAPI analytics and monitoringIntegration platforms'
      ],
      opportunities: 'API development tools, integration services, developer portals'
    },
    {
      trend: 'Real-Time Everything',
      description: 'Demand for real-time data and analytics',
      impact: 'Medium',
      timeline: '2024-2025',
      examples: [
        'Real-time dashboardsLive collaboration toolsInstant notificationsStreaming analytics'
      ],
      opportunities: 'Real-time platforms, streaming services, live collaboration tools'
    }
  ],

  const pricingStrategies = [
    {
      strategy: 'Value-Based Pricing',
      description: 'Pricing based on customer value and ROI',
      pros: [
        'Higher profit marginsCustomer alignmentScalable pricing modelCompetitive differentiation'
      ],
      cons: [
        'Complex pricing structureCustomer education requiredValue measurement challengesPricing optimization needed'
      ],
      bestFor: 'Enterprise solutions, high-value services, ROI-focused products'
    },
    {
      strategy: 'Usage-Based Pricing',
      description: 'Pricing based on actual usage or consumption',
      pros: [
        'Fair pricing modelEasy to understandScalable with growthLow barrier to entry'
      ],
      cons: [
        'Revenue predictability challengesComplex billing systemsUsage optimization neededCustomer cost management'
      ],
      bestFor: 'API services, storage platforms, compute resources'
    },
    {
      strategy: 'Freemium Model',
      description: 'Free basic tier with paid premium features',
      pros: [
        'Low customer acquisition costViral growth potentialLarge user baseEasy market entry'
      ],
      cons: [
        'Low conversion ratesRevenue per user challengesSupport cost managementFeature differentiation needed'
      ],
      bestFor: 'Consumer tools, productivity apps, collaboration platforms'
    }
  ],

  const investmentInsights = [
    {
      metric: 'Total VC Investment',
      value: '$45.2B',
      change: '+18.7% YoY',
      description: 'Venture capital investment in SaaS companies in 2024'
    },
    {
      metric: 'Average Series A',
      value: '$12.8M',
      change: '+22.3% YoY',
      description: 'Average Series A funding round for SaaS startups'
    },
    {
      metric: 'Exit Valuations',
      value: '8.2x ARR',
      change: '+15.4% YoY',
      description: 'Average exit valuation multiple based on annual recurring revenue'
    },
    {
      metric: 'Time to Profitability',
      value: '3.2 years',
      change: '-0.8 years YoY',
      description: 'Average time for SaaS companies to reach profitability'
    }
  ],

  return (
    <>
      <Head>
        <title>Market Research & Industry Insights | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive market research, competitive analysis, and industry insights for micro SaaS services. Data-driven market intelligence to inform your business decisions.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Market Research & Industry Insights | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive market research and competitive analysis for micro SaaS services.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />
        
        <div className=&quot;relative z-10 container-cursor text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6&quot;>
            <span className=&quot;w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse&quot; />
            Market Intelligence
          </div>
          <h1 className=&quot;text-responsive-xl font-black mb-8 gradient-text text-shadow-lg&quot;>
            Comprehensive Market Research & Industry Insights
          </h1>
          <p className=&quot;text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed&quot;>
            Data-driven market intelligence, competitive analysis, and industry trends to help you make informed decisions about your micro SaaS business strategy and market positioning.
          </p>
        </div>
      </section>

      {/* Investment Insights */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              Investment & Market Metrics
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Key investment metrics and market indicators for the SaaS industry to help you understand the current market landscape.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {investmentInsights.map((insight, index) => (
              <Card
                key={index}
                className=&quot;card-hover text-center border-gradient-blue&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;p-6&quot;>
                  <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{insight.value}</div>
                  <div className=&quot;text-sm text-gray-400 mb-3&quot;>{insight.metric}</div>
                  <div className=&quot;text-sm text-gray-300 mb-4&quot;>{insight.description}</div>
                  <div className=&quot;inline-flex items-center text-sm text-green-400&quot;>
                    <TrendingUp className=&quot;w-4 h-4 mr-1&quot; />
                    {insight.change}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              Market Segment Analysis
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Detailed analysis of key micro SaaS market segments with market size, growth rates, trends, and opportunities.
            </p>
          </div>

          <div className=&quot;space-y-8&quot;>
            {marketSegments.map((segment, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue overflow-hidden&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;p-8&quot;>
                  <div className=&quot;flex flex-col lg:flex-row gap-8&quot;>
                    {/* Segment Header */}
                    <div className=&quot;lg:w-1/3&quot;>
                      <div className=&quot;text-center lg:text-left&quot;>
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${segment.color} shadow-xl mx-auto lg:mx-0 mb-6`}>
                          {segment.icon}
                        </div>
                        <h3 className=&quot;text-2xl font-bold mb-3 text-white&quot;>
                          {segment.name}
                        </h3>
                        
                        {/* Market Data */}
                        <div className=&quot;space-y-3 text-sm mb-6&quot;>
                          <div className=&quot;flex items-center justify-between&quot;>
                            <span className=&quot;text-gray-400&quot;>Market Size:</span>
                            <span className=&quot;text-white font-semibold&quot;>{segment.marketSize}</span>
                          </div>
                          <div className=&quot;flex items-center justify-between&quot;>
                            <span className=&quot;text-gray-400&quot;>Growth Rate:</span>
                            <span className=&quot;text-green-400 font-semibold&quot;>{segment.growthRate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Market Analysis */}
                    <div className=&quot;lg:w-2/3&quot;>
                      <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                        {/* Key Trends */}
                        <div>
                          <h4 className=&quot;text-lg font-semibold text-white mb-4 flex items-center&quot;>
                            <TrendingUp className=&quot;w-5 h-5 mr-2 text-green-400&quot; />
                            Key Trends
                          </h4>
                          <ul className=&quot;space-y-2&quot;>
                            {segment.keyTrends.map((trend, trendIndex) => (
                              <li key={trendIndex} className=&quot;flex items-start text-gray-300 text-sm&quot;>
                                <span className=&quot;w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0&quot; />
                                {trend}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Top Players */}
                        <div>
                          <h4 className=&quot;text-lg font-semibold text-white mb-4 flex items-center&quot;>
                            <Award className=&quot;w-5 h-5 mr-2 text-yellow-400&quot; />
                            Top Players
                          </h4>
                          <ul className=&quot;space-y-2&quot;>
                            {segment.topPlayers.map((player, playerIndex) => (
                              <li key={playerIndex} className=&quot;flex items-start text-gray-300 text-sm&quot;>
                                <span className=&quot;w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0&quot; />
                                {player}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div className=&quot;mt-8 pt-6 border-t border-gray-700&quot;>
                        <h4 className=&quot;text-lg font-semibold text-white mb-4 flex items-center&quot;>
                          <Target className=&quot;w-5 h-5 mr-2 text-blue-400&quot; />
                          Market Opportunities
                        </h4>
                        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                          {segment.opportunities.map((opportunity, oppIndex) => (
                            <div key={oppIndex} className=&quot;flex items-start text-gray-300 text-sm&quot;>
                              <span className=&quot;w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0&quot; />
                              {opportunity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              Competitive Landscape Analysis
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Understanding the competitive landscape and positioning strategies for different types of SaaS companies.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            {competitiveAnalysis.map((analysis, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;p-6&quot;>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{analysis.company}</h3>
                  
                  {/* Examples */}
<<<<<<< HEAD
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                    <div className="text-sm text-gray-300">{analysis.examples.join()}</div>
=======
                  <div className=&quot;mb-6&quot;>
                    <h4 className=&quot;text-sm font-semibold text-gray-400 mb-2&quot;>Examples:</h4>
                    <div className=&quot;text-sm text-gray-300&quot;>{analysis.examples.join(', ')}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  </div>

                  {/* Market Share & Pricing */}
                  <div className=&quot;grid grid-cols-2 gap-4 mb-6 text-sm&quot;>
                    <div>
                      <span className=&quot;text-gray-400&quot;>Market Share:</span>
                      <div className=&quot;text-white font-semibold&quot;>{analysis.marketShare}</div>
                    </div>
                    <div>
                      <span className=&quot;text-gray-400&quot;>Pricing:</span>
                      <div className=&quot;text-white font-semibold&quot;>{analysis.pricing}</div>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>Strengths:</h4>
                    <ul className=&quot;space-y-1 text-xs text-gray-300&quot;>
                      {analysis.strengths.map((strength, strengthIndex) => (
                        <li key={strengthIndex} className=&quot;flex items-start&quot;>
                          <span className=&quot;w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0&quot; />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div>
                    <h4 className=&quot;text-sm font-semibold text-red-400 mb-2&quot;>Weaknesses:</h4>
                    <ul className=&quot;space-y-1 text-xs text-gray-300&quot;>
                      {analysis.weaknesses.map((weakness, weaknessIndex) => (
                        <li key={weaknessIndex} className=&quot;flex items-start&quot;>
                          <span className=&quot;w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0&quot; />
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              Emerging Market Trends
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Key trends shaping the micro SaaS landscape and creating new opportunities for innovation and growth.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {marketTrends.map((trend, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;p-6&quot;>
                  <div className=&quot;flex items-start justify-between mb-4&quot;>
                    <h3 className=&quot;text-xl font-bold text-white&quot;>{trend.trend}</h3>
                    <div className=&quot;flex items-center space-x-2&quot;>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        trend.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        trend.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {trend.impact} Impact
                      </span>
                      <span className=&quot;px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400&quot;>
                        {trend.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <p className=&quot;text-gray-300 mb-4&quot;>{trend.description}</p>
                  
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-gray-400 mb-2&quot;>Examples:</h4>
                    <ul className=&quot;space-y-1 text-xs text-gray-300&quot;>
                      {trend.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className=&quot;flex items-start&quot;>
                          <span className=&quot;w-1.5 h-1.5 bg-cursor-blue rounded-full mr-2 mt-1.5 flex-shrink-0&quot; />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>Opportunities:</h4>
                    <p className=&quot;text-xs text-gray-300&quot;>{trend.opportunities}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Strategies */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              Pricing Strategy Analysis
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Analysis of different pricing strategies used in the micro SaaS market and their implications for business success.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            {pricingStrategies.map((strategy, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;p-6&quot;>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{strategy.strategy}</h3>
                  <p className=&quot;text-gray-300 mb-6&quot;>{strategy.description}</p>
                  
                  {/* Pros */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>Pros:</h4>
                    <ul className=&quot;space-y-1 text-xs text-gray-300&quot;>
                      {strategy.pros.map((pro, proIndex) => (
                        <li key={proIndex} className=&quot;flex items-start&quot;>
                          <span className=&quot;w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0&quot; />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-red-400 mb-2&quot;>Cons:</h4>
                    <ul className=&quot;space-y-1 text-xs text-gray-300&quot;>
                      {strategy.cons.map((con, conIndex) => (
                        <li key={conIndex} className=&quot;flex items-start&quot;>
                          <span className=&quot;w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0&quot; />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Best For:</h4>
                    <p className=&quot;text-xs text-gray-300&quot;>{strategy.bestFor}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-dots opacity-10&quot; />
        <div className=&quot;container-cursor text-center relative z-10&quot;>
          <h2 className=&quot;text-responsive-lg font-bold text-white mb-8 text-shadow-lg&quot;>
            Ready to Apply This Market Intelligence?
          </h2>
          <p className=&quot;text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Use our market research and competitive analysis to inform your business strategy, pricing decisions, and market positioning.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row gap-6 justify-center">
=======
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow&quot;
            >
              Get Strategic Consultation
            </Button>
            <Button
              href=&quot;/services&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl&quot;
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}