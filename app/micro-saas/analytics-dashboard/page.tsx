import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart, TrendingUp, Users, DollarSign, Zap, Target, ArrowRight, CheckCircle, Star, Award, Clock, Shield } from 'lucide-react'
const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Live data visualization with instant updates and interactive charts.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Insights',
      description: 'AI-powered forecasting and trend analysis for better decision making.'
    },
    {
      icon: Users,
      title: 'User Behavior Tracking',
      description: 'Comprehensive user analytics and engagement metrics tracking.'
    },
    {
      icon: DollarSign,
      title: 'Revenue Analytics',
      description: 'Detailed financial metrics and revenue optimization insights.'
    },
    {
      icon: Zap,
      title: 'Custom Dashboards',
      description: 'Build personalized dashboards tailored to your business needs.'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Monitor KPIs and business objectives with automated alerts.'
    }
  ]
  const benefits = [
    'Real-time data visualization and reporting',
    'AI-powered predictive analytics',
    'Customizable dashboard widgets',
    'Automated report generation',
    'Multi-platform data integration',
    'Mobile-responsive design'
  ]
  const metrics = [
    { label: 'Data Sources', value: '50+', icon: BarChart },
    { label: 'Update Frequency', value: 'Real-time', icon: Clock },
    { label: 'Accuracy Rate', value: '99.9%', icon: Shield },
    { label: 'User Satisfaction', value: '4.9/5', icon: Star }
  ]
  return (
    <>
      <Head>
        <title>AI Analytics Dashboard | Zion Tech Group - Real-time Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time visualization, predictive analytics, and custom reporting." />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, real-time analytics, predictive insights, Zion Tech Group" />
        <link> </link>Head>
      <div>{/* Hero Section */}</div>
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
                <BarChart className="w-4 h-4" />
                <span>AI Analytics Dashboard</span>
              </div>
              <h1>Real-time Business </h1>
                <span>Intelligence</span>
              </h1>
              <p>Transform your data into actionable insights with our AI-powered analytics dashboard.
                Get real-time visualization, predictive analytics, and custom reporting in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight> </ArrowRight>button>
                <button>View Demo
  </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Powerful Analytics Features</h2>
              <p>Everything you need to make data-driven decisions with confidence
  </p>
            </div>
            <div>{features.map((feature, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all group"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"></div>
                    <feature> </feature>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Metrics Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Platform Performance</h2>
              <p>Built for scale and reliability
  </p>
            </div>
            <div>{metrics.map((metric, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <metric> </metric>div>
                  <div>{metric.value}</div>
                  <div>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Dashboard</h2>
              <p>Experience the difference with our AI-powered analytics platform
  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div>{benefits.map((benefit, index) => (</div>
                  <div key={index} className="flex items-start space-x-3"></div>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-cyan-600/20 rounded-lg p-8 border border-green-500/30"></div>
                <h3>Success Stories</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center space-x-3"></div>
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>"Increased revenue by 40% with better insights"</span>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>"Reduced reporting time by 80%"</span>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>"Improved decision making speed by 3x"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl p-12 border border-green-500/30"></div>
              <h2>Ready to Transform Your Analytics?
              </h2>
              <p>Join thousands of businesses already using our AI analytics dashboard
                to make smarter, data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight> </ArrowRight>button>
                <button>Schedule Demo
  </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default AIAnalyticsDashboardPage
  </button>
  </p>
  </p>
  </p>
  </button>