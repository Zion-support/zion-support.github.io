import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {BarChart, TrendingUp, Users, DollarSign, Zap, Target, ArrowRight, CheckCircle, Star, Award, Clock, Shield}}from 'lucide-react';
const AIAnalyticsDashboardPage: React.FC = () => {,
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
  ];

      description: 'Monitor KPIs and business objectives with automated alerts.',}}
  ]
  ];];];
const benefits = [
    'Mobile-responsive design';
  ];
const metrics = [
    {label: 'Data Sources', value: '50+', icon: BarChart ,},
    {label: 'Update Frequency', value: 'Real-time', icon: Clock ,},
    {label: 'Accuracy Rate', value: '99.9%', icon: Shield ,},
    {label: 'User Satisfaction', value: '4.9/5', icon: Star ,}]
return(<>)
      <Helmet />
  </>
      <Helmet>
        <title>AI Analytics Dashboard | Zion Tech Group - Real-time Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time visualization, predictive analytics, and custom reporting." />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, real-time analytics, predictive insights, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/analytics-dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}</div>
        <section className="pt-24 pb-16 px-4">
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
                <BarChart className="w-4 h-4" />
                <span>AI Analytics Dashboard</span>
              </li>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text">
                Real-time Business </h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"> Intelligence</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into actionable insights with our AI-powered analytics dashboard. 
                Get real-time visualization, predictive analytics, and custom reporting in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
                  View Demo
                </button>
              </li>
            </li>
          </li>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make data-driven decisions with confidence
              </p>
            </li>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all group"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </li>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </li>
              ))}
            </li>
          </li>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 bg-slate-800/30">
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Platform Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for scale and reliability
              </p>
            </li>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <metric.icon className="w-8 h-8 text-white" />
                  </li>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300">{metric.label}</div>
                </li>
              ))}
            </li>
          </li>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Dashboard</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the difference with our AI-powered analytics platform
              </p>
            </li>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (</div>
                  <div key={index} className="flex items-start space-x-3"></div>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </li>
              <div className="bg-gradient-to-br from-green-600/20 to-cyan-600/20 rounded-lg p-8 border border-green-500/30"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Success Stories</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center space-x-3"></div>
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">"Increased revenue by 40% with better insights"</span>
                  </li>
                  <div className="flex items-center space-x-3"></div>
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">"Reduced reporting time by 80%"</span>
                  </li>
                  <div className="flex items-center space-x-3"></div>
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">"Improved decision making speed by 3x"</span>
                  </li>
                </li>
              </li>
            </li>
          </li>
        <title>AI Analytics Dashboard | Zion Tech Group - Real-time Business Intelligence</title>
              <p>Transform your data into actionable insights with our AI-powered analytics dashboard.;</p>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              ))}
            </div>
          </div>
        </section>
        {/* Metrics Section */} <section className="py-20 px-4">
              <p>Built for scale and reliability;</p>
              </p>
            </div>
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8"></div>,
              {metrics.map((metric, index) => (</div>} <div key={index}className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <metric />
                  <div className="text-3xl font-bold text-white mb-2">{metric.value</div>}</div>
                  <div className="text-gray-300">{metric.label</div>}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */} <section className="py-20 px-4">
              <p>Experience the difference with our AI-powered analytics platform;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8"></div>,
              <div className="space-y-6"></div>
                {benefits.map((benefit, index) => (</div>} <div key={index}className="flex items-start space-x-3"></div>
                    <CheckCircle />
                    <span className="text-gray-300 text-lg">{benefit</span>}</span>
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
        <section className="py-16 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl p-12 border border-green-500/30"></div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI analytics dashboard 
                to make smarter, data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl p-12 border border-green-500/30"></div>
              <h2>Ready to Transform Your Analytics?</h2>
              </h2>
              <p>Join thousands of businesses already using our AI analytics dashboard;</p>
                <button>Schedule Demo;</button>
      </li>

  );
};

export default AIAnalyticsDashboardPage;
