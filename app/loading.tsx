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
      <main className="min-h-screenbg-gradient-to-brfrom-slate-50to-blue-50">{/* Hero Section */</main>} <section className="relativepy-20px-4sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xlmd:text-6xlfont-bold text-gray-900 mb-6">,</h1>
                Loading;
  </
              <p className="text-xltext-gray-600mb-8max-w-3xl mx-auto">Loading page.</p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center">,</div>
                <button className="bg-blue-600text-whitepx-8py-3 rounded-lg hover: bg-blue-700 transition-colors">,</button>
                  Get Started;
  </
                <button className="borderborder-blue-600text-blue-600px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">,</button>
                  Learn More,
  
              </div>
            </div>
        </div>
      </section>
        {/* Features Section */} <section className="py-20px-4sm:px-6 lg:px-8">,<section>
        <div>
          <div>
            <h2>,</h2>
                Our Services,
  </
              <p className="text-xltext-gray-600max-w-3xlmx-auto">Discover how our solutions can help transform your business.</p>
        {/* Features Section */}
        <section className="py-20px-4sm:px-6 lg:px-8">
          </section>< className="$2/><divclass Name="text-center mb-16">
              </div><h2 className="text-3xlmd:text-4xl font-boldtext-gray-900 mb-4">
                Our Services,
  
              <p className="text-xltext-gray-600max-w-3xlmx-auto" /></p>
                Discover how our solutions can help transform your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index}className="bg-whitep-6rounded-xlshadow-lg hover: shadow-xl transition-shadow">,</div>
                  <div className="flexitems-centermb-4">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xlfont-semiboldtext-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600mb-4">{feature.description</p>}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}className="flexitems-centertext-smtext-gray-600">
                        <CheckCircle className="h-4w-4text-green-500mr-2 flex-shrink-0" />
                        {benefit} </li>
                    ))}
              ))}
            </div>
        </div>
      </section>
        {/* CTA Section */} <section className="py-20px-4sm:px-6 lg:px-8 bg-blue-600">,</section>
          <div className="max-w-4xlmx-autotext-center">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xltext-blue-100mb-8">Contact us today to learn more about our services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2h-5w-5" />
                Call Now
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2h-5w-5" />
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
