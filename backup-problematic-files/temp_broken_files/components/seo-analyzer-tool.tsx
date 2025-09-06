import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react',

export default function SEOAnalyzerToolPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false),
  const [analysisResults, setAnalysisResults] = useState(null),
  const [url, setUrl] = useState(''),
  const features = [
    {
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
      icon: '',
      color: 'text-green-400'
    },
    {
      category: 'Technical SEO',
      factors: [
        'Page load speedMobile responsivenessXML sitemapRobots.txt configurationSSL certificateCore Web Vitals'
      ],
      icon: '',
      color: 'text-blue-400'
    },
    {
      category: 'Content SEO',
      factors: [
        'Keyword densityContent relevanceReadability scoresContent freshnessMultimedia optimizationSchema markup'
      ],
      icon: '',
      color: 'text-purple-400'
    },
    {
      category: 'Local SEO',
      factors: [
        'Google My BusinessLocal citationsReview managementLocal keyword targetingLocation-based contentLocal link building'
      ],
      icon: '',
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
    if (!url.trim() return,    
    setIsAnalyzing(true),
    // Simulate SEO analysis,
setTimeout_() => {
      setAnalysisResults({
        url: url, overallScore: 78, onPageScore: 82, technicalScore: 75, contentScore: 80, mobileScore: 85, issues: [
          { type: 'error', message: 'Missing meta description', priority: 'high'},
          {type: 'warning', message: 'Title tag too long (65 characters)', priority: 'medium'},
          {type: 'info', message: 'Consider adding more internal links', priority: 'low'}
        ],
        recommendations: [
          'Optimize meta descriptions for better click-through ratesImprove page load speed by optimizing imagesAdd more relevant internal links to improve site structureImplement schema markup for rich snippets'
        ],
        keywords: [
          {keyword: 'website optimization', volume: '12K', difficulty: 'medium'},
          {keyword: 'SEO tools', volume: '8K', difficulty: 'low'},
          {keyword: 'search engine optimization', volume: '15K', difficulty: 'high'}
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
        <meta name=&quot;twitter:card&quot; content=&quot;summarylarge_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_30%20%,rgba(34,197,94,0.08),transparent50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_70%80%,rgba(34,197,94,0.06),transparent50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />        
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

          {/* URL Input */}
          <div className=&quot;max-w-2xl mx-auto mb-8&quot;>
            <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
              <input,
type=&quot;url&quot;
                placeholder=&quot;Enter your website URL (e.g., https://example.com)&quot;
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className=&quot;flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent&quot;
              />
              <Button,
onClick={handleAnalyzeSEO}
                size=&quot;lg&quot;
                className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap&quot;
                disabled={isAnalyzing || !url.trim()}              >
                {isAnalyzing ? (
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
            <Button,
href=&quot;#pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl&quot;
            >
              View Pricing
            </Button>
            <Button,
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

      {/* Features Section */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Powerful SEO Features
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {features.map(feature, index) => (
              <Card,
key={index}
                className=&quot;card-hover group border-gradient-green&quot;
                style={ animationDelay: `${index * 0.1}s` }
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}                    </div>
                    <div className={_`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-2xl font-bold mb-4 text-white&quot;>
                      {feature.title}
                    </h3>
                    <p className=&quot;text-gray-400 leading-relaxed&quot;>
                      {feature.description}                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>;
        </div>;
      </section>;

      {/* SEO Factors Section */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Comprehensive SEO Analysis
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {seoFactors.map(category, index) => (
              <Card,
key={index}
                className=&quot;card-hover border-gradient-green&quot;
                style={ animationDelay: `${index * 0.1}s` }
              >
                <div className=&quot;flex items-center mb-6&quot;>
                  <div className=&quot;text-3xl mr-4&quot;>{category.icon}</div>
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.category}</h3>
                </div>
                <ul className=&quot;space-y-3&quot;>
                  {category.factors.map(factor, factorIndex) => (
                    <li key={factorIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                      {factor}                    </li>
                  )}
                </ul>;
              </Card>;
            )}
          </div>;
        </div>;
      </section>;

      {/* Demo Analysis Results */}
      {analysisResults && (
        <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
          <div className=&quot;container-cursor&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>                SEO Analysis Results
              </h2>
              <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
                Here's a sample analysis of a website. Get comprehensive insights for your own website.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8&quot;>
              {/* Overall Score */}
              <Card className=&quot;border-gradient-green text-center&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Overall SEO Score</h3>
                <div className=&quot;text-6xl font-bold text-green-400 mb-4&quot;>{analysisResults.overallScore}/100</div>
                <div className=&quot;w-32 h-32 mx-auto mb-6&quot;>
                  <svg className=&quot;w-full h-full transform -rotate-90&quot; viewBox=&quot;0 0 36 36&quot;>
                    <path,
d=&quot;M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831&quot;
                      fill=&quot;none&quot;
                      stroke=&quot;currentColor&quot;
                      strokeWidth=&quot;2&quot;
                      strokeDasharray={`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className=&quot;text-green-500&quot;                    />
                  </svg>
                </div>
                <p className=&quot;text-gray-400&quot;>Good SEO foundation with room for improvement</p>
              </Card>

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
                    <span className=&quot;font-bold text-green-400&quot;>{analysisResults.mobileScore}/100</span>                  </div>
                </div>
              </Card>

              {/* Issues */}
              <Card className=&quot;border-gradient-green&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Issues Found</h3>
                <div className=&quot;space-y-3&quot;>
                  {analysisResults.issues.map(issue, index) => (
                    <div key={index} className=&quot;flex items-start space-x-3&quot;>
                      {issue.type = = 'error' ? (
                        <AlertTriangle className=&quot;w-5 h-5 text-red-400 mt-1 flex-shrink-0&quot; />                      ) : issue.type = = 'warning' ? (
                        <AlertTriangle className=&quot;w-5 h-5 text-yellow-400 mt-1 flex-shrink-0&quot; />
                      ) : (
                        <CheckCircle className=&quot;w-5 h-5 text-blue-400 mt-1 flex-shrink-0&quot; />
                      )}
                      <div>
                        <span className=&quot;text-gray-300&quot;>{issue.message}</span>
                        <div className=&quot;text-xs text-gray-500 mt-1&quot;>Priority: {issue.priority}</div>                      </div>
                    </div>
                  )}
                </div>;
              </Card>;
            </div>;

            {/* Recommendations and Keywords */}
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              <Card className=&quot;border-gradient-green&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Optimization Recommendations</h3>
                <div className=&quot;space-y-3&quot;>
                  {analysisResults.recommendations.map(rec, index) => (
                    <div key={index} className=&quot;flex items-start space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                      <span className=&quot;text-gray-300&quot;>{rec}</span>                    </div>
                  )}
                </div>
              </Card>

              <Card className=&quot;border-gradient-green&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Keyword Opportunities</h3>
                <div className=&quot;space-y-4&quot;>
                  {analysisResults.keywords.map(keyword, index) => (
                    <div key={index} className=&quot;border-b border-gray-700 pb-3 last:border-b-0&quot;>
                      <div className=&quot;flex justify-between items-center mb-2&quot;>
                        <span className=&quot;font-semibold text-white&quot;>{keyword.keyword}</span>
                        <span className=&quot;text-sm text-gray-400&quot;>Volume: {keyword.volume}</span>
                      </div>
                      <div className=&quot;flex justify-between items-center&quot;>
                        <span className=&quot;text-sm text-gray-400&quot;>Difficulty: {keyword.difficulty}</span>
                        <span className={`px-2 py-1 rounded text-xs ${                          keyword.difficulty = = 'low' ? 'bg-green-500/20 text-green-400' :
                          keyword.difficulty = = 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'}`}>
                          {keyword.difficulty}
                        </span>;
                      </div>;
                    </div>;
                  )}
                </div>;
              </Card>;
            </div>;
          </div>;
        </section>;
      )}

      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Simple Pricing
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Choose the SEO analysis plan that best fits your business needs and goals.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricing.map(plan, index) => (              <Card,
key={index}
                className={_`card-hover border-gradient-green ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
                style={_{ animationDelay: `${index * 0.1}s` }
              >
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium&quot;>                      Most Popular
                    </span>
                  </div>
                )}

                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{plan.name}</h3>
                  <div className=&quot;mb-6&quot;>
                    <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                    <span className=&quot;text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map(feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                      {feature}                    </li>
                  )}
                </ul>

                <Button,
href=&quot;/contact&quot;
                  size=&quot;lg&quot;
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}                >
                  Get Started
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              </Card>
            )}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)1px,transparent1px)] bg-[size: 20px20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
      <section className=&quot;section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)1px,transparent1px)] bg-[size:20px20px] opacity-10&quot; />
        <div className=&quot;container-cursor text-center relative z-10&quot;>
          <h2 className=&quot;text-responsive-lg font-bold text-white mb-8 text-shadow-lg&quot;>
            Ready to Improve Your SEO Rankings?
          </h2>
          <p className=&quot;text-responsive-md text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of businesses using our SEO analyzer to improve their search rankings and drive more organic traffic.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button,
href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-green-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button,
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
  )}