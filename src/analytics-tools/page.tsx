import React from 'react'
import { CheckCircle, Phone, Mail, Helmet } from 'lucide-react'
import { MapPin } from 'lucide-react'
import React from 'react';
import { CheckCircle, Phone, Mail, Star, Brain, Target, TrendingUp, BarChart, Helmet, MapPin, Check } from 'lucide-react';

constAnalyticsToolsPage: React.FC= () =>{constanalyticsTools= [
    {
      title: 'AI Business Intelligence',
      price: '$39 9/month',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '📊',
      category: 'Business Intelligence'
   },
    {title: 'AI Web Analytics',
      price: '$29 9/month',
      description: 'Comprehensive web analytics with AI-powered insights and user behavior analysis.',
      features: ['User behavior tracking', 'Conversion analysis', 'Traffic insights', 'Performance metrics', 'Custom events', 'Real-time monitoring'],
      icon: '🌐',
      category: 'Web Analytics'
   },
    {title: 'AI Marketing Analytics',
      price: '$24 9/month',
      description: 'Marketing performance analytics with AI-powered optimization recommendations.',
      features: ['Campaign tracking', 'ROI analysis', 'Attribution modeling', 'Customer journey', 'Channel performance', 'Predictive insights'],
      icon: '📈',
      category: 'Marketing Analytics'
   },
    {title: 'AI Sales Analytics',
      price: '$19 9/month',
      description: 'Sales performance analytics with AI-powered forecasting and optimization.',
      features: ['Sales forecasting', 'Pipeline analysis', 'Performance tracking', 'Lead scoring', 'Conversion optimization', 'Revenue insights'],
      icon: '💰',
      category: 'Sales Analytics'
   },
    {title: 'AI Customer Analytics',
      price: '$17 9/month',
      description: 'Customer behavior analytics with AI-powered insights and personalization.',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Engagement tracking', 'Personalization insights'],
      icon: '👥',
      category: 'Customer Analytics'
   },
    {title: 'AI Financial Analytics',
      price: '$34 9/month',
      description: 'Financial performance analytics with AI-powered insights and risk assessment.',
      features: ['Financial reporting', 'Risk analysis', 'Budget tracking', 'Cost optimization', 'Revenue analysis', 'Predictive modeling'],
      icon: '💳',
      category: 'Financial Analytics'
    }
  ]
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive analytics and AI insights'
   },
    {icon: Target,
      title: 'Predictive Insights',
      description: 'Anticipate trends and opportunities with AI-powered predictions'
   },
    {icon: BarChart,
      title: 'Real-Time Monitoring',
      description: 'Track performance in real-time with live dashboards and alerts'
   },
    {icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage advanced AI algorithms for deeper insights and automation'
    }
  ]
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
=======
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Helmet>
        <title>Analytics Tools - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;AI-powered analytics tools for business intelligence, web analytics, marketing analytics, and more. Starting at $179/month.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;analytics tools, business intelligence, web analytics, marketing analytics, sales analytics, ai analytics&quot; />
      </Helmet>
      {/* Hero Section */}
      <section className=&quot;pt-24 pb-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
          <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6&quot;>
            AI Analytics Tools
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
            Transform your data into actionable insights with AI-powered analytics tools for business intelligence, marketing, and performance tracking.
          </p>
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;></div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>6</div>
              <div className=&quot;text-gray-300&quot;>Analytics Tools</div>
            </div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>$179</div>
              <div className=&quot;text-gray-300&quot;>Starting Price</div>
            </div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>95%</div>
              <div className=&quot;text-gray-300&quot;>Accuracy</div>
            </div>
            <div className=&quot;bg-white/10 backdrop-blur-sm rounded-lg p-6&quot;></div>
              <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>Real-time</div>
              <div className=&quot;text-gray-300&quot;>Monitoring</div>
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
      {/* Analytics Tools Grid */}
      <section className=&quot;py-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
            Our Analytics Tools
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {analyticsTools.map((tool, index) => (
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
                    Get Started
                  </a>
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
            Why Choose Our Analytics Tools?
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
            Ready to Unlock Your Data?
          </h2>
          <p className=&quot;text-xl text-purple-100 mb-8&quot;>
            Get started with our AI analytics tools today and transform your data into actionable insights.
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
              Email Us
            </a>
          </div>
        </div>
      </section>
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
    </div>
  )
}
export default AnalyticsToolsPage
