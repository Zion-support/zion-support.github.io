'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
const ErrorPage: React.FC = () => {
<<<<<<< HEAD
  const features = const features = const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',;
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',;
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'];
=======
  const features = [
    
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: [''Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis''];
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: [''Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: [''Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: [''Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'']
    },
<<<<<<< HEAD
  ];
  return ()
=======
  ];];
  return (
    <>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="Error page." />
        <meta name="keywords" content="error, AI solutions, IT services, business transformation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm: px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center">
              </div></div><h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Error;
  </h1></h1></
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Error page.
              </p></p></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div></div><button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started;
  </button></button></
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More,
  </button></button></
              </div>
            </div>
          </div>
        </section>
      </main>)
    </>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
<<<<<<< HEAD
}, {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" /></h2>
                Our Services,
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" /></p>
=======
} {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services,
  </h2></h2></
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                Discover how our solutions can help transform your business.
              </p></p></p>
            </div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
              {features.map((feature, index) => ()
                    {feature.benefits.map((benefit, benefitIndex) => ()
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div></div><div key=index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  </div></div><div className="flex items-center mb-4">
                    </div></div><feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3></h3></h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p></p></p>)
                  <ul className="space-y-2">)
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key=benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit})
                      </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600" /></section>
          <div className="max-w-4xl mx-auto text-center" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" /></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8" /></p>
              Contact us today to learn more about our services.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold" /></button>
              Contact Us
  </
=======
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">
          </section></section><div className="max-w-4xl mx-auto text-center">
            </div></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2></h2></h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to learn more about our services.
            </p></p></p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Us;
  </button></button></
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          </div>
        </section>
      </main>
      <Footer / /></Footer>
    </>
  ),
};

export default ErrorPage;
  </button>
  </h2>
  </button>
  </button>
  </h1>
