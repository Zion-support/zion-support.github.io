<<<<<<< HEAD
import React from 'react';
const EnterprisePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Enterprise Solutions
              </h1>
              <p className="text-xl text-gray-600">
                Advanced AI and IT solutions designed for large organizations
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve
              $100M+ cost savings, 500% productivity gains, and 99.9% system
              uptime with enterprise-grade security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Schedule Enterprise Demo</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
              <a
                href="#solutions"
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-700"
              >
                <span>View Solutions</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  &darr;
                </span>
=======


import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const Pagetsx: React.FC = () => {
  const _features = [];
  return (
    {icon: Users,
    title: 'Advanced Features',
      description: 'Cutting-edge solutions powered by artificial intelligence and machine learning',
      benefits: ['Improved efficiency', 'Better results', 'Cost savings']
    },
    {icon: TrendingUp,
    title: 'Performance Optimization',
      description: 'Optimized performance and scalability for enterprise-grade applications',
      benefits: ['Faster processing', 'Better scalability', 'Enhanced reliability']
    },
    {icon: Shield,
    title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection',
      benefits: ['Data protection', 'Compliance', 'Secure operations']

    }
  ]
  return (<div className="min-h-screen bg-gray-900 text-white"></div>
      <Helmet></Helmet>
        <title>tsx - Zion Tech Group</title>"
        <meta name="description" content="Advanced tsx solutions powered by AI and cutting-edge technology" /></Helmet>
      <Navigation /></Navigation>"
      <main className="pt-20"></main>
        {/* Hero Section */}"
        <section className="py-20 px-4"></section>"
          <div className="max-w-6xl mx-auto text-center"></div>"
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></h1>
              tsx;
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Advanced tsx solutions powered by AI and cutting-edge technology;
            </p>"
            <div className="flex flex-col,"
  sm:flex-row gap-4 justify-center"></div>"
              <a href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg,"
  hover:bg-cyan-600 transition-colors"></a>
                Get Started;
              </a>"
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg,
  hover:bg-cyan-500,"
  hover:text-white transition-colors"></a>
                View Demo;
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_features.map((feature, index) => (}
                <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {feature.benefits.map((benefit, idx) => (}
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />

                        {benefit}
                      </li>)
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <div className="text-center mt-12">
            <a href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Get Started Today
=======
        </section>
        {/* CTA Section */}"
        <section className="py-16 px-4 bg-gray-800"></section>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>"
            <p className="text-gray-300 mb-8">Contact us today for a free consultation and customized solution</p>"
            <a href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg,"
  hover:bg-cyan-600 transition-colors"></a>
              Contact Us;
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
            </a>
          </div>
        </section>
      </main>
      <Footer /></div>
  )
}
export default Pagetsx;"




export default EnterprisePage;


