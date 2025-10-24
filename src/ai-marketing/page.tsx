import React from 'react'
import { CheckCircle, Star, Zap, Brain, BarChart, TrendingUp, Target, Users, Helmet } from 'lucide-react';
import { CheckCircle, Star, Brain, Zap, Users, Target, TrendingUp, BarChart, Helmet, Check } from 'lucide-react';
import {CheckCircle, Star, Zap, Brain, BarChart, Target, Users, TrendingUp, Helmet} from 'lucide-react';
import React from 'react';

const AIMarketingPage: React.FC = () => {constaiMarketingServices= [
    {
      title: 'AI-Powered Ad Campaign Optimization',
      description: 'Intelligent ad campaign management with real-time optimization, audience targeting, and budget allocation across all platforms.',
      icon: '🎯',
      price: '$29 9/month',
      features: ['Real-time bid optimization', 'Audience segmentation', 'Cross-platform management', 'Performance analytics', 'A/B testing automation'],
      benefits: ['Increase ROAS by 4 0%', 'Reduce cost per acquisition by 3 5%', 'Save20+ hours/week'],
      marketPrice: '$50 0-1,20 0/month',
      category: 'Advertising',
      technologies: ['Google Ads API', 'Facebook Marketing API', 'Machine Learning', 'Python', 'TensorFlow']
   },
    {title: 'AI Content Generation & SEO',
      description: 'Automated content creation with SEO optimization, keyword research, and performance tracking for blogs, social media, and websites.',
      icon: '✍️',
      price: '$19 9/month',
      features: ['Blog post generation', 'SEO optimization', 'Keyword research', 'Content calendar', 'Performance tracking'],
      benefits: ['Increase organic traffic by 6 0%', 'Generate50+ articles/month', 'Improve search rankings'],
      marketPrice: '$30 0-80 0/month',
      category: 'Content Marketing',
      technologies: ['OpenAI GPT', 'SEMrush API', 'Ahrefs API', 'WordPress', 'Custom AI Models']
   },
    {title: 'AI Social Media Management',
      description: 'Intelligent social media posting, engagement, and analytics with automated content creation and optimal timing.',
      icon: '📱',
      price: '$14 9/month',
      features: ['Automated posting', 'Content generation', 'Engagement optimization', 'Hashtag research', 'Analytics dashboard'],
      benefits: ['Increase engagement by 4 5%', 'Save 1 5 hours/week', 'Grow followers by200%'],
      marketPrice: '$25 0-60 0/month',
      category: 'Social Media',
      technologies: ['Twitter API', 'Instagram API', 'LinkedIn API', 'Hootsuite API', 'Custom AI']
   },
    {title: 'AI Email Marketing Automation',
      description: 'Smart email campaigns with personalization, send-time optimization, and behavioral triggers for maximum engagement.',
      icon: '📧',
      price: '$17 9/month',
      features: ['Behavioral triggers', 'Personalization engine', 'Send-time optimization', 'A/B testing', 'Advanced analytics'],
      benefits: ['Increase open rates by50%', 'Boost click-through rates by35%', 'Reduce unsubscribe rates'],
      marketPrice: '$30 0-70 0/month',
      category: 'Email Marketing',
      technologies: ['SendGrid', 'Mailchimp', 'Klaviyo', 'Machine Learning', 'Customer Data Platform']
   },
    {title: 'AI Customer Journey Mapping',
      description: 'Intelligent customer journey analysis with touchpoint optimization and conversion rate improvement recommendations.',
      icon: '🗺️',
      price: '$24 9/month',
      features: ['Journey visualization', 'Touchpoint analysis', 'Conversion optimization', 'Customer segmentation', 'Predictive modeling'],
      benefits: ['Improve conversion by30%', 'Reduce customer acquisition cost', 'Increase customer lifetime value'],
      marketPrice: '$40 0-1,00 0/month',
      category: 'Customer Experience',
      technologies: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Python', 'Machine Learning']
   },
    {title: 'AI Competitor Analysis & Intelligence',
      description: 'Automated competitor monitoring with pricing analysis, content gap identification, and market trend predictions.',
      icon: '🔍',
      price: '$19 9/month',
      features: ['Competitor monitoring', 'Pricing analysis', 'Content gap analysis', 'Market trends', 'Alert system'],
      benefits: ['Stay ahead of competitors', 'Identify market opportunities', 'Optimize pricing strategy'],
      marketPrice: '$35 0-80 0/month',
      category: 'Competitive Intelligence',
      technologies: ['Web Scraping', 'Price Intelligence APIs', 'Natural Language Processing', 'Data Visualization']
   },
    {title: 'AI Lead Scoring & Qualification',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and optimize sales processes.',
      icon: '🎯',
      price: '$22 9/month',
      features: ['Lead scoring models', 'Behavioral analysis', 'Predictive analytics', 'CRM integration', 'Sales forecasting'],
      benefits: ['Increase qualified leads by50%', 'Improve sales efficiency', 'Reduce lead response time'],
      marketPrice: '$40 0-90 0/month',
      category: 'Lead Generation',
      technologies: ['Salesforce', 'HubSpot', 'Pipedrive', 'Machine Learning', 'Predictive Analytics']
   },
    {title: 'AI Video Marketing Automation',
      description: 'Automated video creation, editing, and optimization for social media, ads, and content marketing campaigns.',
      icon: '🎬',
      price: '$29 9/month',
      features: ['Video generation', 'Auto-editing', 'Thumbnail optimization', 'Caption generation', 'Performance analytics'],
      benefits: ['Create videos10x faster', 'Increase engagement by60%', 'Reduce production costs'],
      marketPrice: '$50 0-1,50 0/month',
      category: 'Video Marketing',
      technologies: ['OpenAI DALL-E', 'Runway ML', 'FFmpeg', 'Computer Vision', 'Video Processing']
   },
    {title: 'AI Influencer Marketing Platform',
      description: 'AI-powered influencer discovery, campaign management, and performance tracking for authentic brand partnerships.',
      icon: '🌟',
      price: '$19 9/month',
      features: ['Influencer discovery', 'Audience analysis', 'Campaign management', 'Performance tracking', 'ROI optimization'],
      benefits: ['Find perfect influencers', 'Increase campaign ROI by40%', 'Streamline collaboration'],
      marketPrice: '$35 0-80 0/month',
      category: 'Influencer Marketing',
      technologies: ['Instagram API', 'TikTok API', 'YouTube API', 'Social Listening', 'Machine Learning']
   },
    {title: 'AI Marketing Attribution & Analytics',
      description: 'Advanced marketing attribution modeling with multi-touch analysis and ROI optimization recommendations.',
      icon: '📊',
      price: '$24 9/month',
      features: ['Multi-touch attribution', 'ROI analysis', 'Channel optimization', 'Predictive modeling', 'Custom dashboards'],
      benefits: ['Optimize marketing spend', 'Increase ROI by35%', 'Make data-driven decisions'],
      marketPrice: '$40 0-1,20 0/month',
      category: 'Marketing Analytics',
      technologies: ['Google Analytics 4', 'Ado be Analytics', 'Mixpanel', 'Python', 'Statistical Modeling']
   },
    {title: 'AI Voice Search Optimization',
      description: 'Optimize content and campaigns for voice search with natural language processing and conversational AI.',
      icon: '🎤',
      price: '$17 9/month',
      features: ['Voice search optimization', 'Conversational content', 'Local SEO', 'Featured snippets', 'Performance tracking'],
      benefits: ['Capture voice search traffic', 'Improve local visibility', 'Stay ahead of trends'],
      marketPrice: '$30 0-70 0/month',
      category: 'Voice Marketing',
      technologies: ['Google Assistant API', 'Amazon Alexa', 'Natural Language Processing', 'Local SEO Tools']
   },
    {title: 'AI Marketing Personalization Engine',
      description: 'Real-time personalization of marketing messages, offers, and experiences based on user behavior and preferences.',
      icon: '🎨',
      price: '$29 9/month',
      features: ['Real-time personalization', 'Dynamic content', 'Behavioral targeting', 'A/B testing', 'Performance optimization'],
      benefits: ['Increase conversion by45%', 'Improve user experience', 'Boost customer engagement'],
      marketPrice: '$50 0-1,50 0/month',
      category: 'Personalization',
      technologies: ['Customer Data Platform', 'Real-time APIs', 'Machine Learning', 'A/B Testing Tools']
    }
  ]
  const categories = [...new Set(aiMarketingServices.map(service => service.category))]
  return (
    <>
      <Helmet>
        <title>AI Marketing Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered marketing solutions including ad optimization, content generation, social media management, and customer journey mapping." />
        <meta name="keywords" content="AI marketing, marketing automation, ad optimization, content generation, social media AI, email marketing AI" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50"></div>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20"></section>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Marketing Solutions</h1>
              <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
                Transform your marketing with cutting-edge AI technology that automates, optimizes, and scales your campaigns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
                  Start AI Marketing</button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
                  View Case Studies</button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose AI Marketing?
              </h2>
              <p className="text-xl text-gray-600">
                Revolutionary AI technology that transforms traditional marketing into intelligent, data-driven campaigns</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Target className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Targeting</h3>
                <p className="text-gray-600">AI identifies and targets your ideal customers with 95% accuracy</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI improvement within 90 days</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Optimization</h3>
                <p className="text-gray-600">Continuous campaign optimization for maximum performance</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Automation</h3>
                <p className="text-gray-600">Automate complex marketing tasks with AI decision-making</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50"></section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions</h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} services powered by state-of-the-art AI technology</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {aiMarketingServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold"></div>
                          Save up to 60% vs market rates
                        </div>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2"></div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                        Get Marketing Consultation</button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* AI Marketing Capabilities */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Marketing Capabilities</h2>
              <p className="text-xl text-gray-600">
                Cutting-edge AI technologies that revolutionize how you approach marketing</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div>
                <Target className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Predict customer behavior and optimize campaigns before launch</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg"></div>
                <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Optimization</h3>
                <p className="text-gray-600">Continuously optimize campaigns based on real-time performance data</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Segmentation</h3>
                <p className="text-gray-600">AI-powered customer segmentation for hyper-personalized campaigns</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div>
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Language Processing</h3>
                <p className="text-gray-600">Generate compelling content and understand customer sentiment</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div>
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated A/B Testing</h3>
                <p className="text-gray-600">Intelligent testing that finds winning variations faster</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"></div>
                <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Forecasting</h3>
                <p className="text-gray-600">Predict campaign performance and budget allocation for maximum ROI</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Revolutionize Your Marketing?
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Contact our AI marketing experts for a free consultation and custom strategy development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950</a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-8 text-sm text-pink-200"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}
export default AIMarketingPage;
   }
  ];
  constcategories= [...new Set(aiMarketingServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>AI Marketing Services - ZionTechGroup</titl><metaname="description"content="Revolutionary AI-powered marketing solutions including ad optimization, content generation, social media management, and customer journeymapping." /><metaname="keywords"content="AI marketing, marketing automation, ad optimization, content generation, social media AI, email marketingAI" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-pink-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-pink-600to-rose-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">AI-Powered Marketing Solutions</h><spanclassName="text-xlmd:text-2 xl mb-8 text-pink-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-pink-100max-w-3xlmx-auto">Transform your marketing with cutting-edge AI technology that automates, optimizes, and scales your campaigns</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-pink-600px-8 py-3 rounded-lg font-semiboldhover:bg-pink-50transition-colors"></className="bg-white text-pink-600px-8 py-3 rounded-lg font-semiboldhover:bg-pink-50transition-colors">Start AI Marketing</butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-pink-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-pink-600transition-colors">View Case Studies</butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose AI Marketing?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Revolutionary AI technology that transforms traditional marketing into intelligent, data-driven campaigns</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-pink-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><TargetclassName="w-8 h-8text-pink-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">PrecisionTargeting</h><pclassName="text-gray-600">AI identifies and targets your ideal customerswith95%accuracy</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><TrendingUpclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ProvenROI</h><pclassName="text-gray-600">Average300% ROI improvementwithin90days</p></di><divclassName="text-center"><divclassName="bg-blue-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">Real-timeOptimization</h><pclassName="text-gray-600">Continuous campaign optimization formaximumperformance</p></di><divclassName="text-center"><divclassName="bg-purple-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><BrainclassName="w-8 h-8text-purple-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">IntelligentAutomation</h><pclassName="text-gray-600">Automate complex marketing tasks withAIdecision-making</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Solutions</h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Advanced {category.toLowerCase()} services powered by state-of-the-art AI technology</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{aiMarketingServices;
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-pink-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to60% vs market rates</di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                         <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                          </l>))}
                      </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                          <key={techIndex}className="bg-pink-100text-pink-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-pink-100text-pink-800text-xs px-2py-1rounded">{tech}
                          </spa>))}
                      </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                         <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                          </l>))}
                      </u></di><spanclassName="w-full bg-pink-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-pink-700transition-colors"></spa></className="w-full bg-pink-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-pink-700transition-colors">Get Marketing Consultation</butto></di>))}
            </di></di></sectio>))}
        {/* AI MarketingCapabilities */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">AI Marketing Capabilities</h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Cutting-edge AI technologies that revolutionize how you approach marketing</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-pink-50to-rose-100rounded-lg"><TargetclassName="w-12h-1 2text-pink-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">PredictiveAnalytics</h><pclassName="text-gray-600">Predict customer behavior and optimize campaignsbeforelaunch</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-indigo-100rounded-lg"><BarChartclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">Real-timeOptimization</h><pclassName="text-gray-600">Continuously optimize campaigns based on real-timeperformancedata</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><UsersclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">CustomerSegmentation</h><pclassName="text-gray-600">AI-powered customer segmentation forhyper-personalizedcampaigns</p></di><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-violet-100rounded-lg"><BrainclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">NaturalLanguageProcessing</h><pclassName="text-gray-600">Generate compelling content and understandcustomersentiment</p></di><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-amber-100rounded-lg"><ZapclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">AutomatedA/BTesting</h><pclassName="text-gray-600">Intelligent testing that finds winningvariationsfaster</p></di><divclassName="text-center p-6 bg-gradient-to-br from-indigo-50to-blue-100rounded-lg"><TrendingUpclassName="w-12h-1 2text-indigo-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">PerformanceForecasting</h><pclassName="text-gray-600">Predict campaign performance and budget allocation formaximumROI</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-pink-600to-rose-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Revolutionize Your Marketing?
          </h><spanclassName="text-xl mb-8text-pink-100"></spa></className="text-xl mb-8text-pink-100">Contact our AI marketing experts for a free consultation and custom strategy development</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-pink-600px-8 py-3 rounded-lg font-semiboldhover:bg-pink-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-pink-600transition-colors"
              >✉️ kleber@ziontechgroup.com</a></di><divclassName="mt-8 text-smtext-pink-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di></>
  );
};
export default AIMarketingPage;
