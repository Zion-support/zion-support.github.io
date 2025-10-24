import React from 'react';
import { CheckCircle, Phone, Mail, Helmet } from 'lucide-react';
import { MapPin } from 'lucide-react';
import React from 'react';
import Head from "next/head";
import { Phone, Target, Mail, CheckCircle, Helmet } from 'lucide-react';

constAnalyticsToolsPage: React.FC = () =>{constanalyticsTools= [
    {
      title: 'AI Business Intelligence'
      price: '$39 9/month'
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.'
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting']
      icon: '📊'
      category: 'Business Intelligence'
   }
    {title: 'AI Web Analytics'
      price: '$29 9/month'
      description: 'Comprehensive web analytics with AI-powered insights and user behavior analysis.'
      features: ['User behavior tracking', 'Conversion analysis', 'Traffic insights', 'Performance metrics', 'Custom events', 'Real-time monitoring']
      icon: '🌐'
      category: 'Web Analytics'
   }
    {title: 'AI Marketing Analytics'
      price: '$24 9/month'
      description: 'Marketing performance analytics with AI-powered optimization recommendations.'
      features: ['Campaign tracking', 'ROI analysis', 'Attribution modeling', 'Customer journey', 'Channel performance', 'Predictive insights']
      icon: '📈'
      category: 'Marketing Analytics'
   }
    {title: 'AI Sales Analytics'
      price: '$19 9/month'
      description: 'Sales performance analytics with AI-powered forecasting and optimization.'
      features: ['Sales forecasting', 'Pipeline analysis', 'Performance tracking', 'Lead scoring', 'Conversion optimization', 'Revenue insights']
      icon: '💰'
      category: 'Sales Analytics'
   }
    {title: 'AI Customer Analytics'
      price: '$17 9/month'
      description: 'Customer behavior analytics with AI-powered insights and personalization.'
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Engagement tracking', 'Personalization insights']
      icon: '👥'
      category: 'Customer Analytics'
   }
    {title: 'AI Financial Analytics'
      price: '$34 9/month'
      description: 'Financial performance analytics with AI-powered insights and risk assessment.'
      features: ['Financial reporting', 'Risk analysis', 'Budget tracking', 'Cost optimization', 'Revenue analysis', 'Predictive modeling']
      icon: '💳'
      category: 'Financial Analytics'
    }
  ]
  const benefits = [;
    {
      icon: TrendingUp
      title: 'Data-Driven Decisions'
      description: 'Make informed decisions with comprehensive analytics and AI insights'
   }
    {icon: Target
      title: 'Predictive Insights'
      description: 'Anticipate trends and opportunities with AI-powered predictions'
   }
    {icon: BarChart
      title: 'Real-Time Monitoring'
      description: 'Track performance in real-time with live dashboards and alerts'
   }
    {icon: Brain
      title: 'AI-Powered'
      description: 'Leverage advanced AI algorithms for deeper insights and automation'
    }
  ]
  return ()
    <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <Head>
        <title>Analytics Tools - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
        <meta name="keywords" content="analytics tools, business intelligence, web analytics, marketing analytics, sales analytics, ai analytics" />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24pb-16 p x-4"></section>
        <div className="max-w-7x lmx-auto text-center"></div>
          <h1 className="tex t-4xlsm: text-5xl md:text-6xl font-bold text-white mb-6">
        </div>
            AI Analytics Tools
          </h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto">
        </div>
            Transform your data into actionable insights with AI-powered analytics tools for business intelligence, marketing, and performance tracking.
          </p>
          {/* Stats */}
          <div className="gri dgrid-cols-2 md: grid-cols-4 gap-6 mb-12"></div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-cyan-400 mb-2">6</div>
              <div className="tex t-gray-300">Analytics Tools</div>
            </div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-green-400 mb-2">$179</div>
              <div className="tex t-gray-300">Starting Price</div>
            </div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-purple-400 mb-2">95%</div>
              <div className="tex t-gray-300">Accuracy</div>
            </div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-orange-400 mb-2">Real-time</div>
              <div className="tex t-gray-300">Monitoring</div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="bg-gr adient-to-rfrom-purple-600 to-blue-600 rounded-lg p-6 mb-12"></div>
            <div className="fle xflex-col md: flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"></div>
              <div className="fle xitems-center space-x-2"></div>
                <Phone className="w-5h-5" />
                <span className="tex t-whitefont-medium">+1 302 464 0950</span>
              </div>
              <div className="fle xitems-center space-x-2"></div>
                <Mail className="w-5h-5" />
                <span className="tex t-whitefont-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="fle xitems-center space-x-2"></div>
                <MapPin className="w-5h-5" />
                <span className="tex t-whitefont-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Analytics Tools Grid */}
      <section className="py-16px-4"></section>
        <div className="max-w-7x lmx-auto"></div>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white text-center mb-12 neon-text">
        </div>
            Our Analytics Tools
          </h2>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {analyticsTools.map((tool, index) => ()
              <div key={index} className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"></div>
                <div className="tex t-centermb-6"></div>
                  <div className="tex t-5xlmb-4">{tool.icon}</div>
                  <h3 className="tex t-xlfont-bold text-white mb-2">{tool.title}</h3>
                  <p className="tex t-gray-300text-sm mb-4">{tool.description}</p>
                  <div className="bg-pu rple-100text-purple-800 text-xs px-2 py-1 rounded-full inline-block mb-4"></div>
                    {tool.category}
                  </div>
                </div>
                <div className="mb-6"></div>
                  <h4 className="fon t-semiboldtext-white mb-3">Features: </h4>
                  <ul className="spa ce-y-2">
        </div>
                    {tool.features.map((feature, featureIndex) => ()
                      <li key={featureIndex} className="fle xitems-center text-sm text-gray-300">
        </div>
                        <CheckCircle className="w-4h-4te x t-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tex t-center"></div>
                  <div className="tex t-2xlfont-bold text-cyan-400 mb-4">{tool.price}</div>
                  <a href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tool.title}`}>
                    className="w-ful lbg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: from-cyan-600 hover:to-blue-700 transition-all inline-block"
                  >
        </div>
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16px-4"></section>
        <div className="max-w-7x lmx-auto"></div>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white text-center mb-12 neon-text">
        </div>
            Why Choose Our Analytics Tools?
          </h2>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {benefits.map((benefit, index) => ()
              <div key={index} className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"></div>
                <benefit.icon className="w-12h-12te x t-cyan-400 mx-auto mb-4" />
                <h3 className="tex t-xlfont-bold text-white mb-3">{benefit.title}</h3>
                <p className="tex t-gray-300text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16px-4 b g-gradient-to-r from-purple-600 to-blue-600"></section>
        <div className="max-w-4x lmx-auto text-center"></div>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-6">
        </div>
            Ready to Unlock Your Data?
          </h2>
          <p className="tex t-xltext-purple-100 mb-8">
        </div>
            Get started with our AI analytics tools today and transform your data into actionable insights.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center"></div>
            <a href="tel:+13024640950">
              className="bg-wh itetext-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
        </div>
              Call (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com">
              className="bg-tr ansparentborder-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
        </div>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AnalyticsToolsPage;
