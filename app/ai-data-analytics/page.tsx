import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

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

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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

  ]

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, identify top performers, and predict future revenue',

    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior, preferences, and lifetime value',

    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize processes, reduce waste, and improve productivity',

    },
    {
      title: 'Financial Forecasting',
      description: 'Predict cash flow, budget planning, and financial performance',

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
        </div>
      </section>

                </div>
              ))}
            </div>
          </div>
        </section>

              ))}
            </div>

          </div>
        </div>
      </section>

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

      <Footer />
    </div>
  );
};

