'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings} from 'lucide-react';
const ErrorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart},
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
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
      <Helmet>
        <title>Error - Zion Tech Group</title>
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>Error - Zion Tech Group</title>
        <meta name="description" content="Error page." />
        <meta name="keywords" content="error, AI solutions, IT services, business transformation" />
      <Navigation />
      <main className="min-h-screenbg-gradient-to-br from-slate-50 to-blue-50">{/* Hero Section */</main>} <section className="relativepy-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xlmx-auto">
            <div className="text-center">
              <h1 className="text-4xlmd: text-6xl font-bold text-gray-900 mb-6">,</h1>
                Error;
  </
              <p className="text-xltext-gray-600 mb-8 max-w-3xl mx-auto">Error page.</p>
              <div className="flexflex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-blue-600text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">,</button>
                  Get Started;
  </
                <button className="borderborder-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">,</button>
                  Learn More,
  
              </div>
            </div>
        </div>
      </section>
        {/* Features Section */} <section className="py-20px-4 sm: px-6 lg:px-8">,<section>
        <div>
          <div>
            <h2>,</h2>
                Our Services,
  </
              <p className="text-xltext-gray-600 max-w-3xl mx-auto">Discover how our solutions can help transform your business.</p>
        {/* Features Section */}
        <section className="py-20px-4 sm: px-6 lg:px-8">
          </section>< className="$2/>
            <div className="text-center mb-16">
              </div><h2 className="text-3xlmd:text-4xl font-bold text-gray-900 mb-4">
                Our Services,
  
              <p className="text-xltext-gray-600 max-w-3xl mx-auto" /></p>
                Discover how our solutions can help transform your business.
              </p>
            </div>
            <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
                <div key={index}className="bg-whitep-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow">,</div>
                  <div className="flexitems-center mb-4">
                    <feature.icon className="h-8w-8 text-blue-600 mr-3" />
                    <h3 className="text-xlfont-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600mb-4">{feature.description</p>}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}className="flexitems-center text-sm text-gray-600">
                        <CheckCircle className="h-4w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
                    ))}
              ))}
            </div>
        </div>
      </section>
        {/* CTA Section */} <section className="py-20px-4 sm: px-6 lg:px-8 bg-blue-600">,</section>
          <div className="max-w-4xlmx-auto text-center">
            <h2 className="text-3xlmd: text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xltext-blue-100 mb-8">Contact us today to learn more about our services.</p>
            <button className="bg-whitetext-blue-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold">,</button>
              Contact Us;
  </
          </div>
        </section>
      </main>
      <Footer /></Footer>
    </>
  )};

export default ErrorPage;
  </button>
  </h2>
  </button>
  </button>
  </h1>
