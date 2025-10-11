'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const AiDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Predictive Modeling',
      description: 'Forecast future trends and outcomes with advanced statistical models',
      details: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment', 'Trend Analysis']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources seamlessly',
      details: ['API Integrations', 'Database Connections', 'File Uploads', 'Cloud Storage']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with full compliance and data protection',
      details: ['End-to-End Encryption', 'GDPR Compliance', 'SOC 2 Certified', 'Role-Based Access']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically on your schedule',
      details: ['Scheduled Reports', 'Custom Templates', 'Email Delivery', 'PDF Export']
    }
  ]

const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]
const PagePage: React.FC = () => {
  return (
<></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 1M data points',
        '5 data sources',
        'Basic AI insights',
        'Standard dashboards',
        'Email support',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10M data points',
        'Unlimited data sources',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        '5 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data points',
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ]

  const stats = [
{ value: '40%', label: 'Faster Decision Making', icon: <Clock className="w-8 h-8 text-green-400" /&gt },
    { value: '85%', label: 'Accuracy Improvement', icon: <Target className="w-8 h-8 text-blue-400" /&gt },
    { value: '60%', label: 'Cost Reduction', icon: <DollarSign className="w-8 h-8 text-purple-400" /&gt },
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-8 h-8 text-cyan-400" /&gt }

  ]

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, identify top performers, and predict future revenue',
icon: <TrendingUp className="w-8 h-8 text-green-400" /&gt

    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior, preferences, and lifetime value',
icon: <Users className="w-8 h-8 text-blue-400" /&gt

    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize processes, reduce waste, and improve productivity',
icon: <Zap className="w-8 h-8 text-yellow-400" /&gt

    },
    {
      title: 'Financial Forecasting',
      description: 'Predict cash flow, budget planning, and financial performance',
icon: <DollarSign className="w-8 h-8 text-purple-400" / & gt

    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Chief Data Officer, FinanceFlow',
      content: 'AI Data Analytics helped us identify $2M in cost savings opportunities within the first month.',
      rating: 5,
      company: 'FinanceFlow'
    },
    {
      name: 'Lisa Wang',
      role: 'VP Analytics, RetailMax',
      content: 'The predictive models are incredibly accurate. We can now forecast demand with 95% accuracy.',
      rating: 5,
      company: 'RetailMax'
    },
    {
      name: 'James Rodriguez',
      role: 'Head of BI, TechStart',
      content: 'Implementation was smooth and the insights are game-changing. ROI was achieved in 3 months.',
      rating: 5,
      company: 'TechStart'
    }
  ]

  return (
</div>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
<Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        </main><section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Ai Data Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
</div>

          </div>
        </div>
      </section>

{/* Content Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />

                </div>
              ))}
            </div>
          </div>
        </section>
{/* Benefits Section */}
        </button><section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions ? </h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
<div className="grid grid-cols-1 md : grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="flex items-start space-x-3">
                  </div>
<div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>

              ))}
            </div>
{/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        </section>
<div className="max-w-7xl mx-auto">
          </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              </div>
<div key={index} className="text-center">
                </div>
<div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
<div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
<div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
</div>
        </div>
      </section>

{/* CTA Section */}
<section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
</button>
            </div>
          </div>
        </section>
</div>
      
      <Footer />
    </>
  )
}

                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
export default PagePage;

      <Footer />
    </div>
  );
};

export default AiDataAnalyticsPage;
export default AiDataAnalyticsPage