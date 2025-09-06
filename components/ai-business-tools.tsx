import React from 'react'
import Head from 'next/head'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { 
  Brain,
  MessageSquare, 
  Image, 
  Video, 
  FileText, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight,
  Star,
  Check,
  ExternalLink,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react',
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function AIBusinessToolsPage() {_const _aiTools = [
    {
      name: 'ChatGPT',
      description: 'Advanced AI language model that can help with writing, analysis, coding, and creative tasks. Perfect for content creation and problem-solving.',
      category: 'AI Assistant',
      pricing: 'Free - $20/month',
      rating: 4.8,
      users: '100M+',
      icon: <Brain className=&quot;w-8 h-8 text-green-400&quot; />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Natural language processingCode generation & debuggingContent creationData analysisCreative writingMulti-language support'
      ],
      website: 'https://chat.openai.com',
      useCase: 'Ideal for writers, developers, researchers, and anyone who needs AI assistance with complex tasks.',
      pros: ['Powerful capabilitiesEasy to useRegular updatesGood free tier'],
      cons: ['Sometimes inaccurateLimited contextPrivacy concerns'],
      bestFor: 'Content creators, developers, researchers'
    },
    {
      name: 'Midjourney',
      description: 'AI-powered image generation tool that creates stunning artwork, illustrations, and designs from text descriptions.',
      category: 'AI Art',
      pricing: '$10 - $30/month',
      rating: 4.7,
      users: '1M+',
      icon: <Image className=&quot;w-8 h-8 text-purple-400&quot; />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      features: [
        'Text-to-image generationHigh-resolution outputArtistic stylesCommercial usage rightsCommunity featuresDiscord integration'
      ],
      website: 'https://midjourney.com',
      useCase: 'Perfect for designers, marketers, content creators, and businesses needing custom visual content.',
      pros: ['High-quality outputCreative controlCommercial rightsActive community'],
      cons: ['Discord-only interfaceLimited customizationMonthly subscription'],
      bestFor: 'Designers, marketers, content creators'
    },
    {
      name: 'Jasper',
      description: 'AI writing assistant that helps create marketing copy, blog posts, social media content, and more.',
      category: 'AI Writing',
      pricing: '$39 - $125/month',
      rating: 4.6,
      users: '100K+',
      icon: <FileText className=&quot;w-8 h-8 text-blue-400&quot; />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Marketing copy generationBlog post writingSocial media contentSEO optimizationBrand voice trainingTeam collaboration'
      ],
      website: 'https://jasper.ai',
      useCase: 'Essential for marketing teams, content creators, and businesses that need high-quality written content at scale.',
      pros: ['Specialized for marketingBrand voice trainingSEO optimizationTeam features'],
      cons: ['ExpensiveLimited free trialCan be repetitive'],
      bestFor: 'Marketing teams, content creators, businesses'
    },
    {
      name: 'Synthesia',
      description: 'AI video generation platform that creates professional videos with AI avatars and voice synthesis.',
      category: 'AI Video',
      pricing: '$30 - $89/month',
      rating: 4.5,
      users: '50K+',
      icon: <Video className=&quot;w-8 h-8 text-red-400&quot; />,
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      features: [
        'AI avatar generationText-to-speechVideo templatesMulti-language supportCustom brandingAPI access'
      ],
      website: 'https://synthesia.io',
      useCase: 'Perfect for creating training videos, marketing content, and presentations without hiring actors or video crews.',
      pros: ['Professional qualityMultiple languagesCustom avatarsEasy to use'],
      cons: ['Limited avatar optionsExpensiveSubscription required'],
      bestFor: 'Training departments, marketers, educators'
    },
    {
      name: 'Copy.ai',
      description: 'AI copywriting tool that generates marketing copy, product descriptions, and creative content for businesses.',
      category: 'AI Copywriting',
      pricing: 'Free - $49/month',
      rating: 4.4,
      users: '200K+',
      icon: <MessageSquare className=&quot;w-8 h-8 text-orange-400&quot; />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        'Marketing copy generationProduct descriptionsSocial media postsEmail campaignsBlog contentFree tier available'
      ],
      website: 'https://copy.ai',
      useCase: 'Great for small businesses, entrepreneurs, and marketers who need quality copy without hiring writers.',
      pros: ['Free tierEasy to useGood templatesAffordable'],
      cons: ['Limited customizationQuality variesBasic features'],
      bestFor: 'Small businesses, entrepreneurs, marketers'
    },
    {
      name: 'Grammarly',
      description: 'AI-powered writing assistant that checks grammar, spelling, tone, and style to improve your writing.',
      category: 'AI Writing',
      pricing: 'Free - $12/month',
      rating: 4.7,
      users: '30M+',
      icon: <Check className=&quot;w-8 h-8 text-green-400&quot; />,
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      features: [
        'Grammar & spelling checkTone analysisStyle suggestionsPlagiarism detectionBrowser extensionMobile apps'
      ],
      website: 'https://grammarly.com',
      useCase: 'Essential for anyone who writes professionally, including students, professionals, and content creators.',
      pros: ['Excellent accuracyMultiple platformsFree tierUser-friendly'],
      cons: ['Limited free featuresPrivacy concernsCan be overzealous'],
      bestFor: 'Students, professionals, content creators'
    },
    {
      name: 'Lumen5',
      description: 'AI video maker that transforms text content into engaging videos for social media and marketing.',
      category: 'AI Video',
      pricing: 'Free - $79/month',
      rating: 4.3,
      users: '100K+',
      icon: <Video className=&quot;w-8 h-8 text-blue-400&quot; />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [
        'Text-to-video conversionVideo templatesMusic libraryBrand customizationSocial media formatsFree tier available'
      ],
      website: 'https://lumen5.com',
      useCase: 'Perfect for marketers, social media managers, and businesses that want to create video content from existing text.',
      pros: ['Free tierEasy to useGood templatesAffordable'],
      cons: ['Limited customizationBasic featuresWatermark on free'],
      bestFor: 'Marketers, social media managers, small businesses'
    },
    {
      name: 'Surfer SEO',
      description: 'AI-powered SEO tool that helps optimize content for search engines using data-driven insights.',
      category: 'AI SEO',
      pricing: '$59 - $199/month',
      rating: 4.6,
      users: '25K+',
      icon: <TrendingUp className=&quot;w-8 h-8 text-green-400&quot; />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Content optimizationKeyword researchCompetitor analysisSERP analysisContent editorRank tracking'
      ],
      website: 'https://surferseo.com',
      useCase: 'Essential for content marketers, SEO specialists, and businesses that want to improve their search rankings.',
      pros: ['Data-driven insightsContent optimizationCompetitor analysisGood support'],
      cons: ['ExpensiveComplex interfaceSteep learning curve'],
      bestFor: 'SEO specialists, content marketers, businesses'
    }
  ],

  const _filteredTools = selectedCategory === 'All' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory),

  return (
    <>
      <Head>
        <title>AI Business Tools - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover the best AI-powered business tools for automation, content creation, and productivity. Expert-curated selection of AI SaaS services.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Business Tools - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Expert-curated selection of AI-powered business tools and SaaS services.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]&quot; />
        </div>

        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20&quot; />

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-20 animate-fade-in&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 animate-scale-in&quot;>
                <Brain className=&quot;w-4 h-4 mr-2&quot; />
                AI-Powered Business Solutions
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight&quot;>
              AI Business Tools
            </h1>
            <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light&quot;>
              Transform your business with cutting-edge AI tools. 
              Expert-curated selection of the best AI-powered SaaS services for modern enterprises.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
              <Button
                href=&quot;#tools&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in shadow-2xl shadow-green-500/25 hover:shadow-green-500/40&quot;
                style={{ animationDelay: '0.2s' }}
              >
                Explore AI Tools
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Button>
              <Button
                href=&quot;/contact&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5&quot;
                style={{ animationDelay: '0.4s' }}
              >
                Get AI Consultation
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300&quot;>
                {aiTools.length}+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>AI Tools</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300&quot;>
                7
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Categories</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300&quot;>
                4.6+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Avg Rating</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300&quot;>
                130M+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Total Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
                key={category}
                onClick={_() => setSelectedCategory(category)}
                className={_`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id=&quot;tools&quot; className=&quot;py-24 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              {selectedCategory === 'All' ? 'All AI Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              {selectedCategory === 'All' 
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to enhance your business capabilities.`
              }
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className=&quot;group border border-gray-800 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center justify-between mb-2&quot;>
                      <h3 className=&quot;text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300&quot;>
                        {tool.name}
                      </h3>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span className=&quot;text-sm text-gray-300&quot;>{tool.rating}</span>
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center space-x-4 mb-3 text-sm text-gray-400&quot;>
                      <span className=&quot;px-2 py-1 bg-gray-800 rounded-full&quot;>{tool.category}</span>
                      <span>{tool.users} users</span>
                      <span className=&quot;text-green-400&quot;>{tool.pricing}</span>
                    </div>

                    <p className=&quot;text-gray-400 leading-relaxed mb-4&quot;>
                      {tool.description}
                    </p>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Key Features:</h4>
                      <div className=&quot;grid grid-cols-2 gap-2&quot;>
                        {tool.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className=&quot;flex items-center text-sm text-gray-400&quot;>
                            <Check className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Best For:</h4>
                      <p className=&quot;text-sm text-gray-400&quot;>{tool.bestFor}</p>
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Button
                        href={tool.website}
                        variant=&quot;outline&quot;
                        size=&quot;sm&quot;
                        className=&quot;group-hover:border-green-500 group-hover:text-green-400&quot;
                      >
                        Visit Website
                        <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                      </Button>
                      
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-xs text-gray-500 mb-1&quot;>Use Case:</div>
                        <div className=&quot;text-sm text-gray-300 max-w-xs&quot;>{tool.useCase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className=&quot;py-24 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              Why Choose AI Tools?
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              AI-powered tools are revolutionizing how businesses operate, create content, and serve customers.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600&quot;>
                <Zap className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>10x Productivity</h3>
              <p className=&quot;text-gray-400&quot;>
                AI tools can automate repetitive tasks, generate content, and provide insights that would take humans hours or days to complete.
              </p>
            </Card>

            <Card className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600&quot;>
                <TrendingUp className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>Data-Driven Decisions</h3>
              <p className=&quot;text-gray-400&quot;>
                AI analytics provide deep insights into customer behavior, market trends, and business performance for better decision-making.
              </p>
            </Card>

            <Card className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600&quot;>
                <Users className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>Enhanced Customer Experience</h3>
              <p className=&quot;text-gray-400&quot;>
                AI-powered chatbots, personalization, and automation create seamless, personalized experiences for your customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
            Ready to Transform Your Business with AI?
          </h2>
          <p className=&quot;text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Our AI experts can help you identify the right tools, implement them effectively, and maximize their impact on your business.
          </p>
          <div className="flex flex-col sm: flex-row gap-6 justify-center">
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-green-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Get AI Strategy Session
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/saas-marketplace&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-green-600 shadow-2xl&quot;
            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}