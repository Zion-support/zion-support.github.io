'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, PieChart, Activity } from 'lucide-react';

const AiAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
<<<<<<< HEAD
      title: 'Real-Time Analytics',
      description: 'Get instant insights with real-time data visualization and monitoring.',
=======
      title: 'Real-Time Analytics',;
      description: 'Get instant insights with real-time data visualization and monitoring.',;
>>>>>>> main
      benefits: ['Live dashboards', 'Real-time updates', 'Instant alerts', 'Performance monitoring'],
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to uncover hidden patterns and trends.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Smart recommendations', 'Automated insights'],
    },
    {
      icon: PieChart,
      title: 'Advanced Visualizations',
      description: 'Create stunning charts and graphs to present your data effectively.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Export capabilities', 'Responsive design'],
    },
    {
      icon: Activity,
      title: 'Performance Tracking',
      description: 'Monitor key performance indicators and track business metrics.',
<<<<<<< HEAD
      benefits: ['KPI tracking', 'Goal monitoring', 'Progress reports', 'Trend analysis'],
    }
=======
      benefits: ['KPI tracking', 'Goal monitoring', 'Progress reports', 'Trend analysis']
    },
>>>>>>> main
  ];
  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify opportunities and threats early',
    'Improve operational efficiency by 40%',;
    'Reduce reporting time by 80%',;
    'Gain competitive advantage with insights';
  ];

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        </Helmet><title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time monitoring, predictive analytics, and advanced visualizations." />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, predictive analytics, real-time analytics" />
      </Helmet>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </main></main><section className="relative py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="
            </div><div className="text-center">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Dashboard
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our AI-powered analytics platform. 
                Monitor performance, predict trends, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
=======
  return ()
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
}, {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
>>>>>>> main
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Everything you need to analyze and visualize your data
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  </div><feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      </ul><li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        </li><CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
              {features.map((feature, index) => ()
                    {feature.benefits.map((benefit, benefitIndex) => ()
>>>>>>> main
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
>>>>>>> main
                Why Choose AI Analytics?
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Transform your business with intelligent data analysis
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="flex items-start space-x-4">
                  </div><CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
              {benefits.map((benefit, index) => ()
>>>>>>> main
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
          <div className="max-w-4xl mx-auto text-center" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" /></h2>
>>>>>>> main
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Start analyzing your data with AI-powered insights today.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors" /></button>
>>>>>>> main
                Get Started
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors" /></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </>
  );
};
<<<<<<< HEAD


=======
>>>>>>> main
