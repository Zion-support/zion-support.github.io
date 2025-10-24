'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PageFixedPage: React.FC = () => {
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      
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
return(<>)
      <Helmet><title>Page Fixed - Zion Tech Group</title>
        <meta />
      </Helmet>
      <Navigation />
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
      
    {
    icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      
    {
    icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}
    ]
return (
    <>

      <Navigation />
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="absoluteinset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relativemax-w-7 xl mx-autotext-center">
            <h1 className="text-5 xlmd:text-7 xlfont-boldtext-white mb-6 leading-tight">
              Page Fixed
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
          <div className="absoluteinset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" /></div>
          <div className="absoluteinset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relativemax-w-7 xl mx-autotext-center"></div>
            <h1>Page Fixed;</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Professional Page Fixed services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>Learn More,</button>
              </button>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
        <section className="relativepy-20 px-4 overflow-hidden">
          <div className="absoluteinset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" />
          <div className="absoluteinset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relativemax-w-7 xl mx-autotext-center">
            <h1 className="text-5 xlmd:text-7 xlfont-boldtext-white mb-6 leading-tight">Page Fixed
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed">
              Advanced page fixed solutions powered by AI technology.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started
              <button className="borderborder-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More
        {/* Features Section */}
        <section className="py-20 px-4">
          </section>
        <div className="text-center mb-16">
              </div><h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
          <div className="max-w-7 xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Cloud Migration?</h2>
              <p>Powerful AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-smrounded-2 xlp-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-brfrom-purple-500 to-blue-600 rounded-2 xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature />
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />

                          {benefit} </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
        </div>
      </section>
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4 xlmd:text-5 xlfont-boldtext-white mb-6">Key Features
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">Powerful AI technology that drives results
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-smrounded-2 xlp-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-brfrom-purple-500 to-blue-600 rounded-2 xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}
                  <p className="text-gray-300 mb-4">{feature.description}
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flexitems-centertext-smtext-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
        {/* CTA Section */}
        <section className="py-20 px-4">
          </section>
        <div className="text-center mb-16">
              </div><h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
            <div className="bg-white/5 backdrop-blur-smrounded-3 xlp-12">
              <h2 className="text-4 xlmd:text-5 xlfont-boldtext-white mb-6">
          <div className="max-w-4 xlmx-autotext-center"></div>
            <div className="bg-white/5 backdrop-blur-smrounded-3 xlp-12"></div>
              <h2>Why Choose Our Cloud Migration?</h2>
              <p>Contact our experts to discuss your requirements and get started today.</p>
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
                Ready to Get Started?
              </h2>
              <p></p>
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center" / /></div>
                <button></button>
                  Contact Us
                </button>
                <button></button>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

  )};

export default PageFixedPage;
