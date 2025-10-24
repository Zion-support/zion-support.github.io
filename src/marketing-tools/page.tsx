import React from 'react'
import { CheckCircle, Phone, Mail, Helmet } from 'lucide-react'
import { MapPin } from 'lucide-react'
import React from 'react';
import { CheckCircle, Phone, Mail, Star, Target, TrendingUp, Clock, BarChart, Helmet, MapPin, Check } from 'lucide-react';

constMarketingToolsPage: React.FC= () =>{constmarketingTools= [
    {
      title: 'AI Content Generator',
      price: '$19 9/month',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Ad copy creation', 'SEO optimization', 'Multi-language support'],
      icon: '✍️',
      category: 'Content Creation'
   },
    {title: 'AI SEO Optimizer',
      price: '$29 9/month',
      description: 'Advanced SEO analysis and optimization recommendations powered by machine learning.',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance insights'],
      icon: '🔍',
      category: 'SEO'
   },
    {title: 'AI Social Media Manager',
      price: '$24 9/month',
      description: 'Automated social media management with intelligent posting and engagement optimization.',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Trend analysis', 'Multi-platform posting', 'Performance analytics'],
      icon: '📱',
      category: 'Social Media'
   },
    {title: 'AI Email Marketing',
      price: '$17 9/month',
      description: 'Intelligent email marketing campaigns with personalization and automation capabilities.',
      features: ['Email templates', 'Personalization', 'A/B testing', 'Automation workflows', 'Analytics dashboard', 'List management'],
      icon: '📧',
      category: 'Email Marketing'
   },
    {title: 'AI Ad Campaign Manager',
      price: '$39 9/month',
      description: 'Automated ad campaign creation and optimization across multiple platforms.',
      features: ['Campaign creation', 'Bid optimization', 'Audience targeting', 'Performance tracking', 'Budget management', 'ROI analysis'],
      icon: '📊',
      category: 'Advertising'
   },
    {title: 'AI Analytics Dashboard',
      price: '$29 9/month',
      description: 'Comprehensive marketing analytics with AI-powered insights and predictions.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '📈',
      category: 'Analytics'
    }
  ]
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase ROI',
      description: 'Average250% increase in marketing ROI with AI-powered optimization'
   },
    {icon: Clock,
      title: 'Save Time',
      description: 'Reduce marketing tasks by80% with intelligent automation'
   },
    {icon: Target,
      title: 'Better Targeting',
      description: 'Reach the right audience with AI-powered targeting and personalization'
   },
    {icon: BarChart,
      title: 'Data-Driven',
      description: 'Make informed decisions with comprehensive analytics and insights'
    }
  ]
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Helmet>
        <title>Marketing Tools - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;AI-powered marketing tools for content creation, SEO optimization, social media management, and analytics. Starting at $179/month.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;marketing tools, ai marketing, content generation, seo optimization, social media management, email marketing&quot; />
      </Helmet>
      {/* Hero Section */}
      <section className=&quot;pt-24 pb-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
          <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6&quot;>
            AI Marketing Tools
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
            Transform your marketing with AI-powered tools for content creation, SEO optimization, social media management, and analytics.
          </p>
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;></div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>6</div>
              <div className=&quot;text-gray-300&quot;>Marketing Tools</div>
            </div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>$179</div>
              <div className=&quot;text-gray-300&quot;>Starting Price</div>
            </div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>250%</div>
              <div className=&quot;text-gray-300&quot;>Average ROI</div>
            </div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>80%</div>
              <div className=&quot;text-gray-300&quot;>Time Saved</div>
            </div>
          </div>
          {/* Contact Info */}
          <div className=&quot;bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12&quot;></div>
            <div className=&quot;flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8&quot;></div>
              <div className=&quot;flex items-center space-x-2&quot;></div>
                <Phone className=&quot;w-5 h-5&quot; />
                <span className=&quot;text-white font-medium&quot;>+1 302 464 0950</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;></div>
                <Mail className=&quot;w-5 h-5&quot; />
                <span className=&quot;text-white font-medium&quot;>kleber@ziontechgroup.com</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;></div>
                <MapPin className=&quot;w-5 h-5&quot; />
                <span className=&quot;text-white font-medium&quot;>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marketing Tools Grid */}
      <section className=&quot;py-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
            Our Marketing Tools
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {marketingTools.map((tool, index) => (
              <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300&quot;></div>
                <div className=&quot;text-center mb-6&quot;></div>
                  <div className=&quot;text-5xl mb-4&quot;>{tool.icon}</div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{tool.title}</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{tool.description}</p>
                  <div className=&quot;bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block mb-4&quot;></div>
                    {tool.category}
                  </div>
                </div>
                <div className=&quot;mb-6&quot;></div>
                  <h4 className=&quot;font-semibold text-white mb-3&quot;>Features:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;text-center&quot;></div>
                  <div className=&quot;text-2xl font-bold text-cyan-400 mb-4&quot;>{tool.price}</div>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tool.title}`}
                    className=&quot;w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block&quot;
                  >
                    Get Started</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className=&quot;py-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
            Why Choose Our Marketing Tools?
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300&quot;></div>
                <benefit.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{benefit.title}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600&quot;></section>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
            Ready to Transform Your Marketing?
          </h2>
          <p className=&quot;text-xl text-purple-100 mb-8&quot;>
            Get started with our AI marketing tools today and see the difference intelligent automation can make.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors&quot;
            >
              Call (302) 464-0950
            </a>
            <a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              className=&quot;bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors&quot;
            >
              Email Us</a>
          </div>
        </div>
      </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}
export default MarketingToolsPage
