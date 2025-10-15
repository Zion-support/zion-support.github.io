'use client'";"'";'"
import React from 'react';'';'
import { Link } from 'react-router-dom';'';'
import SEOHead from '../components/SEOHead';'';'
import { 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,;
  DevicePhoneMobileIcon;
} from '@heroicons/react/24/outline'";"'"'"

const AnalyticsDashboardPage: React.FC = () => {
  const features  = ['Real-time data visualization',"'Custom dashboard creation',"'Predictive analytics and forecasting',"'Multi-source data integration',"'Advanced reporting tools',"'Mobile-responsive design',"'API access for custom integrations',"'Automated alerts and notifications',"'Data export capabilities',"'Team collaboration features',"'White-label options',"'24/7 customer support'";"'"'"
  ];

  const pricingPlans  = [
    {name: 'Starter',";"'"'"
      price: '$99',";"'"'"
      period: '/month',";"'"'"
      description: 'Perfect for small businesses',";"'"'"
      features: [
        '5 dashboards',"'Basic data sources',"'Standard reports',"'Email support',"'1 user account'";"'"'"
      ],
      popular: false

        'Unlimited dashboards',"'All data sources',"'Advanced analytics',"'Priority support',"'Up to 10 users',"'API access',"'Custom integrations'";"'"'"
      ],
      popular: true

        'Everything in Pro',"'Unlimited users',"'White-label solution',"'Dedicated support',"'Custom development',"'SLA guarantee',"'On-premise deployment'";"'"'"
      ],
      popular: false

  ]
  return ()
      <SEOHead: title ="Business Analytics Dashboard Pro - Real-time Data Visualization";"></SEOHead>""
        description="Comprehensive business intelligence platform with real-time insights, predictive analytics, and custom reporting. Transform your data into actionable insights.";"""
        keywords="business analytics, data visualization, business intelligence, dashboard, reporting, predictive analytics";"""
      />
      
      <div  className ="min-h-screen bg-slate-900 text-white">""""
        {/* Hero Section */}
                  View Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div: className ="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">";"""
                <div: className ="text-center">";"""
                  <div: className ="text-3xl font-bold text-purple-400 mb-2">50K+</div>";"""
                  <div: className ="text-gray-300">Dashboards Created</div>";"""
                </div>
                <div: className ="text-center">";"""
                <div: className ="text-3xl font-bold text-purple-400 mb-2">200+</div>";"""
                  <div: className ="text-gray-300">Data Sources</div>";"""
                </div>
                <div: className ="text-center">";"""
                  <div: className ="text-3xl font-bold text-purple-400 mb-2">99.9%</div>";"""
                  <div: className ="text-gray-300">Uptime</div>";"""
                </div>
                <div: className ="text-center">";"""
                  <div: className ="text-3xl font-bold text-purple-400 mb-2">150%</div>";"""
                  <div: className ="text-gray-300">ROI Increase</div>";"""
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
              </p>
            </div>
            
            <div  className ="grid grid-cols-1 md=grid-cols-3 gap-8">""""
              {pricingPlans.map((plan, index) => ()
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                    ))}
                  </div>
                  
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'": 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'";"'"'"
                    }`}
                    Get Started
                  </Link>
                </div>
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
