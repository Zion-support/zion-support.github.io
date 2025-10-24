'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const LoadingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      
    {icon: BarChart},
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
  return (<React.Fragment>
      <Helmet />
    }]
  return (
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <>

      <Navigation />
      <main className="min-h-screenbg-gradient-to-brfrom-slate-50 to-blue-50">{/* Hero Section */</main>} <section className="relativepy-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7 xl mx-auto">
            <div className="text-center">
              <h1>
                Loading;
  </
              <p className="text-xltext-gray-600 mb-8 max-w-3 xl mx-auto">Loading page.</p>
              <div>
                <button className="bg-blue-600 text-whitepx-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">,</button>
                  Get Started;
  </
                <button className="borderborder-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">,</button>
                  Learn More,
  
              </div>
            </div>
        </div>
      </section>
        {/* Features Section */} <section className="py-20 px-4 sm:px-6 lg:px-8">,<section>
        <div>
          <div>
            <h2>,</h2>
                Our Services,
  </
              <p className="text-xltext-gray-600 max-w-3 xlmx-auto">Discover how our solutions can help transform your business.</p>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section>
        <div className="text-center mb-16">
              </div><h2 className="text-3 xlmd:text-4 xl font-boldtext-gray-900 mb-4">
                Our Services,
  
              <p className="text-xltext-gray-600 max-w-3 xlmx-auto" /></p>
                Discover how our solutions can help transform your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div>
                  <div className="flexitems-centermb-4">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xlfont-semiboldtext-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}className="flexitems-centertext-smtext-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
                    ))}
              ))}
            </div>
        </div>
      </section>
        {/* CTA Section */} <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">,</section>
          <div className="max-w-4 xlmx-autotext-center">
            <h2 className="text-3 xlmd:text-4 xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xltext-blue-100 mb-8">Contact us today to learn more about our services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-whitetext-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};

export default LoadingPage;
          </div>
        </section>
      </main>
      <Footer /></Footer>
    </>
  )};

export default LoadingPage;
  </button>
  </h2>
  </button>
  </button>
  </h1>
